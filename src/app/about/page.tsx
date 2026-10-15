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
    name: 'Simphiwe Masiza',
    role: 'Founder & Executive Producer, EmpowaYouth',
    bio: 'Simphiwe Masiza is a growth strategist, organisational transformation advisor and ecosystem builder specialising in leadership, organisational development, strategic partnerships, governance and enterprise growth. He works with organisations to build future-fit businesses, strengthen leadership capability, unlock new markets, accelerate innovation and create high-performing organisations that deliver measurable commercial, economic and societal impact. Through the EmpowaWorx Group, he has established an integrated ecosystem that connects business, government, investors, development institutions and communities to solve complex challenges and unlock sustainable growth across Africa.',
    imageUrl: '/team/simphiwe-masiza.jpg',
  },
  {
    name: 'Bonnie Maponya',
    role: 'Chief of Staff & Acting Managing Executive, EmpowaWomen',
    bio: 'Bonnie Maponya is an organisational performance and programme leadership executive specialising in strategic execution, programme governance, operational excellence, stakeholder management and organisational effectiveness. She partners with organisations to strengthen execution capability, optimise operating performance, enhance leadership delivery and build resilient systems that transform strategy into measurable business outcomes. Her work enables organisations to improve organisational agility, elevate stakeholder value and deliver sustainable impact through disciplined execution.',
    imageUrl: '/team/Bonnie-Maponya.jpg',
  },
  {
    name: 'Anita Tirkey, MBA',
    role: 'Talent, Speakers & Executive Relations',
    bio: 'Anita Tirkey is an executive engagement and leadership experiences specialist with expertise in speaker strategy, executive relations, stakeholder engagement, protocol and high-impact programme delivery. She partners with global thought leaders, industry experts and executive teams to curate world-class leadership platforms that strengthen organisational influence, elevate stakeholder experiences and create meaningful conversations that inspire transformation, innovation and growth.',
    imageUrl: '/team/Anita-Tirkey.jpg',
  },
  {
    name: 'Carshiefa Sissing',
    role: 'Digital Marketing, Social Media & Community Growth',
    bio: 'Carshiefa Sissing is a digital growth and brand engagement strategist specialising in digital transformation, audience development, content strategy, social media and community ecosystems. She helps organisations build future-ready digital brands by creating integrated engagement strategies that strengthen market relevance, deepen stakeholder relationships, accelerate audience growth and convert digital influence into measurable commercial and organisational impact.',
    imageUrl: '/team/Carshiefa-Sissing.jpg',
  },
  {
    name: 'Neo Mathebe',
    role: 'Head of The Speakers Firm & Acting Managing Executive, EmpowaMen',
    bio: 'Neo Mathebe is an executive engagement, strategic partnerships and leadership influence specialist with expertise in thought leadership, talent management, stakeholder engagement, executive experiences and commercial relationship management. He works with organisations, executives and industry leaders to strengthen influence, develop strategic partnerships, amplify leadership visibility and create high-value engagement platforms that advance organisational growth, stakeholder trust and long-term business impact.',
    imageUrl: '/team/Neo-Mathebe.JPG',
  },
  {
    name: 'Sechaba Motsieloa, CM(SA)',
    role: 'Senior Marketing Strategist & Managing Executive, EmpowaGrowth',
    bio: 'Sechaba Motsieloa CM(SA) is a strategic marketing, reputation and growth advisor specialising in brand strategy, executive positioning, stakeholder engagement, strategic communications and market growth. He helps organisations strengthen competitive positioning, build trusted brands, enhance corporate reputation and align marketing, communications and stakeholder strategies with business transformation, organisational performance and sustainable commercial growth.',
    imageUrl: '/team/Sechaba-Motsieloa.jpeg',
  },
];

export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState<number>(0);
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  useEmpowaYouthScrollAnimations();

  const currentTeamMemberIndex = hoveredTeamMember !== null ? hoveredTeamMember : activeTeamMember;

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
      <section
        className="max-w-full overflow-x-hidden bg-[var(--pt-white)] text-[var(--pt-ink)] py-[clamp(80px,9vw,112px)]"
        id="voices"
        onMouseLeave={() => setHoveredTeamMember(null)}
      >
        <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-10">
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
            <div className="flex flex-col md:items-end gap-1.5">
              <p className={`${bodyTextClassName} md:max-w-[420px] md:text-right`}>
                A clean, connected collective committed to economic justice.
              </p>
              <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--pt-ink)]/60 shrink-0">
                <span className="hidden sm:inline">Hover or click to expand</span>
                <span className="sm:hidden">Tap to expand</span> &rarr;
              </p>
            </div>
          </div>

          {/* Accordion Row: all 6 team members fit across the container */}
          <div className="mt-10">
            <div
              className="flex w-full gap-1.5 sm:gap-2.5 md:gap-3.5 h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] select-none"
              role="tablist"
              aria-label="Team members gallery"
            >
              {teamMembers.map((member, memberIndex) => {
                const isCurrent = currentTeamMemberIndex === memberIndex;

                return (
                  <article
                    key={member.name}
                    role="tab"
                    aria-selected={isCurrent}
                    tabIndex={0}
                    onClick={() => setActiveTeamMember(memberIndex)}
                    onMouseEnter={() => setHoveredTeamMember(memberIndex)}
                    onMouseLeave={() => setHoveredTeamMember(null)}
                    onFocus={() => setActiveTeamMember(memberIndex)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveTeamMember(memberIndex);
                      }
                    }}
                    className={`group relative h-full overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-[flex-grow,flex-basis] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isCurrent
                        ? 'flex-[4.5] sm:flex-[5] md:flex-[5.5] lg:flex-[6] min-w-0'
                        : 'flex-[1] min-w-0'
                    }`}
                    aria-label={`${member.name}, ${member.role}`}
                  >
                    <img
                      src={member.imageUrl}
                      alt={`${member.name} portrait`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-[transform,filter] duration-700 ease-out"
                      style={{
                        transform: isCurrent ? 'scale(1.05)' : 'scale(1.0)',
                        filter: isCurrent
                          ? 'brightness(0.85) contrast(1.05)'
                          : 'brightness(0.38) grayscale(0.35)',
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,14,0.96)] via-[rgba(11,15,14,0.45)] to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl border transition-colors duration-300 pointer-events-none ${
                        isCurrent
                          ? 'border-[rgba(232,131,42,0.6)] shadow-[0_0_24px_rgba(232,131,42,0.2)]'
                          : 'border-[rgba(244,240,232,0.12)] group-hover:border-[rgba(244,240,232,0.25)]'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Corner accent for current item */}
                    {isCurrent && (
                      <div
                        className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-[var(--pt-accent)] [clip-path:polygon(100%_0,0_0,100%_100%)] pointer-events-none transition-opacity duration-300"
                        aria-hidden="true"
                      />
                    )}

                    {/* Collapsed state display (vertical name on small widths) */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-between items-center py-3.5 sm:py-5 px-1 pointer-events-none transition-opacity duration-300 ${
                        isCurrent ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                      aria-hidden={isCurrent}
                    >
                      <span className="text-[10px] sm:text-xs font-bold tracking-[0.14em] text-[var(--pt-accent)]">
                        {String(memberIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[rgba(244,240,232,0.7)] [writing-mode:vertical-rl] rotate-180 truncate max-h-[200px] sm:max-h-[260px]">
                        {member.name.split(',')[0]}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[rgba(244,240,232,0.3)] group-hover:bg-[var(--pt-accent)] transition-colors" />
                    </div>

                    {/* Expanded state display */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-9 pointer-events-none transition-opacity duration-300 ${
                        isCurrent ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      aria-hidden={!isCurrent}
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-[0.14em] text-[var(--pt-accent)] bg-[rgba(11,15,14,0.7)] backdrop-blur-sm px-2.5 py-1 rounded-full border border-[rgba(232,131,42,0.35)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--pt-accent)] animate-pulse" />
                          <span>{String(memberIndex + 1).padStart(2, '0')}</span>
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--pt-muted)] hidden md:inline">
                          Executive Leadership
                        </span>
                      </div>

                      <div className="max-w-2xl lg:max-w-3xl">
                        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-[var(--pt-accent)] mb-1">
                          {member.role}
                        </p>
                        <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-[var(--pt-paper)] mb-2.5">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] md:text-sm leading-relaxed text-[rgba(244,240,232,0.92)] line-clamp-6 md:line-clamp-none max-h-[220px] sm:max-h-[260px] md:max-h-[320px] overflow-y-auto pr-1">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Dots Indicator & Summary */}
            <div className="mt-6 flex justify-between items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2" aria-label="Team navigation dots">
                {teamMembers.map((m, i) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => setActiveTeamMember(i)}
                    aria-label={`View team member ${i + 1}: ${m.name}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentTeamMemberIndex === i
                        ? 'w-8 bg-[var(--pt-accent)]'
                        : 'w-2 bg-[rgba(11,15,14,0.2)] hover:bg-[rgba(11,15,14,0.4)]'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-[var(--pt-ink)]/60 font-medium tracking-wider uppercase">
                {teamMembers.length} Leaders Driving Impact &amp; Inclusion
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
