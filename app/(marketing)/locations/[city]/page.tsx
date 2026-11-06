import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { AREAS, DESIGNED_CITY, findArea } from "@/content/locations";
import { HREF } from "@/content/routes";
import { locationContent } from "@/content/templates";
import { plain } from "@/components/ui/Rich";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[city]">): Promise<Metadata> {
  const a = findArea((await params).city);
  if (!a) return {};
  return pageMeta({
    title: `Junk Removal ${a.name} | Live Junk Free`,
    description: plain(locationContent(a).hero.lead),
    path: `/locations/${a.slug}/`,
  });
}

export default async function CityPage({ params }: PageProps<"/locations/[city]">) {
  const a = findArea((await params).city);
  if (!a) notFound();
  return (
    <LocationTemplate
      c={locationContent(a)}
      crumbs={[{ label: "Home", href: HREF.home }, { label: "Locations", href: HREF.locations }, { label: a.name }]}
      path={`/locations/${a.slug}/`}
      pending={a.slug !== DESIGNED_CITY}
    />
  );
}
