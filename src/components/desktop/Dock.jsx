import React from "react";
import { motion } from "framer-motion";

export default function Dock({ items, onOpen, desktopClass }) {
  return (
    <div className="pointer-events-auto fixed bottom-3 left-1/2 z-[85] -translate-x-1/2">
      <div className="flex items-end gap-1.5 rounded-2xl border-2 border-ink bg-paper/95 px-2 py-2 backdrop-blur chunk-sm md:gap-2 md:px-3">
        {items.map((it) => (
          <motion.button
            key={it.id}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onOpen(it.id)}
            title={it.label}
            className="grid h-10 w-10 place-items-center rounded-xl border-2 border-ink text-lg md:h-12 md:w-12 md:text-2xl"
            style={{ background: it.accent }}
          >
            {it.icon}
          </motion.button>
        ))}
      </div>
    </div>
  );
}