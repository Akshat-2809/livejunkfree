import { PageShell } from "@/components/layout/PageShell";
import { Sec, SecHead } from "@/components/sections/Blocks";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { Panel } from "@/components/ui/Panel";
import { ABOUT as A } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { STATS } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ ...A.meta, path: HREF.about });

/** About page: livejunkfree.ca/about/ content in the new layout. */
export default function AboutPage() {
  return (
    <PageShell>
      <ServiceHero
        hero={{ h1: A.h1, lead: A.lead, ticks: [], image: A.image, alt: A.imageAlt }}
        crumbs={[{ label: "Home", href: HREF.home }, { label: "About" }]}
        path={HREF.about}
      />
      <Sec wrapClassName="split">
        <div className="stack">
          <h2 className="d2">{A.mission.title}</h2>
        </div>
        <div className="stack">
          <p className="lead">{A.mission.text}</p>
          {A.intro.map((t) => (
            <p key={t} className="muted">
              {t}
            </p>
          ))}
        </div>
      </Sec>
      <Sec variant="white">
        <SecHead title={A.unique.title} />
        <div className="grid g2">
          {A.unique.items.map((i) => (
            <Panel key={i.title} {...i} />
          ))}
        </div>
      </Sec>
      <Sec wrapClassName="split">
        <div className="stack">
          <h2 className="d2">{A.guarantee.title}</h2>
        </div>
        <div className="stack">
          <p className="lead">{A.guarantee.text}</p>
          <div className="stats">
            {STATS.map((st) => (
              <div key={st.label}>
                <b>{st.value}</b>
                <span>{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Sec>
      <CtaBand />
    </PageShell>
  );
}
