import type { MetadataRoute } from "next";
import { ROUTES } from "@/content/routes";
import { SITE } from "@/content/site";

/** Generated from the route map. Landing pages (/lp/) are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.filter((r) => r.index).map((r) => ({
    url: new URL(r.href, SITE.url).toString(),
    changeFrequency: "monthly",
    priority: r.href === "/" ? 1 : r.status === "designed" ? 0.8 : 0.5,
  }));
}
