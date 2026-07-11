## Contact block: integrate LinkedIn badge, mask email, responsive redesign

Rework the `#contact` section in `src/routes/index.tsx` into a single dark card (drop the separate white badge card that currently sits beside it and renders empty).

### Layout (inside the existing `bg-ink` rounded card)

Two-column on `md+`, stacked on mobile:

```text
┌─────────────────────────────┬───────────────────────┐
│ H2: Let's build...          │  [LinkedIn badge]     │
│ Body copy                   │  (light card, inside  │
│                             │   dark block)         │
│ [ Contact me ]  (mailto)    │                       │
│ [ View LinkedIn → ]         │                       │
└─────────────────────────────┴───────────────────────┘
```

- Mobile: single column, text → CTAs → badge, full width, centered badge.
- Desktop: text + stacked CTAs on the left, badge panel on the right.

### CTA changes

- Email button: label becomes **"Contact me"** / **"Me contacter"** (real address hidden from view). `href` stays `mailto:ashish.sinha2408@gmail.com` so clicking still opens mail. Keep the ✉️ icon.
- LinkedIn button stays as "View LinkedIn →" / "Voir LinkedIn →", moved directly below the email CTA (stacked vertically on all breakpoints for consistency).
- Both buttons `w-full sm:w-auto` inside their column so they don't stretch awkwardly on desktop.

### Badge panel

- Wrap the LinkedIn `badge-base LI-profile-badge` div in a light inner card (`bg-white rounded-lg p-4`) so the LinkedIn-rendered light-theme badge remains legible inside the dark contact block.
- Keep `data-theme="light"`, `data-type="VERTICAL"`, `data-vanity="sinha-ashish"`. Loader script already lives in `__root.tsx` — no change there.
- Add `min-h` on the panel so it doesn't collapse before the LinkedIn script hydrates.

### Translations

Add `contact.ctaEmail` = "Contact me" / "Me contacter" in `src/lib/translations.ts` and use it in place of the raw email text. Keep `contact.h2` and `contact.body` unchanged.

### Files touched

- `src/routes/index.tsx` — restructure `#contact` section, remove the outer 2-column grid + separate badge card.
- `src/lib/translations.ts` — add masked email CTA label (EN + FR).

No other sections, styles, or components change.
