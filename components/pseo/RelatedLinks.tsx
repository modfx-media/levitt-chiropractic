import Link from "next/link";
import type { PseoHub } from "@/lib/pseo/types";
import { Section } from "./Section";
import { ArrowIcon } from "./ui";

export function RelatedLinks({ data, tone = "white" }: { data?: PseoHub["related"]; tone?: "white" | "slate" | "warm" }) {
  if (!data?.links.length) return null;
  return (
    <Section eyebrow="Keep reading" eyebrowChrome title={data.title} tone={tone}>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#F97316] hover:shadow-[0_12px_28px_-16px_rgba(15,23,42,0.3)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
            >
              <span className="min-w-0">
                <span className="block font-heading font-bold text-[#0F172A]">{l.label}</span>
                {l.note ? <span className="mt-1 block text-sm text-slate-600">{l.note}</span> : null}
              </span>
              <span aria-hidden className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-[#1E3A5F] transition-colors group-hover:bg-[#F97316] group-hover:text-white">
                <ArrowIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
