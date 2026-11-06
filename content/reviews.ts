/**
 * Reviews. These are SAMPLES — replace with real Google reviews (or wire the
 * live Google reviews widget) before launch. Each card keeps its "sample" badge.
 */

export type Review = { text: string; service: string };

export const REVIEWS_HEADING = "What customers say";
export const REVIEW_SAMPLE_FLAG = "sample — replace with real Google review";
export const REVIEW_SCORE_FLAG = "live rating";
export const REVIEW_LINK_LABEL = "Read all reviews on Google";

export const SAMPLE_REVIEWS: Review[] = [
  { text: "Placeholder: short real review about the crew being on time and careful with the walls on the way out.", service: "Couch removal, Etobicoke" },
  { text: "Placeholder: real review mentioning the price matched the quote and the garage was swept after.", service: "Garage cleanout, Vaughan" },
  { text: "Placeholder: real review from an estate or family cleanout, about how respectful the team was.", service: "Estate cleanout, Markham" },
];
