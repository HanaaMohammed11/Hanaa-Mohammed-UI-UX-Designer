"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Paw({ state, pressed }) {
  const spread = state === "grab" ? 1.35 : 1;
  const rotate = state === "point" ? -18 : 0;
  const scale = pressed ? 0.8 : 1;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{
        transform: `rotate(${rotate}deg) scale(${scale})`,
        transition: "transform 80ms ease-out",
        filter: "drop-shadow(1px 1px 0 hsl(0 0% 99%))",
      }}
    >
      <ellipse cx="12" cy="16" rx="4.5" ry="3.5" fill="hsl(0 0% 6%)" stroke="hsl(0 0% 99%)" strokeWidth="1.5" />
      <ellipse cx={12 - 6 * spread} cy="10" rx="1.8" ry="2.5" fill="hsl(0 0% 6%)" stroke="hsl(0 0% 99%)" strokeWidth="1.5" />
      <ellipse cx={12 - 2.5 * spread} cy="7" rx="1.8" ry="2.5" fill="hsl(0 0% 6%)" stroke="hsl(0 0% 99%)" strokeWidth="1.5" />
      <ellipse cx={12 + 2.5 * spread} cy="7" rx="1.8" ry="2.5" fill="hsl(0 0% 6%)" stroke="hsl(0 0% 99%)" strokeWidth="1.5" />
      <ellipse cx={12 + 6 * spread} cy="10" rx="1.8" ry="2.5" fill="hsl(0 0% 6%)" stroke="hsl(0 0% 99%)" strokeWidth="1.5" />
    </svg>
  );
}


const QUIET_LABELS = new Set(["CANVAS"]);

function mapLabel(raw) {
  if (!raw) return "";
  if (raw === "JA3FAR") return "👋";
  if (raw === "OPEN") return "OPEN ↗";
  return raw;
}

export default function CursorLayer({ reduced }) {
  const [label, setLabel] = useState(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [pawState, setPawState] = useState("default");
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("custom-cursor-active");

    const move = (e) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        setVisible(true);

        const el = e.target.closest?.("[data-cursor], button, a, [title], [aria-label]");
        const cursorAttr = el?.getAttribute("data-cursor") || el?.getAttribute("title") || el?.getAttribute("aria-label") || null;
        
        setLabel(cursorAttr);

        if (cursorAttr === "GRAB" || cursorAttr === "HAND" || cursorAttr === "PAN") {
          setPawState("grab");
        } else if (cursorAttr === "JA3FAR") {
          setPawState("point");
        } else if (el && (el.tagName === "BUTTON" || el.tagName === "A" || el.closest("button, a, [role='button']"))) {
          setPawState("point");
        } else {
          setPawState("default");
        }
      });
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (reduced) return null;

  const offset = 18;
  const labelW = 90;
  const labelH = 22;
  const vw = typeof window !== "undefined" ? window.innerWidth : 1000;
  const vh = typeof window !== "undefined" ? window.innerHeight : 1000;

  let dx = pos.x + offset;
  let dy = pos.y + offset;

  if (dx + labelW > vw - 8) dx = pos.x - offset - labelW;
  if (dy + labelH > vh - 8) dy = pos.y - offset - labelH;
  dx = Math.max(8, Math.min(dx, vw - labelW - 8));
  dy = Math.max(8, Math.min(dy, vh - labelH - 8));

  const showLabel = label && !QUIET_LABELS.has(label.toUpperCase());
  const labelText = label ? mapLabel(label) : null;

  return (
    <>

      <div
        aria-hidden
        className="pointer-events-none fixed z-[1000] hidden md:block"
        style={{
          transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
          opacity: visible ? 1 : 0,
          transition: "opacity 120ms",
        }}
      >
        <Paw state={pawState} pressed={pressed} />
      </div>

      {showLabel && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-none fixed z-[1000] hidden md:block"
          style={{
            transform: `translate(${dx}px, ${dy}px)`,
            opacity: visible ? 1 : 0,
            transition: "opacity 120ms",
          }}
        >
          <span className="whitespace-nowrap rounded border-2 border-ink bg-yellow px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-ink shadow-solid">
            {labelText}
          </span>
        </motion.div>
      )}
    </>
  );
}