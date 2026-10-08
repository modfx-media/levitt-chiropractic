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

  // Always register the adapter so the admin import map includes the client
  // upload handler. Payload only accepts public Blob stores and a static
  // vercel_blob_rw_ token. Private OIDC stores (BLOB_STORE_ID) are ignored.
  // A malformed token would throw while the config loads and 500 the site.
  const rawToken = process.env.BLOB_READ_WRITE_TOKEN;
  const token =
    rawToken && /^vercel_blob_rw_[a-z\d]+_[a-z\d]+$/i.test(rawToken)
      ? rawToken
      : undefined;
  if (rawToken && !token) {
    console.error(
      "[cms] BLOB_READ_WRITE_TOKEN is not a public vercel_blob_rw_ token; blob uploads are disabled",
    );
  }
  plugins.push(
    vercelBlobStorage({
      enabled: Boolean(token),
      token,
      clientUploads: true,
      collections: {
        media: {
          // Store the public blob URL on media.url instead of proxying /api/media/file.
          disablePayloadAccessControl: true,
        },
      },
    }),
  );

  return plugins;
}
