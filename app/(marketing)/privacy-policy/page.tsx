import { PendingPage } from "@/components/templates/PendingPage";
import { PRIVACY } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: "Privacy Policy | Live Junk Free", description: PRIVACY.lead, path: HREF.privacy });

export default function PrivacyPage() {
  return <PendingPage {...PRIVACY} path={HREF.privacy} />;
}
