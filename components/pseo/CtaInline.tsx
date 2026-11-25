import Link from "next/link";
import type { SiteShell } from "@/lib/designed/shell";
import { btnGhostLight, btnPrimary, CalendarIcon, PhoneIcon } from "./ui";

/**
 * NEW. Slim mid-page conversion band placed after key sections.
 * It sits inside [data-pseo-body] for layout reasons, so it carries
 * `data-pseo-chrome` and only ~8 words of neutral UI text; the uniqueness
 * script should skip [data-pseo-chrome] the same way it skips Sources.
 */
export function CtaInline({ shell }: { shell: SiteShell }) {
  return (
    <aside data-pseo-chrome="" aria-label="Book or call" className="border-t border-slate-200/70 bg-[#FFF7ED]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-heading text-base font-bold text-[#0F172A] sm:text-lg">
          {shell.address.street}
          <span className="block text-sm font-medium text-slate-600 sm:inline sm:pl-2">{shell.address.city}, {shell.address.state}</span>
        </p>
        <div className="grid grid-cols-2 gap-3 sm:flex">
          <Link href={shell.appointmentUrl} className={btnPrimary}>
            <CalendarIcon className="h-[1.125rem] w-[1.125rem]" />
            Book a visit
          </Link>
          <a href={shell.phoneHref} className={btnGhostLight} aria-label={`Call the clinic at ${shell.phone}`}>
            <PhoneIcon className="h-[1.125rem] w-[1.125rem]" />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">Call the clinic</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
