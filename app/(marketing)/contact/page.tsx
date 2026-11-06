import { PageShell } from "@/components/layout/PageShell";
import { MapPlaceholder } from "@/components/sections/Areas";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { WordReveal } from "@/components/sections/WordReveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Ticks } from "@/components/ui/Ticks";
import { ToConfirm } from "@/components/ui/ToConfirm";
import { CONTACT } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { HOURS, SITE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ ...CONTACT.meta, path: HREF.contact });

export default function ContactPage() {
  const C = CONTACT;
  return (
    <PageShell>
      <section className="sec white">
        <div className="wrap grid g2 items-start gap-[clamp(28px,5vw,72px)]!">
          <div className="stack-lg">
            <Breadcrumbs crumbs={[{ label: "Home", href: HREF.home }, { label: C.crumb }]} path={HREF.contact} />
            <h1 className="d1">
              <WordReveal text={C.h1} />
            </h1>
            <p className="lead">{C.lead}</p>
            <div className="panel stack">
              <p className="small muted">{C.fastest}</p>
              <a className="callbig" href={SITE.tel}>
                {SITE.phone}
              </a>
              <p className="small">
                <a className="tlink" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
              <p className="small muted">
                {C.hoursLabel} {HOURS.summary} {HOURS.toConfirm ? <ToConfirm /> : null}
              </p>
            </div>
            <Ticks items={C.ticks} />
            <MapPlaceholder label={C.map} className="min-h-[220px]!" />
          </div>
          <div className="panel p-[clamp(20px,3vw,32px)]!">
            <QuoteForm title="" bookingFor={C.bookingFor} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
