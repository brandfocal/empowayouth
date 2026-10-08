'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';

interface PartnerMandate {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
}

const partnerMandates: PartnerMandate[] = [
  {
    id: 'esg',
    number: '01',
    title: 'ESG Imperatives',
    tag: 'Governance & Reporting',
    description:
      'Align Environmental, Social and Governance commitments with measurable youth outcomes that satisfy board-level ESG reporting requirements and investor expectations.',
  },
  {
    id: 'esd',
    number: '02',
    title: 'Enterprise & Supplier Development',
    tag: 'ESD Strategy',
    description:
      'Access a pipeline of youth-owned enterprises and SMEs primed for procurement, mentorship, and accelerated supplier development within your value chain.',
  },
  {
    id: 'seta',
    number: '03',
    title: 'SETA Skills Pipelines',
    tag: 'Skills Development',
    description:
      "Co-create industry-aligned skills programmes that fulfil SETA obligations while building a talent pipeline that meets your sector's real workforce needs.",
  },
  {
    id: 'sed',
    number: '04',
    title: 'Socio-Economic Development',
    tag: 'SED Investment',
    description:
      'Direct SED spend into a nationally recognised youth movement with transparent impact reporting, annual summit activation rights, and co-branding opportunities.',
  },
];

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const youthFaqs: FAQItem[] = [
  {
    id: 'participation',
    question: 'Who can participate in EmpowaYouth programmes?',
    answer:
      'Our interventions are aimed at young South Africans aged 18–34, whether you are unemployed, self-employed, or still in school. We specifically focus on youth from underserved township and peri-urban communities.',
  },
  {
    id: 'opportunities',
    question: 'What kind of opportunities do you offer?',
    answer:
      'We connect youth to real, relevant opportunities including job placements, learnerships, accredited skills programmes, bursaries, and direct access to capital for youth-owned businesses (such as through our Pitch Competitions).',
  },
  {
    id: 'events',
    question: 'How do I attend an event?',
    answer:
      'You can register for upcoming high-energy programmes like the EmpowaYouth Tembisa 2025 or the Vaal EmpowaYouth Week 2026 through our website to gain critical skills, mentorship, and real-world readiness.',
  },
];

const partnerFaqs: FAQItem[] = [
  {
    id: 'why-partner',
    question: 'Why should my organization partner with EmpowaYouth?',
    answer:
      'EmpowaYouth offers corporate partners a multi-year monetisation model that delivers a measurable return on investment. Partnering with us directly advances your ESG imperatives, Enterprise and Supplier Development (ESD) strategies, Sector Education and Training Authority (SETA) skills pipelines, and Socio-Economic Development (SED) mandates.',
  },
  {
    id: 'proven-impact',
    question: 'How has the EmpowaYouth model proven its impact?',
    answer:
      'To date, our structural, outcome-driven interventions have activated over 98,000 young people, resulting in 690+ job placements, 248 learnerships, 2,000 accredited skills programmes, 300 bursaries, and funding for 150 youth-owned businesses.',
  },
];

export default function TakeActionPage() {
  useEmpowaYouthScrollAnimations();

  const [expandedMandate, setExpandedMandate] = useState<string | null>(null);
  const [expandedYouthFaq, setExpandedYouthFaq] = useState<string | null>(null);
  const [expandedPartnerFaq, setExpandedPartnerFaq] = useState<string | null>(null);

  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    interests: [] as string[],
    availability: 'Weekends & Summit Weeks',
    notes: '',
  });
  const [isVolunteerSubmitted, setIsVolunteerSubmitted] = useState(false);
  const [isVolunteerSubmitting, setIsVolunteerSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVolunteerModalOpen) {
        setIsVolunteerModalOpen(false);
      }
    };
    if (isVolunteerModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVolunteerModalOpen]);

  return (
    <main className="min-h-screen bg-[var(--pt-ink)] text-[var(--pt-paper)]">
      {/* Hero Section */}
      <section className="ey-hero relative overflow-hidden" id="hero">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&auto=format&fit=crop"
          alt="Young people taking action together"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(11,15,14,0.5) 0%, rgba(11,15,14,0.72) 55%, rgba(11,15,14,0.97) 100%)',
            zIndex: 1,
          }}
          className="pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[-8%] top-[18%] z-[1] h-[420px] w-[420px] border-[70px] border-[color-mix(in_srgb,var(--pt-accent)_20%,transparent)] md:h-[620px] md:w-[620px] md:border-[100px]"
          aria-hidden="true"
        />

        <div
          className="ey-hero-content relative z-10 mx-auto w-full max-w-[var(--pt-container)]"
          style={{
            position: 'relative',
            zIndex: 10,
          }}
        >
          <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
            <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
            <span>Take Action</span>
          </p>
          <h1 className="ey-hero-title mb-6 max-w-5xl text-[clamp(3.5rem,10vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance]">
            <span className="block">Move.</span>
            <span className="block">
              <span className="ey-heading-italic">Act</span>
              <span>.</span>
            </span>
            <span className="block">Now.</span>
          </h1>
          <p className="ey-hero-desc mb-8 max-w-[600px] text-[16px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
            Your moment to step in, show up, and shape the movement.
          </p>
          <div className="ey-hero-ctas flex flex-wrap items-center gap-4">
            <a href="#youth" className="ey-button ey-button-light-filled">
              <span>Get Involved</span>
            </a>
            <Link
              href="/partner"
              className="inline-flex min-h-12 items-center justify-center !rounded-[6px] border-[1.5px] border-[rgba(244,240,232,0.35)] bg-transparent px-7 py-3.5 text-[14px] font-bold leading-[1.2] tracking-[0.02em] text-[var(--pt-paper)] no-underline transition-all duration-200 ease-out hover:border-[var(--pt-accent)] hover:bg-white/5 hover:text-[var(--pt-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pt-accent)]"
            >
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* For Youth Section */}
      <section id="youth" className="bg-[var(--pt-ink)] px-4 py-10 md:px-[var(--pt-container-pad)] md:py-20">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-8 flex flex-col flex-wrap gap-5 border-t border-[var(--pt-dark-divider)] pt-5 md:mb-10 md:flex-row md:items-start md:justify-between md:gap-6">
            <p className="label-mono">For Youth</p>
            <p className="max-w-sm text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] md:text-right">
              Access to skills, networks, and capital.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
            <h2 className="pt-section-heading max-w-5xl text-[var(--pt-paper)]">
              Your future deserves movement, momentum, and <span className="ey-heading-italic">meaning</span>.
            </h2>
            <div className="flex flex-col justify-end gap-8">
              <div className="h-px w-full bg-[var(--pt-dark-divider)]" />
              <div className="flex flex-col flex-wrap items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
                <button
                  type="button"
                  onClick={() => setIsVolunteerModalOpen(true)}
                  className="ey-rect-button ey-rect-button-primary group justify-between cursor-pointer"
                >
                  <span>Sign Up to Volunteer</span>
                  <ArrowRight
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
                <Link
                  href="/#events"
                  className="ey-rect-button ey-rect-button-primary group justify-between"
                >
                  <span>Register to Attend</span>
                  <ArrowRight
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="h-px w-full bg-[var(--pt-dark-divider)]"
            style={{
              marginTop: 'clamp(48px, 5vw, 64px)',
            }}
            aria-hidden="true"
          />

          {/* Youth FAQs */}
          <div className="mt-8">
            <p className="ey-kicker mb-6">
              <span className="ey-kicker-bar" aria-hidden="true" />
              <span>Youth FAQs</span>
            </p>
            <div>
              {youthFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-t border-[var(--pt-dark-divider)] last:border-b last:border-[var(--pt-dark-divider)]"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedYouthFaq(expandedYouthFaq === faq.id ? null : faq.id)}
                    aria-expanded={expandedYouthFaq === faq.id}
                    aria-controls={`youth-faq-${faq.id}`}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold leading-[1.4] text-[var(--pt-paper)]">
                      {faq.question}
                    </span>
                    <span
                      className="shrink-0 text-[20px] font-light leading-none text-[var(--pt-accent)] transition-transform duration-300 ease-out"
                      style={{
                        transform: expandedYouthFaq === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`youth-faq-${faq.id}`}
                    style={{
                      display: 'grid',
                      gridTemplateRows: expandedYouthFaq === faq.id ? '1fr' : '0fr',
                      transition: 'grid-template-rows 280ms cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-[14px] font-normal leading-[1.75] tracking-[0.005em] text-[var(--pt-muted)]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section
        id="partners"
        className="bg-[var(--pt-paper)] px-4 py-10 text-[var(--pt-ink)] md:px-[var(--pt-container-pad)] md:py-20"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-8 flex flex-col flex-wrap gap-5 border-t-2 border-[var(--pt-light-divider)] pt-5 md:mb-10 md:flex-row md:items-start md:justify-between md:gap-6">
            <p className="label-mono">For Partners</p>
            <p className="max-w-sm text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] md:text-right">
              Corporate value proposition
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <h2 className="pt-section-heading max-w-2xl text-[var(--pt-ink)]">
                The future isn&apos;t sponsored. It&apos;s <span className="ey-heading-italic">co-authored</span>.
              </h2>
              <p className="mt-5 max-w-xl border-l-2 border-[var(--pt-accent)] pl-5 text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)]">
                ESG imperatives, Enterprise and Supplier Development (ESD) strategies, SETA skills pipelines, and
                Socio-Economic Development (SED) mandates.
              </p>
            </div>

            <div>
              <div className="mt-0">
                {partnerMandates.map((mandate) => (
                  <div key={mandate.id} className="group">
                    <div className="h-px bg-[var(--pt-light-divider)]" aria-hidden="true" />

                    <button
                      type="button"
                      onClick={() => setExpandedMandate(expandedMandate === mandate.id ? null : mandate.id)}
                      aria-expanded={expandedMandate === mandate.id}
                      className="flex w-full items-start gap-5 py-6 text-left transition-colors duration-200 ease-out"
                    >
                      <span
                        className="shrink-0 pt-1 font-extrabold tracking-[0.1em] transition-colors duration-200 ease-out group-hover:!text-[var(--pt-accent)]"
                        style={{
                          fontSize: '11px',
                          color: expandedMandate === mandate.id ? 'var(--pt-accent)' : 'var(--pt-muted)',
                        }}
                        aria-hidden="true"
                      >
                        {mandate.number}
                      </span>

                      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                        <h3
                          className="font-extrabold uppercase leading-[1] tracking-[-0.04em] transition-colors duration-200 ease-out group-hover:!text-[var(--pt-accent)]"
                          style={{
                            fontSize: 'clamp(1.25rem,2.8vw,2rem)',
                            color: expandedMandate === mandate.id ? 'var(--pt-accent)' : 'var(--pt-ink)',
                          }}
                        >
                          {mandate.title}
                        </h3>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                          style={{
                            color: 'var(--pt-muted)',
                          }}
                        >
                          {mandate.tag}
                        </span>
                      </div>

                      <span
                        className="shrink-0 self-start pt-1 text-[20px] font-light leading-none transition-[transform,color] duration-300 ease-out group-hover:text-[var(--pt-accent)]"
                        style={{
                          color: expandedMandate === mandate.id ? 'var(--pt-accent)' : 'var(--pt-muted)',
                          transform: expandedMandate === mandate.id ? 'rotate(45deg)' : 'rotate(0deg)',
                          display: 'inline-block',
                        }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateRows: expandedMandate === mandate.id ? '1fr' : '0fr',
                        transition: 'grid-template-rows 320ms cubic-bezier(0.16,1,0.3,1)',
                      }}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="pb-6 pl-10 text-[14px] font-normal leading-[1.75] tracking-[0.005em]"
                          style={{
                            color: 'var(--pt-muted)',
                          }}
                        >
                          {mandate.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="h-px bg-[var(--pt-light-divider)]" aria-hidden="true" />
              </div>

              {/* Action Buttons for Partners */}
              <div className="mt-8 flex flex-col flex-wrap items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
                <a
                  href="mailto:info@empowaworx.co.za?subject=Discuss%20ESD%2FSED%20Partnerships%20-%20EmpowaYouth"
                  className="ey-rect-button ey-rect-button-primary group justify-between"
                >
                  <span>Discuss ESD/SED Partnerships</span>
                  <ArrowRight
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="mailto:info@empowaworx.co.za?subject=Connect%20on%20SETA%20Pipelines%20-%20EmpowaYouth"
                  className="ey-rect-button ey-rect-button-secondary group justify-between"
                >
                  <span>Connect on SETA Pipelines</span>
                  <ArrowRight
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Partner FAQs */}
              <div className="mt-16">
                <div className="h-px w-full bg-[var(--pt-light-divider)]" aria-hidden="true" />
                <p className="ey-kicker mb-5 mt-7">
                  <span className="ey-kicker-bar" aria-hidden="true" />
                  <span>Partner FAQs</span>
                </p>
                <div>
                  {partnerFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border-t border-[var(--pt-light-divider)] last:border-b last:border-[var(--pt-light-divider)]"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedPartnerFaq(expandedPartnerFaq === faq.id ? null : faq.id)}
                        aria-expanded={expandedPartnerFaq === faq.id}
                        aria-controls={`partner-faq-${faq.id}`}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left"
                      >
                        <span className="text-[15px] font-semibold leading-[1.4] text-[var(--pt-ink)]">
                          {faq.question}
                        </span>
                        <span
                          className="shrink-0 text-[20px] font-light leading-none text-[var(--pt-accent)] transition-transform duration-300 ease-out"
                          style={{
                            transform: expandedPartnerFaq === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                            display: 'inline-block',
                          }}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                      <div
                        id={`partner-faq-${faq.id}`}
                        style={{
                          display: 'grid',
                          gridTemplateRows: expandedPartnerFaq === faq.id ? '1fr' : '0fr',
                          transition: 'grid-template-rows 280ms cubic-bezier(0.16,1,0.3,1)',
                        }}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-5 text-[14px] font-normal leading-[1.75] tracking-[0.005em] text-[var(--pt-muted)]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Year Masterplan Section */}
      <section
        id="masterplan"
        className="border-t border-[var(--pt-dark-divider)] bg-[var(--pt-ink)] px-4 py-10 md:px-[var(--pt-container-pad)] md:py-16"
      >
        <div className="mx-auto flex max-w-[var(--pt-container)] flex-col flex-wrap gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono mb-3">Multi-Year Model</p>
            <h2 className="pt-section-heading max-w-4xl text-[var(--pt-paper)]">
              Engage with the national <span className="ey-heading-italic">masterplan</span> and multi-year
              monetisation model.
            </h2>
          </div>
          <a
            href="mailto:info@empowaworx.co.za?subject=National%20Masterplan%20Inquiry%20-%20EmpowaYouth"
            className="ey-rect-button ey-rect-button-secondary group shrink-0"
          >
            <span>Connect with us</span>
            <ArrowRight
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      {/* Volunteer Sign-Up Modal */}
      {isVolunteerModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="volunteer-modal-title"
          onClick={() => setIsVolunteerModalOpen(false)}
        >
          <div
            className="relative my-auto w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl border border-white/15 bg-[var(--pt-ink)] p-6 sm:p-8 text-[var(--pt-paper)] shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVolunteerModalOpen(false)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[var(--pt-paper)] transition-colors hover:border-[var(--pt-accent)] hover:bg-[var(--pt-accent)] hover:text-white focus:outline-none"
              aria-label="Close volunteer modal"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {isVolunteerSubmitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--pt-accent)]/15 text-[var(--pt-accent)]">
                  <CheckCircle2 size={36} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--pt-paper)]">
                  You&apos;re in, {volunteerForm.fullName || 'Champion'}!
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--pt-muted)]">
                  Thank you for raising your hand to empower South African youth. Our regional volunteer coordinator will connect with you via WhatsApp and email ahead of upcoming summits and activations.
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsVolunteerModalOpen(false);
                      setIsVolunteerSubmitted(false);
                      setVolunteerForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        location: '',
                        interests: [],
                        availability: 'Weekends & Summit Weeks',
                        notes: '',
                      });
                    }}
                    className="ey-button ey-button-light-filled px-8"
                  >
                    <span>Done</span>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <header className="mb-6">
                  <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
                    <span className="inline-block h-[2px] w-5 bg-[var(--pt-accent)]" aria-hidden="true" />
                    <span>Join The Movement</span>
                  </p>
                  <h2
                    id="volunteer-modal-title"
                    className="text-2xl font-extrabold uppercase tracking-tight text-[var(--pt-paper)] sm:text-3xl"
                  >
                    Sign Up to <span className="ey-heading-italic">Volunteer</span>
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--pt-muted)] sm:text-sm">
                    Lend your energy, skills, and heart to impact youth across townships and communities.
                  </p>
                </header>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsVolunteerSubmitting(true);
                    setTimeout(() => {
                      setIsVolunteerSubmitting(false);
                      setIsVolunteerSubmitted(true);
                    }, 500);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="volunteer-name" className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                        Full Name *
                      </label>
                      <input
                        id="volunteer-name"
                        required
                        type="text"
                        value={volunteerForm.fullName}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, fullName: e.target.value })}
                        placeholder="e.g. Thabo Molefe"
                        className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="volunteer-email" className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                        Email Address *
                      </label>
                      <input
                        id="volunteer-email"
                        required
                        type="email"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        placeholder="thabo@example.com"
                        className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="volunteer-phone" className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                        WhatsApp / Phone *
                      </label>
                      <input
                        id="volunteer-phone"
                        required
                        type="tel"
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                        placeholder="+27 82 123 4567"
                        className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="volunteer-location" className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                        Township / City *
                      </label>
                      <input
                        id="volunteer-location"
                        required
                        type="text"
                        value={volunteerForm.location}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, location: e.target.value })}
                        placeholder="e.g. Tembisa, Gauteng"
                        className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                      Areas of Interest (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        'Event Coordination',
                        'Youth Mentorship',
                        'Media & Content',
                        'Registration & Logistics',
                        'Workshop Support',
                      ].map((interest) => {
                        const isSelected = volunteerForm.interests.includes(interest);
                        return (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => {
                              const newInterests = isSelected
                                ? volunteerForm.interests.filter((i) => i !== interest)
                                : [...volunteerForm.interests, interest];
                              setVolunteerForm({ ...volunteerForm, interests: newInterests });
                            }}
                            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[var(--pt-accent)] text-white shadow-sm'
                                : 'border border-white/15 bg-white/5 text-[var(--pt-muted)] hover:border-white/30 hover:text-[var(--pt-paper)]'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {interest}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="volunteer-availability" className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                      Availability
                    </label>
                    <select
                      id="volunteer-availability"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="w-full rounded-md border border-white/15 bg-[var(--pt-ink)] px-3.5 py-2.5 text-sm text-[var(--pt-paper)] focus:border-[var(--pt-accent)] focus:outline-none"
                    >
                      <option value="Weekends & Summit Weeks">Weekends &amp; Summit Weeks</option>
                      <option value="Weekdays">Weekdays</option>
                      <option value="Flexible / On-Call">Flexible / On-Call</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="volunteer-notes" className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                      Why do you want to volunteer? (Optional)
                    </label>
                    <textarea
                      id="volunteer-notes"
                      rows={2}
                      value={volunteerForm.notes}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, notes: e.target.value })}
                      placeholder="Share a short note on your motivation or past experience..."
                      className="w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isVolunteerSubmitting}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[var(--pt-accent)] px-7 py-3 text-sm font-bold tracking-[0.02em] text-white transition-all hover:scale-[1.01] hover:bg-[color-mix(in_srgb,var(--pt-accent)_84%,var(--pt-ink))] focus:outline-none disabled:opacity-50 cursor-pointer"
                    >
                      {isVolunteerSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Submit Volunteer Sign-Up</span>
                          <ArrowRight size={16} aria-hidden="true" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
