import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { profile, projects, processSteps, ACCENTS } from "@/lib/workspace-data";

// Contextual inspector — content changes based on what the user is viewing.
// Desktop (lg+): always-visible sidebar. Tablet/mobile: slide-in drawer.
const ARTIFACTS = ["Research", "Insights", "User Flows", "Wireframes", "Iterations", "UI", "Prototype"];
const FILE_LABEL = { home: "hero.fig", about: "about.fig", work: "work.fig", process: "process.fig", playground: "playground.fig", contact: "new_message.fig" };
const SECTION_LABEL = { home: "Hero", about: "About", work: "Work", process: "Process", playground: "Playground", contact: "Contact" };

function Row({ k, v }) {
  return (
    <div className="flex items-baseline justify-between gap-2 border-b border-dashed border-ink/30 py-1">
      <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-muted-foreground">{k}</span>
      <span className="text-right font-mono text-[11px] font-bold text-ink">{v}</span>
    </div>
  );
}

function Shell({ title, accent = "yellow", children }) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between border-b-2 border-ink pb-1">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink">Inspector</span>
        <span className={`rounded-sm border border-ink px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-ink ${ACCENTS[accent] || ACCENTS.yellow}`}>{title}</span>
      </div>
      {children}
    </motion.div>
  );
}

export default function RightPanel({ activePage, selected, onOpenProject, inspectorOpen, onCloseInspector }) {
  const proj = projects.find((p) => p.id === selected);
  let content;

  if (proj) {
    content = (
      <Shell title={proj.slug} accent={proj.accent}>
        <Row k="Project" v={proj.title} />
        <Row k="Type" v={proj.category.split(" / ")[0]} />
        <Row k="Year" v={proj.year} />
        <Row k="Role" v={proj.role} />
        <Row k="Tools" v={proj.tools.join(" · ")} />
        <Row k="Status" v="Published" />
        <div className="mt-1 flex flex-wrap gap-1">
          {proj.tags.map((t) => (
            <span key={t} className="rounded-sm border border-ink/40 bg-muted/50 px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase text-ink">#{t}</span>
          ))}
        </div>
        <button
          onClick={() => onOpenProject?.(proj.id)}
          data-cursor="OPEN FILE →"
          className="mt-2 flex items-center justify-center gap-1.5 rounded-md border-2 border-ink bg-blue px-2 py-2 font-mono text-[10px] font-bold uppercase tracking-wide text-paper chunk-sm transition hover:-translate-y-0.5 active:translate-y-0"
        >
          View Project <ArrowRight className="h-3 w-3" strokeWidth={3} />
        </button>
        <p className="font-mono text-[8px] leading-tight text-muted-foreground">Opens the project file — the case study link lives inside.</p>
      </Shell>
    );
  } else if (activePage === "process") {
    const step = processSteps[0];
    content = (
      <Shell title="Process" accent="teal">
        <Row k="Method" v="Product Design" />
        <Row k="Steps" v={processSteps.length} />
        <Row k="Artifacts" v={ARTIFACTS.length} />
        <Row k="Starting" v={step.title} />
        <div className="mt-1 rounded-md border-2 border-ink bg-muted/40 p-1.5 font-mono text-[9px] leading-tight text-ink">
          {step.note}
        </div>
        <div className="mt-1 flex flex-wrap gap-1">
          {ARTIFACTS.map((a) => (
            <span key={a} className="rounded-sm border border-ink/40 bg-paper px-1 py-0.5 font-mono text-[8px] font-bold uppercase text-ink">{a}</span>
          ))}
        </div>
      </Shell>
    );
  } else if (activePage === "playground") {
    content = (
      <Shell title="Experiment" accent="red">
        <Row k="Type" v="Concept" />
        <Row k="Status" v="Exploration" />
        <Row k="Mode" v="Prototype" />
        <div className="mt-1 rounded-md border-2 border-ink bg-yellow p-1.5 font-mono text-[9px] leading-tight text-ink">
          Scratch space — interactions tested here before they ship.
        </div>
      </Shell>
    );
  } else {
    content = (
      <Shell title="Workspace" accent="yellow">
        <Row k="Current file" v={FILE_LABEL[activePage] || "hero.fig"} />
        <Row k="Section" v={SECTION_LABEL[activePage] || "Home"} />
        <Row k="Canvas" v="28px grid" />
        <Row k="Frames" v={projects.length} />
        <Row k="Status" v="Online" />
        <div className="mt-1 rounded-md border-2 border-dashed border-ink/40 p-1.5 font-mono text-[9px] leading-tight text-muted-foreground">
          Select a project on the canvas to inspect it here.
        </div>
      </Shell>
    );
  }

  return (
    <>
      {/* Desktop: always visible */}
      <aside className="hidden w-56 shrink-0 overflow-y-auto border-l-2 border-ink bg-paper p-2 no-scrollbar lg:block">
        <AnimatePresence mode="wait">{content}</AnimatePresence>
      </aside>

      {/* Tablet/Mobile: slide-in drawer */}
      <AnimatePresence>
        {inspectorOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseInspector}
              className="fixed inset-0 z-40 bg-ink/30 lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-9 bottom-0 z-50 w-72 max-w-[85vw] overflow-y-auto border-l-2 border-ink bg-paper p-3 no-scrollbar lg:hidden canvas-scroll"
            >
              <div className="mb-2 flex items-center justify-between border-b-2 border-ink pb-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink">Inspector</span>
                <button
                  onClick={onCloseInspector}
                  aria-label="Close inspector"
                  data-cursor="CLOSE"
                  className="grid h-6 w-6 place-items-center rounded border-2 border-ink bg-paper chunk-sm transition hover:bg-red hover:text-paper"
                >
                  <X className="h-3 w-3" strokeWidth={3} />
                </button>
              </div>
              <AnimatePresence mode="wait">{content}</AnimatePresence>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}