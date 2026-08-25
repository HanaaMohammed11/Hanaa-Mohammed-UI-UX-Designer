"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, ACCENTS } from "@/lib/atelier-data";

const dot = {
  blue: "bg-blue",
  red: "bg-red",
  yellow: "bg-yellow",
  teal: "bg-teal",
  pink: "bg-pink",
  green: "bg-green",
  ink: "bg-[hsl(var(--ink))]",
};

export default function ProjectsWindow() {
  const [open, setOpen] = useState(null);
  const p = projects.find((x) => x.id === open);

  return (
    <div className="p-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/60">
        ~/atelier/archive — {projects.length} projects
      </p>
      <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight">
        An archive of digital experiences and case studies.
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
              <span className={`h-3 w-3 rounded-full border border-ink ${dot[proj.accent] || dot.ink}`} />
            </span>
            <span className="font-display text-base font-bold leading-none">{proj.title}</span>
            <span className="font-mono text-[9px] uppercase tracking-wide text-ink/55">{proj.year}</span>
            <span className="line-clamp-2 text-[11px] leading-snug text-ink/70">{proj.subtitle || proj.description}</span>
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
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg border-2 border-ink bg-paper chunk"
            >

              <div className={`sticky top-0 z-10 flex items-center justify-between px-3 py-1.5 ${ACCENTS[p.accent] || ACCENTS.ink} border-b-2 border-ink`}>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wide">{p.slug || `${p.id}.fig`}</span>
                <button
                  onClick={() => setOpen(null)}
                  className="grid h-5 w-5 place-items-center rounded-full border-2 border-ink bg-paper text-[9px] font-bold hover:bg-red hover:text-paper"
                >
                  ✕
                </button>
              </div>

              <div className="p-4">
         
                <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/55">
                  {p.year} · {p.role}
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-ink/80">{p.description}</p>

         
                <div className="mt-4 space-y-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/60">THE EXPERIENCE / GALLERY</p>
                  {p.gallery && p.gallery.length > 0 ? (
                    p.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="overflow-hidden rounded-md border-2 border-ink bg-paper">
                        <img
                          referrerPolicy="no-referrer"
                          src={imgUrl}
                          alt={`${p.title} preview ${idx + 1}`}
                          className="w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="overflow-hidden rounded-md border-2 border-ink bg-paper">
                      <img
                        referrerPolicy="no-referrer"
                        src={p.cover}
                        alt={p.title}
                        className="w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

        
                <div className="mt-4 flex flex-wrap gap-1 border-t-2 border-dashed border-ink/30 pt-3">
                  {p.tags?.map((tag) => (
                    <span key={tag} className="rounded-full border border-ink px-2 py-0.5 font-mono text-[9px] text-ink/65">
                      #{tag}
                    </span>
                  ))}
                </div>

                {p.behanceUrl && (
                  <a
                    href={p.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center rounded-md border-2 border-ink bg-yellow py-2 font-mono text-[11px] font-bold uppercase transition hover:bg-yellow/80"
                  >
                    Open Case Study ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}