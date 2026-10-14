'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronDown,
  GraduationCap,
  Network,
  ShieldCheck,
  Users,
  Mail,
  Phone,
  MapPin,
  Building2,
  Sparkles,
} from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';
import { PartnerLogoMarquee } from '@/components/PartnerLogoMarquee';
import { PartnershipForm } from '@/components/PartnershipForm';


const stats = [
  { value: 98000, suffix: '+', label: 'Young people activated' },
  { value: 690, suffix: '+', label: 'Job placements' },
  { value: 248, suffix: '', label: 'Learnerships delivered' },
  { value: 2000, suffix: '', label: 'Accredited skills programmes' },
  { value: 300, suffix: '', label: 'Bursaries awarded' },
  { value: 150, suffix: '', label: 'Youth-owned businesses funded' },
];

const strategicAvenues = [
  {
    title: 'EmpowaYouth Summits',
    body: 'Equip futures and engineer momentum through intensive, high-energy skills programmes, mentorship, and mindset shifts designed for real-world readiness. These are accelerators of ambition across all nine provinces.',
  },
  {
    title: 'Sector Experiences',
    body: 'Bridge the gap between youth talent and future-facing industries — from the Green Economy and AI to Agri-tech and Digital Media. We design sustainable employment pipelines to the sectors shaping tomorrow.',
  },
  {
    title: 'Pitch Competitions',
    body: 'Provide direct access to capital and market access for youth-owned businesses through our Biz-in-a-Box Dragons Den Pitching Competition. We back brave entrepreneurs who create jobs in their own communities.',
  },
  {
    title: 'EmpowaYouth Indaba',
    body: 'A high-stakes convening of policymakers, CEOs, SETA leadership, and ecosystem architects focused on structural collaboration, policy alignment, and systemic reform to dismantle youth unemployment at scale.',
  },
];

export default function PartnerWithUsPage() {
  useEmpowaYouthScrollAnimations();

  const [activeAvenue, setActiveAvenue] = useState<number>(0);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animated stat counters triggered on scroll
  useEffect(() => {
    const root = statsRef.current;
    if (!root) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target as HTMLElement;
          const numberEl = card.querySelector<HTMLElement>('.stat-number');
          if (!numberEl || card.dataset.counted === 'true') return;
          card.dataset.counted = 'true';
          const target = Number(card.dataset.value);

          if (prefersReducedMotion) {
            numberEl.textContent = `${target.toLocaleString('en-US')}${card.dataset.suffix || ''}`;
            return;
          }

          const start = performance.now();
          const duration = 1800;
          const frame = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            numberEl.textContent = `${Math.round(target * eased).toLocaleString('en-US')}${card.dataset.suffix || ''}`;
            if (progress < 1) {
              requestAnimationFrame(frame);
            }
          };
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.25 }
    );

    const cards = root.querySelectorAll('.stat-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--pt-ink)] text-[var(--pt-paper)]" id="partner-with-us">
      {/* Hero Section */}
      <section
        className="ey-partner-hero relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--pt-ink)] px-4 pb-12 pt-[clamp(120px,18vw,200px)] text-[var(--pt-paper)] sm:px-6 md:px-8 md:pb-20 lg:px-[var(--pt-container-pad)] lg:pb-[clamp(80px,8vw,112px)]"
        id="hero"
      >
        <img
          src="https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4962.jpg"
          alt="South African youth engaged in empowerment summits"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(11,15,14,0.25)_0%,rgba(11,15,14,0.45)_30%,rgba(11,15,14,0.80)_65%,rgba(11,15,14,0.97)_100%)]"
          aria-hidden="true"
        />
        {/* Decorative brand icon overlay */}
        <img
          src="/logo/empowayouth-icon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-[18%] z-[1] h-[420px] w-[420px] select-none object-contain opacity-20 md:h-[620px] md:w-[620px]"
        />

        <div className="ey-hero-content relative z-10 mx-auto w-full max-w-[var(--pt-container)]">
          <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
            <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
            <span>The Skills Revolution</span>
          </p>
          <h1 className="mb-6 max-w-5xl text-[clamp(3.5rem,9vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance]">
            <span>Drive the Future with </span>
            <span className="ey-heading-italic">EmpowaYouth</span>
          </h1>
          <p className="ey-hero-desc mb-4 max-w-[680px] text-[16px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
            The engine of South Africa&apos;s Skills Revolution. A bold, youth-powered movement architected to unlock
            real, scalable pathways to jobs, education, entrepreneurship, and economic inclusion.
          </p>
          <p className="mb-8 max-w-[650px] text-[15px] font-normal italic text-[var(--pt-paper)] opacity-90">
            &ldquo;The future isn&apos;t sponsored. It&apos;s co-authored by those who dare to lead it.&rdquo;
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#partner-form" className="ey-button ey-button-light-filled inline-flex items-center gap-2">
              <span>Initiate a Partnership</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#proof"
              className="inline-flex min-h-12 items-center justify-center !rounded-[6px] border-[1.5px] border-[rgba(244,240,232,0.35)] bg-transparent px-7 py-3.5 text-[14px] font-bold leading-[1.2] tracking-[0.02em] text-[var(--pt-paper)] no-underline transition-all duration-200 ease-out hover:border-[var(--pt-accent)] hover:bg-white/5 hover:text-[var(--pt-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pt-accent)]"
            >
              <span>View Impact</span>
            </a>
          </div>
        </div>
      </section>

      {/* Value Section (The Why) */}
      <section id="value" className="relative overflow-hidden bg-[var(--pt-ink)] px-4 py-20 md:px-[var(--pt-container-pad)] md:py-32">
        <img
          src="https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5688.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-10"
        />
        <div className="relative z-10 mx-auto max-w-[var(--pt-container)]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
              <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
              <span>The Why</span>
              <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
            </p>
            <h2 className="mb-6 text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-[var(--pt-paper)]">
              <span>Powering </span>
              <span className="ey-heading-italic">Youth</span>
              <span> Impact</span>
            </h2>
            <p className="text-[16px] font-normal leading-[1.75] text-[var(--pt-muted)]">
              This movement is the product of strategic alliances with bold brands and future-focused firms that do not
              just support programmes — they power ecosystems, fuel purpose, and engineer transformation. These visionary
              organisations are not investing in youth as a gesture; they are investing in the architecture of South
              Africa&apos;s next economy.
            </p>
          </div>

          {/* Mandate Bento Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
            <article className="group flex min-h-[300px] flex-col justify-between border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pt-accent)] hover:bg-[color-mix(in_srgb,var(--pt-accent)_8%,transparent)]">
              <div>
                <span className="block text-[clamp(44px,5vw,72px)] font-black tracking-[-0.05em] text-[var(--pt-accent)]/20 transition-colors group-hover:text-[var(--pt-accent)]/40">
                  01
                </span>
                <ShieldCheck className="mt-4 h-8 w-8 text-[var(--pt-accent)]" />
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-base font-bold uppercase tracking-wide text-[var(--pt-paper)]">
                  ESG Imperatives
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--pt-muted)]">
                  Advance Environmental, Social, and Governance performance at scale with measurable impact metrics.
                </p>
              </div>
            </article>

            <article className="group flex min-h-[300px] flex-col justify-between border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pt-accent)] hover:bg-[color-mix(in_srgb,var(--pt-accent)_8%,transparent)]">
              <div>
                <span className="block text-[clamp(44px,5vw,72px)] font-black tracking-[-0.05em] text-[var(--pt-accent)]/20 transition-colors group-hover:text-[var(--pt-accent)]/40">
                  02
                </span>
                <Network className="mt-4 h-8 w-8 text-[var(--pt-accent)]" />
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-base font-bold uppercase tracking-wide text-[var(--pt-paper)]">
                  Enterprise & Supplier Development (ESD)
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--pt-muted)]">
                  Build robust supplier pipelines and access procurement-ready businesses from underserved townships.
                </p>
              </div>
            </article>

            <article className="group flex min-h-[300px] flex-col justify-between border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pt-accent)] hover:bg-[color-mix(in_srgb,var(--pt-accent)_8%,transparent)]">
              <div>
                <span className="block text-[clamp(44px,5vw,72px)] font-black tracking-[-0.05em] text-[var(--pt-accent)]/20 transition-colors group-hover:text-[var(--pt-accent)]/40">
                  03
                </span>
                <GraduationCap className="mt-4 h-8 w-8 text-[var(--pt-accent)]" />
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-base font-bold uppercase tracking-wide text-[var(--pt-paper)]">
                  SETA Skills Pipelines
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--pt-muted)]">
                  Deploy accredited, high-demand skills programmes and fulfill workplace development scorecards directly.
                </p>
              </div>
            </article>

            <article className="group flex min-h-[300px] flex-col justify-between border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pt-accent)] hover:bg-[color-mix(in_srgb,var(--pt-accent)_8%,transparent)]">
              <div>
                <span className="block text-[clamp(44px,5vw,72px)] font-black tracking-[-0.05em] text-[var(--pt-accent)]/20 transition-colors group-hover:text-[var(--pt-accent)]/40">
                  04
                </span>
                <Users className="mt-4 h-8 w-8 text-[var(--pt-accent)]" />
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-base font-bold uppercase tracking-wide text-[var(--pt-paper)]">
                  Socio-Economic Development (SED)
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--pt-muted)]">
                  Create lasting economic participation in high-need communities through verified, audited investments.
                </p>
              </div>
            </article>
          </div>

          {/* Quote Band */}
          <div className="mt-20 flex flex-col items-start justify-between gap-8 border-y border-white/10 py-12 md:flex-row md:items-center md:gap-16">
            <div className="flex-1 border-l-4 border-[var(--pt-accent)] pl-6 md:pl-10">
              <blockquote className="text-[clamp(1.35rem,2.8vw,2.4rem)] font-bold uppercase leading-tight tracking-tight text-[var(--pt-paper)]">
                &ldquo;Backed by a national masterplan and multi-year monetisation model, EmpowaYouth transforms
                potential into productivity, purpose into policy, and promise into measurable{' '}
                <span className="ey-heading-italic text-[var(--pt-accent)]">performance.</span>&rdquo;
              </blockquote>
            </div>
            <aside className="w-full shrink-0 rounded border border-white/10 bg-white/[0.02] p-6 md:w-72">
              <span className="label-mono block text-xs font-bold text-[var(--pt-accent)]">
                Powered by EmpowaWorx
              </span>
              <p className="mt-2 text-xs leading-relaxed text-[var(--pt-muted)]">
                The Continent&apos;s Premier High-Impact Development Agency.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Proof Section (Marquee & Impact Stats) */}
      <section id="proof" className="bg-[var(--pt-ink)] px-4 py-20 md:px-[var(--pt-container-pad)] md:py-28">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
            <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
            <span>The Who and What</span>
          </p>
          <h2 className="mb-4 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-[var(--pt-paper)]">
            <span>Inclusion </span>
            <span className="ey-heading-italic">Scales</span>
            <span> Here. Legacy in Action.</span>
          </h2>
          <p className="max-w-2xl text-[16px] leading-relaxed text-[var(--pt-muted)]">
            Over 200 leading brands, foundations, and mission-aligned organisations have partnered with EmpowaYouth to
            rewrite the South African youth narrative.
          </p>

          {/* Marquee Window */}
          <PartnerLogoMarquee className="my-14 py-7" />

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                data-value={stat.value}
                data-suffix={stat.suffix}
                className="stat-card flex min-h-[170px] flex-col justify-end border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[var(--pt-accent)] hover:bg-[color-mix(in_srgb,var(--pt-accent)_6%,transparent)]"
              >
                <span className="stat-number text-[clamp(2.5rem,4.5vw,3.8rem)] font-extrabold leading-none tracking-tight text-[var(--pt-accent)]">
                  0{stat.suffix}
                </span>
                <span className="stat-label mt-3 text-xs font-bold uppercase tracking-widest text-[var(--pt-muted)]">
                  {stat.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Avenues Accordion (Paper / Light Section) */}
      <section id="avenues" className="bg-[var(--pt-paper)] px-4 py-20 text-[var(--pt-ink)] md:px-[var(--pt-container-pad)] md:py-28">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
                <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
                <span>How to Engage</span>
              </p>
              <h2 className="text-[clamp(2.5rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-[var(--pt-ink)]">
                <span>Bold </span>
                <span className="ey-heading-italic text-[var(--pt-accent)]">Instruments</span>
                <span> for Systemic Change</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--pt-muted)]">
                From high-capacity national summits to bespoke industry pipelines, explore the proven engagement models
                that deliver dual social impact and quantifiable corporate value.
              </p>
            </div>

            <div className="divide-y divide-[var(--pt-ink)]/15 lg:col-span-7">
              {strategicAvenues.map((avenue, index) => {
                const isOpen = activeAvenue === index;
                return (
                  <article key={avenue.title} className="py-2">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActiveAvenue(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-[var(--pt-ink)] transition-colors hover:text-[var(--pt-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--pt-accent)]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-extrabold text-[var(--pt-accent)]">0{index + 1}</span>
                        <span>{avenue.title}</span>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[var(--pt-ink)] transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[var(--pt-accent)]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-6 pt-1 text-[15px] leading-relaxed text-[var(--pt-muted)] animate-[fadeIn_250ms_ease-out]">
                        <p>{avenue.body}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Step Consultation Request Form */}
      <section id="partner-form" className="bg-[var(--pt-ink)] px-4 py-20 text-[var(--pt-paper)] md:px-[var(--pt-container-pad)] md:py-32">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
              <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
              <span>Co-Author the Future</span>
              <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-[var(--pt-paper)]">
              <span>Initiate a </span>
              <span className="ey-heading-italic">Partnership</span>
            </h2>
            <p className="mt-4 text-[16px] text-[var(--pt-muted)]">
              This is a premium B2B consultation request structured to match your organization with the right strategic
              mandate and intervention pathway.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <PartnershipForm />
            </div>

            {/* Direct Contact Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-lg border-t-4 border-[var(--pt-accent)] bg-white/[0.03] p-7">
                <span className="label-mono text-xs text-[var(--pt-accent)]">Partnerships &amp; Inquiries</span>
                <h3 className="mt-2 text-xl font-bold uppercase text-[var(--pt-paper)]">EMPOWAWORX HOUSE</h3>
                <p className="text-xs uppercase tracking-wider text-[var(--pt-muted)]">364 Pine Avenue, Ferndale, Randburg, 2196</p>

                <div className="mt-6 space-y-4 text-sm text-[var(--pt-muted)]">
                  <div>
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                      Call Us
                    </span>
                    <div className="space-y-1">
                      <a
                        href="tel:+27114827256"
                        className="flex items-center gap-3 transition-colors hover:text-[var(--pt-accent)]"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-[var(--pt-accent)]" />
                        <span>+27 (0) 11 482 7256</span>
                      </a>
                      <a
                        href="tel:+27114827257"
                        className="flex items-center gap-3 transition-colors hover:text-[var(--pt-accent)]"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-[var(--pt-accent)]" />
                        <span>+27 (0) 11 482 7257</span>
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                      Email Us
                    </span>
                    <a
                      href="mailto:info@empowaworx.co.za"
                      className="flex items-center gap-3 transition-colors hover:text-[var(--pt-accent)]"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-[var(--pt-accent)]" />
                      <span>info@empowaworx.co.za</span>
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                      Head Office
                    </span>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--pt-accent)]" />
                      <span className="text-xs leading-relaxed text-[var(--pt-paper)]">
                        EMPOWAWORX HOUSE<br />
                        364 Pine Avenue, Ferndale, Randburg, 2196
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <span className="label-mono text-[10px] text-[var(--pt-muted)]">Accreditation</span>
                  <p className="mt-1 text-xs font-medium text-[var(--pt-paper)]">
                    B-BBEE Level 1 Contributor &bull; Fully Audited Impact Reporting
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
