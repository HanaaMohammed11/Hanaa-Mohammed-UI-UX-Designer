import React from "react";
import { motion } from "framer-motion";

export default function DesktopIcon({ icon, label, accent, onOpen, desktopClass }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onDoubleClick={onOpen}
      onClick={onOpen}
      className={`group flex w-[88px] flex-col items-center gap-1 rounded-md p-2 text-center transition hover:bg-paper/80 ${
        desktopClass === "night" ? "hover:bg-white/10" : ""
      }`}
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-xl border-2 border-ink text-2xl chunk-sm ${
          desktopClass === "night" ? "text-paper" : "text-ink"
        }`}
        style={{ background: accent }}
      >
        {icon}
      </span>
      <span
        className={`rounded px-1.5 font-mono text-[10px] font-bold uppercase leading-tight tracking-wide ${
          desktopClass === "night" ? "text-paper" : "text-ink"
        }`}
      >
        {label}
      </span>
    </motion.button>
  );
}