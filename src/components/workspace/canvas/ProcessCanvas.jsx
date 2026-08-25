import React, { useState } from "react";
import { motion } from "framer-motion";
import { processSteps, ACCENTS, portraitImg } from "@/lib/workspace-data";
import Frame from "@/components/workspace/Frame";
import Sticker from "@/components/workspace/Sticker";
import Annotation from "@/components/workspace/Annotation";

const ACCENT_KEYS = ["yellow", "teal", "red", "blue", "pink", "green"];

const ARTIFACTS = ["Research", "Insights", "User Flows", "Wireframes", "Iterations", "UI", "Prototype"];

const PS_OBJECTS = [
{ label: "WHY?", accent: "yellow", rot: -4 },
{ label: "WHAT IF?", accent: "blue", rot: 3 },
{ label: "USER PROBLEM", accent: "red", rot: -3 },
{ label: "IDEA", accent: "teal", rot: 4 },
{ label: "ITERATION", accent: "pink", rot: -2 },
{ label: "SOLUTION", accent: "green", rot: 3 }];


export default function ProcessCanvas() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
      <Frame title="process.fig" accent="red" cursorLabel="STEP">
        <div className="relative flex min-h-[220px] items-center justify-center rounded-lg border-2 border-dashed border-ink/40 bg-yellow/30 p-4">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="text-center">
            
            <img src="https://media.base44.com/images/public/6a74e259812493f24dfd3921/82176da04_WhatsApp_Image_2026-08-09_at_110837_PM.jpeg"

            alt="Hanaa — stylized, working through the process"
            className="mx-auto h-32 w-32 rounded-lg border-2 border-ink bg-paper object-cover chunk-sm my-1 py-5" />
            
            <div className={`mt-2 inline-block rounded-md border-2 border-ink px-2 py-1 font-mono text-[10px] font-bold uppercase ${ACCENTS[ACCENT_KEYS[active]]}`}>
              Step {step.no}
            </div>
          </motion.div>
          <div className="absolute bottom-2 left-2">
            <Annotation text="future me will understand this." />
          </div>
        </div>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4">
          
          <h3 className="font-heading text-xl font-bold text-ink">{step.title}</h3>
          <p className="mt-1 text-[14px] leading-relaxed text-ink/80">{step.note}</p>
        </motion.div>
      </Frame>

      <Frame title="timeline.fig" accent="blue" cursorLabel="SELECT">
        <ol className="flex flex-col gap-1.5">
          {processSteps.map((s, i) =>
          <li key={s.no}>
              <button
              onClick={() => setActive(i)}
              data-cursor="OPEN"
              className={`flex w-full items-center gap-3 rounded-md border-2 border-ink px-3 py-2 text-left transition ${
              active === i ? "bg-ink text-paper chunk-sm" : "bg-paper text-ink hover:bg-yellow"}`
              }>
              
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-sm border-2 border-ink ${ACCENTS[ACCENT_KEYS[i]]} font-mono text-[11px] font-bold`}>
                  {s.no}
                </span>
                <span className="font-mono text-[12px] font-bold uppercase tracking-wide">{s.title}</span>
              </button>
            </li>
          )}
        </ol>
        {/* artifacts rail — structure only, no fabricated findings */}
        <div className="mt-3 border-t-2 border-dashed border-ink/30 pt-2">
          <div className="font-mono text-[8px] font-bold uppercase tracking-wide text-muted-foreground">artifacts</div>
          <div className="mt-1.5 flex flex-wrap items-center gap-1">
            {ARTIFACTS.map((a, i) =>
            <span key={a} className="flex items-center gap-1">
                <span className="rounded-sm border-2 border-ink bg-paper px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase text-ink">
                  {a}
                </span>
                {i < ARTIFACTS.length - 1 && <span className="font-mono text-[8px] text-ink/40">→</span>}
              </span>
            )}
          </div>
        </div>
        <div className="mt-3">
          <Sticker label="ITERATE" accent="green" rot={-4} />
        </div>
      </Frame>

      {/* problem-solving objects on the canvas */}
      <Frame title="problem_solving.fig" accent="yellow" cursorLabel="THINK" className="lg:col-span-2">
        <h3 className="mb-2 font-mono text-[10px] font-bold uppercase tracking-wide text-ink">
          Problem-solving objects
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {PS_OBJECTS.map((o, i) =>
          <motion.div
            key={o.label}
            whileHover={{ rotate: 0, scale: 1.05, y: -2 }}
            style={{ rotate: o.rot }}
            className={`rounded-md border-2 border-ink p-2 text-center chunk-sm ${ACCENTS[o.accent]}`}>
            
              <div className="font-mono text-[8px] font-bold uppercase tracking-wide opacity-70">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-heading text-[13px] font-bold leading-tight">{o.label}</div>
            </motion.div>
          )}
        </div>
      </Frame>
    </div>);

}