import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageShell } from "@/components/layout/PageShell";
import { AreasTop } from "@/components/sections/Areas";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Faq, Sec, SecHead, Steps } from "@/components/sections/Blocks";
import { CtaBand } from "@/components/sections/CtaBand";
import { HomeHero } from "@/components/sections/HomeHero";
import { LoadMeter } from "@/components/sections/LoadMeter";
import { Reviews } from "@/components/sections/Reviews";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ItemMarquee, TrustStrip } from "@/components/sections/Strips";
import { JsonLd } from "@/components/ui/JsonLd";
import { FAQS } from "@/content/faqs";
import { HOME } from "@/content/pages/home";
import { REVIEW_SETS } from "@/content/reviews";
import { STATS } from "@/content/site";
import { HREF } from "@/content/routes";
import { STEPS_STD } from "@/content/shared";
import { breadcrumbs, localBusiness } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ ...HOME.meta, path: "/" });

export default function HomePage() {
  const d = HOME.destinations;
  return (
    <PageShell>
      <JsonLd data={localBusiness()} />
      <JsonLd data={breadcrumbs([{ label: "Home", href: "/" }], "/")} />
      <HomeHero />
      <ItemMarquee items={HOME.marquee} />
      <TrustStrip />

      <Sec>
        <SecHead title={HOME.bento.title} intro={HOME.bento.intro} />
        <ServicesBento />
      </Sec>

      <Sec>
        <SecHead title={HOME.beforeAfter.title} intro={HOME.beforeAfter.intro} />
        <BeforeAfter before={HOME.beforeAfter.before} after={HOME.beforeAfter.after} />
      </Sec>

      <Sec>
        <SecHead title={HOME.pricing.title} intro={HOME.pricing.intro} />
        <LoadMeter compact />
      </Sec>

      <Sec>
        <SecHead title={HOME.steps.title}>
          <Link className="btn btn-ghost" href={HREF.how}>
            {HOME.steps.cta}
          </Link>
        </SecHead>
        <Steps list={STEPS_STD} />
      </Sec>

      <Sec>
        <Reviews ids={REVIEW_SETS.home} />
      </Sec>

      <Sec variant="tight">
        <h2 className="d3 mb-6">{HOME.stats.title}</h2>
        <div className="stats">
          {STATS.map((st) => (
            <div key={st.label}>
              <b>{st.value}</b>
              <span>{st.label}</span>
            </div>
          ))}
        </div>
      </Sec>

      <Sec>
        <SecHead title={d.title} intro={d.intro} />
        <div className="dest">
          <div>
            <b className="text-[clamp(1.8rem,2.6vw,2.4rem)]! leading-[1.05]!">{d.lead.title}</b>
            <p className="mt-auto">{d.lead.text}</p>
          </div>
          {d.items.map((i) => (
            <div key={i.label}>
              <div className={i.leaf ? "icon leaf" : "icon"}>
                <Icon name={i.icon} />
              </div>
              <span className="lab">{i.label}</span>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec>
        <SecHead title={HOME.areas.title} intro={HOME.areas.intro} />
        <AreasTop />
      </Sec>

      <Sec>
        <Faq list={FAQS.home} />
      </Sec>
      <CtaBand />
    </PageShell>
  );
}
