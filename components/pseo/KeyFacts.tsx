import type { PseoFact } from "@/lib/pseo/types";
import { RichText } from "./RichText";

export function KeyFacts({ facts, sourceIds }: { facts?: PseoFact[]; sourceIds: string[] }) {
  if (!facts?.length) return null;
  return (
    <section aria-label="Key facts" className="border-b border-slate-200 bg-white">
      <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-slate-200 px-0 sm:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="bg-white px-5 py-5 sm:px-6">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{f.label}</dt>
            <dd className="mt-1 font-heading text-lg font-bold text-[#0F172A] sm:text-xl">
              <RichText text={f.value + (f.sourceId ? `[^${f.sourceId}]` : "")} sourceIds={sourceIds} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
