import { BriefcaseBusiness, Code2 } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <div id="experience" className="border-t border-white/5 py-28">
      <Container>
        <SectionHeading
          eyebrow="02 / Experience"
          title="Professional experience"
        />

        <div className="max-w-5xl">
          <div className="space-y-12">
            
            <section id="experience">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className="relative grid gap-5 md:grid-cols-[180px_1fr]"
              >
                {/* Timeline */}
                <div className="font-mono text-xs text-zinc-200 md:pt-1">
                  {item.date}
                </div>

                {/* Experience content */}
                <div className="relative border-l border-white/10 pl-7">
                  {/* Timeline dot */}
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.35)]" />

                  {/* Company */}
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
                    <BriefcaseBusiness size={16} />
                    <span>{item.company}</span>
                  </div>

                  {/* Role */}
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                    {item.role}
                  </h3>

                  {/* Description */}
                  <div className="binary-safe">
                  <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
                    {item.description}
                  </p>
                  </div>
<div className="binary-safe">
                  {/* Technologies */}
                  {item.technologies?.length > 0 && (
                    <div className="mt-6">
                      <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                        <Code2 size={13} />
                        <span>Technologies</span>
                      </div>

                    
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-zinc-300 transition-all duration-200 hover:border-cyan-300/30 hover:bg-cyan-300/[0.03] hover:text-cyan-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                    </div>
                </div>
              </article>
            ))}
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
