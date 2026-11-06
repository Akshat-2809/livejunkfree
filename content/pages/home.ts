import type { IconName } from "@/components/icons";
import type { ImageKey } from "../images";
import { HREF, categoryHref } from "../routes";

export const HOME = {
  meta: {
    title: "Junk Removal Toronto & GTA | Live Junk Free",
    description:
      "Junk removal, cleanouts and small demolition across Toronto and the GTA. We do all the lifting, sweep up, and donate or recycle whatever we can.",
  },
  hero: {
    image: "crew" as ImageKey,
    alt: "Junk removal crew loading a truck",
    pills: { rating: "on Google", sameDay: "Same or next day" },
    h1: "Junk gone. Space back.",
    lead: "Junk removal, cleanouts and small demolition across Toronto and the GTA. We do all the lifting, sweep up, and donate or recycle whatever we can.",
    primary: "Get a free quote",
    quick: {
      title: "What needs to go?",
      text: "We'll reply with a price range and open times.",
      itemPlaceholder: "Couch, fridge, garage…",
      itemLabel: "What needs to go",
      postalLabel: "Postal code",
      postalPlaceholder: "Postal code",
      cta: "Get my quote",
    },
  },
  marquee: [
    ["Couches & sofas", "sofa"], ["Mattresses", "bed"], ["Fridges & freezers", "fridge"], ["Washers & dryers", "fridge"],
    ["TVs & e-waste", "tv"], ["Hot tubs", "tub"], ["Pianos", "piano"], ["Exercise equipment", "dumbbell"],
    ["Tires", "tire"], ["Yard waste & branches", "tree"], ["Cardboard & boxes", "box"], ["Office cubicles", "building"],
  ] as [string, IconName][],
  bento: {
    title: "What are you clearing out?",
    intro: "Pick the closest match. Each one shows what's included, how pricing works and the quickest way to book.",
    cards: [
      { variant: "a", href: categoryHref("residential"), image: "unload" as ImageKey, alt: "Crew removing furniture", label: "Homeowners and renters", title: "Furniture, appliances and household junk", text: "Couches, mattresses, fridges, hot tubs, e-waste and 40+ other items, taken from anywhere in your home." },
      { variant: "b", href: HREF.estate, image: "clean" as ImageKey, alt: "Cluttered garage", label: "Families and executors", title: "Estate, house and hoarding cleanouts", text: "Whole properties cleared with care." },
      { variant: "c", href: HREF.office, image: "com" as ImageKey, alt: "Office", label: "Businesses", title: "Office and commercial", text: "Cubicles, warehouses, retail, property managers." },
      { variant: "d", href: HREF.deck, title: "Demolition", text: "Decks, sheds, fences, hot tubs and playsets, torn down and hauled away the same day." },
    ],
  },
  beforeAfter: {
    title: "Same garage. One visit later.",
    intro: "Drag the handle. This is what one visit from our crew looks like.",
    before: "clean" as ImageKey,
    after: "empty2" as ImageKey,
    cap: "Stock photos for the pitch {tbc:swap for real LJF before/after}",
  },
  pricing: {
    title: "Pricing you can see",
    intro: "You pay for how much of the truck your items fill. Tap a load size to see what usually fits.",
  },
  steps: { title: "Booked in minutes. Gone in one visit.", cta: "How it works" },
  destinations: {
    title: "Where your junk ends up",
    intro: "Every load is sorted after pickup. Landfill is the last stop, not the first.",
    stat: { value: "XX%", label: "kept out of landfill", note: "Diversion rate {tbc}" },
    items: [
      { icon: "heart" as IconName, leaf: true, label: "Donated", text: "Usable furniture and household goods go to local charities." },
      { icon: "leaf" as IconName, leaf: true, label: "Recycled", text: "Metal, e-waste, cardboard, appliances and mattresses." },
      { icon: "truck" as IconName, leaf: false, label: "Disposed", text: "Only what can't go anywhere else." },
    ],
  },
  areas: {
    title: "Local to Toronto and the GTA",
    intro: "Our trucks run across the city and 25 surrounding communities every day.",
    card: { title: "Not on the list?", text: "Check every community we serve, grouped by region.", link: "See all locations" },
  },
};
