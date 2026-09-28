export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-7 text-zinc-400">{text}</p>}
    </div>
  );
}
