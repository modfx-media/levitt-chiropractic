import type { ReactNode } from "react";

export type NavLeaf = { label: string; href: string };

export type NavGroup = {
  label: string;
  href?: string;
  items: NavLeaf[];
};

export type NavEntry = {
  label: string;
  href: string;
  /** Either flat list of links, or grouped columns for a mega-menu */
  groups?: (NavGroup | NavLeaf)[];
};

export const primaryNav: NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    groups: [
      { label: "Meet the Doctor", href: "/meet-the-doctor" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        label: "Adjustments & Manipulation",
        href: "/adjustments-and-manipulation",
      },
      {
        label: "Cryotherapy",
        href: "/cryotherapy",
        items: [
          {
            label: "Ice Pack Cryotherapy",
            href: "/ice-pack-cryotherapy",
          },
        ],
      },
      { label: "Cold Laser Therapy", href: "/cold-laser-therapy" },
      { label: "Custom Foot Orthotics", href: "/custom-foot-orthotics" },
      {
        label: "Common Chiropractic Conditions",
        href: "/common-chiropractic-conditions",
        items: [
          { label: "Back Pain Treatments", href: "/back-pain-treatments" },
          {
            label: "Degenerative Disc Disease",
            href: "/degenerative-disc-disease",
          },
        ],
      },
      { label: "Therapeutic Exercise", href: "/therapeutic-exercise" },
      { label: "Functional Medicine", href: "/functional-medicine" },
      { label: "Alternative Medicine", href: "/alternative-medicine" },
    ],
  },
  {
    label: "New Patient Center",
    href: "/new-patient-center",
    groups: [
      { label: "What to Expect", href: "/new-patient-center/what-to-expect" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    groups: [
      { label: "About Chiropractic", href: "/resources/about-chiropractic" },
      { label: "Q & A", href: "/resources/qa" },
      { label: "Wellness Tips", href: "/resources/wellness-tips" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Areas We Serve",
    href: "/areas-we-serve",
    groups: [
      { label: "Saint Louis Park", href: "/areas-we-serve/saint-louis-park" },
      { label: "Edina", href: "/areas-we-serve/edina" },
      { label: "Minneapolis", href: "/areas-we-serve/minneapolis" },
      { label: "Hopkins", href: "/areas-we-serve/hopkins" },
      { label: "Minnetonka", href: "/areas-we-serve/minnetonka" },
      { label: "Golden Valley", href: "/areas-we-serve/golden-valley" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    groups: [
      { label: "Appointment Request", href: "/contact/appointment-request" },
    ],
  },
];

export function isGroup(item: NavGroup | NavLeaf): item is NavGroup {
  return (item as NavGroup).items !== undefined;
}

export type _Unused = ReactNode;
