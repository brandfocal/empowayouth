import React from 'react';

export interface PartnerLogo {
  id: string;
  name: string;
  image: string;
}

export const defaultPartnerLogos: PartnerLogo[] = [
  { id: 'cathsseta', name: 'CATHSSETA', image: '/sponsors/white/cathsseta.png' },
  { id: 'foodbev', name: 'FoodBev SETA', image: '/sponsors/white/foodbev.png' },
  { id: 'merseta', name: 'merSETA', image: '/sponsors/white/merseta.png' },
  { id: 'wrseta', name: 'W&RSETA', image: '/sponsors/white/wrseta.png' },
  { id: 'standard-bank', name: 'Standard Bank', image: '/sponsors/white/standard-bank.png' },
  { id: 'absa', name: 'Absa', image: '/sponsors/white/absa.png' },
  { id: 'nedbank', name: 'Nedbank', image: '/sponsors/white/nedbank-logo.png' },
  { id: 'fnb', name: 'FNB', image: '/sponsors/white/fnb.png' },
  { id: 'african-bank', name: 'African Bank', image: '/sponsors/white/african-bank-logo.png' },
  { id: 'afrika-tikkun', name: 'Afrika Tikkun', image: '/sponsors/white/afrika-tikkun-logo.png' },
  { id: 'harambee', name: 'Harambee', image: '/sponsors/white/harambee.png' },
  { id: 'yes', name: 'YES', image: '/sponsors/white/yes.png' },
  { id: 'pyei', name: 'PYEI', image: '/sponsors/white/pyei-logo.png' },
  { id: 'mtn', name: 'MTN', image: '/sponsors/white/mtn.png' },
  { id: 'arena-holdings', name: 'Arena Holdings', image: '/sponsors/white/arena-holdings-logo.png' },
];

export function PartnerLogoMarquee({
  partners = defaultPartnerLogos,
  className = '',
  ariaLabel = 'EmpowaYouth partners',
}: {
  partners?: PartnerLogo[];
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div className={`ey-marquee-window ${className}`} aria-label={ariaLabel}>
      <div className="ey-marquee-row ey-marquee-row-left">
        {partners.map((partner) => (
          <figure key={`marquee-a-${partner.id}`} className="ey-logo-card" title={partner.name}>
            <img src={partner.image} alt={`${partner.name} logo`} loading="lazy" />
          </figure>
        ))}
        {partners.map((partner) => (
          <figure
            key={`marquee-b-${partner.id}`}
            className="ey-logo-card"
            title={partner.name}
            aria-hidden="true"
          >
            <img src={partner.image} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}
