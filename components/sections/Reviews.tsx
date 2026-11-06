import { REVIEWS_HEADING, REVIEW_LINK_LABEL, REVIEW_SAMPLE_FLAG, REVIEW_SCORE_FLAG, SAMPLE_REVIEWS } from "@/content/reviews";
import { GOOGLE_REVIEWS_URL, RATING } from "@/content/site";
import { Stars } from "../ui/Stars";
import { ToConfirm } from "../ui/ToConfirm";
import { ScoreCountUp } from "./ScoreCountUp";

/**
 * Reviews block. Sample reviews only — wire to the live Google reviews widget
 * before launch. Cards scroll horizontally on mobile.
 */
export function Reviews({ context = "jobs across the GTA" }: { context?: string }) {
  return (
    <div className="reviews">
      <div className="stack">
        <h2 className="d2">{REVIEWS_HEADING}</h2>
        <div>
          <ScoreCountUp value={RATING.score} /> <ToConfirm label={REVIEW_SCORE_FLAG} />
        </div>
        <Stars />
        <p className="muted">
          Based on <b>{RATING.count}</b> Google reviews for {context}.
        </p>
        <a className="tlink self-start" href={GOOGLE_REVIEWS_URL}>
          {REVIEW_LINK_LABEL}
        </a>
      </div>
      <div className="rv-list" role="region" tabIndex={0} aria-label="Customer reviews">
        {SAMPLE_REVIEWS.map((r) => (
          <figure key={r.service} className="rv">
            <Stars />
            <blockquote>
              <q>{r.text}</q>
            </blockquote>
            <figcaption className="who">
              <div>
                <b>Customer name</b>
                {r.service}
              </div>
            </figcaption>
            <span className="tbc self-start ml-0!" title="Needs client approval before launch">
              {REVIEW_SAMPLE_FLAG}
            </span>
          </figure>
        ))}
      </div>
    </div>
  );
}
