/** Shared PSEO-kit primitives: button classes and inline icons (server-only, no client JS). */

export const btnPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C2410C] px-6 text-[0.9375rem] font-bold text-white shadow-lg shadow-orange-800/25 transition-colors hover:bg-[#9A3412] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]";
export const btnGhostDark =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white";
export const btnGhostLight =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-[0.9375rem] font-semibold text-[#0F172A] transition-colors hover:border-[#F97316] hover:text-[#C2410C] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]";

type IconProps = { className?: string };
const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const PhoneIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
);
export const CalendarIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
);
export const PinIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const ClockIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const ArrowIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const CheckIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...base} className={className}><path d="M20 6 9 17l-5-5" /></svg>
);
export const CapIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>
);
export const BadgeIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><circle cx="12" cy="9" r="6" /><path d="m8.5 13.9-1.5 7.1 5-3 5 3-1.5-7.1" /></svg>
);
export const BuildingIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} className={className}><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M2 21h20M8 7h4M8 11h4M8 15h4" /></svg>
);
