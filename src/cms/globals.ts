import type { GlobalConfig } from "payload";

import { authenticated } from "./fields";

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: "tagline",
      type: "text",
    },
    {
      name: "navNote",
      type: "textarea",
      admin: {
        description:
          "Does not replace the designed header. Stored for editors only until a designed overlay is reviewed.",
      },
    },
  ],
};

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: "blurb",
      type: "textarea",
    },
  ],
};

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: "defaultMetaTitle",
      type: "text",
    },
    {
      name: "defaultMetaDescription",
      type: "textarea",
    },
  ],
};
