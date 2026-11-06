"use client";

import Link from "next/link";
import { useState } from "react";
import type { RouteEntry, RouteGroup } from "@/content/routes";

/** Searchable list of every generated route, grouped, with a status label. */
export function RouteIndex({ routes }: { routes: RouteEntry[] }) {
  const [q, setQ] = useState("");
  const v = q.trim().toLowerCase();
  const hits = routes.filter((r) => !v || r.label.toLowerCase().includes(v) || r.href.includes(v));
  const groups = [...new Set(routes.map((r) => r.group))] as RouteGroup[];

  return (
    <>
      <div className="filterbox">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search pages or URLs…" aria-label="Search all routes" aria-controls="route-index" />
      </div>
      <p className="small muted mb-6" role="status">
        Showing {hits.length} of {routes.length} routes
      </p>
      <div className="grid g2 gap-4!" id="route-index">
        {groups.map((g) => {
          const list = hits.filter((r) => r.group === g);
          if (!list.length) return null;
          return (
            <div key={g} className="panel white">
              <h3 className="h4 mb-3">
                {g} <span className="small muted font-normal">({list.length})</span>
              </h3>
              <ul className="rvw-list">
                {list.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href}>
                      <span>
                        <span className="block font-medium">{r.label}</span>
                        <code>{r.href}</code>
                      </span>
                      <span className={r.status === "designed" ? "status designed" : "status pending"}>
                        {r.status === "designed" ? "Designed" : "Template preview (content pending)"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
