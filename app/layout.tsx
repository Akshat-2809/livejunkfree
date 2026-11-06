import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { MotionLayer } from "@/components/motion/MotionLayer";
import { ReviewBar } from "@/components/review/ReviewBar";
import { REVIEW_MODE, SITE } from "@/content/site";
import "./globals.css";

// Variable font with the optical-size axis (the design loads opsz 12..96).
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Junk Removal Toronto & GTA | Live Junk Free", template: "%s" },
  description: SITE.tagline,
  applicationName: SITE.name,
  openGraph: { siteName: SITE.name, locale: "en_CA", type: "website" },
  // The whole client preview is noindex. Turn off review mode to allow indexing.
  robots: REVIEW_MODE ? { index: false, follow: false, googleBot: { index: false, follow: false } } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1621",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable}`}>
      <body>
        {REVIEW_MODE ? <ReviewBar /> : null}
        {children}
        <MotionLayer />
      </body>
    </html>
  );
}
