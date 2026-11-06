import Link from "next/link";
import { HOME } from "@/content/pages/home";
import { AREAS, TOP_AREAS } from "@/content/locations";
import { HREF, city } from "@/content/routes";
import { Icon } from "../icons";

/** Homepage: top 10 areas + "+16 more" chip + "Not on the list?" card. */
export function AreasTop() {
  const c = HOME.areas.card;
  return (
    <div className="areas-top">
      <ul className="areas">
        {TOP_AREAS.map((a) => (
          <li key={a}>
            <Link href={city(a)}>{a}</Link>
          </li>
        ))}
        <li>
          <Link className="more" href={HREF.locations}>
            +{AREAS.length - TOP_AREAS.length} more areas
          </Link>
        </li>
      </ul>
      <Link className="areas-card" href={HREF.locations}>
        <span className="icon">
          <Icon name="truck" />
        </span>
        <b className="h4">{c.title}</b>
        <span className="small muted">{c.text}</span>
        <span className="tlink self-start">{c.link}</span>
      </Link>
    </div>
  );
}

/** Generic service-area map placeholder. */
export function MapPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={className ? `mapph ${className}` : "mapph"} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
