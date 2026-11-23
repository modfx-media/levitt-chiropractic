import Link from "next/link";
import type { ReactNode } from "react";

/** Server-only inline renderer for `{text|/href}` links and `[^id]` citations. */
export function RichText({ text, sourceIds = [] }: { text: string; sourceIds?: string[] }) {
  const out: ReactNode[] = [];
  const re = /\{([^|{}]+)\|([^{}]+)\}|\[\^([a-z0-9-]+)\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      out.push(
        <Link key={k++} href={m[2]} className="font-semibold text-[#1E3A5F] underline decoration-[#F97316]/60 underline-offset-4 hover:text-[#F97316]">
          {m[1]}
        </Link>,
      );
    } else if (m[3]) {
      const n = sourceIds.indexOf(m[3]) + 1;
      if (n > 0) {
        out.push(
          <sup key={k++} className="ml-0.5 text-[0.7em]">
            <a href={`#src-${m[3]}`} className="font-semibold text-orange-600 hover:underline" aria-label={`Source ${n}`}>
              [{n}]
            </a>
          </sup>,
        );
      }
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
