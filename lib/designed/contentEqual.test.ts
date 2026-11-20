import assert from "node:assert/strict";
import test from "node:test";

import { contentEqual } from "./contentEqual";

test("designed JSON matches when only key order differs", () => {
  const file = {
    aboutHero: { title: "About Us", crumbs: [{ href: "/", label: "Home" }] },
    aboutWelcome: { heading: "Care" },
  };
  const stored = {
    aboutWelcome: { heading: "Care" },
    aboutHero: { crumbs: [{ label: "Home", href: "/" }], title: "About Us" },
  };
  assert.equal(contentEqual(stored, file), true);
});

test("ids and timestamps do not count as content changes", () => {
  const file = {
    slug: "minneapolis",
    distanceMi: 5,
    zips: [{ zip: "55401" }],
    neighbors: [{ name: "Edina" }],
  };
  const stored = {
    id: 4,
    slug: "minneapolis",
    distanceMi: "5",
    updatedAt: "2026-11-19T19:41:28.983Z",
    createdAt: "2026-11-19T19:41:28.983Z",
    zips: [{ id: "abc", zip: "55401" }],
    neighbors: [{ name: "Edina", id: "def" }],
  };
  assert.equal(contentEqual(stored, file), true);
  assert.equal(contentEqual(stored, { ...file, distanceMi: 6 }), false);
});
