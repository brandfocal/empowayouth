import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Interventions & Offerings | Summits, Indaba & Pitch Competitions',
  description:
    'Explore EmpowaYouth’s strategic vehicles: EmpowaYouth Summits, Indaba think tanks, youth Pitch Competitions, mobile township labs, sector experiences, and national awards.',
  alternates: {
    canonical: 'https://empowayouth.co.za/offerings',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/offerings',
    title: 'Strategic Interventions & Offerings | EmpowaYouth',
    description:
      'Bold instruments for systemic change. We create the rooms, routes, and resources that move young people closer to opportunity.',
    images: [
      {
        url: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/10/IMG-20231020-WA0006.jpg',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth Delegates engaged in programme workshop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Interventions & Offerings | EmpowaYouth',
    description:
      'Summits, Indaba, Pitch Competitions, and Future-Facing Industry Labs across South Africa.',
    images: ['https://cms.empowayouth.co.za/wp-content/uploads/2023/10/IMG-20231020-WA0006.jpg'],
  },
};

const jsonLdOfferings = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'EmpowaYouth Strategic Offerings',
  description: 'Programmes and intervention vehicles connecting youth to industry, skills, and capital.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'EmpowaYouth Summits (Weeks & Weekends)',
      description: 'Intensive, high-energy programmes delivering critical skills and real-world readiness.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'EmpowaYouth Indaba',
      description: 'A think tank for policymakers, CEOs, and development leaders to tackle youth unemployment at scale.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pitch Competition',
      description: 'Direct access to capital and deal rooms for youth-owned township businesses.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Experiences & Campaigns',
      description: 'Mobile labs, pop-up expos, and on-the-ground township career activations.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Industry Summits & Sector Experiences',
      description: 'Bridging the gap to future-facing industries — Green Economy, AI, Agri-tech, Digital Media.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'EmpowaYouth Awards',
      description: 'National honours elevating trailblazers and high-impact interventions.',
    },
  ],
};

export default function OfferingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOfferings) }}
      />
      {children}
    </>
  );
}
