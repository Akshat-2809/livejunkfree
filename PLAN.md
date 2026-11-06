# Build plan: Live Junk Free redesign (Next.js 16 + Tailwind 4)

Source of truth: `design/livejunkfree-redesign-v5.html` (reference only, never imported).

## Approach

- **Styles.** The design's `<style>` block is ported almost verbatim into `app/globals.css` inside `@layer components`. That way, Tailwind utilities (used for the design's one-off inline styles) always win over component rules. The design tokens live in Tailwind's `@theme`, and the short design variables (`--orange`, `--ink`, …) alias them. The class names stay identical to the design, so a side-by-side comparison stays one-to-one.
- **Motion.** The v4 motion layer is copied exactly. It sits inside `@media (prefers-reduced-motion: no-preference)`, and the global reduce rule kills everything else. Scroll-reveal classes (`.rvl`, `.wipe`) are added **after hydration** by `useReveal()`, and only when motion is allowed. Without JavaScript, or with reduced motion, all content renders visible.
- **Content.** All copy and data live in typed `content/*.ts` files. Inline "to confirm" flags inside copy use a tiny markup that `<Rich>` renders: `{tbc}` or `{tbc:label}`, `**bold**` and `[link](/path/)`.
- **`cacheComponents` is off.** Next 16 enables it by default. It keeps hidden routes mounted through `<Activity>`, which would duplicate the drawer and form IDs and confuse the tests, and a fully static site gains nothing from it. Every page is prerendered with `generateStaticParams` and `dynamicParams = false`.

## Design function → component

| Design (`v5.html`) | Component | Notes |
|---|---|---|
| `.pv` preview bar | `components/review/ReviewBar.tsx` (client) | `NEXT_PUBLIC_REVIEW_MODE=true` only. Page switcher, "Show items to confirm" checkbox (`localStorage`) and "All pages & links" button |
| `Header()` | `components/layout/Header.tsx` (client) | Pill nav. The mega menu opens on hover, click or keyboard and closes on Escape or an outside click. The header condenses on scroll. Includes the burger |
| `Drawer()` | `components/layout/MobileDrawer.tsx` (client) | Slides in from the right. `<details>` accordions. Closes on Escape, the backdrop or a link |
| `MobileBar()` | `components/layout/MobileActionBar.tsx` | Takes a label and href. Landing pages use `#lp-form` |
| `Footer()` | `components/layout/Footer.tsx` | CTA strip, hours with a TBC badge, four link columns, social links, wordmark |
| `LpHeader` / `LpFooter` | `components/layout/LpHeader.tsx`, `LpFooter.tsx` | No main nav |
| `TBC()` | `components/ui/ToConfirm.tsx` | Optional label |
| `I.*` icons | `components/icons.tsx` | Inline SVG set, no icon library |
| `stars()` | `components/ui/Stars.tsx` | |
| `photo()` | `components/ui/Photo.tsx` | `next/image` `fill` + `sizes` |
| crumbs | `components/ui/Breadcrumbs.tsx` | Also emits `BreadcrumbList` JSON-LD |
| `Related()` | `components/ui/RelatedLinks.tsx` | |
| `.panel` | `components/ui/Panel.tsx` | |
| — | `components/ui/Rich.tsx` | Renders the content markup |
| Home hero | `components/sections/HomeHero.tsx` | Word-by-word headline, image settle, rating pills, quick quote card (`QuickQuote` client) |
| `ServiceHero()` | `components/sections/ServiceHero.tsx` | |
| `Marquee()` | `components/sections/ItemMarquee.tsx` | |
| `Trust()` | `components/sections/TrustStrip.tsx` | |
| `Bento()` | `components/sections/ServicesBento.tsx` | |
| `BeforeAfter()` | `components/sections/BeforeAfter.tsx` (client) | Demo sweep on the first time in view; the knob pulses until touched |
| `LoadMeter()` | `components/sections/LoadMeter.tsx` (client) | Sliding pill, staggered cells, truck bump and wheel spin, flip-in values. `compact` prop |
| `Steps()` | `components/sections/Steps.tsx` | |
| `Reviews()` | `components/sections/Reviews.tsx` + `ScoreCountUp` (client) | Sample reviews flagged |
| `FAQ()` | `components/sections/Faq.tsx` | `<details>`. Also emits `FAQPage` JSON-LD |
| `QuoteForm()` | `components/sections/QuoteForm.tsx` (client) + `app/actions/quote.ts` | Compact, commercial and custom-CTA variants. Server Action validates with zod and logs (TODO: email/CRM) |
| `CtaBand()` | `components/sections/CtaBand.tsx` | Dark slate inside `.calm` |
| Areas block (home) | `components/sections/AreasTop.tsx` | Top 10 areas, "+16 more" chip, "Not on the list?" card |
| Locations regions + filter | `components/sections/RegionList.tsx` (client) | |
| A–Z + filter | `components/sections/ServicesAz.tsx` (client) | |
| price tables | `components/sections/PricingTable.tsx` | |
| route cards | `components/sections/AudienceCards.tsx` | |
| `init()` reveal, count-up, scroll progress | `lib/useReveal.ts`, `components/motion/MotionLayer.tsx`, `components/motion/ScrollProgress.tsx` | |
| — | `components/layout/PendingBanner.tsx` | "Preview: content for this page is pending" |
| — | `components/layout/PageShell.tsx` | Header + main + Footer + MobileActionBar, plus the `.calm` wrapper |

## Design page → route

| # | `PAGES` key | Route | Implementation |
|---|---|---|---|
| 1 | `home` | `/` | `app/(marketing)/page.tsx` |
| 2 | `services` | `/services/` | `app/(marketing)/services/page.tsx` → `ServicesHub` |
| 3 | `couch-removal` | `/services/residential-junk-removal-services/couch-removal-services/` | `[category]/[slug]` → `ItemTemplate` (designed content) |
| 4 | `estate-cleanout` | `/services/junk-cleanout-services/estate-cleanout-services/` | `CleanoutTemplate`, calm |
| 5 | `office-cleanout` | `/services/commercial-junk-removal-services/business-cleanout-services/` | `CommercialTemplate` |
| 6 | `deck-demolition` | `/services/junk-demolition-services/deck-demolition-services/` | `DemolitionTemplate` |
| 7 | `locations` | `/locations/` | `app/(marketing)/locations/page.tsx` |
| 8 | `toronto` | `/locations/toronto/` | `locations/[city]` → `LocationTemplate` |
| 9 | `pricing` | `/how-it-works/` (`#pricing`, `#how`) | `app/(marketing)/how-it-works/page.tsx` |
| 10 | `quote` | `/contact/` | `app/(marketing)/contact/page.tsx` |
| 11 | `lp-same-day` | `/lp/same-day-junk-removal/` | `app/(lp)/lp/same-day-junk-removal/page.tsx`, noindex |
| 12 | `lp-estate` | `/lp/estate-cleanout/` | `app/(lp)/lp/estate-cleanout/page.tsx`, noindex, calm |

### Generated routes

- `/services/[category]/[slug]/`: all 69 A–Z items. The four designed pages get full content. Every other item uses its category template with the item name swapped in, plus a `PendingBanner`.
- `/services/[category]/`: the four category pages, rendered as the hub filtered to that category.
- `/locations/[city]/`: all 26 communities. Toronto has full content; the others use the template with the city name swapped in, plus the banner.
- `/about/`, `/blog/`, `/privacy-policy/`: placeholders with the banner.
- `/review/`: the review index, shown only in review mode.

### Link mapping

The design's `go(key)` links point to the 12 prototypes. In the build, every link points to its **real** route: a mega-menu item goes to its own item page, an area chip to its own city page, and "All residential" to its category page.

## Tests (Playwright, `tests/`)

- `routes.spec.ts`: every route in `content/routes.ts` returns 200.
- `links.spec.ts`: crawls every page; every internal `<a href>` resolves to a known route.
- `overflow.spec.ts`: no horizontal overflow at 360, 390, 768, 1024 and 1440 px on the 12 designed pages.
- `console.spec.ts`: no console errors.
- `review-bar.spec.ts`: the page switcher reaches all 12 pages.
- `reduced-motion.spec.ts`: with `reducedMotion: 'reduce'`, all content is visible without scrolling.
