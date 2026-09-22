import { isFiveStarReview, type GoogleReview, type GoogleReviewsMeta } from "./reviews";
import { siteConfig } from "./siteConfig";

function absUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

const BUSINESS_ID = `${siteConfig.url}/#chiropractor`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const PHYSICIAN_ID = `${siteConfig.url}/meet-the-doctor#physician`;

function postalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  };
}

function buildHoursSpecification() {
  const dayMap: Record<string, string> = {
    Monday: "Mo",
    Tuesday: "Tu",
    Wednesday: "We",
    Thursday: "Th",
    Friday: "Fr",
    Saturday: "Sa",
    Sunday: "Su",
  };

  const out: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string;
    opens?: string;
    closes?: string;
    description?: string;
  }> = [];

  for (const h of siteConfig.hours) {
    const code = dayMap[h.day];
    if (!code) continue;
    if (/closed/i.test(h.hours)) continue;
    if (/appointment/i.test(h.hours)) {
      out.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: code,
        description: h.hours,
      });
      continue;
    }
    const ranges = h.hours.split("&").map((s) => s.trim());
    for (const range of ranges) {
      const m = range.match(
        /(\d{1,2})(?::(\d{2}))?\s*([ap]m)?\s*[–-]\s*(\d{1,2})(?::(\d{2}))?\s*([ap]m)/i,
      );
      if (!m) continue;
      const opens = to24h(m[1], m[2], m[3] ?? m[6]);
      const closes = to24h(m[4], m[5], m[6]);
      if (opens && closes)
        out.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: code,
          opens,
          closes,
        });
    }
  }
  return out;
}

function to24h(h: string, m: string | undefined, ampm: string | undefined) {
  let hh = parseInt(h, 10);
  const mm = m ? parseInt(m, 10) : 0;
  const ap = (ampm ?? "").toLowerCase();
  if (ap === "pm" && hh < 12) hh += 12;
  if (ap === "am" && hh === 12) hh = 0;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

const PRIMARY_SERVICES = [
  {
    name: "Chiropractic Adjustments & Manipulation",
    url: "/adjustments-and-manipulation",
  },
  { name: "Back Pain Treatment", url: "/back-pain-treatments" },
  { name: "Cold Laser Therapy", url: "/cold-laser-therapy" },
  { name: "Cryotherapy", url: "/cryotherapy" },
  { name: "Custom Foot Orthotics", url: "/custom-foot-orthotics" },
  { name: "Therapeutic Exercise", url: "/therapeutic-exercise" },
];

export function localBusinessJsonLd(input?: {
  reviews?: GoogleReview[];
  meta?: GoogleReviewsMeta;
}) {
  const logo = absUrl("/images/logo.png");
  const photo = absUrl("/images/og-default.jpg");
  const doctorPhoto = absUrl(siteConfig.physician.image);

  return {
    "@context": "https://schema.org",
    "@type": "Chiropractor",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    alternateName: [
      siteConfig.shortName,
      siteConfig.physician.name,
      siteConfig.physician.shortName,
    ],
    description: siteConfig.description,
    url: siteConfig.url,
    image: [photo, doctorPhoto, logo],
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    telephone: siteConfig.phoneE164,
    priceRange: "$$",
    currenciesAccepted: "USD",
    foundingDate: siteConfig.foundingDate,
    medicalSpecialty: "Chiropractic",
    isAcceptingNewPatients: true,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    openingHoursSpecification: buildHoursSpecification(),
    areaServed: [
      { "@type": "City", name: "Saint Louis Park" },
      { "@type": "City", name: "Minneapolis" },
      { "@type": "City", name: "Edina" },
      { "@type": "City", name: "Hopkins" },
      { "@type": "City", name: "Minnetonka" },
      { "@type": "City", name: "Golden Valley" },
    ],
    sameAs: [siteConfig.mapsUrl, siteConfig.healthgradesUrl],
    employee: {
      "@type": "Physician",
      "@id": PHYSICIAN_ID,
      name: siteConfig.physician.name,
      url: `${siteConfig.url}/meet-the-doctor`,
      jobTitle: siteConfig.physician.jobTitle,
    },
    founder: { "@id": PHYSICIAN_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chiropractic services",
      itemListElement: PRIMARY_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: s.name,
          url: absUrl(s.url),
        },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: absUrl(siteConfig.appointmentUrl),
      name: "Request an appointment",
    },
    ...(input?.meta && input.meta.rating > 0 && input.meta.reviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(input.meta.rating),
            reviewCount: String(input.meta.reviewCount),
            bestRating: "5",
          },
        }
      : {}),
    ...(() => {
      const visible = (input?.reviews ?? []).filter(isFiveStarReview);
      if (visible.length === 0) return {};
      return {
        review: visible.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody: review.quote,
        })),
      };
    })(),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "en-US",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function serviceJsonLd(input: {
  name: string;
  slug: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
}) {
  const url = absUrl(input.slug.replace(/^\/+/, ""));
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: input.name,
    description: input.description,
    url,
    serviceType: input.serviceType ?? input.name,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "City",
      name: input.areaServed ?? "Saint Louis Park",
    },
  };
}

export function blogPostingJsonLd(input: {
  slug: string;
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  authorUrl?: string;
  keywords?: string[];
  articleSection?: string;
  wordCount?: number;
}) {
  const url = `${siteConfig.url}/blog/${input.slug.replace(/^\/+/, "")}`;
  const image = absUrl(input.image);
  const authorUrl = input.authorUrl ? absUrl(input.authorUrl) : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: input.title,
    description: input.description,
    image: [image],
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    inLanguage: "en-US",
    url,
    author: {
      "@type": "Person",
      name: input.authorName,
      ...(authorUrl ? { url: authorUrl } : {}),
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absUrl("/images/og-default.jpg"),
      },
    },
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.keywords && input.keywords.length > 0
      ? { keywords: input.keywords.join(", ") }
      : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
  };
}

export function blogIndexJsonLd(input: {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    authorName: string;
    image: string;
  }>;
}) {
  const url = `${siteConfig.url}/blog`;
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: `${siteConfig.name} Blog`,
    description:
      "Articles on chiropractic care, recovery, and spinal health from Dr. Alan Levitt.",
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: siteConfig.name,
    },
    blogPost: input.posts.map((p) => {
      const postUrl = `${siteConfig.url}/blog/${p.slug}`;
      return {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        headline: p.title,
        description: p.description,
        url: postUrl,
        datePublished: p.publishedAt,
        dateModified: p.updatedAt ?? p.publishedAt,
        image: absUrl(p.image),
        author: { "@type": "Person", name: p.authorName },
      };
    }),
  };
}

export function faqPageJsonLd(input: { faqs: Array<{ q: string; a: string }> }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: input.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(input: {
  items: Array<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: input.items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absUrl(item.url),
    })),
  };
}

/** City landing page: a WebPage about the real Saint Louis Park clinic, not a second location. */
export function cityServiceAreaJsonLd(input: {
  citySlug: string;
  cityName: string;
  description: string;
}) {
  const url = `${siteConfig.url}/areas-we-serve/${input.citySlug}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `Chiropractor in ${input.cityName}, MN`,
    description: input.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: absUrl("/images/og-default.jpg"),
    inLanguage: "en-US",
  };
}

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: siteConfig.physician.name,
    honorificPrefix: "Dr.",
    jobTitle: siteConfig.physician.jobTitle,
    medicalSpecialty: "Chiropractic",
    image: absUrl(siteConfig.physician.image),
    url: `${siteConfig.url}/meet-the-doctor`,
    telephone: siteConfig.phoneE164,
    worksFor: { "@id": BUSINESS_ID },
    address: postalAddress(),
    sameAs: [siteConfig.healthgradesUrl],
  };
}
