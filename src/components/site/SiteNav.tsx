import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/expertise", label: "Expertise" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
] as const;

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-[100] border-b border-rule bg-[rgba(247,246,242,0.88)] backdrop-blur-md py-4">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between px-6">
        <Link to="/" className="font-syne text-base font-extrabold tracking-[-0.02em]">
          Ashish Sinha
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "text-ink" }}
              inactiveProps={{ className: "text-mid hover:text-ink" }}
              className="text-[0.82rem] font-medium uppercase tracking-[0.04em] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-accent px-[18px] py-2 text-[0.82rem] font-semibold text-white transition-opacity hover:opacity-85"
          >
            Let's talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
