const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.levittchiropracticcenter.com"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Levitt Chiropractic Center, P.A.",
  shortName: "Levitt Chiropractic",
  tagline: "Your Spine Health Specialists",
  description:
    "Chiropractor in Saint Louis Park at 6200 Excelsior Blvd. Adjustments, cold laser, and orthotics near Methodist Hospital and Highway 100. Dr. Alan Levitt since 1999.",
  url: SITE_URL,
  locale: "en_US",
  phone: "952-920-7535",
  phoneHref: "tel:9529207535",
  phoneE164: "+19529207535",
  email: "",
  address: {
    street: "6200 Excelsior Blvd, Suite 201",
    city: "Saint Louis Park",
    state: "MN",
    zip: "55416",
    full: "6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416",
  },
  geo: { latitude: 44.9305, longitude: -93.3673 },
  mapsPlaceCid: "11756519935370171536",
  mapsUrl: "https://maps.google.com/?cid=11756519935370171536",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=6200+Excelsior+Blvd+%23201,+Saint+Louis+Park,+MN+55416&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=6200+Excelsior+Blvd+%23201,+Saint+Louis+Park,+MN+55416",
  healthgradesUrl: "https://www.healthgrades.com/providers/alan-levitt-yqlvk",
  googleRating: { value: 5, count: 29, best: 5 },
  foundingDate: "1999",
  physician: {
    name: "Dr. Alan G. Levitt, DC",
    shortName: "Dr. Alan Levitt",
    jobTitle: "Doctor of Chiropractic",
    image: "/images/dr-leviit.png",
  },
  hours: [
    { day: "Monday", hours: "8:30–11:30am & 2:30–5:30pm" },
    { day: "Tuesday", hours: "8:30am–11:30am" },
    { day: "Wednesday", hours: "10:00am–12:00pm" },
    { day: "Thursday", hours: "8:30–11:30am & 2:30–5:30pm" },
    { day: "Friday", hours: "8:30am–11:30am" },
    { day: "Saturday", hours: "By Appointment" },
    { day: "Sunday", hours: "Closed" },
  ],
  appointmentUrl: "/contact/appointment-request",
  socialLinks: {} as Record<string, string>,
  colors: {
    primary: "#F97316",
    dark: "#0F172A",
    navy: "#1E3A5F",
    gray: "#64748B",
  },
} as const;

export type SiteConfig = typeof siteConfig;
