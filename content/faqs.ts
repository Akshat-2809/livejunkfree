/**
 * FAQ lists. Answers support the <Rich> markup ({tbc}, **bold**, [link](/path/)).
 * Each list also feeds FAQPage JSON-LD on its page.
 */

export type FaqItem = { q: string; a: string };
export type FaqList = { title?: string; intro?: string; items: FaqItem[] };

export const FAQS = {
  home: {
    items: [
      { q: "How much does junk removal cost?", a: "It depends on how much space your items take in the truck, plus any heavy materials. You get a price range from photos and a firm price on site before we start." },
      { q: "Can you come today or tomorrow?", a: "Often, yes. Same-day and next-day slots depend on the schedule, so call early in the day for the best chance." },
      { q: "Do I need to bring things outside?", a: "No. We pick up from anywhere on the property: basements, upper floors, backyards, condo units." },
      { q: "What happens to my stuff?", a: "We sort every load. Usable items are donated, materials are recycled, and only what is left goes to disposal." },
      { q: "What can't you take?", a: "Hazardous waste such as paint, propane tanks, chemicals and asbestos. Ask us if you're unsure." },
    ],
  },
  couch: {
    items: [
      { q: "Do I need to be home?", a: "Not always. If the couch is accessible, for example in a garage or on a porch, you can pay online and we'll text you when it's done {tbc}." },
      { q: "Can you take a sofa bed with the metal frame?", a: "Yes. Sleeper sofas are heavy, so we bring two crew members and recycle the metal frame." },
      { q: "Will you donate my couch?", a: "If it's clean, undamaged and free of pets and pests, we try to donate it. Charities have the final say." },
      { q: "Do you charge extra for stairs?", a: "Several flights or very tight access can add to the price. We'll tell you before we start." },
    ],
  },
  estate: {
    title: "Questions families ask",
    intro: "Every situation is different. These are the questions we hear most.",
    items: [
      { q: "How long does an estate cleanout take?", a: "A condo or small house is often one day. Larger homes with a full basement and garage can take two to three days." },
      { q: "Do I need to be there?", a: "No. Many clients are out of town. We can collect a key, send photos as we go and return the key when finished {tbc}." },
      { q: "What happens to items I want to keep?", a: "You tell us during the walkthrough. We box and label them and leave them in one room, or deliver them for a fee {tbc}." },
      { q: "Can you work with the estate lawyer or realtor?", a: "Yes. We can send the quote and invoice to whoever is handling the estate." },
    ],
  },
  commercial: {
    items: [
      { q: "Can you work outside business hours?", a: "Yes. Evenings and weekends are common for offices and retail so there is no disruption." },
      { q: "Do you provide a certificate of insurance?", a: "Yes, on request before the job. Let us know the certificate holder details." },
      { q: "What about computers and hard drives?", a: "We recycle e-waste through certified processors. Ask about data destruction options when you book." },
      { q: "Can we set up recurring pickups?", a: "Yes. Property managers often book monthly or per-turnover pickups on one account {tbc}." },
    ],
  },
  deck: {
    items: [
      { q: "Do I need a permit to remove a deck?", a: "Usually not for removal alone, but rules vary by city. Check with your municipality if you plan to rebuild." },
      { q: "Can you remove a hot tub that is on the deck?", a: "Yes. We often do both in the same visit. The hot tub must be drained and disconnected first." },
      { q: "How long does it take?", a: "Most residential decks are cleared in a single day." },
    ],
  },
  toronto: {
    title: "Toronto questions",
    items: [
      { q: "Do you charge extra for downtown condos?", a: "Not for the location. Long carries from the unit to the dock or waiting for elevators may affect the price, and we'll tell you upfront." },
      { q: "Can you pick up from my laneway garage?", a: "Yes. Just let us know the laneway name and how to reach the garage." },
      { q: "Does the City of Toronto take large items?", a: "The city collects some bulky items on garbage day. We're useful when you need it gone now, from inside, or in bigger amounts." },
    ],
  },
  pricing: {
    title: "Pricing questions",
    items: [
      { q: "Are there hidden fees?", a: "No. The price we confirm on site includes labour, transport and disposal. Any item fees are explained before we start." },
      { q: "How do I pay?", a: "Card, e-transfer or cash after the job is done {tbc}." },
      { q: "Is there a minimum charge?", a: "Yes, a minimum load covers single small items. Ask us for the current minimum." },
      { q: "Do you offer discounts?", a: "Any current offers are shown here and confirmed when you book." },
    ],
  },
  lpEstate: {
    items: [
      { q: "Do I need to be there?", a: "No. We can collect a key and send photos throughout {tbc}." },
      { q: "How quickly can you start?", a: "Walkthroughs are usually within a few days, and the cleanout is scheduled around your timeline." },
      { q: "What does it cost?", a: "Most estates are priced by truckload. You get a written quote after the walkthrough." },
    ],
  },
} satisfies Record<string, FaqList>;

export const FAQ_DEFAULT_TITLE = "Common questions";
