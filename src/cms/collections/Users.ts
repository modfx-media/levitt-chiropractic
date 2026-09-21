import type { CollectionConfig } from "payload";

import { authenticated } from "../fields";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "name"],
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
};
