'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Printer, Copy, Check, ArrowRight } from 'lucide-react';
import { pressReleases } from '@/data/press-releases';

const pressPriorities = [
  {
    id: 'inspired',
    title: 'INSPIRED',
    copy: 'Broaden young people’s understanding of possible futures through industry exposure, credible role models and practical insight into careers and enterprise.',
  },
  {
    id: 'connected',
    title: 'CONNECTED',
    copy: 'Bring young people closer to employers, education and training institutions, funders, mentors and market access networks.',
  },
  {
    id: 'transformed',
    title: 'TRANSFORMED',
    copy: 'Support progression from participation to practical next steps, including applications, training referrals, enterprise development support and further engagement with opportunity providers.',
  },
];

const opportunityAreas = [
  {
    id: 'health',
    label: 'Health, Wellness & Care Economy',
    copy: 'Career pathways, training opportunities and enterprise possibilities across health services, care and wellbeing.',
  },
  {
    id: 'digital',
    label: 'AI, Digital Economy & Deep Tech',
    copy: 'Digital capability, emerging technologies and the skills needed to participate in a changing world of work.',
  },
  {
    id: 'creative',
    label: 'Creative & Film Economy',
    copy: 'Creative careers, content production, intellectual property and the business of turning talent into income.',
  },
  {
    id: 'green',
    label: 'Green Economy & Climate Innovation',
    copy: 'Opportunities linked to renewable energy, sustainable agriculture, environmental services and circular business models.',
  },
  {
    id: 'enterprise',
    label: 'Entrepreneurship, Funding & Innovation Ecosystems',
    copy: 'Business readiness, funding requirements, enterprise development and access to customers and supply chains.',
  },
];

const eventDetails = [
  {
    id: 'dates',
    label: 'Dates',
    value: '3–7 May 2027',
  },
  {
    id: 'time',
    label: 'Time',
    value: '08:00–15:00 daily',
  },
  {
    id: 'venue',
    label: 'Venue',
    value: 'Koinonia Bible Church, Zone 14, Sebokeng',
  },
  {
    id: 'theme',
    label: 'Theme',
    value: "Powering South Africa's Youth Economy",
  },
  {
    id: 'attendance',
    label: 'Expected attendees',
    value: '10,000+',
  },
];

export function PressReleaseSection() {
  const [copied, setCopied] = useState(false);
  const releaseData = pressReleases[0];

  const handleCopy = () => {
    if (releaseData?.fullRawText) {
      navigator.clipboard.writeText(releaseData.fullRawText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="press-release"
      className="bg-[var(--pt-paper)] px-4 py-14 text-[var(--pt-ink)] sm:px-6 md:px-8 md:py-20 lg:px-[var(--pt-container-pad)] lg:py-[clamp(84px,9vw,120px)] scroll-mt-20"
      aria-labelledby="press-release-title"
    >
      <span id="press-releases" className="block -mt-20 pt-20" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[var(--pt-container)] gap-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.62fr)] lg:gap-16">
        <article id="printable-press-release" className="min-w-0 max-w-[780px]">
          <header className="border-b border-[var(--pt-light-divider)] pb-8">
            <p className="label-mono mb-4 text-[var(--pt-accent)]">
              <span>01 / Official Media release</span>
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--pt-muted)]">
              <span>FOR IMMEDIATE RELEASE</span>
            </p>
            <h2
              id="press-release-title"
              className="mt-5 max-w-4xl text-[clamp(34px,6.8vw,72px)] font-light normal-case leading-[1.02] tracking-[-0.045em] text-[var(--pt-ink)] [text-wrap:balance]"
            >
              <span>Vaal EmpowaYouth Week 2027 to connect young people with skills, industry and enterprise </span>
              <span className="ey-heading-italic">opportunities</span>
            </h2>
            <p className="mt-6 text-[14px] font-semibold leading-[1.5] tracking-[0.01em] text-[var(--pt-accent)]">
              <span>3–7 May 2027 | Koinonia Bible Church, Zone 14, Sebokeng</span>
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--pt-muted)]">
              <span>EmpowaYouth | INSPIRED | CONNECTED | TRANSFORMED</span>
            </p>
          </header>

          <div className="mt-10 grid gap-5">
            <p className="press-copy">
              <span>
                SEBOKENG, GAUTENG: Vaal EmpowaYouth Week 2027 will bring young people, employers, educators, funders and
                enterprise development partners together from 3–7 May 2027, creating a platform for access to career
                pathways, practical skills, entrepreneurship support and industry networks.
              </span>
            </p>
            <p className="press-copy">
              <span>
                Under the theme “Powering South Africa’s Youth Economy”, the five-day programme aims to attract more than
                10,000 young people across the week. Its focus is clear: help young people understand where
                opportunities exist, what those opportunities require and how to take the next step towards
                participation.
              </span>
            </p>
            <p className="press-copy">
              <span>
                For unemployed graduates, job seekers, aspiring entrepreneurs, matriculants and young people outside
                employment, education or training, the platform is designed to make an often fragmented opportunity
                landscape easier to navigate.
              </span>
            </p>
            <p className="press-copy">
              <span>
                For industry, it offers a concentrated opportunity to engage emerging talent, develop enterprise
                pipelines and connect organisational investment with the needs and ambitions of young South Africans.
              </span>
            </p>
          </div>

          <section className="press-section" aria-labelledby="priorities-title">
            <p className="text-[15px] font-semibold leading-[1.7] text-[var(--pt-ink)]">
              <span>Inspired. Connected. Transformed.</span>
            </p>
            <h3 id="priorities-title" className="press-heading">
              <span>Vaal EmpowaYouth Week 2027 is built around three strategic priorities:</span>
            </h3>
            <div className="mt-8 grid gap-7">
              {pressPriorities.map((priority) => (
                <section key={priority.id} className="grid gap-2">
                  <h4 className="priority-title">
                    <span>{priority.title}</span>
                  </h4>
                  <p className="press-copy-small">
                    <span>{priority.copy}</span>
                  </p>
                </section>
              ))}
            </div>
            <p className="press-copy-small mt-7">
              <span>The emphasis is on making each interaction useful beyond the event itself.</span>
            </p>
          </section>

          <section className="press-section" aria-labelledby="opportunity-areas-title">
            <h3 id="opportunity-areas-title" className="press-heading">
              <span>Five days focused on economic participation</span>
            </h3>
            <p className="press-copy-small mt-4">
              <span>The programme will explore five opportunity areas:</span>
            </p>
            <ol className="mt-7 grid gap-5">
              {opportunityAreas.map((area) => (
                <li key={area.id} className="grid gap-1 border-l border-[var(--pt-light-divider)] pl-5">
                  <span className="text-[15px] font-bold leading-[1.45] tracking-[-0.01em] text-[var(--pt-ink)]">
                    {area.label}
                  </span>
                  <span className="text-[15px] leading-[1.75] text-[var(--pt-muted)]">{area.copy}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="press-section" aria-labelledby="why-vaal-title">
            <h3 id="why-vaal-title" className="press-heading">
              <span>Why the Vaal matters</span>
            </h3>
            <div className="mt-5 grid gap-5">
              <p className="press-copy-small">
                <span>
                  The Vaal’s industrial heritage, entrepreneurial energy and young talent make it a significant setting
                  for conversations about South Africa’s economic future.
                </span>
              </p>
              <p className="press-copy-small">
                <span>
                  Hosting the programme in Sebokeng brings industry engagement closer to communities where access to
                  professional networks, career guidance and enterprise support can shape a young person’s next
                  decision.
                </span>
              </p>
              <p className="press-copy-small">
                <span>
                  The ambition is to strengthen the connections between local potential and the institutions,
                  industries and markets that can help it grow.
                </span>
              </p>
            </div>
          </section>

          <blockquote className="mt-14 border-l-2 border-[var(--pt-accent)] pl-6 sm:pl-8">
            <p className="max-w-3xl text-[clamp(24px,4vw,38px)] font-light leading-[1.18] tracking-[-0.035em] text-[var(--pt-ink)] [text-wrap:balance]">
              <span>“Young people need </span>
              <span className="ey-heading-italic">ambition</span>
              <span>
                {' '}
                backed by access: access to information, skills, decision-makers and a clear next step. Vaal
                EmpowaYouth Week 2027 is designed to bring those connections closer to the communities that need them.
                When young people are inspired, connected and supported to act, we create stronger foundations for
                enterprise, employment and economic participation.”
              </span>
            </p>
            <footer className="mt-5">
              <p className="text-[13px] font-semibold leading-[1.6] text-[var(--pt-muted)]">
                <span>Simphiwe Masiza, Founder &amp; Executive Producer, EmpowaYouth</span>
              </p>
            </footer>
          </blockquote>

          <section className="press-section" aria-labelledby="media-platform-title">
            <h3 id="media-platform-title" className="press-heading">
              <span>A compelling editorial platform for media houses</span>
            </h3>
            <div className="mt-5 grid gap-5">
              <p className="press-copy-small">
                <span>
                  Vaal EmpowaYouth Week offers media houses a local lens on issues of national importance: youth
                  employment, artificial intelligence, skills development, township enterprise, the creative economy and
                  the energy transition.
                </span>
              </p>
              <p className="press-copy-small">
                <span>
                  For audiences, coverage can deliver practical value through career guidance, explanations of funding
                  requirements, insights into emerging industries and information that helps young people make informed
                  decisions.
                </span>
              </p>
              <p className="press-copy-small">
                <span>
                  Media houses are invited to explore interviews, youth profiles, industry conversations, on-site
                  reporting and broadcast opportunities. Editorial access can be coordinated around programme
                  availability, participant consent and each newsroom’s requirements.
                </span>
              </p>
              <p className="press-copy-small">
                <span>
                  The platform offers scope to follow stories beyond the week, examining how young people progress and
                  what enables meaningful access to opportunity.
                </span>
              </p>
            </div>
          </section>

          <section className="press-section" aria-labelledby="industry-invitation-title">
            <h3 id="industry-invitation-title" className="press-heading">
              <span>An invitation to industry and opportunity providers</span>
            </h3>
            <div className="mt-5 grid gap-5">
              <p className="press-copy-small">
                <span>
                  Employers, training institutions, funders, development agencies and corporate partners are invited to
                  contribute opportunities and expertise aligned with their priorities.
                </span>
              </p>
              <p className="press-copy-small">
                <span>
                  Participation can support talent engagement, enterprise pipeline development and community
                  relationships, with agreed deliverables and reporting providing a basis for assessing value.
                </span>
              </p>
              <p className="text-[16px] font-semibold leading-[1.78] text-[var(--pt-ink)]">
                <span>Bring an opportunity. Share expertise. Help a young person take the next step.</span>
              </p>
            </div>
          </section>

          <section className="press-section" aria-labelledby="about-empowayouth-title">
            <h3 id="about-empowayouth-title" className="press-heading">
              <span>About EmpowaYouth</span>
            </h3>
            <p className="press-copy-small mt-5">
              <span>
                EmpowaYouth is an EmpowaWorx platform advancing youth development through inspiration, connection and
                practical pathways to economic participation. Its strategic promise, INSPIRED | CONNECTED |
                TRANSFORMED, guides its focus on skills, industry exposure, entrepreneurship and access to opportunity.
              </span>
            </p>
          </section>
        </article>

        {/* Right Sticky Aside */}
        <aside className="no-print lg:sticky lg:top-28 lg:self-start" aria-label="Press release event details and media enquiries">
          {/* Action Tools */}
          <div className="mb-5 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex flex-1 min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--pt-light-divider)] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--pt-ink)] shadow-2xs transition-all hover:border-[var(--pt-accent)] hover:text-[var(--pt-accent)]"
              title="Print document or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex flex-1 min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--pt-light-divider)] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--pt-ink)] shadow-2xs transition-all hover:border-[var(--pt-accent)] hover:text-[var(--pt-accent)]"
              title="Copy formatted text to clipboard"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>

          {/* Event Details Card */}
          <div className="border border-[var(--pt-light-divider)] bg-[rgba(255,255,255,0.58)] p-5 shadow-[0_24px_60px_rgba(11,15,14,0.08)] backdrop-blur sm:p-6 md:p-7 rounded-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="tag-pill">
                <span>Event details</span>
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">
                100% Free Entry
              </span>
            </div>
            <dl className="grid gap-0 divide-y divide-[var(--pt-light-divider)]">
              {eventDetails.map((detail) => (
                <div key={detail.id} className="grid gap-1 py-4 first:pt-0 last:pb-0">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pt-muted)]">
                    <span>{detail.label}</span>
                  </dt>
                  <dd className="text-[16px] font-bold leading-[1.35] tracking-[-0.02em] text-[var(--pt-ink)]">
                    <span>{detail.value}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-[var(--pt-light-divider)] pt-4">
              <Link
                href="/vaal"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--pt-accent)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[color-mix(in_srgb,var(--pt-accent)_84%,var(--pt-ink))]"
              >
                <span>Visit Vaal Week Hub</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Media Enquiries Dark Card */}
          <div className="mt-5 border border-[rgba(244,240,232,0.14)] bg-[var(--pt-ink)] p-5 text-[var(--pt-paper)] sm:p-6 md:p-7 rounded-2xl shadow-xl">
            <p className="label-mono mb-4 text-[var(--pt-accent)]">
              <span>Media enquiries</span>
            </p>
            <h3 className="text-[24px] font-extrabold leading-[1.02] tracking-[-0.035em] text-[var(--pt-paper)]">
              <span>Boitumelo Mmakou</span>
            </h3>
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.08em] text-[var(--pt-muted)]">
              <span>EmpowaYouth media contact</span>
            </p>
            <ul className="mt-6 grid gap-3">
              <li>
                <a className="contact-link" href="mailto:boitumelo@empowaworx.co.za">
                  <span>boitumelo@empowaworx.co.za</span>
                </a>
              </li>
              <li>
                <a className="contact-link" href="tel:+27714005152">
                  <span>+27 71 400 5152</span>
                </a>
              </li>
              <li>
                <a className="contact-link" href="https://www.empowaworx.co.za" target="_blank" rel="noreferrer">
                  <span>www.empowaworx.co.za</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
