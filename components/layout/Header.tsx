"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HEADER_LINKS, MEGA, MEGA_PROMO } from "@/content/nav";
import { HREF } from "@/content/routes";
import { SITE } from "@/content/site";
import { Icon } from "../icons";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";

/** Floating pill header with the Services mega menu. Condenses on scroll. */
export function Header() {
  const pathname = usePathname();
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Condense on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mega menu: close on outside click and on Escape.
  useEffect(() => {
    if (!mega) return;
    const onDoc = (e: MouseEvent) => {
      if (!liRef.current?.contains(e.target as Node)) setMega(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        liRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [mega]);

  const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
  const isActive = (match?: string) => !!match && pathname.startsWith(match);

  return (
    <>
      <header className={scrolled ? "hdr scrolled" : "hdr"}>
        <div className="wrap">
          <Logo />
          <ul className="nav">
            <li
              ref={liRef}
              className={mega ? "has-mega open" : "has-mega"}
              onMouseEnter={() => canHover() && setMega(true)}
              onMouseLeave={() => canHover() && setMega(false)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setMega(false);
              }}
            >
              <button
                type="button"
                aria-expanded={mega}
                aria-controls="mega-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  // With a mouse, hover already opened it: a click keeps it open instead of toggling it shut.
                  setMega((v) => (canHover() ? true : !v));
                }}
              >
                Services <Icon name="chev" />
              </button>
              <div className="mega" id="mega-menu" onClick={(e) => (e.target as HTMLElement).closest("a") && setMega(false)}>
                {MEGA.map((g) => (
                  <div key={g.key}>
                    <p className="mh">{g.label}</p>
                    <ul>
                      {g.items.map((l) => (
                        <li key={l.label}>
                          <Link href={l.href}>{l.label}</Link>
                        </li>
                      ))}
                      <li>
                        <Link className="all" href={g.all.href}>
                          {g.all.label}
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
                <div className="promo">
                  <b className="h4">{MEGA_PROMO.title}</b>
                  <p>{MEGA_PROMO.text}</p>
                  <Link className="btn btn-primary btn-sm mt-auto" href={MEGA_PROMO.cta.href}>
                    {MEGA_PROMO.cta.label}
                  </Link>
                </div>
              </div>
            </li>
            {HEADER_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={isActive(l.match) ? "on" : undefined} aria-current={isActive(l.match) ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hdr-cta">
            <a className="hdr-phone" href={SITE.tel}>
              <Icon name="phone" />
              {SITE.phone}
            </a>
            <Link className="btn btn-primary btn-sm" href={HREF.contact}>
              Get a free quote
            </Link>
          </div>
          <button
            ref={burgerRef}
            type="button"
            className="burger"
            aria-label="Open menu"
            aria-expanded={drawer}
            aria-controls="drawer"
            onClick={() => setDrawer(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
      <MobileDrawer
        open={drawer}
        onClose={() => {
          setDrawer(false);
          burgerRef.current?.focus();
        }}
      />
    </>
  );
}
