import Link from "next/link";
import { HREF } from "@/content/routes";
import { SITE } from "@/content/site";
import { Icon } from "../icons";
import { Logo } from "./Logo";

/** Landing-page header: logo (not a link) + call button. No main nav. */
export function LpHeader() {
  return (
    <header className="lp-hdr">
      <div className="wrap">
        <Logo href={null} />
        <a className="btn btn-dark btn-sm" href={SITE.tel}>
          <Icon name="phone" /> {SITE.phone}
        </a>
      </div>
    </header>
  );
}

export function LpFooter() {
  return (
    <footer className="ftr py-7!">
      <div className="wrap">
        <div className="bottom border-0! m-0! p-0!">
          <span>{SITE.copyright}</span>
          <span>
            <Link href={HREF.privacy}>Privacy policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
