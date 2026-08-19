import { useEffect } from "react";
import { useLanguage } from "../../lib/LanguageContext";
import { openAndScrollTo, useSectionExpand } from "./SectionExpand";

export function SiteNav() {
  const { lang, setLang, t } = useLanguage();
  const expand = useSectionExpand();

  // Deep links like /#manual should expand the target section on load.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setTimeout(() => openAndScrollTo(id, expand?.requestOpen), 60);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [expand]);

  const sections = [
    { hash: "#home", label: t.nav.index },
    { hash: "#studio", label: t.nav.studio },
    { hash: "#dashboard", label: t.nav.dashboard },
    { hash: "#manual", label: t.nav.manual },
    { hash: "#resume", label: t.nav.resume },
  ];

  return (
    <nav className="sticky top-0 z-[100] border-b border-rule bg-[rgba(247,246,242,0.95)] backdrop-blur-md py-4">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-6">
        <a href="/#home" className="font-syne text-base font-extrabold tracking-[-0.02em]">
          Ashish Sinha
        </a>
        <div className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <a
              key={s.hash}
              href={s.hash === "#resume" ? "https://rxresu.me/five.summers/senior-product-manager" : `/${s.hash}`}
              {...(s.hash === "#resume" ? { target: "_blank", rel: "noreferrer" } : {})}
              onClick={(e) => {
                if (s.hash === "#resume") return;
                const id = s.hash.slice(1);
                if (document.getElementById(id)) {
                  e.preventDefault();
                  window.history.replaceState(null, "", s.hash);
                  openAndScrollTo(id, expand?.requestOpen);
                }
              }}
              className="text-[0.82rem] font-medium uppercase tracking-[0.04em] text-mid transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-accent px-[18px] py-2 text-[0.82rem] font-semibold text-white transition-opacity hover:opacity-85"
          >
            {t.nav.cta}
          </a>
        </div>
        <div className="flex items-center overflow-hidden rounded-full border border-rule text-[0.7rem] font-semibold uppercase tracking-[0.08em]">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`px-2.5 py-1 transition-colors ${lang === "en" ? "bg-ink text-white" : "text-mid hover:text-ink"}`}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("fr")}
            className={`px-2.5 py-1 transition-colors ${lang === "fr" ? "bg-ink text-white" : "text-mid hover:text-ink"}`}
            aria-pressed={lang === "fr"}
          >
            FR
          </button>
        </div>
      </div>
    </nav>
  );
}
