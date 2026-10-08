'use client';

import Link from 'next/link';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';

const programmes = [
  {
    number: '01',
    name: 'EmpowaYouth Summits (Weeks & Weekends)',
    description:
      'Intensive, high-energy programmes delivering critical skills and real-world readiness.',
    accent: 'var(--pt-accent)',
    ctaLabel: 'Attend a Summit',
    ctaHref: '/#events',
  },
  {
    number: '02',
    name: 'EmpowaYouth Indaba',
    description:
      'A think tank for policymakers, CEOs, and development leaders to tackle youth unemployment at scale.',
    accent: 'var(--pt-accent)',
    ctaLabel: 'Request an Invitation',
    ctaHref: 'mailto:info@empowaworx.co.za?subject=EmpowaYouth%20Indaba%20Invitation',
  },
  {
    number: '03',
    name: 'Pitch Competition',
    description: 'Direct access to capital for youth-owned businesses.',
    accent: 'var(--pt-accent)',
    ctaLabel: 'Enter Your Business',
    ctaHref: '/#events',
  },
  {
    number: '04',
    name: 'Experiences & Campaigns',
    description:
      'Mobile labs, pop-up expos, and on-the-ground township career activations.',
    accent: 'var(--pt-accent)',
    ctaLabel: undefined,
    ctaHref: undefined,
  },
  {
    number: '05',
    name: 'Industry Summits & Sector Experiences',
    description:
      'Bridging the gap to future-facing industries — Green Economy, AI, Agri-tech, Digital Media.',
    accent: 'var(--pt-accent)',
    ctaLabel: undefined,
    ctaHref: undefined,
  },
  {
    number: '06',
    name: 'EmpowaYouth Awards',
    description:
      'National honours elevating trailblazers and high-impact interventions.',
    accent: 'var(--pt-accent)',
    ctaLabel: undefined,
    ctaHref: undefined,
  },
];

const kickerClasses =
  "flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] before:block before:h-[2px] before:w-6 before:bg-[var(--pt-accent)] before:content-['']";

export default function OfferingsPage() {
  useEmpowaYouthScrollAnimations();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--pt-paper)] text-[var(--pt-ink)] font-['Manrope',Arial,sans-serif]">
      {/* Hero Section */}
      <section
        id="offerings"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[var(--pt-ink)] text-[var(--pt-paper)]"
        style={{
          minHeight: '100svh',
          paddingTop: 'clamp(104px, 18vw, 184px)',
          paddingBottom: 'clamp(40px, 8vw, 104px)',
          paddingInline: 'clamp(16px, 4vw, 48px)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop"
          alt="Young people in a programme workshop"
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,14,0.25)_0%,rgba(11,15,14,0.45)_30%,rgba(11,15,14,0.80)_65%,rgba(11,15,14,0.97)_100%)]"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />
        <div
          className="absolute right-[-8%] top-[18%] z-[1] h-[420px] w-[420px] border-[70px] border-[color-mix(in_srgb,var(--pt-accent)_20%,transparent)] md:h-[620px] md:w-[620px] md:border-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-[2] mx-auto w-full max-w-[var(--pt-container)]">
          <div>
            <p className={`${kickerClasses} mb-6`}>Strategic Interventions</p>
            <h1 className="mb-6 max-w-[12ch] text-[clamp(2.75rem,13vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] uppercase [text-wrap:balance]">
              <span>Bold Instruments for </span>
              <span className="ey-heading-italic">Systemic</span>
              <span> Change.</span>
            </h1>
            <p className="mb-8 max-w-[560px] border-l-2 border-[var(--pt-dark-divider)] pl-5 text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
              We create the rooms, routes, and resources that move young people closer to opportunity.
            </p>
            <div className="ey-hero-ctas flex flex-wrap items-center gap-3.5">
              <a href="#programmes" className="button-bold">
                <span>Explore Offerings</span>
              </a>
              <Link
                href="/partner"
                className="ey-prefooter-cta inline-flex min-h-12 items-center justify-center border border-[rgba(244,240,232,0.35)] px-7 py-3 text-sm font-bold tracking-[0.02em] text-[var(--pt-paper)] no-underline transition-colors duration-200 ease-out hover:border-[var(--pt-paper)] hover:bg-white/5"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>
          <div className="mt-[clamp(48px,7vw,80px)] border-t border-[var(--pt-dark-divider)] pt-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-muted)]">
              01 — 06 / Our offerings
            </span>
          </div>
        </div>
      </section>

      {/* Strategic Interventions Grid */}
      <section
        id="programmes"
        className="bg-[var(--pt-ink)] px-4 py-10 text-[var(--pt-paper)] md:px-[var(--pt-container-pad)] md:py-[clamp(80px,8vw,112px)]"
      >
        <div className="mx-auto grid max-w-[var(--pt-container)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programmes.map((programme) => (
            <article
              key={programme.number}
              className="group relative flex min-h-[300px] flex-col justify-between border border-[var(--pt-dark-divider)] bg-[color-mix(in_srgb,var(--pt-ink)_92%,var(--pt-paper))] p-6 transition-[background,transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:bg-[color-mix(in_srgb,var(--pt-ink)_88%,var(--pt-paper))] hover:shadow-[8px_8px_0_0_color-mix(in_srgb,var(--pt-accent)_18%,transparent)] sm:p-8 md:min-h-[330px]"
            >
              <div className="flex items-start justify-between gap-5">
                <span
                  className="text-sm font-extrabold tracking-[-0.05em]"
                  style={{ color: programme.accent }}
                >
                  {programme.number}
                </span>
                <span className="h-2 w-2 bg-[var(--pt-accent)]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="max-w-[18ch] text-[clamp(1.85rem,8vw,2.15rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] uppercase">
                  {programme.name}
                </h3>
                <p className="mt-5 max-w-[600px] text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
                  {programme.description}
                </p>
                {programme.ctaLabel ? (
                  <Link
                    href={programme.ctaHref || '#'}
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-[var(--pt-accent)] px-7 py-3 text-center text-sm font-semibold tracking-[0.02em] text-[var(--pt-accent)] no-underline transition-[background,color,filter,transform] duration-200 ease-out hover:scale-[1.02] hover:bg-[var(--pt-accent)] hover:text-white hover:brightness-110 focus-visible:scale-[1.02] focus-visible:bg-[var(--pt-accent)] focus-visible:text-white md:w-fit"
                  >
                    <span>{programme.ctaLabel}</span>
                  </Link>
                ) : null}
              </div>
              <div
                className="mt-8 h-px w-full bg-[var(--pt-dark-divider)] transition-colors duration-200 ease-out group-hover:bg-[var(--pt-accent)]"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </section>

      {/* Pre-Footer Action Banner */}
      <section
        className="ey-prefooter bg-[var(--pt-ink)] border-t border-[var(--pt-dark-divider)]"
        style={{
          padding: 'clamp(56px,8vw,112px) clamp(16px,4vw,48px)',
        }}
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <p className="mb-7 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
            <span className="inline-block h-[2px] w-6 bg-[var(--pt-accent)]" aria-hidden="true" />
            <span>Our Offerings / Take The Next Step</span>
          </p>
          <h2 className="mb-0 text-[clamp(2.6rem,12vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance]">
            <span>Ready to Build Something </span>
            <span className="ey-heading-italic">Real</span>
            <span>.</span>
          </h2>
          <div
            className="my-7 h-[3px] w-16 bg-[var(--pt-accent)]"
            aria-hidden="true"
          />
          <p className="mb-8 max-w-[520px] text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
            From youth summits to enterprise development — find the offering that fits your ambition.
          </p>
          <div className="ey-prefooter-actions flex flex-wrap items-center gap-3.5">
            <Link
              href="/partner"
              className="button-bold"
            >
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
