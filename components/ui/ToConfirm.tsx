/**
 * Dashed "to confirm" badge for any claim that needs client approval before launch.
 * Hidden when the review toolbar's "Show items to confirm" is unchecked (body.hide-tbc).
 */
export function ToConfirm({ label = "to confirm" }: { label?: string }) {
  return (
    <span className="tbc" title="Needs client approval before launch">
      {label}
    </span>
  );
}
