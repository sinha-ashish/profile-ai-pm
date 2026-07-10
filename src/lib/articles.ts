// To add a new article: append an entry to the `articles` array below.
// It will automatically appear in the Writing section on the home page
// and get its own page at /writing/<slug>.

export type Article = {
  slug: string;
  title: string;
  dateLabel: string;
  isoDate: string;
  readingTime: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "what-not-to-build",
    title: "Deciding What Not to Build: The Most Senior Call in Enterprise AI",
    dateLabel: "July 10, 2026",
    isoDate: "2026-07-10",
    readingTime: "5 min read",
    paragraphs: [
      "The hardest, most senior AI decision isn't which use case to ship next — it's recognising which initiative isn't ready for its data, its org, or its risk envelope yet. The seniority is in having the authority to park it cleanly while the rest of the portfolio keeps shipping, and the credibility to make that call stick.",
      "[DRAFT — replace with author's final copy]",
    ],
  },
  {
    slug: "economics-of-a-genai-initiative",
    title: "The Economics Nobody Models: What a GenAI Initiative Actually Costs at Scale",
    dateLabel: "July 10, 2026",
    isoDate: "2026-07-10",
    readingTime: "6 min read",
    paragraphs: [
      "Enterprises approve GenAI on capability and get ambushed by run-cost six months later. The seniority is in the arbitrage layer — routing the right task to the right model tier, and modelling token economics before deployment rather than after the invoice lands.",
      "[DRAFT — replace with author's final copy]",
    ],
  },
  {
    slug: "80-40-rule",
    title: "The 80/40 Rule: Why High-Signal Imperfection Beats Slow Enterprise Roadmaps",
    dateLabel: "May 31, 2026",
    isoDate: "2026-05-31",
    readingTime: "4 min read",
    paragraphs: [
      "Stretched development cycles, endless requirement clarification rounds, and multi-layered internal demos are quietly killing product velocity inside most enterprises. The instinct to 'get it right before showing anyone' feels responsible. In practice, it's often the single biggest drag on shipping real value.",
      "True agile leadership doesn't mean working faster in a panic. It means absorbing the discomfort of shipping an imperfect, but stable, iteration early — and treating that early release as a deliberate instrument for capturing real user feedback, not a failure to be apologized for.",
      "Here's the distinction that matters: moving fast doesn't mean sacrificing quality. It means moving the testing window into production-like environments earlier, so that the distinctive, high-value user experience details surface while the architecture is still flexible enough to absorb them — instead of after it has hardened around the wrong assumptions.",
      "I think of this as the 80/40 rule: deliver 80% of a complete solution in 40% of the standard timeline. The other 20% isn't abandoned — it's resequenced, built in response to real signal instead of speculative planning.",
      "The mechanism that makes this safe rather than reckless: UAT stops being a final exam and becomes an interactive workbench. Stakeholders are conditioned upfront to expect partial functionality early. That single expectation shift is what lets a standard three-week cycle collapse to under two — not because anyone worked harder, but because the feedback loop moved earlier, while the team's context was still completely fresh.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
