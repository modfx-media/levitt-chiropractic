import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import {
  authenticated,
  authenticatedOrPublished,
  emptyToNull,
  uniqueOptionalText,
  versionsDrafts,
} from "../fields";
import { revalidateDeleted, revalidatePublished } from "../hooks";
import { previewFromPath } from "../preview";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "path", "_status", "updatedAt"],
    livePreview: { url: previewFromPath },
    preview: (data) => previewFromPath({ data }),
  },
  defaultPopulate: {
    title: true,
    path: true,
    slug: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    uniqueOptionalText("slug", "Slug"),
    {
      name: "path",
      label: "Public path",
      type: "text",
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "Must start with / and match the live URL. Leave blank until you are ready.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            const raw = emptyToNull(value);
            if (typeof raw === "string") {
              const trimmed = raw.replace(/\/+$/, "") || "/";
              return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
            }
            const slug = typeof data?.slug === "string" ? data.slug.replace(/^\/+|\/+$/g, "") : "";
            if (!slug) return raw;
            return slug === "home" ? "/" : `/${slug}`;
          },
        ],
      },
    },
    uniqueOptionalText("legacyId", "Legacy ID"),
    {
      name: "sourceUrl",
      type: "text",
      index: true,
      admin: { position: "sidebar" },
      hooks: {
        beforeValidate: [({ value }) => emptyToNull(value)],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [
        {
          slug: "content",
          labels: { singular: "Content", plural: "Content" },
          fields: [
            {
              name: "body",
              type: "richText",
              editor: lexicalEditor(),
            },
          ],
        },
        {
          slug: "cta",
          labels: { singular: "Call to action", plural: "Calls to action" },
          fields: [
            { name: "heading", type: "text" },
            { name: "body", type: "textarea" },
            { name: "label", type: "text" },
            { name: "href", type: "text" },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePublished],
    afterDelete: [revalidateDeleted],
  },
  versions: versionsDrafts,
};
