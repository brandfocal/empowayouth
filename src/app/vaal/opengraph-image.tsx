import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'EmpowaYouth Week Vaal 2027 — 3–7 May | Sebokeng, Zone 14';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImageResponse({
    pageName: 'Vaal Week 2027',
    badge: '3–7 May 2027',
    kicker: 'KOINONIA BIBLE CHURCH • SEBOKENG',
    title: 'EmpowaYouth Week Vaal 2027: Under The Dome.',
    description:
      'Join 10,000+ youth delegates for South Africa’s premier youth economic reset. 5 days, 5 priority economic sectors, corporate hiring pods, and venture capital. 100% free passes.',
    stats: [
      { value: '10,000+', label: 'Youth Delegates' },
      { value: '5 Days', label: 'Priority Sectors' },
      { value: '100+', label: 'Speakers & Panels' },
      { value: '100% Free', label: 'Delegate Pass' },
    ],
  });
}
