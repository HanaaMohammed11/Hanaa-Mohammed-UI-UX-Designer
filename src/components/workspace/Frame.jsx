import React from "react";
import { motion } from "framer-motion";
import { ACCENTS } from "@/lib/workspace-data";

// A "frame" on the canvas — like a Figma frame, reimagined for Hanaa's world.
export default function Frame({
  title = "Frame",
  size = "W 360 × H 240",
  accent = "yellow",
  selected = false,
  onSelect,
  cursorLabel,
  className = "",
  children,
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      onClick={onSelect}
      data-cursor={cursorLabel}
      className={`group relative rounded-lg border-2 border-ink bg-paper chunk ${
        selected ? "ring-4 ring-offset-2 ring-[hsl(var(--blue))]" : ""
      } ${className}`}
    >
      {/* frame label tab */}
      <div className="flex items-center justify-between border-b-2 border-ink px-3 py-1.5">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-sm border-2 border-ink ${ACCENTS[accent]}`} />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink">
            {title}
          </span>
        </div>
        <span className="hidden font-mono text-[9px] uppercase tracking-wide text-muted-foreground sm:inline">
          {size}
        </span>
      </div>
      <div className="p-3">{children}</div>
      {/* selection handles */}
      {selected &&
        ["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(
          (p) => (
            <span
              key={p}
              className={`absolute ${p} h-2.5 w-2.5 rounded-sm border-2 border-ink bg-blue`}
            />
          )
        )}
    </motion.div>
  );
}