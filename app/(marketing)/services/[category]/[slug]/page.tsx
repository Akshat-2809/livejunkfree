import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CleanoutTemplate, CommercialTemplate, DemolitionTemplate, ItemTemplate } from "@/components/templates/ServiceTemplates";
import { plain } from "@/components/ui/Rich";
import { HREF, categoryHref, serviceHref } from "@/content/routes";
import { CATEGORIES, SERVICES, isDesignedService, type Service } from "@/content/services";
import { cleanoutContent, commercialContent, demolitionContent, itemContent } from "@/content/templates";
import type { Crumb } from "@/content/types";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ category: CATEGORIES[s.category].slug, slug: s.slug }));
}

const find = (category: string, slug: string) => SERVICES.find((s) => s.slug === slug && CATEGORIES[s.category].slug === category);

function heroLead(s: Service) {
  switch (CATEGORIES[s.category].template) {
    case "item":
      return itemContent(s).hero.lead;
    case "cleanout":
      return cleanoutContent(s).hero.lead;
    case "commercial":
      return commercialContent(s).hero.lead;
    case "demolition":
      return demolitionContent(s).hero.lead;
  }
}

export async function generateMetadata({ params }: PageProps<"/services/[category]/[slug]">): Promise<Metadata> {
  const { category, slug } = await params;
  const s = find(category, slug);
  if (!s) return {};
  return pageMeta({
    title: `${s.name} in Toronto & the GTA | Live Junk Free`,
    description: plain(heroLead(s)),
    path: serviceHref(s),
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[category]/[slug]">) {
  const { category, slug } = await params;
  const s = find(category, slug);
  if (!s) notFound();

  const cat = CATEGORIES[s.category];
  const crumbs: Crumb[] = [
    { label: "Home", href: HREF.home },
    { label: cat.label, href: categoryHref(s.category) },
    { label: s.name },
  ];
  const props = { crumbs, path: serviceHref(s), pending: !isDesignedService(s.slug), name: s.name };

  switch (cat.template) {
    case "item":
      return <ItemTemplate c={itemContent(s)} {...props} />;
    case "cleanout":
      return <CleanoutTemplate c={cleanoutContent(s)} {...props} />;
    case "commercial":
      return <CommercialTemplate c={commercialContent(s)} {...props} />;
    case "demolition":
      return <DemolitionTemplate c={demolitionContent(s)} {...props} />;
  }
}
