import React from "react";
import { deskSwatches } from "@/lib/atelier-data";

export default function SettingsWindow({ deskKey, setDeskKey }) {
  return (
    <div className="p-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/60">settings — appearance</p>
      <h2 className="mt-1 font-display text-lg font-bold leading-tight tracking-tight">Change background</h2>

      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {deskSwatches.map((s) => (
          <button
            key={s.key}
            onClick={() => setDeskKey(s.key)}
            title={s.label}
            className={`grid h-9 place-items-center rounded-md border-2 border-ink transition ${
              deskKey === s.key ? "ring-2 ring-ink ring-offset-1" : ""
            }`}
            style={{ background: s.color }}
          >
            {deskKey === s.key ? <span className="text-[10px] font-bold text-ink">✓</span> : null}
          </button>
        ))}
      </div>
      <p className="mt-1 font-mono text-[9px] uppercase tracking-wide text-ink/55">
        now: {deskSwatches.find((s) => s.key === deskKey)?.label}
      </p>

      <div className="mt-4 space-y-3">
        <Toggle label="Fullscreen" on />
        <Toggle label="Show grid" on />
        <Slider label="Brightness" />
        <Slider label="Screen area" />
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg border-2 border-ink bg-yellow p-2">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide">Filters</span>
        <span className="rounded-md border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[10px] font-bold uppercase">Normal ▾</span>
      </div>
    </div>
  );
}

function Toggle({ label, on: onProp }) {
  const [on, setOn] = React.useState(onProp);
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-[11px] font-bold uppercase tracking-wide">{label}</span>
      <button
        onClick={() => setOn((o) => !o)}
        className={`flex h-6 w-12 items-center rounded-full border-2 border-ink px-0.5 ${on ? "bg-green justify-end" : "bg-paper justify-start"}`}
      >
        <span className="h-4 w-4 rounded-full border-2 border-ink bg-paper" />
      </button>
    </div>
  );
}

function Slider({ label }) {
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wide">
        <span>{label}</span>
        <span className="text-ink/55">68%</span>
      </div>
      <div className="mt-1 h-2 rounded-full border-2 border-ink bg-paper">
        <div className="h-full w-2/3 rounded-full bg-blue" />
      </div>
    </div>
  );
}