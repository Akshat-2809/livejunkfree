import Link from "next/link";
import { FOOTER } from "@/content/nav";
import { HREF } from "@/content/routes";
import { HOURS, SITE, SOCIAL } from "@/content/site";
import { Icon } from "../icons";
import { ToConfirm } from "../ui/ToConfirm";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="fcta">
          <div>
            <h2 className="d2 text-white">{FOOTER.cta.title}</h2>
            <p className="muted mt-2.5">{FOOTER.cta.text}</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn-primary" href={HREF.contact}>
              Get a free quote
            </Link>
            <a className="btn btn-ghost on-dark-btn" href={SITE.tel}>
              <Icon name="phone" /> {SITE.phone}
            </a>
          </div>
        </div>
        <div className="cols">
          <div className="stack">
            <Link className="logo" href={HREF.home} aria-label="Live Junk Free home">
              <span className="wm block! text-white! text-2xl!">
                Live Junk<span> Free</span>
              </span>
            </Link>
            <p>{FOOTER.blurb}</p>
            <div className="hours">
              {HOURS.rows.map((r) => (
                <div key={r.days}>
                  <span>{r.days}</span>
                  <b>{r.time}</b>
                </div>
              ))}
              <p className="small mt-1.5">Hours {HOURS.toConfirm ? <ToConfirm /> : null}</p>
            </div>
          </div>
          {FOOTER.columns.map((c) => (
            <div key={c.title}>
              <h2 className="fh">{c.title}</h2>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="fh">Contact</h2>
            <ul>
              <li>
                <a href={SITE.tel}>{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
            <div className="social mt-4">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href}>
                  <span>{s.short}</span>
                  <span className="sr-only"> ({s.label})</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Decorative wordmark, drawn via CSS ::before so it isn't read or contrast-checked. */}
        <div className="bigword" aria-hidden="true" data-word="Live Junk Free" />
        <div className="bottom mt-0!">
          <span>{SITE.copyright}</span>
          <span className="flex gap-4">
            {FOOTER.legal.map((l) =>
              l.href.endsWith(".xml") ? (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ),
            )}
          </span>
        </div>
      </div>
    </footer>
  );
}
