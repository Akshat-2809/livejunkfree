/**
 * Content for template-preview pages (content pending).
 * Each non-designed service renders its category's designed template with the
 * item name swapped in. Each non-designed city renders the Toronto template with
 * the city name swapped in. Replace these with real copy (or CMS entries) per page.
 */
import { DECK } from "./pages/deck";
import { ESTATE } from "./pages/estate";
import { OFFICE } from "./pages/office";
import { COUCH } from "./pages/couch";
import { TORONTO } from "./pages/toronto";
import { TOP_AREAS, type Area } from "./locations";
import { cityLinks } from "./nav";
import { HREF } from "./routes";
import { DESIGNED_SERVICES, type Service } from "./services";
import type { CleanoutContent, CommercialContent, DemolitionContent, ItemContent, LocationContent } from "./types";

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export function itemContent(s: Service): ItemContent {
  if (s.slug === DESIGNED_SERVICES.couch) return COUCH;
  const n = lower(s.name);
  return {
    ...COUCH,
    hero: {
      ...COUCH.hero,
      h1: `${s.name} in Toronto and the GTA`,
      lead: `We take ${lower(s.label)} from anywhere in your home: basements, stairs, condos and backyards. You don't have to move a thing.`,
      alt: `${s.name} by the Live Junk Free crew`,
      callout: { ...COUCH.hero.callout!, title: `${s.name} from $XX` },
    },
    take: {
      ...COUCH.take,
      intro: `Any size, any condition. Item list for ${n} {tbc}.`,
      ticks: ["Any size or condition", "Taken from any floor", "Disassembly if needed", "Loaded, hauled and swept up"],
      note: undefined,
    },
    pricing: { ...COUCH.pricing, title: `${s.name} pricing` },
    steps: { ...COUCH.steps, title: `How ${n} works` },
    reviewsContext: n,
    related: [COUCH.related[0], { title: `${s.name} near you`, links: COUCH.related[1].links }],
    cta: { ...COUCH.cta, h: `Book ${n} this week` },
  };
}

export function cleanoutContent(s: Service): CleanoutContent {
  if (s.slug === DESIGNED_SERVICES.estate) return ESTATE;
  const n = lower(s.name);
  return {
    ...ESTATE,
    calm: false,
    hero: {
      ...ESTATE.hero,
      h1: `${s.name} in Toronto and the GTA`,
      lead: `We clear it all out, sort what can be donated or recycled, and leave the space broom-clean. Details for ${n} {tbc}.`,
      alt: `${s.name} by Live Junk Free`,
      primary: "Get a free quote",
      cap: undefined,
    },
    pricing: { ...ESTATE.pricing, title: `How ${n} are priced` },
    reviewsContext: n,
    cta: { ...ESTATE.cta, h: `Get a quote for ${n}`, form: { ...ESTATE.cta.form, title: "Get a free quote", cta: "Send my quote request", service: "Garage, basement or room cleanout" } },
    mobileCta: undefined,
  };
}

export function commercialContent(s: Service): CommercialContent {
  if (s.slug === DESIGNED_SERVICES.office) return OFFICE;
  return {
    ...OFFICE,
    hero: { ...OFFICE.hero, h1: `${s.name} for businesses`, alt: `${s.name} by Live Junk Free` },
    reviewsContext: "commercial clients",
  };
}

export function demolitionContent(s: Service): DemolitionContent {
  if (s.slug === DESIGNED_SERVICES.deck) return DECK;
  const n = lower(s.name);
  return {
    ...DECK,
    hero: {
      ...DECK.hero,
      h1: `${s.name} and haul-away`,
      lead: `We tear it down, haul away every piece and leave the area raked and ready for what comes next. Scope for ${n} {tbc}.`,
      alt: `${s.name} by Live Junk Free`,
    },
    steps: { ...DECK.steps, title: `How ${n} works` },
    other: { ...DECK.other, items: DECK.other.items.filter((i) => !i.href.includes(s.slug)) },
    cta: { ...DECK.cta, h: `Get your ${n} quote` },
  };
}

export function locationContent(a: Area): LocationContent {
  if (a.slug === "toronto") return TORONTO;
  return {
    ...TORONTO,
    hero: {
      ...TORONTO.hero,
      h1: `Junk removal in ${a.name}`,
      lead: `Homes, condos and businesses across ${a.name}. We carry it out, sweep up and donate or recycle what we can.`,
      ticks: ["Pickups from inside, any floor", "Driveway, street and laneway loading", "Same or next day when available {tbc}"],
      alt: `Live Junk Free truck in ${a.name}`,
    },
    local: {
      title: `Getting junk out of ${a.name} homes`,
      intro: `Local details for ${a.name} {tbc}.`,
      panels: TORONTO.local.panels,
    },
    neighbourhoods: { title: "Neighbourhoods we serve", list: [a.name], flag: "Neighbourhood list {tbc}" },
    popular: { ...TORONTO.popular, title: `Popular services in ${a.name}` },
    reviewsContext: `${a.name} customers`,
    faq: { title: `${a.name} questions`, items: TORONTO.faq.items.slice(0, 2) },
    nearby: {
      title: "Nearby areas",
      links: [...cityLinks(TOP_AREAS.filter((x) => x !== a.name)), { label: "All locations", href: HREF.locations }],
    },
    cta: { h: `Book a ${a.name} pickup` },
  };
}
