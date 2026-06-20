import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Ashish Sinha" },
      { name: "description", content: "Agentic AI delivery, EU AI Act governance, portfolio ownership, cloud-native architecture, and token economics at enterprise scale." },
      { property: "og:title", content: "Expertise — Ashish Sinha" },
      { property: "og:description", content: "The intersection of AI delivery, governance, and product strategy." },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: ExpertisePage,
});

const items = [
  { icon: "🧠", title: "Agentic AI & GenAI Delivery", body: "Agent orchestration, RAG pipelines, vector databases, MCP, and AI observability — applied in enterprise production, not just prototypes." },
  { icon: "⚖️", title: "EU AI Act Governance", body: "Hands-on framework design for compliant AI deployment — risk classification, guardrail systems, and model lifecycle governance aligned to EU regulation." },
  { icon: "📦", title: "Portfolio & Roadmap Ownership", body: "Managing multi-million-euro cross-functional portfolios using SAFe® 6, Lean Portfolio Management, and data-driven CAPEX/OPEX optimisation." },
  { icon: "☁️", title: "Cloud-Native Architecture", body: "Google Cloud (Cloud Digital Leader certified), Vertex AI, AWS Bedrock, Azure DevOps — choosing and integrating the right stack for enterprise AI at scale." },
  { icon: "🔁", title: "Token Economics & AI Ops", body: "Modelling token consumption, optimising inference costs, and building the observability infrastructure that keeps AI systems accountable in production." },
  { icon: "🌍", title: "Cross-Cultural Team Leadership", body: "Building and aligning high-performing squads across 5 countries and 6 teams. Bilingual (English / French), multicultural by design." },
];

function ExpertisePage() {
  return (
    <section className="border-b border-rule py-20">
      <Container>
        <SectionLabel>Core Expertise</SectionLabel>
        <h1 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          The intersection of AI delivery,<br />governance, and product strategy.
        </h1>
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-md border border-rule md:grid-cols-2">
          {items.map((it, i) => {
            const isRight = i % 2 === 1;
            const isBottomTwo = i >= items.length - 2;
            return (
              <div
                key={it.title}
                className={`bg-card p-9 ${!isRight ? "md:border-r border-rule" : ""} ${!isBottomTwo ? "border-b border-rule" : ""}`}
              >
                <div className="mb-3.5 text-[1.4rem]">{it.icon}</div>
                <h3 className="mb-2 font-syne text-[0.98rem] font-bold">{it.title}</h3>
                <p className="text-[0.82rem] leading-[1.6] text-mid">{it.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
