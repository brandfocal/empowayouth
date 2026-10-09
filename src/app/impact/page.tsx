'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

type CounterCardElement = HTMLElement & {
  dataset: DOMStringMap & {
    value?: string;
    suffix?: string;
    counted?: string;
  };
};

export default function ImpactPage() {
  const bentoGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = bentoGridRef.current;
    if (!grid) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const statCards = Array.from(grid.querySelectorAll<CounterCardElement>('.ey-impact-bento-stat-card'));
    const formatValue = (value: number) => value.toLocaleString('en-US');
    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const animateCounter = (card: CounterCardElement) => {
      const numberElement = card.querySelector<HTMLElement>('.ey-impact-bento-number');
      if (!numberElement || card.dataset.counted === 'true') return;

      card.dataset.counted = 'true';
      const target = Number(card.dataset.value || '0');
      const suffix = card.dataset.suffix || '';

      if (prefersReducedMotion) {
        numberElement.textContent = `${formatValue(target)}${suffix}`;
        return;
      }

      const duration = 1800;
      const start = performance.now();

      const step = (timestamp: number) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(target * easeOutCubic(progress));
        numberElement.textContent = `${formatValue(current)}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          numberElement.textContent = `${formatValue(target)}${suffix}`;
        }
      };

      numberElement.textContent = `0${suffix}`;
      requestAnimationFrame(step);
    };

    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.classList.add('ey-visible');
            grid.querySelectorAll('.ey-impact-bento-card').forEach((card) => {
              card.classList.add('ey-visible');
            });
            gridObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as CounterCardElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    gridObserver.observe(grid);
    statCards.forEach((card) => counterObserver.observe(card));

    return () => {
      gridObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className="ey-impact-page min-h-screen bg-[var(--pt-ink)] text-[var(--pt-paper)] font-sans overflow-x-hidden">
      <style>{`
        .ey-impact-page { min-height: 100vh; background: var(--pt-ink); color: var(--pt-paper); font-family: var(--font-body); overflow-x: hidden; }
        .ey-impact-section-container { width: 100%; max-width: var(--pt-container); margin-inline: auto; padding-inline: var(--pt-container-pad); }
        .ey-kicker { display: inline-flex; align-items: center; gap: 8px; margin: 0; color: var(--pt-accent); font-size: 10px; font-weight: 600; letter-spacing: .16em; line-height: 1.3; text-transform: uppercase; text-wrap: pretty; }
        .ey-kicker::before { content: ''; display: inline-block; width: 24px; height: 2px; flex: 0 0 24px; background: var(--pt-accent); }
        .ey-section-heading { margin: 12px 0 0; color: inherit; font-family: var(--font-heading); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 300; letter-spacing: -.025em; line-height: 1.05; text-transform: uppercase; text-wrap: balance; }
        .ey-heading-italic { font-style: italic; font-weight: 300; font-size: 1.08em; letter-spacing: -0.02em; color: var(--pt-accent); }
        .ey-body-copy { max-width: 600px; margin: 20px 0 0; color: var(--pt-muted); font-size: 15px; font-weight: 400; line-height: 1.7; letter-spacing: .005em; text-wrap: pretty; }
        .ey-hero { position: relative; display: flex; min-height: 100vh; min-height: 100svh; flex-direction: column; justify-content: flex-end; overflow: hidden; background: var(--pt-ink); padding: clamp(104px, 14vw, 184px) var(--pt-container-pad) clamp(48px, 8vw, 112px); }
        .ey-hero-inner { position: relative; z-index: 2; width: 100%; max-width: var(--pt-container); margin: 0 auto; }
        .ey-hero .ey-kicker { gap: 8px; margin-bottom: 24px; }
        .ey-hero-mark { position: absolute; pointer-events: none; border: 1px solid color-mix(in srgb, var(--pt-accent) 24%, transparent); }
        .ey-hero-mark-large { right: -8vw; top: 18%; width: 42vw; height: 42vw; }
        .ey-hero-mark-small { right: 8vw; top: 31%; width: 20vw; height: 20vw; border-color: color-mix(in srgb, var(--pt-accent) 34%, transparent); }
        .ey-hero-content { position: relative; z-index: 1; max-width: 1100px; }
        .ey-hero-title { max-width: 1000px; margin: 0 0 24px; color: var(--pt-paper); font-family: var(--font-heading); font-size: clamp(3rem, 8vw, 8rem); font-weight: 800; letter-spacing: -.05em; line-height: .95; text-transform: uppercase; text-wrap: balance; }
        .ey-hero-descriptor { max-width: 560px; margin: 0 0 36px; color: var(--pt-paper); font-size: clamp(15px, 1.35vw, 17px); font-weight: 500; line-height: 1.65; letter-spacing: .005em; text-wrap: pretty; }
        .ey-hero-cta-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
        .ey-hero-cta-primary, .ey-hero-cta-secondary { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; border-radius: 8px; padding: 14px 28px; font-family: var(--font-body); font-size: 14px; font-weight: 700; letter-spacing: .02em; line-height: 1.2; text-decoration: none; transition: background 200ms ease-out, color 200ms ease-out, transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out; }
        .ey-hero-cta-primary { border: 1px solid var(--pt-accent); background: var(--pt-accent); color: var(--pt-ink); }
        .ey-hero-cta-secondary { border: 1.5px solid rgba(244, 240, 232, 0.35); background: transparent; color: var(--pt-paper); }
        .ey-hero-cta-primary:hover, .ey-hero-cta-primary:focus-visible { background: color-mix(in srgb, var(--pt-accent) 86%, var(--pt-ink)); border-color: color-mix(in srgb, var(--pt-accent) 86%, var(--pt-ink)); color: var(--pt-ink); transform: scale(1.02); box-shadow: 0 4px 16px color-mix(in srgb, var(--pt-accent) 35%, transparent); }
        .ey-hero-cta-secondary:hover, .ey-hero-cta-secondary:focus-visible { border-color: var(--pt-accent); background: color-mix(in srgb, var(--pt-paper) 8%, transparent); color: var(--pt-paper); }
        .ey-impact-bento-section { background: var(--pt-ink); color: var(--pt-paper); font-family: var(--font-body); padding-block: clamp(80px, 8vw, 112px); }
        .ey-impact-bento-shell { display: grid; grid-template-columns: minmax(280px, .38fr) minmax(0, .62fr); align-items: start; gap: clamp(48px, 6vw, 80px); }
        .ey-impact-bento-copy { max-width: 450px; padding-top: 4px; }
        .ey-impact-bento-heading { color: var(--pt-paper); }
        .ey-impact-bento-cta { min-height: 48px; margin-top: 32px; padding: 14px 28px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--pt-accent); border-radius: 8px; background: var(--pt-accent); color: var(--pt-ink); font-family: var(--font-body); font-size: 14px; font-weight: 700; letter-spacing: .02em; line-height: 1.2; text-decoration: none; box-shadow: none; transition: background 200ms ease-out, color 200ms ease-out, transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out; }
        .ey-impact-bento-cta:hover { background: color-mix(in srgb, var(--pt-accent) 86%, var(--pt-ink)); border-color: color-mix(in srgb, var(--pt-accent) 86%, var(--pt-ink)); color: var(--pt-ink); transform: scale(1.02); box-shadow: 0 4px 16px color-mix(in srgb, var(--pt-accent) 35%, transparent); }
        .ey-impact-bento-dashboard { min-width: 0; }
        .ey-impact-bento-dashboard-cta-row { display: flex; justify-content: flex-start; margin-top: 24px; }
        .ey-impact-bento-dashboard-cta { min-height: 48px; margin-top: 0; padding: 14px 28px; border: 1.5px solid var(--pt-accent); border-radius: 8px; background: transparent; color: var(--pt-accent); font-size: 14px; font-weight: 700; }
        .ey-impact-bento-dashboard-cta:hover, .ey-impact-bento-dashboard-cta:focus-visible { background: var(--pt-accent); border-color: var(--pt-accent); color: var(--pt-paper); transform: scale(1.02); box-shadow: 0 8px 22px color-mix(in srgb, var(--pt-accent) 24%, transparent); }
        .ey-impact-scale-cta { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; border: 1.5px solid var(--pt-accent); border-radius: 8px; background: var(--pt-accent); color: var(--pt-paper); padding: 14px 28px; font-family: var(--font-body); font-size: 14px; font-weight: 700; letter-spacing: .02em; line-height: 1.2; text-decoration: none; box-shadow: 0 14px 34px color-mix(in srgb, var(--pt-accent) 26%, transparent); transition: background 200ms ease-out, color 200ms ease-out, transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out; }
        .ey-impact-scale-cta:hover, .ey-impact-scale-cta:focus-visible { background: color-mix(in srgb, var(--pt-accent) 88%, var(--pt-paper)); border-color: color-mix(in srgb, var(--pt-accent) 88%, var(--pt-paper)); color: var(--pt-paper); transform: scale(1.02); box-shadow: 0 18px 44px color-mix(in srgb, var(--pt-accent) 34%, transparent); }
        .ey-impact-bento-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin: 0; padding: 0; list-style: none; }
        .ey-impact-bento-card { position: relative; min-width: 0; min-height: 220px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; border: 1px solid var(--pt-dark-divider); border-radius: 12px; background: color-mix(in srgb, var(--pt-paper) 5%, transparent); opacity: 0; transform: translateY(24px); transition: opacity 500ms cubic-bezier(.16, 1, .3, 1), transform 500ms cubic-bezier(.16, 1, .3, 1), background 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out; }
        .ey-impact-bento-grid.ey-visible .ey-impact-bento-card, .ey-impact-bento-card.ey-visible { opacity: 1; transform: translateY(0); }
        .ey-impact-bento-card:hover { background: color-mix(in srgb, var(--pt-accent) 10%, transparent); border-color: color-mix(in srgb, var(--pt-accent) 40%, transparent); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--pt-accent) 16%, transparent); }
        .ey-impact-bento-card-feature { grid-column: span 2; background: rgba(232, 131, 42, .06); min-height: 240px; padding: 34px; }
        .ey-impact-bento-card-community { grid-column: span 2; min-height: 240px; background: rgba(244, 240, 232, .05); }
        .ey-impact-bento-card-feature .ey-impact-number,
        .ey-impact-bento-card-feature .ey-impact-bento-number { font-size: clamp(52px, 6vw, 80px); }
        .ey-impact-photo-card { grid-column: 1 / -1; min-height: 240px; height: 240px; padding: 0; border: 1px solid var(--pt-dark-divider); border-radius: 12px; overflow: hidden; background: var(--pt-ink); position: relative; }
        .ey-impact-photo-card:hover { background: color-mix(in srgb, var(--pt-paper) 5%, transparent); }
        .ey-impact-photo-card img { width: 100%; height: 100%; display: block; object-fit: cover; }
        .ey-impact-photo-overlay { position: absolute; inset: 0; z-index: 1; display: flex; align-items: flex-end; padding: 28px; background: linear-gradient(to top, rgba(0, 0, 0, .75), transparent); }
        .ey-impact-photo-quote { margin: 0; color: var(--pt-paper); font-size: 18px; font-weight: 600; line-height: 1.35; letter-spacing: -.01em; display: flex; flex-direction: column; gap: 4px; }
        .ey-impact-photo-caption { color: var(--pt-muted); font-size: 13px; font-weight: 500; font-style: normal; }
        .ey-impact-bento-quote { margin: 0; color: var(--pt-paper); font-size: 18px; font-weight: 600; line-height: 1.35; letter-spacing: -.01em; text-wrap: balance; }
        .ey-impact-bento-caption { color: var(--pt-muted); font-size: 13px; font-weight: 500; line-height: 1.4; text-wrap: pretty; }
        .ey-impact-bento-icon { width: 32px; height: 32px; display: grid; place-items: center; color: var(--pt-muted); }
        .ey-impact-bento-icon svg { width: 20px; height: 20px; display: block; stroke: currentColor; }
        .ey-impact-bento-stat { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
        .ey-impact-number, .ey-impact-bento-number { font-size: clamp(32px, 3.5vw, 52px); font-weight: 800; color: var(--pt-accent); letter-spacing: -.04em; line-height: 1; white-space: nowrap; display: block; }
        .ey-impact-bento-label { display: block; margin: 0; color: rgba(244, 240, 232, .54); font-size: 11px; font-weight: 600; letter-spacing: .12em; line-height: 1.4; text-transform: uppercase; text-wrap: balance; }
        .ey-impact-bento-tagline { max-width: 600px; margin: 20px 0 0; color: var(--pt-muted); font-size: 15px; font-style: italic; font-weight: 400; line-height: 1.7; letter-spacing: .005em; text-wrap: pretty; }
        .ey-beyond { background: var(--pt-paper); color: var(--pt-ink); padding-block: clamp(80px, 8vw, 112px); }
        .ey-beyond-grid { display: grid; grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr); gap: clamp(40px, 6vw, 72px); align-items: center; }
        .ey-beyond-heading { color: var(--pt-ink); }
        .ey-beyond-quote { max-width: 1000px; margin: 32px 0 0; color: var(--pt-ink); font-family: var(--font-heading); font-size: clamp(1.6rem, 2.8vw, 3rem); font-weight: 800; letter-spacing: -.05em; line-height: .95; text-transform: uppercase; text-wrap: balance; }
        .ey-beyond-note { max-width: 600px; margin: 28px 0 0; border-left: 4px solid var(--pt-accent); padding-left: 20px; color: var(--pt-ink); font-size: clamp(14px, 1.4vw, 16px); font-weight: 700; letter-spacing: -.025em; line-height: 1.15; text-transform: uppercase; text-wrap: balance; }
        .ey-impact-final { background: var(--pt-ink); padding: clamp(40px, 8vw, 112px) var(--pt-container-pad); }
        .ey-impact-final-inner { width: 100%; max-width: var(--pt-container); margin: 0 auto; }
        .ey-impact-final-kicker { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 10px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: var(--pt-accent); margin: 0 0 24px; }
        .ey-impact-final-kicker-rule { display: inline-block; width: 24px; height: 2px; flex: 0 0 24px; background: var(--pt-accent); }
        .ey-impact-final-heading { font-family: Manrope, Arial, sans-serif; font-size: clamp(3rem, 8vw, 8rem); font-weight: 800; letter-spacing: -.05em; line-height: .95; text-transform: uppercase; text-wrap: balance; color: var(--pt-paper); margin: 0; }
        .ey-impact-final-rule { width: 64px; height: 3px; background: var(--pt-accent); margin: 32px 0; }
        .ey-impact-final-copy { font-size: 15px; font-weight: 400; line-height: 1.7; letter-spacing: .005em; color: var(--pt-muted); max-width: 520px; margin: 0 0 32px; text-wrap: pretty; }
        .ey-impact-final-actions { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
        @media (max-width: 960px) {
          .ey-impact-bento-shell, .ey-beyond-grid { grid-template-columns: 1fr; }
          .ey-beyond-grid { gap: 40px; align-items: start; }
          .ey-impact-bento-copy { max-width: 620px; }
          .ey-impact-bento-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .ey-impact-bento-card-feature, .ey-impact-bento-card-community, .ey-impact-photo-card { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .ey-impact-section-container { padding-inline: 16px; }
          .ey-hero { min-height: 100vh; min-height: 100svh; justify-content: flex-end; padding: 104px 16px 48px; }
          .ey-hero-title { font-size: clamp(2.65rem, 14vw, 3.5rem); }
          .ey-hero-descriptor { max-width: 100%; margin-bottom: 28px; }
          .ey-hero-mark-large { right: -44vw; top: 15%; width: 86vw; height: 86vw; }
          .ey-hero-mark-small { right: 4vw; top: 26%; width: 42vw; height: 42vw; }
          .ey-hero-cta-row { width: 100%; align-items: stretch; }
          .ey-hero-cta-primary, .ey-hero-cta-secondary { width: 100%; padding-inline: 24px; }
          .ey-impact-bento-section, .ey-beyond { padding-block: 40px; }
          .ey-impact-bento-shell { gap: 36px; }
          .ey-impact-bento-cta { width: 100%; padding-inline: 24px; }
          .ey-impact-bento-grid { grid-template-columns: 1fr; gap: 20px; }
          .ey-impact-bento-card, .ey-impact-photo-card, .ey-impact-bento-card-feature, .ey-impact-bento-card-community { grid-column: 1 / -1; }
          .ey-impact-bento-card { min-height: 190px; padding: 24px; }
          .ey-impact-bento-card-feature { min-height: 190px; }
          .ey-impact-bento-card-feature .ey-impact-number,
          .ey-impact-bento-card-feature .ey-impact-bento-number { font-size: clamp(42px, 15vw, 58px); }
          .ey-impact-photo-card { padding: 0; min-height: 240px; height: 240px; }
          .ey-beyond-grid { gap: 32px; }
          .ey-beyond-note { margin-top: 28px; }
          .ey-impact-bento-dashboard-cta-row { justify-content: center; }
          .ey-impact-bento-dashboard-cta, .ey-impact-scale-cta { width: 100%; padding-inline: 24px; }
          .ey-impact-final { padding: 40px 16px; }
          .ey-impact-final-heading { font-size: clamp(2.65rem, 14vw, 3.5rem); }
          .ey-impact-final-actions { align-items: stretch; }
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="ey-hero">
          <img
            src="/images/impact-hero-celebration.jpg"
            alt="Community members and youth celebrating impact"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,14,0.25)_0%,rgba(11,15,14,0.45)_30%,rgba(11,15,14,0.80)_65%,rgba(11,15,14,0.97)_100%)]"
            style={{ zIndex: 1 }}
            aria-hidden="true"
          />
          {/* Decorative brand icon overlay */}
          <img
            src="/logo/empowayouth-icon.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-8%] top-[18%] z-[1] h-[420px] w-[420px] select-none object-contain opacity-20 md:h-[620px] md:w-[620px]"
          />
          <div aria-hidden="true" className="ey-hero-mark ey-hero-mark-large" />
          <div aria-hidden="true" className="ey-hero-mark ey-hero-mark-small" />

          <div className="ey-hero-inner">
            <div className="ey-hero-content">
              <p className="ey-kicker">
                <span>One Movement That Delivers.</span>
              </p>
              <h1 className="ey-hero-title">
                <span>One Movement That </span>
                <span className="ey-heading-italic">Delivers</span>
                <span>.</span>
              </h1>
              <p className="ey-hero-descriptor">
                <span>
                  Measurable pathways for young people to build confidence, access opportunity, and move their
                  communities forward.
                </span>
              </p>
              <div className="ey-hero-cta-row">
                <a href="#impact" className="ey-hero-cta-primary">
                  <span>Explore The Impact</span>
                </a>
                <Link href="/partner" className="ey-hero-cta-secondary">
                  <span>Join The Movement</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Bento Section */}
        <section id="impact" aria-labelledby="metrics-heading" className="ey-impact-bento-section">
          <div className="ey-impact-section-container ey-impact-bento-shell">
            <div className="ey-impact-bento-copy">
              <p className="ey-kicker">
                <span>Our Impact</span>
              </p>
              <h2 id="metrics-heading" className="ey-section-heading ey-impact-bento-heading">
                <span>Impact you can count. Futures you can </span>
                <span className="ey-heading-italic">feel</span>
                <span>.</span>
              </h2>
              <p className="ey-body-copy">
                From employment pathways to community partnerships, EmpowaYouth turns access into measurable momentum.
                Each number represents a young person moving closer to dignity, confidence, and opportunity.
              </p>
              <Link href="/about" className="ey-impact-bento-cta">
                <span>See Our Stories</span>
              </Link>
            </div>

            <div className="ey-impact-bento-dashboard">
              <div ref={bentoGridRef} className="ey-impact-bento-grid" aria-label="EmpowaYouth impact statistics">
                <article
                  className="ey-impact-bento-card ey-impact-bento-card-feature ey-impact-bento-stat-card ey-anim-stat-cell"
                  data-value="98000"
                  data-suffix="+"
                  style={{ transitionDelay: '0ms' }}
                >
                  <div className="ey-impact-bento-stat">
                    <strong className="ey-impact-number ey-impact-bento-number">
                      <span>98,000+</span>
                    </strong>
                    <span className="ey-impact-bento-label">Youth Impacted</span>
                  </div>
                </article>

                <article
                  className="ey-impact-bento-card ey-impact-bento-stat-card ey-anim-stat-cell"
                  data-value="690"
                  data-suffix="+"
                  style={{ transitionDelay: '80ms' }}
                >
                  <div className="ey-impact-bento-stat">
                    <strong className="ey-impact-number ey-impact-bento-number">
                      <span>690+</span>
                    </strong>
                    <span className="ey-impact-bento-label">Jobs Created</span>
                  </div>
                </article>

                <article
                  className="ey-impact-bento-card ey-impact-bento-stat-card ey-anim-stat-cell"
                  data-value="120"
                  data-suffix="+"
                  style={{ transitionDelay: '160ms' }}
                >
                  <div className="ey-impact-bento-stat">
                    <strong className="ey-impact-number ey-impact-bento-number">
                      <span>120+</span>
                    </strong>
                    <span className="ey-impact-bento-label">Partner Organisations</span>
                  </div>
                </article>

                <article
                  className="ey-impact-bento-card ey-impact-bento-card-community ey-impact-bento-stat-card ey-anim-stat-cell"
                  data-value="45"
                  data-suffix="+"
                  style={{ transitionDelay: '240ms' }}
                >
                  <div className="ey-impact-bento-stat">
                    <strong className="ey-impact-number ey-impact-bento-number">
                      <span>45+</span>
                    </strong>
                    <span className="ey-impact-bento-label">Communities Reached</span>
                  </div>
                  <p className="ey-impact-bento-quote">
                    <span>&ldquo;Every township has talent. Our work is to make sure opportunity can find it.&rdquo;</span>
                  </p>
                </article>

                <figure
                  className="ey-impact-bento-card ey-impact-photo-card ey-impact-bento-photo-card"
                  style={{ transitionDelay: '320ms' }}
                >
                  <img
                    className="ey-impact-bento-photo"
                    src="/images/youth-community-empowerment.jpg"
                    alt="Diverse African youth gathered in a community empowerment setting"
                  />
                  <div className="ey-impact-photo-overlay" aria-hidden="true">
                    <p className="ey-impact-photo-quote">
                      <span>Every young person deserves a fair shot.</span>
                      <span className="ey-impact-photo-caption">&mdash; EmpowaYouth Community</span>
                    </p>
                  </div>
                </figure>
              </div>

              <div className="ey-impact-bento-dashboard-cta-row">
                <Link href="/offerings" className="ey-impact-bento-cta ey-impact-bento-dashboard-cta">
                  <span>Explore Our Interventions</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond the Numbers Section */}
        <section aria-labelledby="beyond-heading" className="ey-beyond">
          <div className="ey-impact-section-container ey-beyond-grid">
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '3/4',
                borderRadius: '12px',
                minHeight: '380px',
              }}
            >
              <img
                src="/images/impact-beyond-numbers.jpg"
                alt="Empowered young South African innovator and entrepreneur"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
            <div>
              <p className="ey-kicker">
                <span>Beyond the Numbers</span>
              </p>
              <h2 id="beyond-heading" className="ey-section-heading ey-beyond-heading">
                <span>Beyond the </span>
                <span className="ey-heading-italic">Numbers</span>
              </h2>
              <blockquote className="ey-beyond-quote">
                Confidence restored. Futures redirected. Entire households lifted.
              </blockquote>
              <p className="ey-beyond-note">Narrative outcomes. Systemic change.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Final Call to Action */}
      <section className="ey-impact-final">
        <div className="ey-impact-final-inner">
          <p className="ey-impact-final-kicker">
            <span className="ey-impact-final-kicker-rule" aria-hidden="true" />
            <span>Impact / Keep The Momentum Going</span>
          </p>
          <h2 className="ey-impact-final-heading">
            <span>The Work Is Far From </span>
            <span className="ey-heading-italic">Over</span>
            <span>.</span>
          </h2>
          <div className="ey-impact-final-rule" aria-hidden="true" />
          <p className="ey-impact-final-copy">
            <span>Every number represents a real young person. Help us add more to the story.</span>
          </p>
          <div className="ey-impact-final-actions">
            <Link
              href="/partner"
              className="ey-impact-scale-cta"
            >
              <span>Help Us Scale Our Impact</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
