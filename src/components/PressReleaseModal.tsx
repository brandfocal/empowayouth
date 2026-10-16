'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  X,
  Printer,
  Copy,
  Check,
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  Sparkles,
  Building2,
  Mail,
  Phone,
  Globe,
  Quote,
  ArrowRight,
  Download,
} from 'lucide-react';
import { PressRelease } from '@/data/press-releases';

interface PressReleaseModalProps {
  release: PressRelease | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PressReleaseModal({ release, isOpen, onClose }: PressReleaseModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !release) return null;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(release.fullRawText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = release.fullRawText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-black/80 p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="press-release-modal-title"
      onClick={onClose}
    >
      <div
        id="printable-press-release"
        className="relative mx-auto my-auto flex max-h-[100vh] w-full max-w-4xl flex-col rounded-none bg-[var(--pt-paper)] text-[var(--pt-ink)] shadow-2xl transition-all sm:max-h-[92vh] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Toolbar */}
        <header className="no-print sticky top-0 z-30 flex items-center justify-between border-b border-[var(--pt-light-divider)] bg-[var(--pt-paper)]/95 px-5 py-3.5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(232,131,42,0.12)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--pt-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--pt-accent)] animate-pulse" />
              Official Media Release
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-[var(--pt-light-divider)] bg-white/70 px-3 text-xs font-semibold text-[var(--pt-ink)] shadow-xs transition-all hover:border-[var(--pt-accent)] hover:bg-white hover:text-[var(--pt-accent)]"
              title="Copy formatted text to clipboard for publication"
              aria-label="Copy press release text"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-[var(--pt-light-divider)] bg-white/70 px-3 text-xs font-semibold text-[var(--pt-ink)] shadow-xs transition-all hover:border-[var(--pt-accent)] hover:bg-white hover:text-[var(--pt-accent)]"
              title="Print document or Save as PDF"
              aria-label="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--pt-light-divider)] bg-white/70 text-[var(--pt-ink)] transition-all hover:border-[var(--pt-accent)] hover:bg-[var(--pt-accent)] hover:text-white"
              aria-label="Close press release"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10">
          {/* Official Letterhead Header */}
          <div className="border-b-2 border-[var(--pt-accent)] pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo/empowayouth-logo-2.png"
                  alt="EmpowaYouth"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
              <div className="text-right">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--pt-accent)]">
                  {release.status}
                </p>
                <p className="text-xs font-medium text-[var(--pt-muted)]">{release.location}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
              <span className="bg-black/5 px-2.5 py-1 rounded text-[var(--pt-ink)]">{release.type}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[var(--pt-accent)] font-bold">
                <Calendar size={13} />
                {release.eventDates}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={13} />
                {release.location}
              </span>
            </div>

            <h1
              id="press-release-modal-title"
              className="mt-4 text-[clamp(22px,4vw,34px)] font-black leading-[1.12] tracking-[-0.03em] text-[var(--pt-ink)] [text-wrap:balance]"
            >
              {release.title}
            </h1>

            <p className="mt-3 text-base font-medium text-[var(--pt-muted)] italic">
              {release.subtitle}
            </p>

            <div className="mt-3 inline-block rounded bg-[var(--pt-ink)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--pt-paper)]">
              INSPIRED | CONNECTED | TRANSFORMED
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 rounded-xl border border-[var(--pt-light-divider)] bg-white/60 p-4">
            {release.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[var(--pt-accent)] pl-3">
                <p className="text-lg sm:text-2xl font-black leading-none text-[var(--pt-ink)]">{stat.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Lead Paragraph */}
          <div className="text-[16px] sm:text-[18px] font-semibold leading-[1.65] text-[var(--pt-ink)]">
            <span className="font-extrabold text-[var(--pt-accent)]">{release.location}: </span>
            {release.lead}
          </div>

          {/* Body Paragraphs */}
          <div className="mt-6 space-y-4 text-[15px] sm:text-[16px] leading-[1.75] text-[var(--pt-ink)]/90">
            <p>
              Under the theme <strong>“{release.theme}”</strong>, the five-day programme aims to attract more than{' '}
              <strong>10,000 young people</strong> across the week. Its focus is clear: help young people understand
              where opportunities exist, what those opportunities require and how to take the next step towards
              participation.
            </p>
            <p>
              For unemployed graduates, job seekers, aspiring entrepreneurs, matriculants and young people outside
              employment, education or training, the platform is designed to make an often fragmented opportunity
              landscape easier to navigate.
            </p>
            <p>
              For industry, it offers a concentrated opportunity to engage emerging talent, develop enterprise pipelines
              and connect organisational investment with the needs and ambitions of young South Africans.
            </p>
          </div>

          {/* Three Strategic Priorities */}
          <div className="my-8 rounded-2xl border border-[var(--pt-accent)]/20 bg-[rgba(232,131,42,0.04)] p-6 sm:p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--pt-accent)]">
              Strategic Blueprint
            </p>
            <h2 className="mt-1 text-xl sm:text-2xl font-black text-[var(--pt-ink)]">
              Inspired. Connected. Transformed.
            </h2>
            <p className="mt-1 text-xs font-medium text-[var(--pt-muted)]">
              Vaal EmpowaYouth Week 2027 is built around three core strategic priorities:
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {release.priorities.map((item) => (
                <div
                  key={item.tag}
                  className="rounded-xl border border-[var(--pt-light-divider)] bg-white p-4 shadow-2xs"
                >
                  <span className="inline-block rounded bg-[var(--pt-accent)] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-[var(--pt-ink)]">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--pt-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs italic text-[var(--pt-muted)]">
              The emphasis is on making each interaction useful beyond the event itself.
            </p>
          </div>

          {/* Opportunity Areas */}
          <div className="my-8">
            <h2 className="text-xl sm:text-2xl font-black text-[var(--pt-ink)]">
              Five Days Focused on Economic Participation
            </h2>
            <p className="mt-1 text-sm text-[var(--pt-muted)]">
              The programme will explore five key opportunity areas:
            </p>

            <div className="mt-4 space-y-3">
              {release.opportunityAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="flex items-start gap-3.5 rounded-xl border border-[var(--pt-light-divider)] bg-white/70 p-4 transition-colors hover:border-[var(--pt-accent)]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--pt-ink)] text-xs font-bold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--pt-ink)]">{area.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--pt-muted)]">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Context: Why the Vaal matters */}
          <div className="my-8 rounded-xl bg-black/5 p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--pt-ink)]">Why the Vaal Matters</h2>
            <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--pt-ink)]/85">
              {release.vaalContext.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Executive Pull Quote */}
          <blockquote className="my-8 relative overflow-hidden rounded-2xl border-l-4 border-[var(--pt-accent)] bg-white p-6 shadow-xs sm:p-8">
            <Quote
              size={48}
              className="absolute -right-2 -bottom-2 text-[var(--pt-accent)]/10"
              aria-hidden="true"
            />
            <p className="text-[15px] sm:text-[17px] font-medium leading-[1.7] text-[var(--pt-ink)] italic">
              {release.quote.text}
            </p>
            <footer className="mt-4 border-t border-[var(--pt-light-divider)] pt-3">
              <p className="text-sm font-bold text-[var(--pt-ink)]">{release.quote.author}</p>
              <p className="text-xs text-[var(--pt-muted)] font-medium">
                {release.quote.role}, {release.quote.organization}
              </p>
            </footer>
          </blockquote>

          {/* Media Houses Invitation */}
          <div className="my-8">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--pt-ink)]">
              A Compelling Editorial Platform for Media Houses
            </h2>
            <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-[var(--pt-ink)]/85">
              {release.mediaOpportunities.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Industry Invitation */}
          <div className="my-8 rounded-xl border border-[var(--pt-accent)] bg-[rgba(232,131,42,0.06)] p-6">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--pt-accent)]">
              An Invitation to Industry and Opportunity Providers
            </h2>
            <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-[var(--pt-ink)]/85">
              {release.industryInvitation.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Event Details Factsheet */}
          <div className="my-8 rounded-2xl border border-[var(--pt-light-divider)] bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--pt-light-divider)] pb-4">
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[var(--pt-ink)]">
                Event Factsheet
              </h2>
              <span className="rounded bg-emerald-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                100% Free Entry
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">Event</dt>
                <dd className="mt-0.5 font-bold text-[var(--pt-ink)]">{release.eventDetails.event}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">Dates & Times</dt>
                <dd className="mt-0.5 font-bold text-[var(--pt-ink)]">
                  {release.eventDetails.dates} ({release.eventDetails.time})
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">Venue</dt>
                <dd className="mt-0.5 font-bold text-[var(--pt-ink)]">{release.eventDetails.venue}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">Theme</dt>
                <dd className="mt-0.5 font-bold text-[var(--pt-accent)]">{release.eventDetails.theme}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">Target Attendance</dt>
                <dd className="mt-0.5 font-bold text-[var(--pt-ink)]">{release.eventDetails.targetAttendance}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)]">Audience</dt>
                <dd className="mt-0.5 text-xs text-[var(--pt-ink)]/80">{release.eventDetails.audience}</dd>
              </div>
            </dl>

            <div className="no-print mt-6 border-t border-[var(--pt-light-divider)] pt-4">
              <Link
                href="/vaal"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--pt-accent)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02]"
              >
                <span>Visit Vaal Week Hub & Registration</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Boilerplate */}
          <div className="my-8 border-t border-[var(--pt-light-divider)] pt-6 text-xs text-[var(--pt-muted)] leading-relaxed">
            <p className="font-bold uppercase tracking-wider text-[var(--pt-ink)]">About EmpowaYouth</p>
            <p className="mt-1">{release.boilerplate}</p>
          </div>

          {/* Media Contact Box */}
          <div className="my-8 rounded-xl border border-[var(--pt-light-divider)] bg-[var(--pt-ink)] p-6 text-[var(--pt-paper)]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--pt-accent)]">
              Media Enquiries & Editorial Access
            </p>
            <h3 className="mt-1 text-base font-bold text-white">
              {release.mediaContact.name} —{' '}
              <span className="font-normal text-[var(--pt-muted)]">{release.mediaContact.title}</span>
            </h3>

            <div className="mt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs">
              <a
                href={`mailto:${release.mediaContact.email}`}
                className="flex items-center gap-1.5 text-[var(--pt-accent)] hover:underline"
              >
                <Mail size={13} />
                <span>{release.mediaContact.email}</span>
              </a>
              <a
                href={`tel:${release.mediaContact.mobile.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-white/90 hover:text-[var(--pt-accent)]"
              >
                <Phone size={13} />
                <span>{release.mediaContact.mobile}</span>
              </a>
              <span className="text-white/60">
                Landline: {release.mediaContact.landline}
              </span>
              <a
                href={release.mediaContact.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/90 hover:text-[var(--pt-accent)]"
              >
                <Globe size={13} />
                <span>www.empowaworx.co.za</span>
              </a>
            </div>
          </div>

          {/* Signoff */}
          <div className="py-4 text-center">
            <span className="text-xs font-black tracking-widest text-[var(--pt-muted)]">ENDS</span>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <footer className="no-print border-t border-[var(--pt-light-divider)] bg-[var(--pt-paper)] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[var(--pt-muted)] font-medium">
            <span>Official release published by EmpowaWorx Communications</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-md border border-[var(--pt-light-divider)] bg-white px-3.5 py-2 text-xs font-bold text-[var(--pt-ink)] transition-colors hover:border-[var(--pt-accent)] hover:text-[var(--pt-accent)]"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md bg-[var(--pt-ink)] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              <span>Close</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
