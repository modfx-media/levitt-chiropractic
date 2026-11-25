import type { SiteShell } from "@/lib/designed/shell";
import { BadgeIcon, BuildingIcon, CapIcon } from "./ui";

/**
 * NEW. Rendered OUTSIDE [data-pseo-body] so it never counts toward the hub
 * uniqueness gate. Every item is a fact the site already states:
 *  - "Dr. Alan G. Levitt, DC" / "Doctor of Chiropractic"  -> siteConfig.physician
 *  - Northwestern College of Chiropractic, Dec 1986          -> lib/designed/defaults/adjustmentsDefaults.ts
 *  - In practice since 1987                                 -> about / meet-the-doctor / many service pages
 *  - This Excelsior Blvd office since 1999                  -> siteConfig.foundingDate
 * No ratings, review counts or star markup by design.
 */
export function TrustStrip({ shell }: { shell: SiteShell }) {
  const items = [
    { icon: <BadgeIcon />, title: shell.physician.name, note: shell.physician.jobTitle },
    { icon: <CapIcon />, title: "Northwestern College of Chiropractic", note: "Graduated 1986" },
    { icon: <BuildingIcon />, title: "In practice since 1987", note: `This Excelsior Blvd office since ${shell.foundingDate}` },
  ];
  return (
    <section data-pseo-chrome="" aria-label="About the clinic" className="border-b border-slate-200 bg-white">
      <ul className="mx-auto grid max-w-6xl gap-x-8 gap-y-4 px-5 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((i) => (
          <li key={i.title} className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1E3A5F]/[0.07] text-[#1E3A5F] ring-1 ring-[#1E3A5F]/15">{i.icon}</span>
            <span className="min-w-0 leading-tight">
              <span className="block font-heading text-[0.9375rem] font-bold text-[#0F172A]">{i.title}</span>
              <span className="mt-0.5 block text-[0.8125rem] text-slate-600">{i.note}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
