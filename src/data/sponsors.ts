export interface SponsorBenefit {
  title: string;
  description: string;
}

export const SPONSOR_BENEFITS: SponsorBenefit[] = [
  {
    title: 'Concentrated audience',
    description: '1,000+ paying, high-intent entrepreneurs. Not free-ticket browsers.',
  },
  {
    title: 'Premium association',
    description: 'Your brand alongside Daniel Priestley and world-class speakers.',
  },
  {
    title: 'Full lead capture',
    description: 'Qualified attendee data: name, email, company, role.',
  },
  {
    title: 'Regional positioning',
    description: 'Plant your flag across Pan-Asia, Middle East, and ANZ.',
  },
  {
    title: 'Creator economy boom',
    description: '$250B market (2024), projected $500B by 2027.',
  },
  {
    title: 'Deep engagement',
    description: 'Workshop format means longer dwell time and deeper brand interaction.',
  },
];

export interface PartnerCategory {
  pillar: 'human' | 'artificial' | 'divine';
  label: string;
  title: string;
  brands: string[];
}

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    pillar: 'human',
    label: 'Human',
    title: 'Wellness, music, sports and creator support',
    brands: [
      'Kit', 'Circle', 'Kajabi', 'Teachable', 'Gumroad', 'Stan Store', 'Skool', 'Canva',
      'Spotify', 'YouTube', 'Substack', 'Medium',
      'AG1', 'WHOOP', 'Oura Ring', 'Lululemon', 'Gymshark',
      'Garuda Indonesia', 'Singapore Airlines', 'Scoot', 'AirAsia', 'Emirates',
      'Dojo Bali', 'Hubud', 'Outpost', 'The Meru Hotel',
    ],
  },
  {
    pillar: 'artificial',
    label: 'Artificial',
    title: 'Tech, AI and automation',
    brands: [
      'Anthropic', 'OpenAI', 'Nvidia', 'Jasper', 'Descript', 'Runway', 'ElevenLabs',
      'GoHighLevel', 'ScoreApp', 'Notion', 'Coda', 'HubSpot', 'Monday.com', 'Airtable', 'Zapier',
      'Stripe', 'Wise', 'Mercury', 'Paddle', 'Shopify',
      'Lemon Squeezy',
    ],
  },
  {
    pillar: 'divine',
    label: 'Divine',
    title: 'Spirit, faith and conscious living',
    brands: [
      'Mindvalley', 'Calm', 'Headspace', 'Wim Hof Method',
      'Alo Yoga', 'Four Sigmatic', 'Organifi',
      'Retreat operators', 'Meditation apps', 'Spiritual wellness brands',
    ],
  },
];
