import assert from "node:assert/strict";
import test from "node:test";

import { isLivePublicPath } from "../liveRoutes";
import { defaultShell, shellFromGlobals } from "./shell";

const legacyBlurb =
  "Chiropractic care in Saint Louis Park since 1999 — Highway 100 and Excelsior Boulevard, near Methodist Hospital and the West End.";

test("legacy global fields do not change the designed shell", () => {
  const shell = shellFromGlobals({
    header: { tagline: "Imported header tagline", navNote: "editor note" },
    footer: { blurb: legacyBlurb },
    settings: {
      defaultMetaTitle: "Imported title",
      defaultMetaDescription: "Imported description that is much longer than the designed footer.",
      tagline: "",
      description: "",
    },
  });
  assert.equal(shell.footer.blurb, defaultShell.footer.blurb);
  assert.equal(shell.tagline, defaultShell.tagline);
  assert.equal(shell.description, defaultShell.description);
  assert.equal(shell.phone, defaultShell.phone);
});

test("a new designed footer field replaces only the visible sentence", () => {
  const shell = shellFromGlobals({
    footer: { blurb: legacyBlurb, designedBlurb: defaultShell.footer.blurb },
  });
  assert.equal(shell.footer.blurb, "Chiropractic care in Saint Louis Park since 1999.");
});

test("paths that are not live routes stay out of the catch-all", () => {
  assert.equal(isLivePublicPath("/about"), true);
  assert.equal(isLivePublicPath("/areas-we-serve/hopkins"), true);
  assert.equal(isLivePublicPath("/about-us"), false);
  assert.equal(isLivePublicPath("/services/cryotherapy"), false);
  assert.equal(isLivePublicPath("/old-wordpress-page"), false);
});
