import path from "path";
import { fileURLToPath } from "url";
import { config as loadEnv } from "dotenv";
import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import sharp from "sharp";

import { Users } from "./src/cms/collections/Users";
import { Media } from "./src/cms/collections/Media";
import { Pages } from "./src/cms/collections/Pages";
import { Posts } from "./src/cms/collections/Posts";
import { Header, Footer, SiteSettings } from "./src/cms/globals";
import { cmsPlugins } from "./src/cms/plugins";
import { siteConfig } from "./lib/siteConfig";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

loadEnv({ path: path.resolve(dirname, ".env.local") });
loadEnv({ path: path.resolve(dirname, ".env") });

const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || "";
const isLocalhost = /localhost|127\.0\.0\.1/.test(databaseUrl);
const disablePush =
  process.env.VERCEL === "1" ||
  process.env.CMS_IMPORT_APPLY === "1" ||
  process.env.PAYLOAD_DISABLE_PUSH === "1";

const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url
).replace(/\/+$/, "");

function resolveServerURL() {
  const configured = (process.env.NEXT_PUBLIC_SERVER_URL || "").replace(
    /\/+$/,
    "",
  );
  const configuredIsLocal =
    !configured || /localhost|127\.0\.0\.1/.test(configured);
  if (process.env.VERCEL === "1" && configuredIsLocal) return siteOrigin;
  return configured || siteOrigin;
}

const serverURL = resolveServerURL();

function allowedOrigins() {
  const origins = new Set<string>([
    serverURL,
    siteOrigin,
    "http://localhost:3000",
    "http://localhost:3003",
  ]);
  try {
    const url = new URL(siteOrigin);
    const host = url.hostname.startsWith("www.")
      ? url.hostname.slice(4)
      : `www.${url.hostname}`;
    origins.add(`${url.protocol}//${host}`);
  } catch {
    // site origin is still included above
  }
  if (process.env.VERCEL_URL) origins.add(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    origins.add(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  return [...origins].filter(Boolean);
}

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 812 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  collections: [Users, Media, Pages, Posts],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  db: vercelPostgresAdapter({
    pool: { connectionString: databaseUrl },
    forceUseVercelPostgres: !isLocalhost,
    push: !disablePush,
  }),
  plugins: cmsPlugins(),
  cors: allowedOrigins(),
  csrf: allowedOrigins(),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
