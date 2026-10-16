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
    siteName: 'EmpowaYouth',
    title: 'Take Action | EmpowaYouth Inclusion Pathways',
    description:
      'Three lanes to make an impact: Attend as a delegate, volunteer with our ground force, or sponsor life-changing youth interventions.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'Take Action | EmpowaYouth Inclusion Pathways',
    description:
      'Free delegate registration, volunteer opportunities, and corporate partnerships across South Africa.',
  },
};

export default function ActionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
