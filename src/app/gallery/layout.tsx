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
    title: 'Media & Photo Gallery | EmpowaYouth Summits',
    description:
      'Visual storytelling from EmpowaYouth summits, power panels, deal rooms, and township activations nationwide.',
    images: [
      {
        url: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1453_1.jpg',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth Summit Main Stage and Youth Delegates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Photo Gallery | EmpowaYouth Summits',
    description:
      'Visual storytelling of young South Africans claiming their economic power.',
    images: ['https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1453_1.jpg'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
