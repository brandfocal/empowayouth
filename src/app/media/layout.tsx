import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media Hub & Press Releases | Official Statements & Broadcast Highlights',
  description:
    'Read official EmpowaYouth press releases, policy statements, and news highlights, alongside broadcast features and podcast conversations nationwide.',
  alternates: {
    canonical: 'https://empowayouth.co.za/media',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/media',
    siteName: 'EmpowaYouth',
    title: 'Media Hub & Press Releases | EmpowaYouth',
    description:
      'Official press statements, broadcast TV coverage, print features, and multimedia highlights from EmpowaYouth nationwide.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'Media Hub & Press Releases | EmpowaYouth',
    description:
      'Official press statements, broadcast TV coverage, and multimedia stories from South Africa’s premier youth economic movement.',
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
