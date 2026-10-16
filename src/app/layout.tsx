import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const siteUrl = 'https://empowayouth.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'EmpowaYouth',
  appleWebApp: {
    capable: true,
    title: 'EmpowaYouth',
    statusBarStyle: 'black-translucent',
  },
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
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth — INSPIRED | CONNECTED | TRANSFORMED',
        type: 'image/png',
      },
      {
        url: '/logo/empowayouth-logo-2.png',
        width: 600,
        height: 315,
        alt: 'EmpowaYouth Official Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'EmpowaYouth | INSPIRED | CONNECTED | TRANSFORMED',
    description:
      'Connecting ambitious young South Africans to mentors, networks, and skills that turn potential into lasting economic power.',
    images: ['/opengraph-image'],
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
        <meta property="og:site_name" content="EmpowaYouth" />
        <meta property="og:logo" content="https://empowayouth.co.za/logo/empowayouth-logo-2.png" />
        <link rel="image_src" href="https://empowayouth.co.za/logo/empowayouth-logo-2.png" />
        <link rel="apple-touch-icon" href="https://empowayouth.co.za/apple-touch-icon.png" />
        <meta name="application-name" content="EmpowaYouth" />
        <meta name="apple-mobile-web-app-title" content="EmpowaYouth" />
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
