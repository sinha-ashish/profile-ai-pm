import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { SectionLabel } from "../components/site/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Sinha — Enterprise AI Product Leader" },
      { name: "description", content: "Senior AI Product Leader. 9 years scaling enterprise AI from prototype to production. €30M portfolio governance, 15+ GenAI use cases shipped." },
      { property: "og:title", content: "Ashish Sinha — Enterprise AI Product Leader" },
      { property: "og:description", content: "9 years leading cross-functional AI squads across €30M+ portfolios. Paris." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

type ImpactCard = {
  tag: string;
  title: string;
  body: string;
  metric: string;
  metricSub: string;
};

const impacts: ImpactCard[] = [
  {
    tag: "Capgemini · 2024–Present",
    title: "Enterprise AI Guardrailing Framework",
    body: "Built the EU AI Act-aligned risk framework covering live production deployments across a €30M application portfolio — enabling compliance before regulators asked for it.",
    metric: "€200k",
    metricSub: "annual CAPEX/OPEX savings secured for 2025",
  },
  {
    tag: "Capgemini · 2024–Present",
    title: "GenAI Production Cadence",
    body: "Integrated 15+ advanced AI use cases into existing delivery pipelines, modeling token consumption economics and operationalising 100+ hours/week of automation at enterprise scale.",
    metric: "15+",
    metricSub: "GenAI use cases in live production",
  },
  {
    tag: "Capgemini · 2024–Present",
    title: "5-Module Enterprise Finance Product",
    body: "Translated multi-stakeholder requirements into standardised integration touchpoints across accounting, compliance, and operational workflows — 10+ high-impact releases delivered.",
    metric: "10+",
    metricSub: "major releases, zero critical regression",
  },
  {
    tag: "EIT Manufacturing · 2021–2023",
    title: "EU Learning Platform: 0 → 150 Partners",
    body: "Architected the 0-to-1 product strategy for an EU-funded deep tech platform — scaling institutional adoption across 150+ partners from a standing start.",
    metric: "87%",
    metricSub: "CSAT across the EU",
  },
  {
    tag: "EIT Manufacturing · 2021–2023",
    title: "Community Adoption Acceleration",
    body: "Drove full product lifecycle from roadmap strategy and API expansion to release governance and post-launch analytics — maintaining alignment across 20+ institutional contributors.",
    metric: "+55%",
    metricSub: "active adoption within 6 months",
  },
  {
    tag: "FizzyHomes · 2019–2021",
    title: "UX-Driven Revenue Growth",
    body: "Led digital infrastructure overhaul in direct collaboration with Commercial and IT leadership — user journey mapping translated into measurable commercial uplift.",
    metric: "+27%",
    metricSub: "conversion rate improvement",
  },
];

const stats = [
  { num: "€", highlight: "30", suffix: "M", label: "AI application portfolio\nunder active governance" },
  { num: "", highlight: "15", suffix: "+", label: "GenAI use cases shipped\nto live production" },
  { num: "", highlight: "100", suffix: "+", label: "hours/week operational\nautomation delivered" },
  { num: "", highlight: "5", suffix: "", label: "countries · 6 teams\nin simultaneous delivery" },
];

function HomePage() {
  return (
    <>
      <section className="border-b border-rule pt-24 pb-[72px]">
        <Container>
          <div className="mb-7 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-mid">
            <span className="pulse-dot" />
            Open to Senior AI Product roles · Paris
          </div>
          <h1 className="mb-7 max-w-[780px] font-syne text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[1] tracking-[-0.03em]">
            Enterprise AI<br />from <em className="not-italic gradient-text">prototype<br />to production.</em>
          </h1>
          <p className="mb-11 max-w-[560px] text-[1.1rem] leading-[1.7] text-mid">
            9 years leading cross-functional AI squads across €30M+ portfolios.
            I build the governance, cadence, and delivery discipline that makes
            enterprise AI dependable — not just impressive in a demo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:ashish.sinha2408@gmail.com" className="rounded-full bg-ink px-7 py-[14px] text-[0.92rem] font-semibold text-white transition-colors hover:bg-accent">
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/ashish-sinha" target="_blank" rel="noreferrer" className="rounded-full border-[1.5px] border-rule px-7 py-[13px] text-[0.92rem] font-medium transition-colors hover:border-ink">
              View LinkedIn →
            </a>
          </div>
        </Container>
      </section>

      <div className="grid grid-cols-2 border-b border-rule md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`px-8 py-9 ${i < stats.length - 1 ? "border-r border-rule" : ""} ${i < 2 ? "border-b border-rule md:border-b-0" : ""}`}
          >
            <div className="mb-1.5 font-syne text-[2.4rem] font-extrabold leading-none tracking-[-0.03em]">
              {s.num}
              <span className="text-accent">{s.highlight}</span>
              {s.suffix}
            </div>
            <div className="whitespace-pre-line text-[0.8rem] leading-[1.4] text-mid">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="border-b border-rule py-20">
        <Container>
          <SectionLabel>Selected Impact</SectionLabel>
          <h2 className="mb-4 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            Results that show up<br />on the P&amp;L, not just the roadmap.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {impacts.map((c) => (
              <article key={c.title} className="rounded-md border border-rule bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]">
                <span className="mb-4 inline-block rounded-full bg-[rgba(26,86,219,0.08)] px-2.5 py-[3px] text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">
                  {c.tag}
                </span>
                <h3 className="mb-2.5 font-syne text-[1.05rem] font-bold leading-[1.3]">{c.title}</h3>
                <p className="text-[0.875rem] leading-[1.65] text-mid">{c.body}</p>
                <div className="mt-5 border-t border-rule pt-5 font-syne text-[1.5rem] font-bold tracking-[-0.02em]">
                  {c.metric}
                  <small className="mt-0.5 block font-inter text-[0.72rem] font-normal tracking-normal text-mid">
                    {c.metricSub}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 rounded-xl bg-ink p-12 md:grid-cols-[1fr_auto] md:p-16">
            <div>
              <h2 className="mb-2.5 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                Open to the right<br />opportunity.
              </h2>
              <p className="text-[0.95rem] text-white/55">
                Senior AI Product roles in Paris. Enterprise delivery, governance, and GenAI at scale.
              </p>
            </div>
            <Link to="/contact" className="self-start rounded-full bg-white px-7 py-[14px] text-[0.92rem] font-semibold text-ink transition-opacity hover:opacity-90 md:self-auto">
              Start a conversation →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
