import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "../components/site/Container";
import { getArticle } from "../lib/articles";

export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — Ashish Sinha` : "Writing — Ashish Sinha";
    const desc = a?.paragraphs[0]?.slice(0, 160) ?? "";
    const url = a ? `https://ai-product-paris.lovable.app/writing/${a.slug}` : "https://ai-product-paris.lovable.app/writing";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: a ? [{ rel: "canonical", href: url }] : [],
      scripts: a ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          datePublished: a.isoDate,
          author: {
            "@type": "Person",
            name: "Ashish Sinha",
          },
          url,
          description: desc,
        }),
      }] : [],
    };
  },
  notFoundComponent: () => (
    <section className="py-20">
      <Container>
        <h1 className="font-syne text-3xl font-bold">Article not found</h1>
        <Link to="/" className="mt-4 inline-block text-accent">
          ← Back home
        </Link>
      </Container>
    </section>
  ),
  component: ArticlePage,
});




function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <section className="border-b border-rule py-20">
      <Container>
        <Link to="/" className="mb-8 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-mid transition-colors hover:text-accent">
          ← Home
        </Link>
        <article className="mx-auto max-w-[720px]">
          <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-mid">
            <span>{article.dateLabel}</span>
            <span aria-hidden>·</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="mb-10 font-syne text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            {article.title}
          </h1>
          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-ink/85">
            {article.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}
