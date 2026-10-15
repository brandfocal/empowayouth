'use client';

import { useState, useMemo } from 'react';
import { pastSpeakers, Speaker } from '@/data/speakers';
import { Search } from 'lucide-react';

const categories = [
  'All',
  'Government & Policy',
  'Business & Industry',
  'Education & SETAs',
  'Innovation & Academia',
  'Media, Culture & Sports',
] as const;

type Category = (typeof categories)[number];

interface PastSpeakersSectionProps {
  id?: string;
  kicker?: string;
  title?: React.ReactNode;
  subtitle?: string;
  className?: string;
  asSection?: boolean;
}

export function PastSpeakersSection({
  id = 'past-speakers',
  kicker = 'Previous Speakers',
  title = (
    <>
      <span>Voices That </span>
      <span className="font-light italic text-[1.08em] tracking-[-0.02em] text-[var(--pt-accent)]">
        Moved
      </span>
      <span> The Room.</span>
    </>
  ),
  subtitle = 'Over 500 high-impact voices have powered the EmpowaYouth platform — from Cabinet Ministers, Premiers, and Listed Company CEOs to visionary entrepreneurs, academics, and cultural icons.',
  className = '',
  asSection = true,
}: PastSpeakersSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter speakers based on category and search query
  const filteredSpeakers = useMemo(() => {
    return pastSpeakers.filter((speaker) => {
      const matchesCategory =
        selectedCategory === 'All' || speaker.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speaker.designation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Ensure enough items exist for a seamless infinite loop across wide screens
  const minCards = 10;
  const multiplier = Math.max(1, Math.ceil(minCards / Math.max(1, filteredSpeakers.length)));
  const baseList = useMemo(() => {
    if (filteredSpeakers.length === 0) return [];
    return Array(multiplier).fill(filteredSpeakers).flat();
  }, [filteredSpeakers, multiplier]);

  // Dynamic duration so scroll speed remains consistent
  const marqueeDuration = Math.max(28, Math.round(baseList.length * 3.4));

  const content = (
    <div className="w-full">
      {/* Header, Categories & Search (Aligned to Container) */}
      <div className="max-w-[var(--pt-container)] mx-auto px-[var(--pt-container-pad)] mb-8 sm:mb-12">
        <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--pt-accent)] mb-3">
          <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" aria-hidden="true" />
          <span>{kicker}</span>
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2
              id={`${id}-heading`}
              className="font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance] text-[clamp(2.2rem,5.5vw,4.5rem)] m-0"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-sm sm:text-base text-[var(--pt-muted)] max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Categories Toolbar & Instant Search */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-y border-white/10 py-4 sm:py-5">
          {/* Category Tabs */}
          <div
            className="flex flex-wrap items-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Speaker categories"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? pastSpeakers.length
                  : pastSpeakers.filter((s) => s.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--pt-accent)] text-[var(--pt-ink)] shadow-md shadow-[rgba(232,131,42,0.3)]'
                      : 'border border-white/10 bg-white/[0.03] text-[rgba(244,240,232,0.7)] hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 opacity-65 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--pt-muted)] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search speaker or role..."
              className="w-full rounded-lg border border-white/10 bg-white/[0.04] pl-9 pr-3 py-1.5 text-xs text-[var(--pt-paper)] placeholder:text-[var(--pt-muted)] focus:border-[var(--pt-accent)] focus:outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* Full-Width Auto-Scrolling Infinite Marquee Track */}
      {filteredSpeakers.length === 0 ? (
        <div className="max-w-[var(--pt-container)] mx-auto px-[var(--pt-container-pad)]">
          <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl">
            <p className="text-sm text-[var(--pt-muted)]">No speakers found matching your search.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs font-bold uppercase text-[var(--pt-accent)] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full overflow-hidden">
          {/* Embedded scoped styles for bulletproof production deployment */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes ey-speakers-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ey-speakers-marquee-window {
              position: relative;
              width: 100%;
              overflow: hidden;
              padding: 16px 0 24px;
              mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
            }
            .ey-speakers-marquee-track {
              display: flex !important;
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              gap: 20px !important;
              width: max-content !important;
              will-change: transform;
              animation: ey-speakers-marquee var(--marquee-duration, 85s) linear infinite !important;
            }
            .ey-speakers-marquee-window:hover .ey-speakers-marquee-track,
            .ey-speakers-marquee-track:hover {
              animation-play-state: paused !important;
            }
          `}} />

          {/* Marquee Window with soft gradient masks on edges */}
          <div
            className="ey-speakers-marquee-window relative w-full overflow-hidden py-4 select-none"
            aria-label="Past keynote speakers marquee"
          >
            <div
              className="ey-speakers-marquee-track flex flex-row flex-nowrap w-max gap-5 will-change-transform"
              style={{ '--marquee-duration': `${marqueeDuration}s` } as React.CSSProperties}
            >
              {/* Set A: Initial batch */}
              {baseList.map((speaker: Speaker, idx: number) => {
                return (
                  <article
                    key={`set-a-${speaker.id}-${idx}`}
                    className="group relative flex flex-col justify-between h-[440px] sm:h-[480px] md:h-[510px] w-[280px] sm:w-[310px] md:w-[330px] shrink-0 overflow-hidden rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] transition-all duration-300 hover:border-[rgba(232,131,42,0.7)] hover:shadow-[0_0_28px_rgba(232,131,42,0.25)] hover:-translate-y-1.5 cursor-pointer select-none"
                  >
                    {/* Background Portrait Photo */}
                    <img
                      src={speaker.imageUrl}
                      alt={`${speaker.name} portrait`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out brightness-[0.65] contrast-[1.02] grayscale-[0.25] group-hover:scale-105 group-hover:brightness-[0.92] group-hover:contrast-[1.06] group-hover:grayscale-0"
                    />

                    {/* Dark Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,14,0.98)] via-[rgba(11,15,14,0.5)] via-60% to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top Meta Bar */}
                    <div className="relative z-10 flex items-center justify-end p-4 sm:p-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--pt-paper)]/85 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 truncate max-w-[180px]">
                        {speaker.category}
                      </span>
                    </div>

                    {/* Bottom Details - firmly anchored to bottom */}
                    <div className="relative z-10 mt-auto p-5 sm:p-6 flex flex-col justify-end">
                      <h3 className="text-lg sm:text-xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-[var(--pt-paper)] group-hover:text-[var(--pt-accent)] transition-colors line-clamp-2">
                        {speaker.name}
                      </h3>
                      <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-[var(--pt-accent)] line-clamp-1">
                        {speaker.category}
                      </p>
                      <p className="mt-2 text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-[rgba(244,240,232,0.85)] line-clamp-3 group-hover:text-white transition-colors">
                        {speaker.designation}
                      </p>
                    </div>
                  </article>
                );
              })}

              {/* Set B: Duplicate batch for seamless infinite repeat */}
              {baseList.map((speaker: Speaker, idx: number) => {
                return (
                  <article
                    key={`set-b-${speaker.id}-${idx}`}
                    aria-hidden="true"
                    className="group relative flex flex-col justify-between h-[440px] sm:h-[480px] md:h-[510px] w-[280px] sm:w-[310px] md:w-[330px] shrink-0 overflow-hidden rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] transition-all duration-300 hover:border-[rgba(232,131,42,0.7)] hover:shadow-[0_0_28px_rgba(232,131,42,0.25)] hover:-translate-y-1.5 cursor-pointer select-none"
                  >
                    {/* Background Portrait Photo */}
                    <img
                      src={speaker.imageUrl}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-out brightness-[0.65] contrast-[1.02] grayscale-[0.25] group-hover:scale-105 group-hover:brightness-[0.92] group-hover:contrast-[1.06] group-hover:grayscale-0"
                    />

                    {/* Dark Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,14,0.98)] via-[rgba(11,15,14,0.5)] via-60% to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top Meta Bar */}
                    <div className="relative z-10 flex items-center justify-end p-4 sm:p-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--pt-paper)]/85 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 truncate max-w-[180px]">
                        {speaker.category}
                      </span>
                    </div>

                    {/* Bottom Details - firmly anchored to bottom */}
                    <div className="relative z-10 mt-auto p-5 sm:p-6 flex flex-col justify-end">
                      <h3 className="text-lg sm:text-xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-[var(--pt-paper)] group-hover:text-[var(--pt-accent)] transition-colors line-clamp-2">
                        {speaker.name}
                      </h3>
                      <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-[var(--pt-accent)] line-clamp-1">
                        {speaker.category}
                      </p>
                      <p className="mt-2 text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-[rgba(244,240,232,0.85)] line-clamp-3 group-hover:text-white transition-colors">
                        {speaker.designation}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (!asSection) {
    return (
      <div id={id} className={`w-full ${className}`} aria-labelledby={`${id}-heading`}>
        {content}
      </div>
    );
  }

  return (
    <section
      id={id}
      className={`w-full bg-[var(--pt-ink)] py-[clamp(56px,8vw,104px)] overflow-hidden ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {content}
    </section>
  );
}

