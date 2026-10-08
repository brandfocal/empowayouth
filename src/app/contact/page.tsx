'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Check, Lock } from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';

const inquiryOptions = [
  'I want to attend a Summit',
  'I want to Partner / Sponsor',
  'Media Inquiry',
  'Pitch Competition Query',
  'Enterprise Development Programme',
  'General Inquiry',
];

type FormValues = {
  name: string;
  email: string;
  phone: string;
  inquiry: string;
  organisation: string;
  message: string;
};

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type FAQTab = {
  id: string;
  label: string;
  items: FAQItem[];
};

const emptyForm: FormValues = {
  name: '',
  email: '',
  phone: '',
  inquiry: '',
  organisation: '',
  message: '',
};

const faqTabs: FAQTab[] = [
  {
    id: 'general',
    label: 'General Questions',
    items: [
      {
        id: 'what-is-empowayouth',
        question: 'What is EmpowaYouth?',
        answer:
          'EmpowaYouth is a national youth-led movement and Public-Private Partnership (PPP) designed to tackle youth unemployment, poverty, and systemic economic exclusion. We are a catalytic force that brings industry directly to underserved communities to unlock scalable pathways to jobs, education, and entrepreneurship.',
      },
      {
        id: 'where-operate',
        question: 'Where does EmpowaYouth operate?',
        answer:
          'We operate across all nine provinces in South Africa, taking the system directly to the youth — from township streets to provincial stages.',
      },
      {
        id: 'who-behind',
        question: 'Who is behind EmpowaYouth?',
        answer:
          "EmpowaYouth is powered by EmpowaWorx, the continent's premier high-impact development agency, alongside visionary corporate and government partners.",
      },
    ],
  },
  {
    id: 'youth',
    label: 'For Youth',
    items: [
      {
        id: 'who-can-participate',
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
        id: 'attend-event',
        question: 'How do I attend an event?',
        answer:
          'You can register for upcoming high-energy programmes like the EmpowaYouth Tembisa 2025 or the Vaal EmpowaYouth Week 2026 through our website to gain critical skills, mentorship, and real-world readiness.',
      },
    ],
  },
  {
    id: 'partners',
    label: 'For Corporate & Government Partners',
    items: [
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
    ],
  },
];

export default function ContactPage() {
  useEmpowaYouthScrollAnimations();

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState<FormValues>(emptyForm);
  const [activeTab, setActiveTab] = useState(faqTabs[0].id);
  const [openItem, setOpenItem] = useState<string | null>(faqTabs[0].items[0].id);

  const activeFaq = faqTabs.find((tab) => tab.id === activeTab) ?? faqTabs[0];

  const updateField = (field: keyof FormValues, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Mapped to Gravity Forms Form ID: 47 (Contact Form)
    // Full Name ID: 1 -> input_1
    // Email Address ID: 3 -> input_3
    // Phone Number ID: 4 -> input_4
    // Inquiry Type ID: 5 -> input_5
    // Organisation / Company ID: 6 -> input_6
    // Message ID: 7 -> input_7
    const payload = {
      input_1: form.name.trim(),
      input_3: form.email.trim(),
      input_4: form.phone.trim(),
      input_5: form.inquiry.trim(),
      input_6: form.organisation.trim(),
      input_7: form.message.trim(),
    };

    try {
      // 1. Submit through Next.js proxy route to prevent CORS issues
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmitted(true);
        return;
      }

      // If specific validation message was returned by Gravity Forms
      if (data.error && !data.error.includes('Server error')) {
        setErrorMessage(data.error);
        return;
      }

      // 2. Direct client-side submission fallback to Gravity Forms endpoint
      const directRes = await fetch(
        'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/47/submissions',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      const directData = await directRes.json().catch(() => ({}));

      if (directRes.ok && directData.is_valid !== false) {
        setSubmitted(true);
        return;
      }

      const errMsg =
        directData.validation_messages
          ? Object.values(directData.validation_messages).join(', ')
          : directData.message || data.error || 'Failed to submit inquiry. Please verify your details.';
      setErrorMessage(errMsg);
    } catch (err) {
      console.error('Contact submission error:', err);
      // Final attempt via direct client call
      try {
        const directRes = await fetch(
          'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/47/submissions',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          }
        );
        const directData = await directRes.json().catch(() => ({}));
        if (directRes.ok && directData.is_valid !== false) {
          setSubmitted(true);
          return;
        }
      } catch {
        // ignore secondary error
      }
      setErrorMessage('Could not reach the submission server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact">
      {/* Hero Section */}
      <section className="ey-contact-hero relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--pt-ink)] px-4 pb-12 pt-[clamp(120px,18vw,200px)] text-[var(--pt-paper)] sm:px-6 md:px-8 md:pb-20 lg:px-[var(--pt-container-pad)] lg:pb-[clamp(80px,8vw,112px)]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop"
          alt="A team connecting around a table"
          className="absolute inset-0 z-0 h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(11,15,14,0.25)_0%,rgba(11,15,14,0.45)_30%,rgba(11,15,14,0.80)_65%,rgba(11,15,14,0.97)_100%)] pointer-events-none"
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
            <span>Contact Us</span>
          </p>
          <h1 className="mb-6 max-w-5xl text-[clamp(3.5rem,9vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance]">
            <span>Let&apos;s </span>
            <span className="ey-heading-italic">Talk</span>
            <span>.</span>
          </h1>
          <p className="ey-hero-desc mb-8 max-w-[620px] text-[16px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
            Whether you&apos;re a young person ready to step up or a corporate partner looking to invest in the
            future — we want to hear from you.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact-form" className="ey-button ey-button-light-filled">
              <span>Send A Message</span>
            </a>
            <a
              href="#faq-heading"
              className="inline-flex min-h-12 items-center justify-center !rounded-[6px] border-[1.5px] border-[rgba(244,240,232,0.35)] bg-transparent px-7 py-3.5 text-[14px] font-bold leading-[1.2] tracking-[0.02em] text-[var(--pt-paper)] no-underline transition-all duration-200 ease-out hover:border-[var(--pt-accent)] hover:bg-white/5 hover:text-[var(--pt-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pt-accent)]"
            >
              <span>Frequently Asked Questions</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ey-faq-section" aria-labelledby="faq-heading">
        <div className="ey-faq-grid">
          <div className="ey-faq-intro">
            <p className="ey-kicker ey-kicker-dark">
              <span className="ey-kicker-bar" />
              <span>02 / FAQ</span>
            </p>
            <h2 id="faq-heading">
              <span>Frequently Asked</span>
              <span>Questions</span>
            </h2>
            <p>Can&apos;t find your answer? Reach out directly.</p>
            <a href="#contact-form">
              <span>Contact us</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="ey-faq-content">
            <div className="ey-faq-tabs" role="tablist" aria-label="FAQ categories">
              {faqTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  className={`ey-faq-tab${activeTab === tab.id ? ' ey-faq-tab--active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setOpenItem(tab.items[0]?.id ?? null);
                  }}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div
              className="ey-faq-list"
              role="tabpanel"
              id={`panel-${activeFaq.id}`}
              aria-labelledby={`tab-${activeFaq.id}`}
            >
              {activeFaq.items.map((item) => (
                <article
                  className={`ey-faq-item${openItem === item.id ? ' ey-faq-item--open' : ''}`}
                  key={item.id}
                >
                  <button
                    className="ey-faq-question"
                    type="button"
                    aria-expanded={openItem === item.id}
                    aria-controls={`answer-${item.id}`}
                    onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="ey-faq-icon" aria-hidden="true">
                      {openItem === item.id ? '×' : '+'}
                    </span>
                  </button>
                  <div
                    className="ey-faq-answer"
                    id={`answer-${item.id}`}
                    style={{
                      maxHeight: openItem === item.id ? '360px' : '0px',
                      opacity: openItem === item.id ? 1 : 0,
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section: Editorial Hero + Form */}
      <section className="ey-contact-section">
        <div className="ey-contact-editorial-hero">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&auto=format&fit=crop"
            alt="Energetic crowd of young people gathered together"
            className="ey-contact-editorial-image"
          />
          <div className="ey-contact-editorial-overlay" aria-hidden="true" />
          <div className="ey-contact-editorial-ring" aria-hidden="true" />
          <div className="ey-contact-editorial-content">
            <p className="ey-kicker ey-contact-editorial-kicker">
              <span className="ey-kicker-bar" />
              <span>03 / Get In Touch</span>
            </p>
            <h2 id="contact-panel-heading">
              <span>Let&apos;s </span>
              <span className="ey-heading-italic">Connect</span>
              <span>.</span>
            </h2>
            <p className="ey-contact-editorial-copy">
              We respond within 1 business day. Tell us who you are and what you need — the right team will follow
              up directly.
            </p>
            <div className="ey-contact-stat-grid" aria-label="EmpowaYouth impact highlights">
              <article className="ey-contact-stat-card">
                <strong>98 000+</strong>
                <span>Youth Impacted</span>
                <div aria-hidden="true" />
              </article>
              <article className="ey-contact-stat-card">
                <strong>200+</strong>
                <span>Corporate Partners</span>
                <div aria-hidden="true" />
              </article>
              <article className="ey-contact-stat-card">
                <strong>9</strong>
                <span>Provinces Active</span>
                <div aria-hidden="true" />
              </article>
            </div>
            <div className="ey-contact-bottom-strip">
              <span>Contact / Send Us A Message →</span>
              <div className="ey-contact-strip-socials" aria-label="EmpowaYouth social links">
                <a
                  href="https://www.facebook.com/EmpowaYouth/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EmpowaYouth on Facebook"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/EmpowaYouth"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EmpowaYouth on X"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.25-8.29L2.96 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.42 4.05H6.58l11.22 15.79Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/empowayouth/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EmpowaYouth on Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2C5.7 4 4 5.7 4 7.8v8.4C4 18.3 5.7 20 7.8 20h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4H7.8Zm4.2 3.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@empowayouth1198/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="EmpowaYouth on YouTube"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.5 6.2s-.23-1.65-.95-2.37c-.91-.95-1.93-.96-2.4-1.01-3.35-.24-8.38-.24-8.38-.24h-.01s-5.03 0-8.38.24c-.47.05-1.49.06-2.4 1.01-.72.72-.95 2.37-.95 2.37s-.24 1.94-.24 3.88v1.82c0 1.94.24 3.88.24 3.88s.23 1.65.95 2.37c.91.95 2.11.92 2.65 1.02 1.92.18 8.14.24 8.14.24s5.04-.01 8.39-.25c.47-.05 1.49-.06 2.4-1.01.72-.72.95-2.37.95-2.37s.24-1.94.24-3.88v-1.82c0-1.94-.24-3.88-.24-3.88zm-13.85 8.16v-6.73l6.48 3.38-6.48 3.35z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Inner Panel */}
        <div className="ey-contact-form-section" id="contact-form">
          <div className="ey-contact-form-inner">
            <div className="ey-contact-form-intro-panel">
              <h3>
                <span>Send Us A </span>
                <em className="ey-heading-italic">Message</em>
              </h3>
              <div className="ey-contact-form-accent" aria-hidden="true" />
              <p>
                Direct your message to the right team — we&apos;ll connect you with the right person within one
                business day.
              </p>
              <div className="ey-contact-methods" aria-label="EmpowaYouth contact methods">
                <article className="ey-contact-method-row">
                  <span>Address</span>
                  <strong>
                    EMPOWAWORX HOUSE<br />
                    364 Pine Avenue, Ferndale, Randburg, 2196
                  </strong>
                </article>
                <article className="ey-contact-method-row">
                  <span>Call Us</span>
                  <strong>
                    +27 (0) 11 482 7256<br />
                    +27 (0) 11 482 7257
                  </strong>
                </article>
                <article className="ey-contact-method-row">
                  <span>Email Us</span>
                  <strong>info@empowaworx.co.za</strong>
                </article>
              </div>
            </div>

            <div className="ey-contact-form-panel">
              {submitted ? (
                <div className="ey-success">
                  <Check size={28} aria-hidden="true" />
                  <h3>Message Sent.</h3>
                  <p>Thank you — we&apos;ll be in touch within one business day.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                      setForm(emptyForm);
                    }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {errorMessage && (
                    <div
                      role="alert"
                      className="mb-4 rounded-md border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200"
                    >
                      {errorMessage}
                    </div>
                  )}
                  <label>
                    <span>Full Name</span>
                    <input
                      name="input_1"
                      type="text"
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={(event) => updateField('name', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Email Address</span>
                    <input
                      name="input_3"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Phone Number</span>
                    <input
                      name="input_4"
                      type="tel"
                      placeholder="+27 xx xxx xxxx"
                      value={form.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Inquiry Type</span>
                    <select
                      name="input_5"
                      required
                      value={form.inquiry}
                      onChange={(event) => updateField('inquiry', event.target.value)}
                    >
                      <option value="">-- Select your inquiry type --</option>
                      {inquiryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Organisation / Company</span>
                    <input
                      name="input_6"
                      type="text"
                      placeholder="Your organisation or institution"
                      value={form.organisation}
                      onChange={(event) => updateField('organisation', event.target.value)}
                    />
                  </label>
                  <label>
                    <span>Message</span>
                    <textarea
                      name="input_7"
                      rows={4}
                      placeholder="Tell us more about your inquiry..."
                      value={form.message}
                      onChange={(event) => updateField('message', event.target.value)}
                    />
                  </label>
                  <div className="ey-form-actions">
                    <button
                      className="ey-submit"
                      type="submit"
                      disabled={isSubmitting}
                      style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                      <span>{isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}</span>
                      <span aria-hidden="true">→</span>
                    </button>
                    <p className="ey-trust-line">
                      <Lock size={12} aria-hidden="true" />
                      <span>Your information is kept confidential</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="ey-location-section" aria-labelledby="location-heading">
        <div className="ey-location-grid">
          <div className="ey-map-card">
            <iframe
              title="Map showing EMPOWAWORX HOUSE, 364 Pine Avenue, Ferndale, Randburg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.5684617478335!2d27.9961726!3d-26.0803403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574a7d65b90f5%3A0xb351dbdbcae9b9bb!2s364%20Pine%20Ave%2C%20Ferndale%2C%20Randburg%2C%202194!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="600"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="ey-location-panel">
            <p className="ey-kicker ey-kicker-dark">
              <span className="ey-kicker-bar" />
              <span>04 / Our Location</span>
            </p>
            <span className="ey-location-heading-accent" aria-hidden="true" />
            <h2 id="location-heading">
              <span>Find </span>
              <span className="ey-heading-italic">Us</span>
            </h2>
            <div className="ey-location-rule" aria-hidden="true" />
            <div className="ey-location-watermark" aria-hidden="true">
              03
            </div>
            <p className="ey-location-copy">
              Connect with the EmpowaYouth team in Randburg. We are rooted in the communities we serve and
              ready to welcome partners, participants, and media inquiries.
            </p>
            <div className="ey-location-cards">
              <article className="ey-location-card">
                <span className="ey-card-label">Address</span>
                <div>
                  <strong>EMPOWAWORX HOUSE</strong>
                  <span className="ey-card-note">364 Pine Avenue, Ferndale, Randburg, 2196</span>
                </div>
              </article>
              <article className="ey-location-card">
                <span className="ey-card-label">Call Us</span>
                <div>
                  <strong>+27 (0) 11 482 7256</strong>
                  <span className="ey-card-note">+27 (0) 11 482 7257</span>
                </div>
              </article>
              <article className="ey-location-card">
                <span className="ey-card-label">Email Us</span>
                <div>
                  <strong>info@empowaworx.co.za</strong>
                  <span className="ey-card-note">We reply within 1 business day</span>
                </div>
              </article>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=364+Pine+Avenue%2C+Ferndale%2C+Randburg%2C+2196"
              target="_blank"
              rel="noreferrer"
              className="ey-directions-button"
            >
              <span>Get Directions</span>
              <span aria-hidden="true">→</span>
            </a>
            <div className="ey-location-socials" aria-label="EmpowaYouth social links">
              <a
                href="https://www.facebook.com/EmpowaYouth/"
                target="_blank"
                rel="noreferrer"
                aria-label="EmpowaYouth on Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/EmpowaYouth"
                target="_blank"
                rel="noreferrer"
                aria-label="EmpowaYouth on X"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.25-8.29L2.96 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.42 4.05H6.58l11.22 15.79Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/empowayouth/"
                target="_blank"
                rel="noreferrer"
                aria-label="EmpowaYouth on Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2C5.7 4 4 5.7 4 7.8v8.4C4 18.3 5.7 20 7.8 20h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4H7.8Zm4.2 3.25A4.75 4.75 0 1 1 12 16.75 4.75 4.75 0 0 1 12 7.25Zm0 2A2.75 2.75 0 1 0 12 14.75 2.75 2.75 0 0 0 12 9.25Zm5.25-2.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@empowayouth1198/"
                target="_blank"
                rel="noreferrer"
                aria-label="EmpowaYouth on YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2s-.23-1.65-.95-2.37c-.91-.95-1.93-.96-2.4-1.01-3.35-.24-8.38-.24-8.38-.24h-.01s-5.03 0-8.38.24c-.47.05-1.49.06-2.4 1.01-.72.72-.95 2.37-.95 2.37s-.24 1.94-.24 3.88v1.82c0 1.94.24 3.88.24 3.88s.23 1.65.95 2.37c.91.95 2.11.92 2.65 1.02 1.92.18 8.14.24 8.14.24s5.04-.01 8.39-.25c.47-.05 1.49-.06 2.4-1.01.72-.72.95-2.37.95-2.37s.24-1.94.24-3.88v-1.82c0-1.94-.24-3.88-.24-3.88zm-13.85 8.16v-6.73l6.48 3.38-6.48 3.35z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <section className="ey-prefooter" id="join-movement">
        <div className="ey-prefooter-inner">
          <p className="ey-kicker">
            <span className="ey-kicker-bar" />
            <span>Contact / Join The Movement</span>
          </p>
          <h2>
            Ready to <span className="ey-heading-italic">Begin</span>?
          </h2>
          <div className="ey-rule" />
          <p>
            Thousands of young South Africans and 200+ corporate partners are already part of the movement.
          </p>
          <div className="ey-prefooter-actions">
            <Link href="/action" className="ey-button ey-button-light-filled">
              Take Action <span>→</span>
            </Link>
            <Link href="/offerings" className="ey-button ey-button-outline">
              Explore Offerings <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
