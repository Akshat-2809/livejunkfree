import { FAQS } from "../faqs";
import { PRICE_TABLES } from "../pricing";
import { svc } from "../routes";
import type { DemolitionContent } from "../types";

/** Designed page: Template: Demolition (Deck). */
export const DECK: DemolitionContent = {
  hero: {
    h1: "Deck removal and demolition",
    lead: "We take down old wood and composite decks, haul away every board and leave the area raked and ready for what comes next.",
    ticks: ["Teardown, haul-away and clean-up in one price", "Wood recycled where accepted", "Free on-site estimate for larger decks"],
    image: "demo",
    alt: "Deck demolition",
    primary: "Get a demolition quote",
  },
  scope: {
    included: ["Boards, railings, stairs and framing", "Footings and posts {tbc}", "All debris loaded and hauled", "Nails and screws swept up"],
    before: ["Clear furniture and planters", "Turn off and disconnect any lighting or hot tub power", "Tell us about gas lines or anything under the deck"],
    excluded: ["Permits, if your city requires them", "Electrical disconnection by a licensed electrician", "Rebuilding or landscaping"],
    scopeFlag: "Scope {tbc}",
  },
  pricing: {
    title: "What affects the price",
    intro: "Demolition is quoted per job. These are the main factors.",
    table: PRICE_TABLES.demolition,
  },
  steps: {
    title: "How deck removal works",
    list: [
      { title: "Photos or site visit", text: "Send photos and rough measurements, or we visit for larger decks." },
      { title: "Fixed quote", text: "You get a firm price and a date. No deposit for small jobs." },
      { title: "Teardown and haul", text: "Usually done in a day, area raked and swept." },
    ],
  },
  other: {
    title: "Other demolition we do",
    items: [
      { label: "Sheds", href: svc("shed-demolition-services"), icon: "home" },
      { label: "Fences", href: svc("fence-demolition-services"), icon: "hammer" },
      { label: "Hot tubs", href: svc("hot-tub-demolition-services"), icon: "tub" },
      { label: "Playsets & swing sets", href: svc("playset-demolition-services"), icon: "tree" },
      { label: "Gazebos", href: svc("gazebo-demolition-services"), icon: "home" },
      { label: "Above-ground pools", href: svc("above-ground-pool-demolition-services"), icon: "tub" },
      { label: "Garages", href: svc("garage-demolition-services"), icon: "building" },
      { label: "Concrete", href: svc("concrete-demolition-services"), icon: "box" },
    ],
  },
  faq: FAQS.deck,
  cta: {
    h: "Get your deck removal quote",
    p: "Send a few photos and rough dimensions for a faster quote.",
    form: { title: "Demolition quote", service: "Demolition (deck, shed, fence)", cta: "Request a quote" },
  },
};
