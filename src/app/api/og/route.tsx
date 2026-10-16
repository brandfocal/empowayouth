import { NextRequest } from 'next/server';
import { createOgImageResponse } from '@/lib/og-generator';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const pageName = searchParams.get('page') || 'Official Portal';
  const title =
    searchParams.get('title') ||
    'Rewriting South Africa’s Youth Economy.';
  const description =
    searchParams.get('desc') ||
    searchParams.get('description') ||
    'Connecting 294,000+ ambitious young South Africans to mentors, accredited skills, jobs, and enterprise funding across all 9 provinces.';
  const badge = searchParams.get('badge') || pageName;
  const kicker = searchParams.get('kicker') || undefined;

  return createOgImageResponse({
    pageName,
    title,
    description,
    badge,
    kicker,
  });
}
