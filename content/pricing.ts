/**
 * Pricing data. Every price is a placeholder ($XX / $XXX) until the client
 * approves real numbers. Keep the {tbc} flags next to each one.
 *
 * Text fields support the content markup rendered by <Rich>:
 *   {tbc}  {tbc:label}  **bold**  [link text](/path/)
 */

export type Load = { k: string; eq: string; price: string; items: string[]; fill: number };

/** Truck load sizes for the LoadMeter. `fill` = how many of the 8 truck cells light up. */
export const LOADS: Load[] = [
  { k: "1/8", eq: "About one pickup-truck bed", price: "$XXX", items: ["A couch", "A mattress + box spring", "A few boxes"], fill: 1 },
  { k: "1/4", eq: "A small room or a garage corner", price: "$XXX", items: ["Bedroom set", "Washer + dryer", "Patio set"], fill: 2 },
  { k: "1/2", eq: "A one-bedroom apartment", price: "$XXX", items: ["Living room furniture", "Basement storage", "Hot tub (cut down)"], fill: 4 },
  { k: "3/4", eq: "A full garage or large basement", price: "$XXX", items: ["Garage cleanout", "Renovation debris", "Office move-out"], fill: 6 },
  { k: "Full", eq: "A small house cleanout", price: "$XXX", items: ["Estate cleanout", "Whole-house declutter", "Small shed teardown"], fill: 8 },
];

/** Load size selected on first render. */
export const DEFAULT_LOAD = 1;

export const LOAD_METER = {
  tag: "Load size",
  priceNote: "starting price",
  priceFlag: "approved prices",
  footnote:
    "You pay for the space your items take in our truck. Labour, loading and disposal are included. Heavy materials like concrete, soil and shingles are priced by weight {tbc}.",
  cta: "Get my exact price",
  secondary: "How pricing works",
};

export type PriceTable = { head: [string, string, string]; rows: [string, string, string][] };

export const PRICE_TABLES = {
  couch: {
    head: ["Job", "What's included", "From"],
    rows: [
      ["Loveseat or armchair", "Removal from any floor, loading, disposal", "$XX {tbc}"],
      ["3-seat sofa", "Removal from any floor, loading, disposal", "$XX {tbc}"],
      ["Sectional (2–4 pieces)", "Disassembly if needed, removal, disposal", "$XXX {tbc}"],
      ["Couch + mattress + boxes", "Priced by truck space as one load", "$XXX {tbc}"],
    ],
  },
  commercial: {
    head: ["Job", "How it's priced", "From"],
    rows: [
      ["A few desks or chairs", "Truckload pricing", "$XXX {tbc}"],
      ["Small office clear-out", "Truckload pricing, after-hours option", "$XXX {tbc}"],
      ["Floor, warehouse or retail clear-out", "Fixed project quote after site visit", "Quoted"],
    ],
  },
  demolition: {
    head: ["Factor", "Why it matters", "Example"],
    rows: [
      ["Size", "More material, more truck space", "Small deck from $XXX {tbc}"],
      ["Height and levels", "Raised and multi-level decks take longer", "Quoted on site"],
      ["Footings", "Concrete is heavy and priced by weight", "Quoted on site"],
      ["Access", "Backyard-only access means more carrying", "Quoted on site"],
    ],
  },
  examples: {
    head: ["Job", "Typical load", "From"],
    rows: [
      ["Single mattress", "Minimum load", "$XX {tbc}"],
      ["Fridge or freezer", "Minimum load + appliance fee", "$XX {tbc}"],
      ["One-room cleanout", "1/4 truck", "$XXX {tbc}"],
      ["Garage cleanout", "1/2 to 3/4 truck", "$XXX {tbc}"],
      ["Hot tub removal", "Cut down + haul", "$XXX {tbc}"],
    ],
  },
} satisfies Record<string, PriceTable>;
