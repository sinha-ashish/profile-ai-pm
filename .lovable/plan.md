# Collapsible sections with Apple-style scroll reveal

## What changes

1. **Writing section hidden**
   - The "Writing / Articles" block disappears from the homepage and the "Articles" item is removed from the top menu.
   - Article pages themselves (`/writing/<slug>`), the sitemap, llms.txt and the agent tools keep working — nothing is deleted, just unlinked from the page.

2. **Every content section becomes an expandable panel**
   Instinct, Studio, Dashboard, Expertise, Operating Manual, Architecture Vault, Experience, Skills and Working Philosophy each get a clickable header row (section label + heading + a chevron). Hero and Contact stay always visible, unchanged.

3. **Apple-style progressive reveal**
   - A section auto-expands the first time it scrolls into view: content fades in and the panel height animates open. Once opened it stays open — no re-collapsing on scroll.
   - Clicking a header manually collapses or expands that section at any time.
   - Users with reduced-motion preferences get everything open instantly, no animation.

4. **Menu navigation auto-expands**
   Clicking a top-menu item (Studio, Dashboard, Manual, etc.) expands that section if it is still collapsed, then smooth-scrolls to it with the sticky nav offset respected. Same behaviour for a direct link with a hash, e.g. `/#manual` on first load.

## Look and feel

Headers reuse the existing rule borders, Syne headings, section-label styling and blue accent. The chevron is a thin accent-coloured icon that rotates on open. No new colours, fonts or dark surfaces. The existing per-card `Reveal` stagger inside sections keeps working and runs when a section opens.

## Technical notes

- New `src/components/site/CollapsibleSection.tsx`: wraps `id`, `label`, `heading`, children; internal open state, grid-rows height transition (`grid-template-rows: 0fr → 1fr`) plus opacity for smooth fade, `IntersectionObserver` (reusing `useInView`) to auto-open on first entry, `aria-expanded` / `aria-controls` on the header button.
- New lightweight context (`SectionExpandContext`) so `SiteNav` can request "open section X" before scrolling; nav anchors get an `onClick` that opens the target then calls `scrollIntoView`, and a `hashchange` / initial-hash effect handles deep links.
- `src/routes/index.tsx`: replace the nine `<section>` wrappers with `<CollapsibleSection>`, delete the `#writing` section and the now-unused `articles` import.
- `src/components/site/SiteNav.tsx`: drop the `#writing` entry, add the expand-then-scroll handler.
- Translations untouched apart from leaving `nav.writing` / `writing` keys in place (unused, harmless).
