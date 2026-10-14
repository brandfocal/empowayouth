'use client';

import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const fundingTrackOptions = [
  'Headline Title Sponsor',
  'Sector Day Presenter',
  'ESD Scorecard Contribution',
  'CSI Social Impact Grant',
  'Skills Bursary Pool',
];

export const budgetOptions = [
  'R100,000 – R250,000',
  'R250,000 – R500,000',
  'R500,000 – R1,000,000',
  'R1,000,000+ (Anchor Partner)',
];

export interface SponsorshipFormProps {
  idPrefix?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  className?: string;
}

export function SponsorshipForm({
  idPrefix = 'sponsor',
  badge = 'Strategic Mandate Alignment',
  title = 'Sponsorship & B-BBEE ESD Investment',
  subtitle = 'Power transformative socio-economic returns. Request the official Sponsorship & B-BBEE Scorecard Information Pack and structure high-impact investment.',
  showHeader = true,
  className = '',
}: SponsorshipFormProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [form, setForm] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    fundingTrack: 'ESD Scorecard Contribution',
    budgetRange: 'R250,000 – R500,000',
    message: '',
  });

  const updateField = (key: string, value: string) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Mapped to Gravity Forms Form ID: 49 (Sponsorship & Funding form)
    // Corporate / Funding Entity ID: 1 -> input_1
    // Executive Contact Person ID: 3 -> input_3
    // Executive Email ID: 4 -> input_4
    // Mobile / Direct Phone ID: 5 -> input_5
    // Strategic Funding Track ID: 6 -> input_6
    // Indicative Budget Allocation ID: 7 -> input_7
    // Specific Mandates or Strategic Objectives ID: 9 -> input_9
    const payload = {
      input_1: form.orgName.trim(),
      input_3: form.contactName.trim(),
      input_4: form.email.trim(),
      input_5: form.phone.trim(),
      input_6: form.fundingTrack.trim(),
      input_7: form.budgetRange.trim(),
      input_9: form.message.trim(),
    };

    try {
      // 1. Submit through Next.js proxy route to prevent CORS issues
      const res = await fetch('/api/sponsor', {
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
        'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/49/submissions',
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
          : directData.message || data.error || 'Failed to submit sponsorship enquiry. Please verify your details.';
      setErrorMessage(errMsg);
    } catch (err) {
      console.error('Sponsorship submission error:', err);
      // Final attempt via direct client call
      try {
        const directRes = await fetch(
          'https://cms.empowayouth.co.za/wp-json/gf/v2/forms/49/submissions',
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
        <div className="mb-6">
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

      {submitted ? (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 mb-3" />
          <h4 className="text-xl font-extrabold text-white uppercase">
            Sponsorship Pack Dispatched!
          </h4>
          <p className="mt-2 text-sm text-[rgba(244,240,232,0.85)] max-w-md mx-auto leading-relaxed">
            Thank you, {form.contactName || 'Partner'}. Your enquiry has been received by Executive Producer Simphiwe Masiza and the EmpowaYouth sponsorship desk. The official B-BBEE ESD, CSI, and branding tiers pack will be delivered to {form.email || 'your email'} shortly.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setErrorMessage(null);
                setForm({
                  orgName: '',
                  contactName: '',
                  email: '',
                  phone: '',
                  fundingTrack: 'ESD Scorecard Contribution',
                  budgetRange: 'R250,000 – R500,000',
                  message: '',
                });
              }}
              className="ey-button ey-button-light-filled inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Another Sponsorship Inquiry</span>
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

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`${idPrefix}-orgName`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2"
                >
                  Corporate / Funding Entity *
                </label>
                <input
                  id={`${idPrefix}-orgName`}
                  name="input_1"
                  type="text"
                  required
                  value={form.orgName}
                  onChange={(e) => updateField('orgName', e.target.value)}
                  placeholder="e.g. Absa / Sasol / Telkom"
                  className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor={`${idPrefix}-contactName`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2"
                >
                  Executive Contact Person *
                </label>
                <input
                  id={`${idPrefix}-contactName`}
                  name="input_3"
                  type="text"
                  required
                  value={form.contactName}
                  onChange={(e) => updateField('contactName', e.target.value)}
                  placeholder="Full Name & Designation"
                  className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`${idPrefix}-email`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2"
                >
                  Executive Email *
                </label>
                <input
                  id={`${idPrefix}-email`}
                  name="input_4"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="esd@corporate.com"
                  className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor={`${idPrefix}-phone`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2"
                >
                  Mobile / Direct Phone *
                </label>
                <input
                  id={`${idPrefix}-phone`}
                  name="input_5"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+27 82 000 0000"
                  className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`${idPrefix}-fundingTrack`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2"
                >
                  Strategic Funding Track *
                </label>
                <select
                  id={`${idPrefix}-fundingTrack`}
                  name="input_6"
                  required
                  value={form.fundingTrack}
                  onChange={(e) => updateField('fundingTrack', e.target.value)}
                  className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[#141d1a] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                >
                  {fundingTrackOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#141d1a] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor={`${idPrefix}-budgetRange`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2"
                >
                  Indicative Budget Allocation *
                </label>
                <select
                  id={`${idPrefix}-budgetRange`}
                  name="input_7"
                  required
                  value={form.budgetRange}
                  onChange={(e) => updateField('budgetRange', e.target.value)}
                  className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[#141d1a] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#141d1a] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-message`}
                className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2"
              >
                Specific Mandates or Strategic Objectives
              </label>
              <textarea
                id={`${idPrefix}-message`}
                name="input_9"
                rows={4}
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="Please note any specific reporting requirements, procurement points, or provincial mandates..."
                className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="ey-button ey-button-dark-filled w-full justify-center text-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>
                {isSubmitting
                  ? 'Dispatching Official Sponsorship Dossier...'
                  : 'Request Official Sponsorship Dossier'}
              </span>
              <ArrowRight className="h-4 w-4 ml-2 inline" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
