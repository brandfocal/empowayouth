import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const siteUrl = 'https://empowayouth.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'EmpowaYouth | INSPIRED | CONNECTED | TRANSFORMED',
    template: '%s | EmpowaYouth',
  },
  description:
    'South Africa’s premier youth economic inclusion movement. Connecting 294,000+ ambitious young people aged 18 to 34 with accredited skills, verified job placements, and enterprise funding across all 9 provinces.',
  keywords: [
    'EmpowaYouth',
    'Youth Empowerment South Africa',
    'Vaal EmpowaYouth Week 2027',
    'Youth Employment South Africa',
    'Township Economy',
    'Enterprise Supplier Development',
    'ESD Funding',
    'Skills Development',
    'Simphiwe Masiza',
    'Youth Economic Inclusion',
    'NEET Youth',
    'Orange Farm',
    'Sebokeng',
    'Gauteng Youth Summits',
  ],
  authors: [{ name: 'EmpowaYouth', url: siteUrl }],
  creator: 'EmpowaYouth',
  publisher: 'EmpowaWorx Group',
  category: 'Nonprofit / Youth Economic Development',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'EmpowaYouth',
    title: 'EmpowaYouth | INSPIRED | CONNECTED | TRANSFORMED',
    description:
      'Connecting ambitious young South Africans to the mentors, networks, and accredited skills that turn potential into lasting economic power.',
    images: [
      {
        url: '/images/summit-crowd-movement.jpg',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth Summit Delegates celebrating economic transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EmpowaYouth | INSPIRED | CONNECTED | TRANSFORMED',
    description:
      'Connecting ambitious young South Africans to mentors, networks, and skills that turn potential into lasting economic power.',
    images: ['/images/summit-crowd-movement.jpg'],
    creator: '@EmpowaYouth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo/empowayouth-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/empowayouth-icon.png', sizes: '600x600', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': 'https://empowayouth.co.za/#organization',
  name: 'EmpowaYouth',
  alternateName: 'EmpowaYouth Movement',
  legalName: 'EmpowaWorx Group / EmpowaYouth',
  url: siteUrl,
  logo: 'https://empowayouth.co.za/logo/empowayouth-logo-2.png',
  image: 'https://empowayouth.co.za/images/summit-crowd-movement.jpg',
  description:
    'South Africa’s premier youth economic inclusion movement connecting young people aged 18 to 34 with accredited skills, direct employment, and enterprise funding across all 9 provinces.',
  foundingDate: '2013',
  founder: {
    '@type': 'Person',
    name: 'Simphiwe Masiza',
    jobTitle: 'Founder & Executive Producer',
    image: 'https://empowayouth.co.za/team/simphiwe-masiza.jpg',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ZA',
    addressRegion: 'Gauteng',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@empowayouth.co.za',
    contactType: 'Customer Service & Media Enquiries',
    areaServed: 'ZA',
    availableLanguage: ['English', 'isiZulu', 'Sesotho'],
  },
  sameAs: [
    'https://www.linkedin.com/company/empowayouth',
    'https://www.instagram.com/empowayouth',
    'https://www.facebook.com/empowayouth',
    'https://twitter.com/empowayouth',
    'https://www.youtube.com/@empowayouth',
  ],
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://empowayouth.co.za/#website',
  url: siteUrl,
  name: 'EmpowaYouth',
  publisher: {
    '@id': 'https://empowayouth.co.za/#organization',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="ey-page min-h-screen flex flex-col antialiased">
        <Header />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
