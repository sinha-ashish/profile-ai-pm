import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "../components/site/Container";
import { getArticle } from "../lib/articles";
import NotFound from "./NotFound";

export default function Article() {
  const { slug = "" } = useParams();
  const article = getArticle(slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — Ashish Sinha`;
      const desc = article.paragraphs[0]?.slice(0, 160) ?? "";
      setMeta("description", desc);
      setMeta("og:title", `${article.title} — Ashish Sinha`, true);
      setMeta("og:description", desc, true);
      setMeta("og:type", "article", true);
    }
  }, [article]);

  if (!article) return <NotFound />;

  return (
    <section className="border-b border-rule py-20">
      <Container>
        <Link
          to="/#writing"
          className="mb-8 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-mid transition-colors hover:text-accent"
        >
          ← Writing
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
            {article.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
