import assert from "node:assert/strict";
import test from "node:test";

import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  physicianJsonLd,
} from "./jsonLd";

function walk(node: unknown, acc: Record<string, unknown>[] = []) {
  if (node && typeof node === "object") {
    if (Array.isArray(node)) {
      for (const item of node) walk(item, acc);
    } else {
      const rec = node as Record<string, unknown>;
      acc.push(rec);
      for (const value of Object.values(rec)) walk(value, acc);
    }
  }
  return acc;
}

test("localBusinessJsonLd does not emit Review or AggregateRating markup", () => {
  const json = localBusinessJsonLd({
    reviews: [
      {
        author: "Example",
        text: "Example quote that must not become schema.",
        rating: 5,
        date: "2026-01-01",
      } as never,
    ],
    meta: { rating: 5, count: 29 } as never,
  });
  const nodes = walk(json);
  for (const node of nodes) {
    const type = node["@type"];
    assert.notEqual(type, "Review");
    assert.notEqual(type, "AggregateRating");
  }
  assert.equal("review" in json, false);
  assert.equal("aggregateRating" in json, false);
});

test("physicianJsonLd uses only published Meet the Doctor credentials", () => {
  const physician = physicianJsonLd();
  assert.equal(physician.name, "Dr. Alan G. Levitt, DC");
  assert.equal(physician.honorificSuffix, "DC");
  assert.equal(
    (physician.alumniOf as Array<{ name: string }>)[0].name,
    "Northwestern College of Chiropractic",
  );
  assert.match(physician.description as string, /December 1986/);
  assert.match(physician.description as string, /1987/);
  assert.match(physician.description as string, /1999/);
  assert.equal((physician.birthPlace as { name: string }).name, "Saint Louis Park");
  const asJson = JSON.stringify(physician);
  assert.equal(asJson.includes("licenseNumber"), false);
  assert.equal(asJson.includes("AggregateRating"), false);
});

test("breadcrumbJsonLd never emits an empty or unnamed item", () => {
  const data = breadcrumbJsonLd({
    items: [
      { name: "Home", url: "/" },
      { name: "  ", url: "/services" },
      { name: "", url: "/areas-we-serve" },
    ],
  });
  assert.ok(data.itemListElement.length >= 2);
  for (const item of data.itemListElement) {
    assert.ok(typeof item.name === "string" && item.name.trim().length > 0);
    assert.notEqual(item.name, "Unnamed item");
  }
  assert.equal(data.itemListElement[1].name, "Services");
  assert.equal(data.itemListElement[2].name, "Areas We Serve");
});
