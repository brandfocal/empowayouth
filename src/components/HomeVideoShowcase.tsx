'use client';

import React, { useState } from 'react';
import { Play, ExternalLink, Sparkles } from 'lucide-react';

export interface ShowcaseVideo {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  duration: string;
}

export const SHOWCASE_VIDEOS: ShowcaseVideo[] = [
  {
    id: 'QdYa_TLdgks',
    category: 'Movement Reel',
    title: 'From Orange Farm to the Nation',
    subtitle: 'The founding vision and national mobilization of EmpowaYouth',
    duration: '0:36',
  },
  {
    id: 'v4adN4XIgEw',
    category: 'Day 1',
    title: 'Health, Wellness & Longevity Economy',
    subtitle: 'Powering the Youth Economy at Vaal EmpowaYouth Week',
    duration: '2:22',
  },
  {
    id: 'DLwpRVZuFE8',
    category: 'Day 2',
    title: 'AI, Automation & Tech Economy',
    subtitle: 'Digital Transformation, 4IR & Modern Tech Skills',
    duration: '2:33',
  },
  {
    id: 'VPlCuJRxzBU',
    category: 'Day 3',
    title: 'Creative, Content & Film Economy',
    subtitle: 'Digital Content Creation, Media & Entertainment',
    duration: '2:24',
  },
  {
    id: 'uL27g45XEEQ',
    category: 'Day 4',
    title: 'Green Economy & Climate Innovation',
    subtitle: 'Agritech, Food Security & Sustainable Enterprise',
    duration: '2:04',
  },
  {
    id: 'PN0iTQk0AKY',
    category: 'Day 5',
    title: 'Entrepreneurship & Funding Ecosystems',
    subtitle: 'Pitching Sessions, Venture Incubators & Catalytic Capital',
    duration: '2:32',
  },
];

const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLCw2jEjBGMr3D4WisMIiQKTjCX9EKKsZJ';

export function HomeVideoShowcase() {
  const [activeVideoId, setActiveVideoId] = useState<string>('QdYa_TLdgks');
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);

  const activeVideo = SHOWCASE_VIDEOS.find((v) => v.id === activeVideoId) ?? SHOWCASE_VIDEOS[0];

  const handleSelectVideo = (id: string) => {
    setActiveVideoId(id);
    setHasUserInteracted(true);
  };

  return (
    <section
      className="ey-standalone-video-section w-full bg-[var(--pt-ink)] pt-[92px] sm:pt-[104px] md:pt-[116px] pb-10 sm:pb-14 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)]"
      aria-label="EmpowaYouth Featured Video Showcase"
    >
      <div className="mx-auto max-w-[var(--pt-container)]">
        {/* Main Video Frame & Header */}
        <div className="relative group">
          {/* Ambient Backlight Glow */}
          <div
            className="absolute -inset-1 rounded-2xl md:rounded-3xl bg-gradient-to-r from-[var(--pt-accent)]/25 via-transparent to-[var(--pt-accent)]/25 opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70 pointer-events-none"
            aria-hidden="true"
          />

          {/* Active Video Player */}
          <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[rgba(244,240,232,0.14)] bg-black shadow-2xl">
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&mute=${hasUserInteracted ? 0 : 1}&controls=1&rel=0&modestbranding=1&playsinline=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

        {/* Video Metadata Bar */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(244,240,232,0.08)] pb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(232,93,4,0.15)] border border-[rgba(232,93,4,0.35)] text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--pt-accent)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--pt-accent)] animate-pulse" />
              Now Playing
            </span>
            <span className="text-xs font-semibold text-[rgba(244,240,232,0.7)] uppercase tracking-wider">
              {activeVideo.category}
            </span>
            <span className="hidden sm:inline text-[rgba(244,240,232,0.3)]">•</span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--pt-paper)]">
              {activeVideo.title}
            </h3>
          </div>

          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--pt-accent)] hover:text-white transition-colors duration-200 shrink-0 self-start sm:self-center"
          >
            <span>Full YouTube Playlist</span>
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        {/* Playlist Thumbnails Selector */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between mb-3.5">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[rgba(244,240,232,0.75)] flex items-center gap-2">
              <Sparkles size={13} className="text-[var(--pt-accent)]" />
              <span>Select Session to Watch ({SHOWCASE_VIDEOS.length} Videos)</span>
            </p>
            <span className="text-[11px] font-medium text-[rgba(244,240,232,0.5)] hidden sm:inline">
              Click thumbnail to play above
            </span>
          </div>

          {/* Grid of Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
            {SHOWCASE_VIDEOS.map((video) => {
              const isActive = video.id === activeVideoId;

              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => handleSelectVideo(video.id)}
                  aria-label={`Play ${video.title}`}
                  aria-pressed={isActive}
                  className={`group/thumb text-left rounded-xl overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pt-accent)] cursor-pointer flex flex-col ${
                    isActive
                      ? 'ring-2 ring-[var(--pt-accent)] bg-[rgba(244,240,232,0.06)] shadow-lg shadow-[rgba(232,93,4,0.15)]'
                      : 'border border-[rgba(244,240,232,0.10)] bg-[rgba(244,240,232,0.02)] hover:border-[rgba(232,93,4,0.5)] hover:bg-[rgba(244,240,232,0.05)]'
                  }`}
                >
                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-video w-full bg-black overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105 ${
                        isActive ? 'brightness-105' : 'brightness-90 group-hover/thumb:brightness-100'
                      }`}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Active "Playing" Badge or Play Icon */}
                    {isActive ? (
                      <div className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[var(--pt-accent)] text-black text-[9px] font-black uppercase tracking-wider shadow">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                        <span>Active</span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
                        <div className="w-8 h-8 rounded-full bg-[var(--pt-accent)] text-black flex items-center justify-center shadow-lg transform group-hover/thumb:scale-110 transition-transform">
                          <Play size={14} className="fill-current ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Duration badge */}
                    <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold text-[var(--pt-paper)] tracking-wide">
                      {video.duration}
                    </span>
                  </div>

                  {/* Thumbnail Content / Titles */}
                  <div className="p-2 sm:p-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <p
                        className={`text-[10px] font-extrabold uppercase tracking-wider mb-1 ${
                          isActive ? 'text-[var(--pt-accent)]' : 'text-[rgba(244,240,232,0.6)]'
                        }`}
                      >
                        {video.category}
                      </p>
                      <h4
                        className={`text-[11px] sm:text-xs font-bold leading-snug line-clamp-2 transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-[rgba(244,240,232,0.85)] group-hover/thumb:text-white'
                        }`}
                      >
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
