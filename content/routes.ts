/**
 * Route / slug map. Single source of truth for every URL on the site.
 * Keeps the existing livejunkfree.ca URL structure (trailing slashes included).
 */
import { AREAS, DESIGNED_CITY, areaSlug } from "./locations";
import {
  CATEGORIES,
  CATEGORY_ORDER,
  SERVICES,
  isDesignedService,
  type CategoryKey,
  type Service,
} from "./services";

/* ---------- href helpers ---------- */

export const categoryHref = (key: CategoryKey) => `/services/${CATEGORIES[key].slug}/`;
export const serviceHref = (s: Service) => `/services/${CATEGORIES[s.category].slug}/${s.slug}/`;

/** Href of a service by slug. Throws at build time if the slug doesn't exist. */
export function svc(slug: string): string {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return serviceHref(s);
}

/** Href of a location page by display name, e.g. city("Richmond Hill"). */
export const city = (name: string) => `/locations/${areaSlug(name)}/`;

export const HREF = {
  home: "/",
  services: "/services/",
  locations: "/locations/",
  howItWorks: "/how-it-works/",
  pricing: "/how-it-works/#pricing",
  how: "/how-it-works/#how",
  contact: "/contact/",
  about: "/about/",
  blog: "/blog/",
  privacy: "/privacy-policy/",
  review: "/review/",
  lpSameDay: "/lp/same-day-junk-removal/",
  lpEstate: "/lp/estate-cleanout/",
  couch: svc("couch-removal-services"),
  estate: svc("estate-cleanout-services"),
  office: svc("business-cleanout-services"),
  deck: svc("deck-demolition-services"),
  toronto: city("Toronto"),
} as const;

/* ---------- the 12 designed pages, in review order ---------- */

export const DESIGNED_PAGES = [
  { label: "Home", href: HREF.home },
  { label: "Services hub", href: HREF.services },
  { label: "Template: Item removal (Couch)", href: HREF.couch },
  { label: "Template: Sensitive cleanout (Estate)", href: HREF.estate },
  { label: "Template: Commercial (Office)", href: HREF.office },
  { label: "Template: Demolition (Deck)", href: HREF.deck },
  { label: "All locations", href: HREF.locations },
  { label: "Template: Location (Toronto)", href: HREF.toronto },
  { label: "Pricing & how it works", href: HREF.howItWorks },
  { label: "Get a quote / Contact", href: HREF.contact },
  { label: "Landing page: Same-day junk removal", href: HREF.lpSameDay },
  { label: "Landing page: Estate cleanout", href: HREF.lpEstate },
] as const;

/* ---------- every route on the site ---------- */

export type RouteStatus = "designed" | "pending";
export type RouteGroup = "Designed pages" | "Service categories" | "Residential" | "Commercial" | "Cleanouts" | "Demolition" | "Locations" | "Placeholder pages";
export type RouteEntry = { href: string; label: string; status: RouteStatus; group: RouteGroup; index: boolean };

const designedHrefs = new Set<string>(DESIGNED_PAGES.map((p) => p.href));

export const ROUTES: RouteEntry[] = [
  ...DESIGNED_PAGES.map((p) => ({
    href: p.href,
    label: p.label,
    status: "designed" as const,
    group: "Designed pages" as const,
    // Google Ads landing pages are never indexed.
    index: !p.href.startsWith("/lp/"),
  })),
  ...CATEGORY_ORDER.map((k) => ({
    href: categoryHref(k),
    label: `${CATEGORIES[k].label} services`,
    status: "pending" as const,
    group: "Service categories" as const,
    index: true,
  })),
  ...SERVICES.filter((s) => !designedHrefs.has(serviceHref(s))).map((s) => ({
    href: serviceHref(s),
    label: s.name,
    status: (isDesignedService(s.slug) ? "designed" : "pending") as RouteStatus,
    group: CATEGORIES[s.category].label as RouteGroup,
    index: true,
  })),
  ...AREAS.filter((a) => a.slug !== DESIGNED_CITY).map((a) => ({
    href: `/locations/${a.slug}/`,
    label: `Junk removal in ${a.name}`,
    status: "pending" as const,
    group: "Locations" as const,
    index: true,
  })),
  ...[
    { href: HREF.about, label: "About us" },
    { href: HREF.blog, label: "Blog" },
    { href: HREF.privacy, label: "Privacy policy" },
  ].map((p) => ({ ...p, status: "pending" as const, group: "Placeholder pages" as const, index: true })),
];

export const ROUTE_HREFS = new Set(ROUTES.map((r) => r.href));
