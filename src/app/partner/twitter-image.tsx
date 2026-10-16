import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'Partner with EmpowaYouth — Corporate ESD, CSI & Talent Pipelines';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function TwitterImage() {
  return createOgImageResponse({
    pageName: 'Partner With Us',
    badge: 'Corporate & ESD',
    kicker: 'ESG • B-BBEE • TALENT ACQUISITION',
    title: 'Align Your ESD, CSI & Talent Pipelines.',
    description:
      'Join 600+ partner brands rewriting South Africa’s economic narrative. Co-author Africa’s future workforce with verified, pre-screened township talent across 9 provinces.',
    stats: [
      { value: '600+', label: 'Partner Brands' },
      { value: '9', label: 'Provinces' },
      { value: 'B-BBEE', label: 'Scorecard ROI' },
      { value: '2,070+', label: 'Hires Enabled' },
    ],
  });
}
