import { BlobNotFoundError, head, put } from '@vercel/blob'
import { COMMITTED_COVER_SLUGS, coverPrompt } from './config'
import { pickUniqueCover } from './unique-covers'

function coverPathname(contentId: string): string {
  return `blog-covers/${contentId}.png`
}

export function committedCoverUrl(slug?: string): string | null {
  if (!slug) return null
  return COMMITTED_COVER_SLUGS.includes(slug) ? `/images/blog/covers/${slug}.png` : null
}

function imageModels(): string[] {
  const preferred = process.env.OPENAI_IMAGE_MODEL?.trim()
  const models = [preferred, 'gpt-image-2', 'gpt-image-1'].filter((m): m is string => Boolean(m))
  return [...new Set(models)]
}

async function existingBlobUrl(contentId: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  try {
    const meta = await head(coverPathname(contentId))
    return meta.url
  } catch (err) {
    if (err instanceof BlobNotFoundError) return null
    return null
  }
}

async function generatePng(title: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error('[ranked] OPENAI_API_KEY is not set; skipping AI cover')
    return null
  }
  const prompt = coverPrompt(title)
  let lastError = ''
  for (const model of imageModels()) {
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        prompt,
        size: '1536x1024',
        quality: 'medium',
        n: 1,
      }),
    })
    const text = await res.text()
    if (!res.ok) {
      lastError = `${model} ${res.status}: ${text.slice(0, 240)}`
      console.error(`[ranked] OpenAI image failed: ${lastError}`)
      continue
    }
    const json = JSON.parse(text) as { data?: Array<{ url?: string; b64_json?: string }> }
    const row = json.data?.[0]
    if (row?.b64_json) return Buffer.from(row.b64_json, 'base64')
    if (row?.url) {
      const img = await fetch(row.url)
      if (!img.ok) {
        lastError = `${model} image download ${img.status}`
        continue
      }
      return Buffer.from(await img.arrayBuffer())
    }
    lastError = `${model} returned no image payload`
  }
  console.error(`[ranked] OpenAI cover generation exhausted: ${lastError}`)
  return null
}

async function persistPng(contentId: string, png: Buffer): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null
  const blob = await put(coverPathname(contentId), png, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'image/png',
  })
  return blob.url
}

export async function getRankedCoverImage(input: {
  contentId: string
  title: string
  generate: boolean
  slug?: string
  taken?: Set<string>
}): Promise<string> {
  const taken = input.taken ?? new Set<string>()
  const committed = committedCoverUrl(input.slug)
  if (committed) return committed
  const cached = await existingBlobUrl(input.contentId)
  if (cached && !taken.has(cached)) return cached
  if (input.generate) {
    try {
      const png = await generatePng(input.title)
      if (png) {
        const stored = await persistPng(input.contentId, png)
        if (stored && !taken.has(stored)) return stored
      }
    } catch (err) {
      console.error(`[ranked] cover failed for ${input.contentId}`, err)
    }
  }
  return pickUniqueCover(input.title, input.slug ?? input.contentId, taken).src
}
