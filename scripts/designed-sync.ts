import fs from "node:fs";
import path from "node:path";
import type { Payload } from "payload";

export type DesignedSyncReport = {
  pages: { created: number; updated: number; skipped: number };
  globals: string[];
  cities: { created: number; updated: number };
  services: { created: number; updated: number };
  testimonials: { created: number; skipped: number };
  team: { created: number; skipped: number };
  faqs: { created: number; skipped: number };
  errors: string[];
};

type DesignedFile = {
  pages: { path: string; legacyId: string; designed: Record<string, unknown> }[];
  globals: {
    header: Record<string, unknown>;
    footer: Record<string, unknown>;
    "site-settings": Record<string, unknown>;
  };
  cities: Array<Record<string, unknown>>;
  services: Array<Record<string, unknown>>;
  testimonials: Array<Record<string, unknown>>;
};

const SEO_KEYS = [
  "title",
  "description",
  "canonicalUrl",
  "image",
  "schemaType",
  "breadcrumbLabel",
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function hasValue(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return Number.isFinite(value);
  if (Array.isArray(value)) return value.length > 0;
  return typeof value === "object";
}

export function loadDesignedFile(root: string): DesignedFile | null {
  const file = path.join(root, "data", "designed-content.json");
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as DesignedFile;
}

function titleFromPath(pagePath: string): string {
  if (pagePath === "/") return "Home";
  const last = pagePath.split("/").filter(Boolean).pop() ?? "Page";
  return last.replace(/-/g, " ");
}

function textArray(value: unknown, key: string): { [k: string]: string }[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string" && item.trim()) return { [key]: item };
      if (isRecord(item) && typeof item[key] === "string") return { [key]: item[key] as string };
      return null;
    })
    .filter((item): item is { [k: string]: string } => Boolean(item));
}

function faqArray(value: unknown): { q: string; a: string }[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!isRecord(item) || typeof item.q !== "string" || typeof item.a !== "string") return [];
    return [{ q: item.q, a: item.a }];
  });
}

function collectFaqs(node: unknown, found: { q: string; a: string }[][]): void {
  if (Array.isArray(node) && node.some((item) => isRecord(item) && "q" in item && "a" in item)) {
    const faqs = faqArray(node);
    if (faqs.length) found.push(faqs);
    return;
  }
  if (!isRecord(node)) return;
  for (const value of Object.values(node)) collectFaqs(value, found);
}

async function findPage(payload: Payload, pagePath: string, legacyId: string) {
  return payload.find({
    collection: "pages",
    depth: 0,
    draft: true,
    limit: 1,
    overrideAccess: true,
    where: {
      or: [{ path: { equals: pagePath } }, { legacyId: { equals: legacyId } }],
    },
  });
}

export async function syncDesignedContent(
  payload: Payload,
  file: DesignedFile,
  publish: boolean,
): Promise<DesignedSyncReport> {
  const report: DesignedSyncReport = {
    pages: { created: 0, updated: 0, skipped: 0 },
    globals: [],
    cities: { created: 0, updated: 0 },
    services: { created: 0, updated: 0 },
    testimonials: { created: 0, skipped: 0 },
    team: { created: 0, skipped: 0 },
    faqs: { created: 0, skipped: 0 },
    errors: [],
  };
  const status = publish ? "published" : "draft";

  for (const page of file.pages) {
    if ((report.pages.created + report.pages.updated) % 50 === 0 && report.pages.created + report.pages.updated > 0) {
      console.log(`designed pages ${report.pages.created + report.pages.updated}/${file.pages.length}`);
    }
    try {
      const existing = await findPage(payload, page.path, page.legacyId);
      const current = existing.docs[0];
      if (current) {
        const meta = isRecord(current.meta) ? current.meta : {};
        const preserved: Record<string, unknown> = {};
        for (const key of SEO_KEYS) {
          if (hasValue(meta[key])) preserved[key] = meta[key];
        }
        if (meta.noIndex === true) preserved.noIndex = true;
        if (meta.noFollow === true) preserved.noFollow = true;
        if (meta.excludeFromSitemap === true) preserved.excludeFromSitemap = true;
        await payload.update({
          collection: "pages",
          id: current.id,
          depth: 0,
          draft: !publish,
          overrideAccess: true,
          data: {
            designed: page.designed,
            _status: status,
            ...(Object.keys(preserved).length ? { meta: preserved } : {}),
          },
        });
        report.pages.updated += 1;
      } else {
        await payload.create({
          collection: "pages",
          depth: 0,
          draft: !publish,
          overrideAccess: true,
          data: {
            title: titleFromPath(page.path),
            path: page.path,
            slug: page.path === "/" ? "home" : page.path.replace(/^\//, ""),
            legacyId: page.legacyId,
            designed: page.designed,
            _status: status,
          },
        });
        report.pages.created += 1;
      }
      const faqs: { q: string; a: string }[][] = [];
      collectFaqs(page.designed, faqs);
      if (faqs[0]?.length) {
        const found = await payload.find({
          collection: "faqs",
          depth: 0,
          limit: 1,
          overrideAccess: true,
          where: { path: { equals: page.path } },
        });
        if (found.docs[0]) report.faqs.skipped += 1;
        else {
          await payload.create({
            collection: "faqs",
            overrideAccess: true,
            data: { path: page.path, items: faqs[0] },
          });
          report.faqs.created += 1;
        }
      }
    } catch (error) {
      report.errors.push(`page ${page.path}: ${String(error)}`);
    }
  }

  for (const [slug, data] of Object.entries(file.globals)) {
    try {
      const current = await payload.findGlobal({ slug: slug as "header", depth: 0, overrideAccess: true });
      const next: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(data)) {
        if (!hasValue(current?.[key as keyof typeof current])) next[key] = value;
      }
      if (Object.keys(next).length) {
        await payload.updateGlobal({
          slug: slug as "header",
          overrideAccess: true,
          data: next,
        });
      }
      report.globals.push(slug);
    } catch (error) {
      report.errors.push(`global ${slug}: ${String(error)}`);
    }
  }

  for (const city of file.cities) {
    const slug = typeof city.slug === "string" ? city.slug : "";
    if (!slug) continue;
    try {
      const found = await payload.find({
        collection: "cities",
        depth: 0,
        limit: 1,
        overrideAccess: true,
        where: { slug: { equals: slug } },
      });
      const data = {
        slug,
        name: city.name,
        county: city.county,
        distanceMi: city.distanceMi,
        population: city.population,
        landmark: city.landmark,
        region: city.region,
        zips: textArray(city.zips, "zip"),
        neighbors: textArray(city.neighbors, "name"),
      };
      if (found.docs[0]) {
        await payload.update({ collection: "cities", id: found.docs[0].id, overrideAccess: true, data });
        report.cities.updated += 1;
      } else {
        await payload.create({ collection: "cities", overrideAccess: true, data });
        report.cities.created += 1;
      }
    } catch (error) {
      report.errors.push(`city ${slug}: ${String(error)}`);
    }
  }

  for (const service of file.services) {
    const slug = typeof service.slug === "string" ? service.slug : "";
    if (!slug) continue;
    try {
      const found = await payload.find({
        collection: "practice-services",
        depth: 0,
        limit: 1,
        overrideAccess: true,
        where: { slug: { equals: slug } },
      });
      const data = {
        slug,
        name: service.name,
        inlineNoun: service.inlineNoun,
        tagline: service.tagline,
        serviceType: service.serviceType,
        benefits: textArray(service.benefits, "text"),
        conditions: textArray(service.conditions, "text"),
        faqs: faqArray(service.faqs),
      };
      if (found.docs[0]) {
        await payload.update({
          collection: "practice-services",
          id: found.docs[0].id,
          overrideAccess: true,
          data,
        });
        report.services.updated += 1;
      } else {
        await payload.create({ collection: "practice-services", overrideAccess: true, data });
        report.services.created += 1;
      }
    } catch (error) {
      report.errors.push(`service ${slug}: ${String(error)}`);
    }
  }

  for (const review of file.testimonials) {
    const name = typeof review.name === "string" ? review.name : "";
    const quote = typeof review.quote === "string" ? review.quote : "";
    if (!name || !quote) continue;
    try {
      const found = await payload.find({
        collection: "testimonials",
        depth: 0,
        limit: 1,
        overrideAccess: true,
        where: { and: [{ name: { equals: name } }, { quote: { equals: quote } }] },
      });
      if (found.docs[0]) {
        report.testimonials.skipped += 1;
        continue;
      }
      await payload.create({
        collection: "testimonials",
        overrideAccess: true,
        data: {
          name,
          quote,
          rating: typeof review.rating === "number" ? review.rating : 5,
          relativeTime: review.relativeTime,
        },
      });
      report.testimonials.created += 1;
    } catch (error) {
      report.errors.push(`testimonial ${name}: ${String(error)}`);
    }
  }

  try {
    const settings = file.globals["site-settings"];
    const physician = isRecord(settings.physician) ? settings.physician : {};
    const name = typeof physician.name === "string" ? physician.name : "";
    if (name) {
      const found = await payload.find({
        collection: "team",
        depth: 0,
        limit: 1,
        overrideAccess: true,
        where: { name: { equals: name } },
      });
      if (found.docs[0]) report.team.skipped += 1;
      else {
        await payload.create({
          collection: "team",
          overrideAccess: true,
          data: {
            name,
            shortName: physician.shortName,
            jobTitle: physician.jobTitle,
            image: physician.image,
          },
        });
        report.team.created += 1;
      }
    }
  } catch (error) {
    report.errors.push(`team: ${String(error)}`);
  }

  return report;
}
