/**
 * JSON-LD helpers (schema.org). Values flagged "to confirm" (hours, rating)
 * are deliberately left out until the client approves them.
 */
import { plain } from "@/components/ui/Rich";
import type { FaqItem } from "@/content/faqs";
import { AREAS } from "@/content/locations";
import { SITE } from "@/content/site";
import type { Crumb } from "@/content/types";

const abs = (path: string) => new URL(path, SITE.url).toString();

export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": abs("/#business"),
    name: SITE.name,
    description: SITE.tagline,
    url: abs("/"),
    telephone: "+1-647-922-5865",
    email: SITE.email,
    logo: "https://livejunkfree.ca/wp-content/uploads/2024/05/Untitled-design-2.webp",
    areaServed: AREAS.map((a) => ({ "@type": "City", name: a.name })),
    // TODO(pre-launch): add openingHoursSpecification and aggregateRating once confirmed.
  };
}

export function service(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description: plain(description),
    url: abs(path),
    serviceType: name,
    provider: { "@id": abs("/#business"), "@type": "LocalBusiness", name: SITE.name, telephone: "+1-647-922-5865" },
    areaServed: { "@type": "Place", name: "Toronto and the Greater Toronto Area" },
  };
}

export function breadcrumbs(crumbs: Crumb[], currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: abs(c.href ?? currentPath),
    })),
  };
}

export function faqPage(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
}
