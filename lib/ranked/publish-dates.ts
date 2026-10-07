import { slugFromTitle } from './html-to-post'

/**
 * Ranked content-calendar dates. Match by slug prefix or exact title.
 */
const CANONICAL_DATES: { date: string; prefixes: string[]; titles: string[] }[] = [
  {
    date: '2026-10-13',
    prefixes: ['unlocking-applied-kinesiology'],
    titles: ['Unlocking Applied Kinesiology in Minneapolis Chiropractic Care'],
  },
  {
    date: '2026-10-06',
    prefixes: ['managing-spine-pain-after-a-minor-crash'],
    titles: ['Managing Spine Pain After a Minor Crash with a Minneapolis Chiropractor'],
  },
  {
    date: '2026-09-29',
    prefixes: ['winter-spine-strain-triggers'],
    titles: ['Winter Spine Strain Triggers in Saint Louis Park and How Chiropractors Help'],
  },
  {
    date: '2026-09-22',
    prefixes: [
      'spine-pain-red-flags',
      'spine-pain-warning-signs-and-care-options-in-minneapolis',
    ],
    titles: ['Spine Pain Red Flags: Chiropractor vs. Urgent Care in Minneapolis'],
  },
  {
    date: '2026-09-15',
    prefixes: ['life-stages-and-spine-health', 'spine-health-tips-for-every-age-and-life-stage'],
    titles: ['Life Stages and Spine Health with a Saint Louis Park Chiropractor'],
  },
  {
    date: '2026-09-08',
    prefixes: ['spine-pain-vs-muscle-strain'],
    titles: ['Spine Pain vs. Muscle Strain: A Minneapolis Chiropractor Explains Imaging'],
  },
  {
    date: '2026-09-01',
    prefixes: ['choosing-a-holistic-chiropractor-in-minneapolis'],
    titles: ['Choosing a Holistic Chiropractor in Minneapolis for Whole-Body Healing'],
  },
  {
    date: '2026-08-25',
    prefixes: ['beyond-back-pain-relief-with-a-chiropractor-in-minneapolis'],
    titles: ['Beyond Back Pain Relief with a Chiropractor in Minneapolis'],
  },
]

function normalizeTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function canonicalPublishDate(title: string, slug = ''): string | null {
  const titleSlug = slugFromTitle(title)
  const haystacks = [titleSlug, slug].filter(Boolean)
  const normalized = normalizeTitle(title)

  for (const row of CANONICAL_DATES) {
    if (row.titles.some((t) => normalizeTitle(t) === normalized)) return row.date
    if (
      haystacks.some((value) =>
        row.prefixes.some((prefix) => value === prefix || value.startsWith(`${prefix}-`)),
      )
    ) {
      return row.date
    }
  }
  return null
}
