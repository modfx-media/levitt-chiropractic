import Link from "next/link";
import type { PseoHub } from "@/lib/pseo/types";
import { Section } from "./Section";

export function RelatedLinks({ data }: { data?: PseoHub["related"] }) {
  if (!data?.links.length) return null;
  return (
    <Section eyebrow="Keep reading" title={data.title} tone="slate">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block h-full rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-[#F97316]">
              <span className="font-heading font-bold text-[#0F172A]">{l.label}</span>
              {l.note ? <span className="mt-1 block text-sm text-slate-600">{l.note}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
