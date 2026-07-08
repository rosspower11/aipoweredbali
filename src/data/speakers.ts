export type SpeakerStatus = 'confirmed' | 'in-discussion';

export interface SpeakerSocial {
  platform: string;
  count: string;
}

export interface Speaker {
  slug: string;
  name: string;
  status: SpeakerStatus;
  role: string;
  bio: string;
  imageLabel: string;
  imageSrc?: string;
  socials: SpeakerSocial[];
  reach: string;
}

export const SPEAKERS: Speaker[] = [
  {
    slug: 'daniel-priestley',
    name: 'Daniel Priestley',
    status: 'confirmed',
    role: 'Entrepreneur · 5× best-selling author · Co-founder, Dent Global & ScoreApp',
    bio: 'One of the world\'s most respected voices on entrepreneurship. Author of Key Person of Influence, Oversubscribed, 24 Assets and Entrepreneur Revolution. Has built multi-million-dollar businesses across the UK, USA, Singapore and Australia, and accelerated thousands of founders through Dent. A repeat guest on The Diary of a CEO — one of the world\'s biggest business podcasts — where his episodes rank among the most-watched business conversations ever published.',
    imageLabel: 'Image — Daniel Priestley portrait',
    socials: [
      { platform: 'Instagram', count: '134K+' },
      { platform: 'LinkedIn', count: '78K+' },
      { platform: 'X / Twitter', count: '56K+' },
      { platform: 'YouTube', count: '100K+' },
    ],
    reach: '370K+',
  },
  {
    slug: 'dan-koe',
    name: 'Dan Koe',
    status: 'in-discussion',
    role: 'Writer · Creator · Author of The Art of Focus · Founder, Kortex',
    bio: 'One of the defining voices of the one-person-business era. Dan built a multi-million-dollar solo business teaching creators how to turn ideas, writing and AI leverage into income — and holds the record for one of the most-viewed articles ever posted on X, at 150M+ views. His audience is precisely this event\'s attendee: the builder-creator hybrid.',
    imageLabel: 'Image — Dan Koe portrait',
    socials: [
      { platform: 'X / Twitter', count: '2M+' },
      { platform: 'YouTube', count: '1.4M' },
      { platform: 'Instagram', count: '1M+' },
      { platform: 'Newsletter', count: '200K+' },
    ],
    reach: '4.6M+',
  },
  {
    slug: 'tom-noske',
    name: 'Tom Noske',
    status: 'in-discussion',
    role: 'Filmmaker · Creator educator · Founder, Time to Build',
    bio: 'Australian filmmaker and one of the most-watched voices on creativity and personal branding. Through Time to Build — now past its 10th cohort — Tom has taught thousands of creators to turn their craft into a business. His cinematic storytelling is exactly the standard this event\'s content will be produced to.',
    imageLabel: 'Image — Tom Noske portrait',
    socials: [
      { platform: 'Instagram', count: '—' },
      { platform: 'YouTube', count: '50K+' },
      { platform: 'X / Twitter', count: '—' },
      { platform: 'TikTok', count: '—' },
    ],
    reach: 'TBC',
  },
];

export const MYSTERY_SPEAKER_COUNT = 6;
