import React, { useState } from "react";
import { motion } from "framer-motion";

const stages = [
  { key: "Question", title: "It starts messy", body: "Nobody hands you a brief that's actually the problem. I collect the mess first — interviews, complaints, the thing someone said in passing.", shape: "organic" },
  { key: "Sketch", title: "Paper before pixels", body: "Cheap ideas, fast. If it survives a ballpoint pen and a skeptical colleague, it earns a rectangle.", shape: "sketch" },
  { key: "Structure", title: "The grid arrives", body: "Now it becomes an interface: hierarchy, states, edge cases, the boring rows nobody screenshots but everybody uses.", shape: "grid" },
  { key: "Polish", title: "The last 5%", body: "Timing curves, copy rewritten out loud, the shadow that makes a card feel like it weighs something. This part is the whole job.", shape: "polish" },
];

function Art({ shape }) {
  const s = "hsl(var(--blue))";
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden>
      {shape === "organic" && <path d="M20 90c20-60 60 30 80-30s50 60 78 10" fill="none" stroke={s} strokeWidth="3" strokeLinecap="round" />}
      {shape === "sketch" && (
        <g fill="none" stroke={s} strokeWidth="2.4">
          <rect x="24" y="24" width="70" height="44" rx="4" />
          <rect x="24" y="80" width="152" height="10" rx="3" />
          <rect x="24" y="98" width="110" height="10" rx="3" />
          <circle cx="150" cy="46" r="22" />
        </g>
      )}
      {shape === "grid" && (
        <g fill="none" stroke={s} strokeWidth="1.8" opacity="0.75">
          {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={20 + i * 32} y1="18" x2={20 + i * 32} y2="122" />)}
          {[0, 1, 2, 3].map((i) => <line key={i} x1="20" y1={18 + i * 34} x2="180" y2={18 + i * 34} />)}
          <rect x="20" y="18" width="64" height="68" fill="hsl(var(--red) / 0.45)" stroke="none" />
        </g>
      )}
      {shape === "polish" && (
        <g>
          <rect x="34" y="30" width="132" height="80" rx="10" fill="hsl(var(--paper))" stroke="hsl(var(--ink))" strokeWidth="2" />
          <rect x="48" y="46" width="60" height="8" rx="4" fill="hsl(var(--ink))" />
          <rect x="48" y="62" width="94" height="6" rx="3" fill="hsl(var(--ink) / 0.2)" />
          <rect x="48" y="80" width="46" height="16" rx="8" fill="hsl(var(--red))" />
        </g>
      )}
    </svg>
  );
}

export default function ProcessWindow() {
  const [i, setI] = useState(0);
  const s = stages[i];
  return (
    <div className="p-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/60">process.blueprint — scrub</p>
      <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight">Watch the mess become a machine.</h2>

      <div className="mt-3 rounded-lg border-2 border-ink grid-bg-bright chunk-sm p-3">
        <motion.div key={s.shape} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="aspect-[10/7]">
          <Art shape={s.shape} />
        </motion.div>
      </div>

      <div className="mt-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-red">{s.key}</span>
        <h3 className="font-display text-lg font-bold tracking-tight">{s.title}</h3>
        <p className="mt-1 text-[13px] leading-snug text-ink/75">{s.body}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {stages.map((st, idx) => (
          <button
            key={st.key}
            onClick={() => setI(idx)}
            className={`rounded-full border-2 border-ink px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide transition ${
              i === idx ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-yellow"
            }`}
          >
            {st.key}
          </button>
        ))}
      </div>
    </div>
  );
}