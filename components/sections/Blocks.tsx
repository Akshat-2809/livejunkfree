/**
 * Small layout blocks: section wrapper, section head, steps, pricing table, FAQ.
 */
import type { ReactNode } from "react";
import { FAQ_DEFAULT_TITLE, type FaqList } from "@/content/faqs";
import type { PriceTable } from "@/content/pricing";
import { SITE } from "@/content/site";
import type { Step } from "@/content/types";
import { faqPage } from "@/lib/schema";
import { JsonLd } from "../ui/JsonLd";
import { Rich } from "../ui/Rich";

type SecProps = {
  children: ReactNode;
  /** Design variants: "white", "tight", "slate" (dark rounded), combinable. */
  variant?: string;
  id?: string;
  className?: string;
  wrapClassName?: string;
};

/** `<section class="sec"><div class="wrap">…` */
export function Sec({ children, variant, id, className, wrapClassName }: SecProps) {
  const cls = ["sec", variant, variant?.includes("slate") ? "on-dark" : null, className].filter(Boolean).join(" ");
  return (
    <section className={cls} id={id}>
      <div className={wrapClassName ? `wrap ${wrapClassName}` : "wrap"}>{children}</div>
    </section>
  );
}

/** Section heading row: H2 left, intro text or action right. */
export function SecHead({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <div className="sec-head">
      <h2 className="d2">{title}</h2>
      {intro ? <p className="muted">{intro}</p> : null}
      {children}
    </div>
  );
}

/** Numbered process cards. Numbers pop in on reveal. */
export function Steps({ list }: { list: Step[] }) {
  return (
    <div className="steps" style={{ "--n": list.length } as React.CSSProperties}>
      {list.map((s, i) => (
        <div key={s.title} className="step">
          <div className="n" aria-hidden="true">
            {i + 1}
          </div>
          <h3 className="h4">{s.title}</h3>
          <p>
            <Rich text={s.text} />
          </p>
        </div>
      ))}
    </div>
  );
}

/** Three-column price table. The middle column hides on mobile (as in the design). */
export function PricingTable({ table, className }: { table: PriceTable; className?: string }) {
  return (
    <table className={className ? `tbl ${className}` : "tbl"}>
      <thead>
        <tr>
          {table.head.map((h) => (
            <th key={h} scope="col">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((r) => (
          <tr key={r[0]}>
            {r.map((c, i) => (
              <td key={i}>
                <Rich text={c} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** FAQ built on <details>. First item open. Emits FAQPage JSON-LD. */
export function Faq({ list }: { list: FaqList }) {
  return (
    <div className="split">
      <div className="stack">
        <h2 className="d2">{list.title ?? FAQ_DEFAULT_TITLE}</h2>
        {list.intro ? <p className="muted">{list.intro}</p> : null}
        <p className="muted">
          Still unsure? Call{" "}
          <a className="tlink" href={SITE.tel}>
            {SITE.phone}
          </a>
        </p>
      </div>
      <div className="faq">
        {list.items.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}</summary>
            <p>
              <Rich text={f.a} />
            </p>
          </details>
        ))}
      </div>
      <JsonLd data={faqPage(list.items)} />
    </div>
  );
}
