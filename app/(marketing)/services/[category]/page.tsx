import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { HREF, categoryHref } from "@/content/routes";
import { CATEGORIES, CATEGORY_ORDER } from "@/content/services";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_ORDER.map((k) => ({ category: CATEGORIES[k].slug }));
}

const find = (slug: string) => CATEGORY_ORDER.map((k) => CATEGORIES[k]).find((c) => c.slug === slug);

export async function generateMetadata({ params }: PageProps<"/services/[category]">): Promise<Metadata> {
  const c = find((await params).category);
  if (!c) return {};
  return pageMeta({ title: `${c.h1} in Toronto & the GTA | Live Junk Free`, description: c.lead, path: categoryHref(c.key) });
}

export default async function CategoryPage({ params }: PageProps<"/services/[category]">) {
  const c = find((await params).category);
  if (!c) notFound();
  return (
    <HubTemplate
      crumbs={[{ label: "Home", href: HREF.home }, { label: "Services", href: HREF.services }, { label: c.label }]}
      path={categoryHref(c.key)}
      h1={c.h1}
      lead={c.lead}
      categories={[c.key]}
      pending
    />
  );
}
