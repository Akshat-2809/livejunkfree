import { RATING } from "@/content/site";
import { Stars } from "./Stars";
import { ToConfirm } from "./ToConfirm";

/** "★★★★★ 4.9 from XXX Google reviews [to confirm]" */
export function Rating() {
  return (
    <div className="rating">
      <Stars />
      <span>
        <b>{RATING.score}</b> from {RATING.count} Google reviews {RATING.toConfirm ? <ToConfirm /> : null}
      </span>
    </div>
  );
}
