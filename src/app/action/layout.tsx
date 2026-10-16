import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Take Action | Free Delegate Pass, Volunteer & Partner Pathways',
  description:
    'Choose your lane: claim your free youth delegate pass, volunteer on the ground in your township, or partner as an employer or corporate sponsor.',
  alternates: {
    canonical: 'https://empowayouth.co.za/action',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/action',
    title: 'Take Action | EmpowaYouth Inclusion Pathways',
    description:
      'Three lanes to make an impact: Attend as a delegate, volunteer with our ground force, or sponsor life-changing youth interventions.',
    images: [
      {
        url: '/images/youth-community-empowerment.jpg',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth Delegates taking action together',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Take Action | EmpowaYouth Inclusion Pathways',
    description:
      'Free delegate registration, volunteer opportunities, and corporate partnerships across South Africa.',
    images: ['/images/youth-community-empowerment.jpg'],
  },
};

export default function ActionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
