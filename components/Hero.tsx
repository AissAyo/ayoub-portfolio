"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "./Container";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
      <Container className="relative py-24">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[.2em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-300" /> Available for junior opportunities
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[.98] tracking-[-.05em] text-zinc-400 sm:text-7xl lg:text-[88px]">
            I build software<br /><span className="text-white">that works.</span>
          </h1>
          <p className="  mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl " style={{backgroundColor: "#080d20"}}>
            I&apos;m <span className="text-zinc-100">{site.name}</span>, a {site.role.toLowerCase()} focused on Java, Spring Boot, React, and modern cloud &amp; DevOps practices.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200">
              View my work <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={site.cv} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/25 hover:bg-white/5">
              Download CV
            </a>
          </div>
          <div className="mt-9 flex items-center gap-5 text-zinc-200">
            <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer" className="transition hover:text-white"><Github size={19} /></a>
            <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white"><Linkedin size={19} /></a>
            <span className="h-4 w-px bg-white/10" />
            <span className="font-mono text-xs">{site.location}</span>
          </div>
        </motion.div>
        <a href="#about" className="absolute bottom-10 left-5 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-600 sm:flex">Scroll <ArrowDown size={13} /></a>
      </Container>
    </section>
  );
}
