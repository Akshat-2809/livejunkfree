import { LpShell } from "@/components/layout/LpShell";
import { Faq, Sec, SecHead, Steps } from "@/components/sections/Blocks";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Reviews } from "@/components/sections/Reviews";
import { WordReveal } from "@/components/sections/WordReveal";
import { Photo } from "@/components/ui/Photo";
import { Ticks } from "@/components/ui/Ticks";
import { LP_ESTATE as P } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { SITE } from "@/content/site";
import { pageMeta } from "@/lib/meta";

// Google Ads landing page: never indexed. Calm (sensitive) variant.
export const metadata = pageMeta({ ...P.meta, path: HREF.lpEstate, noindex: true });

export default function LpEstatePage() {
  return (
    <LpShell calm mobile={P.mobile}>
      <section className="lp-hero">
        <div className="wrap">
          <div className="stack-lg">
            <h1 className="d1">
              <WordReveal text={P.h1} />
            </h1>
            <p className="lead">{P.lead}</p>
            <Ticks items={P.ticks} />
            <Photo image={P.image} alt={P.alt} sizes="(max-width: 960px) 100vw, 640px" />
          </div>
          <div className="formbox" id="lp-form">
            <QuoteForm {...P.form} />
            <div className="divider my-5!" />
            <p className="small muted">{P.talkFirst}</p>
            <a className="callbig text-[1.6rem]!" href={SITE.tel}>
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
      <Sec>
        <SecHead title={P.stepsTitle} />
        <Steps list={P.steps} />
      </Sec>
      <Sec variant="white">
        <Reviews context={P.reviewsContext} />
      </Sec>
      <Sec>
        <Faq list={P.faq} />
      </Sec>
    </LpShell>
  );
}
