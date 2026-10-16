import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Hub & Broadcasts | Video Stories & Press Highlights',
  description:
    'Watch high-impact keynote sessions, pitch competition highlights, podcast conversations, and broadcast features from EmpowaYouth nationwide.',
  alternates: {
    canonical: 'https://empowayouth.co.za/media',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/media',
    siteName: 'EmpowaYouth',
    title: 'Media Hub & Broadcasts | EmpowaYouth',
    description:
      'High-impact video stories, broadcast features, and media moments from EmpowaYouth summits across South Africa.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'Media Hub & Broadcasts | EmpowaYouth',
    description:
      'Watch keynotes, podcasts, and video coverage from South Africa’s premier youth economic movement.',
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
