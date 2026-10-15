'use client';

import Link from 'next/link';
import { ArrowRight, Users, Calendar, Clock, MapPin } from 'lucide-react';
import {
  useEmpowaYouthScrollAnimations,
  useEmpowaYouthImpactCounters,
  useEmpowaYouthBentoCardAnimations,
} from '@/hooks/use-scroll-animations';
import { PartnerLogoMarquee } from '@/components/PartnerLogoMarquee';
import { PastSpeakersSection } from '@/components/PastSpeakersSection';
import { HomeVideoShowcase } from '@/components/HomeVideoShowcase';

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
      {/* 01. Video Showcase Section */}
      <HomeVideoShowcase />

      {/* 02. From Orange Farm to the Nation Section */}
      <section
        id="from-orange-farm-to-the-nation"
        className="ey-hero ey-hero--after-video relative w-full overflow-hidden bg-[var(--pt-ink)] border-b border-[rgba(244,240,232,0.08)]"
        aria-labelledby="ey-hero-title"
      >
        {/* Background Image: Vaal Week Hero Image */}
        <img
          src="/images/youth/IMG_2727.jpg"
          alt="Young people gathered at EmpowaYouth Week marquee"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        {/* Editorial Dark Overlay for optimal text readability */}
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(11,15,14,0.76)_0%,rgba(11,15,14,0.85)_35%,rgba(11,15,14,0.94)_70%,rgba(11,15,14,0.98)_100%)] pointer-events-none"
          aria-hidden="true"
        />
        {/* Ambient Warm Accent Underglow */}
        <div
          className="absolute -top-32 left-1/3 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,93,4,0.20)_0%,transparent_70%)] pointer-events-none z-[1]"
          aria-hidden="true"
        />

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

      {/* 03. Event Invite Banner Section: EmpowaYouth Vaal Week 2027 (Fullwidth, Edge-to-Edge) */}
      <section id="event-invite-banner" className="w-full bg-[var(--pt-ink)] p-0 m-0 border-b border-[rgba(244,240,232,0.08)]">
        <Link
          href="/vaal"
          className="group block relative w-full overflow-hidden transition-all duration-300"
          title="EmpowaYouth Vaal Week 2027 — Click to Explore & Register"
          aria-label="EmpowaYouth Vaal Week 2027 — 3–7 May 2027 at Koinonia Bible Church, Sebokeng. Click to view event details and register."
        >
          <img
            src="/Vaal-Empowayouth-Week2027-invite.jpg"
            alt="EmpowaYouth Vaal Week 2027 Official Invitation — 3–7 May 2027 at Koinonia Bible Church, Sebokeng, Zone 14. Jobs, Careers, Funding, Impact. Register Now"
            className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            loading="eager"
          />
        </Link>
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
              <span>9</span>
            </strong>
            <span className="ey-hero-stat-label">Provinces Across South Africa</span>
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
                data-value="2000"
                data-suffix="+"
                style={{ transitionDelay: '160ms' }}
              >
                <div className="ey-impact-bento-stat">
                  <strong className="ey-impact-number">
                    <span>2,000+</span>
                  </strong>
                  <span className="ey-impact-bento-label">Accredited Skills Programmes</span>
                </div>
              </li>

              <li
                className="ey-impact-bento-card ey-impact-bento-card-community ey-anim-stat-cell"
                data-value="150"
                data-suffix="+"
                style={{ transitionDelay: '240ms' }}
              >
                <div className="ey-impact-bento-stat">
                  <strong className="ey-impact-number">
                    <span>150+</span>
                  </strong>
                  <span className="ey-impact-bento-label">Youth-Owned Businesses Funded</span>
                </div>
                <p className="ey-impact-bento-quote">
                  <span>&ldquo;Confidence restored. Futures redirected. Entire households lifted.&rdquo;</span>
                </p>
              </li>

              <li
                className="ey-impact-bento-card ey-impact-photo-card group overflow-hidden rounded-2xl"
                style={{ transitionDelay: '320ms' }}
              >
                <img
                  src="https://cms.empowayouth.co.za/wp-content/uploads/2025/07/hundred-thousand.jpg"
                  alt="Every young person deserves a fair shot — EmpowaYouth Community"
                  className="transition-transform duration-700 ease-out hover:scale-105 group-hover:scale-105"
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

      {/* ======================================================== */}
      {/* Vaal EmpowaYouth Week Spotlight & CTA Section            */}
      {/* ======================================================== */}
      <section
        id="vaal-week-spotlight"
        className="relative overflow-hidden bg-[var(--pt-ink)] px-4 py-20 text-[var(--pt-paper)] sm:px-6 md:px-8 md:py-28 lg:px-[var(--pt-container-pad)] lg:py-32 border-t border-b border-[rgba(244,240,232,0.08)]"
        aria-labelledby="vaal-spotlight-title"
      >
        {/* Ambient Warm Radial Background Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,131,42,0.15)_0%,transparent_70%)] z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[var(--pt-container)]">
          {/* Header Row */}
          <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
            <p className="mb-3 inline-flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--pt-accent)]">
              <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
              <span>Flagship Regional Summit</span>
              <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
            </p>
            <h2
              id="vaal-spotlight-title"
              className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)]"
            >
              <span>The Movement Under </span>
              <span className="ey-heading-italic text-[var(--pt-accent)]">The Dome</span>
              <span>.</span>
            </h2>

            {/* Event Dates, Times & Venue Badge */}
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-[rgba(232,93,4,0.35)] bg-[rgba(232,93,4,0.12)] px-4 py-2 text-xs font-semibold text-white backdrop-blur-md shadow-lg shadow-[rgba(232,93,4,0.1)]">
              <span className="inline-flex items-center gap-1.5 text-[var(--pt-accent)] font-bold">
                <Calendar className="h-3.5 w-3.5" />
                <span>3–7 May 2027</span>
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <Clock className="h-3.5 w-3.5 text-[var(--pt-accent)]" />
                <span>08:00–15:00 daily</span>
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <MapPin className="h-3.5 w-3.5 text-[var(--pt-accent)]" />
                <span>Koinonia Bible Church, Sebokeng, Zone 14</span>
              </span>
            </div>

            <p className="mt-5 text-sm sm:text-base text-[var(--pt-muted)] leading-relaxed max-w-2xl mx-auto">
              South Africa&apos;s largest youth economic mobilization converges under the iconic Dome.
              Five dedicated industry tracks uniting 10,000+ ambitious young South Africans with corporate hiring pods,
              pitch competitions, and accredited industry pipelines.
            </p>
          </div>

          {/* Visual Showcase: The Dome Experience & Powerful Imagery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {/* Primary Centerpiece: The Monumental Dome Arena Photo */}
            <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-[rgba(244,240,232,0.14)] bg-black shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/images/youth/IMG_2727.jpg"
                  alt="Over 10,000 young South Africans gathered inside the massive EmpowaYouth dome marquee"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pt-ink)] via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-5 inset-x-5 p-5 rounded-2xl bg-[rgba(11,15,14,0.85)] border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                  10,000+ Young Leaders &bull; Live Festival Plenary
                </span>
                <p className="text-sm sm:text-base font-extrabold text-white leading-snug">
                  The iconic Dome marquee transformed into a live economic powerhouse with plenary keynotes, exhibition booths, and direct recruiter interviews.
                </p>
              </div>
            </div>

            {/* Right Column Bento Stack: Action, Capital & Direct Access */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Photo 1: Youth Agency & Fists Raised */}
              <div className="group relative rounded-3xl overflow-hidden border border-[rgba(244,240,232,0.14)] bg-black shadow-2xl">
                <div className="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden">
                  <img
                    src="/images/youth/feature_image_23.jpg"
                    alt="Young woman triumphant at EmpowaYouth summit with fists raised"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--pt-ink)] via-black/35 to-transparent" />
                </div>
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-0.5">
                    Agency &bull; Unstoppable Momentum
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-snug">
                    Overcoming economic exclusion: Claiming careers, dignity, and real power.
                  </p>
                </div>
              </div>

              {/* Photo 2: Live Pitch Capital & Deal Room */}
              <div className="group relative rounded-3xl overflow-hidden border border-[rgba(244,240,232,0.14)] bg-black shadow-2xl">
                <div className="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden">
                  <img
                    src="/images/youth/hundred-thousand.jpg"
                    alt="Township entrepreneur awarded R100,000 Biz-in-a-Box cheque on stage"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--pt-ink)] via-black/35 to-transparent" />
                </div>
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-0.5">
                    Real Enterprise Capital &bull; Dragon&apos;s Den
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-snug">
                    Direct seed funding and corporate supplier contracts awarded live on stage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tertiary Gallery Strip (Mentor Access & Green / Tech Innovation) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Card 1: Mentorship Access */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-3 transition hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img
                  src="/images/youth/DSC_5402.jpg"
                  alt="Young delegate with executive mentor"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xs font-bold uppercase text-[var(--pt-paper)] tracking-wide">
                Direct Executive Access
              </h4>
              <p className="text-[11px] text-[var(--pt-muted)] mt-1">
                Connecting township talent directly with CEOs, ministers, and decision-makers.
              </p>
            </div>

            {/* Card 2: Green & AgriTech Economy */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-3 transition hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img
                  src="/images/youth/DSC_8709.jpg"
                  alt="Young agritech and green economy innovators"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xs font-bold uppercase text-[var(--pt-paper)] tracking-wide">
                Green Economy &amp; AgriTech
              </h4>
              <p className="text-[11px] text-[var(--pt-muted)] mt-1">
                Circular economy solutions, sustainable farming, and waste-to-energy ventures.
              </p>
            </div>

            {/* Card 3: AI & Digital Innovation */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-3 transition hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img
                  src="/images/youth/feature_image_10-1.jpg"
                  alt="AI, software development and deep tech session"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xs font-bold uppercase text-[var(--pt-paper)] tracking-wide">
                4IR, AI &amp; Deep Tech
              </h4>
              <p className="text-[11px] text-[var(--pt-muted)] mt-1">
                Coding arenas, fintech labs, and cloud architecture career fast-tracks.
              </p>
            </div>

            {/* Card 4: Summit Crowd Movement */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] p-3 transition hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img
                  src="/images/summit-crowd-movement.jpg"
                  alt="Packed summit audience moving together"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xs font-bold uppercase text-[var(--pt-paper)] tracking-wide">
                Audited Scale &amp; Impact
              </h4>
              <p className="text-[11px] text-[var(--pt-muted)] mt-1">
                Over 98,000 young South Africans mobilised across 9 provinces.
              </p>
            </div>
          </div>

          {/* Interactive Fast-Track Action Hub Banner */}
          <div className="rounded-3xl border border-[rgba(244,240,232,0.14)] bg-gradient-to-br from-[#121917] via-[#0d1412] to-[#070a09] p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[rgba(232,93,4,0.15)] border border-[rgba(232,93,4,0.3)] text-xs font-semibold text-[var(--pt-accent)] mb-3">
                  <span className="font-bold">Next Summit:</span>
                  <span>3–7 May 2027</span>
                  <span className="text-white/30">•</span>
                  <span>08:00–15:00 daily</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/90">Koinonia Bible Church, Sebokeng, Zone 14</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white leading-tight">
                  Be Part of South Africa&apos;s Most Consequential Youth Summit
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[var(--pt-muted)] leading-relaxed">
                  Join 10,000+ delegates and 200+ partner brands rewriting the economic narrative.
                  Registration is 100% free for youth delegates, with corporate exhibitor pods and ESD sponsorship packages available.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
                <Link
                  href="/vaal"
                  className="ey-button ey-button-dark-filled inline-flex items-center justify-center gap-2 min-h-[50px] px-7"
                >
                  <span>Explore Vaal Week</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/vaal#participate"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-md border border-[var(--pt-accent)] bg-[rgba(232,131,42,0.12)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--pt-accent)] transition-all duration-200 hover:bg-[var(--pt-accent)] hover:text-white"
                >
                  <Users className="h-4 w-4" />
                  <span>Register / Partner</span>
                </Link>
              </div>
            </div>

            {/* Quick Feature Badges */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-[var(--pt-paper)] block">5 Days</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--pt-muted)]">Dedicated Sectors</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-[var(--pt-accent)] block">10,000+</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--pt-muted)]">Youth Delegates</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-[var(--pt-paper)] block">100+</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--pt-muted)]">Power Panels</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-[var(--pt-accent)] block">40+</span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--pt-muted)]">Experiential Zones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Speakers Block */}
      <PastSpeakersSection id="previous-speakers" />

      {/* Brand Partners Section */}
      <section id="partners" className="ey-partners" aria-labelledby="ey-partners-title">
        <div className="ey-partners-inner">
          <div className="ey-partners-layout">
            <figure className="ey-partners-portrait ey-observe group overflow-hidden rounded-2xl">
              <img
                src="/images/youth-ambassador-portrait.jpg"
                alt="A confident young South African leader and youth ambassador"
                className="transition-transform duration-700 ease-out hover:scale-105 group-hover:scale-105"
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
                  <span className="ey-partners-trust-num">500+</span>
                  <span className="ey-partners-trust-label">High-Impact Voices</span>
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
