import { FAQS } from "../faqs";
import { svc } from "../routes";
import type { CleanoutContent } from "../types";

/** Designed page: Template: Sensitive cleanout (Estate). Uses the calm variant. */
export const ESTATE: CleanoutContent = {
  calm: true,
  hero: {
    h1: "Estate cleanouts, handled with care",
    lead: "Clearing a loved one's home is hard. We work at your pace, set aside anything you want to keep, and donate what we can.",
    ticks: ["A walkthrough before any work starts", "Keepsakes, photos and documents set aside for you", "We can work with executors, realtors and family members out of town"],
    image: "apt",
    alt: "Clean, empty room after an estate cleanout",
    primary: "Book a walkthrough",
    cap: "Approved text-left / image-right hero",
  },
  includes: {
    title: "What a cleanout includes",
    intro: "One crew, one visit or several. Everything is cleared, sorted and the property left broom-clean and ready for sale, rent or handover.",
    panels: [
      { icon: "key", title: "Whole-property clearing", text: "Every room, the basement, garage, attic, shed and yard." },
      { icon: "file", title: "Personal items set aside", text: "Photos, papers, jewellery and anything you flag are boxed for you, not thrown away." },
      { icon: "heart", leaf: true, title: "Donation first", text: "Furniture and household goods in good condition go to local charities. Receipts {tbc}" },
      { icon: "home", title: "Broom-clean finish", text: "Floors swept and the property ready for the next step." },
    ],
  },
  steps: {
    title: "How it works",
    intro: "No pressure and no rush. You decide the timeline.",
    list: [
      { title: "Talk it through", text: "Call us or send a message. Tell us about the property and what matters to you." },
      { title: "Walkthrough and quote", text: "We visit or do a video call, note what stays, and give a written quote." },
      { title: "Sort and clear", text: "Keepsakes set aside, donations separated, everything else removed." },
      { title: "Handover", text: "Broom-clean property, donation receipts and photos if you're away." },
    ],
  },
  audience: {
    title: "Who we work with",
    ticks: [
      "**Families** clearing a parent's or relative's home",
      "**Executors and estate lawyers** who need the property ready for sale",
      "**Realtors** preparing a listing on a deadline",
      "**Relatives out of town**, with photo updates and key handover",
    ],
  },
  limits: {
    title: "What we don't do",
    text: "We remove and sort belongings. We don't appraise antiques, run estate sales, or do biohazard or trauma cleaning. If you need those, ask and we'll point you to people we trust {tbc:confirm scope}.",
    note: `Hoarding situations: see [hoarding cleanouts](${svc("hoarding-cleanouts-services")}) for how we handle them privately.`,
  },
  pricing: {
    title: "How estate cleanouts are priced",
    intro: "Most estates are priced as full truckloads. Here's what each size usually covers.",
  },
  reviewsContext: "estate and house cleanouts",
  faq: FAQS.estate,
  cta: {
    h: "Talk to us before you decide anything",
    p: "A short call is often the easiest way to start. No obligation and no pressure.",
    form: { title: "Request a walkthrough", service: "Estate or whole-house cleanout", cta: "Request a walkthrough" },
  },
  mobileCta: "Book a walkthrough",
};
