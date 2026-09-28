import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "./Container";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.03] px-6 py-16 text-center sm:px-12">
          <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
          <p className="relative font-mono text-xs uppercase tracking-[.2em] text-cyan-300">06 / Contact</p>
          <h2 className="relative mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Let&apos;s build something useful.</h2>
          <p className="relative mx-auto mt-5 max-w-xl leading-7 text-zinc-400">I&apos;m open to junior software engineering opportunities in Morocco and international roles where relocation or sponsorship is available.</p>
          <a href={`mailto:${site.email}`} className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"><Mail size={16} /> {site.email} <ArrowUpRight size={15} /></a>
        </div>
      </Container>
    </section>
  );
}
