"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { DRAWER_LINKS, MEGA } from "@/content/nav";
import { HREF } from "@/content/routes";
import { SITE } from "@/content/site";
import { Icon } from "../icons";
import { Logo } from "./Logo";

/** Mobile menu: slides in from the right, accordion sections per service category. */
export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={open ? "drawer open" : "drawer"}
      id="drawer"
      onClick={(e) => {
        const t = e.target as HTMLElement;
        if (t === e.currentTarget || t.closest("a")) onClose();
      }}
    >
      <div className="panel" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="top">
          <Logo height={38} />
          <button ref={closeRef} type="button" className="burger" aria-label="Close menu" onClick={onClose}>
            <Icon name="x" width={26} height={26} />
          </button>
        </div>
        {MEGA.map((g) => (
          <details key={g.key}>
            <summary>
              {g.label} <Icon name="chev" />
            </summary>
            <ul>
              {g.items.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href={g.all.href}>{g.all.label}</Link>
              </li>
            </ul>
          </details>
        ))}
        {DRAWER_LINKS.map((l) => (
          <Link key={l.label} className="dl" href={l.href}>
            {l.label}
          </Link>
        ))}
        <a className="btn btn-dark" href={SITE.tel}>
          <Icon name="phone" /> Call {SITE.phone}
        </a>
        <Link className="btn btn-primary" href={HREF.contact}>
          Get a free quote
        </Link>
      </div>
    </div>
  );
}
