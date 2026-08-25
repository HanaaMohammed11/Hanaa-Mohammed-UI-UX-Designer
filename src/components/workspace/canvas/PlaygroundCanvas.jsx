import React, { useState } from "react";
import { motion } from "framer-motion";
import { playgroundBits, ACCENTS } from "@/lib/workspace-data";
import Frame from "@/components/workspace/Frame";
import Sticker from "@/components/workspace/Sticker";
import Annotation from "@/components/workspace/Annotation";

// A genuinely interactive playground — not text notes.
function FlipToken() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      data-cursor="FLIP"
      className="h-full w-full [perspective:800px]"
    >
      <motion.div
        animate={{ rotateY: on ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="relative h-full min-h-[120px] [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md border-2 border-ink bg-blue p-3 text-center text-paper chunk-sm [backface-visibility:hidden]">
          <div className="font-mono text-[9px] font-bold uppercase tracking-wide opacity-80">tap me</div>
          <p className="mt-1 font-mono text-[11px] leading-snug">what happens on hover?</p>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md border-2 border-ink bg-yellow p-3 text-center text-ink chunk-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="font-mono text-[9px] font-bold uppercase tracking-wide">it whispers</div>
          <p className="mt-1 font-mono text-[11px] leading-snug">every hover should whisper what happens next.</p>
        </div>
      </motion.div>
    </button>
  );
}

function DragSticker() {
  return (
    <div className="relative h-full min-h-[120px] overflow-hidden rounded-md border-2 border-dashed border-ink/50 bg-muted/30">
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={{ left: -40, right: 40, top: -30, bottom: 30 }}
        whileDrag={{ scale: 1.08 }}
        data-cursor="DRAG"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-md border-2 border-ink bg-red px-3 py-1.5 font-mono text-[11px] font-bold uppercase text-paper chunk-sm active:cursor-grabbing"
      >
        drag me ✦
      </motion.div>
      <span className="pointer-events-none absolute bottom-1 left-2 font-mono text-[8px] uppercase text-ink/40">
        constraint: ±40px
      </span>
    </div>
  );
}

function PressButton() {
  const [n, setN] = useState(0);
  return (
    <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 rounded-md border-2 border-ink bg-paper p-3 text-center chunk-sm">
      <button
        onClick={() => setN((v) => v + 1)}
        data-cursor="PRESS"
        className="rounded-md border-2 border-ink bg-green px-3 py-1.5 font-mono text-[11px] font-bold uppercase text-paper transition active:translate-y-0.5"
      >
        ship it ✦
      </button>
      <span className="font-mono text-[9px] text-ink/60">shipped: {n}× this session</span>
    </div>
  );
}

export default function PlaygroundCanvas() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-3 left-2">
        <Annotation text="don't touch this." />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">
          Playground <span className="font-mono text-[12px] font-normal text-muted-foreground">/ experiments</span>
        </h2>
        <Sticker label="STILL THINKING" accent="ink" rot={4} />
      </div>

      {/* interactive experiments */}
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <Frame title="exp.flip" accent="blue" cursorLabel="FLIP" className="h-full">
          <FlipToken />
        </Frame>
        <Frame title="exp.drag" accent="red" cursorLabel="DRAG" className="h-full">
          <DragSticker />
        </Frame>
        <Frame title="exp.press" accent="green" cursorLabel="PRESS" className="h-full">
          <PressButton />
        </Frame>
      </div>

      {/* curiosity notes */}
      <div className="mb-2 flex items-center gap-2">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/50">scratch notes</span>
        <span className="h-px flex-1 bg-ink/15" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {playgroundBits.map((b) => (
          <Frame key={b.id} title={b.kind === "sticky" ? "sticky" : "token"} accent={b.accent} cursorLabel="CURIOUS?" className="h-full">
            <div className={`rounded-md border-2 border-ink p-3 ${ACCENTS[b.accent]}`}>
              <div className="font-mono text-[10px] font-bold uppercase tracking-wide opacity-80">{b.title}</div>
              <p className="mt-1 font-mono text-[12px] leading-snug">{b.body}</p>
            </div>
          </Frame>
        ))}
      </div>
    </div>
  );
}