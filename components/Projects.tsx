"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-28">
      <Container>
        <SectionHeading eyebrow="03 / Selected work" title="Projects with real engineering depth." text="A selection of projects that demonstrate backend architecture, frontend delivery, data, security, and DevOps." />
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * .07 }} className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[.025] p-7 transition hover:border-cyan-300/20 ${project.featured ? "lg:col-span-2 lg:p-9" : ""}`}>
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-300/5 blur-3xl transition group-hover:bg-cyan-300/10" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-zinc-600">{project.number}</span>
                  <ArrowUpRight size={19} className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                </div>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[.18em] text-cyan-300">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
               <div className="binary-safe">
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">{project.description}</p>
               </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {project.stack.map((tech) => <span key={tech} className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] text-zinc-300">{tech}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
