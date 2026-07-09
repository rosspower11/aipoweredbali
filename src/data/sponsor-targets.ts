export type SponsorPillar = 'human' | 'artificial' | 'divine';

export interface SponsorTarget {
  name: string;
  slug: string;
  domain: string;
  pillar: SponsorPillar;
}

/** Curated target sponsors — logos via Clearbit (domain-based) */
export const SPONSOR_TARGETS: SponsorTarget[] = [
  // Artificial — headline tech & tools
  { name: 'Anthropic', slug: 'anthropic', domain: 'anthropic.com', pillar: 'artificial' },
  { name: 'OpenAI', slug: 'openai', domain: 'openai.com', pillar: 'artificial' },
  { name: 'Nvidia', slug: 'nvidia', domain: 'nvidia.com', pillar: 'artificial' },
  { name: 'GoHighLevel', slug: 'gohighlevel', domain: 'gohighlevel.com', pillar: 'artificial' },
  { name: 'Notion', slug: 'notion', domain: 'notion.so', pillar: 'artificial' },
  { name: 'HubSpot', slug: 'hubspot', domain: 'hubspot.com', pillar: 'artificial' },
  { name: 'Stripe', slug: 'stripe', domain: 'stripe.com', pillar: 'artificial' },
  { name: 'Shopify', slug: 'shopify', domain: 'shopify.com', pillar: 'artificial' },
  { name: 'Zapier', slug: 'zapier', domain: 'zapier.com', pillar: 'artificial' },
  { name: 'ElevenLabs', slug: 'elevenlabs', domain: 'elevenlabs.io', pillar: 'artificial' },
  { name: 'Runway', slug: 'runway', domain: 'runwayml.com', pillar: 'artificial' },
  { name: 'Descript', slug: 'descript', domain: 'descript.com', pillar: 'artificial' },
  { name: 'ScoreApp', slug: 'scoreapp', domain: 'scoreapp.com', pillar: 'artificial' },
  { name: 'Airtable', slug: 'airtable', domain: 'airtable.com', pillar: 'artificial' },
  { name: 'Monday.com', slug: 'monday', domain: 'monday.com', pillar: 'artificial' },
  // Human — creator economy & lifestyle
  { name: 'Canva', slug: 'canva', domain: 'canva.com', pillar: 'human' },
  { name: 'Kajabi', slug: 'kajabi', domain: 'kajabi.com', pillar: 'human' },
  { name: 'Circle', slug: 'circle', domain: 'circle.so', pillar: 'human' },
  { name: 'Skool', slug: 'skool', domain: 'skool.com', pillar: 'human' },
  { name: 'Substack', slug: 'substack', domain: 'substack.com', pillar: 'human' },
  { name: 'Spotify', slug: 'spotify', domain: 'spotify.com', pillar: 'human' },
  { name: 'WHOOP', slug: 'whoop', domain: 'whoop.com', pillar: 'human' },
  { name: 'Oura', slug: 'oura', domain: 'ouraring.com', pillar: 'human' },
  { name: 'Lululemon', slug: 'lululemon', domain: 'lululemon.com', pillar: 'human' },
  { name: 'Gymshark', slug: 'gymshark', domain: 'gymshark.com', pillar: 'human' },
  { name: 'Singapore Airlines', slug: 'singapore-airlines', domain: 'singaporeair.com', pillar: 'human' },
  { name: 'Emirates', slug: 'emirates', domain: 'emirates.com', pillar: 'human' },
  // Divine — wellness & consciousness
  { name: 'Mindvalley', slug: 'mindvalley', domain: 'mindvalley.com', pillar: 'divine' },
  { name: 'Calm', slug: 'calm', domain: 'calm.com', pillar: 'divine' },
  { name: 'Headspace', slug: 'headspace', domain: 'headspace.com', pillar: 'divine' },
  { name: 'Alo Yoga', slug: 'alo-yoga', domain: 'aloyoga.com', pillar: 'divine' },
];

export function sponsorLogoUrl(domain: string): string {
  return `https://logo.clearbit.com/${domain}`;
}
