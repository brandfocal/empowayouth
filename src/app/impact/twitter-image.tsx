import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'EmpowaYouth Verified Impact — 294,000+ Youth Mobilised';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function TwitterImage() {
  return createOgImageResponse({
    pageName: 'Our Impact',
    badge: 'Verified Impact',
    kicker: 'AUDITED NATIONAL OUTCOMES',
    title: '294,000+ Youth Impacted. Real Economic Momentum.',
    description:
      'Impact you can count. Futures you can feel. 294,000+ youth mobilised, 2,070+ verified job placements, 6,000+ accredited skills certifications, and 450+ funded township enterprises.',
    stats: [
      { value: '294,000+', label: 'Youth Impacted' },
      { value: '2,070+', label: 'Job Placements' },
      { value: '6,000+', label: 'Skills Certified' },
      { value: '450+', label: 'Businesses Funded' },
    ],
  });
}
