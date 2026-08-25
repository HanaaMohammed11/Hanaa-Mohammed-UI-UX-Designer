import React, { useState } from "react";
import { motion } from "framer-motion";
import { pages, projects, ACCENTS } from "@/lib/workspace-data";

// Figma-style Pages / Files panel — the primary navigation.
export default function LeftPanel({ activePage, onNavigate, selected, openProject, onOpenFile }) {
  const [pagesOpen, setPagesOpen] = useState(true);

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="hidden w-56 shrink-0 flex-col gap-3 overflow-y-auto border-r-2 border-ink bg-paper p-2 no-scrollbar md:flex">
      
      {/* PAGES */}
      <section>
        <h3 className="mb-1 px-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
          Pages
        </h3>
        <button
          onClick={() => setPagesOpen((o) => !o)}
          className="flex w-full items-center gap-1 rounded px-1.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-ink transition hover:bg-muted/60">
          
          <span className="text-[10px]">{pagesOpen ? "⌄" : "›"}</span>
          <span className="truncate">HANA_WORKSPACE</span>
        </button>
        {pagesOpen &&
        <ul className="mt-0.5 flex flex-col">
            {pages.map((p) => {
            const isActive = activePage === p.id;
            return (
              <li key={p.id}>
                  <button
                  onClick={() => onNavigate(p.id)}
                  data-cursor="OPEN"
                  aria-current={isActive ? "page" : undefined}
                  className={`flex w-full items-center gap-2 rounded py-1 pl-5 pr-1.5 text-left font-mono text-[11px] transition ${
                  isActive ? "bg-yellow text-ink chunk-sm" : "text-ink hover:bg-muted/60"}`
                  }>
                  
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 border-ink ${isActive ? "bg-ink" : "bg-paper"}`} />
                    <span className="font-bold uppercase tracking-wide">{p.label}</span>
                  </button>
                </li>);

          })}
          </ul>
        }
      </section>

      {/* FILES */}
      <section>
        <h3 className="mb-1 px-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Layers

        </h3>
        <ul className="flex flex-col gap-0.5">
          {projects.map((p) => {
            const isActive = openProject === p.id || selected === p.id;
            return (
              <li key={p.id}>
                <button
                  onClick={() => onOpenFile(p.id)}
                  data-cursor="OPEN FILE"
                  className={`flex w-full items-center gap-2 rounded px-1.5 py-1 text-left font-mono text-[11px] transition ${
                  isActive ? "bg-blue text-paper chunk-sm" : "text-ink hover:bg-muted/60"}`
                  }>
                  
                  <span className={`grid h-3 w-3 shrink-0 place-items-center rounded-sm border-2 border-ink ${ACCENTS[p.accent]}`} />
                  <span className="truncate font-bold uppercase tracking-wide">{p.slug}</span>
                </button>
              </li>);

          })}
        </ul>
      </section>

      <div className="mt-auto rounded-md border-2 border-dashed border-ink/40 p-2 font-mono text-[9px] leading-tight text-muted-foreground">
        <span className="font-bold text-ink">Tip</span> — pages navigate the canvas, files open projects.
      </div>
    </motion.aside>);

}