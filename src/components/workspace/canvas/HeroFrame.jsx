import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/workspace-data";
import Frame from "@/components/workspace/Frame";
import Annotation from "@/components/workspace/Annotation";

// Rotating design questions pinned on the canvas
const THINKING_NOTES = [
"Why does this exist?",
"Where do users get stuck?",
"Can this be simpler?",
"What if we did the opposite?",
"Can it be more human?"];


export default function HeroFrame({ onNavigate, onSelect }) {
  const [noteIdx, setNoteIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setNoteIdx((i) => (i + 1) % THINKING_NOTES.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      <Frame
        title="hero.fig"
        size="W 960 × H 480"
        accent="blue"
        cursorLabel="START HERE"
        onSelect={() => onSelect("hanaa")}>
        
        {/* Top label */}
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-sm border-2 border-ink bg-muted/60 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
            HANA_WORKSPACE
          </span>
          <span className="font-mono text-[9px] text-ink/40">/</span>
          <span className="flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-ink/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red" />
            CURRENTLY THINKING
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
          {/* LEFT — the hook */}
          <div className="flex flex-col justify-center gap-4">
            {/* Availability badge */}
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-sm border-2 border-ink bg-yellow px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wide text-ink chunk-sm">
                <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green" />
                {profile.availability}
              </span>
            </div>

            {/* MAIN HOOK — mature, professional, playful */}
            <h1 className="font-heading font-bold leading-[0.95] text-ink">
              <span className="block text-lg sm:text-xl text-ink/60">{profile.heroLead}</span>
              <div className="my-1 space-y-0.5">
                {profile.heroLines.map((line, i) =>
                <span key={i} className="block text-2xl font-bold text-ink sm:text-3xl md:text-4xl">
                    {line}
                  </span>
                )}
              </div>
              <span className="block text-lg sm:text-xl text-ink/60">{profile.heroBridge}</span>
              {/* The signature phrase — visually stands out */}
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="my-1 inline-block px-3 py-1 text-3xl sm:text-4xl md:text-5xl text-[hsl(var(--ink))] bg-[hsl(var(--yellow))]"
                data-cursor="WHAT IF?">
                
                {profile.heroHighlight}
              </motion.span>
              <span className="block text-lg sm:text-xl text-ink/60">{profile.heroInto}</span>
              <span className="block text-2xl font-bold text-ink sm:text-3xl md:text-4xl">
                {profile.heroCloser}
              </span>
            </h1>

            {/* identity badges */}
            <div className="flex flex-wrap gap-1.5">
              {profile.roles.map((r) =>
              <span
                key={r}
                className="rounded-sm border-2 border-ink bg-paper px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wide text-ink chunk-sm">
                
                  {r}
                </span>
              )}
            </div>

            {/* copy */}
            <p className="max-w-md text-[13px] leading-relaxed text-ink/80 sm:text-sm">
              {profile.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate("work")}
                data-cursor="OPEN FILE"
                className="rounded-md border-2 border-ink bg-blue px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wide text-paper chunk-sm transition hover:-translate-y-0.5 active:translate-y-0">
                
                SEE MY WORK →
              </button>
              <button
                onClick={() => onNavigate("about")}
                data-cursor="ABOUT"
                className="rounded-md border-2 border-ink bg-paper px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wide text-ink chunk-sm transition hover:-translate-y-0.5 active:translate-y-0">
                
                GET TO KNOW ME
              </button>
            </div>
          </div>

          {/* RIGHT — design artifacts column */}
          <div className="relative flex flex-col gap-3">
            {/* Rotating thinking note */}
            <div className="relative rounded-lg border-2 border-dashed border-ink/40 bg-yellow/30 p-3 dot-grid">
              <div className="pointer-events-none absolute -top-2.5 left-3">
                <Annotation text="currently thinking..." />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={noteIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="mt-2">
                  
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
                    Design question
                  </span>
                  <p className="mt-1 font-heading text-[15px] font-bold leading-snug text-ink">
                    "{THINKING_NOTES[noteIdx]}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* What if? sticky — a small artifact */}
            <motion.div
              animate={{ rotate: [-3, -2.5, -3] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="self-start rounded-md border-2 border-ink bg-pink p-2 chunk-sm">
              
              <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-ink/60">
                design note
              </span>
              <p className="font-heading text-[13px] font-bold text-ink">
                "What if?" is usually where the interesting work begins.
              </p>
            </motion.div>

            {/* P.S. note — Front-End as secondary differentiator */}
            <div className="mt-auto hidden rounded-sm border-2 border-dashed border-ink/40 px-2 py-1 font-mono text-[9px] text-ink/50 sm:block">
              P.S. I also know what happens after Figma. ↗
            </div>
          </div>
        </div>
      </Frame>

      {/* Bottom annotation */}
      <div className="mt-3 flex items-start justify-between">
        <Annotation text="future me approved this." />
      </div>
    </div>);

}