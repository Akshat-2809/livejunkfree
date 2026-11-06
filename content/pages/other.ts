/**
 * Copy for the hub, pricing, contact, locations index, landing and placeholder pages.
 */
import type { IconName } from "@/components/icons";
import { FAQS } from "../faqs";
import type { ImageKey } from "../images";
import { AREAS } from "../locations";
import { PRICE_TABLES } from "../pricing";
import { STEPS_STD } from "../shared";
import type { Step } from "../types";

export const SERVICES_HUB = {
  meta: {
    title: "Junk Removal Services | Live Junk Free",
    description: "Every Live Junk Free service on one page: residential, commercial, cleanouts and demolition across Toronto and the GTA.",
  },
  h1: "Every service, one page",
  lead: "Start with who you are, or search for the exact item. Every service includes loading, hauling, sweep-up and responsible disposal.",
  cardCta: "View services",
  az: {
    title: "Find your item",
    intro: "Don't see it? We probably take it. Send a photo.",
    search: "Search: piano, shed, fridge…",
    searchLabel: "Search services",
    overview: "Overview",
    empty: "No matching items. Send us a photo and we'll tell you if we take it.",
    note: "Design note: this one page replaces the ~70 item links that are in the current main navigation. Each item keeps its existing URL and page for SEO.",
  },
  pricingTitle: "Not sure how much it'll cost?",
};

export const HOW_IT_WORKS = {
  meta: {
    title: "Junk Removal Pricing & How It Works | Live Junk Free",
    description: "You pay for the space your items take up in our truck. Loading, hauling, sorting and disposal fees are all included. Price confirmed before we lift.",
  },
  crumb: "Pricing and how it works",
  h1: "Simple pricing. Price confirmed before we lift.",
  lead: "You pay for the space your items take up in our truck. Loading, hauling, sorting and disposal fees are all included.",
  factors: {
    title: "What changes the price",
    items: [
      { icon: "truck" as IconName, title: "Volume", text: "How much of the truck your items fill." },
      { icon: "box" as IconName, title: "Weight", text: "Concrete, soil, shingles and similar are priced by weight." },
      { icon: "stairs" as IconName, title: "Access", text: "Many flights of stairs or long carries can add time." },
      { icon: "tag" as IconName, title: "Special items", text: "Mattresses, tires, fridges and hot tubs can carry recycling fees." },
    ],
  },
  examples: {
    title: "Example prices",
    intro: "Real examples help you budget. Your final price is confirmed on site.",
    table: PRICE_TABLES.examples,
  },
  steps: {
    title: "How it works",
    list: [
      { title: "Book", text: "Call, text or use the quote form. Add photos for a tighter price range." },
      { title: "Arrival window", text: "We text you when the crew is on the way." },
      { title: "Firm price", text: "The crew sees the load and confirms the price. Nothing starts until you agree." },
      { title: "Load and sweep", text: "We take it from wherever it is and clean up after." },
      { title: "Sort", text: "Donations, recycling, then disposal. Pay by card, e-transfer or cash." },
    ] as Step[],
  },
  faq: FAQS.pricing,
};

export const CONTACT = {
  meta: {
    title: "Get a Free Junk Removal Quote | Live Junk Free",
    description: "Tell us what needs to go. We reply with a price range and the next available times. Call or text 647-922-5865.",
  },
  crumb: "Get a quote",
  h1: "Get a free quote",
  lead: "Tell us what needs to go. We reply with a price range and the next available times.",
  fastest: "Fastest: call or text",
  hoursLabel: "Hours:",
  ticks: ["Quote is free and you're not committed", "Firm price confirmed on site before we start", "Photos help us give a tighter range"],
  map: "Google Maps embed (existing)",
  bookingFor: { label: "I'm booking for", options: ["My home", "A business", "An estate", "A property I manage"] },
};

export const LOCATIONS_INDEX = {
  meta: {
    title: "Junk Removal Service Areas | Toronto & GTA | Live Junk Free",
    description: `Toronto plus ${AREAS.length - 1} communities across Peel, York, Durham and Simcoe. Find your area for local details and pickup times.`,
  },
  h1: "Every community we serve",
  lead: `Toronto plus ${AREAS.length - 1} communities across Peel, York, Durham and Simcoe. Find yours for local details and pickup times.`,
  search: "Search your city or town",
  searchLabel: "Search locations",
  none: "We couldn't find that area. Call",
  noneAfter: "and we'll tell you if we can get there.",
  map: "Service area map",
  outside: {
    title: "Just outside the map?",
    text: "We often take jobs a little past these areas, especially larger cleanouts. Send your postal code and we'll confirm {tbc}.",
    cta: "Check my area",
  },
};

export const LP_SAME_DAY = {
  meta: {
    title: "Same-Day Junk Removal Toronto & GTA | Live Junk Free",
    description: "Call before noon and we can often be there today. Price confirmed before we lift.",
  },
  h1: "Same-day junk removal in Toronto and the GTA",
  lead: "Call before noon and we can often be there today. We load everything, sweep up and take it away {tbc:same-day promise}.",
  ticks: ["Price confirmed before we lift", "Furniture, appliances, garage and basement junk", "Donated and recycled where possible"],
  image: "crew" as ImageKey,
  alt: "Live Junk Free crew",
  form: { title: "Check today's availability", compact: true, cta: "Check availability" },
  pricingTitle: "What will it cost?",
  stepsTitle: "Three steps, one visit",
  steps: STEPS_STD,
  band: { title: "Want it gone today?", cta: "Check availability online" },
  mobile: { call: "Call now", cta: "Check today" },
};

export const LP_ESTATE = {
  meta: {
    title: "Estate Cleanouts Across the GTA | Live Junk Free",
    description: "We clear the whole property, set aside personal items and donate what we can. Start with a free walkthrough and a written quote.",
  },
  h1: "Estate cleanouts across the GTA, at your pace",
  lead: "We clear the whole property, set aside personal items and donate what we can. Start with a free walkthrough and a written quote.",
  ticks: ["Keepsakes and documents set aside for you", "Work with executors, realtors and family out of town", "Broom-clean and ready for sale"],
  image: "apt" as ImageKey,
  alt: "Empty room after an estate cleanout",
  form: { title: "Request a free walkthrough", compact: true, cta: "Request a walkthrough" },
  talkFirst: "Prefer to talk first?",
  stepsTitle: "How it works",
  steps: [
    { title: "Talk it through", text: "A short call about the property and what matters to you." },
    { title: "Walkthrough and quote", text: "In person or by video. Written quote, no obligation." },
    { title: "Sort and clear", text: "Keepsakes boxed, donations separated, the rest removed." },
    { title: "Handover", text: "Broom-clean property, photos and receipts." },
  ] as Step[],
  reviewsContext: "estate cleanouts",
  faq: FAQS.lpEstate,
  mobile: { call: "Call", cta: "Book walkthrough" },
};

export const PLACEHOLDERS = {
  about: {
    h1: "About Live Junk Free",
    lead: "Our story, crew and values. Content for this page is being written with the client.",
  },
  blog: {
    h1: "Blog",
    lead: "Junk removal tips, decluttering guides and local news. Existing posts will be migrated from the current site.",
  },
  privacy: {
    h1: "Privacy policy",
    lead: "The current privacy policy will be migrated from livejunkfree.ca before launch.",
  },
};
