import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-generator';

export const runtime = 'nodejs';
export const alt = 'EmpowaYouth Media Hub & Broadcasts — Video Stories & Press Highlights';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return createOgImageResponse({
    pageName: 'Media Hub',
    badge: 'Video & Press',
    kicker: 'KEYNOTES • PODCASTS • HIGHLIGHTS',
    title: 'Media Hub, Keynotes & Movement Broadcasts.',
    description:
      'Watch high-impact keynote sessions, pitch competition highlights, podcast conversations, and broadcast features from EmpowaYouth nationwide.',
    stats: [
      { value: '6+', label: 'Featured Videos' },
      { value: 'National', label: 'Broadcasts' },
      { value: 'Podcast', label: 'Conversations' },
      { value: 'Movement', label: 'Highlights' },
    ],
  });
}
