import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { HREF } from "@/content/routes";

export default function NotFound() {
  return (
    <PageShell>
      <section className="hero">
        <div className="wrap one">
          <div className="stack-lg">
            <h1 className="d1">Page not found</h1>
            <p className="lead">That page doesn&apos;t exist, or it moved. Try the services list or get in touch.</p>
            <div className="btn-row">
              <Link className="btn btn-primary" href={HREF.services}>
                See all services
              </Link>
              <Link className="btn btn-ghost" href={HREF.contact}>
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
