import type { PseoFact } from "@/lib/pseo/types";
import { RichText } from "./RichText";

/** Side card next to the intro. Label sits above its value so the narrow column never cramps. */
export function AtAGlance({ data, sourceIds }: { data?: { title: string; items: PseoFact[] }; sourceIds: string[] }) {
  if (!data?.items.length) return null;
  return (
    <aside className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]">
      <h3 className="bg-[#1E3A5F] px-5 py-3.5 font-heading text-[0.8125rem] font-bold uppercase tracking-[0.16em] text-white sm:px-6">{data.title}</h3>
      <dl className="divide-y divide-slate-100 px-5 sm:px-6">
        {data.items.map((i) => (
          <div key={i.label} className="py-3.5">
            <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C2410C]">{i.label}</dt>
            <dd className="mt-1 text-[0.9375rem] leading-relaxed text-slate-800">
              <RichText text={i.value + (i.sourceId ? `[^${i.sourceId}]` : "")} sourceIds={sourceIds} />
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
