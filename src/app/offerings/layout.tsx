import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Platforms & Offerings | Partner to Power the Youth Economy',
  description:
    'Explore EmpowaYouth’s 8 complementary platforms: EmpowaYouth Awards, Indaba, Experiences & Campaigns, Summits (Weeks & Weekends), Industry Summits & Experiences, Insights & Trends, Content Studio, and Speakers.',
  alternates: {
    canonical: 'https://empowayouth.co.za/offerings',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/offerings',
    siteName: 'EmpowaYouth',
    title: 'Strategic Platforms & Offerings | EmpowaYouth',
    description:
      'Partner to power the youth economy. Build talent, open markets, and shape futures across eight complementary platforms.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'Strategic Platforms & Offerings | EmpowaYouth',
    description:
      'Summits, Indaba, Industry Labs, Awards, Intelligence, Content Studio, and Speakers across South Africa.',
  },
};

const jsonLdOfferings = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'EmpowaYouth Strategic Platforms & Offerings',
  description: 'An integrated portfolio of eight complementary platforms connecting ambition with economic access.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'EmpowaYouth Awards',
      description: 'A national awards programme celebrating organisations, changemakers and institutions delivering measurable youth empowerment.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'EmpowaYouth Indaba',
      description: 'A thought leadership forum bringing policymakers, business leaders and development agencies together to examine barriers to youth economic participation and develop implementable responses.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'EmpowaYouth Experiences & Campaigns',
      description: 'Dynamic events and activations connecting young people with industries, role models and opportunities, from township career pop-ups to workplace immersions and innovation lab visits.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'EmpowaYouth Summits: Weeks & Weekends',
      description: 'Focused, multi-day programmes combining workshops, masterclasses, mentorship and opportunity access to equip young people with practical skills, networks and tools.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'EmpowaYouth Industry Summits & Experiences',
      description: 'Dedicated engagements connecting youth with the needs and opportunities of growth sectors, including agriculture, fintech, the green economy and creative industries.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'EmpowaYouth Insights & Trends',
      description: 'An intelligence platform capturing and analysing youth perspectives, aspirations, behaviours and barriers to participation.',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'EmpowaYouth Content Studio',
      description: 'A youth-focused content hub producing podcasts, interviews and digital series that elevate young voices, share practical knowledge and showcase pathways to progress.',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'EmpowaYouth Speakers',
      description: 'A curated platform connecting organisations with compelling speakers, facilitators, moderators and role models for youth events and gatherings.',
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
