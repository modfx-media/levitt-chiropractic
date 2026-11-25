import type { PseoFact } from "@/lib/pseo/types";
import { RichText } from "./RichText";

const cols: Record<number, string> = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" };

/** Fact tiles that sit just under the hero. Same data and text as before; only layout changed. */
export function KeyFacts({ facts, sourceIds }: { facts?: PseoFact[]; sourceIds: string[] }) {
  if (!facts?.length) return null;
  const n = Math.min(facts.length, 4);
  return (
    <section aria-label="Key facts" className="bg-slate-50 pb-2 pt-8 sm:pt-10">
      <dl className={`mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 sm:gap-4 sm:px-6 lg:px-8 ${cols[n] ?? cols[4]}`}>
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.06)] sm:p-5 ${
              facts.length % 2 === 1 && i === 0 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F97316] to-[#F97316]/30" />
            <dt className="text-[11px] font-bold uppercase leading-snug tracking-[0.16em] text-slate-500">{f.label}</dt>
            <dd className="mt-1.5 text-pretty font-heading text-[1.0625rem] font-bold leading-snug text-[#0F172A] sm:text-xl">
              <RichText text={f.value + (f.sourceId ? `[^${f.sourceId}]` : "")} sourceIds={sourceIds} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
