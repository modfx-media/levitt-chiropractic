import type { ReactNode } from "react";

type Tone = "white" | "slate" | "warm";

const toneBg: Record<Tone, string> = {
  white: "bg-white",
  slate: "bg-slate-50",
  warm: "bg-[#FFF7ED]",
};

/** Shared section shell for PSEO blocks; uses the site's existing tokens.
 *  Props are a superset of the old ones (id, eyebrow, title, tone, children), so every caller keeps working. */
export function Section({
  id,
  eyebrow,
  title,
  tone = "white",
  width = "wide",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  tone?: Tone;
  /** "wide" = 72rem grid width; "narrow" = 48rem reading width. */
  width?: "wide" | "narrow";
  children: ReactNode;
}) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${toneBg[tone]} border-t border-slate-200/70 py-14 first:border-t-0 sm:py-20`}
    >
      <div className={`mx-auto px-5 sm:px-6 lg:px-8 ${width === "narrow" ? "max-w-3xl" : "max-w-6xl"}`}>
        {eyebrow ? (
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C2410C]">
            <span aria-hidden className="h-0.5 w-6 rounded-full bg-[#F97316]" />
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2
            id={headingId}
            className="mt-3 max-w-3xl text-balance font-heading text-[1.625rem] font-extrabold leading-[1.15] tracking-tight text-[#0F172A] sm:text-[2rem] lg:text-[2.25rem]"
          >
            {title}
          </h2>
        ) : null}
        <div className={title || eyebrow ? "mt-7 sm:mt-9" : ""}>{children}</div>
      </div>
    </section>
  );
}
