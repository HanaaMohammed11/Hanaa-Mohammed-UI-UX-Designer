import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home as HomeIcon, FolderOpen, Sparkles, Mail, User, Workflow } from "lucide-react";
import { useIsMobile } from "../lib/useIsMobile";
import { useReducedMotion } from "../lib/useReducedMotion";
import { projects } from "../lib/workspace-data";

import TopBar from "../components/workspace/TopBar";
import LeftPanel from "../components/workspace/LeftPanel";
import RightPanel from "../components/workspace/RightPanel";
import ToolDock from "../components/workspace/ToolDock";
import CursorLayer from "../components/workspace/CursorLayer";
import Ja3far from "../components/workspace/Ja3far";

import HeroFrame from "../components/workspace/canvas/HeroFrame";
import AboutCanvas from "../components/workspace/canvas/AboutCanvas";
import ProjectsCanvas from "../components/workspace/canvas/ProjectsCanvas";
import ProjectFile from "../components/workspace/canvas/ProjectFile";
import ProcessCanvas from "../components/workspace/canvas/ProcessCanvas";
import PlaygroundCanvas from "../components/workspace/canvas/PlaygroundCanvas";
import ContactCanvas from "../components/workspace/canvas/ContactCanvas";

const MOBILE_NAV = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Work", icon: FolderOpen },
  { id: "process", label: "Process", icon: Workflow },
  { id: "playground", label: "Play", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Mail },
];

const TAB_TO_PAGE = { home: "home", about: "about", work: "work", process: "process", playground: "playground", contact: "contact" };
const FILE_LABEL = { home: "hero.fig", about: "about.fig", work: "work.fig", process: "process.fig", playground: "playground.fig", contact: "new_message.fig" };
const SECTION_LABEL = { home: "Home", about: "About", work: "Work", process: "Process", playground: "Playground", contact: "Contact" };

export default function Home() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState("home");
  const [selected, setSelected] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const [activeTool, setActiveTool] = useState("select");
  const [clock, setClock] = useState("SAT 19:00");
  const [showGrid, setShowGrid] = useState(true);
  const [canvasZoom, setCanvasZoom] = useState(1);
  const [artifacts, setArtifacts] = useState([]);
  const [hoveringProject, setHoveringProject] = useState(null);
  const [inspectorOpen, setInspectorOpen] = useState(false);

  const activePage = TAB_TO_PAGE[activeTab] || "home";
  const currentFile = FILE_LABEL[activePage] || "hero.fig";
  const currentPageLabel = SECTION_LABEL[activePage] || "Home";

  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      setClock(
        `${days[d.getDay()]} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // Clear artifacts when changing pages
  useEffect(() => {
    setArtifacts([]);
  }, [activePage]);

  const navigate = (pageId) => {
    if (TAB_TO_PAGE[pageId]) {
      setActiveTab(pageId);
      setInspectorOpen(false);
    }
  };

  const openProj = (id) => {
    const p = projects.find((x) => x.id === id);
    if (p) setSelected(id);
    setOpenProject(id);
  };

  const handleToolAction = (toolId) => {
    if (toolId === "grid") {
      setShowGrid((g) => !g);
    } else if (toolId === "zoom") {
      setCanvasZoom((z) => (z === 1 ? 1.25 : 1));
    } else {
      setActiveTool(toolId);
    }
  };

  const handleCanvasToolClick = (e) => {
    if (!["comment", "text", "pen"].includes(activeTool)) return;
    if (e.target.closest("button, a, input, textarea, [data-frame]")) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();

    let artifact;
    if (activeTool === "comment") {
      const comments = ["nice!", "good spot.", "interesting.", "hm, nice."];
      artifact = { id, type: "comment", x, y, text: comments[Math.floor(Math.random() * comments.length)], accent: "yellow" };
    } else if (activeTool === "text") {
      artifact = { id, type: "text", x, y, text: "note to self", accent: "pink" };
    } else if (activeTool === "pen") {
      artifact = { id, type: "pen", x, y, accent: "blue" };
    }

    setArtifacts((prev) => [...prev, artifact]);
    const duration = activeTool === "text" ? 6000 : 4000;
    setTimeout(() => {
      setArtifacts((prev) => prev.filter((a) => a.id !== id));
    }, duration);
  };

  const canvasCursorLabel = () => {
    if (["comment", "text", "pen"].includes(activeTool)) return activeTool.toUpperCase();
    if (activeTool === "hand") return "GRAB";
    if (activeTool === "zoom") return "ZOOM";
    return "CANVAS";
  };

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden bg-desk text-ink">
      <TopBar
        clock={clock}
        onHome={() => navigate("home")}
        currentFile={currentFile}
        currentPageLabel={currentPageLabel}
        onInspector={() => setInspectorOpen(true)}
      />

      <div className="relative flex min-h-0 flex-1">
        <LeftPanel
          activePage={activePage}
          onNavigate={navigate}
          selected={selected}
          openProject={openProject}
          onOpenFile={openProj}
        />

        <main
          className={`relative min-w-0 flex-1 overflow-y-auto overflow-x-hidden canvas-scroll ${showGrid ? "grid-bg" : "bg-desk"}`}
          data-cursor={canvasCursorLabel()}
          onClick={handleCanvasToolClick}
          style={{
            cursor: ["comment", "text", "pen"].includes(activeTool) ? "crosshair" : activeTool === "hand" ? "grab" : undefined,
          }}
        >
          {/* Tool artifacts overlay */}
          <div className="pointer-events-none sticky top-0 z-20" style={{ height: 0 }}>
            <div className="absolute" style={{ left: 0, top: 0, right: 0, height: "100vh" }}>
              <AnimatePresence>
                {artifacts.map((a) => (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ position: "absolute", left: a.x, top: a.y }}
                    className={`rounded-md border-2 border-ink px-2 py-1 font-mono text-[10px] font-bold uppercase text-ink chunk-sm ${
                      a.accent === "yellow" ? "bg-yellow" : a.accent === "pink" ? "bg-pink" : "bg-blue text-paper"
                    }`}
                  >
                    {a.type === "pen" ? "✎" : a.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div
            className="mx-auto w-full max-w-5xl p-4 pb-28 sm:p-6 sm:pb-6"
            style={{ zoom: canvasZoom }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={reduced ? false : { opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
              >
                {activePage === "home" && (
                  <HeroFrame
                    onNavigate={navigate}
                    onSelect={(s) => {
                      setSelected(s);
                      if (s === "projects") setActiveTab("work");
                    }}
                  />
                )}
                {activePage === "about" && <AboutCanvas onSelect={setSelected} />}
                {activePage === "work" && (
                  <ProjectsCanvas
                    onOpen={openProj}
                    onSelect={setSelected}
                    onNavigate={navigate}
                    onHover={setHoveringProject}
                  />
                )}
                {activePage === "process" && <ProcessCanvas />}
                {activePage === "playground" && <PlaygroundCanvas />}
                {activePage === "contact" && <ContactCanvas />}
              </motion.div>
            </AnimatePresence>

            {/* footer signature */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t-2 border-dashed border-ink/30 pt-3 font-mono text-[9px] uppercase tracking-wide text-ink/60">
              <span>hanaa's workspace — built by hand, one frame at a time</span>
              <span>made with too many tabs open ☕</span>
            </div>
          </div>
        </main>

        <RightPanel
          activePage={activePage}
          selected={selected}
          onOpenProject={openProj}
          inspectorOpen={inspectorOpen}
          onCloseInspector={() => setInspectorOpen(false)}
        />
      </div>

      {!isMobile && (
        <ToolDock
          active={activeTool}
          onSelect={handleToolAction}
          isMobile={isMobile}
          showGrid={showGrid}
          canvasZoom={canvasZoom}
        />
      )}

      {/* Ja3far mascot */}
      <Ja3far
        activePage={activePage}
        reduced={reduced}
        hoveringProject={hoveringProject}
        isMobile={isMobile}
      />

      {/* mobile bottom nav */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-stretch border-t-2 border-ink bg-paper">
          {MOBILE_NAV.map((p) => {
            const isActive = activePage === p.id;
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => navigate(p.id)}
                aria-label={p.label}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-1 flex-col items-center gap-0.5 py-1.5 font-mono text-[8px] font-bold uppercase tracking-wide transition ${
                  isActive ? "bg-yellow text-ink" : "text-ink hover:bg-muted/60"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2.5} />
                {p.label}
              </button>
            );
          })}
        </nav>
      )}

      <CursorLayer reduced={reduced} />

      <AnimatePresence>
        {openProject && (
          <ProjectFile projectId={openProject} onClose={() => setOpenProject(null)} reduced={reduced} />
        )}
      </AnimatePresence>
    </div>
  );
}