import Link from "next/link";
import type { SiteShell } from "@/lib/designed/shell";
import { CalendarIcon, PhoneIcon } from "./ui";

/**
 * NEW. CSS-only sticky Call + Book bar for phones/tablets (hidden at lg, where
 * the site's sticky navbar already shows both booking buttons).
 * It is the LAST child of the post-hero wrapper and uses `position: sticky; bottom: 0`.
 * A sticky box cannot leave its parent, so it can never rise above the hero's
 * bottom edge (it never covers the hero or its Book + Call buttons), rides the bottom of the screen
 * after that, then settles in normal flow above the footer. It never covers the footer, never covers the
 * last section, and needs no scroll listener. Safe-area padding is in pseo.css.
 */
export function StickyCallBar({ shell }: { shell: SiteShell }) {
  return (
    <div
      data-pseo-chrome=""
      role="region"
      aria-label="Call or book"
      className="pseo-sticky-bar sticky bottom-0 z-30 border-t border-white/10 bg-[#0F172A] px-4 pt-2.5 shadow-[0_-10px_30px_rgba(15,23,42,0.25)] lg:hidden"
    >
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-2.5">
        <a
          href={shell.phoneHref}
          aria-label={`Call the clinic at ${shell.phone}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 text-[0.9375rem] font-semibold text-white active:bg-white/10"
        >
          <PhoneIcon className="h-[1.125rem] w-[1.125rem] text-[#F97316]" />
          Call
        </a>
        <Link
          href={shell.appointmentUrl}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F97316] text-[0.9375rem] font-bold text-white shadow-lg shadow-orange-500/30 active:bg-orange-600"
        >
          <CalendarIcon className="h-[1.125rem] w-[1.125rem]" />
          Book a visit
        </Link>
      </div>
    </div>
  );
}
