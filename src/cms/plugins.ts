import { seoPlugin } from "@payloadcms/plugin-seo";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { searchPlugin } from "@payloadcms/plugin-search";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import type { Plugin } from "payload";

import { siteConfig } from "../../lib/siteConfig";

const siteUrl = () =>
  (process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(
    /\/+$/,
    "",
  );

export function cmsPlugins(): Plugin[] {
  const plugins: Plugin[] = [
    seoPlugin({
      collections: ["pages", "posts"],
      uploadsCollection: "media",
      tabbedUI: true,
      generateTitle: ({ doc }) =>
        typeof doc?.title === "string" ? doc.title : siteConfig.name,
      generateDescription: ({ doc }) =>
        typeof doc?.excerpt === "string" ? doc.excerpt : siteConfig.description,
      generateURL: ({ doc }) => {
        const path = typeof doc?.path === "string" ? doc.path : "";
        if (!path.startsWith("/")) return siteUrl();
        return path === "/" ? siteUrl() : `${siteUrl()}${path}`;
      },
      fields: ({ defaultFields }) => [
        ...defaultFields,
        {
          name: "canonicalUrl",
          type: "text",
          admin: { description: "Leave blank to use the public path." },
        },
        {
          name: "noIndex",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "noFollow",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "excludeFromSitemap",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "schemaType",
          type: "text",
        },
        {
          name: "breadcrumbLabel",
          type: "text",
        },
      ],
    }),
    redirectsPlugin({
      collections: ["pages", "posts"],
      overrides: {
        admin: { group: "SEO" },
      },
    }),
    searchPlugin({
      collections: ["pages", "posts"],
      defaultPriorities: {
        pages: 10,
        posts: 20,
      },
    }),
  ];

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    plugins.push(
      vercelBlobStorage({
        enabled: true,
        collections: { media: true },
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }),
    );
  }

  return plugins;
}
