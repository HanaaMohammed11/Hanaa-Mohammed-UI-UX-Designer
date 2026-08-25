import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs } from "@/lib/workspace-data";
import { ACCENTS } from "@/lib/workspace-data";

const ACCENT_FOR = { home: "yellow", about: "pink", work: "blue", process: "teal", playground: "red", contact: "green" };

export default function FileTabs({ active, onSelect }) {
  return (
    <div className="z-40 flex items-stretch gap-1 overflow-x-auto border-b-2 border-ink bg-paper px-2 no-scrollbar">
      {tabs.map((t, i) => {
        const isActive = active === t.id;
        const accent = ACCENT_FOR[t.id] || "yellow";
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            data-cursor="OPEN"
            className={`group relative flex shrink-0 items-center gap-1.5 rounded-t-lg border-x-2 border-t-2 border-ink px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wide transition ${
              isActive ? "bg-paper text-ink" : "bg-muted/60 text-muted-foreground hover:bg-paper"
            }`}
            style={isActive ? { boxShadow: "0 -3px 0 hsl(var(--ink))" } : undefined}
          >
            <span className={`h-2 w-2 rounded-sm border-2 border-ink ${ACCENTS[accent]}`} />
            <span className="max-w-[150px] truncate">{t.label}</span>
            <span
              className={`ml-1 grid h-3.5 w-3.5 place-items-center rounded-sm border border-ink text-[8px] ${
                isActive ? "bg-red text-paper" : "bg-paper text-ink opacity-50"
              }`}
            >
              {i + 1}
            </span>
            {isActive && (
              <motion.span
                layoutId="tab-underline"
                className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-ink"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}