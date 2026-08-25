import React from "react";
import { motion } from "framer-motion";
import { projects, ACCENTS } from "@/lib/workspace-data";
import Frame from "@/components/workspace/Frame";
import Sticker from "@/components/workspace/Sticker";
import Annotation from "@/components/workspace/Annotation";

export default function ProjectsCanvas({ onOpen, onSelect, onNavigate, onHover }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-3 right-2">
        <Annotation text="click a file to open it." />
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
          Work <span className="font-mono text-[12px] font-normal text-muted-foreground">/ 4 files</span>
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate?.("process")}
            data-cursor="PROCESS"
            className="rounded-md border-2 border-ink bg-paper px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink chunk-sm transition hover:bg-teal hover:text-paper hover:-translate-y-0.5 active:translate-y-0">
            
            How I work →
          </button>
          <Sticker label="IN PROGRESS" accent="pink" rot={-4} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {projects.map((p, i) =>
        <motion.button
          key={p.id}
          layout
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, type: "spring", stiffness: 240, damping: 24 }}
          onClick={() => onOpen(p.id)}
          onMouseEnter={() => { onSelect(p.id); onHover?.(p.id); }}
          onMouseLeave={() => onHover?.(null)}
          onFocus={() => onSelect(p.id)}
          data-cursor="OPEN FILE →"
          aria-label={`Open ${p.title} project file`}
          className="group relative block rounded-lg border-2 border-ink bg-paper p-3 text-left chunk transition hover:-translate-y-1 focus-visible:-translate-y-1">
          
            {/* file header */}
            <div className="mb-3 flex items-center justify-between border-b-2 border-ink pb-2">
              <div className="flex items-center gap-2">
                <span className={`grid h-6 w-6 place-items-center rounded-md border-2 border-ink ${ACCENTS[p.accent]}`}>
                  ▣
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink">
                  {p.slug}
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                v{i + 1}.0
              </span>
            </div>

            {/* cover */}
            <div className="relative overflow-hidden rounded-md border-2 border-ink bg-muted">
              <img
              src={p.cover}
              alt={`${p.title} cover`}
              loading="lazy"
              className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            
              <span className="absolute right-1 top-1 rounded border-2 border-ink bg-paper px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-ink">
                {p.year}
              </span>
              {p.collaborators &&
            <span className="absolute left-1 top-1 rounded border-2 border-ink bg-red px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase text-paper">
                  collab
                </span>
            }
            </div>

            {/* meta */}
            <div className="mt-3 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-heading text-lg font-bold leading-tight text-ink">{p.title}</h3>
                <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                  {p.subtitle}
                </p>
              </div>
              <span className={`shrink-0 rounded-sm border-2 border-ink px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase ${ACCENTS[p.accent]}`}>
                {p.category.split(" / ")[0]}
              </span>
            </div>

            <div className="mt-2 flex flex-wrap gap-1">
              {p.tools.slice(0, 3).map((t) =>
            <span
              key={t}
              className="rounded-sm border border-ink/40 bg-muted/50 px-1.5 py-0.5 font-mono text-[9px] text-ink">
              
                  {t}
                </span>
            )}
            </div>
          </motion.button>
        )}
      </div>
    </div>);

}