import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/content/images";
import { HOME } from "@/content/pages/home";
import { Icon } from "../icons";

const SIZES: Record<string, string> = {
  a: "(max-width: 640px) 100vw, (max-width: 960px) 100vw, 700px",
  b: "(max-width: 640px) 100vw, (max-width: 960px) 50vw, 500px",
  c: "(max-width: 640px) 100vw, (max-width: 960px) 50vw, 500px",
};

/** Bento grid of the four service families. */
export function ServicesBento() {
  return (
    <div className="bento">
      {HOME.bento.cards.map((c) =>
        c.variant === "d" ? (
          <Link key={c.title} className="bx d light" href={c.href}>
            <span className="arrow static! order-2 flex-none">
              <Icon name="arrow" />
            </span>
            <div>
              <h3 className="d3">{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </Link>
        ) : (
          <Link key={c.title} className={`bx ${c.variant}`} href={c.href}>
            <div className="bg">
              <Image src={IMG[c.image!]} alt={c.alt ?? ""} fill sizes={SIZES[c.variant]} />
            </div>
            <span className="lbl">{c.label}</span>
            <span className="arrow">
              <Icon name="arrow" />
            </span>
            <h3 className={c.variant === "a" ? "d3" : "h4"}>{c.title}</h3>
            <p>{c.text}</p>
          </Link>
        ),
      )}
    </div>
  );
}
