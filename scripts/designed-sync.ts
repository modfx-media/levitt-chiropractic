import fs from "node:fs";
import path from "node:path";
import type { Payload } from "payload";

export type GlobalChange = { fill: string[]; keep: string[] };

export type DesignedSyncReport = {
  pages: { created: number; updated: number; skipped: number; published: number };
  legacyPages: { skipped: number; published: number };
  globals: Record<"header" | "footer" | "site-settings", GlobalChange>;
  cities: { created: number; updated: number; skipped: number };
  services: { created: number; updated: number; skipped: number };
  testimonials: { created: number; skipped: number };
  team: { created: number; skipped: number };
  faqs: { created: number; skipped: number };
  errors: string[];
};

/** Fields imported before this branch. They must never drive or be overwritten. */
export const LEGACY_GLOBAL_FIELDS: Record<string, ReadonlySet<string>> = {
  header: new Set(["tagline", "navNote"]),
  footer: new Set(["blurb"]),
  "site-settings": new Set(["defaultMetaTitle", "defaultMetaDescription"]),
};

const GLOBAL_META_KEYS = new Set(["id", "updatedAt", "createdAt", "globalType", "_status"]);

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

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function hasValue(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return Number.isFinite(value);
  if (Array.isArray(value)) return value.some((item) => hasValue(item));
  if (typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).some(
      ([key, child]) => key !== "id" && hasValue(child),
    );
  }
  return false;
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

function sameJson(left: unknown, right: unknown): boolean {
  return JSON.stringify(left ?? null) === JSON.stringify(right ?? null);
}

function planGlobalFields(
  slug: string,
  current: Record<string, unknown>,
  incoming: Record<string, unknown>,
): { fill: Record<string, unknown>; change: GlobalChange } {
  const legacy = LEGACY_GLOBAL_FIELDS[slug] ?? new Set<string>();
  const fill: Record<string, unknown> = {};
  const change: GlobalChange = { fill: [], keep: [] };
  for (const [key, value] of Object.entries(incoming)) {
    if (GLOBAL_META_KEYS.has(key)) continue;
    if (legacy.has(key)) {
      change.keep.push(key);
      continue;
    }
    if (hasValue(current[key])) {
      change.keep.push(key);
      continue;
    }
    if (!hasValue(value)) continue;
    fill[key] = value;
    change.fill.push(key);
  }
  for (const key of legacy) {
    if (!change.keep.includes(key) && key in current) change.keep.push(key);
  }
  change.fill.sort();
  change.keep.sort();
  return { fill, change };
}

export async function syncDesignedContent(
  payload: Payload,
  file: DesignedFile,
  options: { publish: boolean; apply: boolean },
): Promise<DesignedSyncReport> {
  const { publish, apply } = options;
  const report: DesignedSyncReport = {
    pages: { created: 0, updated: 0, skipped: 0, published: 0 },
    legacyPages: { skipped: 0, published: 0 },
    globals: {
      header: { fill: [], keep: [] },
      footer: { fill: [], keep: [] },
      "site-settings": { fill: [], keep: [] },
    },
    cities: { created: 0, updated: 0, skipped: 0 },
    services: { created: 0, updated: 0, skipped: 0 },
    testimonials: { created: 0, skipped: 0 },
    team: { created: 0, skipped: 0 },
    faqs: { created: 0, skipped: 0 },
    errors: [],
  };
  const status = publish ? "published" : "draft";
  const known = await payload.find({
    collection: "pages",
    depth: 0,
    draft: true,
    limit: 5000,
    pagination: false,
    overrideAccess: true,
  });
  const byPath = new Map<string, (typeof known.docs)[number]>();
  const byLegacy = new Map<string, (typeof known.docs)[number]>();
  const designedPaths = new Set(file.pages.map((page) => page.path));
  const designedLegacy = new Set(file.pages.map((page) => page.legacyId));
  for (const doc of known.docs) {
    if (typeof doc.path === "string") byPath.set(doc.path, doc);
    if (typeof doc.legacyId === "string") byLegacy.set(doc.legacyId, doc);
    const inDesigned =
      (typeof doc.path === "string" && designedPaths.has(doc.path)) ||
      (typeof doc.legacyId === "string" && designedLegacy.has(doc.legacyId));
    if (!inDesigned) report.legacyPages.skipped += 1;
  }

  for (const page of file.pages) {
    if ((report.pages.created + report.pages.updated) % 50 === 0 && report.pages.created + report.pages.updated > 0) {
      console.log(`designed pages ${report.pages.created + report.pages.updated}/${file.pages.length}`);
    }
    try {
      const current = byPath.get(page.path) ?? byLegacy.get(page.legacyId);
      if (current) {
        const designedChanged = !sameJson(current.designed, page.designed);
        const statusChanged = publish && current._status !== "published";
        if (!designedChanged && !statusChanged) {
          report.pages.skipped += 1;
        } else {
          if (apply) {
            await payload.update({
              collection: "pages",
              id: current.id,
              depth: 0,
              draft: !publish,
              overrideAccess: true,
              data: {
                designed: page.designed,
                ...(publish ? { _status: status } : {}),
              },
            });
          }
          report.pages.updated += 1;
          if (publish) report.pages.published += 1;
        }
      } else {
        if (apply) {
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
        }
        report.pages.created += 1;
        if (publish) report.pages.published += 1;
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
        else if (!apply) report.faqs.created += 1;
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
      const current = (await payload.findGlobal({
        slug: slug as "header",
        depth: 0,
        overrideAccess: true,
      })) as unknown as Record<string, unknown>;
      const planned = planGlobalFields(slug, current, data);
      report.globals[slug as "header"] = planned.change;
      if (apply && Object.keys(planned.fill).length) {
        await payload.updateGlobal({
          slug: slug as "header",
          overrideAccess: true,
          data: planned.fill,
        });
      }
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
        if (apply) {
          await payload.update({ collection: "cities", id: found.docs[0].id, overrideAccess: true, data });
        }
        report.cities.updated += 1;
      } else {
        if (apply) await payload.create({ collection: "cities", overrideAccess: true, data });
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
        if (apply) {
          await payload.update({
            collection: "practice-services",
            id: found.docs[0].id,
            overrideAccess: true,
            data,
          });
        }
        report.services.updated += 1;
      } else {
        if (apply) {
          await payload.create({ collection: "practice-services", overrideAccess: true, data });
        }
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
      if (apply) {
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
      }
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
        if (apply) {
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
        }
        report.team.created += 1;
      }
    }
  } catch (error) {
    report.errors.push(`team: ${String(error)}`);
  }

  return report;
}
