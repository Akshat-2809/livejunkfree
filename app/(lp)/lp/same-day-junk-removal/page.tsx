import { Icon } from "@/components/icons";
import { LpShell } from "@/components/layout/LpShell";
import { Sec, SecHead, Steps } from "@/components/sections/Blocks";
import { LoadMeter } from "@/components/sections/LoadMeter";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Reviews } from "@/components/sections/Reviews";
import { TrustStrip } from "@/components/sections/Strips";
import { WordReveal } from "@/components/sections/WordReveal";
import { Photo } from "@/components/ui/Photo";
import { Rating } from "@/components/ui/Rating";
import { Rich } from "@/components/ui/Rich";
import { Ticks } from "@/components/ui/Ticks";
import { LP_SAME_DAY as P } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { SITE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

// Google Ads landing page: never indexed.
export const metadata = pageMeta({ ...P.meta, path: HREF.lpSameDay, noindex: true });

export default function LpSameDayPage() {
  return (
    <LpShell mobile={P.mobile}>
      <section className="lp-hero">
        <div className="wrap">
          <div className="stack-lg">
            <h1 className="d1">
              <WordReveal text={P.h1} />
            </h1>
            <p className="lead">
              <Rich text={P.lead} />
            </p>
            <Ticks items={P.ticks} />
            <div className="btn-row">
              <a className="btn btn-primary" href={SITE.tel}>
                <Icon name="phone" /> Call {SITE.phone}
              </a>
            </div>
            <Rating />
            <Photo image={P.image} alt={P.alt} sizes="(max-width: 960px) 100vw, 640px" />
          </div>
          <div className="formbox" id="lp-form">
            <QuoteForm {...P.form} />
          </div>
        </div>
      </section>
      <TrustStrip />
      <Sec>
        <SecHead title={P.pricingTitle} />
        <LoadMeter compact />
      </Sec>
      <Sec variant="white">
        <SecHead title={P.stepsTitle} />
        <Steps list={P.steps} />
      </Sec>
      <Sec>
        <Reviews />
      </Sec>
      <section className="cta-band on-dark">
        <div className="wrap one text-left">
          <div className="stack-lg">
            <h2 className="d2">{P.band.title}</h2>
            <a className="callbig" href={SITE.tel}>
              {SITE.phone}
            </a>
            <div className="btn-row">
              <a className="btn btn-primary" href="#lp-form">
                {P.band.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </LpShell>
  );
}
