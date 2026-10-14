'use client';

import { useState, FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const mandateOptions = [
  'ESG Imperatives',
  'ESD Strategies',
  'SETA Skills Pipelines',
  'SED Mandates',
  'General Sponsorship',
  'Other',
];

export const interventionOptions = [
  'EmpowaYouth Summits National or Provincial',
  'Pitch Competitions Direct Funding',
  'Industry Sector Experiences',
  'EmpowaYouth Indaba',
];

export interface PartnershipFormProps {
  idPrefix?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  defaultIntervention?: string;
  defaultMandates?: string[];
  className?: string;
}

export function PartnershipForm({
  idPrefix = 'partner',
  badge,
  title,
  subtitle,
  showHeader = false,
  defaultIntervention = '',
  defaultMandates = [],
  className = '',
}: PartnershipFormProps) {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [form, setForm] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    email: '',
    phone: '',
    vision: '',
    mandates: defaultMandates,
    intervention: defaultIntervention,
  });

  const updateField = (key: string, value: string) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const toggleMandate = (value: string) => {
    setForm((current) => ({
      ...current,
      mandates: current.mandates.includes(value)
        ? current.mandates.filter((item) => item !== value)
        : [...current.mandates, value],
    }));
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // Mapped to Gravity Forms Form ID: 48 (Partnership Enquiry form)
    // Full Name ID: 1 -> input_1
    // Job Title ID: 3 -> input_3
    // Company / Organisation Name ID: 4 -> input_4
    // Corporate Email Address ID: 5 -> input_5
    // Contact Phone Number ID: 6 -> input_6
    // Select Strategic Mandate Alignment ID: 7 -> input_7
    // Preferred Intervention Vehicle ID: 8 -> input_8
    // Tell us about your organisation's vision for youth economic inclusion ID: 9 -> input_9
    const payload = {
      input_1: form.fullName.trim(),
      input_3: form.jobTitle.trim(),
      input_4: form.company.trim(),
      input_5: form.email.trim(),
      input_6: form.phone.trim(),
      input_7: form.mandates.join(', '),
      input_8: form.intervention.trim(),
      input_9: form.vision.trim(),
    };

    try {
      // 1. Submit through Next.js proxy route to prevent CORS issues
      const res = await fetch('/api/partner', {
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
        'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/48/submissions',
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
          : directData.message || data.error || 'Failed to submit partnership inquiry. Please verify your details.';
      setErrorMessage(errMsg);
    } catch (err) {
      console.error('Partnership submission error:', err);
      // Final attempt via direct client call
      try {
        const directRes = await fetch(
          'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/48/submissions',
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
    <div className={className}>
      {showHeader && (
        <div className="mb-8">
          {badge && (
            <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
              <span className="inline-block h-[2px] w-5 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
              <span>{badge}</span>
            </p>
          )}
          {title && (
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[var(--pt-paper)]">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-xs sm:text-sm text-[var(--pt-muted)] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Stepper Header */}
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
        {[
          { stepNum: 1, label: 'Organisation' },
          { stepNum: 2, label: 'Alignment' },
          { stepNum: 3, label: 'Vision' },
        ].map((item) => {
          const isCurrent = step === item.stepNum;
          const isDone = step > item.stepNum;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 sm:gap-3 text-xs font-bold uppercase tracking-wider ${
                isCurrent
                  ? 'text-[var(--pt-accent)]'
                  : isDone
                  ? 'text-white'
                  : 'text-[var(--pt-muted)]'
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all ${
                  isCurrent
                    ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)] text-[var(--pt-ink)]'
                    : isDone
                    ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)] text-[var(--pt-ink)]'
                    : 'border-white/20 text-[var(--pt-muted)]'
                }`}
              >
                {isDone ? <Check className="h-4 w-4" /> : item.stepNum}
              </span>
              <span className="hidden sm:inline">{item.label}</span>
            </div>
          );
        })}
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-[var(--pt-accent)]/30 bg-[var(--pt-accent)]/5 p-8 sm:p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--pt-accent)] text-[var(--pt-ink)]">
            <Check className="h-8 w-8 stroke-[3]" />
          </div>
          <h3 className="mt-6 text-xl sm:text-2xl font-bold uppercase text-[var(--pt-paper)]">
            Consultation Request Received
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--pt-muted)]">
            Thank you, {form.fullName || 'Partner'}. Our corporate partnerships executive team will be in touch
            within 48 hours to schedule a confidential briefing and alignment session.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setErrorMessage(null);
                setForm({
                  fullName: '',
                  jobTitle: '',
                  company: '',
                  email: '',
                  phone: '',
                  vision: '',
                  mandates: defaultMandates,
                  intervention: defaultIntervention,
                });
              }}
              className="ey-button ey-button-light-filled inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          {errorMessage && (
            <div
              role="alert"
              className="mb-6 rounded-md border border-red-500/30 bg-red-500/10 p-4 text-xs leading-relaxed text-red-200"
            >
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Step 1: Organisation Details */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${idPrefix}-fullName`} className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Full Name *
                  </label>
                  <input
                    id={`${idPrefix}-fullName`}
                    name="input_1"
                    required
                    type="text"
                    value={form.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="e.g. Lerato Ndlovu"
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={`${idPrefix}-jobTitle`} className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Job Title *
                  </label>
                  <input
                    id={`${idPrefix}-jobTitle`}
                    name="input_3"
                    required
                    type="text"
                    value={form.jobTitle}
                    onChange={(e) => updateField('jobTitle', e.target.value)}
                    placeholder="e.g. Head of Sustainability / ESG"
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor={`${idPrefix}-company`} className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Company / Organisation Name *
                  </label>
                  <input
                    id={`${idPrefix}-company`}
                    name="input_4"
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    placeholder="e.g. African Bank / Standard Bank Group"
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={`${idPrefix}-email`} className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Corporate Email Address *
                  </label>
                  <input
                    id={`${idPrefix}-email`}
                    name="input_5"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="name@company.co.za"
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor={`${idPrefix}-phone`} className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Contact Phone Number *
                  </label>
                  <input
                    id={`${idPrefix}-phone`}
                    name="input_6"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+27 (0)11 000 0000"
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Mandates & Interventions */}
            {step === 2 && (
              <div className="space-y-6">
                <fieldset>
                  <legend className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Select Strategic Mandate Alignment (Choose one or more)
                  </legend>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {mandateOptions.map((opt) => {
                      const isChecked = form.mandates.includes(opt);
                      return (
                        <label
                          key={opt}
                          className={`flex cursor-pointer items-center gap-3 rounded border p-3.5 text-sm transition-all ${
                            isChecked
                              ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)]/10 text-white'
                              : 'border-white/10 bg-white/5 text-[var(--pt-paper)] hover:border-white/25'
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="input_7"
                            checked={isChecked}
                            onChange={() => toggleMandate(opt)}
                            className="h-4 w-4 accent-[var(--pt-accent)] cursor-pointer"
                          />
                          <span className="font-medium">{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="flex flex-col gap-2 pt-2">
                  <label htmlFor={`${idPrefix}-intervention`} className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Preferred Intervention Vehicle *
                  </label>
                  <select
                    id={`${idPrefix}-intervention`}
                    name="input_8"
                    required
                    value={form.intervention}
                    onChange={(e) => updateField('intervention', e.target.value)}
                    className="w-full rounded border border-white/15 bg-[var(--pt-ink)] px-4 py-3 text-sm text-[var(--pt-paper)] focus:border-[var(--pt-accent)] focus:outline-none"
                  >
                    <option value="">Select an intervention vehicle...</option>
                    {interventionOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[var(--pt-ink)] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Vision & Impact Objectives */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${idPrefix}-vision`} className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                    Tell us about your organisation&apos;s vision for youth economic inclusion *
                  </label>
                  <textarea
                    id={`${idPrefix}-vision`}
                    name="input_9"
                    required
                    rows={6}
                    value={form.vision}
                    onChange={(e) => updateField('vision', e.target.value)}
                    placeholder="Outline your target demographics, geographic priorities, scorecard objectives, or target skills areas..."
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-sm text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)]/50 focus:border-[var(--pt-accent)] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Form Action Controls */}
            <div className="flex items-center justify-between gap-4 pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex min-h-12 items-center justify-center !rounded-[6px] border-[1.5px] border-[rgba(244,240,232,0.35)] bg-transparent px-7 py-3.5 text-[14px] font-bold text-[var(--pt-paper)] transition-all hover:border-[var(--pt-accent)] hover:bg-white/5 cursor-pointer"
                >
                  <span>Previous Step</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="ey-button ey-button-light-filled inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
              >
                <span>
                  {isSubmitting
                    ? 'Submitting Consultation Request...'
                    : step === 3
                    ? 'Request Partnership Consultation'
                    : 'Continue to Next Step'}
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
