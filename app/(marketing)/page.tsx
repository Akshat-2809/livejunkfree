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
import { Rich } from "@/components/ui/Rich";
import { FAQS } from "@/content/faqs";
import { HOME } from "@/content/pages/home";
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
        <BeforeAfter before={HOME.beforeAfter.before} after={HOME.beforeAfter.after} cap={HOME.beforeAfter.cap} />
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
        <Reviews />
      </Sec>

      <Sec>
        <SecHead title={d.title} intro={d.intro} />
        <div className="dest">
          <div>
            <b>{d.stat.value}</b>
            <span className="lab">{d.stat.label}</span>
            <p>
              <Rich text={d.stat.note} />
            </p>
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
