import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'Contact EmpowaYouth — Inquiries, Partnerships & Media Relations';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function TwitterImage() {
  return createOgImageResponse({
    pageName: 'Contact Us',
    badge: 'Headquarters',
    kicker: 'ENQUIRIES • PARTNERSHIPS • MEDIA',
    title: 'Connect With EmpowaYouth Headquarters.',
    description:
      'Official contact portal for summit registrations, corporate partnerships, sponsorship packages, speaker relations, and youth delegate passes nationwide.',
    stats: [
      { value: 'Ferndale', label: 'Randburg, GP' },
      { value: '24/48h', label: 'Response Time' },
      { value: 'All 9', label: 'Provinces' },
      { value: 'Direct', label: 'Support Team' },
    ],
  });
}
