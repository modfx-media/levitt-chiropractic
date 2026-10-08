import type { CollectionConfig } from "payload";

import { authenticated } from "../fields";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      hooks: {
        beforeValidate: [
          ({ value, data, req }) => {
            if (typeof value === "string" && value.trim()) return value.trim();
            const record = (data ?? {}) as { filename?: unknown };
            const file = req.file as { name?: string; filename?: string } | undefined;
            const filename =
              (typeof record.filename === "string" && record.filename) ||
              file?.filename ||
              file?.name ||
              "";
            const base = filename
              .replace(/\.[^.]+$/, "")
              .replace(/[-_]+/g, " ")
              .trim();
            return base || "Article image";
          },
        ],
      },
    },
  ],
  upload: {
    mimeTypes: ["image/*"],
  },
};
