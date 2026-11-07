"use client";

import { useRouter } from "next/navigation";
import { HOME } from "@/content/pages/home";
import { HREF } from "@/content/routes";
import { PREFILL_KEY } from "./QuoteForm";

const Q = HOME.hero.quick;

/** Homepage hero card: two fields that carry over into the full quote form on /contact/. */
export function QuickQuote() {
  const router = useRouter();
  return (
    <div className="qcard intro" style={{ "--d": "750ms" } as React.CSSProperties}>
      <h2 className="h4">{Q.title}</h2>
      <p className="small muted mb-3.5">{Q.text}</p>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          try {
            sessionStorage.setItem(PREFILL_KEY, JSON.stringify({ item: fd.get("item"), postal: fd.get("postal") }));
          } catch {
            /* storage unavailable: just navigate */
          }
          router.push(HREF.contact);
        }}
      >
        <input name="item" aria-label={Q.itemLabel} placeholder={Q.itemHint} />
        <input name="postal" aria-label={Q.postalLabel} placeholder={Q.postalHint} autoComplete="postal-code" />
        <button className="btn btn-primary" type="submit">
          {Q.cta}
        </button>
      </form>
    </div>
  );
}
