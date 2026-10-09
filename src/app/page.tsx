'use client';

import Link from 'next/link';
import {
  useEmpowaYouthScrollAnimations,
  useEmpowaYouthImpactCounters,
  useEmpowaYouthBentoCardAnimations,
} from '@/hooks/use-scroll-animations';
import { PartnerLogoMarquee } from '@/components/PartnerLogoMarquee';

const pillars = [
  {
    id: 'inspired',
    label: '01',
    title: 'Inspired',
    body: 'We ignite the belief that your postcode is not your destiny. Through mentorship, storytelling, and exposure, young people discover what they’re capable of — and dare to pursue it.',
    backgroundImage: '/images/home-pillar-inspired.jpg',
  },
  {
    id: 'connected',
    label: '02',
    title: 'Connected',
    body: 'Opportunity lives in rooms most young people are never invited into. We change that — forging direct links between township talent and the CEOs, investors, and policymakers who hold the keys.',
    backgroundImage: '/images/home-pillar-connected.jpg',
  },
  {
    id: 'transformed',
    label: '03',
    title: 'Transformed',
    body: 'Inspiration without action is just a feeling. We equip young people with hard skills, enterprise training, and real work experience so potential becomes livelihood.',
    backgroundImage: '/images/home-pillar-transformed.jpg',
  },
];


export default function Home() {
  useEmpowaYouthScrollAnimations();
  useEmpowaYouthImpactCounters();
  useEmpowaYouthBentoCardAnimations();

  return (
    <main>
      {/* Hero Section */}
      <section className="ey-hero" aria-labelledby="ey-hero-title">
        <div className="ey-hero-video" aria-hidden="true">
          <iframe
            src="https://www.youtube.com/embed/QdYa_TLdgks?autoplay=1&mute=1&loop=1&playlist=QdYa_TLdgks&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="EmpowaYouth hero background video"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        </div>
        <div className="ey-hero-overlay-base" aria-hidden="true" />
        <div className="ey-hero-overlay-gradient" aria-hidden="true" />
        <div className="ey-hero-overlay-vignette" aria-hidden="true" />
        <div className="ey-hero-overlay-bottom-fade" aria-hidden="true" />

        <div className="ey-hero-inner">
          <div className="ey-hero-content">
            <div className="ey-hero-copy">
              <p className="ey-kicker ey-hero-animate ey-hero-animate-1">
                <span>From Orange Farm to the Nation</span>
              </p>
              <h1 id="ey-hero-title" className="ey-hero-animate ey-hero-animate-2">
                <span>Rewriting South Africa&apos;s </span>
                <span className="ey-heading-italic">Youth</span>
                <span> Economy.</span>
              </h1>
              <p className="ey-hero-subtitle ey-hero-animate ey-hero-animate-3">
                <span>
                  We connect ambitious young South Africans — aged 18 to 34 — to the mentors, networks, and skills that
                  turn potential into lasting economic power.
                </span>
              </p>
              <div className="ey-hero-panel">
                <div className="ey-hero-ctas ey-hero-animate ey-hero-animate-4">
                  <Link className="ey-button ey-button-dark-filled ey-hero-path" href="/offerings" title="Explore our interventions and offerings">
                    <span>Our Interventions</span>
                  </Link>
                  <Link className="ey-button ey-button-dark-outline ey-hero-path" href="/#partners" title="Explore partnership and ESG value">
                    <span>Partner With Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Banner */}
      <div className="ey-hero-stats" aria-label="Key statistics">
        <ul className="ey-hero-stats-inner" role="list">
          <li className="ey-hero-stat">
            <strong className="ey-hero-stat-number">
              <span>98,000+</span>
            </strong>
            <span className="ey-hero-stat-label">Youth Impacted</span>
          </li>
          <li className="ey-hero-stat">
            <strong className="ey-hero-stat-number">
              <span>200+</span>
            </strong>
            <span className="ey-hero-stat-label">Partner Brands</span>
          </li>
          <li className="ey-hero-stat">
            <strong className="ey-hero-stat-number">
              <span>10+</span>
            </strong>
            <span className="ey-hero-stat-label">Years Rewriting The Youth Economy</span>
          </li>
        </ul>
      </div>

      {/* Pillars / Approach Section */}
      <section id="pillars" className="ey-pillars" aria-labelledby="ey-pillars-title">
        <div className="ey-pillars-intro">
          <div className="ey-pillars-intro-inner">
            <p className="ey-kicker ey-observe">
              <span>01 — Our Approach</span>
            </p>
            <div className="ey-pillars-heading-row">
              <h2 id="ey-pillars-title" className="ey-section-heading ey-observe">
                <span>How We Build </span>
                <span className="ey-heading-italic">Power</span>
                <span>.</span>
              </h2>
              <div className="ey-pillars-descriptor-block ey-observe">
                <p className="ey-pillars-descriptor">
                  <span>
                    We don&apos;t just inspire youth — we connect them to real opportunity and equip them with the skills to
                    seize it. Three interlocking enablers. One unstoppable pipeline.
                  </span>
                </p>
                <div className="ey-pillars-meta">
                  <span className="ey-pillars-meta-item">
                    <strong>3</strong>
                    <span>Enablers</span>
                  </span>
                  <span className="ey-pillars-meta-divider" aria-hidden="true" />
                  <span className="ey-pillars-meta-item">
                    <strong>9</strong>
                    <span>Provinces</span>
                  </span>
                  <span className="ey-pillars-meta-divider" aria-hidden="true" />
                  <span className="ey-pillars-meta-item">
                    <strong>1</strong>
                    <span>Mission</span>
                  </span>
                </div>
                <Link href="/offerings" className="ey-pillars-cta-link" aria-label="Explore Our Interventions">
                  <span>Explore Our Interventions</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ul className="ey-pillar-list">
          {pillars.map((pillar) => (
            <li key={pillar.id} className="ey-pillar-item">
              <div
                className="ey-pillar-bg"
                style={{ backgroundImage: `url(${pillar.backgroundImage})` }}
                aria-hidden="true"
              />
              <div className="ey-pillar-scrim" aria-hidden="true" />
              <article className="ey-pillar-card ey-observe ey-anim-pillar-card">
                <div className="ey-pillar-title-block">
                  <span className="ey-pillar-number ey-anim-pillar-number" aria-hidden="true">
                    {pillar.label}
                  </span>
                  <span className="ey-pillar-tag" aria-hidden="true">
                    {pillar.id.toUpperCase()}
                  </span>
                  <h3 className="ey-anim-pillar-heading">{pillar.title}</h3>
                </div>
                <div className="ey-pillar-body-block">
                  <p className="ey-anim-pillar-copy">
                    <span>{pillar.body}</span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Impact Section */}
      <section id="impact" className="ey-impact" aria-labelledby="ey-impact-title">
        <div
          className="ey-impact-bg"
          aria-hidden="true"
          style={{ backgroundImage: "url('https://cms.empowayouth.co.za/wp-content/uploads/2025/07/DSC_2957.jpg')" }}
        />
        <div className="ey-impact-sweep" aria-hidden="true" />
        <div className="ey-impact-inner">
          <div className="ey-impact-bento-layout">
            <header className="ey-impact-bento-copy ey-observe">
              <p className="ey-kicker">
                <span>Our Impact</span>
              </p>
              <h2 id="ey-impact-title" className="ey-impact-bento-heading">
                <span>Numbers That </span>
                <span className="ey-heading-italic">Speak</span>
                <span> For Themselves</span>
              </h2>
              <p className="ey-impact-bento-support">
                <span>Proof of what happens when ambition meets access, networks, and sustained belief across South Africa.</span>
              </p>
              <Link className="ey-impact-bento-cta" href="/#partners">
                <span>See Our Stories</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </header>

            <ul className="ey-impact-bento-grid" aria-label="EmpowaYouth impact statistics">
              <li
                className="ey-impact-bento-card ey-impact-bento-card-feature ey-anim-stat-cell"
                data-value="98000"
                data-suffix="+"
              >
                <div className="ey-impact-bento-stat">
                  <strong className="ey-impact-number">
                    <span>98,000+</span>
                  </strong>
                  <span className="ey-impact-bento-label">Youth Impacted</span>
                </div>
              </li>

              <li
                className="ey-impact-bento-card ey-anim-stat-cell"
                data-value="690"
                data-suffix="+"
                style={{ transitionDelay: '80ms' }}
              >
                <div className="ey-impact-bento-stat">
                  <strong className="ey-impact-number">
                    <span>690+</span>
                  </strong>
                  <span className="ey-impact-bento-label">Jobs Created</span>
                </div>
              </li>

              <li
                className="ey-impact-bento-card ey-anim-stat-cell"
                data-value="120"
                data-suffix="+"
                style={{ transitionDelay: '160ms' }}
              >
                <div className="ey-impact-bento-stat">
                  <strong className="ey-impact-number">
                    <span>120+</span>
                  </strong>
                  <span className="ey-impact-bento-label">Partner Organisations</span>
                </div>
              </li>

              <li
                className="ey-impact-bento-card ey-impact-bento-card-community ey-anim-stat-cell"
                data-value="45"
                data-suffix="+"
                style={{ transitionDelay: '240ms' }}
              >
                <div className="ey-impact-bento-stat">
                  <strong className="ey-impact-number">
                    <span>45+</span>
                  </strong>
                  <span className="ey-impact-bento-label">Communities Reached</span>
                </div>
                <p className="ey-impact-bento-quote">
                  <span>&ldquo;Every township has talent. Our work is to make sure opportunity can find it.&rdquo;</span>
                </p>
              </li>

              <li
                className="ey-impact-bento-card ey-impact-photo-card"
                style={{ transitionDelay: '320ms' }}
              >
                <img
                  src="https://cms.empowayouth.co.za/wp-content/uploads/2025/07/hundred-thousand.jpg"
                  alt="Every young person deserves a fair shot — EmpowaYouth Community"
                />
                <div className="ey-impact-photo-overlay" aria-hidden="true">
                  <p className="ey-impact-photo-quote">
                    <span>Every young person deserves a fair shot.</span>
                    <span className="ey-impact-photo-caption">&mdash; EmpowaYouth Community</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section id="partners" className="ey-partners" aria-labelledby="ey-partners-title">
        <div className="ey-partners-inner">
          <div className="ey-partners-layout">
            <figure className="ey-partners-portrait ey-observe">
              <img
                src="/images/youth-ambassador-portrait.jpg"
                alt="A confident young South African leader and youth ambassador"
              />
            </figure>

            <div className="ey-partners-content">
              <header className="ey-partners-header ey-observe">
                <p className="ey-kicker">
                  <strong>200+</strong>
                  <span>Brand Partners</span>
                </p>
                <h2 id="ey-partners-title" className="ey-section-heading text-[var(--pt-paper)]">
                  <span>Trusted By The </span>
                  <span className="ey-heading-italic">Best</span>
                  <span>.</span>
                </h2>
              </header>

              <div className="ey-partners-trust">
                <div className="ey-partners-trust-item">
                  <span className="ey-partners-trust-num">200+</span>
                  <span className="ey-partners-trust-label">Corporate Partners</span>
                </div>
                <div className="ey-partners-trust-divider" aria-hidden="true" />
                <div className="ey-partners-trust-item">
                  <span className="ey-partners-trust-num">9</span>
                  <span className="ey-partners-trust-label">Provinces Covered</span>
                </div>
                <div className="ey-partners-trust-divider" aria-hidden="true" />
                <div className="ey-partners-trust-item">
                  <span className="ey-partners-trust-num">10+</span>
                  <span className="ey-partners-trust-label">Years of Trust</span>
                </div>
              </div>

              <PartnerLogoMarquee />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
