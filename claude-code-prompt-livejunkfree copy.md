# Claude Code prompt: Live Junk Free redesign (Next.js + Tailwind)

> **Before you paste this:** create an empty project folder and put the approved design file in it at `design/livejunkfree-redesign-v5.html`. Then open Claude Code in that folder and paste everything below the line.

---

## Your task

Build a client-preview website for **Live Junk Free** (livejunkfree.ca), a junk removal, cleanout and small-demolition company serving Toronto and the GTA. Use **Next.js (App Router) + TypeScript + Tailwind CSS**.

The approved design is in **`design/livejunkfree-redesign-v5.html`**. It is the single source of truth for layout, copy, colours, typography, spacing, components, interactions and animations. Read the whole file before you write any code: the `<style>` block, the component functions, the `PAGES` object and the `init()` interactions. Reproduce it faithfully as a production-quality Next.js codebase. Don't redesign anything, don't "improve" the copy, and don't add sections.

The goal right now is a **preview for the client to approve**. That means:
- every page and every link must be reachable and clickable
- there is a review toolbar so the client can jump between all pages (details below)
- the whole preview is `noindex`

## Client rules you must follow (from their brief)

1. **Never invent claims.** Every price, rating, review, hour, credential, guarantee and operational promise that appears in the design with a dashed "to confirm" badge must keep that badge. Build it as a `<ToConfirm>` component with an optional label. Keep `$XX` and `$XXX` as placeholders, and keep reviews clearly marked as samples.
2. **No instant pricing and no online booking engine.** Conversion happens through phone calls and quote forms only.
3. **Keep the existing working conversion paths:**
   - phone number `647-922-5865`, linked as `tel:+16479225865`
   - email `info@livejunkfree.ca`
   - quote form fields: name, phone, email, postal code, preferred day, service type, details, photo upload
4. **Keep existing URLs** for SEO (see the route map below).
5. **Accessibility:**
   - WCAG AA contrast. The design already uses dark text on orange buttons; keep it that way.
   - visible keyboard focus
   - semantic headings
   - tap targets of at least 44 px
   - honour `prefers-reduced-motion`, which disables all animation
6. **Mobile first.** No horizontal overflow at 360, 390, 768, 1024 or 1440 px. On mobile, the fixed bottom bar with "Call now" and "Get a quote" must always be visible.
7. **Performance:**
   - no animation libraries (use CSS plus small client hooks)
   - `next/image` for every photo, with correct `sizes`
   - `next/font` for the fonts
   - target Lighthouse mobile scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (ignoring the noindex rule)
8. **Maintainability:** all copy and data live in typed content files, not hard-coded inside JSX, so the client's marketing team can later edit it through a CMS.

## Tech setup

- Latest stable Next.js with the App Router, TypeScript in strict mode, ESLint, and Tailwind CSS (latest stable).
- Map the design tokens into the Tailwind theme. These are the CSS variables in the design file:
  - **Colours:**
    - orange `#FF6A13`, orange-dk `#B83D08`, orange-lt `#FFF0E6`
    - ink `#0E1621`, ink-2 `#1B2633`, muted `#5B6672`
    - surface `#F3F5F7`, surface-2 `#E9EDF1`, line `#E3E7EB`
    - green `#169B5E`, green-lt `#E6F6EE`
  - **Radii:** 32, 24, 16 and 12 px, plus pill buttons
  - **Max content width:** 1280 px
- **Fonts:** load both with `next/font/google`.
  - Bricolage Grotesque for headings, exposed as `--font-display`
  - Geist for body text, exposed as `--font-body`
- **Images:** `next/image`, with `remotePatterns` allowing `images.unsplash.com` and `livejunkfree.ca`. Keep the same Unsplash photo IDs as the design, and keep the comment noting they are stock photos to swap for real LJF photos before launch.
- **Icons:** port the inline SVG icon set from the design into `components/icons.tsx`. Don't add an icon library.
- Set `trailingSlash: true` in `next.config` so URLs match the existing WordPress site.

## Routes (keep the existing livejunkfree.ca URL structure)

| # | Review label | Route |
|---|---|---|
| 1 | Home | `/` |
| 2 | Services hub | `/services/` |
| 3 | Template: Item removal (Couch) | `/services/residential-junk-removal-services/couch-removal-services/` |
| 4 | Template: Sensitive cleanout (Estate) | `/services/junk-cleanout-services/estate-cleanout-services/` |
| 5 | Template: Commercial (Office) | `/services/commercial-junk-removal-services/business-cleanout-services/` |
| 6 | Template: Demolition (Deck) | `/services/junk-demolition-services/deck-demolition-services/` |
| 7 | All locations | `/locations/` |
| 8 | Template: Location (Toronto) | `/locations/toronto/` |
| 9 | Pricing & how it works | `/how-it-works/` (the "Pricing" nav link goes to `/how-it-works/#pricing`) |
| 10 | Get a quote / Contact | `/contact/` |
| 11 | Landing page: Same-day junk removal | `/lp/same-day-junk-removal/` (no main nav, `noindex`) |
| 12 | Landing page: Estate cleanout | `/lp/estate-cleanout/` (no main nav, `noindex`) |

### Dynamic routes, so every link in the design works

- **`/services/[category]/[slug]/`:** generate a page for every item in the services A–Z list and the mega menu. All of these URLs are listed in the design's `AZ` and `NAV` data. Use the real livejunkfree.ca slugs from the list below.
  - The 4 designed pages above get their full designed content.
  - Every other item renders its category's template (item, cleanout, commercial or demolition) with the item name swapped in. Show a slim banner at the top: "Preview: content for this page is pending".
- **`/services/[category]/`:** the 4 category pages (residential, commercial, cleanouts, demolition). Render the services hub filtered to that category.
- **`/locations/[city]/`:** all 26 communities. Toronto has full content. The others use the location template with the city name swapped in, plus the same "content pending" banner.
- **`/about/`, `/blog/`, `/privacy-policy/`:** simple placeholder pages using the shared header and footer, with the "content pending" banner.

**Existing livejunkfree.ca slugs to reuse:**
- Category slugs: `residential-junk-removal-services`, `commercial-junk-removal-services`, `junk-cleanout-services`, `junk-demolition-services`
- Item slugs follow the pattern `{item}-removal-services`, `{item}-cleanout-services` or `{item}-demolition-services`. Examples:
  - `mattress-removal-services`
  - `hot-tub-removal-services`
  - `office-furniture-removal-services`
  - `warehouse-cleanout-services`
  - `hoarding-cleanouts-services`
  - `house-cleanouts-services`
  - `apartment-cleanouts-services`
  - `storage-unit-cleanouts-services`
  - `shed-demolition-services`
  - `fence-demolition-services`
- Location slugs: `/locations/{city-kebab}/`, e.g. `richmond-hill`, `whitchurch-stouffville`, `east-gwillimbury`, `new-market` (the existing site uses `new-market`; keep it).

Put a slug map in `content/routes.ts`.

## Review toolbar (required)

Build `components/review/ReviewBar.tsx`. It is a slim dark bar fixed at the very top of every page, matching the "Design preview" bar in the design file. It appears only when `NEXT_PUBLIC_REVIEW_MODE=true`, so it can be switched off before launch. It contains:

1. **"Live Junk Free redesign · Design preview"** text. Hide it on mobile.
2. **A page-switcher dropdown** listing the 12 pages in exactly this order and wording. Selecting an option navigates there with `router.push`, and the dropdown always shows the current page as selected.
   1. Home
   2. Services hub
   3. Template: Item removal (Couch)
   4. Template: Sensitive cleanout (Estate)
   5. Template: Commercial (Office)
   6. Template: Demolition (Deck)
   7. All locations
   8. Template: Location (Toronto)
   9. Pricing & how it works
   10. Get a quote / Contact
   11. Landing page: Same-day junk removal
   12. Landing page: Estate cleanout
3. **A "Show items to confirm" checkbox.** It is on by default. It toggles a `hide-tbc` class on `<body>` that hides every `<ToConfirm>` badge. Save the choice in `localStorage`, wrapped in try/catch.
4. **An "All pages & links" button** that opens `/review/`.

Also build **`/review/`**, an index page shown only in review mode:
- the 12 designed pages as large cards with their route
- below them, every generated route (service items grouped by category, all locations, placeholder pages) as a searchable list, each linking to its page
- a status label next to each route: **Designed** or **Template preview (content pending)**
- a count at the top, e.g. "12 designed pages · 96 total routes"

This page is how the client checks every link and page.

## Components to build (port from the design's JS functions)

- **Header:** the floating pill nav. It has a mega menu (hover on desktop, click, closes on Escape), the phone number, a "Get a free quote" button, and condenses on scroll.
- **MobileDrawer:** opens from the right, with accordion sections.
- **MobileActionBar**
- **Footer:**
  - CTA strip
  - hours with a to-confirm badge
  - Services / Popular / Company / Contact columns
  - social links
  - the large faint "Live Junk Free" wordmark
- **HomeHero:** full-bleed photo, word-by-word headline reveal, rating pills, and the quick quote card.
- **ServiceHero:** text on the left, photo on the right, with breadcrumbs, ticks, CTAs and the rating.
- **ItemMarquee**
- **TrustStrip**
- **ServicesBento**
- **BeforeAfter:** a range-input slider. It plays a demo sweep the first time it scrolls into view and pulses until the user touches it.
- **LoadMeter:** the truck SVG.
  - 5 load sizes with a sliding white pill on the selector.
  - The 8 cells fill one by one, the truck bumps and the wheels spin when the size changes.
  - The price, description and example chips flip in.
  - Supports a `compact` prop.
  - Load data goes in `content/pricing.ts`.
- **Steps:** numbered cards. The number pops in when the card is revealed.
- **Reviews:** the score counts up when it scrolls into view; review cards scroll horizontally on mobile.
- **FAQ:** built on `<details>` elements, with the answer easing in.
- **QuoteForm:** variants for compact and commercial, plus a custom CTA label. The success state has the tick that draws itself. Submit to a stub Server Action that validates with zod and logs the data. Leave a TODO for email/CRM routing; there is no real backend yet.
- **CtaBand:** the orange section with the rating next to the form. On the estate pages it uses the calm/dark variant.
- **Smaller components:** AreasTop (10 areas + "+16 more" chip + "Not on the list?" card), RegionList with a search filter, PricingTable, Panel, ToConfirm, Photo, Breadcrumbs, RelatedLinks.
- **Estate pages** (`estate-cleanout` and `lp/estate-cleanout`): use the calm variant. Primary buttons turn ink, and the CTA band is dark slate.

## Motion (match the design's "v4 motion layer" CSS exactly)

- Implement one `useReveal()` hook built on IntersectionObserver.
  - It adds `.in` to elements marked `.rvl` or `.wipe`.
  - Stagger is set through a `--d` CSS variable.
  - Content must stay visible if JavaScript fails or motion is reduced: apply the hidden starting state only after hydration, and only when motion is allowed.
- Also needed:
  - the scroll progress bar
  - hero word reveal and image settle
  - button shine on hover and phone-icon ring on hover
  - card lift on hover
  - stars popping in
  - mobile bar sliding up on load
- Animate only `transform`, `opacity` and `clip-path`. Wrap everything in `@media (prefers-reduced-motion: no-preference)`.

## SEO (ready for later, even though the preview is noindex)

- Set metadata per page: title, description and canonical.
- Add JSON-LD: `LocalBusiness` on the homepage, `Service` on service pages, `BreadcrumbList` everywhere, and `FAQPage` where an FAQ appears.
- Generate `app/sitemap.ts` from the route map.
- `app/robots.ts` returns `noindex`/disallow-all while `NEXT_PUBLIC_REVIEW_MODE=true`.
- Heading order: one H1 per page, then logical H2s and H3s.

## Project structure

```
app/                 routes above (plus (marketing) and lp route groups)
components/          ui/, sections/, layout/, review/, icons.tsx
content/             site.ts (phone, email, hours), nav.ts, services.ts, locations.ts (TOP_AREAS, REGIONS),
                     pricing.ts (LOADS), faqs.ts, reviews.ts, routes.ts, images.ts
lib/                 useReveal.ts, schema.ts (JSON-LD helpers)
design/              livejunkfree-redesign-v5.html (reference only, never imported)
tests/               playwright specs
```

## Order of work

1. Read the design file fully. Write `PLAN.md` mapping every design function and page to a component and route. Show me the plan, then continue.
2. Scaffold the project, add the tokens, fonts and global CSS. Port the motion CSS.
3. Build layout components and the review toolbar first, so every page has navigation from the start.
4. Build the pages in route-map order (1 to 12), then the dynamic routes and placeholder pages, then `/review/`.
5. Add the Playwright tests:
   - Every route in `content/routes.ts` returns 200.
   - Every internal `<a href>` across all pages resolves to a real route, with no 404s.
   - There is no horizontal overflow (`scrollWidth <= innerWidth`) at 360, 390, 768, 1024 and 1440 px on all 12 designed pages.
   - There are no console errors.
   - The page switcher navigates to all 12 pages.
   - With `reducedMotion: 'reduce'`, all content is visible without scrolling triggers.
6. Run `npm run build`, `npm run lint` and the tests, and fix everything. Run Lighthouse (mobile) on Home and the Couch page and report the scores.
7. Visually compare each of the 12 pages with the design file at 1440 px and 390 px. Take screenshots of both side by side and fix every difference.

## Definition of done

- `npm run build` passes with zero TypeScript and ESLint errors.
- All 12 designed pages match the reference file at desktop and mobile.
- The review toolbar and `/review/` let someone reach every page and link.
- All tests pass, and the Lighthouse targets above are met or the gaps are explained.
- Every "to confirm" badge from the design is still there.
- `README.md` explains:
  - how to run the project
  - how to turn review mode off
  - where to edit copy, prices, areas, hours and photos
  - the pre-launch checklist:
    - swap the stock photos for real LJF photos
    - fill in the confirmed prices, rating and hours
    - connect the form to email or CRM
    - port GA4, Google Ads and Tag Manager
    - add 301 redirects for any changed URLs
    - keep the existing Google Ads landing pages live during the switch
    - connect a CMS
- Deploy a Vercel preview if credentials are available. Otherwise give me the exact deploy steps.
