import type { CollectionConfig } from "payload";

import { authenticated } from "../fields";

const publicRead = {
  create: authenticated,
  delete: authenticated,
  read: () => true,
  update: authenticated,
};

export const Cities: CollectionConfig = {
  slug: "cities",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "region", "distanceMi"],
  },
  access: publicRead,
  fields: [
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "name", type: "text", required: true },
    { name: "county", type: "text" },
    { name: "distanceMi", type: "number" },
    { name: "population", type: "number" },
    { name: "zips", type: "array", fields: [{ name: "zip", type: "text", required: true }] },
    { name: "neighbors", type: "array", fields: [{ name: "name", type: "text", required: true }] },
    { name: "landmark", type: "text" },
    {
      name: "region",
      type: "select",
      options: [
        "West Metro",
        "Minneapolis",
        "South Metro",
        "North Metro",
        "East Metro",
        "Saint Paul",
      ],
    },
  ],
};

export const PracticeServices: CollectionConfig = {
  slug: "practice-services",
  admin: { useAsTitle: "name", defaultColumns: ["name", "slug"] },
  access: publicRead,
  fields: [
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "name", type: "text", required: true },
    { name: "inlineNoun", type: "text" },
    { name: "tagline", type: "textarea" },
    { name: "serviceType", type: "text" },
    { name: "benefits", type: "array", fields: [{ name: "text", type: "text", required: true }] },
    { name: "conditions", type: "array", fields: [{ name: "text", type: "text", required: true }] },
    {
      name: "faqs",
      type: "array",
      fields: [
        { name: "q", type: "text", required: true },
        { name: "a", type: "textarea", required: true },
      ],
    },
  ],
};

export const Conditions: CollectionConfig = {
  slug: "conditions",
  admin: { useAsTitle: "name", defaultColumns: ["name", "slug"] },
  access: publicRead,
  fields: [
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "name", type: "text", required: true },
    { name: "summary", type: "textarea" },
    { name: "href", type: "text" },
  ],
};

export const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: { useAsTitle: "path", defaultColumns: ["path", "updatedAt"] },
  access: publicRead,
  fields: [
    { name: "path", type: "text", required: true, unique: true, index: true },
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text" },
    { name: "intro", type: "textarea" },
    {
      name: "items",
      type: "array",
      fields: [
        { name: "q", type: "text", required: true },
        { name: "a", type: "textarea", required: true },
      ],
    },
  ],
};

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: { useAsTitle: "name", defaultColumns: ["name", "rating"] },
  access: publicRead,
  fields: [
    { name: "name", type: "text", required: true },
    { name: "quote", type: "textarea", required: true },
    { name: "rating", type: "number", min: 1, max: 5, defaultValue: 5 },
    { name: "relativeTime", type: "text" },
  ],
};

export const TeamMembers: CollectionConfig = {
  slug: "team",
  labels: { singular: "Team member", plural: "Team" },
  admin: { useAsTitle: "name", defaultColumns: ["name", "jobTitle"] },
  access: publicRead,
  fields: [
    { name: "name", type: "text", required: true },
    { name: "shortName", type: "text" },
    { name: "jobTitle", type: "text" },
    { name: "image", type: "text" },
    { name: "bio", type: "textarea" },
  ],
};
