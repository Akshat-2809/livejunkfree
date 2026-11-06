import { FAQS } from "../faqs";
import { PRICE_TABLES } from "../pricing";
import type { CommercialContent } from "../types";

/** Designed page: Template: Commercial (Office). */
export const OFFICE: CommercialContent = {
  hero: {
    h1: "Office and commercial junk removal",
    lead: "Cubicles, desks, filing cabinets, e-waste and full floor clear-outs. Scheduled around your business hours so your team keeps working.",
    ticks: [
      "Evening and weekend scheduling {tbc}",
      "Certificate of insurance on request {tbc}",
      "One invoice for multi-site and recurring jobs {tbc}",
    ],
    image: "com",
    alt: "Office furniture removal",
    primary: "Request a commercial quote",
  },
  segments: [
    { title: "Offices and retail", text: "Desks, cubicles, fixtures, shelving, displays" },
    { title: "Warehouses", text: "Racking, pallets, packaging, old stock" },
    { title: "Contractors and renovators", text: "Reno debris, old cabinets, drywall, flooring {tbc:confirm accepted materials}" },
    { title: "Property managers", text: "Unit turnovers, evictions, common areas" },
  ],
  schedule: {
    title: "Built for business schedules",
    intro: "Large jobs are quoted after a site visit, with a fixed price and a scope sheet you can share with facilities or procurement.",
    ticks: [
      "Fixed-price quotes for projects",
      "After-hours and weekend work {tbc}",
      "Data-bearing electronics handled responsibly {tbc:certified destruction?}",
      "Insurance and WSIB documents {tbc}",
      "Recurring pickups for property portfolios",
    ],
  },
  scale: {
    title: "Typical project scale",
    rows: [
      ["Small office (5–15 desks)", "1 crew, half day"],
      ["Floor clear-out (50+ workstations)", "2 crews, 1–2 nights"],
      ["Warehouse or retail clear-out", "Scoped on site"],
    ],
    note: "Timings are examples {tbc}",
  },
  pricing: {
    title: "How commercial jobs are priced",
    intro: "Small pickups use our standard truckload pricing. Larger projects get a fixed quote after a site visit.",
    table: PRICE_TABLES.commercial,
  },
  steps: {
    title: "From first call to empty floor",
    list: [
      { title: "Site visit or photos", text: "We walk the space or review photos and a floor plan." },
      { title: "Fixed quote and schedule", text: "A written scope, price and date that works around your team." },
      { title: "Clear-out and report", text: "We remove, sort and send a short diversion summary for your records {tbc}." },
    ],
  },
  reviewsContext: "commercial clients",
  faq: FAQS.commercial,
  cta: {
    h: "Get a commercial quote",
    p: "Tell us about the space and timeline. We'll come back with a scope and fixed price.",
    form: { title: "Commercial quote request", commercial: true, service: "Office or commercial", cta: "Request a quote" },
  },
  mobileCta: "Request a quote",
};
