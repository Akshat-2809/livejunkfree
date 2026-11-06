import Link from "next/link";
import { PageShell } from "../layout/PageShell";
import { Sec } from "../sections/Blocks";
import { CtaBand } from "../sections/CtaBand";
import { PageHero } from "../sections/ServiceHero";
import { HREF } from "@/content/routes";

/** Simple placeholder page (About, Blog, Privacy) with the "content pending" banner. */
export function PlaceholderPage({ h1, lead, path }: { h1: string; lead: string; path: string }) {
  return (
    <PageShell pending>
      <PageHero crumbs={[{ label: "Home", href: HREF.home }, { label: h1 }]} path={path} h1={h1} lead={lead} maxCh={18} />
      <Sec variant="tight">
        <div className="panel stack max-w-[64ch]">
          <h2 className="h4">This page is a placeholder</h2>
          <p className="small muted">
            It uses the shared header and footer so every link in the preview works. Final copy will be added before launch.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary btn-sm" href={HREF.home}>
              Back to home
            </Link>
            <Link className="btn btn-ghost btn-sm" href={HREF.services}>
              See all services
            </Link>
          </div>
        </div>
      </Sec>
      <CtaBand />
    </PageShell>
  );
}
