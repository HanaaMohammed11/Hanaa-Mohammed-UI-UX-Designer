import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { projects, ACCENTS, portraitImg } from "@/lib/workspace-data";
import Sticker from "@/components/workspace/Sticker";
import Annotation from "@/components/workspace/Annotation";

// Project file = the ONLY place the Behance CTA lives.
// Mobile: bottom sheet. Desktop: centered modal.
export default function ProjectFile({ projectId, onClose, reduced }) {
  const p = projects.find((x) => x.id === projectId);
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOpening(false), 900);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!p) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto bg-ink/40 backdrop-blur-md sm:items-center"
      onClick={onClose}>
      
      <AnimatePresence>
        {opening &&
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="pointer-events-none fixed left-1/2 top-4 z-[81] -translate-x-1/2 rounded-md border-2 border-ink bg-yellow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-ink chunk-sm">
          
            ⌖ opening {p.slug}…
          </motion.div>
        }
      </AnimatePresence>

      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={reduced ? { duration: 0.01 } : { type: "spring", stiffness: 220, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="mb-0 max-h-[92vh] w-full overflow-y-auto rounded-t-xl border-2 border-ink bg-paper chunk-lg sm:mb-6 sm:w-[94%] sm:max-w-3xl sm:rounded-xl canvas-scroll">
        
        {/* drag handle (mobile) */}
        <div className="flex justify-center pt-2 sm:hidden">
          <span className="h-1.5 w-10 rounded-full bg-ink/30" />
        </div>

        {/* file header */}
        <div className={`flex items-center justify-between border-b-2 border-ink px-4 py-2 ${ACCENTS[p.accent]}`}>
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 border-ink text-ink bg-[hsl(var(--yellow))]">▣</span>
            <span className="truncate font-mono text-[12px] font-bold uppercase tracking-wide">{p.slug}</span>
            <span className="hidden font-mono text-[9px] uppercase tracking-wide opacity-70 sm:inline">· {p.role}</span>
          </div>
          <button
            onClick={onClose}
            data-cursor="CLOSE"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper text-ink chunk-sm transition hover:bg-red hover:text-paper"
            aria-label="Close file">
            
            <X className="h-4 w-4 text-[hsl(var(--yellow))]" strokeWidth={3} />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          {/* hero strip */}
          <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <div>
              <span className={`inline-block rounded-sm border-2 border-ink px-2 py-0.5 font-mono text-[9px] font-bold uppercase ${ACCENTS[p.accent]}`}>
                {p.category}
              </span>
              <h2 className="mt-2 font-heading text-2xl font-bold text-ink sm:text-3xl">{p.title}</h2>
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{p.subtitle}</p>
              <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-ink/80">{p.description}</p>
            </div>
            <motion.div
              animate={reduced ? {} : { y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="hidden sm:block">
              
              


              
              
            </motion.div>
          </div>

          {/* problem-solving flow */}
          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            {["The Problem", "The Idea", "The Solution", "The Experience"].map((s, i) =>
            <span key={s} className="flex items-center gap-1.5">
                <span className="rounded-sm border-2 border-ink bg-paper px-2 py-1 font-mono text-[9px] font-bold uppercase text-ink chunk-sm">
                  {s}
                </span>
                {i < 3 && <span className="font-mono text-[9px] text-ink/40">→</span>}
              </span>
            )}
          </div>

          {/* metadata grid */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[["Year", p.year], ["Published", p.published], ["Tools", p.tools.join(", ")], ["Views", p.views.toLocaleString()]].map(([k, v]) =>
            <div key={k} className="rounded-md border-2 border-ink bg-muted/40 p-2">
                <div className="font-mono text-[8px] font-bold uppercase tracking-wide text-muted-foreground">{k}</div>
                <div className="font-mono text-[11px] font-bold text-ink">{v}</div>
              </div>
            )}
          </div>

          {p.collaborators &&
          <div className="mt-3 flex items-center gap-2 rounded-md border-2 border-ink bg-red/15 p-2">
              <Sticker label="COLLAB" accent="red" rot={-3} />
              <p className="font-mono text-[11px] text-ink">
                Collaborative project — Hanaa contributed as part of a team:{" "}
                <span className="font-bold">{p.collaborators}</span>.
              </p>
            </div>
          }

          {/* gallery */}
     
<div className="mt-5">
  <div className="mb-2 flex items-center justify-between">
    <h3 className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink">The Experience</h3>
    <Annotation text="this one survived 14 revisions." />
  </div>
  <div className="grid gap-3">
    {p.gallery.map((g, i) => {
 
      const imageSrc = typeof g === "string" && !g.startsWith("http") 
        ? new URL(`../../assets/${g.replace(/^\/?(assets\/|images\/)?/, "")}`, import.meta.url).href
        : g;

      return (
        <div key={i} className="overflow-hidden rounded-md border-2 border-ink bg-muted">
          <img 
            src={imageSrc} 
            alt={`${p.title} preview ${i + 1}`} 
            loading="lazy" 
            className="w-full object-cover" 
          />
        </div>
      );
    })}
  </div>
</div>

          {/* single primary CTA + secondary back */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-ink/30 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) =>
              <span key={t} className="rounded-sm border-2 border-ink bg-paper px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-ink">#{t}</span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 rounded-md border-2 border-ink bg-paper px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wide text-ink chunk-sm transition hover:bg-muted">
                
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={3} /> Back to work
              </button>
              <a
                href={p.behanceUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="VIEW CASE ↗"
                className="flex items-center gap-1.5 rounded-md border-2 border-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wide chunk-sm transition hover:-translate-y-0.5 bg-[hsl(var(--yellow))] text-[hsl(var(--ink))]">
                
                Open Case Study <ArrowRight className="h-3.5 w-3.5" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>);

}