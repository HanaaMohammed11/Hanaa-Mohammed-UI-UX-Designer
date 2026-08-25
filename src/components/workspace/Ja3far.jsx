import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ja3farImg } from "@/lib/workspace-data";

// Ja3far — studio mascot who peeks from behind the canvas edge.
// Bottom-right corner, partially clipped by the viewport so he looks
// like he's poking his head up from behind the workspace.
// Content always has priority — he only overlaps empty canvas margin.

const REACTIONS = {
  home: "welcome to the studio.",
  about: "that's hanaa. mostly caffeine.",
  work: "let's see what you made.",
  process: "show me the thinking.",
  playground: "now we're having fun.",
  contact: "finally. a serious chat.",
};

const IDLE_LINES = [
  "nap time?",
  "is it 5pm yet?",
  "you click a lot.",
  "feed me. then ship.",
  "still there?",
  "i'd review but i'm busy.",
];

const HOVER_LINES = [
  "still designing?",
  "QA check.",
  "looks good.",
  "ship it?",
];

const TAP_LINES = [
  "hey 👋",
  "still designing?",
  "QA approved ✓",
  "you're exploring.",
];

const PROJECT_REACTION = "ooh, nice choice.";

export default function Ja3far({ activePage, reduced, hoveringProject, isMobile }) {
  const [speech, setSpeech] = useState(null);
  const [sleepy, setSleepy] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const lastActive = useRef(Date.now());
  const speechTimer = useRef(null);

  // Regenerate animation parameters periodically for organic feel
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setAnimKey((k) => k + 1), 5000 + Math.random() * 3000);
    return () => clearInterval(t);
  }, [reduced]);

  const showSpeech = useCallback((text, duration = 3500) => {
    if (speechTimer.current) clearTimeout(speechTimer.current);
    setSpeech(text);
    speechTimer.current = setTimeout(() => setSpeech(null), duration);
  }, []);

  // React to page changes
  useEffect(() => {
    lastActive.current = Date.now();
    setSleepy(false);
    const reaction = REACTIONS[activePage];
    if (reaction) showSpeech(reaction, 4000);
  }, [activePage, showSpeech]);

  // React to project hover
  useEffect(() => {
    if (hoveringProject) {
      showSpeech(PROJECT_REACTION, 2500);
      lastActive.current = Date.now();
      setSleepy(false);
    }
  }, [hoveringProject, showSpeech]);

  // Idle detection — sleepy after 20s
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => {
      const idle = Date.now() - lastActive.current;
      if (idle > 20000) {
        setSleepy(true);
        if (Math.random() > 0.6) {
          showSpeech(IDLE_LINES[Math.floor(Math.random() * IDLE_LINES.length)], 3000);
        }
      } else {
        setSleepy(false);
      }
    }, 5000);
    return () => clearInterval(t);
  }, [reduced, showSpeech]);

  const handleHover = () => {
    if (isMobile || reduced) return;
    setHovered(true);
    lastActive.current = Date.now();
    setSleepy(false);
    if (Math.random() > 0.4) {
      showSpeech(HOVER_LINES[Math.floor(Math.random() * HOVER_LINES.length)], 2500);
    }
  };

  const handleTap = () => {
    if (!isMobile) return;
    setTapped(true);
    lastActive.current = Date.now();
    showSpeech(TAP_LINES[Math.floor(Math.random() * TAP_LINES.length)], 2500);
    setTimeout(() => setTapped(false), 400);
  };

  // Responsive sizing — smaller on mobile, peeking from edge
  const sizeClass = isMobile ? "h-11 w-11" : "h-16 w-16 md:h-20 md:w-20";

  // Position: peek from bottom-right edge, partially clipped
  // Desktop/tablet: bottom partially below viewport (clipped by overflow-hidden root)
  // Mobile: just above bottom nav, slightly off right edge
  const positionStyle = isMobile
    ? { bottom: "50px", right: "-4px" }
    : { bottom: "-14px", right: "10px" };

  if (reduced) {
    return (
      <div
        className="pointer-events-auto fixed z-30 hidden md:block"
        style={positionStyle}
        data-cursor="JA3FAR"
      >
        <img
          src={ja3farImg}
          alt="Ja3far — studio mascot"
          className={`${sizeClass} object-contain`}
          style={{ filter: "drop-shadow(2px 2px 0 hsl(0 0% 6%))" }}
        />
      </div>
    );
  }

  // Randomized idle animation parameters
  const bobAmount = 3 + Math.random() * 2;
  const tiltAmount = 1 + Math.random() * 1.5;
  const duration = 3.5 + Math.random() * 2;

  return (
    <div
      className={`pointer-events-auto fixed z-30 ${isMobile ? "block" : "hidden md:block"}`}
      style={positionStyle}
      data-cursor="JA3FAR"
      onMouseEnter={handleHover}
      onMouseLeave={() => setHovered(false)}
      onClick={handleTap}
    >
      {/* Hover lift — separates hover from idle bob */}
      <motion.div
        animate={{ y: hovered ? -10 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        {/* Idle bob + tilt */}
        <motion.div
          key={animKey}
          animate={{
            y: sleepy ? [0, -1, 0] : [0, -bobAmount, 0],
            rotate: sleepy ? [0, 2, 0] : [-tiltAmount, tiltAmount, -tiltAmount],
            scale: tapped ? 1.15 : 1,
          }}
          transition={{
            duration: sleepy ? 6 : duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <img
            src={ja3farImg}
            alt="Ja3far — studio mascot"
            className={`${sizeClass} object-contain`}
            style={{ filter: "drop-shadow(2px 2px 0 hsl(0 0% 6%))" }}
          />
          {sleepy && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute right-0 top-0 font-mono text-xs font-bold text-ink"
            >
              z
            </motion.span>
          )}
        </motion.div>

        {/* Speech bubble — appears above Ja3far, never below (bottom is clipped) */}
        <AnimatePresence>
          {speech && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute bottom-full mb-1 ${isMobile ? "right-0" : "right-2"} max-w-[150px] rounded-md border-2 border-ink bg-ink px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wide text-paper chunk-sm`}
            >
              {speech}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}