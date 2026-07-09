export type SpeakerTier = 'committed' | 'in-discussion' | 'target';

export interface SpeakerSocial {
  platform: string;
  count: string;
}

export interface Speaker {
  slug: string;
  name: string;
  tier: SpeakerTier;
  role: string;
  bio: string;
  imageLabel: string;
  imageSrc?: string;
  socials: SpeakerSocial[];
  reach: string;
  pillar?: 'human' | 'artificial' | 'divine';
}

/** Full-profile speakers (committed + in discussion) */
export const FEATURED_SPEAKERS: Speaker[] = [
  {
    slug: 'daniel-priestley',
    name: 'Daniel Priestley',
    tier: 'committed',
    role: 'Entrepreneur · Author · Co-founder, Dent Global and ScoreApp',
    bio: 'Author of Key Person of Influence, Oversubscribed, 24 Assets and Entrepreneur Revolution. Built multi-million-dollar businesses across the UK, USA, Singapore and Australia. A repeat guest on The Diary of a CEO, where his episodes rank among the most-watched business conversations ever published.',
    imageLabel: 'Daniel Priestley portrait',
    socials: [
      { platform: 'Instagram', count: '134K+' },
      { platform: 'LinkedIn', count: '78K+' },
      { platform: 'X', count: '56K+' },
      { platform: 'YouTube', count: '100K+' },
    ],
    reach: '370K+',
    pillar: 'artificial',
  },
  {
    slug: 'dan-koe',
    name: 'Dan Koe',
    tier: 'in-discussion',
    role: 'Writer · Creator · Author of The Art of Focus · Founder, Kortex',
    bio: 'One of the defining voices of the one-person-business era. Built a multi-million-dollar solo business teaching creators how to turn ideas, writing and AI leverage into income. Holds the record for one of the most-viewed articles ever posted on X, at 150M+ views.',
    imageLabel: 'Dan Koe portrait',
    socials: [
      { platform: 'X', count: '2M+' },
      { platform: 'YouTube', count: '1.4M' },
      { platform: 'Instagram', count: '1M+' },
      { platform: 'Newsletter', count: '200K+' },
    ],
    reach: '4.6M+',
    pillar: 'artificial',
  },
  {
    slug: 'tom-noske',
    name: 'Tom Noske',
    tier: 'in-discussion',
    role: 'Filmmaker · Creator educator · Founder, Time to Build',
    bio: 'Australian filmmaker and one of the most-watched voices on creativity and personal branding. Through Time to Build, now past its 10th cohort, Tom has taught thousands of creators to turn their craft into a business.',
    imageLabel: 'Tom Noske portrait',
    socials: [
      { platform: 'Instagram', count: 'TBC' },
      { platform: 'YouTube', count: '50K+' },
      { platform: 'X', count: 'TBC' },
      { platform: 'TikTok', count: 'TBC' },
    ],
    reach: 'TBC',
    pillar: 'human',
  },
];

/** Target speakers — names only, no James Smith */
export interface TargetSpeaker {
  name: string;
  slug: string;
  pillar: 'human' | 'artificial' | 'divine';
  note?: string;
}

export const TARGET_SPEAKERS: TargetSpeaker[] = [
  { name: 'Ali Abdaal', slug: 'ali-abdaal', pillar: 'artificial', note: 'Productivity · YouTube · Creator' },
  { name: 'Alex Hormozi', slug: 'alex-hormozi', pillar: 'artificial', note: 'Acquisition.com · Scaling' },
  { name: 'Codie Sanchez', slug: 'codie-sanchez', pillar: 'artificial', note: 'Contrarian Thinking · Investing' },
  { name: 'Naval Ravikant', slug: 'naval-ravikant', pillar: 'divine', note: 'Philosophy · Startups · AngelList' },
  { name: 'Nathan Barry', slug: 'nathan-barry', pillar: 'human', note: 'ConvertKit · Creator economy' },
  { name: 'Sahil Bloom', slug: 'sahil-bloom', pillar: 'human', note: 'Curiosity · Creator · Investor' },
  { name: 'Justin Welsh', slug: 'justin-welsh', pillar: 'human', note: 'Solopreneur · LinkedIn' },
  { name: 'Chris Do', slug: 'chris-do', pillar: 'human', note: 'The Futur · Design · Brand' },
  { name: 'Marie Forleo', slug: 'marie-forleo', pillar: 'human', note: 'B-School · Entrepreneurship' },
  { name: 'Natalie Ellis', slug: 'natalie-ellis', pillar: 'human', note: 'BossBabe · Female founders' },
  { name: 'Steven Bartlett', slug: 'steven-bartlett', pillar: 'artificial', note: 'Diary of a CEO · Media' },
  { name: 'Vishen Lakhiani', slug: 'vishen-lakhiani', pillar: 'divine', note: 'Mindvalley · Consciousness' },
  { name: 'Matt Gray', slug: 'matt-gray', pillar: 'artificial', note: 'Founder OS · Systems' },
  { name: 'Greg Isenberg', slug: 'greg-isenberg', pillar: 'artificial', note: 'Startup ideas · Community' },
  { name: 'Pieter Levels', slug: 'pieter-levels', pillar: 'artificial', note: 'Indie hacker · Nomad List' },
];

export const COMMITTED_SPEAKERS = FEATURED_SPEAKERS.filter((s) => s.tier === 'committed');
export const IN_DISCUSSION_SPEAKERS = FEATURED_SPEAKERS.filter((s) => s.tier === 'in-discussion');

/** @deprecated use FEATURED_SPEAKERS */
export const SPEAKERS = FEATURED_SPEAKERS;
