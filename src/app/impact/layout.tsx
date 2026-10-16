import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact | 294,000+ Youth Impacted Across 9 Provinces',
  description:
    'Impact you can count. Futures you can feel. 294,000+ youth mobilised, 2,070+ verified job placements, 6,000+ accredited skills certifications, and 450+ funded township enterprises.',
  alternates: {
    canonical: 'https://empowayouth.co.za/impact',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/impact',
    title: 'Our Impact | EmpowaYouth Verified Metrics Dashboard',
    description:
      'From employment pathways to enterprise capital, see how EmpowaYouth turns access into measurable momentum across South Africa.',
    images: [
      {
        url: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/10/IMG-20231019-WA0008.jpg',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth Community members and delegates celebrating impact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Impact | 294,000+ Youth Impacted Across South Africa',
    description:
      'Verified pathways: 294,000+ youth reached, 2,070+ jobs placed, 6,000+ skills certified, 450+ enterprises funded.',
    images: ['https://cms.empowayouth.co.za/wp-content/uploads/2023/10/IMG-20231019-WA0008.jpg'],
  },
};

const jsonLdImpact = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'EmpowaYouth Impact Report & Dashboard',
  url: 'https://empowayouth.co.za/impact',
  description: 'Verified impact statistics and metrics for the EmpowaYouth economic inclusion movement.',
  mainEntity: {
    '@type': 'NGO',
    name: 'EmpowaYouth',
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/InteractAction',
        userInteractionCount: 294000,
        name: 'Youth Impacted',
      },
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/TradeAction',
        userInteractionCount: 2070,
        name: 'Direct Job Placements',
      },
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/AssessAction',
        userInteractionCount: 6000,
        name: 'Accredited Skills Certifications',
      },
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/InvestAction',
        userInteractionCount: 450,
        name: 'Township Enterprises Funded',
      },
    ],
  },
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdImpact) }}
      />
      {children}
    </>
  );
}
