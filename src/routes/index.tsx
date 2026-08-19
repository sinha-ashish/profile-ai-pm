import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { Reveal } from "../components/site/Reveal";
import { CollapsibleSection } from "../components/site/CollapsibleSection";
import { OperatingAccordion } from "../components/site/OperatingAccordion";
import { TriTier } from "../components/site/TriTier";
import { LinkedInProfileBadge } from "../components/site/LinkedInProfileBadge";
import { useLanguage } from "../lib/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Sinha — Enterprise AI Product Leader" },
      { name: "description", content: "Senior AI Product Leader. 9 years scaling enterprise AI from prototype to production. €30M portfolio governance, 15+ GenAI use cases shipped." },
      { property: "og:title", content: "Ashish Sinha — Enterprise AI Product Leader" },
      { property: "og:description", content: "9 years leading cross-functional AI squads across €30M+ portfolios. Paris." },
      { property: "og:url", content: "https://ai-product-paris.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://ai-product-paris.lovable.app/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ashish Sinha",
        jobTitle: "Enterprise AI Product Leader",
        description: "Senior AI Product Leader. 9 years scaling enterprise AI from prototype to production. €30M portfolio governance, 15+ GenAI use cases shipped.",
        url: "https://ai-product-paris.lovable.app/",
        sameAs: "https://www.linkedin.com/in/sinha-ashish/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
          addressCountry: "FR",
        },
      }),
    }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLanguage();
  const d = t.dashboard;

  return (
    <>
      {/* HERO */}
      <section id="home" className="border-b border-rule pt-24 pb-[72px]">
        <Container>
          <div className="mb-7 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-mid">
            {t.hero.badge}
          </div>
          <h1 className="mb-7 max-w-[820px] font-syne text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            {t.hero.h1}
          </h1>
          <p className="mb-11 max-w-[620px] text-[1.1rem] leading-[1.7] text-mid">
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-accent px-7 py-[14px] text-[0.92rem] font-semibold text-white transition-opacity hover:opacity-90">
              {t.hero.cta}
            </a>
            <a href="https://www.linkedin.com/in/sinha-ashish/" target="_blank" rel="noreferrer" className="rounded-full border-[1.5px] border-rule px-7 py-[13px] text-[0.92rem] font-medium transition-colors hover:border-ink">
              {t.hero.linkedin}
            </a>
          </div>
        </Container>
      </section>

      {/* OPERATOR'S INSTINCT */}
      <CollapsibleSection id="instinct" label={t.instinct.label} heading={t.instinct.h2}>
        <div className="grid grid-cols-1 gap-5">
          {t.instinct.cards.map((c, i) => (
            <Reveal key={c.tag} delay={i * 100}>
              <InstinctCard {...c} />
            </Reveal>
          ))}
        </div>
      </CollapsibleSection>

      {/* STUDIO */}
      <CollapsibleSection id="studio" label={t.studio.label} heading={t.studio.h2} intro={t.studio.intro}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.studio.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="flex h-full flex-col rounded-md border border-rule bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent">{c.tag}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(26,86,219,0.08)] px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
                    {t.studio.livePill}
                  </span>
                </div>
                <h3 className="mb-3 font-syne text-[1.2rem] font-bold leading-[1.25] tracking-[-0.01em]">{c.title}</h3>
                <p className="text-[0.875rem] leading-[1.65] text-mid">{c.problem}</p>
                <p className="mt-4 border-t border-rule pt-4 font-syne text-[0.9rem] font-semibold leading-[1.5] text-ink">{c.judgement}</p>
                <div className="mt-5 flex-1" />
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[0.78rem] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {c.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-mid">
          {t.studio.moreLabel}
        </div>
      </CollapsibleSection>

      {/* EXECUTION DASHBOARD */}
      <CollapsibleSection id="dashboard" label={d.label} heading={d.h2}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal delay={0}><DashCard {...d.cards[0]} /></Reveal>
          <Reveal delay={100}>
            <DashCard {...d.cards[1]}>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {d.complianceTags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(26,86,219,0.08)] px-3 py-1 text-[0.72rem] font-semibold text-accent">
                    <span aria-hidden>✓</span> {tag}
                  </span>
                ))}
              </div>
            </DashCard>
          </Reveal>
          <Reveal delay={200}>
            <DashCard {...d.cards[2]}>
              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-rule pt-5">
                <div>
                  <div className="font-syne text-[1.75rem] font-bold leading-none tracking-[-0.02em] text-accent">150+</div>
                  <div className="mt-1 text-[0.72rem] text-mid">{d.partnersCaption}</div>
                </div>
                <div>
                  <div className="font-syne text-[1.75rem] font-bold leading-none tracking-[-0.02em] text-accent">87%</div>
                  <div className="mt-1 text-[0.72rem] text-mid">{d.csatCaption}</div>
                </div>
              </div>
              <ProgressBar value={55} caption={d.adoptionCaption} />
            </DashCard>
          </Reveal>
          <Reveal delay={300}>
            <DashCard {...d.cards[3]}>
              <div className="mt-5">
                <div className="mb-1.5 flex items-center justify-between text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-mid">
                  <span>{d.sprintLabel}</span>
                  <span className="text-accent">80%</span>
                </div>
                <ProgressBar value={80} caption={d.sprintCaption} />
              </div>
            </DashCard>
          </Reveal>
        </div>
      </CollapsibleSection>

      {/* EXPERTISE */}
      <CollapsibleSection id="expertise" label={t.expertise.label} heading={t.expertise.h2}>
        <div className="grid grid-cols-1 overflow-hidden rounded-md border border-rule md:grid-cols-2">
          {t.expertise.items.map((it, i) => {
            const isRight = i % 2 === 1;
            const isBottomTwo = i >= t.expertise.items.length - 2;
            return (
              <div key={it.title} className={`bg-card p-9 ${!isRight ? "md:border-r border-rule" : ""} ${!isBottomTwo ? "border-b border-rule" : ""}`}>
                <div className="mb-3.5 text-[1.4rem]">{it.icon}</div>
                <h3 className="mb-2 font-syne text-[0.98rem] font-bold">{it.title}</h3>
                <p className="text-[0.82rem] leading-[1.6] text-mid">{it.body}</p>
              </div>
            );
          })}
        </div>
      </CollapsibleSection>

      {/* OPERATING MANUAL */}
      <CollapsibleSection id="manual" label={t.manual.label} heading={t.manual.h2}>
        <OperatingAccordion />
      </CollapsibleSection>

      {/* ARCHITECTURE VAULT */}
      <CollapsibleSection id="architecture" label={t.architecture.label} heading={t.architecture.h2}>
        <TriTier />
      </CollapsibleSection>

      {/* EXPERIENCE */}
      <CollapsibleSection id="experience" label={t.experience.label} heading={t.experience.h2}>
        <div>
          {t.experience.timeline.map((tl, i) => (
            <div key={tl.role + tl.dateStrong} className={`grid grid-cols-1 gap-1 py-8 md:grid-cols-[140px_1fr] md:gap-8 ${i < t.experience.timeline.length - 1 ? "border-b border-rule" : ""}`}>
              <div className="pt-[3px] text-[0.78rem] font-medium text-mid md:text-right">
                <strong className="mb-0.5 block font-syne text-[0.88rem] font-bold text-ink">{tl.dateStrong}</strong>
                {tl.date}
              </div>
              <div>
                <h3 className="mb-1 font-syne text-[1.05rem] font-bold">{tl.role}</h3>
                <div className="mb-2.5 text-[0.8rem] font-medium text-accent">{tl.company}</div>
                <p className="text-[0.875rem] leading-[1.65] text-mid">{tl.body}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tl.chips.map((c) => (
                    <span key={c} className="rounded-full border border-rule bg-paper px-2.5 py-[3px] text-[0.7rem] font-medium text-mid">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* SKILLS */}
      <CollapsibleSection id="skills" label={t.skills.label} heading={t.skills.h2}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.skills.groups.map((g) => (
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
          {t.skills.certs.map((c) => (
            <div key={c.title} className="flex items-center gap-2.5 rounded-md border border-rule bg-card px-[18px] py-3 text-[0.8rem] font-medium transition-colors hover:border-accent">
              <span className="text-[1.1rem]">{c.icon}</span>
              <div>
                {c.title}
                <small className="block text-[0.7rem] font-normal text-mid">{c.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* MOTIVATION & FIT */}
      <CollapsibleSection id="fit" label={t.fit.label} heading={t.fit.h2}>
        <div className="space-y-5">
          {t.fit.blocks.map((b) => (
            <Reveal key={b.label}>
              <div className="border-l-[3px] border-accent bg-card pl-5 py-3 md:pl-7">
                <div className="mb-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent">{b.label}</div>
                {"body" in b ? (
                  <p className="text-[0.95rem] leading-[1.7] text-mid">{b.body}</p>
                ) : (
                  <div className="space-y-4">
                    {b.subBlocks.map((sub) => (
                      <div key={sub.subLabel}>
                        <div className="mb-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-accent">{sub.subLabel}</div>
                        <p className="text-[0.95rem] leading-[1.7] text-mid">{sub.subBody}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </CollapsibleSection>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-20 scroll-mt-20">
        <Container>
          <div className="grid items-center gap-10 rounded-xl bg-ink p-8 md:grid-cols-[1fr_auto] md:gap-12 md:p-16">
            <div>
              <h2 className="mb-2.5 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                {t.contact.h2}
              </h2>
              <p className="mb-7 text-[0.95rem] text-white/70">
                {t.contact.body}
              </p>
              <div className="flex flex-col gap-3 sm:max-w-xs">
                <a
                  href="mailto:ashish.sinha2408@gmail.com"
                  aria-label={t.contact.ctaEmail}
                  className="flex items-center justify-center gap-2.5 rounded-md border border-white/30 bg-white/15 px-[22px] py-3.5 text-[0.85rem] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/25"
                >
                  ✉️ <span>{t.contact.ctaEmail}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sinha-ashish/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-md border border-white/30 bg-white/15 px-[22px] py-3.5 text-[0.85rem] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/25"
                >
                  💼 <span>{t.contact.ctaLinkedin}</span>
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[305px] md:mx-0">
              <LinkedInProfileBadge />
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}

/* ------------------------- COMPONENTS ------------------------- */

function DashCard({ tag, title, callout, body, children }: { tag: string; title: string; callout: string; body: string; children?: React.ReactNode }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-rule bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-accent2" />
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-mid">{tag}</span>
      </div>
      <h3 className="mb-2.5 font-syne text-[1.05rem] font-bold leading-[1.3]">{title}</h3>
      <div className="mb-3 font-syne text-[1.35rem] font-bold leading-[1.2] tracking-[-0.01em] text-ink">{callout}</div>
      <p className="text-[0.875rem] leading-[1.65] text-mid">{body}</p>
      {children}
    </article>
  );
}

function ProgressBar({ value, caption }: { value: number; caption: string }) {
  return (
    <div className="mt-3">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-rule/60">
        <div className="h-full rounded-full bg-accent" style={{ width: `${value}%` }} />
      </div>
      <div className="mt-1.5 text-[0.72rem] text-mid">{caption}</div>
    </div>
  );
}

function InstinctCard({ tag, headline, body, closing }: { tag: string; headline: string; body: string; closing: string }) {
  return (
    <article className="rounded-md border border-rule bg-card p-7 md:p-9">
      <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent">{tag}</div>
      <h3 className="mb-4 font-syne text-[1.3rem] font-bold leading-[1.25] tracking-[-0.01em]">{headline}</h3>
      <p className="text-[0.95rem] leading-[1.7] text-mid">{body}</p>
      <p className="mt-5 border-t border-rule pt-5 font-syne text-[0.95rem] font-semibold leading-[1.5] text-ink">{closing}</p>
    </article>
  );
}
