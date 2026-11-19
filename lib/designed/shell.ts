import { primaryNav, type NavEntry } from "@/components/layout/navData";
import { siteConfig } from "@/lib/siteConfig";

export type ShellLink = { label: string; href: string };
export type ShellHours = { day: string; hours: string };
export type ShellHourLine = { day: string; time: string };

export type SiteShell = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  phoneE164: string;
  email: string;
  placeLabel: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  geo: { latitude: number; longitude: number };
  mapsUrl: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  healthgradesUrl: string;
  foundingDate: string;
  physician: {
    name: string;
    shortName: string;
    jobTitle: string;
    image: string;
  };
  hours: ShellHours[];
  hoursInline: ShellHourLine[];
  appointmentUrl: string;
  existingPatientAppointmentUrl: string;
  nav: NavEntry[];
  logos: {
    markSrc: string;
    markAlt: string;
    wordmarkSrc: string;
    wordmarkAlt: string;
  };
  headerCtas: {
    newPatientLabel: string;
    existingPatientLabel: string;
  };
  sticky: {
    callLabel: string;
    newPatientLabel: string;
    newPatientRest: string;
    existingPatientLabel: string;
    existingPatientRest: string;
  };
  footer: {
    blurb: string;
    exploreTitle: string;
    legalTitle: string;
    explore: ShellLink[];
    legal: ShellLink[];
    newPatientLabel: string;
    existingPatientLabel: string;
    poweredByLabel: string;
    poweredByHref: string;
  };
  booking: {
    callNowLabel: string;
    newPatientLabel: string;
    existingPatientLabel: string;
  };
};

function cloneNav(nav: NavEntry[]): NavEntry[] {
  return JSON.parse(JSON.stringify(nav)) as NavEntry[];
}

export const defaultShell: SiteShell = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
  phoneE164: siteConfig.phoneE164,
  email: siteConfig.email,
  placeLabel: "Saint Louis Park, MN",
  address: { ...siteConfig.address },
  geo: { ...siteConfig.geo },
  mapsUrl: siteConfig.mapsUrl,
  mapsEmbedUrl: siteConfig.mapsEmbedUrl,
  mapsDirectionsUrl: siteConfig.mapsDirectionsUrl,
  healthgradesUrl: siteConfig.healthgradesUrl,
  foundingDate: siteConfig.foundingDate,
  physician: { ...siteConfig.physician },
  hours: siteConfig.hours.map((row) => ({ day: row.day, hours: row.hours })),
  hoursInline: [
    { day: "Mon / Thu", time: "8:30–11:30am · 2:30–5:30pm" },
    { day: "Tue / Fri", time: "8:30am – 11:30am" },
    { day: "Wed", time: "10:00am – 12:00pm" },
    { day: "Sat", time: "By Appointment" },
    { day: "Sun", time: "Closed" },
  ],
  appointmentUrl: siteConfig.appointmentUrl,
  existingPatientAppointmentUrl: siteConfig.existingPatientAppointmentUrl,
  nav: cloneNav(primaryNav),
  logos: {
    markSrc: "/images/fevicon.png",
    markAlt: "Levitt Chiropractic Center logo",
    wordmarkSrc: "/images/logo.png",
    wordmarkAlt: siteConfig.name,
  },
  headerCtas: {
    newPatientLabel: "NEW Patient Appointment",
    existingPatientLabel: "Existing Patient Appointment",
  },
  sticky: {
    callLabel: "Call Today",
    newPatientLabel: "NEW Patient",
    newPatientRest: "Appointment",
    existingPatientLabel: "Existing Patient",
    existingPatientRest: "Appointment",
  },
  footer: {
    blurb: "Chiropractic care in Saint Louis Park since 1999.",
    exploreTitle: "Explore",
    legalTitle: "Legal",
    explore: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Adjustments", href: "/adjustments-and-manipulation" },
      { label: "Back Pain", href: "/back-pain-treatments" },
      { label: "New Patient Center", href: "/new-patient-center" },
      { label: "Saint Louis Park office", href: "/areas-we-serve/saint-louis-park" },
      { label: "Areas We Serve", href: "/areas-we-serve" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Site Map", href: "/site-map" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "HIPAA Policy", href: "/hipaa-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Good Faith Estimate", href: "/good-faith-estimate" },
    ],
    newPatientLabel: "NEW Patient Appointment",
    existingPatientLabel: "Existing Patient Appointment",
    poweredByLabel: "Powered by ModFXMedia",
    poweredByHref: "https://modfxmedia.com/",
  },
  booking: {
    callNowLabel: "Call Now",
    newPatientLabel: "NEW Patient Appointment →",
    existingPatientLabel: "Existing Patient Appointment →",
  },
};

function record(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

export function shellFromGlobals(input: {
  header?: unknown;
  footer?: unknown;
  settings?: unknown;
}): SiteShell {
  const header = record(input.header) ?? {};
  const footer = record(input.footer) ?? {};
  const settings = record(input.settings) ?? {};
  const address = record(settings.address) ?? {};
  const physician = record(settings.physician) ?? {};
  const geo = record(settings.geo) ?? {};

  return {
    ...defaultShell,
    name: pick(settings.practiceName, defaultShell.name),
    shortName: pick(settings.shortName, defaultShell.shortName),
    tagline: pick(header.tagline, pick(settings.tagline, defaultShell.tagline)),
    description: pick(settings.defaultMetaDescription, pick(settings.description, defaultShell.description)),
    phone: pick(settings.phone, pick(header.phone, defaultShell.phone)),
    phoneHref: pick(settings.phoneHref, pick(header.phoneHref, defaultShell.phoneHref)),
    phoneE164: pick(settings.phoneE164, defaultShell.phoneE164),
    email: pick(settings.email, defaultShell.email),
    placeLabel: pick(header.placeLabel, defaultShell.placeLabel),
    address: {
      street: pick(address.street, defaultShell.address.street),
      city: pick(address.city, defaultShell.address.city),
      state: pick(address.state, defaultShell.address.state),
      zip: pick(address.zip, defaultShell.address.zip),
      full: pick(address.full, pick(header.addressLine, defaultShell.address.full)),
    },
    geo: {
      latitude: typeof geo.latitude === "number" ? geo.latitude : defaultShell.geo.latitude,
      longitude: typeof geo.longitude === "number" ? geo.longitude : defaultShell.geo.longitude,
    },
    mapsUrl: pick(settings.mapsUrl, defaultShell.mapsUrl),
    mapsEmbedUrl: pick(settings.mapsEmbedUrl, defaultShell.mapsEmbedUrl),
    mapsDirectionsUrl: pick(settings.mapsDirectionsUrl, defaultShell.mapsDirectionsUrl),
    healthgradesUrl: pick(settings.healthgradesUrl, defaultShell.healthgradesUrl),
    foundingDate: pick(settings.foundingDate, defaultShell.foundingDate),
    physician: {
      name: pick(physician.name, defaultShell.physician.name),
      shortName: pick(physician.shortName, defaultShell.physician.shortName),
      jobTitle: pick(physician.jobTitle, defaultShell.physician.jobTitle),
      image: pick(physician.image, defaultShell.physician.image),
    },
    hours: mergeRows(defaultShell.hours, header.hours ?? settings.hours),
    hoursInline: mergeRows(defaultShell.hoursInline, header.hoursInline),
    appointmentUrl: pick(settings.appointmentUrl, defaultShell.appointmentUrl),
    existingPatientAppointmentUrl: pick(
      settings.existingPatientAppointmentUrl,
      defaultShell.existingPatientAppointmentUrl,
    ),
    nav: Array.isArray(header.nav) && header.nav.length > 0 ? (header.nav as NavEntry[]) : defaultShell.nav,
    logos: {
      markSrc: pick(header.logoMarkSrc, defaultShell.logos.markSrc),
      markAlt: pick(header.logoMarkAlt, defaultShell.logos.markAlt),
      wordmarkSrc: pick(header.logoWordmarkSrc, defaultShell.logos.wordmarkSrc),
      wordmarkAlt: pick(header.logoWordmarkAlt, defaultShell.logos.wordmarkAlt),
    },
    headerCtas: {
      newPatientLabel: pick(header.newPatientLabel, defaultShell.headerCtas.newPatientLabel),
      existingPatientLabel: pick(header.existingPatientLabel, defaultShell.headerCtas.existingPatientLabel),
    },
    sticky: {
      callLabel: pick(header.stickyCallLabel, defaultShell.sticky.callLabel),
      newPatientLabel: pick(header.stickyNewPatientLabel, defaultShell.sticky.newPatientLabel),
      newPatientRest: pick(header.stickyNewPatientRest, defaultShell.sticky.newPatientRest),
      existingPatientLabel: pick(header.stickyExistingPatientLabel, defaultShell.sticky.existingPatientLabel),
      existingPatientRest: pick(header.stickyExistingPatientRest, defaultShell.sticky.existingPatientRest),
    },
    footer: {
      blurb: pick(footer.blurb, defaultShell.footer.blurb),
      exploreTitle: pick(footer.exploreTitle, defaultShell.footer.exploreTitle),
      legalTitle: pick(footer.legalTitle, defaultShell.footer.legalTitle),
      explore: mergeRows(defaultShell.footer.explore, footer.explore),
      legal: mergeRows(defaultShell.footer.legal, footer.legal),
      newPatientLabel: pick(footer.newPatientLabel, defaultShell.footer.newPatientLabel),
      existingPatientLabel: pick(footer.existingPatientLabel, defaultShell.footer.existingPatientLabel),
      poweredByLabel: pick(footer.poweredByLabel, defaultShell.footer.poweredByLabel),
      poweredByHref: pick(footer.poweredByHref, defaultShell.footer.poweredByHref),
    },
    booking: {
      callNowLabel: pick(settings.callNowLabel, defaultShell.booking.callNowLabel),
      newPatientLabel: pick(settings.newPatientButtonLabel, defaultShell.booking.newPatientLabel),
      existingPatientLabel: pick(settings.existingPatientButtonLabel, defaultShell.booking.existingPatientLabel),
    },
  };
}

function pick(value: unknown, fallback: string): string {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function mergeRows<T>(defaults: T[], value: unknown): T[] {
  if (!Array.isArray(value) || value.length === 0) return defaults;
  return defaults.map((row, index) => {
    const next = value[index];
    if (!next || typeof next !== "object") return row;
    const merged = { ...(row as object) } as Record<string, unknown>;
    for (const [key, cell] of Object.entries(next as Record<string, unknown>)) {
      if (typeof cell === "string" && cell.trim()) merged[key] = cell;
      if (typeof cell === "number") merged[key] = cell;
    }
    return merged as T;
  });
}
