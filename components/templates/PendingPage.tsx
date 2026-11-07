import Link from "next/link";
import { PageShell } from "../layout/PageShell";
import { Sec } from "../sections/Blocks";
import { CtaBand } from "../sections/CtaBand";
import { PageHero } from "../sections/ServiceHero";
import { HREF } from "@/content/routes";

/** A page whose content is still being written, with the "content pending" banner. */
export function PendingPage({ h1, lead, path }: { h1: string; lead: string; path: string }) {
  return (
    <PageShell pending>
      <PageHero crumbs={[{ label: "Home", href: HREF.home }, { label: h1 }]} path={path} h1={h1} lead={lead} maxCh={18} />
      <Sec variant="tight">
        <div className="btn-row">
          <Link className="btn btn-primary btn-sm" href={HREF.home}>
            Back to home
          </Link>
          <Link className="btn btn-ghost btn-sm" href={HREF.services}>
            See all services
          </Link>
        </div>
      </Sec>
      <CtaBand />
    </PageShell>
  );
}
