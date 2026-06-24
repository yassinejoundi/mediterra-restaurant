# Stitch to Next.js Conversion

Generated from `.stitch/designs/*.html`.

## Route Map

| Source | Route | Page file | Component folder |
| --- | --- | --- | --- |
| `.stitch/designs/contact.html` | `/contact` | `app/contact/page.tsx` | `components/contact` |
| `.stitch/designs/faq.html` | `/faq` | `app/faq/page.tsx` | `components/faq` |
| `.stitch/designs/gallery.html` | `/gallery` | `app/gallery/page.tsx` | `components/gallery` |
| `.stitch/designs/home.html` | `/` | `app/page.tsx` | `components/home` |
| `.stitch/designs/menu.html` | `/menu` | `app/menu/page.tsx` | `components/menu` |
| `.stitch/designs/privacy.html` | `/privacy` | `app/privacy/page.tsx` | `components/privacy` |
| `.stitch/designs/reservations.html` | `/reservations` | `app/reservations/page.tsx` | `components/reservations` |
| `.stitch/designs/story.html` | `/story` | `app/story/page.tsx` | `components/story` |
| `.stitch/designs/terms.html` | `/terms` | `app/terms/page.tsx` | `components/terms` |

## Initial Snapshot

Conversion map recorded before generating Next.js components.
## Completed Pages

- `contact.html`
- `faq.html`
- `gallery.html`
- `home.html`
- `menu.html`
- `privacy.html`
- `reservations.html`
- `story.html`
- `terms.html`

## Created Components

- Page-local components generated under `components/{page-name}/` from each top-level body block.
- `PageContent.tsx` in each page folder preserves the original `<body>` class list on a wrapper element.

## Shared Components

- None extracted. Navigation/footer-like blocks differ by page markup, active state, or styling, so they remain page-specific.

## Technical Conversions

- Converted HTML attributes to JSX equivalents (`className`, `crossOrigin`, SVG casing, inline style objects).
- Self-closed void elements for JSX validity.
- Converted HTML comments to JSX comments.
- Preserved external image URLs and Stitch copy unchanged.
- Added global Stitch utility CSS for Material Symbols and editorial image hover behavior.
- Converted exported page scripts into client-side `useEffect` components where browser DOM behavior was present.
- Converted FAQ `onclick="toggleAccordion(this)"` attributes into equivalent React `onClick` handlers.
- Converted JSX-only boolean and numeric attributes in the reservations form (`required`, `selected`, `defaultChecked`, `rows={3}`).
- Corrected SVG `viewbox` to `viewBox` for React.
- Changed `bg-[url('placeholder')]` to `bg-[url('/placeholder')]` where the element already uses the original remote image through inline `backgroundImage`; this avoids Turbopack treating `placeholder` as an unresolved module and does not affect the rendered background.
- Added Stitch color/radius aliases and exported utility CSS for page-specific semantics such as `text-primary-on`, `rounded-twelve`, `gallery-masonry`, `reveal-on-scroll`, `glass-card`, `editorial-shadow`, and FAQ accordion states.
- Scoped the home page `font-headline`/`font-display` variables to Playfair Display to match `home.html`; other pages retain the Public Sans headline configuration from their Stitch exports.

## Validation

- `npm run lint`: passed.
- `npm run build`: passed.
- `npm run validate`: failed because `scripts/validate.js` only scans `src/App.tsx`, `src/components`, and `src/pages`; this App Router project stores generated pages/components in `app/` and top-level `components/`.

## Unresolved Issues

- Visual comparison was limited to source review; no browser screenshot comparison was run yet.
