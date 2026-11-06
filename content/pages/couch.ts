import { FAQS } from "../faqs";
import { cityLinks } from "../nav";
import { PRICE_TABLES } from "../pricing";
import { svc } from "../routes";
import type { ItemContent } from "../types";

/** Designed page: Template: Item removal (Couch). */
export const COUCH: ItemContent = {
  hero: {
    h1: "Couch and sofa removal in Toronto and the GTA",
    lead: "Sectionals, sleeper sofas, recliners and loveseats. We carry it out from any floor, so you don't have to move it an inch.",
    ticks: ["Removed from inside: basements, stairs, condos", "Donated when it's in good shape", "Price confirmed before we lift"],
    image: "job",
    alt: "Couch being removed by Live Junk Free crew",
    callout: {
      title: "Couch removal from $XX",
      flag: "approved starting price",
      note: "Single item, ground floor. Sectionals and stairs may cost more.",
    },
  },
  take: {
    title: "What we take",
    intro: "Any size, any condition, including pieces that need to be taken apart to fit through the door.",
    ticks: ["Sectional sofas", "Sleeper sofas and pull-outs", "Recliners and lift chairs", "Loveseats and futons", "Leather and fabric couches", "Ottomans and chairs"],
    note: `Bed bugs? We handle infested furniture separately. See [bed bug furniture removal](${svc("bed-bug-furniture-removal-services")}).`,
  },
  panels: [
    { icon: "stairs", title: "Stairs and tight spaces", text: "We remove legs, doors and hinges if we need to, and protect walls and railings on the way out." },
    { icon: "building", title: "Condos and apartments", text: "Book the service elevator and we'll handle the rest, including loading-dock timing." },
    { icon: "leaf", leaf: true, title: "Donated when possible", text: "Clean, usable couches go to local charities instead of landfill." },
    { icon: "box", title: "Add other items", text: "Got a mattress or boxes too? Add them to the same visit. It's usually cheaper." },
  ],
  pricing: {
    title: "Couch removal pricing",
    intro: "Example prices for common jobs. Your exact price is confirmed on site.",
    table: PRICE_TABLES.couch,
  },
  steps: {
    title: "How couch removal works",
    list: [
      { title: "Send a photo or call", text: "Tell us the size and where it is. We'll give you a price range and a time window." },
      { title: "We carry it out", text: "Our two-person crew removes it from inside, protecting floors and walls." },
      { title: "Donated or recycled", text: "We sort it at our yard. You don't have to do anything else." },
    ],
  },
  reviewsContext: "couch and furniture removal",
  faq: FAQS.couch,
  related: [
    {
      title: "Often booked together",
      links: [
        { label: "Mattress removal", href: svc("mattress-removal-services") },
        { label: "Furniture removal", href: svc("furniture-removal-services") },
        { label: "Appliance removal", href: svc("appliance-removal-services") },
        { label: "Basement cleanout", href: svc("basement-cleanouts-services") },
      ],
    },
    { title: "Couch removal near you", links: cityLinks(["Toronto", "Mississauga", "Vaughan", "Markham", "Brampton"]) },
  ],
  cta: { h: "Get rid of that couch this week", form: { service: "Single item or a few items" } },
};
