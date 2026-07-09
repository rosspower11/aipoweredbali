import { CDN } from './cdn';

const LOC = `${CDN}/balievents-locations`;

export const BALI_HERO = `${LOC}/bali-landscape-1.jpg`;
export const BALI_MOUNTAINS = `${LOC}/bali-mountains.jpg`;
export const BALI_NATURE = `${LOC}/bali-nature-1.jpg`;
export const BALI_SURF = `${LOC}/bali-surf.jpg`;
export const MERU_HOTEL = `${LOC}/meru-hotel-sanur.jpeg`;
export const MERU_HOTEL_2 = `${LOC}/meru-hotel-sanur-2.jpeg`;

const SPONSORS = `${CDN}/balievents-sponsors`;

export const POWERED_BY_LOGOS = {
  highlevel: { src: `${SPONSORS}/high-level-logo.png`, alt: 'HighLevel', name: 'HighLevel' },
  claude: { src: `${SPONSORS}/claude-logo.png`, alt: 'Claude', name: 'Claude' },
} as const;

export const BALI_LOCATION_PHOTOS = [
  { src: BALI_HERO, alt: 'Bali landscape at golden hour' },
  { src: BALI_MOUNTAINS, alt: 'Bali mountains and rice terraces' },
  { src: BALI_NATURE, alt: 'Bali nature and jungle' },
  { src: BALI_SURF, alt: 'Surf and coastline in Bali' },
  { src: MERU_HOTEL, alt: 'The Meru Sanur hotel, Bali' },
  { src: MERU_HOTEL_2, alt: 'The Meru Sanur venue exterior' },
] as const;

export const SPEAKER_IMAGES = {
  'daniel-priestley': `${CDN}/balievents-speakers/daniel-priestley.jpeg`,
  'dan-koe': `${CDN}/balievents-speakers/dan-koe.jpeg`,
  'tom-noske': `${CDN}/balievents-speakers/tom-noske.jpg`,
} as const;

export const ROSS_HEADSHOT = `${CDN}/ross-headshots/${encodeURIComponent('ross promise photo.png')}`;

export const LIVE_WORKSHOP_PHOTOS = [
  'PFER5505.JPG',
  'PFER5511 (1).JPG',
  'PFER5544.JPG',
  'SAM00022.JPG',
  'SAM00035.JPG',
  'SAM00037.JPG',
  'SAM00041.JPG',
  'SAM00046.JPG',
  'SAM00082.JPG',
  'SAM00104.JPG',
  'SAM00125.JPG',
  'SAM00129.JPG',
  'SAM00141.JPG',
  'SAM00158.JPG',
  'SAM00211.JPG',
  'SAM00290.JPG',
  'SAM00310.JPG',
  'SAM00360.JPG',
  'SAM00362.JPG',
  'SAM00373.JPG',
  'SAM00408.JPG',
  'SAM00418.JPG',
  'SAM00424.JPG',
  'SAM00538.JPG',
].map((file) => ({
  src: `${CDN}/aipowered-live-workshops/${encodeURIComponent(file)}`,
  alt: 'Ross Power teaching a live workshop',
}));

export const ROSS_EVENT_PHOTOS = [
  ...Array.from({ length: 20 }, (_, i) => `${i + 1}.png`),
  'DSC00002.JPG',
  'DSC00011.JPG',
  'DSC00023.JPG',
  'DSC00028.JPG',
].map((file) => ({
  src: `${CDN}/ross-events/${encodeURIComponent(file)}`,
  alt: 'Ross Power on stage at a live event',
}));

/** Combined carousel — workshops first, then event shots */
export const FOUNDER_CAROUSEL_PHOTOS = [...LIVE_WORKSHOP_PHOTOS, ...ROSS_EVENT_PHOTOS];
