import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'EmpowaYouth Media & Photo Gallery — Visual Stories of Youth Transformation';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImageResponse({
    pageName: 'Photo Gallery',
    badge: 'Visual Stories',
    kicker: 'SUMMITS • PITCH STAGES • ACTIVATIONS',
    title: 'Visual Stories Of Youth Transformation.',
    description:
      'Experience the energy, emotion, and agency of South African youth in action. Official photography from summits, deal rooms, and community activations nationwide.',
    stats: [
      { value: '10,000+', label: 'Summit Photos' },
      { value: '9', label: 'Provinces' },
      { value: '100+', label: 'Summits' },
      { value: 'Unstoppable', label: 'Energy' },
    ],
  });
}
