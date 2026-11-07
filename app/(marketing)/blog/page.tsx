import { PageShell } from "@/components/layout/PageShell";
import { Sec } from "@/components/sections/Blocks";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/ServiceHero";
import { BLOG } from "@/content/pages/other";
import { HREF } from "@/content/routes";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ ...BLOG.meta, path: HREF.blog });

const fmt = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

/** Blog index: the latest posts on livejunkfree.ca (posts stay on the current site until migrated). */
export default function BlogPage() {
  return (
    <PageShell>
      <PageHero crumbs={[{ label: "Home", href: HREF.home }, { label: "Blog" }]} path={HREF.blog} h1={BLOG.h1} lead={BLOG.lead} maxCh={18} />
      <Sec variant="tight">
        <div className="posts">
          {BLOG.posts.map((p) => (
            <a key={p.href} className="post" href={p.href}>
              <time dateTime={p.date}>{fmt(p.date)}</time>
              <h2 className="h4">{p.title}</h2>
              <p className="small muted">{p.excerpt}</p>
              <span className="tlink self-start">Read more</span>
            </a>
          ))}
        </div>
        <p className="mt-8">
          <a className="tlink" href={BLOG.more.href}>
            {BLOG.more.label}
          </a>
        </p>
      </Sec>
      <CtaBand />
    </PageShell>
  );
}
