import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Certifications — Ashish Sinha" },
      { name: "description", content: "Strategy & execution, AI & data, frameworks & governance. PMP, SAFe® Agilist, Cloud Digital Leader." },
      { property: "og:title", content: "Skills & Certifications — Ashish Sinha" },
      { property: "og:description", content: "The toolkit behind enterprise AI delivery." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

const groups = [
  {
    title: "Strategy & Execution",
    items: ["Product Vision & Roadmap Ownership", "Backlog Prioritisation", "Go-to-Market (GTM)", "Value Stream Mapping", "Use Case Prioritisation"],
  },
  {
    title: "AI & Data",
    items: ["Agent Orchestration & MCP", "RAG & Vector Databases", "Model Versioning & Lifecycle", "AI Observability", "Token Cost Economics"],
  },
  {
    title: "Frameworks & Governance",
    items: ["SAFe® 6.0 & Scrum", "EU AI Act Compliance", "Lean Portfolio Management", "CAPEX/OPEX Optimisation", "P&L Ownership"],
  },
];

const certs = [
  { icon: "🏆", title: "PMP", sub: "PMI · 2023" },
  { icon: "📐", title: "SAFe® Agilist", sub: "Scaled Agile · Mar 2026" },
  { icon: "⚙️", title: "SAFe® DevOps Practitioner", sub: "Scaled Agile · Sep 2025" },
  { icon: "☁️", title: "Cloud Digital Leader", sub: "Google · Oct 2025" },
  { icon: "🔷", title: "AZ-900 Azure Essentials", sub: "Microsoft · Jul 2025" },
];

function SkillsPage() {
  return (
    <section className="border-b border-rule py-20">
      <Container>
        <SectionLabel>Skills & Certifications</SectionLabel>
        <h1 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          The toolkit.
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-3.5 border-b border-rule pb-2.5 font-syne text-[0.9rem] font-bold">{g.title}</h3>
              <div className="flex flex-col gap-2">
                {g.items.map((it) => (
                  <span key={it} className="flex items-center gap-2.5 text-[0.82rem] text-mid">
                    <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-accent2" />
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {certs.map((c) => (
            <div key={c.title} className="flex items-center gap-2.5 rounded-md border border-rule bg-card px-[18px] py-3 text-[0.8rem] font-medium transition-colors hover:border-accent">
              <span className="text-[1.1rem]">{c.icon}</span>
              <div>
                {c.title}
                <small className="block text-[0.7rem] font-normal text-mid">{c.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
