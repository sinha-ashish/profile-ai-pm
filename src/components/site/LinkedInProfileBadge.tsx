import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    LIRenderAll?: () => void;
  }
}

const LINKEDIN_BADGE_SCRIPT = "https://platform.linkedin.com/badges/js/profile.js";
const PROFILE_URL = "https://www.linkedin.com/in/sinha-ashish/";

function loadLinkedInBadgeScript() {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${LINKEDIN_BADGE_SCRIPT}"]`);

  if (window.LIRenderAll) {
    return Promise.resolve();
  }

  if (existing) {
    return new Promise<void>((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("LinkedIn badge script failed to load")), { once: true });
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = LINKEDIN_BADGE_SCRIPT;
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("LinkedIn badge script failed to load"));
    document.body.appendChild(script);
  });
}

export function LinkedInProfileBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let fallbackTimer: number | undefined;

    const renderBadge = async () => {
      try {
        await loadLinkedInBadgeScript();

        if (cancelled || !badgeRef.current) return;

        badgeRef.current.removeAttribute("data-rendered");
        badgeRef.current.removeAttribute("data-uid");
        badgeRef.current.querySelectorAll("iframe").forEach((iframe) => iframe.remove());
        window.LIRenderAll?.();

        fallbackTimer = window.setTimeout(() => {
          const hasIframe = Boolean(badgeRef.current?.querySelector("iframe"));
          if (!hasIframe) setShowFallback(true);
        }, 4500);
      } catch {
        if (!cancelled) setShowFallback(true);
      }
    };

    renderBadge();

    return () => {
      cancelled = true;
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="w-full max-w-[305px] rounded-lg bg-white p-4 text-ink shadow-sm">
      <div className={showFallback ? "hidden" : "flex min-h-[260px] items-center justify-center"}>
        <div
          ref={badgeRef}
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="sinha-ashish"
          data-version="v1"
          suppressHydrationWarning
        >
          <a className="badge-base__link LI-simple-link" href="https://fr.linkedin.com/in/sinha-ashish?trk=profile-badge">
            Ashish Sinha
          </a>
        </div>
      </div>

      {showFallback ? (
        <article className="flex min-h-[260px] flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent text-2xl font-bold text-white">
            AS
          </div>
          <h3 className="font-syne text-xl font-bold leading-tight text-ink">Ashish Sinha</h3>
          <p className="mt-2 max-w-[230px] text-sm leading-6 text-mid">Enterprise AI Product Leader · Paris</p>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            View profile
          </a>
        </article>
      ) : null}
    </div>
  );
}