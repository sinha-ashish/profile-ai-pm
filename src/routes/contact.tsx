import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/site/Container";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ashish Sinha" },
      { name: "description", content: "Open to Senior AI Product roles in Paris. Email, phone, or LinkedIn." },
      { property: "og:title", content: "Contact — Ashish Sinha" },
      { property: "og:description", content: "Let's have a conversation about enterprise AI delivery." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 rounded-xl bg-ink p-9 md:grid-cols-[1fr_auto] md:p-16">
          <div>
            <h1 className="mb-2.5 font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Open to the right<br />opportunity.
            </h1>
            <p className="text-[0.95rem] text-white/55">
              Senior AI Product roles in Paris. Enterprise delivery, governance,<br className="hidden md:inline" />
              and GenAI at scale. Let's have a conversation.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-3 md:flex-col">
            <a href="mailto:ashish.sinha2408@gmail.com" className="flex items-center gap-2.5 whitespace-nowrap rounded-md border border-white/10 bg-white/[0.07] px-[22px] py-3.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-white/[0.12]">
              ✉️ &nbsp;ashish.sinha2408@gmail.com
            </a>
            <a href="tel:+33618973960" className="flex items-center gap-2.5 whitespace-nowrap rounded-md border border-white/10 bg-white/[0.07] px-[22px] py-3.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-white/[0.12]">
              📞 &nbsp;+33 6 18 97 39 60
            </a>
            <a href="https://www.linkedin.com/in/ashish-sinha" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 whitespace-nowrap rounded-md border border-white/10 bg-white/[0.07] px-[22px] py-3.5 text-[0.85rem] font-medium text-white transition-colors hover:bg-white/[0.12]">
              💼 &nbsp;LinkedIn Profile →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
