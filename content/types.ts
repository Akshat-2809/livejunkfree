/**
 * Content types shared by every page. Shaped so a headless CMS can supply the
 * same objects later. Strings support <Rich> markup:
 *   {tbc}  {tbc:label}  **bold**  [link text](/path/)
 */
import type { IconName } from "@/components/icons";
import type { FaqList } from "./faqs";
import type { ImageKey } from "./images";
import type { Link } from "./nav";
import type { PriceTable } from "./pricing";

export type Crumb = { label: string; href?: string };
export type Step = { title: string; text: string };

export type QuoteFormOptions = {
  title?: string;
  /** Pre-selected service type. */
  service?: string;
  commercial?: boolean;
  compact?: boolean;
  cta?: string;
};

export type CtaContent = { h?: string; p?: string; form?: QuoteFormOptions };

export type HeroContent = {
  h1: string;
  lead: string;
  ticks: string[];
  image: ImageKey;
  alt: string;
  cap?: string;
  primary?: string;
  secondary?: boolean;
  /** Price callout under the rating (item template). */
  callout?: { title: string; flag: string; note: string };
};

export type PanelContent = { icon?: IconName; leaf?: boolean; title: string; text: string };

export type RelatedGroup = { title: string; links: Link[] };

/** Template: Item removal (Couch). */
export type ItemContent = {
  hero: HeroContent;
  take: { title: string; intro: string; ticks: string[]; note?: string };
  panels: PanelContent[];
  pricing: { title: string; intro: string; table: PriceTable };
  steps: { title: string; list: Step[] };
  reviewsContext: string;
  faq: FaqList;
  related: RelatedGroup[];
  cta: CtaContent;
  mobileCta?: string;
};

/** Template: Sensitive cleanout (Estate). */
export type CleanoutContent = {
  calm: boolean;
  hero: HeroContent;
  includes: { title: string; intro: string; panels: PanelContent[] };
  steps: { title: string; intro: string; list: Step[] };
  audience: { title: string; ticks: string[] };
  limits: { title: string; text: string; note: string };
  pricing: { title: string; intro: string };
  reviewsContext: string;
  faq: FaqList;
  cta: CtaContent;
  mobileCta?: string;
};

/** Template: Commercial (Office). */
export type CommercialContent = {
  hero: HeroContent;
  segments: { title: string; text: string }[];
  schedule: { title: string; intro: string; ticks: string[] };
  scale: { title: string; rows: [string, string][]; note: string };
  pricing: { title: string; intro: string; table: PriceTable };
  steps: { title: string; list: Step[] };
  reviewsContext: string;
  faq: FaqList;
  cta: CtaContent;
  mobileCta?: string;
};

/** Template: Demolition (Deck). */
export type DemolitionContent = {
  hero: HeroContent;
  scope: { included: string[]; before: string[]; excluded: string[]; scopeFlag: string };
  pricing: { title: string; intro: string; table: PriceTable };
  steps: { title: string; list: Step[] };
  other: { title: string; items: { label: string; href: string; icon: IconName }[] };
  faq: FaqList;
  cta: CtaContent;
};

/** Template: Location (Toronto). */
export type LocationContent = {
  hero: HeroContent;
  local: { title: string; intro: string; panels: { title: string; text: string }[] };
  neighbourhoods: { title: string; list: string[]; flag: string };
  popular: { title: string; items: { label: string; href: string; icon: IconName }[] };
  reviewsContext: string;
  faq: FaqList;
  nearby: RelatedGroup;
  cta: CtaContent;
};
