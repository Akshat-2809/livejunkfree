import { SITE } from "@/content/site";
import { Icon } from "../icons";

type Props = { className?: string; label?: string; icon?: boolean };

/** tel: link for 647-922-5865. Defaults to showing the number. */
export function PhoneLink({ className, label = SITE.phone, icon = false }: Props) {
  return (
    <a className={className} href={SITE.tel}>
      {icon ? <Icon name="phone" /> : null}
      {icon ? " " : null}
      {label}
    </a>
  );
}
