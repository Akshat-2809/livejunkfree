import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { PLACEHOLDERS } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: "Blog | Live Junk Free", description: PLACEHOLDERS.blog.lead, path: HREF.blog });

export default function BlogPage() {
  return <PlaceholderPage {...PLACEHOLDERS.blog} path={HREF.blog} />;
}
