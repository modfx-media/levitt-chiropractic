import type { SiteShell } from "@/lib/designed/shell";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./ui";

/**
 * NEW. Address + hours + map, rendered OUTSIDE [data-pseo-body] (replaces the
 * shared LocationStrip on PSEO hubs only; LocationStrip itself is untouched).
 *
 * Map facade, zero JS: a native <details>. Closed, it shows our own SVG sketch
 * (no third-party request, no cookies). Opening it reveals a lazy Google Maps
 * iframe in a box with the SAME aspect ratio, so nothing shifts.
 */
export function VisitBlock({ shell }: { shell: SiteShell }) {
  return (
    <section id="visit" aria-labelledby="visit-title" className="border-t border-slate-200/70 bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12 lg:px-8">
        <details className="pseo-map overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]">
          <summary className="relative block aspect-[4/3] cursor-pointer focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#F97316] sm:aspect-[16/10]">
            <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden className="absolute inset-0 h-full w-full">
              <rect width="640" height="400" fill="#F1F5F9" />
              <g stroke="#E2E8F0" strokeWidth="14">
                <path d="M0 80H640M0 190H640M0 300H640M110 0V400M260 0V400M420 0V400M560 0V400" />
              </g>
              <path d="M-20 360 L660 60" stroke="#CBD5E1" strokeWidth="30" strokeLinecap="round" />
              <path d="M-20 360 L660 60" stroke="#fff" strokeWidth="22" strokeLinecap="round" />
              <text x="120" y="296" fontSize="15" fontWeight="700" fill="#1E3A5F" transform="rotate(-23.8 120 296)" fontFamily="Inter, system-ui, sans-serif" letterSpacing="2">EXCELSIOR BLVD</text>
              <path d="M330 0V400" stroke="#CBD5E1" strokeWidth="26" />
              <path d="M330 0V400" stroke="#FFF7ED" strokeWidth="18" />
              <circle cx="372" cy="176" r="46" fill="#F97316" opacity="0.14" />
              <path d="M372 196s-26-24-26-44a26 26 0 1 1 52 0c0 20-26 44-26 44Z" fill="#F97316" stroke="#9A3412" strokeWidth="3" />
              <circle cx="372" cy="151" r="9" fill="#fff" />
            </svg>
            <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg sm:inset-x-6 sm:bottom-6">
              <span className="min-w-0">
                <span className="block font-heading text-sm font-bold text-[#0F172A] sm:text-base">Show the map</span>
                <span className="block text-xs text-slate-500">Loads Google Maps</span>
              </span>
              <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F97316] text-white"><ArrowIcon /></span>
            </span>
          </summary>
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            <iframe
              src={shell.mapsEmbedUrl}
              title={`Map: ${shell.address.full}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </details>

        <div className="min-w-0">
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C2410C]">
            <span aria-hidden className="h-0.5 w-6 rounded-full bg-[#F97316]" />
            Visit
          </p>
          <h2 id="visit-title" className="mt-3 font-heading text-[1.625rem] font-extrabold leading-tight tracking-tight text-[#0F172A] sm:text-[2rem]">
            Plan your visit
          </h2>

          <ul className="mt-7 space-y-5">
            <li className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/30"><PinIcon /></span>
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Address</span>
                <span className="mt-1 block text-[0.9375rem] leading-relaxed text-[#0F172A]">
                  {shell.address.street}<br />{shell.address.city}, {shell.address.state} {shell.address.zip}
                </span>
                <a href={shell.mapsDirectionsUrl} target="_blank" rel="noopener" className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-bold text-[#C2410C] hover:underline">
                  Get directions <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/30"><PhoneIcon /></span>
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Phone</span>
                <a href={shell.phoneHref} className="mt-1 block font-heading text-lg font-bold text-[#0F172A] hover:text-[#C2410C]">{shell.phone}</a>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/30"><ClockIcon /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Hours</span>
                <span className="mt-1.5 block">
                  {shell.hoursInline.map((h) => (
                    <span key={h.day} className="flex justify-between gap-4 border-b border-slate-200 py-1.5 text-sm last:border-b-0">
                      <span className="font-semibold text-[#0F172A]">{h.day}</span>
                      <span className="text-right text-slate-600">{h.time}</span>
                    </span>
                  ))}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
