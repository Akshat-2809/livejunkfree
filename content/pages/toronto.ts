import { FAQS } from "../faqs";
import { TOP_AREAS } from "../locations";
import { cityLinks } from "../nav";
import { HREF, svc } from "../routes";
import type { LocationContent } from "../types";

/** Designed page: Template: Location (Toronto). */
export const TORONTO: LocationContent = {
  hero: {
    h1: "Junk removal in Toronto",
    lead: "From downtown condos to semis with laneway garages, we clear out homes and businesses across the city.",
    ticks: ["Condo-ready: elevator bookings and loading docks", "Laneway and street-parking pickups", "Same or next day when available {tbc}"],
    image: "crew",
    alt: "Live Junk Free truck in Toronto",
  },
  local: {
    title: "Getting junk out of Toronto homes",
    intro: "Toronto pickups come with their own problems. Here's how we handle the common ones.",
    panels: [
      { title: "Condo towers", text: "Book the service elevator and tell us the move-in/move-out window. We bring blankets for the elevator and use the loading dock." },
      { title: "Semis and row houses", text: "Narrow staircases and front-hall turns are normal for us. We'll take apart furniture if we have to." },
      { title: "Laneways and parking", text: "We can load from the laneway or street. Let us know if there's a permit-parking zone." },
    ],
  },
  neighbourhoods: {
    title: "Neighbourhoods we serve",
    list: ["Downtown", "The Annex", "Leslieville", "Liberty Village", "High Park", "The Junction", "Danforth", "Yorkville", "North York", "East York", "Midtown", "Roncesvalles"],
    flag: "Neighbourhood list {tbc}",
  },
  popular: {
    title: "Popular services in Toronto",
    items: [
      { label: "Couch removal", href: HREF.couch, icon: "sofa" },
      { label: "Condo cleanouts", href: svc("apartment-cleanouts-services"), icon: "building" },
      { label: "Estate cleanouts", href: HREF.estate, icon: "heart" },
      { label: "Office cleanouts", href: HREF.office, icon: "file" },
    ],
  },
  reviewsContext: "Toronto customers",
  faq: FAQS.toronto,
  nearby: {
    title: "Nearby areas",
    links: [...cityLinks(TOP_AREAS.filter((a) => a !== "Toronto")), { label: "All locations", href: HREF.locations }],
  },
  cta: { h: "Book a Toronto pickup" },
};
