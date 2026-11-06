import type { MetadataRoute } from "next";
import { REVIEW_MODE, SITE } from "@/content/site";

/** Disallow everything while the client preview is in review mode. */
export default function robots(): MetadataRoute.Robots {
  if (REVIEW_MODE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/lp/", "/review/"] },
    sitemap: new URL("/sitemap.xml", SITE.url).toString(),
  };
}
