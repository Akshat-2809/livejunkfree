# Live Junk Free: redesign client preview

Next.js 16 (App Router) + TypeScript (strict) + Tailwind CSS 4. Every page is statically prerendered (115 pages).

The approved design is `design/livejunkfree-redesign-v5.html`. It is for reference only and is never imported. `PLAN.md` maps each design function and page to its component and route.

## Run it

```bash
npm install
npm run dev              # http://localhost:3000
npm run build && npm start   # production build
```

Checks:

```bash
npm run lint
npm run typecheck
npm run test:install     # once: downloads Chromium for Playwright
npm run build && npm test
npm run visual           # design vs build screenshots, side by side, in test-results/visual/
```

## Review mode (turn it off before launch)

Review mode is controlled by `NEXT_PUBLIC_REVIEW_MODE` in `.env`. It is `true` for the client preview, and while it's on:

- the dark review toolbar appears at the top of every page: a page switcher, the "Show items to confirm" toggle and the "All pages & links" button
- `/review/` lists all 12 designed pages and every generated route, with a status label for each
- every page is `noindex`, and `robots.txt` disallows everything

To launch, set `NEXT_PUBLIC_REVIEW_MODE=false` (in `.env` or in the host's environment variables) and rebuild. The toolbar disappears, `/review/` returns 404, and pages become indexable. Landing pages under `/lp/` stay `noindex` regardless.

## Where to edit things

All copy and data live in typed files in `content/`. Nothing is hard-coded in JSX, so a CMS can replace these files later.

| What | File |
|---|---|
| Phone, email, rating, social links | `content/site.ts` |
| Hours | `content/site.ts` (`HOURS`) |
| Prices: load sizes and the example price tables | `content/pricing.ts` |
| Service areas: the top 10, regions and slugs | `content/locations.ts` |
| Services, categories and URL slugs | `content/services.ts` |
| Every URL / route map | `content/routes.ts` |
| Menus and footer links | `content/nav.ts` |
| FAQs | `content/faqs.ts` |
| Reviews (samples) | `content/reviews.ts` |
| Photos | `content/images.ts` |
| Page copy | `content/pages/*.ts` |
| Copy for template-preview pages | `content/templates.ts` |
| Shared copy: steps, trust strip, quote form | `content/shared.ts` |

Copy strings support a small markup:

- `{tbc}` or `{tbc:label}` adds the dashed "to confirm" badge
- `**bold**`
- `[link text](/path/)`

**Removing a `{tbc}` flag means the claim is approved.** Only remove one once the client has confirmed it. Prices stay `$XX` / `$XXX` until real numbers are approved.

Design tokens (colours, radii, max width) are in `app/globals.css` under `@theme`. They are available as Tailwind utilities (`bg-orange`, `text-ink`, `rounded-xl`, `max-w-content`). The design's component CSS is ported almost verbatim below the tokens, using the same class names as the design file.

## What's built

- **The 12 designed pages**, at their existing livejunkfree.ca URLs.
- **69 service item pages** (`/services/[category]/[slug]/`), **4 category pages** and **26 location pages**. Each one that isn't one of the 12 designed pages renders its category template (or the location template) with the name swapped in, plus a "Preview: content for this page is pending" banner.
- **Placeholders**: `/about/`, `/blog/` and `/privacy-policy/`.
- **Quote form**: posts to a Server Action (`app/actions/quote.ts`) that validates with zod and **only logs** the request. It accepts up to 5 photos, 8 MB in total.
- **SEO**:
  - per-page title, description and canonical
  - JSON-LD: `LocalBusiness` (home), `Service` (service pages), `BreadcrumbList` (wherever breadcrumbs appear) and `FAQPage` (wherever an FAQ appears)
  - `sitemap.xml` generated from the route map
  - `robots.txt` that follows review mode
- **Motion**: the design's v4 motion layer, CSS only, plus one `useReveal()` hook. All of it is off under `prefers-reduced-motion`. Content is visible without JavaScript.

### Deliberate differences from the design file

- **Every link goes to its real page.** In the prototype, many links (mega-menu items, area chips, A–Z items) pointed at one of the 4 demo templates. Here each one goes to its own route.
- **Under reduced motion, the load-meter tabs stay on one row.** In the design file, "Full" wraps to a second row in that mode.
- **The office page's "Typical project scale" table keeps both columns on mobile.** The design's mobile rule hid the second column, which held the timing information.
- **The "Show items to confirm" choice is remembered.** It is saved in `localStorage`.
- **Clicking "Services" no longer closes the mega menu.** In the design, hovering opened it and the click then toggled it shut again.
- **The 360 px landing-page header no longer overflows.** It is slightly tighter at that width.
- **Some animations run on desktop only, or only between pages.** These changes keep the Lighthouse scores on target:
  - The hero photo's slow zoom-out ("settle") runs on desktop only. On throttled mobile CPUs it cost about 2.5 s of blocking time.
  - The page fade-in runs only on client-side navigation, never on first load.

## Pre-launch checklist

- [ ] Swap the stock photos (`content/images.ts`) for real LJF job and before/after photos.
- [ ] Fill in the confirmed prices, rating, review count, hours and other `{tbc}` items, then remove their flags.
- [ ] Replace the sample reviews with real Google reviews or the live widget, and set `GOOGLE_REVIEWS_URL`.
- [ ] Connect the quote form to email or CRM (`app/actions/quote.ts`, see its TODO), store uploaded photos and add spam protection.
- [ ] Add the real social links (`content/site.ts`) and the Google Maps embed (contact page).
- [ ] Write the content for the template-preview pages, which are listed at `/review/` as "Template preview".
- [ ] Port GA4, Google Ads conversion tracking and Google Tag Manager.
- [ ] Add 301 redirects (`redirects()` in `next.config.ts`) for any URL that changes.
- [ ] Keep the existing Google Ads landing pages live during the switch, and point campaigns at `/lp/...` only once they are approved.
- [ ] Connect a CMS. The `content/*.ts` types are the schema to mirror.
- [ ] Set `NEXT_PUBLIC_REVIEW_MODE=false` and rebuild.

## Deploy a Vercel preview

```bash
npm i -g vercel
vercel login
vercel link            # create or link the project
vercel                 # preview deployment; it prints a *.vercel.app URL
```

`.env` is committed, so review mode is on by default. For production, set `NEXT_PUBLIC_REVIEW_MODE=false` under Vercel → Project → Settings → Environment Variables (Production only), then run `vercel --prod`.

Any Node host also works: run `npm ci && npm run build && npm start`. Node 20.9 or later is required.
