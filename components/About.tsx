import { Code2, Database, Cloud, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const cards = [
  [Code2, "Full Stack", "Backend APIs and modern React interfaces, with a strong Java / Spring Boot focus."],
  [Database, "Data", "Relational databases, ORM, SQL design, queries, and business-oriented data flows."],
  [Cloud, "Cloud & DevOps", "Docker, CI/CD, automation, and a growing focus on AWS and cloud engineering."],
  [ShieldCheck, "Security", "JWT, OAuth2, Microsoft Entra ID, role-based authorization, and permission synchronization."],
] as const;

export function About() {
  return (
    <section id="about" className="border-t border-white/5 py-28">
      <Container>
        <SectionHeading eyebrow="01 / About" title="An engineer who likes understanding the whole system." />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-5 text-zinc-400 leading-8">
            <p>I&apos;m a computer engineering graduate based in Morocco, with hands-on experience building business applications from API to interface.</p>
            <p>During my PFE at Munisys, I worked on a real-world CRM and SharePoint integration involving authentication, authorization, document management, synchronization, and enterprise data.</p>
            <p>My current direction combines full-stack development with cloud and DevOps, with the goal of becoming a strong production-oriented software engineer.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map(([Icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/8 bg-white/[.025] p-5">
                <Icon size={20} className="text-cyan-300" />
                <h3 className="mt-5 font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
