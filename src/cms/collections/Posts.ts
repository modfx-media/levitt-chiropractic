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
import { previewFromSlugPrefix } from "../preview";

const preview = previewFromSlugPrefix("/blog");

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "publishedAt"],
    livePreview: { url: preview },
    preview: (data) => preview({ data }),
  },
  defaultPopulate: {
    title: true,
    slug: true,
    excerpt: true,
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
      type: "text",
      unique: true,
      index: true,
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            const slug =
              typeof data?.slug === "string"
                ? data.slug.replace(/^\/+|\/+$/g, "")
                : "";
            if (slug) return `/blog/${slug}`;
            return emptyToNull(value);
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
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor(),
    },
  ],
  hooks: {
    afterChange: [revalidatePublished],
    afterDelete: [revalidateDeleted],
  },
  versions: versionsDrafts,
};
