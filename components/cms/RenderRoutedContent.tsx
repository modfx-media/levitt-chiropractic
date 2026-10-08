import Link from "next/link";
import type { ComponentProps } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { Button } from "@/components/ui/Button";
import { getRelatedPosts } from "@/lib/blog";
import { cmsDocToBlogPost } from "@/lib/cms/postToBlog";
import type { RoutedDoc } from "@/lib/cms/queries";

type LexicalData = NonNullable<ComponentProps<typeof RichText>["data"]>;

type ContentBlock = {
  blockType?: string;
  body?: unknown;
  heading?: string;
  label?: string;
  href?: string;
};

function isLexical(value: unknown): value is LexicalData {
  return Boolean(value && typeof value === "object" && "root" in value);
}

export function RenderRoutedContent({ doc }: { doc: RoutedDoc }) {
  if (doc.collection === "posts") {
    const post = cmsDocToBlogPost(doc.doc);
    if (!post) return null;
    return <BlogPostContent post={post} related={getRelatedPosts(post, 3)} />;
  }

  const title = typeof doc.doc.title === "string" ? doc.doc.title : "";
  const layout = Array.isArray(doc.doc.layout)
    ? (doc.doc.layout as ContentBlock[])
    : [];

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-dark sm:text-5xl">
        {title}
      </h1>
      <div className="mt-10 space-y-12">
        {layout.map((block, index) => {
          if (block.blockType === "cta") {
            return (
              <section
                key={index}
                className="rounded-3xl bg-dark px-8 py-10 text-white"
              >
                {block.heading ? (
                  <h2 className="font-heading text-2xl font-bold">
                    {block.heading}
                  </h2>
                ) : null}
                {typeof block.body === "string" && block.body ? (
                  <p className="mt-3 text-white/75">{block.body}</p>
                ) : null}
                {block.href && block.label ? (
                  <div className="mt-6">
                    <Button href={block.href} variant="primary">
                      {block.label}
                    </Button>
                  </div>
                ) : null}
              </section>
            );
          }
          if (block.blockType === "content" && isLexical(block.body)) {
            return (
              <div key={index} className="prose prose-slate max-w-none">
                <RichText data={block.body} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}

export function CMSFallbackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-primary">
      {label}
    </Link>
  );
}
