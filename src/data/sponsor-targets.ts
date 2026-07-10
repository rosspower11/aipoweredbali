export type SponsorPillar = 'human' | 'artificial' | 'divine';

export interface SponsorTarget {
  name: string;
  slug: string;
  pillar: SponsorPillar;
}

/** Curated target sponsors shown in the homepage marquee */
export const SPONSOR_TARGETS: SponsorTarget[] = [
  // Artificial — headline tech & tools
  { name: 'Anthropic', slug: 'anthropic', pillar: 'artificial' },
  { name: 'OpenAI', slug: 'openai', pillar: 'artificial' },
  { name: 'Nvidia', slug: 'nvidia', pillar: 'artificial' },
  { name: 'GoHighLevel', slug: 'gohighlevel', pillar: 'artificial' },
  { name: 'Notion', slug: 'notion', pillar: 'artificial' },
  { name: 'HubSpot', slug: 'hubspot', pillar: 'artificial' },
  { name: 'Stripe', slug: 'stripe', pillar: 'artificial' },
  { name: 'Shopify', slug: 'shopify', pillar: 'artificial' },
  { name: 'Zapier', slug: 'zapier', pillar: 'artificial' },
  { name: 'ElevenLabs', slug: 'elevenlabs', pillar: 'artificial' },
  { name: 'Runway', slug: 'runway', pillar: 'artificial' },
  { name: 'Descript', slug: 'descript', pillar: 'artificial' },
  { name: 'ScoreApp', slug: 'scoreapp', pillar: 'artificial' },
  { name: 'Airtable', slug: 'airtable', pillar: 'artificial' },
  { name: 'Monday.com', slug: 'monday', pillar: 'artificial' },
  // Human — creator economy & lifestyle
  { name: 'Canva', slug: 'canva', pillar: 'human' },
  { name: 'Kajabi', slug: 'kajabi', pillar: 'human' },
  { name: 'Circle', slug: 'circle', pillar: 'human' },
  { name: 'Skool', slug: 'skool', pillar: 'human' },
  { name: 'Substack', slug: 'substack', pillar: 'human' },
  { name: 'Spotify', slug: 'spotify', pillar: 'human' },
  { name: 'WHOOP', slug: 'whoop', pillar: 'human' },
  { name: 'Oura Ring', slug: 'oura', pillar: 'human' },
  { name: 'Lululemon', slug: 'lululemon', pillar: 'human' },
  { name: 'Gymshark', slug: 'gymshark', pillar: 'human' },
  { name: 'Singapore Airlines', slug: 'singapore-airlines', pillar: 'human' },
  { name: 'Emirates', slug: 'emirates', pillar: 'human' },
  // Divine — wellness & consciousness
  { name: 'Mindvalley', slug: 'mindvalley', pillar: 'divine' },
  { name: 'Calm', slug: 'calm', pillar: 'divine' },
  { name: 'Headspace', slug: 'headspace', pillar: 'divine' },
  { name: 'Alo Yoga', slug: 'alo-yoga', pillar: 'divine' },
];

/** Brand display name → local SVG slug (covers category grids + marquee) */
export const SPONSOR_LOGO_SLUGS: Record<string, string> = {
  Anthropic: 'anthropic',
  OpenAI: 'openai',
  Nvidia: 'nvidia',
  Jasper: 'jasper',
  Descript: 'descript',
  Runway: 'runway',
  ElevenLabs: 'elevenlabs',
  GoHighLevel: 'gohighlevel',
  ScoreApp: 'scoreapp',
  Notion: 'notion',
  Coda: 'coda',
  HubSpot: 'hubspot',
  'Monday.com': 'monday',
  Airtable: 'airtable',
  Zapier: 'zapier',
  Stripe: 'stripe',
  Wise: 'wise',
  Mercury: 'mercury',
  Paddle: 'paddle',
  Shopify: 'shopify',
  'Lemon Squeezy': 'lemon-squeezy',
  Kit: 'kit',
  Circle: 'circle',
  Kajabi: 'kajabi',
  Teachable: 'teachable',
  Gumroad: 'gumroad',
  'Stan Store': 'stan-store',
  Skool: 'skool',
  Canva: 'canva',
  Spotify: 'spotify',
  YouTube: 'youtube',
  Substack: 'substack',
  Medium: 'medium',
  AG1: 'ag1',
  WHOOP: 'whoop',
  Oura: 'oura',
  'Oura Ring': 'oura',
  Lululemon: 'lululemon',
  Gymshark: 'gymshark',
  'Garuda Indonesia': 'garuda-indonesia',
  'Singapore Airlines': 'singapore-airlines',
  Scoot: 'scoot',
  AirAsia: 'airasia',
  Emirates: 'emirates',
  'Dojo Bali': 'dojo-bali',
  Hubud: 'hubud',
  Outpost: 'outpost',
  'The Meru Hotel': 'the-meru-hotel',
  Mindvalley: 'mindvalley',
  Calm: 'calm',
  Headspace: 'headspace',
  'Wim Hof Method': 'wim-hof-method',
  'Alo Yoga': 'alo-yoga',
  'Four Sigmatic': 'four-sigmatic',
  Organifi: 'organifi',
};

export function sponsorLogoUrl(nameOrSlug: string): string | null {
  const slug = SPONSOR_LOGO_SLUGS[nameOrSlug] ?? nameOrSlug;
  if (!slug || slug.includes(' ')) return null;
  return `/logos/sponsors/${slug}.svg`;
}
