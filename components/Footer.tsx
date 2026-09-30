import { Github, Linkedin } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="border-t border-white/5 py-8"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>© {new Date().getFullYear()} {site.name}.</span><div className="flex gap-4"><a href={site.github} target="_blank" rel="noreferrer" className="hover:text-white"><Github size={16}/></a><a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={16}/></a></div></div></footer>;
}
