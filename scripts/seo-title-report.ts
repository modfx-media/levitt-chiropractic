/**
 * Before/after title lengths for every URL in the captured sitemap crawl.
 * Run: npx tsx scripts/seo-title-report.ts [path-to-baseline.json]
 */
import { readFileSync, writeFileSync } from "node:fs";

import { composeSeoTitle } from "../lib/seoTitle";

const baselinePath =
  process.argv[2] ??
  "/home/ubuntu/.cursor/projects/workspace/uploads/baseline_94ab.json";

type Row = [string, string, number];

const baseline = JSON.parse(readFileSync(baselinePath, "utf8")) as {
  titles: { all: Row[] };
};

function csvCell(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

const lines = ["url,before_title,before_length,after_title,after_length"];
let beforeOver = 0;
let afterOver = 0;
const afterSeen = new Map<string, string>();
const dupes: string[] = [];

for (const [url, before] of baseline.titles.all) {
  const path = url.replace("https://www.levittchiropracticcenter.com", "") || "/";
  const slug = path === "/" ? "" : path.replace(/^\//, "");
  const after = composeSeoTitle(before, slug);
  if (before.length > 60) beforeOver += 1;
  if (after.length > 60) afterOver += 1;
  const prior = afterSeen.get(after);
  if (prior) dupes.push(`${after} :: ${prior} :: ${path}`);
  else afterSeen.set(after, path);
  lines.push(
    [url, before, String(before.length), after, String(after.length)]
      .map(csvCell)
      .join(","),
  );
}

const out = "docs/seo/title-lengths.csv";
writeFileSync(out, `${lines.join("\n")}\n`);
console.log(
  JSON.stringify(
    {
      urls: baseline.titles.all.length,
      beforeOver,
      afterOver,
      duplicateAfter: dupes.length,
      dupes: dupes.slice(0, 10),
      csv: out,
    },
    null,
    2,
  ),
);
if (afterOver > 0 || dupes.length > 0) process.exit(1);
