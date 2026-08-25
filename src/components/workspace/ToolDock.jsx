import React from "react";
import { motion } from "framer-motion";
import { MousePointer2, Grid3x3, Pen, Type, MessageSquare, Hand, ZoomIn } from "lucide-react";

// Functional design-tool dock. Each tool has a clear purpose.
// Select: default mode. Grid: toggles canvas grid. Pen/Text/Comment: drop artifacts on canvas.
// Hand: pan cursor. Zoom: toggles canvas zoom.
const TOOLS = [
  { id: "select", icon: MousePointer2, label: "Select", cursor: "SELECT" },
  { id: "grid", icon: Grid3x3, label: "Grid", cursor: "GRID" },
  { id: "pen", icon: Pen, label: "Draw", cursor: "DRAW" },
  { id: "text", icon: Type, label: "Text", cursor: "TEXT" },
  { id: "comment", icon: MessageSquare, label: "Comment", cursor: "NOTE" },
  { id: "hand", icon: Hand, label: "Pan", cursor: "GRAB" },
  { id: "zoom", icon: ZoomIn, label: "Zoom", cursor: "ZOOM" },
];

const MOBILE_TOOLS = TOOLS.filter((t) => ["select", "grid", "comment"].includes(t.id));

export default function ToolDock({ active, onSelect, isMobile, showGrid, canvasZoom }) {
  // Tool dock is desktop-only — removed from mobile to keep the interface clean
  if (isMobile) return null;
  const tools = TOOLS;

  const isActive = (toolId) => {
    if (toolId === "grid") return showGrid;
    if (toolId === "zoom") return canvasZoom > 1;
    return active === toolId;
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 24 }}
      className={`pointer-events-auto fixed left-1/2 z-40 -translate-x-1/2 ${isMobile ? "bottom-14" : "bottom-4"}`}
    >
      <div className="flex items-center gap-1 rounded-full border-2 border-ink bg-paper px-2 py-1 chunk">
        {tools.map((t) => {
          const Icon = t.icon;
          const activeState = isActive(t.id);
          return (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              data-cursor={t.cursor}
              aria-label={t.label}
              title={t.label}
              className={`group relative grid h-8 w-8 place-items-center rounded-full border-2 border-ink transition active:translate-y-0.5 ${
                activeState ? "bg-blue text-paper" : "bg-paper text-ink hover:bg-yellow"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={2.5} />
              {/* tooltip — high contrast, design-system styled */}
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border-2 border-ink bg-ink px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wide text-paper opacity-0 transition-opacity group-hover:opacity-100">
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}