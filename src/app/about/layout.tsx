import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Movement for Youth Economic Power',
  description:
    'From an Orange Farm community hall to mobilizing 294,000+ youth across all 9 provinces. Discover the mission, leadership, and tripartite ecosystem powering EmpowaYouth.',
  alternates: {
    canonical: 'https://empowayouth.co.za/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/about',
    title: 'About Us | EmpowaYouth Economic Inclusion Movement',
    description:
      'We connect ambitious young South Africans to the mentors, networks, and accredited skills that turn potential into lasting economic power.',
    images: [
      {
        url: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8714.jpg',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth Delegates and Executive Leadership Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | EmpowaYouth Economic Inclusion Movement',
    description:
      'From Orange Farm to nationwide: meet the leadership and explore the ecosystem co-authoring South Africa’s economic future.',
    images: ['https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8714.jpg'],
  },
};

const jsonLdAbout = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About EmpowaYouth',
  url: 'https://empowayouth.co.za/about',
  mainEntity: {
    '@type': 'NGO',
    name: 'EmpowaYouth',
    founder: {
      '@type': 'Person',
      name: 'Simphiwe Masiza',
      jobTitle: 'Founder & Executive Producer',
      image: 'https://empowayouth.co.za/team/simphiwe-masiza.jpg',
    },
    member: [
      {
        '@type': 'Person',
        name: 'Bonnie Maponya',
        jobTitle: 'Chief of Staff & Acting Managing Executive, EmpowaWomen',
        image: 'https://empowayouth.co.za/team/Bonnie-Maponya.jpg',
      },
      {
        '@type': 'Person',
        name: 'Anita Tirkey, MBA',
        jobTitle: 'Talent, Speakers & Executive Relations',
        image: 'https://empowayouth.co.za/team/Anita-Tirkey.jpg',
      },
      {
        '@type': 'Person',
        name: 'Carshiefa Sissing',
        jobTitle: 'Digital Marketing, Social Media & Community Growth',
        image: 'https://empowayouth.co.za/team/Carshiefa-Sissing.jpg',
      },
      {
        '@type': 'Person',
        name: 'Neo Mathebe',
        jobTitle: 'Head of The Speakers Firm & Acting Managing Executive, EmpowaMen',
        image: 'https://empowayouth.co.za/team/Neo-Mathebe.JPG',
      },
      {
        '@type': 'Person',
        name: 'Sechaba Motsieloa, CM(SA)',
        jobTitle: 'Senior Marketing Strategist & Managing Executive, EmpowaGrowth',
        image: 'https://empowayouth.co.za/team/Sechaba-Motsieloa.jpeg',
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      {children}
    </>
  );
}
