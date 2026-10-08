import type { BlogBlock, InlineSpan } from "@/lib/blog";

import { mediaPublicUrl } from "./mediaUrl";

type LexicalNode = {
  type?: string;
  tag?: string;
  text?: string;
  format?: number | string;
  listType?: string;
  children?: LexicalNode[];
  fields?: {
    url?: string;
    newTab?: boolean;
    doc?: {
      value?: { path?: string; slug?: string } | number | string;
    };
  };
  value?: unknown;
};

const IS_BOLD = 1;
const IS_ITALIC = 2;

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object";
}

function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

function linkFrom(node: LexicalNode): { href: string; external: boolean } | null {
  const fields = node.fields;
  if (!fields) return null;
  if (typeof fields.url === "string" && fields.url.trim()) {
    const href = fields.url.trim();
    return {
      href,
      external: fields.newTab === true || /^https?:\/\//.test(href),
    };
  }
  const doc = fields.doc?.value;
  if (doc && typeof doc === "object") {
    if (typeof doc.path === "string" && doc.path.startsWith("/")) {
      return { href: doc.path, external: false };
    }
    if (typeof doc.slug === "string" && doc.slug.trim()) {
      return { href: `/${doc.slug.replace(/^\/+|\/+$/g, "")}`, external: false };
    }
  }
  return null;
}

function spansFrom(
  nodes: LexicalNode[] | undefined,
  inherited?: Pick<InlineSpan, "href" | "external" | "bold" | "italic">,
): InlineSpan[] {
  const spans: InlineSpan[] = [];
  for (const node of nodes ?? []) {
    if (node.type === "linebreak") {
      spans.push({ text: "\n", ...inherited });
      continue;
    }
    if (node.type === "text" && typeof node.text === "string" && node.text) {
      const format = typeof node.format === "number" ? node.format : 0;
      spans.push({
        text: node.text,
        href: inherited?.href,
        external: inherited?.external,
        bold: Boolean(inherited?.bold || format & IS_BOLD),
        italic: Boolean(inherited?.italic || format & IS_ITALIC),
      });
      continue;
    }
    if (node.type === "link" || node.type === "autolink") {
      const link = linkFrom(node);
      spans.push(
        ...spansFrom(node.children, {
          href: link?.href ?? inherited?.href,
          external: link?.external ?? inherited?.external,
          bold: inherited?.bold,
          italic: inherited?.italic,
        }),
      );
      continue;
    }
    if (node.type === "upload") continue;
    if (node.children?.length) spans.push(...spansFrom(node.children, inherited));
  }
  return spans;
}

function plain(spans: InlineSpan[]): string {
  return spans.map((span) => span.text).join("");
}

function pushImage(blocks: BlogBlock[], value: unknown) {
  const media = mediaPublicUrl(value);
  if (!media) return;
  blocks.push({
    type: "image",
    src: media.url,
    alt: media.alt || "Article image",
    width: media.width,
    height: media.height,
  });
}

function uniqueId(text: string, used: Set<string>): string {
  const base = slugify(text);
  let id = base;
  let n = 2;
  while (used.has(id)) id = `${base}-${n++}`;
  used.add(id);
  return id;
}

export function lexicalToBlocks(content: unknown): BlogBlock[] {
  if (!isRecord(content) || !isRecord(content.root) || !Array.isArray(content.root.children)) {
    return [];
  }

  const blocks: BlogBlock[] = [];
  const used = new Set<string>();

  const walk = (nodes: LexicalNode[]) => {
    for (const node of nodes) {
      if (node.type === "upload") {
        pushImage(blocks, node.value);
        continue;
      }

      if (node.type === "heading") {
        const text = plain(spansFrom(node.children)).trim();
        if (!text) continue;
        const id = uniqueId(text, used);
        if (node.tag === "h3" || node.tag === "h4" || node.tag === "h5" || node.tag === "h6") {
          blocks.push({ type: "h3", text, id });
        } else {
          blocks.push({ type: "h2", text, id });
        }
        continue;
      }

      if (node.type === "quote") {
        const text = plain(spansFrom(node.children)).trim();
        if (text) blocks.push({ type: "quote", text });
        continue;
      }

      if (node.type === "list") {
        const items = (node.children ?? [])
          .map((item) => plain(spansFrom(item.children)).replace(/\s+/g, " ").trim())
          .filter(Boolean);
        if (!items.length) continue;
        blocks.push(node.listType === "number" ? { type: "ol", items } : { type: "ul", items });
        continue;
      }

      if (node.type === "paragraph") {
        for (const child of node.children ?? []) {
          if (child.type === "upload") pushImage(blocks, child.value);
        }
        const spans = spansFrom(node.children);
        const text = plain(spans).trim();
        if (!text) continue;
        const styled = spans.some((span) => span.href || span.bold || span.italic);
        blocks.push(styled ? { type: "p", text, spans } : { type: "p", text });
        continue;
      }

      if (node.children?.length && node.type !== "listitem") walk(node.children);
    }
  };

  walk(content.root.children as LexicalNode[]);
  return blocks;
}
