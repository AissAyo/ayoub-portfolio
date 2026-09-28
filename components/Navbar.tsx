"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-white">
          Ayoub Aissaoui <span className="text-cyan-300"></span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={`#${href}`} className="text-sm text-zinc-400 transition hover:text-white">{label}</a>
          ))}
        </nav>
        <a href={`mailto:${site.email}`} className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-200 md:block">Let&apos;s talk</a>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="text-zinc-300 md:hidden">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/5 px-5 py-5 md:hidden">
          {links.map(([label, href]) => (
            <a key={href} onClick={() => setOpen(false)} href={`#${href}`} className="block py-3 text-sm text-zinc-300">{label}</a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
