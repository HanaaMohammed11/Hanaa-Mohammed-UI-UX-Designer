import React, { useState } from "react";
import { motion } from "framer-motion";
import { heroImg, deconImg } from "@/lib/atelier-data";

const layers = [
  { name: "Surface", note: "the part people touch" },
  { name: "Structure", note: "the part people feel" },
  { name: "Logic", note: "the part people never see" },
];

export default function AboutWindow() {
  const [depth, setDepth] = useState(0);

  return (
    <div className="p-4">
      <div className="overflow-hidden rounded-lg border-2 border-ink bg-yellow">
        <img src={heroImg} alt="Macro of a compass drawing a circle" className="h-40 w-full object-cover" loading="lazy" />
      </div>

      <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight">
        What if you could see the <span className="text-blue">thoughts</span>?
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-ink/80">
        I design products the way other people take things apart — slowly, on a
        well-lit table, with too many notes in the margin. Drag the dial below.
      </p>

      <div className="mt-3">
        <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wide text-ink/70">
          <span>deconstruct</span>
          <span>{String(depth).padStart(3, "0")}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={depth}
          aria-label="Deconstruct"
          onChange={(e) => setDepth(Number(e.target.value))}
          className="mt-1 h-2 w-full cursor-ew-resize appearance-none rounded-full border-2 border-ink bg-paper accent-[hsl(var(--red))]"
        />
      </div>

      <div className="mt-2 space-y-1">
        {layers.map((l, i) => {
          const on = depth > i * 30 + 5;
          return (
            <div key={l.name} className="flex items-baseline gap-2 font-mono text-[11px]" style={{ opacity: on ? 1 : 0.35 }}>
              <span className="text-red">{on ? "◆" : "◇"}</span>
              <span className="font-bold uppercase tracking-wide">{l.name}</span>
              <span className="text-ink/55">— {l.note}</span>
            </div>
          );
        })}
      </div>

      <motion.div
        className="pointer-events-none mt-3 overflow-hidden rounded-lg border-2 border-ink bg-paper"
        style={{ opacity: depth / 100 }}
      >
        <img src={deconImg} alt="Deconstructed clay object" className="h-28 w-full object-cover" loading="lazy" />
      </motion.div>
    </div>
  );
}