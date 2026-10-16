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
    title: 'Partner With EmpowaYouth | Strategic Corporate & ESD Opportunities',
    description:
      'Turn ESG and B-BBEE scorecards into authentic national transformation. Secure pre-screened youth talent and co-author Africa’s future workforce.',
    images: [
      {
        url: '/images/youth-partner-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'EmpowaYouth Corporate Partner and Youth Ambassador collaborating',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner With EmpowaYouth | Corporate Partnerships & Sponsorships',
    description:
      'Trusted by 600+ strategic partners across South Africa. Co-create sustainable talent pipelines and enterprise development.',
    images: ['/images/youth-partner-portrait.jpg'],
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
