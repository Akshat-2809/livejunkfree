"use client";

import { usePathname } from "next/navigation";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions/quote";
import { QUOTE_FORM } from "@/content/shared";
import { SITE } from "@/content/site";
import type { QuoteFormOptions } from "@/content/types";
import { Icon } from "../icons";
import { Rich } from "../ui/Rich";

export const PREFILL_KEY = "ljf-quote-prefill";

type Props = QuoteFormOptions & {
  /** Optional "I'm booking for" segmented control (contact page). */
  bookingFor?: { label: string; options: string[] };
};

const L = QUOTE_FORM.labels;

/**
 * Quote form. Variants: compact (no service select / photo upload),
 * commercial (adds Company), custom title and CTA label. Submits to the
 * submitQuote Server Action; the success state draws a tick.
 */
export function QuoteForm({ title = QUOTE_FORM.title, service = "", commercial = false, compact = false, cta = QUOTE_FORM.cta, bookingFor }: Props) {
  const id = useId();
  const pathname = usePathname();
  const [state, action, pending] = useActionState<QuoteState, FormData>(submitQuote, { status: "idle" });
  const [photoCount, setPhotoCount] = useState(0);
  const details = useRef<HTMLTextAreaElement>(null);
  const postal = useRef<HTMLInputElement>(null);
  const okRef = useRef<HTMLDivElement>(null);

  // Prefill from the homepage quick-quote card.
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(PREFILL_KEY);
      if (!raw) return;
      sessionStorage.removeItem(PREFILL_KEY);
      const p = JSON.parse(raw) as { item?: string; postal?: string };
      if (p.item && details.current && !details.current.value) details.current.value = p.item;
      if (p.postal && postal.current && !postal.current.value) postal.current.value = p.postal;
    } catch {
      /* storage unavailable */
    }
  }, []);

  const sent = state.status === "ok";
  useEffect(() => {
    if (sent) okRef.current?.focus();
  }, [sent]);

  const err = state.status === "error" ? state : null;
  const f = (k: string) => `${id}-${k}`;
  const invalid = (k: string) => (err?.fields?.[k] ? { "aria-invalid": true as const, "aria-describedby": f(`${k}-err`) } : {});
  const fieldErr = (k: string) =>
    err?.fields?.[k] ? (
      <span className="form-err" id={f(`${k}-err`)}>
        {err.fields[k]}
      </span>
    ) : null;

  const nameField = (
    <div className="field">
      <label htmlFor={f("name")}>{L.name}</label>
      <input id={f("name")} name="name" autoComplete="name" required {...invalid("name")} />
      {fieldErr("name")}
    </div>
  );

  return (
    <form className={sent ? "form sent" : "form"} action={action} noValidate={false}>
      {title ? <h3 className="d3 hide-on-sent">{title}</h3> : null}
      <div className="hide-on-sent form gap-3.5!">
        {bookingFor ? (
          <fieldset className="field mb-1">
            <legend className="lbl-t mb-1.5">{bookingFor.label}</legend>
            <div className="seg">
              {bookingFor.options.map((o, i) => (
                <span key={o}>
                  <input type="radio" name="bookingFor" id={f(`w${i}`)} value={o} defaultChecked={i === 0} />
                  <label htmlFor={f(`w${i}`)}>{o}</label>
                </span>
              ))}
            </div>
          </fieldset>
        ) : null}
        {commercial ? (
          <div className="row">
            <div className="field">
              <label htmlFor={f("company")}>{L.company}</label>
              <input id={f("company")} name="company" autoComplete="organization" />
            </div>
            {nameField}
          </div>
        ) : (
          nameField
        )}
        <div className="row">
          <div className="field">
            <label htmlFor={f("phone")}>{L.phone}</label>
            <input id={f("phone")} name="phone" type="tel" autoComplete="tel" required {...invalid("phone")} />
            {fieldErr("phone")}
          </div>
          <div className="field">
            <label htmlFor={f("email")}>{L.email}</label>
            <input id={f("email")} name="email" type="email" autoComplete="email" {...invalid("email")} />
            {fieldErr("email")}
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor={f("postal")}>{L.postal}</label>
            <input ref={postal} id={f("postal")} name="postal" autoComplete="postal-code" placeholder={L.postalPlaceholder} />
          </div>
          <div className="field">
            <label htmlFor={f("day")}>
              {L.day} <i>{L.optional}</i>
            </label>
            <input id={f("day")} name="day" type="date" />
          </div>
        </div>
        {compact ? null : (
          <div className="field">
            <label htmlFor={f("service")}>{L.service}</label>
            <select id={f("service")} name="service" defaultValue={service || QUOTE_FORM.services[0]}>
              {QUOTE_FORM.services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        )}
        <div className="field">
          <label htmlFor={f("details")}>
            {L.details} <i>{L.optional}</i>
          </label>
          <textarea ref={details} id={f("details")} name="details" placeholder={L.detailsPlaceholder} />
        </div>
        {compact ? null : (
          <label className="upload" htmlFor={f("photos")}>
            <Icon name="camera" width={22} height={22} className="inline align-middle mr-1.5" />{" "}
            {photoCount ? (
              <span>
                <b>{photoCount} photo{photoCount > 1 ? "s" : ""}</b> added
              </span>
            ) : (
              <span>
                <b>{L.photos}</b> {L.photosHint}
              </span>
            )}
            <input
              id={f("photos")}
              name="photos"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setPhotoCount(e.currentTarget.files?.length ?? 0)}
            />
          </label>
        )}
        {/* Honeypot (hidden from people and assistive tech). */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute! -left-[9999px] h-px! w-px! min-h-0! p-0! opacity-0" />
        <input type="hidden" name="source" value={pathname} />
        {err ? (
          <p className="form-err" role="alert">
            {err.message}
          </p>
        ) : null}
        <button className="btn btn-primary" type="submit" disabled={pending} aria-busy={pending}>
          {pending ? QUOTE_FORM.sending : cta}
        </button>
        <p className="form-note">
          <Rich text={QUOTE_FORM.note} />{" "}
          <a className="tlink" href={SITE.tel}>
            {SITE.phone}
          </a>
        </p>
      </div>
      <div className="ok" ref={okRef} tabIndex={-1} role="status">
        <svg viewBox="0 0 26 26" fill="none" aria-hidden="true">
          <circle cx="13" cy="13" r="12" fill="#169B5E" />
          <path d="M7.5 13.5l3.5 3.5 7.5-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{QUOTE_FORM.success}</span>
      </div>
    </form>
  );
}
