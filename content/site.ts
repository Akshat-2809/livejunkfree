/**
 * Business details used across the site.
 * Anything flagged `toConfirm: true` renders with a dashed "to confirm" badge
 * until the client approves it. Do not remove those flags without approval.
 */

export const SITE = {
  name: "Live Junk Free",
  url: "https://livejunkfree.ca",
  tagline: "Junk removal, cleanouts and small demolition across Toronto and the GTA.",
  phone: "647-922-5865",
  tel: "tel:+16479225865",
  email: "info@livejunkfree.ca",
  copyright: "© 2026 Live Junk Free. Serving Toronto and the GTA.",
} as const;

/** Footer hours. Not confirmed by the client yet. */
export const HOURS = {
  toConfirm: true,
  rows: [
    { days: "Mon–Fri", time: "7am – 8pm" },
    { days: "Sat–Sun", time: "8am – 6pm" },
  ],
  /** Short form used on the contact page. */
  summary: "Mon–Sun, 7am–8pm",
} as const;

/** Google rating. Placeholder until wired to the live Google reviews widget. */
export const RATING = {
  score: "4.9",
  count: "XXX",
  toConfirm: true,
} as const;

export const SOCIAL = [
  { label: "Facebook", short: "Fb", href: "#" },
  { label: "Instagram", short: "Ig", href: "#" },
  { label: "TikTok", short: "Tt", href: "#" },
] as const;

/** Link to the live Google reviews. Placeholder until the client supplies it. */
export const GOOGLE_REVIEWS_URL = "#";

/** Review mode shows the toolbar, /review/ and keeps the whole site noindex. */
export const REVIEW_MODE = process.env.NEXT_PUBLIC_REVIEW_MODE === "true";
