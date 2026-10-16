import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EmpowaYouth Week Vaal 2027 | 3–7 May | Sebokeng, Zone 14',
  description:
    'Join 10,000+ youth delegates at Koinonia Bible Church in Sebokeng for South Africa’s premier youth economic reset. 5 days across health, tech, film, agriculture, and township enterprise. 100% free delegate registration.',
  keywords: [
    'EmpowaYouth Week Vaal 2027',
    'Sebokeng Youth Summit',
    'Koinonia Bible Church Sebokeng',
    'Vaal Youth Jobs',
    'Vaal Economic Reset',
    'Township Entrepreneurship Vaal',
    'Simphiwe Masiza Vaal',
    'Youth Delegate Registration',
  ],
  alternates: {
    canonical: 'https://empowayouth.co.za/vaal',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/vaal',
    siteName: 'EmpowaYouth',
    title: 'EmpowaYouth Week Vaal 2027 | 3–7 May | Sebokeng, Zone 14',
    description:
      '5 Days. 5 Priority Sectors. 10,000+ Youth Delegates. Direct access to employers, accredited training, and venture funding.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'EmpowaYouth Week Vaal 2027 | 3–7 May | Sebokeng, Zone 14',
    description:
      'Join 10,000+ youth delegates at Koinonia Bible Church for South Africa’s premier youth economic summit. Register for free.',
  },
};

const jsonLdEvent = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'EmpowaYouth Week Vaal 2027',
  startDate: '2027-05-03T08:00:00+02:00',
  endDate: '2027-05-07T15:00:00+02:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Koinonia Bible Church',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zone 14',
      addressLocality: 'Sebokeng',
      addressRegion: 'Gauteng',
      postalCode: '1983',
      addressCountry: 'ZA',
    },
  },
  image: ['https://empowayouth.co.za/Vaal-Empowayouth-Week2027-invite.jpg'],
  description:
    'A 5-day national economic reset summit in the Vaal connecting 10,000+ youth delegates with accredited skills, live hiring partners, and venture capital across 5 dedicated economic sectors.',
  offers: {
    '@type': 'Offer',
    url: 'https://empowayouth.co.za/vaal#participate',
    price: '0',
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/InStock',
    validFrom: '2026-10-01',
  },
  organizer: {
    '@type': 'Organization',
    name: 'EmpowaYouth',
    url: 'https://empowayouth.co.za',
  },
};

export default function VaalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />
      {children}
    </>
  );
}
