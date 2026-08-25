import React from "react";

export default function MenuBar({ onMenu, clock }) {
  const items = [
    { label: "Atelier", strong: true, action: "about" },
    { label: "File", menu: ["New window", "Open folder"] },
    { label: "Work", menu: ["Projects", "Process", "Curio"] },
    { label: "Contact", menu: ["Email", "Instagram", "Résumé"] },
  ];

  return (
    <header className="sticky top-0 z-[80] flex items-center justify-between gap-2 border-b-2 border-ink bg-yellow px-3 py-1.5 font-mono text-[12px] font-bold uppercase tracking-wide text-ink md:text-[13px]">
      <div className="flex items-center gap-1">
        {items.map((it) => (
          <button
            key={it.label}
            onClick={() => onMenu(it.action || it.label.toLowerCase())}
            className="rounded px-2 py-1 transition hover:bg-ink hover:text-paper"
          >
            {it.strong ? <span className="font-extrabold">⌘ {it.label}</span> : it.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <span className="hidden sm:inline">✉ hello@atelier.studio</span>
        <span className="hidden md:inline">🔋 87%</span>
        <span className="rounded bg-ink px-2 py-0.5 text-paper">{clock}</span>
      </div>
    </header>
  );
}