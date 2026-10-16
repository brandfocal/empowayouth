import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media & Photo Gallery | Visual Stories of Youth Transformation',
  description:
    'Experience the energy, emotion, and agency of South African youth in action. Browse official photo galleries from summits, pitch stages, and community activations.',
  alternates: {
    canonical: 'https://empowayouth.co.za/gallery',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/gallery',
    siteName: 'EmpowaYouth',
    title: 'Media & Photo Gallery | EmpowaYouth Summits',
    description:
      'Visual storytelling from EmpowaYouth summits, power panels, deal rooms, and township activations nationwide.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'Media & Photo Gallery | EmpowaYouth Summits',
    description:
      'Visual storytelling of young South Africans claiming their economic power.',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
