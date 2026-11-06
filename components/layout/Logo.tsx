"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LOGO } from "@/content/images";

/** Logo image with the text wordmark as a fallback if the image fails to load. */
export function Logo({ href = "/", height = 40 }: { href?: string | null; height?: number }) {
  const [failed, setFailed] = useState(false);
  const inner = (
    <>
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        sizes={`${Math.round((height * LOGO.width) / LOGO.height)}px`}
        loading="eager"
        style={{ height }}
        onError={() => setFailed(true)}
      />
      <span className="wm" aria-hidden={!failed}>
        Live Junk<span> Free</span>
      </span>
    </>
  );
  const cls = failed ? "logo noimg" : "logo";
  if (href === null) return <span className={cls}>{inner}</span>;
  return (
    <Link className={cls} href={href} aria-label="Live Junk Free home">
      {inner}
    </Link>
  );
}
