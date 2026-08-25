import React from "react";
import { motion } from "framer-motion";
import { profile, portraitImg } from "@/lib/workspace-data";
import Frame from "@/components/workspace/Frame";
import Sticker from "@/components/workspace/Sticker";
import Annotation from "@/components/workspace/Annotation";

const HOW_I_THINK = ["Observe", "Question", "Explore", "Design", "Test", "Refine"];

// About = Who I Am → How I Think → Secret Weapon (Front-End as differentiator).
export default function AboutCanvas({ onSelect }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-3 right-3 hidden sm:block">
        <Annotation text="welcome inside my head." />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        {/* WHO I AM + portrait */}
        <Frame title="who_i_am.fig" accent="pink" size="W 420 × H 520" cursorLabel="THAT'S ME" onSelect={() => onSelect("hanaa")}>
          <div className="relative overflow-hidden rounded-lg border-2 border-ink bg-yellow/30 dot-grid mx-2 px-6 py-6">
            <div className="flex flex-col items-center mx-2 px-3 py-2">
              <motion.div
                whileHover={{ rotate: -1.5, scale: 1.02 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="cursor-pointer"
                data-cursor="THAT'S ME"
                onClick={() => onSelect("hanaa")}>
                
                <img src="https://media.base44.com/images/public/6a74e259812493f24dfd3921/b713a21a1_WhatsApp_Image_2026-08-25_at_31015_AM.jpeg"

                alt="Hanaa — stylized, working inside her design canvas"
                className="h-40 w-40 border-2 border-ink bg-paper object-cover chunk-lg sm:h-52 sm:w-52 rounded-[20px]" />
                
              </motion.div>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                <Sticker label="CURIOUS" accent="teal" rot={-5} />
                <Sticker label="COFFEE POWERED" accent="yellow" rot={-3} />
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-2 left-4">
              <Annotation text="probably adjusting spacing. again." />
            </div>
          </div>
          <h2 className="mt-3 font-heading text-xl font-bold text-ink">Who I am</h2>
          <p className="mt-1 text-[14px] leading-relaxed text-ink/80">
            I'm Hanaa — a UI/UX Designer who likes turning messy ideas into clear, useful and memorable experiences.
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
            I care about the question behind the interface:{" "}
            <span className="font-bold text-ink">"Why should this exist?"</span>
          </p>
        </Frame>

        <div className="flex flex-col gap-4">
          {/* HOW I THINK */}
          <Frame title="how_i_think.fig" accent="blue" size="W 420 × H 240" cursorLabel="READ" onSelect={() => onSelect("hanaa")}>
            <h3 className="font-heading text-base font-bold text-ink">How I think</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              Problem → Idea → Experience
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {HOW_I_THINK.map((s, i) =>
              <span key={s} className="flex items-center gap-1.5">
                  <span className="rounded-sm border-2 border-ink bg-paper px-2 py-1 font-mono text-[10px] font-bold uppercase text-ink chunk-sm">
                    {s}
                  </span>
                  {i < HOW_I_THINK.length - 1 && <span className="font-mono text-[10px] text-ink/40">→</span>}
                </span>
              )}
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-ink/80">{profile.positioning}</p>
          </Frame>

          {/* MY SECRET WEAPON */}
          <Frame title="secret_weapon.fig" accent="green" size="W 420 × H 240" cursorLabel="INSPECT" onSelect={() => onSelect("hanaa")}>
            <div className="flex items-center gap-2">
              <Sticker label="SECRET WEAPON" accent="green" rot={-3} />
              <span className="font-mono text-[9px] uppercase tracking-wide text-muted-foreground">
                the technical advantage
              </span>
            </div>
            <p className="mt-2 font-heading text-[15px] font-bold leading-snug text-ink">
              "{profile.secretWeapon}"
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink/80">
              My Front-End background helps me design with implementation in mind — making my work more
              realistic, collaborative and developer-friendly.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {profile.frontEndValue.map((f) =>
              <span
                key={f}
                className="rounded-sm border border-ink/40 bg-muted/50 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-ink">
                
                  {f}
                </span>
              )}
            </div>
          </Frame>
        </div>
      </div>

      {/* verified CV strip */}
      <div className="mt-4">
        <Frame title="cv.fig" accent="yellow" cursorLabel="DOWNLOAD CV" onSelect={() => onSelect("hanaa")}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-xl text-[13px] leading-relaxed text-ink">{profile.cvSummary}</p>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN CV ↗"
              className="shrink-0 rounded-md border-2 border-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wide chunk-sm transition hover:-translate-y-0.5 bg-[hsl(var(--yellow))] text-[hsl(var(--ink))]">
              
              OPEN CV ↗
            </a>
          </div>
        </Frame>
      </div>
    </div>);

}