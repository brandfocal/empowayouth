import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'About EmpowaYouth — The Movement for Youth Economic Power';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImageResponse({
    pageName: 'About Us',
    badge: 'The Movement',
    kicker: 'FROM ORANGE FARM TO NATIONWIDE',
    title: 'The Movement For Youth Economic Power.',
    description:
      'From an Orange Farm community hall to mobilizing 294,000+ youth across all 9 provinces. Discover the mission, leadership, and tripartite ecosystem powering EmpowaYouth.',
    stats: [
      { value: '2013', label: 'Founded' },
      { value: '294,000+', label: 'Youth Mobilised' },
      { value: '9', label: 'Provinces' },
      { value: '1', label: 'Shared Mission' },
    ],
  });
}
