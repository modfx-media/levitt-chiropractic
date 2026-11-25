import type { PseoSource } from "@/lib/pseo/types";

/** Citation list. Stays always visible (not collapsed) so [n] links land on a visible target in every browser. */
export function Sources({ sources }: { sources?: PseoSource[] }) {
  if (!sources?.length) return null;
  return (
    <section aria-labelledby="pseo-sources" className="border-t border-slate-200/70 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 id="pseo-sources" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Sources</h2>
        <ol className="mt-4 grid list-decimal gap-x-10 gap-y-2 pl-5 text-sm leading-relaxed text-slate-600 marker:font-semibold marker:text-slate-400 md:grid-cols-2">
          {sources.map((s) => (
            <li key={s.id} id={`src-${s.id}`} className="pl-1 target:rounded target:bg-[#FFF7ED]">
              <a href={s.url} rel="noopener" target="_blank" className="break-words text-[#1E3A5F] underline decoration-slate-300 underline-offset-2 hover:text-[#C2410C]">{s.title}</a>
              {` — ${s.publisher}. Accessed ${s.accessed}.`}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
