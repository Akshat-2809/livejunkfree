/**
 * Renders the content markup used in content/*.ts:
 *   {tbc}            → <ToConfirm />
 *   {tbc:label}      → <ToConfirm label="label" />
 *   **bold**         → <b>
 *   [text](/path/)   → text link (.tlink)
 */
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { ToConfirm } from "./ToConfirm";

const TOKEN = /\{tbc(?::([^}]*))?\}|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export function rich(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    if (i > last) out.push(<Fragment key={k++}>{text.slice(last, i)}</Fragment>);
    if (m[0].startsWith("{tbc")) out.push(<ToConfirm key={k++} label={m[1] || undefined} />);
    else if (m[2] !== undefined) out.push(<b key={k++}>{m[2]}</b>);
    else {
      const href = m[4];
      out.push(
        href.startsWith("/") ? (
          <Link key={k++} className="tlink" href={href}>{m[3]}</Link>
        ) : (
          <a key={k++} className="tlink" href={href}>{m[3]}</a>
        ),
      );
    }
    last = i + m[0].length;
  }
  if (last < text.length) out.push(<Fragment key={k++}>{text.slice(last)}</Fragment>);
  return out;
}

export function Rich({ text }: { text: string }) {
  return <>{rich(text)}</>;
}

/** Strip markup for plain-text uses (meta descriptions, JSON-LD). */
export const plain = (text: string) =>
  text
    .replace(/\s*\{tbc(?::[^}]*)?\}/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
