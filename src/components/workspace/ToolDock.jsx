import React from "react";
import { motion } from "framer-motion";
import {
  MousePointer2,
  Grid3x3,
  Pen,
  Type,
  MessageSquare,
  Hand,
  ZoomIn,
} from "lucide-react";

const TOOLS = [
  { id: "select", icon: MousePointer2, label: "Select", cursor: "SELECT" },
  { id: "grid", icon: Grid3x3, label: "Grid", cursor: "GRID" },
  { id: "pen", icon: Pen, label: "Draw", cursor: "DRAW" },
  { id: "text", icon: Type, label: "Text", cursor: "TEXT" },
  { id: "comment", icon: MessageSquare, label: "Comment", cursor: "NOTE" },
  { id: "hand", icon: Hand, label: "Pan", cursor: "GRAB" },
  { id: "zoom", icon: ZoomIn, label: "Zoom", cursor: "ZOOM" },
];

export default function ToolDock({
  active,
  onSelect,
  isMobile,
  showGrid,
  canvasZoom,
}) {
  if (isMobile) return null;

  const isActive = (toolId) => {
    if (toolId === "grid") return showGrid;
    if (toolId === "zoom") return canvasZoom > 1;
    return active === toolId;
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 24 }}
      className="pointer-events-auto fixed bottom-4 left-1/2 z-50"
    >
      <div className="flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper p-1.5 shadow-solid">
        {TOOLS.map((t) => {
          const Icon = t.icon;
          const activeState = isActive(t.id);
          return (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              data-cursor={t.cursor}
              aria-label={t.label}
              title={t.label}
              className={`group relative grid h-9 w-9 place-items-center rounded-full border-2 border-ink transition active:translate-y-0.5 ${
                activeState
                  ? "bg-blue text-paper"
                  : "bg-paper text-ink hover:bg-yellow"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={2.5} />
              
          
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border-2 border-ink bg-ink px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-paper opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}