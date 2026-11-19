import { sitemapSections } from "@/lib/sitemapEntries";

export const siteMapDefaults = {
  hero: {
    title: "Site Map",
    subtitle:
      "Every page on the Levitt Chiropractic Center, P.A. website organized for quick navigation.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Site Map" },
    ],
  },
  intro: {
    eyebrow: "Full Index",
    title: "Find what you need, fast",
    pagesAcross: "pages across",
    sectionsLabel: "sections.",
    machineReadable: "Looking for the machine-readable version?",
    sitemapLabel: "/sitemap.xml",
    sitemapHref: "/sitemap.xml",
    sitemapTail: "is available for search engines.",
  },
  sectionMeta: " · Section",
  sections: sitemapSections.map((section) => ({
    title: section.title,
    description: section.description ?? "",
    links: section.links.map((link) => ({ label: link.label, href: link.href })),
  })),
  areas: {
    eyebrow: "Areas We Serve · Full Directory",
    titlePrefix: "All ",
    titleSuffix: " local pages",
    bodyPrefix: "Every Twin Cities community we serve, with all ",
    bodySuffix: " specialty services available locally. Click any city to expand.",
    nameSuffix: ", MN",
    overviewSuffix: " overview",
    inLabel: "in ",
    basePath: "/areas-we-serve",
  },
  cta: {
    eyebrow: "Can't find what you're looking for?",
    title: "We're here to help",
    bodyBefore: "Call ",
    bodyAfter:
      " or send us a message we'll point you to the right resource or schedule your visit.",
  },
};
