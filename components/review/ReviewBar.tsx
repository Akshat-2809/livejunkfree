"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DESIGNED_PAGES, HREF } from "@/content/routes";

const OTHER = "__other";

/**
 * Review toolbar (only rendered when NEXT_PUBLIC_REVIEW_MODE=true).
 * Page switcher for the 12 designed pages and a link to the /review/ index.
 */
export function ReviewBar() {
  const pathname = usePathname();
  const router = useRouter();
  const current = DESIGNED_PAGES.find((p) => p.href === pathname)?.href ?? OTHER;

  return (
    <div className="pv" role="region" aria-label="Design preview controls">
      <div className="wrap">
        <b>Live Junk Free redesign</b>
        <span className="hide-m">Design preview</span>
        <select
          aria-label="Choose page"
          value={current}
          onChange={(e) => {
            if (e.target.value !== OTHER) router.push(e.target.value);
          }}
        >
          {current === OTHER ? (
            <option value={OTHER} disabled>
              Template preview: {pathname}
            </option>
          ) : null}
          {DESIGNED_PAGES.map((p, i) => (
            <option key={p.href} value={p.href}>
              {i + 1}. {p.label}
            </option>
          ))}
        </select>
        <span className="sp" />
        <Link className="pv-btn" href={HREF.review}>
          All pages &amp; links
        </Link>
      </div>
    </div>
  );
}
