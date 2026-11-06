import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { PLACEHOLDERS } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: "Privacy Policy | Live Junk Free", description: PLACEHOLDERS.privacy.lead, path: HREF.privacy });

export default function PrivacyPage() {
  return <PlaceholderPage {...PLACEHOLDERS.privacy} path={HREF.privacy} />;
}
