import React from "react";

export default function ContactWindow() {
  return (
    <div className="p-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-ink/60">leave_a_note.txt</p>
      <h2 className="mt-1 font-display text-xl font-bold leading-tight tracking-tight">
        Got a problem that's messier than it looks?
      </h2>
      <p className="mt-2 text-[13px] leading-snug text-ink/75">
        That's the good kind. I read everything and usually reply with at least one
        uninvited question.
      </p>

      <div className="mt-3 space-y-2">
        {[
          { label: "Email", value: "hello@atelier.studio", href: "mailto:hello@atelier.studio", icon: "✉", accent: "bg-blue text-paper" },
          { label: "Instagram", value: "@atelier.questions", href: "https://instagram.com", icon: "◎", accent: "bg-pink text-ink" },
          { label: "Résumé", value: "download .pdf", href: "#", icon: "▤", accent: "bg-teal text-paper" },
          { label: "LinkedIn", value: "/in/atelier", href: "https://linkedin.com", icon: "◈", accent: "bg-red text-paper" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border-2 border-ink bg-paper p-2 chunk-sm transition hover:-translate-y-0.5"
          >
            <span className={`grid h-8 w-8 place-items-center rounded-md border-2 border-ink ${c.accent} text-sm`}>{c.icon}</span>
            <span>
              <span className="block font-mono text-[9px] uppercase tracking-wide text-ink/55">{c.label}</span>
              <span className="block text-[13px] font-bold leading-none">{c.value}</span>
            </span>
          </a>
        ))}
      </div>

      <p className="mt-3 font-mono text-[10px] text-ink/45">Still asking: what if?</p>
    </div>
  );
}