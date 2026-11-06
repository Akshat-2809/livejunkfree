import { PageShell } from "@/components/layout/PageShell";
import { MapPlaceholder } from "@/components/sections/Areas";
import { Sec } from "@/components/sections/Blocks";
import { CtaBand } from "@/components/sections/CtaBand";
import { LocationsFinder } from "@/components/sections/RegionList";
import { GAP } from "@/components/templates/ServiceTemplates";
import { Rich } from "@/components/ui/Rich";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { LOCATIONS_INDEX } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { SITE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ ...LOCATIONS_INDEX.meta, path: HREF.locations });

export default function LocationsPage() {
  const o = LOCATIONS_INDEX.outside;
  return (
    <PageShell>
      <LocationsFinder path={HREF.locations} />
      <Sec wrapClassName={`grid g2 items-center ${GAP}`}>
        <MapPlaceholder label={LOCATIONS_INDEX.map} className="min-h-[360px]!" />
        <div className="stack">
          <h2 className="d2">{o.title}</h2>
          <p className="muted">
            <Rich text={o.text} />
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href={HREF.contact}>
              {o.cta}
            </Link>
            <a className="btn btn-ghost" href={SITE.tel}>
              <Icon name="phone" /> {SITE.phone}
            </a>
          </div>
        </div>
      </Sec>
      <CtaBand />
    </PageShell>
  );
}
