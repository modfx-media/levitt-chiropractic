import type { PseoSource } from "@/lib/pseo/types";

export function Sources({ sources }: { sources?: PseoSource[] }) {
  if (!sources?.length) return null;
  return (
    <section aria-labelledby="pseo-sources" className="bg-white py-10">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <h2 id="pseo-sources" className="font-heading text-lg font-bold text-[#0F172A]">Sources</h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-slate-600">
          {sources.map((s) => (
            <li key={s.id} id={`src-${s.id}`}>
              <a href={s.url} rel="noopener" target="_blank" className="underline decoration-slate-300 underline-offset-2 hover:text-[#F97316]">{s.title}</a>
              {` — ${s.publisher}. Accessed ${s.accessed}.`}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
