import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner With Us | Corporate ESD, CSI & Talent Pipelines',
  description:
    'Join 600+ partner brands rewriting South Africa’s economic narrative. Align your corporate ESD, CSI, and talent acquisition mandates with high-impact township youth development.',
  alternates: {
    canonical: 'https://empowayouth.co.za/partner',
  },
  openGraph: {
    type: 'website',
    url: 'https://empowayouth.co.za/partner',
    siteName: 'EmpowaYouth',
    title: 'Partner With EmpowaYouth | Strategic Corporate & ESD Opportunities',
    description:
      'Turn ESG and B-BBEE scorecards into authentic national transformation. Secure pre-screened youth talent and co-author Africa’s future workforce.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EmpowaYouth',
    creator: '@EmpowaYouth',
    title: 'Partner With EmpowaYouth | Corporate Partnerships & Sponsorships',
    description:
      'Trusted by 600+ strategic partners across South Africa. Co-create sustainable talent pipelines and enterprise development.',
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
