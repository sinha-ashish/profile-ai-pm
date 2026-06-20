import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Ashish Sinha" },
      { name: "description", content: "Nine years of product and program leadership across Capgemini, EIT Manufacturing, FizzyHomes, Airbnb, and Zomato." },
      { property: "og:title", content: "Experience — Ashish Sinha" },
      { property: "og:description", content: "Nine years of building. Always closer to the outcome than the process." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const timeline = [
  {
    dateStrong: "Jan 2026",
    date: "Present",
    role: "Program Manager",
    company: "Capgemini · Paris",
    body: "Orchestrating a €14M cross-functional transformation portfolio across 5 countries and 6 teams. Applying SAFe® 6 and GenAI delivery frameworks to compress time-to-market and accelerate cloud-native adoption at enterprise scale.",
    chips: ["SAFe® 6", "GenAI", "€14M Portfolio", "5 Countries"],
  },
  {
    dateStrong: "Mar 2024",
    date: "Dec 2025",
    role: "Senior Product Lead",
    company: "Capgemini · Paris",
    body: "Led cross-functional AI squads integrating 15+ GenAI use cases into production pipelines. Built the EU AI Act guardrailing framework, architected the 5-module enterprise finance product, and instituted the agile PM capability-building framework securing €200k+ in annual savings.",
    chips: ["EU AI Act", "€30M Portfolio", "RAG", "Vertex AI", "AWS Bedrock"],
  },
  {
    dateStrong: "Sep 2021",
    date: "Aug 2023",
    role: "Digital Product Owner",
    company: "EIT Manufacturing · Paris",
    body: "Built an EU-funded deep tech learning platform from zero to 150+ institutional partners. Full product lifecycle ownership: roadmap, API expansion, release governance, post-launch analytics. Achieved 87% CSAT and +55% active adoption in 6 months.",
    chips: ["0-to-1", "API Expansion", "87% CSAT", "150+ Partners"],
  },
  {
    dateStrong: "Aug 2019",
    date: "Jul 2021",
    role: "Digital Product Analyst",
    company: "FizzyHomes · Paris",
    body: "Drove full digital infrastructure overhaul in partnership with Commercial and IT leadership. UX redesign based on user journey mapping generated a 27% uplift in conversion rates and established a self-serve analytics infrastructure for Sales & Marketing.",
    chips: ["UX Research", "+27% Conversion", "Analytics"],
  },
  {
    dateStrong: "Apr 2017",
    date: "Aug 2018",
    role: "Senior Associate & Data Analyst",
    company: "Airbnb & Zomato · Gurugram",
    body: "Translated global product frameworks into market-specific execution roadmaps for 1,000+ partner clients. Engineered behavioural data insights defining 70+ product enhancements across 5 countries.",
    chips: ["Data Analytics", "Product Execution", "70+ Enhancements"],
  },
];

const instincts = [
  {
    label: "Ambiguity",
    headline: "No brief. Two weeks. An unfamiliar stack.",
    body: "Brought a business-critical problem from an internal enterprise client at global scale. No clean brief, a two-week window, an unfamiliar tech stack. Proposed a working prototype targeting the core user journeys before being asked, validated it, then ran a 3-day hackathon — functional user journeys delivered in five days.",
    quote: "Sceptical stakeholders became advocates because they understood why, not just what.",
  },
  {
    label: "Growth Mechanics",
    headline: "Distribution through trust, not spend.",
    body: "Scaled a 0-to-1 EU-funded platform from zero to a 150+ partner network by aligning with research institutions people already trusted. Redesigned onboarding separately for creators and learners, and built a free certification mechanic that gave both sides a reason to return.",
    quote: "The platform was discovered through channels people already trusted — not sold to them cold.",
  },
  {
    label: "Builder's Instinct",
    headline: "I build my own tools before I'm asked to.",
    body: "Vibe-coded an AI-powered personal system using Claude that manages interview prep, positioning, and application content as a structured, reusable database — the same instinct now directed at enterprise AI delivery.",
    quote: "I built a personal AI Studio before I knew the name for it.",
  },
];

function ExperiencePage() {
  return (
    <>
      <section className="border-b border-rule py-20">
        <Container>
          <SectionLabel>Career Timeline</SectionLabel>
          <h1 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Nine years of building.<br />Always closer to the outcome than the process.
          </h1>
          <div className="mt-12">
            {timeline.map((t, i) => (
              <div
                key={t.role + t.dateStrong}
                className={`grid grid-cols-1 gap-1 py-8 md:grid-cols-[140px_1fr] md:gap-8 ${i < timeline.length - 1 ? "border-b border-rule" : ""}`}
              >
                <div className="pt-[3px] text-[0.78rem] font-medium text-mid md:text-right">
                  <strong className="mb-0.5 block font-syne text-[0.88rem] font-bold text-ink">{t.dateStrong}</strong>
                  {t.date}
                </div>
                <div>
                  <h3 className="mb-1 font-syne text-[1.05rem] font-bold">{t.role}</h3>
                  <div className="mb-2.5 text-[0.8rem] font-medium text-accent">{t.company}</div>
                  <p className="text-[0.875rem] leading-[1.65] text-mid">{t.body}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.chips.map((c) => (
                      <span key={c} className="rounded-full border border-rule bg-paper px-2.5 py-[3px] text-[0.7rem] font-medium text-mid">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-rule py-20">
        <Container>
          <SectionLabel>How I Operate</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Three instincts<br />the résumé can't show.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {instincts.map((m) => (
              <div key={m.label} className="rounded-md border border-rule bg-card p-7">
                <div className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent2">{m.label}</div>
                <h3 className="mb-3 font-syne text-[1.1rem] font-bold leading-[1.25]">{m.headline}</h3>
                <p className="text-[0.875rem] leading-[1.65] text-mid">{m.body}</p>
                <p className="mt-4 border-t border-rule pt-4 text-[0.85rem] italic text-ink/90">“{m.quote}”</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
