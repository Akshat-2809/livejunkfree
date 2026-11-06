import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileActionBar } from "./MobileActionBar";
import { PendingBanner } from "./PendingBanner";

type Props = {
  children: ReactNode;
  /** Estate / sensitive pages: ink primary buttons, dark slate CTA band. */
  calm?: boolean;
  /** Show the "content pending" banner (template previews and placeholders). */
  pending?: boolean;
  mobileCta?: string;
};

/** Standard page chrome: header, main content, footer and the mobile action bar. */
export function PageShell({ children, calm, pending, mobileCta }: Props) {
  return (
    <div className={calm ? "page-root calm" : "page-root"}>
      <Header />
      {pending ? <PendingBanner /> : null}
      <main id="main">{children}</main>
      <Footer />
      <MobileActionBar label={mobileCta} />
    </div>
  );
}
