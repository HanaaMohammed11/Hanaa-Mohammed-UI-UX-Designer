import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Window({
  id,
  title,
  accent = "yellow",
  children,
  open,
  zIndex,
  onFocus,
  onClose,
  style,
  initial,
  dragRef,
  isMobile,
  compact = false,
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState(initial || { x: 0, y: 0 });

  if (!open) return null;

  const accentBar = {
    yellow: "bg-yellow text-ink",
    teal: "bg-teal text-paper",
    red: "bg-red text-paper",
    blue: "bg-blue text-paper",
    pink: "bg-pink text-ink",
    green: "bg-green text-paper",
    ink: "bg-[hsl(var(--ink))] text-paper",
  }[accent] || "bg-yellow text-ink";

  const shell = "border-2 border-ink bg-paper chunk overflow-hidden flex flex-col";

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${shell} w-full`}
        style={{ zIndex }}
        onPointerDown={onFocus}
      >
        <div className={`flex items-center justify-between px-3 py-1.5 ${accentBar} border-b-2 border-ink`}>
          <span className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wide">
            <span className="h-2.5 w-2.5 rounded-full border border-ink bg-paper" />
            {title}
          </span>
          <button
            onClick={onClose}
            className="grid h-6 w-6 place-items-center rounded-full border-2 border-ink bg-paper text-xs font-bold hover:bg-red hover:text-paper"
            aria-label={`Close ${title}`}
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      drag
      dragConstraints={dragRef}
      dragMomentum={false}
      dragListener
      onPointerDown={() => {
        onFocus();
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`${shell} absolute ${compact ? "w-[300px]" : "w-[460px]"}`}
      style={{ zIndex, ...style, left: 0, top: 0 }}
    >
      <div
        className={`flex cursor-grab items-center justify-between px-3 py-1.5 ${accentBar} border-b-2 border-ink active:cursor-grabbing`}
      >
        <span className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wide select-none">
          <span className="h-2.5 w-2.5 rounded-full border border-ink bg-paper" />
          {title}
        </span>
        <div className="flex items-center gap-1">
          <button className="grid h-5 w-5 place-items-center rounded-full border-2 border-ink bg-paper text-[9px] font-bold" aria-hidden>–</button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="grid h-6 w-6 place-items-center rounded-full border-2 border-ink bg-paper text-xs font-bold hover:bg-red hover:text-paper"
            aria-label={`Close ${title}`}
          >
            ✕
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </motion.div>
  );
}