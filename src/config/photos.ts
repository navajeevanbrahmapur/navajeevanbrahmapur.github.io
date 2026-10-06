import type { PhotoData } from '../lib/image-types';
import { referencePhotos } from './reference-photos';
export const photos: Record<string, PhotoData> = {
  ...referencePhotos,
  'donation-meals': { ...referencePhotos['reference-meals'], src: 'images/donation/meals.webp' },
  'team-srikant': { src: 'images/team/srikant-illustration.webp', alt: 'Illustrative portrait representing Srikant Reddy; not his actual likeness', width: 700, height: 700 },
  'team-teaching': { src: 'images/team/teaching-group.webp', alt: 'AI illustration of a group of teachers; not actual Navajeevan staff', width: 1400, height: 800 },
  'team-gaushala': { src: 'images/team/gaushala-group.webp', alt: 'AI illustration of a group of gaushala caregivers; not actual Navajeevan staff', width: 1400, height: 800 },
  'team-elder-care': { src: 'images/team/elder-care-group.webp', alt: 'AI illustration of a group of elder care workers; not actual Navajeevan staff', width: 1400, height: 800 },
  'team-community': { src: 'images/team/community-supporters-group.webp', alt: 'AI illustration of a group of community supporters; not actual Navajeevan members', width: 1400, height: 800 },
};
