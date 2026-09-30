import { GraduationCap } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="border-t border-white/5 py-24">
      <Container>
        <SectionHeading eyebrow="05 / Education" title="Computer engineering foundation." />
        <div className="flex flex-col gap-4 rounded-3xl border border-white/8 bg-white/[.025] p-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="binary-safe"> 
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-white/10 p-3"><GraduationCap size={20} className="text-cyan-300" /></div>
            <div><h3 className="font-medium text-white">École des Hautes Études d&apos;Ingénierie — Oujda</h3><p className="mt-1 text-sm text-zinc-400">Engineering Degree · Computer Engineering</p></div>
          </div>
          </div>
          <span className="font-mono text-xs text-zinc-600">2021 — 2026</span>
        </div>
      </Container>
    </section>
  );
}
