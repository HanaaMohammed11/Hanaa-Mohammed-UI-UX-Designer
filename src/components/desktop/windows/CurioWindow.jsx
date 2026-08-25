import React, { useState } from "react";
import { motion } from "framer-motion";
import { curios, ACCENTS, curioImg } from "@/lib/atelier-data";

export default function CurioWindow({ gravity }) {
  const [picked, setPicked] = useState(null);

  return (
    <div className="p-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/60">curio.cabinet — 4 objects</p>
      <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight">
        Objects that explain me faster than a bio.
      </h2>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {curios.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => setPicked(picked === c.id ? null : c.id)}
            whileHover={{ y: -4 }}
            animate={gravity ? { y: [0, -10, 0], rotate: [0, i % 2 ? 4 : -4, 0] } : { y: 0, rotate: 0 }}
            transition={gravity ? { duration: 3 + i, repeat: Infinity, ease: "easeInOut" } : { type: "spring", stiffness: 300, damping: 18 }}
            className="rounded-lg border-2 border-ink bg-paper p-2.5 text-left chunk-sm"
          >
            <span className={`grid h-9 w-9 place-items-center rounded-lg border-2 border-ink text-xl ${ACCENTS[c.accent]}`}>{c.glyph}</span>
            <h3 className="mt-2 font-display text-sm font-bold leading-none">{c.title}</h3>
            <motion.p
              initial={false}
              animate={{ height: picked === c.id ? "auto" : 0, opacity: picked === c.id ? 1 : 0 }}
              className="overflow-hidden text-[11px] leading-snug text-ink/70"
            >
              <span className="block pt-1.5">{c.note}</span>
            </motion.p>
            <span className="mt-1 block font-mono text-[8px] uppercase tracking-wide text-ink/45">
              {picked === c.id ? "put back" : "pick up"}
            </span>
          </motion.button>
        ))}
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border-2 border-ink chunk-sm">
        <img src={curioImg} alt="Tactile studio objects" className="h-24 w-full object-cover" loading="lazy" />
      </div>

      <div className="mt-3 rounded-lg border-2 border-dashed border-ink/40 bg-yellow/40 p-2 text-center font-mono text-[10px] font-bold uppercase tracking-wide">
        gravity: {gravity ? "off — objects are floating" : "on"}
      </div>
    </div>
  );
}