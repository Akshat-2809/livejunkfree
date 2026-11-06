import { PENDING_BANNER } from "@/content/shared";

/** Slim banner on template-preview pages whose real content hasn't been written yet. */
export function PendingBanner() {
  return (
    <p className="pending" role="note">
      {PENDING_BANNER}
    </p>
  );
}
