import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { PLACEHOLDERS } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: "About Live Junk Free", description: PLACEHOLDERS.about.lead, path: HREF.about });

export default function AboutPage() {
  return <PlaceholderPage {...PLACEHOLDERS.about} path={HREF.about} />;
}
