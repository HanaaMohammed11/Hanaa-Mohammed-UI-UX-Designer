import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, ACCENTS, flatImg } from "@/lib/atelier-data";

const dot = { blue: "bg-blue", red: "bg-red", yellow: "bg-yellow", teal: "bg-teal", pink: "bg-pink", green: "bg-green", ink: "bg-[hsl(var(--ink))]" };

export default function ProjectsWindow() {
  const [open, setOpen] = useState(null);
  const p = projects.find((x) => x.id === open);

  return (
    <div className="p-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/60">
        ~/atelier/archive — 4 folders
      </p>
      <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight">
        An archive of questions I tried to answer.
      </h2>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {projects.map((proj) => (
          <button
            key={proj.id}
            onClick={() => setOpen(proj.id)}
            className="flex flex-col items-start gap-1 rounded-lg border-2 border-ink bg-paper p-2.5 text-left chunk-sm transition hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-1.5">
              <span className="text-lg">📁</span>
              <span className={`h-3 w-3 rounded-full border border-ink ${dot[proj.accent]}`} />
            </span>
            <span className="font-display text-base font-bold leading-none">{proj.label}</span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-ink/55">{proj.year}</span>
            <span className="text-[11px] leading-snug text-ink/70">{proj.question}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {p && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-ink/40 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="w-full max-w-md overflow-hidden rounded-lg border-2 border-ink bg-paper chunk"
            >
              <div className={`flex items-center justify-between px-3 py-1.5 ${ACCENTS[p.accent]} border-b-2 border-ink`}>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wide">{p.label}.case</span>
                <button onClick={() => setOpen(null)} className="grid h-5 w-5 place-items-center rounded-full border-2 border-ink bg-paper text-[9px] font-bold hover:bg-red hover:text-paper">✕</button>
              </div>
              <div className="p-4">
                <div className="h-28 overflow-hidden rounded-md border-2 border-ink">
                  <img src={flatImg} alt="Project sketches" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-3 font-display text-lg font-bold italic leading-tight" style={{ color: "hsl(var(--blue))" }}>{p.question}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-ink/55">{p.year} · {p.role}</p>
                <ol className="mt-3 space-y-2">
                  {p.story.map((s, i) => (
                    <li key={s.stage} className="flex gap-2">
                      <span className="font-mono text-[10px] font-bold text-ink/40">0{i + 1}</span>
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-red">{s.stage}</span>
                        <p className="text-[12px] leading-snug text-ink/75">{s.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-3 flex flex-wrap gap-1 border-t-2 border-dashed border-ink/30 pt-2">
                  {p.peek.map((x) => (
                    <span key={x} className="rounded-full border border-ink px-2 py-0.5 font-mono text-[9px] text-ink/65">{x}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}