import Link from "next/link";
import { HREF } from "@/content/routes";
import { SITE } from "@/content/site";
import { Icon } from "../icons";

type Props = { label?: string; href?: string; callLabel?: string };

/** Fixed bottom bar on mobile (≤760px): "Call now" + quote CTA. Always visible. */
export function MobileActionBar({ label = "Get a quote", href = HREF.contact, callLabel = "Call now" }: Props) {
  return (
    <div className="mbar">
      <a className="btn btn-dark" href={SITE.tel}>
        <Icon name="phone" /> {callLabel}
      </a>
      {href.startsWith("#") ? (
        <a className="btn btn-primary" href={href}>
          {label}
        </a>
      ) : (
        <Link className="btn btn-primary" href={href}>
          {label}
        </Link>
      )}
    </div>
  );
}
