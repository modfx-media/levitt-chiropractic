import type { BlogBlock, BlogPost } from "./blog";

/**
 * The practice no longer offers personal/auto injury care, so CMS and Ranked
 * post text is reworded at render time. Specific phrases come first; the
 * word-level fallbacks catch anything new an editor adds later.
 */
const PHRASES: Array<[RegExp, string]> = [
  [/a car accident, sports fall, or whiplash-type injury/gi, "a fall or a hard hit to the head"],
  [/a fall, car accident, or sports injury/gi, "a fall or hard impact"],
  [/like a car accident or major fall/gi, "like a major fall"],
  [/Ice Slip Injuries and Hidden Spinal Trauma/g, "Ice Slips and Hidden Spinal Strain"],
  [/old sports injuries, or previous auto accidents/gi, "old sports strains, or past falls"],
  [/tension around injuries/gi, "tension around strained areas"],
  [/issues like whiplash,/gi, "issues like neck strain,"],
];

const WORDS: Array<[RegExp, string]> = [
  [/\b(car|auto|motor vehicle) accidents\b/gi, "falls"],
  [/\b(car|auto|motor vehicle) accident\b/gi, "fall"],
  [/\bwhiplash(-type)?\b/gi, "neck strain"],
  [/\binjuries\b/gi, "strains"],
  [/\binjury\b/gi, "strain"],
  [/\binjured\b/gi, "hurt"],
];

function matchCase(source: string, replacement: string): string {
  if (source === source.toUpperCase() && /[A-Z]/.test(source)) return replacement.toUpperCase();
  if (source[0] === source[0].toUpperCase() && /[A-Z]/.test(source[0])) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

export function scrubText(text: string): string {
  let out = text;
  for (const [pattern, replacement] of PHRASES) out = out.replace(pattern, replacement);
  for (const [pattern, replacement] of WORDS) {
    out = out.replace(pattern, (match) => matchCase(match, replacement));
  }
  return out;
}

function scrubId(id: string | undefined): string | undefined {
  return id?.replace(/injuries/g, "strains").replace(/injury/g, "strain");
}

function scrubBlock(block: BlogBlock): BlogBlock {
  switch (block.type) {
    case "p":
      return {
        ...block,
        text: scrubText(block.text),
        spans: block.spans?.map((span) => ({ ...span, text: scrubText(span.text) })),
      };
    case "h2":
    case "h3":
      return { ...block, text: scrubText(block.text), id: scrubId(block.id) };
    case "ul":
    case "ol":
      return { ...block, items: block.items.map(scrubText) };
    case "quote":
      return { ...block, text: scrubText(block.text) };
    case "callout":
      return {
        ...block,
        title: block.title ? scrubText(block.title) : block.title,
        text: scrubText(block.text),
      };
    case "image":
      return { ...block, alt: scrubText(block.alt) };
    case "cta":
      return {
        ...block,
        title: scrubText(block.title),
        segments: block.segments.map((segment) => ({ ...segment, text: scrubText(segment.text) })),
      };
  }
}

export function scrubBlogPost(post: BlogPost): BlogPost {
  return {
    ...post,
    title: scrubText(post.title),
    description: scrubText(post.description),
    excerpt: scrubText(post.excerpt),
    coverAlt: scrubText(post.coverAlt),
    tags: post.tags.map(scrubText),
    blocks: post.blocks.map(scrubBlock),
    faqs: post.faqs?.map((faq) => ({ q: scrubText(faq.q), a: scrubText(faq.a) })),
  };
}
