import type { ReactNode } from "react";
import { LpFooter, LpHeader } from "./LpChrome";
import { MobileActionBar } from "./MobileActionBar";

/** Google Ads landing-page chrome: no main nav, form anchor in the mobile bar. */
export function LpShell({ children, calm, mobile }: { children: ReactNode; calm?: boolean; mobile: { call: string; cta: string } }) {
  return (
    <div className={calm ? "page-root calm" : "page-root"}>
      <LpHeader />
      <main id="main">{children}</main>
      <LpFooter />
      <MobileActionBar callLabel={mobile.call} label={mobile.cta} href="#lp-form" />
    </div>
  );
}
