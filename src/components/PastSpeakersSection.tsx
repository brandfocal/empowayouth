'use client';

import { useState, useMemo, useEffect } from 'react';
import { pastSpeakers, Speaker } from '@/data/speakers';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'All',
  'Government & Policy',
  'Business & Industry',
  'Education & SETAs',
  'Innovation & Academia',
  'Media, Culture & Sports',
] as const;

type Category = (typeof categories)[number];

const BATCH_SIZE = 6;

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
  const [page, setPage] = useState<number>(0);
  const [activeSpeaker, setActiveSpeaker] = useState<number>(0);
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null);

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

  // Reset pagination & active speaker when filter or search changes
  useEffect(() => {
    setPage(0);
    setActiveSpeaker(0);
    setHoveredSpeaker(null);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredSpeakers.length / BATCH_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const startIndex = currentPage * BATCH_SIZE;
  const currentBatch = filteredSpeakers.slice(startIndex, startIndex + BATCH_SIZE);

  const currentSpeakerIndex =
    hoveredSpeaker !== null && hoveredSpeaker < currentBatch.length
      ? hoveredSpeaker
      : Math.min(activeSpeaker, Math.max(0, currentBatch.length - 1));

  const innerContent = (
    <div
      className={
        asSection
          ? 'max-w-[var(--pt-container)] mx-auto px-[var(--pt-container-pad)]'
          : 'w-full'
      }
    >
      {/* Section Header */}
      <div className="mb-8 sm:mb-12">
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

          <div className="flex items-center gap-4 shrink-0 flex-wrap">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--pt-accent)]/30 bg-[rgba(232,131,42,0.1)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
              <span className="h-2 w-2 rounded-full bg-[var(--pt-accent)] animate-pulse" />
              <span>{pastSpeakers.length} Keynote Voices</span>
            </span>
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--pt-muted)] hidden sm:block">
              Hover or click card to expand &rarr;
            </p>
          </div>
        </div>
      </div>

      {/* Categories Toolbar & Instant Search */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-y border-white/10 py-4 sm:py-5">
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

      {/* Accordion Gallery */}
      {filteredSpeakers.length === 0 ? (
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
      ) : (
        <div>
          {/* Interactive Expanding Accordion Row with exact card design and hover effect */}
          <div
            className="flex w-full gap-1.5 sm:gap-2.5 md:gap-3 h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] select-none"
            role="tablist"
            aria-label="Previous speakers interactive gallery"
            onMouseLeave={() => setHoveredSpeaker(null)}
          >
            {currentBatch.map((speaker: Speaker, index: number) => {
              const isCurrent = currentSpeakerIndex === index;
              const speakerNumber = startIndex + index + 1;

              return (
                <article
                  key={speaker.id}
                  role="tab"
                  aria-selected={isCurrent}
                  tabIndex={0}
                  onClick={() => setActiveSpeaker(index)}
                  onMouseEnter={() => setHoveredSpeaker(index)}
                  onMouseLeave={() => setHoveredSpeaker(null)}
                  onFocus={() => setActiveSpeaker(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveSpeaker(index);
                    }
                  }}
                  className={`group relative h-full overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-[flex-grow,flex-basis] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isCurrent
                      ? 'flex-[3.5] sm:flex-[3] md:flex-[2.8] min-w-0'
                      : 'flex-[1] min-w-0'
                  }`}
                  aria-label={`${speaker.name}, ${speaker.designation}`}
                >
                  {/* Speaker Portrait Background */}
                  <img
                    src={speaker.imageUrl}
                    alt={`${speaker.name} portrait`}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-[transform,filter] duration-700 ease-out"
                    style={{
                      transform: isCurrent ? 'scale(1.05)' : 'scale(1.0)',
                      filter: isCurrent
                        ? 'brightness(0.78) contrast(1.05)'
                        : 'brightness(0.35) grayscale(0.4)',
                    }}
                  />

                  {/* Dark Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,14,0.96)] via-[rgba(11,15,14,0.38)] to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Glowing Accent Border */}
                  <div
                    className={`absolute inset-0 rounded-xl sm:rounded-2xl border transition-colors duration-300 pointer-events-none ${
                      isCurrent
                        ? 'border-[rgba(232,131,42,0.65)] shadow-[0_0_24px_rgba(232,131,42,0.22)]'
                        : 'border-[rgba(244,240,232,0.08)] group-hover:border-[rgba(244,240,232,0.25)]'
                    }`}
                    aria-hidden="true"
                  />

                  {/* Collapsed state display (vertical name + number on small widths) */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between items-center py-3.5 sm:py-5 px-1 pointer-events-none transition-opacity duration-300 ${
                      isCurrent ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                    aria-hidden={isCurrent}
                  >
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.14em] text-[var(--pt-accent)]">
                      {String(speakerNumber).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[rgba(244,240,232,0.7)] [writing-mode:vertical-rl] rotate-180 truncate max-h-[200px] sm:max-h-[260px]">
                      {speaker.name}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[rgba(244,240,232,0.3)] group-hover:bg-[var(--pt-accent)] transition-colors" />
                  </div>

                  {/* Expanded state display */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between p-3.5 sm:p-5 md:p-6 pointer-events-none transition-opacity duration-300 ${
                      isCurrent ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    aria-hidden={!isCurrent}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-[0.14em] text-[var(--pt-accent)] bg-[rgba(11,15,14,0.75)] backdrop-blur-sm px-2.5 py-1 rounded-full border border-[rgba(232,131,42,0.35)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--pt-accent)] animate-pulse" />
                        <span>{String(speakerNumber).padStart(2, '0')}</span>
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--pt-muted)] bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 hidden md:inline truncate max-w-[200px]">
                        {speaker.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-lg md:text-2xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-[var(--pt-paper)] mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-[var(--pt-accent)] mb-1.5">
                        {speaker.category}
                      </p>
                      <p className="text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-[rgba(244,240,232,0.85)] line-clamp-3">
                        {speaker.designation}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Dots Indicator & Pagination Controls */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
            {/* Active Card Navigation Dots */}
            <div className="flex items-center gap-2" aria-label="Speaker navigation dots">
              {currentBatch.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveSpeaker(i)}
                  aria-label={`View speaker ${startIndex + i + 1}: ${s.name}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSpeakerIndex === i
                      ? 'w-8 bg-[var(--pt-accent)]'
                      : 'w-2 bg-[rgba(244,240,232,0.25)] hover:bg-[rgba(244,240,232,0.5)]'
                  }`}
                />
              ))}
            </div>

            {/* Pagination Controls when there are multiple batches */}
            <div className="flex items-center gap-3">
              {totalPages > 1 && (
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setPage((prev) => Math.max(0, prev - 1));
                      setActiveSpeaker(0);
                    }}
                    disabled={currentPage === 0}
                    aria-label="Previous batch"
                    className="p-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-[var(--pt-paper)] transition hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-muted)] px-2">
                    {startIndex + 1}–{Math.min(startIndex + BATCH_SIZE, filteredSpeakers.length)} of {filteredSpeakers.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setPage((prev) => Math.min(totalPages - 1, prev + 1));
                      setActiveSpeaker(0);
                    }}
                    disabled={currentPage >= totalPages - 1}
                    aria-label="Next batch"
                    className="p-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-[var(--pt-paper)] transition hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              <p className="text-xs text-[var(--pt-muted)] tracking-wider">
                Over 500 high-impact voices powered across all 9 provinces
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (!asSection) {
    return (
      <div id={id} className={`w-full ${className}`} aria-labelledby={`${id}-heading`}>
        {innerContent}
      </div>
    );
  }

  return (
    <section
      id={id}
      className={`w-full bg-[var(--pt-ink)] py-[clamp(56px,8vw,104px)] overflow-hidden ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {innerContent}
    </section>
  );
}
