import { blogPosts } from '@/lib/blogPosts'

import { DEFAULT_COVER } from './config'

export type CoverAsset = {
  src: string
  alt: string
  keywords: string[]
}

/**
 * Extra covers that are not already assigned to a hand-written local post.
 * Ranked posts pick from this pool so they never share og-default.jpg.
 */
const COVER_POOL: CoverAsset[] = [
  {
    src: '/images/pain-relief.jpg',
    alt: 'Person holding their neck and lower back, showing areas of spinal pain.',
    keywords: ['pain', 'relief', 'neck', 'back', 'stiffness', 'ache', 'clue', 'sign'],
  },
  {
    src: '/images/therapeutic-exercise.jpg',
    alt: 'Patient guided through resistance-band therapeutic exercise in clinic.',
    keywords: ['exercise', 'rehab', 'therapy', 'mobility', 'senior', 'aging', 'strength'],
  },
  {
    src: '/images/sports-injuries.jpg',
    alt: 'Soccer player on the field holding a painful knee after a sports injury.',
    keywords: ['sport', 'athlete', 'knee', 'soccer', 'performance', 'game'],
  },
  {
    src: '/images/auto-injury.jpg',
    alt: 'Driver holding their neck after a car accident, suggesting whiplash.',
    keywords: ['auto', 'accident', 'car', 'whiplash', 'collision', 'crash', 'injury'],
  },
  {
    src: '/images/3d-spine-simulator.jpg',
    alt: 'Color-coded anatomical model of the human spine.',
    keywords: ['spine', 'anatomy', 'disc', 'vertebra', 'lumbar', 'cervical'],
  },
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80',
    alt: 'Person stretching on a yoga mat to restore mobility.',
    keywords: ['stretch', 'mobility', 'yoga', 'flexibility', 'morning'],
  },
  {
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Woman holding a calm yoga pose for whole-body wellness.',
    keywords: ['holistic', 'yoga', 'wellness', 'mind', 'balance', 'whole-body'],
  },
  {
    src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1600&q=80',
    alt: 'Runners in motion on an outdoor path.',
    keywords: ['run', 'endurance', 'athlete', 'training', 'cardio'],
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80',
    alt: 'Massage therapy supporting muscle recovery.',
    keywords: ['massage', 'soft-tissue', 'muscle', 'recovery', 'relax'],
  },
  {
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80',
    alt: 'Fresh whole foods supporting functional nutrition.',
    keywords: ['nutrition', 'food', 'diet', 'functional', 'gut', 'vitamin'],
  },
  {
    src: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1600&q=80',
    alt: 'Quiet bedroom showing the role of sleep in recovery.',
    keywords: ['sleep', 'rest', 'insomnia', 'fatigue', 'recover'],
  },
  {
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80',
    alt: 'Hikers on a mountain trail, representing healthy movement outdoors.',
    keywords: ['hike', 'outdoor', 'walk', 'movement', 'active'],
  },
  {
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80',
    alt: 'Person meditating at sunrise for nervous-system calm.',
    keywords: ['stress', 'meditat', 'nervous', 'calm', 'mindful', 'anxiety'],
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Clinician consulting with a patient about a care plan.',
    keywords: ['visit', 'consult', 'appointment', 'exam', 'plan', 'first-visit'],
  },
]

function hashSlug(slug: string): number {
  let h = 2166136261
  for (let i = 0; i < slug.length; i += 1) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/['']/g, '').replace(/[^a-z0-9]+/g, ' ')
}

/** Cover URLs already used by local articles, plus known duplicate photos. */
export function reservedCoverUrls(): Set<string> {
  const taken = new Set<string>([DEFAULT_COVER, '/images/adjustment-1.jpg'])
  for (const post of blogPosts) taken.add(post.coverImage)
  return taken
}

const COMMITTED_COVER_ALTS: Record<string, string> = {
  'beyond-back-pain-relief-with-a-chiropractor-in-minneapolis':
    'Person walking with easy upright posture on a park path, showing relief beyond back pain.',
  'choosing-a-holistic-chiropractor-in-minneapolis-for-whole-body-healing':
    'Holistic wellness still life with a spine model, fresh food, tea, and a yoga mat.',
  'everyday-clues-you-need-chiropractic-care-in-saint-louis-park':
    'Person at a home desk rubbing their neck after computer work, an everyday sign of spinal strain.',
  'winter-spine-strain-triggers-in-saint-louis-park-and-how-chiropractors-help':
    'Person shoveling heavy snow on an icy driveway, one hand pressed into a painful lower back, with a snow-covered car nearby.',
}

export function rankedCoverAlt(slug: string, title: string): string {
  return COMMITTED_COVER_ALTS[slug] ?? `${title} cover`
}

export function pickUniqueCover(
  title: string,
  slug: string,
  taken: Set<string>,
): CoverAsset {
  const hay = normalize(`${title} ${slug}`)
  const available = COVER_POOL.filter((asset) => !taken.has(asset.src))
  if (available.length === 0) {
    return {
      src: DEFAULT_COVER,
      alt: title,
      keywords: [],
    }
  }

  const scored = available.map((asset) => ({
    asset,
    score: asset.keywords.reduce((n, keyword) => n + (hay.includes(keyword) ? 1 : 0), 0),
  }))
  scored.sort((a, b) => b.score - a.score || a.asset.src.localeCompare(b.asset.src))
  const best = scored[0].score
  const top = best > 0 ? scored.filter((row) => row.score === best) : scored
  return top[hashSlug(slug) % top.length].asset
}
