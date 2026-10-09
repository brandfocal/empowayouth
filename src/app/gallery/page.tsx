'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Play,
  Film,
  Image as ImageIcon,
  Sparkles,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';
import {
  galleriesData,
  GalleryEdition,
  GalleryVideo,
  GalleryImage,
} from '@/data/galleries';

type FilterMediaType = 'all' | 'videos' | 'images';

export default function GalleryPage() {
  useEmpowaYouthScrollAnimations();

  const [selectedEditionId, setSelectedEditionId] = useState<string>('all');
  const [mediaType, setMediaType] = useState<FilterMediaType>('all');

  // Modal states
  const [activeVideo, setActiveVideo] = useState<{
    video: GalleryVideo;
    editionTitle: string;
  } | null>(null);

  const [activeImage, setActiveImage] = useState<{
    image: GalleryImage;
    editionIndex: number;
    imageIndex: number;
    totalImages: number;
    imagesList: GalleryImage[];
  } | null>(null);

  // Keyboard navigation for modals (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
        setActiveImage(null);
      }
      if (activeImage) {
        if (e.key === 'ArrowRight') {
          handleNextImage();
        } else if (e.key === 'ArrowLeft') {
          handlePrevImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  const handleNextImage = () => {
    if (!activeImage) return;
    const nextIdx = (activeImage.imageIndex + 1) % activeImage.totalImages;
    setActiveImage({
      ...activeImage,
      image: activeImage.imagesList[nextIdx],
      imageIndex: nextIdx,
    });
  };

  const handlePrevImage = () => {
    if (!activeImage) return;
    const prevIdx =
      (activeImage.imageIndex - 1 + activeImage.totalImages) %
      activeImage.totalImages;
    setActiveImage({
      ...activeImage,
      image: activeImage.imagesList[prevIdx],
      imageIndex: prevIdx,
    });
  };

  const filteredEditions = useMemo(() => {
    if (selectedEditionId === 'all') return galleriesData;
    return galleriesData.filter((g) => g.id === selectedEditionId);
  }, [selectedEditionId]);

  return (
    <main className="min-h-screen bg-[var(--pt-ink)] text-[var(--pt-paper)]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section
        className="relative flex min-h-[60svh] flex-col justify-end overflow-hidden border-b border-white/10 bg-[var(--pt-ink)] px-4 pb-16 pt-[clamp(120px,16vw,190px)] sm:px-6 md:px-8 lg:px-[var(--pt-container-pad)]"
        id="gallery-hero"
      >
        {/* Background visual overlay */}
        <img
          src="https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8155.jpg"
          alt="Orange Farm youth assembly"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-25"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(11,15,14,0.40)_0%,rgba(11,15,14,0.75)_50%,rgba(11,15,14,0.98)_100%)]"
          aria-hidden="true"
        />
        {/* Brand watermark icon */}
        <img
          src="/logo/empowayouth-icon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-5%] top-[12%] z-[1] h-[360px] w-[360px] select-none object-contain opacity-15 md:h-[520px] md:w-[520px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[var(--pt-container)]">
          {/* Breadcrumbs / Eyebrow */}
          <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href="/media"
              className="transition-colors hover:text-white"
            >
              Media
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Gallery Archive</span>
          </div>

          <h1 className="mb-6 max-w-5xl text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)] [text-wrap:balance]">
            <span>TETA EmpowaYouth Week </span>
            <span className="ey-heading-italic text-[var(--pt-accent)]">
              Orange Farm
            </span>
          </h1>

          <p className="max-w-[720px] text-[16px] font-normal leading-[1.75] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
            Experience the milestones, youth energy, pitch competitions, and transformative transport
            skills opportunities delivered across the 2023, 2022, and 2021 editions in Orange Farm,
            powered by the Transport Education Training Authority (TETA).
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-[var(--pt-muted)]">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[var(--pt-accent)]">17,200+</span>
              <span>Total Youth Activated</span>
            </div>
            <span className="text-white/20">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[var(--pt-paper)]">900+</span>
              <span>Placements &amp; Bursaries</span>
            </div>
            <span className="text-white/20">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[var(--pt-accent)]">3 Editions</span>
              <span>2023, 2022 &amp; 2021</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FILTER & NAVIGATION BAR (STICKY)                      */}
      {/* ======================================================== */}
      <section className="sticky top-20 z-40 border-b border-white/10 bg-[var(--pt-ink)]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[var(--pt-container)] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8 lg:px-[var(--pt-container-pad)]">
          {/* Edition Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-[var(--pt-muted)] sm:inline">
              Edition:
            </span>
            <button
              type="button"
              onClick={() => setSelectedEditionId('all')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                selectedEditionId === 'all'
                  ? 'bg-[var(--pt-accent)] text-white shadow-sm'
                  : 'border border-white/10 bg-white/5 text-[var(--pt-paper)] hover:border-white/20 hover:bg-white/10'
              }`}
            >
              All Years
            </button>
            {galleriesData.map((edition) => (
              <button
                key={edition.id}
                type="button"
                onClick={() => setSelectedEditionId(edition.id)}
                className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                  selectedEditionId === edition.id
                    ? 'bg-[var(--pt-accent)] text-white shadow-sm'
                    : 'border border-white/10 bg-white/5 text-[var(--pt-paper)] hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {edition.year}
              </button>
            ))}
          </div>

          {/* Media Filter Tabs */}
          <div className="flex items-center gap-2 border-t border-white/10 pt-3 sm:border-t-0 sm:pt-0">
            <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-[var(--pt-muted)]">
              Show:
            </span>
            <button
              type="button"
              onClick={() => setMediaType('all')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                mediaType === 'all'
                  ? 'bg-white/20 text-white'
                  : 'text-[var(--pt-muted)] hover:text-white'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>All Media</span>
            </button>
            <button
              type="button"
              onClick={() => setMediaType('videos')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                mediaType === 'videos'
                  ? 'bg-white/20 text-white'
                  : 'text-[var(--pt-muted)] hover:text-white'
              }`}
            >
              <Film className="h-3.5 w-3.5 text-[var(--pt-accent)]" />
              <span>Videos</span>
            </button>
            <button
              type="button"
              onClick={() => setMediaType('images')}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                mediaType === 'images'
                  ? 'bg-white/20 text-white'
                  : 'text-[var(--pt-muted)] hover:text-white'
              }`}
            >
              <ImageIcon className="h-3.5 w-3.5 text-[var(--pt-accent)]" />
              <span>Images</span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. GALLERIES CONTENT                                     */}
      {/* ======================================================== */}
      <div className="mx-auto max-w-[var(--pt-container)] px-4 py-16 sm:px-6 md:px-8 lg:px-[var(--pt-container-pad)] space-y-24">
        {filteredEditions.map((edition, editionIdx) => (
          <article
            key={edition.id}
            id={edition.slug}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-12 transition-all"
          >
            {/* Gallery Header Info */}
            <header className="border-b border-white/10 pb-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--pt-accent)]/30 bg-[var(--pt-accent)]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    <Sparkles className="h-3 w-3" />
                    <span>{edition.badge}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--pt-muted)]">
                    <Calendar className="h-3.5 w-3.5 text-[var(--pt-accent)]" />
                    <span>{edition.year}</span>
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[var(--pt-muted)]">
                  <MapPin className="h-3.5 w-3.5 text-[var(--pt-accent)]" />
                  <span>{edition.location}</span>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold uppercase leading-[1.05] tracking-tight text-[var(--pt-paper)]">
                  {edition.title} &bull;{' '}
                  <span className="ey-heading-italic text-[var(--pt-accent)]">
                    {edition.edition}
                  </span>
                </h2>
                <p className="mt-3 text-base font-semibold text-[var(--pt-paper)] opacity-90">
                  {edition.headline}
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--pt-muted)]">
                  {edition.description}
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
                {edition.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 text-center sm:text-left"
                  >
                    <span className="block text-xl sm:text-2xl font-extrabold text-[var(--pt-accent)]">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[11px] font-bold uppercase tracking-wider text-[var(--pt-muted)]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </header>

            {/* Sub-Section A: Videos */}
            {(mediaType === 'all' || mediaType === 'videos') && (
              <section className="mt-12">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Film className="h-5 w-5 text-[var(--pt-accent)]" />
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--pt-paper)]">
                      Videos &amp; Broadcast Highlights ({edition.videos.length})
                    </h3>
                  </div>
                  <span className="text-xs text-[var(--pt-muted)]">
                    Click any card to play
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {edition.videos.map((vid) => (
                    <div
                      key={vid.id}
                      onClick={() =>
                        setActiveVideo({
                          video: vid,
                          editionTitle: `${edition.title} (${edition.edition})`,
                        })
                      }
                      className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pt-accent)] hover:shadow-[0_12px_30px_rgba(232,131,42,0.15)]"
                    >
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                        <img
                          src={vid.thumbnail}
                          alt={vid.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Play Button Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--pt-accent)] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="h-5 w-5 fill-white pl-0.5" />
                          </div>
                        </div>

                        {/* Badges */}
                        {vid.tag && (
                          <span className="absolute left-3 top-3 rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] backdrop-blur-sm">
                            {vid.tag}
                          </span>
                        )}
                        {vid.duration && (
                          <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-0.5 text-[10px] font-mono font-semibold text-white">
                            {vid.duration}
                          </span>
                        )}
                      </div>

                      {/* Video Details */}
                      <div className="p-4">
                        <h4 className="line-clamp-2 text-sm font-bold leading-snug text-[var(--pt-paper)] group-hover:text-[var(--pt-accent)] transition-colors">
                          {vid.title}
                        </h4>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[var(--pt-muted)]">
                          {vid.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Sub-Section B: Photo Gallery */}
            {(mediaType === 'all' || mediaType === 'images') && (
              <section className="mt-14">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-[var(--pt-accent)]" />
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--pt-paper)]">
                      Photo Gallery ({edition.images.length})
                    </h3>
                  </div>
                  <span className="text-xs text-[var(--pt-muted)]">
                    Click to enlarge &amp; view slideshow
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
                  {edition.images.map((img, imgIdx) => (
                    <div
                      key={img.id}
                      onClick={() =>
                        setActiveImage({
                          image: img,
                          editionIndex: editionIdx,
                          imageIndex: imgIdx,
                          totalImages: edition.images.length,
                          imagesList: edition.images,
                        })
                      }
                      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-all duration-300 hover:border-[var(--pt-accent)]"
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Category Pill */}
                      <span className="absolute left-2.5 top-2.5 rounded bg-black/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--pt-accent)] backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {img.category}
                      </span>

                      {/* Info on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="line-clamp-1 text-xs font-bold text-white">
                          {img.title}
                        </p>
                        <p className="line-clamp-1 text-[11px] text-[var(--pt-muted)]">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        ))}
      </div>

      {/* ======================================================== */}
      {/* 4. VIDEO MODAL PLAYER                                    */}
      {/* ======================================================== */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/20 bg-[var(--pt-ink)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-black/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-accent)]">
                  {activeVideo.editionTitle}
                </span>
                <h3 className="line-clamp-1 text-sm font-bold text-[var(--pt-paper)]">
                  {activeVideo.video.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-video w-full bg-black">
              {activeVideo.video.youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${activeVideo.video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : activeVideo.video.videoUrl ? (
                <video
                  src={activeVideo.video.videoUrl}
                  controls
                  autoPlay
                  className="h-full w-full"
                >
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-black/80 to-[var(--pt-ink)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--pt-accent)]/10 text-[var(--pt-accent)] mb-4 border border-[var(--pt-accent)]/30">
                    <Film className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--pt-paper)]">
                    {activeVideo.video.title}
                  </h4>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-[var(--pt-muted)]">
                    {activeVideo.video.description}
                  </p>
                  <div className="mt-5 rounded-md border border-[var(--pt-accent)]/30 bg-[var(--pt-accent)]/10 px-4 py-2 text-xs font-semibold text-[var(--pt-accent)]">
                    Video link placeholder configured &bull; Ready for your video URL or YouTube ID
                  </div>
                </div>
              )}
            </div>

            {/* Video Footer Info */}
            <div className="p-5 bg-white/[0.02]">
              <p className="text-xs text-[var(--pt-muted)] leading-relaxed">
                {activeVideo.video.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. LIGHTBOX IMAGE SLIDESHOW                              */}
      {/* ======================================================== */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          {/* Top Bar */}
          <div
            className="flex w-full max-w-6xl items-center justify-between py-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                {activeImage.image.category}
              </span>
              <p className="text-xs text-[var(--pt-muted)]">
                Image {activeImage.imageIndex + 1} of {activeImage.totalImages}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--pt-accent)] transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Center Display with Previous / Next Controls */}
          <div
            className="relative flex w-full max-w-6xl flex-1 items-center justify-center my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 hover:bg-[var(--pt-accent)] hover:border-[var(--pt-accent)] transition-all sm:left-4"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Active Image */}
            <div className="relative flex max-h-[70vh] max-w-full items-center justify-center">
              <img
                src={activeImage.image.url}
                alt={activeImage.image.title}
                className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 hover:bg-[var(--pt-accent)] hover:border-[var(--pt-accent)] transition-all sm:right-4"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div
            className="w-full max-w-2xl text-center py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-sm font-bold text-white">
              {activeImage.image.title}
            </h4>
            <p className="mt-1 text-xs text-[var(--pt-muted)] leading-relaxed">
              {activeImage.image.caption}
            </p>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 6. CALL TO ACTION SECTION                                */}
      {/* ======================================================== */}
      <section className="border-t border-white/10 bg-black/40 px-4 py-20 sm:px-6 md:px-8 lg:px-[var(--pt-container-pad)] text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
            Join The Skills Revolution
          </p>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold uppercase leading-[1.05] tracking-tight text-[var(--pt-paper)]">
            Be Part of Our Next Movement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--pt-muted)]">
            Whether you represent a corporate partner looking to fulfill your ESG and ESD mandates,
            or an ambitious youth looking to register for upcoming summits, discover your pathway today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/partner"
              className="ey-button ey-button-light-filled inline-flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/action"
              className="inline-flex min-h-12 items-center justify-center !rounded-[6px] border-[1.5px] border-white/30 bg-transparent px-7 py-3.5 text-sm font-bold text-[var(--pt-paper)] transition-all hover:border-[var(--pt-accent)] hover:bg-white/5"
            >
              <span>Take Action as Youth</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
