'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, Building2, Sparkles, Users } from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';

const focusRingClassName =
  'focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-[3px] focus-visible:outline-[var(--pt-accent)]';
const ghostButtonClassName = `inline-flex items-center justify-center border-[1.5px] border-[color-mix(in_srgb,var(--pt-paper)_35%,transparent)] bg-transparent px-[28px] py-[14px] text-[14px] font-bold leading-[1.2] tracking-[0.02em] text-[var(--pt-paper)] !rounded-[6px] transition-all duration-200 ease-out hover:border-[color-mix(in_srgb,var(--pt-paper)_80%,transparent)] hover:bg-[color-mix(in_srgb,var(--pt-paper)_6%,transparent)] hover:text-[var(--pt-paper)] ${focusRingClassName}`;

const buttonTextStyle = {
  fontFamily: 'Manrope, Arial, sans-serif',
};

const kickerClassName =
  'mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]';
const kickerBarClassName = 'h-[2px] w-6 bg-[var(--pt-accent)]';
const bodyTextClassName =
  'max-w-[600px] text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]';
const sectionHeadingClassName =
  'max-w-4xl text-[clamp(32px,4vw,56px)] font-light uppercase leading-[1.05] tracking-[-0.025em] [text-wrap:balance]';
const displayHeadingClassName =
  'font-extrabold uppercase leading-[0.95] tracking-[-0.05em] [text-wrap:balance]';

const heroImageUrl = 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5609.jpg';
const ecosystemImageUrl = 'https://cms.empowayouth.co.za/wp-content/uploads/2025/07/DSC_7909.jpg';

const ecosystemItems = [
  {
    number: '01',
    label: 'Government',
    descriptor: 'Public mandate meets lived experience.',
    icon: Building2,
  },
  {
    number: '02',
    label: 'Business',
    descriptor: 'Capital and capability meet possibility.',
    icon: Sparkles,
  },
  {
    number: '03',
    label: 'Youth',
    descriptor: 'The imagination and energy to build what is next.',
    icon: Users,
  },
];

const teamMembers = [
  {
    name: 'Thabo Nkosi',
    role: 'Co-Founder & CEO',
    bio: 'Builds partnerships that turn youth ambition into durable pathways.',
    imageUrl:
      'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&auto=format&fit=crop&face',
  },
  {
    name: 'Lerato Dlamini',
    role: 'Director of Programmes',
    bio: 'Designs programmes that meet young people where momentum begins.',
    imageUrl:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop',
  },
  {
    name: 'Sipho Mokoena',
    role: 'Head of Partnerships',
    bio: 'Connects business, government, and community around shared delivery.',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
  },
  {
    name: 'Amara Osei',
    role: 'Creative Director',
    bio: 'Shapes the stories, stages, and visual language of the movement.',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
  },
  {
    name: 'Zinhle Khumalo',
    role: 'Head of Impact & Research',
    bio: 'Tracks what works and translates evidence into better opportunity.',
    imageUrl:
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&auto=format&fit=crop',
  },
  {
    name: 'Kagiso Sithole',
    role: 'Events & Activations Lead',
    bio: 'Turns gatherings into catalysts for confidence, access, and action.',
    imageUrl:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&auto=format&fit=crop',
  },
];

const speakers = [
  {
    name: 'Panyaza Lesufi',
    role: 'Public leadership',
    topic: 'Policy Reform',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop',
  },
  {
    name: 'Somizi Mhlongo',
    role: 'Culture & media voice',
    topic: 'Creative Economy',
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop',
  },
  {
    name: 'Lebo M',
    role: 'Composer & producer',
    topic: 'Pan-African Leadership',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop',
  },
  {
    name: 'Dr. David Molapo',
    role: 'Leadership speaker',
    topic: 'Youth Entrepreneurship',
    imageUrl:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&auto=format&fit=crop',
  },
  {
    name: 'Prof. Tshilidzi Marwala',
    role: 'AI & innovation leader',
    topic: 'Digital Africa',
    imageUrl:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop',
  },
];

const years = 5;

export default function AboutPage() {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null);
  useEmpowaYouthScrollAnimations();

  return (
    <main id="about" className="max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="ey-about-hero relative flex max-w-full flex-col justify-end overflow-hidden bg-[var(--pt-ink)] px-[var(--pt-container-pad)] pb-[clamp(40px,6vw,72px)] pt-[clamp(104px,14vh,152px)] text-[var(--pt-paper)]">
        <img
          src={heroImageUrl}
          alt="Young people celebrating together outdoors"
          className="absolute inset-0 z-0 h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(11,15,14,0.25)_0%,rgba(11,15,14,0.45)_30%,rgba(11,15,14,0.80)_65%,rgba(11,15,14,0.97)_100%)]"
          aria-hidden="true"
        />
        {/* Decorative brand icon overlay */}
        <img
          src="/logo/empowayouth-icon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-[18%] z-[1] h-[420px] w-[420px] select-none object-contain opacity-20 md:h-[620px] md:w-[620px]"
        />

        <div className="relative z-[2] mx-auto grid w-full max-w-[var(--pt-container)] gap-6 lg:gap-7">
          <div>
            <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
              <span className={kickerBarClassName} />
              <span>01 / The Manifesto</span>
            </p>
            <h1 className={`max-w-none text-[clamp(3rem,11.25vw,8rem)] ${displayHeadingClassName}`}>
              <span>It Began With A Single </span>
              <span className="ey-heading-italic">Spark</span>
              <span>.</span>
            </h1>
            <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/impact" className="button-bold" style={buttonTextStyle}>
                <span>See Our Impact</span>
              </Link>
              <a href="#ecosystem" className={ghostButtonClassName} style={buttonTextStyle}>
                <span>Explore our ecosystem</span>
                <ArrowDown className="ml-2 h-5 w-5 shrink-0 !rounded-none" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="max-w-[560px]">
            <div>
              <p className="text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
                It started with a one-day jobs summit in Orange Farm — a room full of young people, ideas, and the belief
                that opportunity should not be determined by a postcode.
              </p>
              <p className="mt-4 text-[15px] font-semibold leading-[1.7] tracking-[0.005em] text-[var(--pt-paper)] [text-wrap:pretty]">
                This is not a programme. It is a manifesto for economic justice, fully aligned with the National Youth
                Development Strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="max-w-full overflow-x-hidden py-[clamp(56px,9vw,112px)] bg-[var(--pt-paper)] text-[var(--pt-ink)]">
        <div className="mx-auto max-w-[var(--pt-container)] px-[var(--pt-container-pad)]">
          <div className="grid max-w-full gap-8 lg:grid-cols-[minmax(320px,420px)_1fr] lg:gap-10">
            <div className="relative min-h-[280px] w-full overflow-hidden sm:min-h-[360px] lg:min-h-[600px]">
              <img
                src={ecosystemImageUrl}
                alt="Young leaders collaborating"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="pt-8 lg:pl-4 lg:pt-0">
              <p className={kickerClassName}>
                <span className={kickerBarClassName} />
                <span>02 / The Ecosystem</span>
              </p>
              <p className={bodyTextClassName}>Powered by EmpowaWorx</p>
              <h2 className={`mt-4 ${sectionHeadingClassName}`}>
                <span>Where government, business, and youth </span>
                <span className="ey-heading-italic">collide</span>
                <span> to co-create systemic solutions.</span>
              </h2>

              <div className="mt-10 grid max-w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
                {ecosystemItems.map((item, itemIndex) => (
                  <article
                    key={item.label}
                    className="group relative flex min-h-[260px] flex-col justify-between border border-[var(--pt-dark-divider)] bg-[color-mix(in_srgb,var(--pt-ink)_92%,var(--pt-paper))] p-6 transition-[background,transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:bg-[color-mix(in_srgb,var(--pt-ink)_88%,var(--pt-paper))] hover:shadow-[8px_8px_0_0_color-mix(in_srgb,var(--pt-accent)_18%,transparent)] sm:min-h-[300px] sm:p-8 lg:min-h-[330px]"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <span
                        className="text-sm font-extrabold tracking-[-0.05em]"
                        style={{ color: 'var(--pt-accent)' }}
                      >
                        <span>{String(itemIndex + 1).padStart(2, '0')}</span>
                      </span>
                      <span className="h-2 w-2 flex-shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="max-w-[18ch] text-xl font-extrabold leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] sm:text-[1.5rem]">
                        <span>{item.label}</span>
                      </h3>
                      <p className="mt-5 max-w-[600px] text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)]">
                        <span>{item.descriptor}</span>
                      </p>
                    </div>

                    <div
                      className="mt-8 h-px w-full bg-[var(--pt-dark-divider)] transition-colors duration-200 ease-out group-hover:bg-[var(--pt-accent)]"
                      aria-hidden="true"
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Voices Section */}
      <section className="max-w-full overflow-x-hidden bg-[var(--pt-white)] text-[var(--pt-ink)] pt-[clamp(80px,9vw,112px)]" id="voices">
        <div className="mx-auto max-w-[var(--pt-container)] px-[var(--pt-container-pad)]">
          <div className="flex flex-col justify-between gap-6 border-b-2 border-[var(--pt-light-divider)] pb-8 md:flex-row md:items-end">
            <div>
              <p className={kickerClassName}>
                <span className={kickerBarClassName} />
                <span>03 / Our Team & Voices</span>
              </p>
              <h2 className={sectionHeadingClassName}>
                <span>People make the </span>
                <span className="ey-heading-italic">movement</span>
                <span>.</span>
              </h2>
            </div>
            <p className={`${bodyTextClassName} md:max-w-[420px]`}>
              A clean, connected collective committed to economic justice.
            </p>
          </div>

          <div className="mt-10 grid max-w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group relative overflow-hidden bg-[var(--pt-ink)] border border-[rgba(244,240,232,0.06)] cursor-default transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:border-[rgba(232,131,42,0.3)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,14,1)] via-[rgba(11,15,14,0.6)] to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-0 right-0 w-10 h-10 bg-[var(--pt-accent)] [clip-path:polygon(100%_0,0_0,100%_100%)]"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--pt-accent)] mb-1.5">
                      {member.role}
                    </p>
                    <h3 className="text-xl font-extrabold tracking-[-0.04em] uppercase text-[var(--pt-paper)]">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 border-t border-[rgba(244,240,232,0.06)]">
                  <p className="text-[13px] leading-relaxed text-[var(--pt-muted)]">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Previous Speakers Carousel */}
          <section
            className="bg-[var(--pt-ink)] py-[clamp(56px,9vw,112px)] overflow-hidden mt-[clamp(64px,8vw,96px)] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen max-w-[100vw] box-border"
            aria-labelledby="previous-speakers-heading"
            onMouseLeave={() => setHoveredSpeaker(null)}
          >
            <div className="max-w-[min(var(--pt-container),100%)] mx-auto px-[var(--pt-container-pad)] mb-[clamp(40px,5vw,56px)]">
              <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--pt-accent)] mb-5">
                <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" aria-hidden="true" />
                <span>Previous Speakers</span>
              </p>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h2
                  id="previous-speakers-heading"
                  className="font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance] text-[clamp(2.5rem,6vw,5.5rem)] m-0"
                >
                  <span>Voices That </span>
                  <span className="font-light italic text-[1.08em] tracking-[-0.02em] text-[var(--pt-accent)]">
                    Moved
                  </span>
                  <span> The Room.</span>
                </h2>
                <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--pt-muted)] shrink-0 pb-2">
                  Scroll to explore &rarr;
                </p>
              </div>
            </div>

            <div
              className="speakers-track flex gap-2 overflow-x-auto snap-x snap-mandatory cursor-grab px-[var(--pt-container-pad)] max-w-full box-border"
              aria-label="Previous speakers carousel"
            >
              {speakers.map((speaker, speakerIndex) => (
                <article
                  key={speaker.name}
                  className="relative shrink-0 aspect-[2/3] overflow-hidden snap-start cursor-pointer transition-[width] duration-400 ease-out"
                  style={{
                    width:
                      hoveredSpeaker === speakerIndex
                        ? 'clamp(320px,32vw,420px)'
                        : 'clamp(260px,25vw,340px)',
                  }}
                  onMouseEnter={() => setHoveredSpeaker(speakerIndex)}
                  onMouseLeave={() => setHoveredSpeaker(null)}
                  onFocus={() => setHoveredSpeaker(speakerIndex)}
                  onBlur={() => setHoveredSpeaker(null)}
                  tabIndex={0}
                  aria-label={`${speaker.name}, ${speaker.role}`}
                >
                  <img
                    src={speaker.imageUrl}
                    alt={`${speaker.name} portrait`}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-[transform,filter] duration-600 ease-out"
                    style={{
                      transform: hoveredSpeaker === speakerIndex ? 'scale(1.04)' : 'scale(1.0)',
                      filter:
                        hoveredSpeaker === speakerIndex
                          ? 'brightness(0.7)'
                          : 'brightness(0.45) grayscale(0.3)',
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,14,0.95)] via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span
                      className="block text-[10px] font-bold tracking-[0.14em] text-[var(--pt-accent)] mb-2 transition-opacity duration-200"
                      style={{ opacity: hoveredSpeaker === speakerIndex ? 1 : 0.6 }}
                    >
                      {String(speakerIndex + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-[clamp(16px,2vw,22px)] font-extrabold tracking-[-0.04em] uppercase leading-none text-[var(--pt-paper)] mb-1.5 transition-transform duration-280"
                      style={{
                        transform:
                          hoveredSpeaker === speakerIndex ? 'translateY(0)' : 'translateY(6px)',
                      }}
                    >
                      {speaker.name}
                    </h3>
                    <p
                      className="text-[11px] font-medium tracking-[0.08em] uppercase text-[var(--pt-accent)] transition-all duration-280"
                      style={{
                        opacity: hoveredSpeaker === speakerIndex ? 1 : 0,
                        transform:
                          hoveredSpeaker === speakerIndex ? 'translateY(0)' : 'translateY(8px)',
                      }}
                    >
                      {speaker.role}
                    </p>
                    <p
                      className="text-xs leading-relaxed text-[rgba(244,240,232,0.65)] mt-2.5 transition-all duration-300"
                      style={{
                        opacity: hoveredSpeaker === speakerIndex ? 1 : 0,
                        transform:
                          hoveredSpeaker === speakerIndex ? 'translateY(0)' : 'translateY(10px)',
                      }}
                    >
                      {speaker.topic}
                    </p>
                  </div>
                  <div
                    className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[var(--pt-accent)] transition-all duration-200"
                    style={{
                      opacity: hoveredSpeaker === speakerIndex ? 1 : 0,
                      transform: hoveredSpeaker === speakerIndex ? 'scale(1)' : 'scale(0)',
                    }}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>

            <div className="max-w-[min(var(--pt-container),100%)] mx-auto mt-8 px-[var(--pt-container-pad)] flex justify-between items-center gap-5 flex-wrap">
              <p className="text-xs text-[var(--pt-muted)] tracking-wider">
                {speakers.length} speakers across {years} annual summits
              </p>
              <p className="text-xs text-[var(--pt-muted)] tracking-wider">
                EmpowaYouth Summit Series
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
