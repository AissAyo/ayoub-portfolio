import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-28">
      <Container>
        <SectionHeading
          eyebrow="04 / Toolkit"
          title="Technologies I work with."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.group}
              className="binary-safe bg-zinc-950 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                {skill.group}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/8 px-3 py-2 text-sm text-zinc-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}