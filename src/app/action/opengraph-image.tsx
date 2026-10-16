import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'Take Action with EmpowaYouth — Free Delegate Passes, Volunteering & Partnerships';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImageResponse({
    pageName: 'Take Action',
    badge: 'Join The Movement',
    kicker: 'CHOOSE YOUR LANE • GET INVOLVED',
    title: 'Claim Your Free Delegate Pass, Volunteer or Partner.',
    description:
      'Three distinct lanes to make lasting impact: attend as a youth delegate, volunteer on the ground in your township, or partner as an employer or sponsor.',
    stats: [
      { value: '100% Free', label: 'Youth Passes' },
      { value: 'All 9', label: 'Provinces' },
      { value: '18–34', label: 'Target Age' },
      { value: 'Immediate', label: 'Online Access' },
    ],
  });
}
