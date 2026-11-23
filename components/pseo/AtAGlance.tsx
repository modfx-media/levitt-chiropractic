import type { PseoFact } from "@/lib/pseo/types";
import { RichText } from "./RichText";

export function AtAGlance({ data, sourceIds }: { data?: { title: string; items: PseoFact[] }; sourceIds: string[] }) {
  if (!data?.items.length) return null;
  return (
    <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <h3 className="font-heading text-base font-bold uppercase tracking-[0.14em] text-[#1E3A5F]">{data.title}</h3>
      <dl className="mt-4 space-y-3">
        {data.items.map((i) => (
          <div key={i.label} className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-3 text-sm sm:text-base">
            <dt className="font-semibold text-slate-500">{i.label}</dt>
            <dd className="text-slate-800">
              <RichText text={i.value + (i.sourceId ? `[^${i.sourceId}]` : "")} sourceIds={sourceIds} />
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
