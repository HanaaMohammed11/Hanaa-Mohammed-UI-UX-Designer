import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { profile } from "@/lib/workspace-data";

// Lightweight application bar — workspace name + current file + status.
// Navigation lives in the left sidebar (single primary system).
// Inspector toggle appears on tablet/mobile (below lg).
export default function TopBar({ clock, onHome, currentFile, currentPageLabel, onInspector }) {
  return (
    <header className="sticky top-0 z-50 flex h-9 items-center justify-between border-b-2 border-ink bg-yellow px-2 sm:px-3">
      <div className="flex min-w-0 items-center gap-2">
        <button
          onClick={onHome}
          data-cursor="HOME"
          aria-label="Back to workspace home"
          className="flex shrink-0 items-center gap-1.5 rounded border-2 border-ink bg-paper px-1.5 py-0.5 chunk-sm transition hover:-translate-y-0.5 active:translate-y-0">
          
          <span className="grid h-4 w-4 place-items-center rounded-sm border-2 border-ink bg-red text-[9px] text-paper">
            H
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink">
            HANA_WORKSPACE
          </span>
        </button>
        {/* current file breadcrumb */}
        <div className="hidden min-w-0 items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wide text-ink sm:flex">
          <span className="text-ink/40">▸</span>
          <span className="truncate">{currentFile}</span>
          {currentPageLabel && <span className="truncate text-ink/60">/ {currentPageLabel}</span>}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <span className="hidden items-center gap-1 rounded-full border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wide text-ink sm:flex chunk-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
          {profile.availability}
        </span>
        <span className="flex items-center gap-1 rounded-full border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wide text-ink chunk-sm">
          🔍 100%
        </span>
        <span className="hidden font-mono text-[10px] font-bold uppercase tracking-wide text-ink sm:inline">
          {clock}
        </span>
        {/* Inspector toggle — tablet/mobile only */}
        






        
      </div>
    </header>);

}