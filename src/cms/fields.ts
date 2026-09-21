import type { Field, Where } from "payload";

export const emptyToNull = (value: unknown) =>
  value === "" || value === undefined ? null : value;

export const uniqueOptionalText = (name: string, label: string): Field => ({
  name,
  label,
  type: "text",
  unique: true,
  index: true,
  admin: { position: "sidebar" },
  hooks: {
    beforeValidate: [({ value }) => emptyToNull(value)],
  },
});

export const versionsDrafts = {
  drafts: { schedulePublish: true },
  maxPerDoc: 50,
} as const;

export const authenticated = ({ req: { user } }: { req: { user?: unknown } }) =>
  Boolean(user);

export const authenticatedOrPublished = ({
  req: { user },
}: {
  req: { user?: unknown };
}): boolean | Where => {
  if (user) return true;
  return { _status: { equals: "published" } };
};
