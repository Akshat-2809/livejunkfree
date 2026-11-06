import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RouteIndex } from "@/components/review/RouteIndex";
import { Sec } from "@/components/sections/Blocks";
import { DESIGNED_PAGES, HREF, ROUTES } from "@/content/routes";
import { REVIEW_MODE } from "@/content/site";

export const metadata: Metadata = {
  title: "All pages & links — Live Junk Free redesign preview",
  robots: { index: false, follow: false },
};

/** Review index (review mode only): every designed page and every generated route. */
export default function ReviewIndexPage() {
  if (!REVIEW_MODE) notFound();
  const others = ROUTES.filter((r) => r.group !== "Designed pages");
  return (
    <div className="page-root">
      <main id="main">
        <section className="hero">
          <div className="wrap one">
            <div className="stack-lg">
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link href={HREF.home}>Home</Link>
                <span aria-hidden="true">/</span>
                <b aria-current="page">Review index</b>
              </nav>
              <h1 className="d1 max-w-[16ch]">All pages &amp; links</h1>
              <p className="lead">
                <b>
                  {DESIGNED_PAGES.length} designed pages · {ROUTES.length} total routes
                </b>
                <br />
                Every page and link in the preview. Designed pages have approved layouts and copy; template previews reuse a
                designed template with the name swapped in while their content is pending.
              </p>
            </div>
          </div>
        </section>
        <Sec variant="tight">
          <h2 className="d3 mb-6">Designed pages</h2>
          <div className="rvw-grid">
            {DESIGNED_PAGES.map((p, i) => (
              <Link key={p.href} className="rvw-card" href={p.href}>
                <span className="n">{i + 1}</span>
                <b className="h4">{p.label}</b>
                <code>{p.href}</code>
                <span className="status designed self-start mt-auto">Designed</span>
              </Link>
            ))}
          </div>
        </Sec>
        <Sec>
          <h2 className="d3 mb-6">Every generated route</h2>
          <RouteIndex routes={others} />
        </Sec>
      </main>
    </div>
  );
}
