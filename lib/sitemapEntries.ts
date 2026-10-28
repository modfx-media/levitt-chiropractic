/** All public URL slugs (relative paths) with sitemap metadata.
 *  Single source of truth for /sitemap.xml and the user-facing /site-map page.
 */
import { servedCities } from "./areasData";

export type SitemapEntry = {
  path: string;
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

export const sitemapEntries: SitemapEntry[] = [
  // Home
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // About
  { path: "/about", priority: 0.9, changefreq: "monthly" },
  { path: "/meet-the-doctor", priority: 0.8, changefreq: "monthly" },
  { path: "/testimonials", priority: 0.7, changefreq: "monthly" },

  // Services
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/adjustments-and-manipulation", priority: 0.8, changefreq: "monthly" },
  { path: "/injuries", priority: 0.8, changefreq: "monthly" },
  { path: "/personal-injury", priority: 0.7, changefreq: "monthly" },
  { path: "/cryotherapy", priority: 0.7, changefreq: "monthly" },
  { path: "/ice-pack-cryotherapy", priority: 0.6, changefreq: "monthly" },
  { path: "/cold-laser-therapy", priority: 0.7, changefreq: "monthly" },
  { path: "/custom-foot-orthotics", priority: 0.7, changefreq: "monthly" },
  { path: "/common-chiropractic-conditions", priority: 0.7, changefreq: "monthly" },
  { path: "/back-pain-treatments", priority: 0.8, changefreq: "monthly" },
  { path: "/degenerative-disc-disease", priority: 0.7, changefreq: "monthly" },
  { path: "/therapeutic-exercise", priority: 0.6, changefreq: "monthly" },
  { path: "/functional-medicine", priority: 0.7, changefreq: "monthly" },
  { path: "/alternative-medicine", priority: 0.6, changefreq: "monthly" },

  // New patient center
  { path: "/new-patient-center", priority: 0.8, changefreq: "monthly" },
  { path: "/new-patient-center/what-to-expect", priority: 0.7, changefreq: "monthly" },

  // Resources
  { path: "/resources", priority: 0.7, changefreq: "monthly" },
  { path: "/resources/about-chiropractic", priority: 0.6, changefreq: "monthly" },
  { path: "/resources/qa", priority: 0.6, changefreq: "monthly" },
  { path: "/resources/wellness-tips", priority: 0.6, changefreq: "monthly" },

  // Blog
  { path: "/blog", priority: 0.8, changefreq: "weekly" },

  // Contact
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/contact/new-patient-appointment", priority: 0.9, changefreq: "monthly" },
  { path: "/contact/existing-patient-appointment", priority: 0.8, changefreq: "monthly" },

  // User-facing sitemap
  { path: "/site-map", priority: 0.4, changefreq: "monthly" },

  // Legal
  { path: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/hipaa-policy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms-of-use", priority: 0.3, changefreq: "yearly" },
  { path: "/good-faith-estimate", priority: 0.3, changefreq: "yearly" },
];

export type SitemapSection = {
  title: string;
  description?: string;
  links: { label: string; href: string }[];
};

/** Curated, grouped sitemap used by the user-facing /site-map page. */
export const sitemapSections: SitemapSection[] = [
  {
    title: "Main",
    description: "Top-level pages.",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "New Patient Center", href: "/new-patient-center" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "About",
    description: "Get to know our practice.",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Meet the Doctor", href: "/meet-the-doctor" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Services",
    description: "Treatments and care offered at Levitt Chiropractic.",
    links: [
      { label: "Services Overview", href: "/services" },
      { label: "Adjustments & Manipulation", href: "/adjustments-and-manipulation" },
      { label: "Injuries", href: "/injuries" },
      { label: "Personal Injury", href: "/personal-injury" },
      { label: "Cryotherapy", href: "/cryotherapy" },
      { label: "Ice Pack Cryotherapy", href: "/ice-pack-cryotherapy" },
      { label: "Cold Laser Therapy", href: "/cold-laser-therapy" },
      { label: "Custom Foot Orthotics", href: "/custom-foot-orthotics" },
      { label: "Common Chiropractic Conditions", href: "/common-chiropractic-conditions" },
      { label: "Back Pain Treatments", href: "/back-pain-treatments" },
      { label: "Degenerative Disc Disease", href: "/degenerative-disc-disease" },
      { label: "Therapeutic Exercise", href: "/therapeutic-exercise" },
      { label: "Functional Medicine", href: "/functional-medicine" },
      { label: "Alternative Medicine", href: "/alternative-medicine" },
    ],
  },
  {
    title: "New Patient Center",
    description: "Everything you need before your first visit.",
    links: [
      { label: "New Patient Center", href: "/new-patient-center" },
      { label: "What to Expect", href: "/new-patient-center/what-to-expect" },
    ],
  },
  {
    title: "Resources",
    description: "Educational tools and references.",
    links: [
      { label: "Resources Overview", href: "/resources" },
      { label: "About Chiropractic", href: "/resources/about-chiropractic" },
      { label: "Wellness Tips", href: "/resources/wellness-tips" },
      { label: "Q & A", href: "/resources/qa" },
    ],
  },
  {
    title: "Blog",
    description: "Articles on chiropractic care, recovery, and spinal health.",
    links: [
      { label: "All Blog Posts", href: "/blog" },
    ],
  },
  {
    title: "Contact",
    description: "Get in touch or book a visit.",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "New Patient Appointment", href: "/contact/new-patient-appointment" },
      {
        label: "Existing Patient Appointment",
        href: "/contact/existing-patient-appointment",
      },
    ],
  },
  {
    title: "Areas We Serve",
    description: `Drug-free chiropractic care for ${servedCities.length}+ Twin Cities communities see the full directory below.`,
    links: [
      { label: "All Areas We Serve", href: "/areas-we-serve" },
    ],
  },
  {
    title: "Legal & Policies",
    description: "Office policies and patient protections.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "HIPAA Policy", href: "/hipaa-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Good Faith Estimate", href: "/good-faith-estimate" },
    ],
  },
];
