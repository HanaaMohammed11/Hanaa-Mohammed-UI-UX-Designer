import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, ja3farImg } from "@/lib/workspace-data";
import Frame from "@/components/workspace/Frame";
import Sticker from "@/components/workspace/Sticker";
import Annotation from "@/components/workspace/Annotation";

export default function ContactCanvas() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ subject: "Let's make something interesting.", message: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
      <Frame title="new_message.fig" accent="green" cursorLabel="SEND IT ✦">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink">New Message</span>
          <span className="flex items-center gap-1 rounded-full border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-ink chunk-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green" /> online
          </span>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-muted-foreground">To</span>
            <div className="flex items-center gap-2 rounded-md border-2 border-ink bg-muted/40 px-2 py-1.5">
              <span className="grid h-5 w-5 place-items-center rounded-sm border-2 border-ink bg-pink text-[10px]">H</span>
              <span className="font-mono text-[12px] font-bold text-ink">{profile.fullName}</span>
            </div>
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-muted-foreground">Subject</span>
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              data-cursor="TYPE"
              className="rounded-md border-2 border-ink bg-paper px-2 py-1.5 font-mono text-[12px] text-ink outline-none focus:bg-yellow" />
            
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-muted-foreground">Message</span>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              placeholder="Tell me what you're building."
              data-cursor="TYPE"
              className="resize-none rounded-md border-2 border-ink bg-paper px-2 py-1.5 font-mono text-[12px] text-ink outline-none focus:bg-yellow" />
            
          </label>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] text-muted-foreground">esc to close · nothing will break. probably.</span>
            <button
              type="submit"
              data-cursor="SEND IT ✦"
              className="rounded-md border-2 border-ink bg-green px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wide text-paper chunk-sm transition hover:-translate-y-0.5">
              
              Send it ✦
            </button>
          </div>
        </form>
        <AnimatePresence>
          {sent &&
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center gap-3 rounded-md border-2 border-ink bg-yellow p-3 chunk-sm">
            
              <img
                src={ja3farImg}
                alt="Ja3far approves"
                className="h-14 w-14 object-contain"
                style={{ filter: "drop-shadow(2px 2px 0 hsl(0 0% 6%))" }} />
            
              <div>
                <div className="font-mono text-[12px] font-bold uppercase text-ink">Message delivered.</div>
                <p className="font-mono text-[10px] text-ink/70">Ja3far approves. Real replies land at {profile.email}.</p>
              </div>
              <button
              onClick={() => setSent(false)}
              data-cursor="AGAIN"
              className="ml-auto rounded border-2 border-ink bg-paper px-2 py-1 font-mono text-[9px] font-bold uppercase text-ink">
              
                Send another
              </button>
            </motion.div>
          }
        </AnimatePresence>
      </Frame>

      {/* links as selectable objects */}
      <Frame title="links.fig" accent="blue" cursorLabel="OPEN ↗">
        <div className="flex flex-col gap-2">
          {[
          { id: "linkedin", label: "LinkedIn", note: "linkedin.com/in/hanaa-mohammed-5b9384369", url: profile.linkedin, glyph: "in" },
          { id: "behance", label: "Behance", note: "behance.net/hanaaali11", url: profile.behance, glyph: "Be" },
          { id: "email", label: "Email", note: profile.email, url: `mailto:${profile.email}`, glyph: "✉" }].
          map((l) =>
          <a
            key={l.id}
            href={l.url}
            target={l.id === "email" ? undefined : "_blank"}
            rel="noreferrer"
            data-cursor="OPEN ↗"
            className="group flex items-center gap-3 rounded-md border-2 border-ink bg-muted/40 p-2 transition hover:bg-yellow chunk-sm">
            
              <span className="grid h-8 w-8 place-items-center rounded-md border-2 border-ink bg-paper font-mono text-[11px] font-bold text-ink">
                {l.glyph}
              </span>
              <div className="flex-1">
                <div className="font-mono text-[12px] font-bold uppercase tracking-wide text-ink">{l.label}</div>
                <div className="font-mono text-[9px] text-muted-foreground">{l.note}</div>
              </div>
              <span className="font-mono text-[12px] text-ink transition group-hover:translate-x-1">↗</span>
            </a>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Sticker label="DESIGN MODE" accent="red" rot={-3} />
          <Sticker label="SHIP IT" accent="green" rot={4} />
        </div>
        <div className="mt-2">
          <Annotation text="good UX hiding in plain sight." />
        </div>
        {/* Ja3far Easter egg */}
        <div className="mt-3 flex items-center gap-2 rounded-md border-2 border-dashed border-ink/40 p-2">
          <img src={ja3farImg}
          alt="Ja3far reviewing"
          className="h-10 w-10 object-contain"
          style={{ filter: "drop-shadow(1px 1px 0 hsl(0 0% 6%))" }} />
          
          <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
            JA3FAR SAYS: send the email already.
          </span>
        </div>
      </Frame>
    </div>);

}