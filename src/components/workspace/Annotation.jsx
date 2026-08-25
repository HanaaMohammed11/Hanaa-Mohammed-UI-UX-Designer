import React from "react";

// A designer's margin note — little speech bubble pinned to the canvas.
export default function Annotation({ text, className = "" }) {
  return (
    <div
      className={`pointer-events-none inline-flex max-w-[200px] items-start gap-1 rounded-md border-2 border-ink bg-paper px-2 py-1 font-mono text-[10px] leading-tight text-ink chunk-sm ${className}`}
    >
      <span className="text-red">✎</span>
      <span className="italic">{text}</span>
    </div>
  );
}