import type { GlobalConfig } from "payload";

import { authenticated } from "./fields";

const linkFields = [
  { name: "label", type: "text" as const, required: true },
  { name: "href", type: "text" as const, required: true },
];

const hourFields = [
  { name: "day", type: "text" as const, required: true },
  { name: "hours", type: "text" as const, required: true },
];

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    { name: "tagline", type: "text" },
    {
      name: "navNote",
      type: "textarea",
      admin: {
        description: "Internal note. The designed header reads the fields below.",
      },
    },
    { name: "placeLabel", type: "text" },
    { name: "phone", type: "text" },
    { name: "phoneHref", type: "text" },
    { name: "addressLine", type: "text" },
    { name: "logoMarkSrc", type: "text" },
    { name: "logoMarkAlt", type: "text" },
    { name: "logoWordmarkSrc", type: "text" },
    { name: "logoWordmarkAlt", type: "text" },
    { name: "newPatientLabel", type: "text" },
    { name: "existingPatientLabel", type: "text" },
    { name: "stickyCallLabel", type: "text" },
    { name: "stickyNewPatientLabel", type: "text" },
    { name: "stickyNewPatientRest", type: "text" },
    { name: "stickyExistingPatientLabel", type: "text" },
    { name: "stickyExistingPatientRest", type: "text" },
    {
      name: "hours",
      type: "array",
      fields: hourFields,
    },
    {
      name: "hoursInline",
      type: "array",
      labels: { singular: "Hours line", plural: "Hours lines" },
      fields: [
        { name: "day", type: "text", required: true },
        { name: "time", type: "text", required: true },
      ],
    },
    {
      name: "nav",
      type: "json",
      admin: {
        description: "Primary navigation tree. Leave empty to keep the designed menu.",
      },
    },
  ],
};

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    { name: "blurb", type: "textarea" },
    {
      name: "designedBlurb",
      type: "textarea",
      admin: {
        description:
          "Footer sentence on the public site. Leave blank to keep the designed default. The legacy blurb field is not shown.",
      },
    },
    { name: "exploreTitle", type: "text" },
    { name: "legalTitle", type: "text" },
    { name: "explore", type: "array", fields: linkFields },
    { name: "legal", type: "array", fields: linkFields },
    { name: "newPatientLabel", type: "text" },
    { name: "existingPatientLabel", type: "text" },
    { name: "poweredByLabel", type: "text" },
    { name: "poweredByHref", type: "text" },
  ],
};

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    { name: "defaultMetaTitle", type: "text" },
    { name: "defaultMetaDescription", type: "textarea" },
    { name: "practiceName", type: "text" },
    { name: "shortName", type: "text" },
    { name: "tagline", type: "text" },
    { name: "description", type: "textarea" },
    { name: "phone", type: "text" },
    { name: "phoneHref", type: "text" },
    { name: "phoneE164", type: "text" },
    { name: "email", type: "text" },
    { name: "foundingDate", type: "text" },
    { name: "appointmentUrl", type: "text" },
    { name: "existingPatientAppointmentUrl", type: "text" },
    { name: "callNowLabel", type: "text" },
    { name: "newPatientButtonLabel", type: "text" },
    { name: "existingPatientButtonLabel", type: "text" },
    { name: "mapsUrl", type: "text" },
    { name: "mapsEmbedUrl", type: "textarea" },
    { name: "mapsDirectionsUrl", type: "textarea" },
    { name: "healthgradesUrl", type: "text" },
    {
      name: "address",
      type: "group",
      fields: [
        { name: "street", type: "text" },
        { name: "city", type: "text" },
        { name: "state", type: "text" },
        { name: "zip", type: "text" },
        { name: "full", type: "text" },
      ],
    },
    {
      name: "geo",
      type: "group",
      fields: [
        { name: "latitude", type: "number" },
        { name: "longitude", type: "number" },
      ],
    },
    {
      name: "physician",
      type: "group",
      fields: [
        { name: "name", type: "text" },
        { name: "shortName", type: "text" },
        { name: "jobTitle", type: "text" },
        { name: "image", type: "text" },
      ],
    },
    {
      name: "hours",
      type: "array",
      fields: hourFields,
    },
  ],
};
