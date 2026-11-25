import type { ReactNode } from "react";

/** Shared section shell for PSEO blocks; uses the site's existing tokens. */
export function Section({ id, eyebrow, title, tone = "white", children }: { id?: string; eyebrow?: string; title?: string; tone?: "white" | "slate"; children: ReactNode }) {
  return (
    <section id={id} className={`${tone === "slate" ? "bg-slate-50" : "bg-white"} py-10 sm:py-14 md:py-16`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">{eyebrow}</p> : null}
        {title ? (
          <>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl md:text-4xl">{title}</h2>
            <span aria-hidden className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]" />
          </>
        ) : null}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </section>
  );
}
