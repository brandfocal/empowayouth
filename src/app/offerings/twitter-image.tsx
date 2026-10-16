import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'EmpowaYouth Strategic Interventions & Offerings';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function TwitterImage() {
  return createOgImageResponse({
    pageName: 'Our Offerings',
    badge: 'Strategic Offerings',
    kicker: 'SUMMITS • INDABA • PITCH ARENAS',
    title: 'Strategic Interventions & Youth Pipelines.',
    description:
      'Summits, Indaba think tanks, youth Pitch Competitions, mobile township labs, sector experiences, and national awards connecting youth to economic capital.',
    stats: [
      { value: '6', label: 'Core Interventions' },
      { value: '6,000+', label: 'Accredited Skills' },
      { value: '450+', label: 'Enterprises Funded' },
      { value: '600+', label: 'Partner Brands' },
    ],
  });
}
