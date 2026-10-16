import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'EmpowaYouth — Official Portal | INSPIRED • CONNECTED • TRANSFORMED';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImageResponse({
    pageName: 'Official Portal',
    badge: 'National Movement',
    kicker: 'INSPIRED • CONNECTED • TRANSFORMED',
    title: 'Rewriting South Africa’s Youth Economy.',
    description:
      'Connecting 294,000+ ambitious young South Africans to mentors, accredited skills, jobs, and enterprise funding across all 9 provinces.',
    stats: [
      { value: '294,000+', label: 'Youth Impacted' },
      { value: '2,070+', label: 'Job Placements' },
      { value: '600+', label: 'Partners' },
      { value: '9', label: 'Provinces' },
    ],
  });
}
