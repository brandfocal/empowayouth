import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Enquiries, Partnerships & Media Relations',
  description:
    'Get in touch with the EmpowaYouth team. Enquire about upcoming summits, corporate partnerships, sponsorship packages, speaker relations, and youth delegate passes.',
  alternates: {
    canonical: 'https://empowayouth.co.za/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/contact',
    siteName: 'EmpowaYouth',
    title: 'Contact Us | EmpowaYouth Movement',
    description:
      'We welcome queries from ambitious youth, corporate partners, government stakeholders, and media representatives nationwide.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'Contact EmpowaYouth | Enquiries & Partnerships',
    description:
      'Connect with EmpowaYouth headquarters for summit registration, corporate partnerships, and media queries.',
  },
};

const jsonLdContactFaq = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://empowayouth.co.za/contact/#contactpage',
      url: 'https://empowayouth.co.za/contact',
      name: 'Contact EmpowaYouth',
      description: 'Official contact portal for EmpowaYouth enquiries and partnerships.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://empowayouth.co.za/contact/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is EmpowaYouth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'EmpowaYouth is a national youth-led movement and Public-Private Partnership (PPP) designed to tackle youth unemployment, poverty, and systemic economic exclusion. We bring industry directly to underserved communities to unlock scalable pathways to jobs, education, and entrepreneurship.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where does EmpowaYouth operate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We operate across all nine provinces in South Africa, taking the system directly to the youth — from township streets to provincial stages.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who can participate in EmpowaYouth programmes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our interventions are aimed at young South Africans aged 18–34, whether you are unemployed, self-employed, or still in school, with specific focus on underserved township and peri-urban communities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of opportunities do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We connect youth to real, relevant opportunities including job placements, learnerships, accredited skills programmes, bursaries, and direct access to seed capital through Pitch Competitions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I attend an event like EmpowaYouth Vaal Week 2027?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can register online for a 100% free delegate pass for the EmpowaYouth Vaal Week (3–7 May 2027 at Koinonia Bible Church, Sebokeng, Zone 14 | 08:00–15:00 daily) through our website.',
          },
        },
      ],
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContactFaq) }}
      />
      {children}
    </>
  );
}
