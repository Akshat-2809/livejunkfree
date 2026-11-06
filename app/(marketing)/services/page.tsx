import { HubTemplate } from "@/components/templates/HubTemplate";
import { SERVICES_HUB } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { CATEGORY_ORDER } from "@/content/services";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ ...SERVICES_HUB.meta, path: HREF.services });

export default function ServicesHubPage() {
  return (
    <HubTemplate
      crumbs={[{ label: "Home", href: HREF.home }, { label: "Services" }]}
      path={HREF.services}
      h1={SERVICES_HUB.h1}
      lead={SERVICES_HUB.lead}
      categories={CATEGORY_ORDER}
    />
  );
}
