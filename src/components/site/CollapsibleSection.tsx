import { useEffect, useRef, useState, type ReactNode } from "react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { useSectionExpand } from "./SectionExpand";

export function CollapsibleSection({
  id,
  label,
  heading,
  intro,
  children,
  last = false,
}: {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  children: ReactNode;
  last?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const expand = useSectionExpand();

  // Auto-open the first time the section scrolls into view (Apple-style reveal).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setOpen(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.01 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Menu / hash navigation asks this section to open.
  useEffect(() => {
    if (!expand) return;
    return expand.subscribe((target) => {
      if (target === id) setOpen(true);
    });
  }, [expand, id]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${last ? "" : "border-b border-rule"} py-14 scroll-mt-20 md:py-16`}
    >
      <Container>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="group flex w-full items-start justify-between gap-6 text-left"
        >
          <span className="block">
            <SectionLabel>{label}</SectionLabel>
            <span className="block font-syne text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] transition-colors group-hover:text-accent">
              {heading}
            </span>
          </span>
          <span
            aria-hidden
            className={`mt-2 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-rule text-accent transition-all duration-500 group-hover:border-accent ${open ? "rotate-180" : ""}`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5.25 7 9.25l4-4" />
            </svg>
          </span>
        </button>

        <div
          id={`${id}-panel`}
          className="grid transition-[grid-template-rows,opacity] duration-700 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
        >
          <div className="overflow-hidden">
            <div className={`pt-8 transition-transform duration-700 ease-out ${open ? "translate-y-0" : "translate-y-3"}`}>
              {intro && <p className="mb-10 max-w-[720px] text-[1.05rem] leading-[1.7] text-mid">{intro}</p>}
              {children}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
