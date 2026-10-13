'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  Briefcase,
  Sparkles,
  Building2,
  Phone,
  Mail,
  Target,
  Cpu,
  HeartPulse,
  Film,
  Leaf,
  DollarSign,
  Megaphone,
  Radio,
  FileText,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Layers,
  Award,
} from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';
import { PartnerLogoMarquee } from '@/components/PartnerLogoMarquee';

export default function VaalEmpowaYouthWeekPage() {
  useEmpowaYouthScrollAnimations();

  // Interactive tab states
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeFormTab, setActiveFormTab] = useState<'delegate' | 'partner' | 'sponsor'>('delegate');

  // Keynote speakers accordion state (matching About page Previous Speakers)
  const [activeSpeaker, setActiveSpeaker] = useState<number>(0);
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null);
  const currentSpeakerIndex = hoveredSpeaker !== null ? hoveredSpeaker : activeSpeaker;

  // Form submission feedback states
  const [delegateSubmitted, setDelegateSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [sponsorSubmitted, setSponsorSubmitted] = useState(false);

  // Form input states
  const [delegateForm, setDelegateForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    township: '',
    gender: 'FEMALE',
    industries: ['AI, Tech & the Digital Economy'],
    isEntrepreneur: 'NO',
    isRegistered: 'NO',
    motivation: '',
  });

  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: 'Exhibitor Booth',
    hiringIntent: '10-50 Youth Placements',
    notes: '',
  });

  const [sponsorForm, setSponsorForm] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    fundingTrack: 'ESD Scorecard Contribution',
    budgetRange: 'R250,000 – R500,000',
    message: '',
  });

  const handleDelegateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDelegateSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSponsorSubmitted(true);
  };

  const toggleIndustry = (ind: string) => {
    setDelegateForm((prev) => {
      const exists = prev.industries.includes(ind);
      if (exists) {
        return { ...prev, industries: prev.industries.filter((i) => i !== ind) };
      }
      if (prev.industries.length >= 3) return prev;
      return { ...prev, industries: [...prev.industries, ind] };
    });
  };

  // 5-Day Programme Data
  const programmeDays = [
    {
      day: 1,
      badge: 'Day 01',
      sector: 'Health, Wellness & The Care Economy',
      theme: 'Healing the Economy: Careers in Care, Health & Humanity',
      icon: HeartPulse,
      accentColor: 'from-rose-500/20 to-orange-500/10 border-rose-500/30 text-rose-400',
      tag: 'Care Economy',
      powerStatement:
        'Health is the new wealth. The Care Economy is a trillion-dollar global sector waiting for Africa’s next generation of healers, innovators, and human-first entrepreneurs.',
      outcomes: [
        'Healthcare Career Fast-Track: Direct pipelines into nursing, sports science, trauma support, and occupational wellness.',
        'Mental Health Enterprise Labs: Transforming community wellness into scalable, fundable youth-led initiatives.',
        'Wellness Tech Incubator: Exposure to mobile diagnostics, triage software, and community healthtech disruptors.',
        'Direct Executive Access: Mentorship sessions with private hospital leaders, medical foundations, and health NGOs.',
      ],
      targetAudience: 'Life sciences graduates, community health workers, psychology students, and wellness innovators.',
    },
    {
      day: 2,
      badge: 'Day 02',
      sector: 'AI, Digital Economy & Deep Tech',
      theme: 'Code the Future: AI, Innovation & the 4IR Workforce',
      icon: Cpu,
      accentColor: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
      tag: 'Digital & AI',
      powerStatement:
        'The 4th Industrial Revolution will not wait for Africa. We either write the code, or we get coded out of the future.',
      outcomes: [
        'Live Hackathon Arena: Solving township logistics, micro-payment routing, and community health bottlenecks.',
        'Fintech Power Sessions: Face-to-face engagements with South Africa’s leading retail and neo-banking disruptors.',
        'Next-Gen Tech Diagnostics: Skills testing in cybersecurity, cloud infrastructure, full-stack dev, and data analysis.',
        'AI in Enterprise Masterclass: How early-stage founders leverage automated AI models to accelerate customer retention.',
      ],
      targetAudience: 'Self-taught coders, STEM graduates, digital creatives, data analysts, and tech startup founders.',
    },
    {
      day: 3,
      badge: 'Day 03',
      sector: 'Creative & Film Economy',
      theme: 'Frame the Future: Youth in Film, Content & Storytelling',
      icon: Film,
      accentColor: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400',
      tag: 'Creative IP',
      powerStatement:
        'Whoever owns the story owns the culture. Whoever owns the IP owns the wealth. Turning African content into commercial capital.',
      outcomes: [
        'Content Monetisation & IP Rights: Masterclasses on copyright law, streaming royalties, licensing, and sync publishing.',
        'Hands-On Production Labs: Live camera rigging, spatial audio mixing, animation pipelines, and colour grading workshops.',
        'Creator-to-CEO Roadmaps: Structuring personal brands into scalable production agencies and commercial studios.',
        'Studio & Streamer Immersion: Direct portfolio pitches to streaming commissioning editors and broadcast executives.',
      ],
      targetAudience: 'Filmmakers, writers, animators, digital creators, sound engineers, actors, and media entrepreneurs.',
    },
    {
      day: 4,
      badge: 'Day 04',
      sector: 'Green Economy, Sustainability & AgriTech',
      theme: 'Regenerate: Green Jobs, Agribusiness & Circular Economics',
      icon: Leaf,
      accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      tag: 'Green Economy',
      powerStatement:
        'The climate crisis is our challenge; green enterprise is our economic answer. Risk transformed into lasting resilience.',
      outcomes: [
        'Urban Farming Innovations: Precision hydroponics, vertical farming, and commercial crop scaling in township spaces.',
        'Climate Innovation Labs: Practical career pathways into solar installation, recycling economics, and waste-to-energy.',
        'Agri-Processing Value Chains: Moving from raw harvest into commercial packaging, distribution, and retail supply.',
        'Circular Economy Blueprint: Sustainable business models turning industrial by-products into high-value consumer products.',
      ],
      targetAudience: 'Emerging farmers, green engineers, environmental graduates, and sustainability innovators.',
    },
    {
      day: 5,
      badge: 'Day 05',
      sector: 'Entrepreneurship, Funding & Innovation Ecosystems',
      theme: 'Fund the Future: From Hustle to High-Growth Startups',
      icon: DollarSign,
      accentColor: 'from-yellow-500/20 to-orange-500/10 border-yellow-500/30 text-yellow-400',
      tag: 'Deal Room & Funding',
      powerStatement:
        'Hustle is not enough. To win in today’s economy, youth founders need systems, scalability, and serious growth capital.',
      outcomes: [
        'Live Dragons’ Den Pitch Stage: Shortlisted youth enterprises pitch before corporate ESD executives and angel investors.',
        'Investor Readiness Bootcamp: Financial auditing, pitch deck perfection, and compliance verification clinics.',
        'Corporate ESD Deal Room: Instant procurement matching between township suppliers and major corporate supply chains.',
        'Grand Finale Awards: Recognition of standout innovators, placement announcements, and bursary awards.',
      ],
      targetAudience: 'Township entrepreneurs, early-stage founders, informal business operators, and innovators ready to scale.',
    },
  ];

  // 5-Part Pre-Summit Masterclass Labs
  const masterclasses = [
    {
      number: '01',
      title: 'Health & Care Economy Masterclass',
      sector: 'Healthcare, Nursing & Wellness Innovations',
      highlight: 'Navigating Accreditation, Private Sector Pipelines & Healthtech',
      bullets: [
        'Navigating healthcare procurement and accredited paramedic & nursing pathways',
        'Commercializing community mental health & wellness digital solutions',
        'Direct fireside dialogue with provincial health officials and private clinic directors',
      ],
    },
    {
      number: '02',
      title: 'Digital Economy & AI Masterclass',
      sector: 'Cybersecurity, Cloud & Artificial Intelligence',
      highlight: 'From Coding Scripts to Commercial SaaS Software',
      bullets: [
        'Building scalable software solutions for township and SME operational hurdles',
        'Accelerating entry into high-paying remote global technology jobs',
        'Hands-on portfolio code audits with senior fintech software architects',
      ],
    },
    {
      number: '03',
      title: 'Creative Economy Masterclass',
      sector: 'Film, Streaming, Audio & Intellectual Property',
      highlight: 'Protecting Copyright & Unlocking Commercial Sync Licensing',
      bullets: [
        'Structuring music publishing, streaming splits, and film distribution contracts',
        'Pitching original film concepts to major broadcasters and video-on-demand networks',
        'Accessing provincial film grants and international co-production subsidies',
      ],
    },
    {
      number: '04',
      title: 'Green Economy & AgriTech Masterclass',
      sector: 'Sustainable Energy, Hydroponics & Circular Enterprise',
      highlight: 'Precision Agriculture, Solar Micro-Grids & Carbon Markets',
      bullets: [
        'Financial models for rooftop solar and independent energy service cooperatives',
        'Securing commercial retail supply contracts with major supermarket brands',
        'Accessing climate resilience grants and blended development funding',
      ],
    },
    {
      number: '05',
      title: 'Funding & Enterprise Scaling Masterclass',
      sector: 'ESD, Venture Capital & Corporate Procurement',
      highlight: 'Pitch Deck Precision, Tax Compliance & Investor Term Sheets',
      bullets: [
        'De-risking early-stage businesses to qualify for corporate ESD supplier pipelines',
        'Navigating corporate B-BBEE Scorecard budgets and grant allocation criteria',
        '1-on-1 legal compliance and company registry review with chartered accountants',
      ],
    },
  ];

  // Keynote Speakers for Accordion (matching About page previous speakers)
  const keynoteSpeakers = [
    {
      name: 'Panyaza Lesufi',
      role: 'Public Leadership & Policy Reform',
      topic: 'Civic Mandate & Township Economic Revitalisation',
      imageUrl: '/past_speakers/Panyaza-Lesufi.jpg',
      bio: 'Championing systemic institutional reforms and driving bold policy mandates that redirect economic infrastructure into township communities.',
    },
    {
      name: 'Somizi Mhlongo',
      role: 'Culture & Creative Economy Leader',
      topic: 'Monetising Cultural Capital & Creative Hustle',
      imageUrl: '/past_speakers/Somizi-Mhlongo.jpg',
      bio: 'Media titan demonstrating how authentic African cultural expression translates into multi-generational enterprise, personal brand power, and commercial equity.',
    },
    {
      name: 'Lebo M',
      role: 'Global Composer & Executive Producer',
      topic: 'Pan-African Cultural IP & International Scale',
      imageUrl: '/past_speakers/Lebo-M.jpg',
      bio: 'Grammy-winning musical mastermind behind The Lion King, teaching young creatives how to safeguard intellectual property and navigate global entertainment syndication.',
    },
    {
      name: 'Dr. David Molapo',
      role: 'Leadership Architect & Author',
      topic: 'Mindset Transformation & Enterprise Tenacity',
      imageUrl: '/past_speakers/Dr.-David-Molapo.jpg',
      bio: 'Internationally acclaimed motivational mentor unlocking the psychological resilience required to turn township constraints into unstoppable entrepreneurial fuel.',
    },
    {
      name: 'Prof. Tshilidzi Marwala',
      role: 'AI & Innovation Scholar',
      topic: 'Fourth Industrial Revolution & African Sovereignty',
      imageUrl: '/past_speakers/Prof.-Tshilidzi-Marwala.jpg',
      bio: 'Global AI pioneer and UN Under-Secretary-General advocating for aggressive digital workforce capability across the African continent.',
    },
  ];

  const currentDayData = programmeDays.find((p) => p.day === activeDay) || programmeDays[0];

  return (
    <main className="max-w-full overflow-x-hidden bg-[var(--pt-ink)] text-[var(--pt-paper)]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION: ELEVATED EDITORIAL IMMERSION            */}
      {/* ======================================================== */}
      <section
        className="ey-about-hero relative flex max-w-full flex-col justify-end overflow-hidden bg-[var(--pt-ink)] px-[var(--pt-container-pad)] pb-[clamp(44px,7vw,84px)] pt-[clamp(112px,16vh,168px)] text-[var(--pt-paper)] border-b border-[rgba(244,240,232,0.08)]"
        aria-labelledby="vaal-hero-title"
      >
        {/* Photographic background with layered gradient overlays */}
        <img
          src="/images/about-hero-leaders.jpg"
          alt="EmpowaYouth Summit gathering"
          className="absolute inset-0 z-0 h-full w-full object-cover object-top opacity-35 filter brightness-[0.7] contrast-[1.1]"
        />
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(11,15,14,0.4)_0%,rgba(11,15,14,0.65)_35%,rgba(11,15,14,0.92)_70%,rgba(11,15,14,1)_100%)]"
          aria-hidden="true"
        />
        {/* Subtle decorative radial glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,131,42,0.18)_0%,transparent_70%)] pointer-events-none z-[2]"
          aria-hidden="true"
        />

        <div className="relative z-[3] mx-auto w-full max-w-[var(--pt-container)]">
          {/* Eyebrow Kicker */}
          <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-4">
            <span className="inline-block w-8 h-[2px] bg-[var(--pt-accent)]" aria-hidden="true" />
            <span>Upcoming Flagship Activation &bull; Sebokeng Zone 14</span>
          </p>

          {/* Main Display Headline */}
          <h1
            id="vaal-hero-title"
            className="max-w-5xl text-[clamp(2.5rem,6.8vw,6.2rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.045em] text-[var(--pt-paper)] [text-wrap:balance]"
          >
            <span>Vaal EmpowaYouth </span>
            <span className="ey-heading-italic">Week</span>
            <span>.</span>
            <span className="block text-white/90 text-[clamp(1.1rem,2.4vw,2rem)] font-bold tracking-tight mt-3 sm:mt-4">
              Powering South Africa’s Youth Economy.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] font-normal leading-[1.7] text-[rgba(244,240,232,0.85)] [text-wrap:pretty]">
            Not an event — a national economic reset. A catalytic ecosystem uniting 10,000+ ambitious young South Africans with corporate boardrooms, accredited skills pipelines, Dragons’ Den funding, and verified job offers across five high-growth frontiers.
          </p>

          {/* Quick Specifications Strip (Glassmorphic Bar - NO DATES) */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-4xl rounded-2xl border border-[rgba(244,240,232,0.12)] bg-[rgba(11,15,14,0.65)] p-5 backdrop-blur-md">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1.5 mb-1">
                <MapPin className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Venue
              </span>
              <strong className="text-sm font-bold text-white">Koinonia Bible Church</strong>
              <span className="text-xs text-[var(--pt-muted)]">Sebokeng, Zone 14</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1.5 mb-1">
                <Clock className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Daily Times
              </span>
              <strong className="text-sm font-bold text-white">08:00 – 15:00 Daily</strong>
              <span className="text-xs text-[var(--pt-muted)]">5 Action-Packed Days</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1.5 mb-1">
                <Users className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Attendance
              </span>
              <strong className="text-sm font-bold text-white">10,000+ Delegates</strong>
              <span className="text-xs text-[var(--pt-muted)]">2,000+ Youth Daily</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1.5 mb-1">
                <Target className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Target Profile
              </span>
              <strong className="text-sm font-bold text-white">NEET &amp; Graduates</strong>
              <span className="text-xs text-[var(--pt-muted)]">Founders &amp; Jobseekers</span>
            </div>
          </div>

          {/* Three Visible Action Paths */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#participate"
              onClick={() => setActiveFormTab('delegate')}
              className="ey-button ey-button-dark-filled inline-flex items-center justify-center gap-2"
            >
              <span>1. Register Free Pass</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#participate"
              onClick={() => setActiveFormTab('partner')}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-md border border-[var(--pt-accent)] bg-[rgba(232,131,42,0.12)] text-sm font-bold uppercase tracking-wider text-[var(--pt-accent)] transition-all duration-200 hover:bg-[var(--pt-accent)] hover:text-white"
            >
              <span>2. Partner as Employer</span>
            </a>

            <a
              href="#participate"
              onClick={() => setActiveFormTab('sponsor')}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-md border border-[rgba(244,240,232,0.2)] bg-[rgba(244,240,232,0.05)] text-sm font-bold uppercase tracking-wider text-[var(--pt-paper)] transition-all duration-200 hover:border-white hover:bg-[rgba(244,240,232,0.12)]"
            >
              <span>3. Enquire for Sponsorship</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PROVEN TRACK RECORD / STATS STRIP (KEY STATS BANNER)  */}
      {/* ======================================================== */}
      <section className="border-b border-[rgba(244,240,232,0.08)] bg-[#070a09] py-12 px-[var(--pt-container-pad)]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
              <span>Proven Power to Deliver &bull; Auditable National Track Record</span>
            </p>
            <span className="text-xs text-[var(--pt-muted)] tracking-wider">
              Empowering 8 Provinces &bull; 10+ Years Rewriting the Youth Economy
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            <div className="rounded-2xl border border-[rgba(244,240,232,0.08)] bg-[rgba(244,240,232,0.02)] p-6 transition-all hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                198,000<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-paper)]">
                Youth Reached Nationally
              </p>
              <p className="mt-1 text-[11px] text-[var(--pt-muted)]">
                Townships &amp; peri-urban areas activated
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(244,240,232,0.08)] bg-[rgba(244,240,232,0.02)] p-6 transition-all hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                690<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-paper)]">
                Direct Job Placements
              </p>
              <p className="mt-1 text-[11px] text-[var(--pt-muted)]">
                Signed employment contracts with vetted partners
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(244,240,232,0.08)] bg-[rgba(244,240,232,0.02)] p-6 transition-all hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                150<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-paper)]">
                Enterprises Funded
              </p>
              <p className="mt-1 text-[11px] text-[var(--pt-muted)]">
                Non-dilutive seed grants &amp; corporate ESD deals
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(244,240,232,0.08)] bg-[rgba(244,240,232,0.02)] p-6 transition-all hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                2,000<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-paper)]">
                Accredited Skills Certifications
              </p>
              <p className="mt-1 text-[11px] text-[var(--pt-muted)]">
                SETA &amp; industry-endorsed qualifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. THE PURPOSE: WHY THE VAAL? (EDITORIAL WHITE CANVAS)   */}
      {/* ======================================================== */}
      <section
        id="purpose"
        className="max-w-full overflow-x-hidden bg-[var(--pt-white)] text-[var(--pt-ink)] py-[clamp(80px,9vw,112px)]"
      >
        <div className="mx-auto max-w-[var(--pt-container)] px-[var(--pt-container-pad)]">
          <div className="flex flex-col justify-between gap-6 border-b-2 border-[var(--pt-light-divider)] pb-8 md:flex-row md:items-end mb-12">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--pt-accent)]">
                <span className="inline-block h-[2px] w-6 bg-[var(--pt-accent)]" />
                <span>01 / The Mandate &amp; Regional Reality</span>
              </p>
              <h2 className="mt-3 font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[clamp(2.2rem,5vw,4.2rem)] text-inherit [text-wrap:balance]">
                <span>Ground Zero For A National </span>
                <span className="ey-heading-italic">Economic Reset</span>
                <span>.</span>
              </h2>
            </div>
            <p className="text-[16px] font-normal leading-[1.7] text-[var(--pt-muted)] md:max-w-[420px]">
              Where industrial heritage meets urgent youth opportunity. Breaking the geographic barriers of inequality.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Context, Narrative & Founder Quote */}
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-[1.75] text-[#2c3834] [text-wrap:pretty]">
                In the Vaal region, where youth unemployment sits stubbornly above <strong className="text-[var(--pt-ink)] font-extrabold">41%</strong> and specific township wards endure joblessness exceeding <strong className="text-[var(--pt-accent)] font-extrabold">90%</strong>, we are not addressing a conventional social gap — we are confronting an economic state of emergency.
              </p>

              <p className="mt-4 text-[16px] leading-[1.75] text-[#475751] [text-wrap:pretty]">
                Once the industrial manufacturing backbone of South Africa, the Vaal region has weathered decades of factory closures, broken corporate pipelines, and structural neglect. Yet within Sebokeng, Sharpeville, Evaton, and Boipatong reside thousands of ambitious graduates, artisans, and self-taught coders ready to power national re-industrialisation.
              </p>

              {/* Founder Quote Card */}
              <div className="mt-8 rounded-2xl border-l-4 border-l-[var(--pt-accent)] border border-[rgba(11,15,14,0.08)] bg-[#f9f7f2] p-6 sm:p-7 shadow-sm">
                <p className="text-base sm:text-lg font-medium italic leading-relaxed text-[var(--pt-ink)]">
                  &ldquo;This is not about speeches, it’s about economic engineering in real time. Every job secured, every enterprise funded, every skill certified is a direct step towards rebuilding South Africa’s economic future.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--pt-accent)] shrink-0">
                    <img
                      src="/team/simphiwe-masiza.jpg"
                      alt="Simphiwe Masiza"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-[var(--pt-ink)] uppercase">
                      Simphiwe Masiza
                    </span>
                    <span className="text-xs font-semibold text-[var(--pt-accent)]">
                      Founder &amp; Executive Producer, EmpowaYouth
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Pillars of Transformation */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Pillar 1: Talent Mobilisation
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Activating township talent through verified platforms and high-stakes market access, bypassing empty awareness slogans.
                  </p>
                </div>

                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Pillar 2: Direct Employment
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Connecting young jobseekers into verified employment, learnerships, and apprenticeships across the 5 core focus industries.
                  </p>
                </div>

                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Pillar 3: Enterprise Funding
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Deploying non-dilutive seed funding, ESD supplier integration, and commercial mentorship into township founders.
                  </p>
                </div>

                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Pillar 4: Accredited Skills
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Delivering certified masterclasses and practical digital toolkits that make delegates immediately employable.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Contrast Blueprint Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl border border-[rgba(244,240,232,0.12)] bg-[var(--pt-ink)] p-8 sm:p-10 text-[var(--pt-paper)] shadow-2xl">
                <span className="inline-block rounded-full bg-[var(--pt-accent)]/20 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  The Blueprint
                </span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase text-[var(--pt-paper)] leading-tight">
                  How We Rewrite the Economic Script
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--pt-muted)]">
                  A high-velocity delivery model engineered to eliminate friction between unemployed graduates, township enterprises, corporate boardrooms, and funding authorities.
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Live On-Site Recruitment</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Corporate HR and recruiters interview delegates and extend employment offers on-site.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Dragons’ Den Deal Room</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Township SMMEs pitch directly for non-dilutive grant funding and supplier contracts.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Accredited Practical Credentials</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Delegates earn verified micro-credentials that directly elevate CV employability.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Auditable B-BBEE Compliance</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Corporate sponsors receive verifiable socio-economic development documentation.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[rgba(244,240,232,0.1)] flex flex-col gap-3">
                  <a
                    href="#participate"
                    onClick={() => setActiveFormTab('partner')}
                    className="ey-button ey-button-dark-filled w-full text-center"
                  >
                    <span>Explore Employer Partnerships</span>
                  </a>
                  <a
                    href="#programme"
                    className="w-full text-center rounded-md border border-[rgba(244,240,232,0.2)] py-3 px-4 text-xs font-bold uppercase tracking-wider text-[var(--pt-paper)] transition hover:bg-white/5"
                  >
                    Explore 5-Day Programme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. THE 5-DAY PROGRAMME: INTERACTIVE SECTOR FRONTIERS     */}
      {/* ======================================================== */}
      <section
        id="programme"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] bg-[var(--pt-ink)] border-b border-[rgba(244,240,232,0.08)]"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
                <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
                <span>02 / The Summit Programme</span>
              </p>
              <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
                <span>Five Days. Five Sectors. </span>
                <span className="ey-heading-italic">One Reset</span>
                <span>.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--pt-muted)] max-w-md">
              Each day is a standalone economic summit dedicated to South Africa’s highest-potential sectors. Select a day below to explore.
            </p>
          </div>

          {/* Interactive Day Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[rgba(244,240,232,0.1)] pb-4 mb-8">
            {programmeDays.map((p) => {
              const isActive = activeDay === p.day;
              const IconComp = p.icon;
              return (
                <button
                  key={`day-btn-${p.day}`}
                  type="button"
                  onClick={() => setActiveDay(p.day)}
                  className={`inline-flex items-center gap-2.5 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--pt-accent)] text-white shadow-lg shadow-[var(--pt-accent)]/25 scale-[1.02]'
                      : 'border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.03)] text-[var(--pt-paper)]/70 hover:border-white/30 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <IconComp className="h-4 w-4" />
                  <span>{p.badge}: {p.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Active Day Bento Card Panel */}
          <div className="rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-7 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Left Column: Sector Narrative */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="rounded-full bg-[var(--pt-accent)]/20 border border-[var(--pt-accent)]/40 px-3.5 py-1 text-xs font-extrabold uppercase text-[var(--pt-accent)]">
                    {currentDayData.badge} &bull; Full-Day Focus
                  </span>
                  <span className="text-xs font-semibold text-[var(--pt-muted)]">
                    08:00 – 15:00 Daily &bull; Koinonia Bible Church
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight tracking-tight text-[var(--pt-paper)]">
                  {currentDayData.sector}
                </h3>
                <p className="mt-2 text-base sm:text-lg font-semibold text-[var(--pt-accent)]">
                  {currentDayData.theme}
                </p>

                <div className="my-6 rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.03)] p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-accent)] block mb-1">
                    Sector Power Statement
                  </span>
                  <p className="text-sm sm:text-base italic leading-relaxed text-[var(--pt-paper)]">
                    &ldquo;{currentDayData.powerStatement}&rdquo;
                  </p>
                </div>

                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--pt-muted)] mb-3">
                  Key Outcomes &amp; Core Activities
                </h4>
                <ul className="space-y-3.5">
                  {currentDayData.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[rgba(244,240,232,0.85)]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--pt-accent)]/20 text-[10px] font-extrabold text-[var(--pt-accent)] mt-0.5 border border-[var(--pt-accent)]/30">
                        {idx + 1}
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Delegate Specs & Fast Track CTA */}
              <div className="lg:col-span-5 rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.03)] p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-accent)]">
                  Target Demographic
                </span>
                <p className="mt-2 text-sm font-semibold text-white leading-relaxed">
                  {currentDayData.targetAudience}
                </p>

                <div className="mt-6 border-t border-[rgba(244,240,232,0.1)] pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-muted)]">
                    What Delegates Walk Away With:
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs text-[rgba(244,240,232,0.8)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Accredited certificate of participation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Direct CV submission into partner employer pipelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>1-on-1 mentorship with industry executives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Eligibility for seed funding &amp; bursary pools</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(244,240,232,0.1)]">
                  <a
                    href="#participate"
                    onClick={() => {
                      setActiveFormTab('delegate');
                      setDelegateForm((prev) => ({
                        ...prev,
                        industries: [currentDayData.sector],
                      }));
                    }}
                    className="ey-button ey-button-dark-filled w-full text-center"
                  >
                    <span>Register for {currentDayData.tag}</span>
                  </a>
                  <p className="mt-2.5 text-center text-[10px] text-[var(--pt-muted)]">
                    Free admission &bull; Vetted entry &bull; Koinonia Bible Church
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. ANATOMY OF THE EXPERIENCE: BENTO GRID ARCHITECTURE    */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[#090d0c]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
              <span>03 / Ground Level Architecture</span>
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
              <span>The Anatomy of </span>
              <span className="ey-heading-italic">The Experience</span>
              <span>.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--pt-muted)]">
              Multi-dimensional touchpoints engineered to convert inspiration into measurable economic output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Megaphone className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">01</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                Dialogue &amp; Policy
              </span>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">100+ Power Panels</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Engage directly with national Ministers, corporate CEOs, trailblazing founders, and policy architects in high-stakes conversations across ten critical sectors.
              </p>
            </article>

            {/* Bento Card 2 */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">02</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                Interactive Immersion
              </span>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">40+ Experiential Demo Labs</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Step into interactive technology sandboxes, coding hubs, drone piloting demos, agricultural rigs, and artisan skills accelerators.
              </p>
            </article>

            {/* Bento Card 3 */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Building2 className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">03</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                Ecosystem Scale
              </span>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">200+ Partners Activated</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Major banks, SETAs, multinational employers, provincial departments, and venture funds deliver on-site bursaries, jobs, and mentorship.
              </p>
            </article>

            {/* Bento Card 4 */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <DollarSign className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">04</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                Venture Capital
              </span>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">Pitch Stages &amp; Deal Room</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Township enterprises go head-to-head on live pitch stages, competing for equity-free seed grants and corporate supply chain onboarding contracts.
              </p>
            </article>

            {/* Bento Card 5 */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Briefcase className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">05</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                Recruitment Matching
              </span>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">Career Clinics &amp; HR Pods</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                One-on-one resume diagnostics, professional headshot studio, live mock interviews, and instant recruitment talent matching.
              </p>
            </article>

            {/* Bento Card 6 */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">06</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                Youth Identity
              </span>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">Live Creative Immersion</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Leading cultural luminaries, spoken word artists, and sonic pioneers ignite the main stage, turning creative identity into collective pride.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PRE-SUMMIT MASTERCLASS LABS (PRE-SUMMIT COHORTS)      */}
      {/* ======================================================== */}
      <section
        id="masterclass"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[var(--pt-ink)]"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-12">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
              <span>04 / Pre-Summit Cohorts</span>
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
                  <span>Five Power Labs. </span>
                  <span className="ey-heading-italic">Specialized Tracks</span>
                  <span>.</span>
                </h2>
                <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-xl">
                  Intensive preparatory cohorts arming delegates with deep technical skills and immediate executive access.
                </p>
              </div>

              {/* Masterclass Specs Pill */}
              <div className="flex flex-wrap items-center gap-4 bg-[rgba(244,240,232,0.04)] border border-[rgba(244,240,232,0.1)] rounded-2xl p-4 text-xs">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Intake</span>
                  <strong className="font-bold text-white">100 Youth / Session</strong>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Daily Timing</span>
                  <strong className="font-bold text-white">10:00 – 13:00</strong>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Format</span>
                  <strong className="font-bold text-white">Hybrid Live &amp; Stream</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterclasses.map((mc) => (
              <div
                key={mc.number}
                className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-[var(--pt-accent)]">
                      LAB #{mc.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-paper)]/70 bg-white/5 px-2.5 py-1 rounded">
                      {mc.sector}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-1">
                    {mc.title}
                  </h3>
                  <p className="text-xs font-medium text-[var(--pt-accent)] mb-4">
                    {mc.highlight}
                  </p>

                  <ul className="space-y-2.5 text-xs text-[rgba(244,240,232,0.85)] border-t border-[rgba(244,240,232,0.1)] pt-4">
                    {mc.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--pt-accent)] mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(244,240,232,0.1)]">
                  <a
                    href="#participate"
                    onClick={() => setActiveFormTab('delegate')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--pt-accent)] hover:text-white transition"
                  >
                    <span>Apply for this Lab</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. LEADERSHIP & KEYNOTE VOICES (WITH EXPANDING ACCORDION) */}
      {/* ======================================================== */}
      <section
        id="leadership"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[#070a09]"
        onMouseLeave={() => setHoveredSpeaker(null)}
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-14">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
              <span>05 / Leadership &amp; Keynote Voices</span>
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
              <span>Architects of the </span>
              <span className="ey-heading-italic">Movement</span>
              <span>.</span>
            </h2>
            <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-xl">
              Meet the executive leadership guiding Vaal EmpowaYouth Week alongside distinguished keynote voices who champion South Africa’s youth economy.
            </p>
          </div>

          {/* Core Executive Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Simphiwe Masiza */}
            <article className="group relative rounded-3xl border border-[rgba(244,240,232,0.12)] bg-gradient-to-b from-[#131b18] to-[var(--pt-ink)] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:shadow-2xl">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[var(--pt-accent)]/60">
                <img
                  src="/team/simphiwe-masiza.jpg"
                  alt="Simphiwe Masiza"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  Founder &amp; Executive Producer
                </span>
                <h3 className="text-2xl font-extrabold uppercase text-[var(--pt-paper)] mt-1">
                  Simphiwe Masiza
                </h3>
                <p className="text-xs text-white/60 mb-3">Empowaworx &bull; The Speakers Firm</p>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                  Visionary architect of EmpowaYouth, EmpowaWomen, and EmpowaEntrepreneurs. Wits and GIBS alumnus who turns vision into measurable economic velocity. Redefining how nations mobilize young people, capital, and market systems.
                </p>
              </div>
            </article>

            {/* Mbali Mavuso */}
            <article className="group relative rounded-3xl border border-[rgba(244,240,232,0.12)] bg-gradient-to-b from-[#131b18] to-[var(--pt-ink)] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:shadow-2xl">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[var(--pt-accent)]/60">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop"
                  alt="Mbali Mavuso"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  Lead Event Manager &bull; Programme Director
                </span>
                <h3 className="text-2xl font-extrabold uppercase text-[var(--pt-paper)] mt-1">
                  Mbali Mavuso
                </h3>
                <p className="text-xs text-white/60 mb-3">Vaal EmpowaYouth Week</p>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                  Powerhouse strategist with over a decade of scaled national activations for Eskom 49M, TOTAL CSI, and Tiger Brands. Turns logistical precision into unforgettable experiences that inspire action and unlock corporate sponsorship value.
                </p>
              </div>
            </article>
          </div>

          {/* Distinguished Keynotes: Interactive Expandable Accordion */}
          <div className="pt-8 border-t border-[rgba(244,240,232,0.1)]">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                  Historic Keynotes
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold uppercase text-[var(--pt-paper)]">
                  Voices That Moved The Room
                </h4>
              </div>
              <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--pt-muted)] shrink-0 pb-1">
                <span className="hidden sm:inline">Hover or click to expand</span>
                <span className="sm:hidden">Tap to expand</span> &rarr;
              </p>
            </div>

            {/* Accordion Row */}
            <div
              className="flex w-full gap-1.5 sm:gap-2.5 md:gap-3 h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] select-none"
              role="tablist"
              aria-label="Keynote speakers gallery"
            >
              {keynoteSpeakers.map((speaker, speakerIndex) => {
                const isCurrent = currentSpeakerIndex === speakerIndex;

                return (
                  <article
                    key={speaker.name}
                    role="tab"
                    aria-selected={isCurrent}
                    tabIndex={0}
                    onClick={() => setActiveSpeaker(speakerIndex)}
                    onMouseEnter={() => setHoveredSpeaker(speakerIndex)}
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onFocus={() => setActiveSpeaker(speakerIndex)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveSpeaker(speakerIndex);
                      }
                    }}
                    className={`group relative h-full overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-[flex-grow,flex-basis] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isCurrent
                        ? 'flex-[3.5] sm:flex-[3] md:flex-[2.8] min-w-0'
                        : 'flex-[1] min-w-0'
                    }`}
                    aria-label={`${speaker.name}, ${speaker.role}`}
                  >
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
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(11,15,14,0.95)] via-[rgba(11,15,14,0.35)] to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl border transition-colors duration-300 pointer-events-none ${
                        isCurrent
                          ? 'border-[rgba(232,131,42,0.6)] shadow-[0_0_24px_rgba(232,131,42,0.2)]'
                          : 'border-[rgba(244,240,232,0.08)] group-hover:border-[rgba(244,240,232,0.2)]'
                      }`}
                      aria-hidden="true"
                    />

                    {/* Collapsed state display (vertical text) */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-between items-center py-3.5 sm:py-5 px-1 pointer-events-none transition-opacity duration-300 ${
                        isCurrent ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                      aria-hidden={isCurrent}
                    >
                      <span className="text-[10px] sm:text-xs font-bold tracking-[0.14em] text-[var(--pt-accent)]">
                        {String(speakerIndex + 1).padStart(2, '0')}
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
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-[0.14em] text-[var(--pt-accent)] bg-[rgba(11,15,14,0.7)] backdrop-blur-sm px-2.5 py-1 rounded-full border border-[rgba(232,131,42,0.35)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--pt-accent)] animate-pulse" />
                          <span>{String(speakerIndex + 1).padStart(2, '0')}</span>
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--pt-muted)] hidden md:inline">
                          Featured Keynote
                        </span>
                      </div>

                      <div>
                        <h3 className="text-sm sm:text-lg md:text-2xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-[var(--pt-paper)] mb-1">
                          {speaker.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-[var(--pt-accent)] mb-1">
                          {speaker.role}
                        </p>
                        <p className="text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-[rgba(244,240,232,0.85)] line-clamp-3 sm:line-clamp-4">
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Dots Indicator */}
            <div className="mt-6 flex justify-between items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2" aria-label="Keynote navigation dots">
                {keynoteSpeakers.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setActiveSpeaker(i)}
                    aria-label={`View speaker ${i + 1}: ${s.name}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSpeakerIndex === i
                        ? 'w-8 bg-[var(--pt-accent)]'
                        : 'w-2 bg-[rgba(244,240,232,0.25)] hover:bg-[rgba(244,240,232,0.5)]'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-[var(--pt-muted)] tracking-wider">
                {keynoteSpeakers.length} Keynote Leaders Shaping the Youth Discourse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. PARTNERSHIP & SPONSORSHIP OPPORTUNITIES (VALUE PROPS) */}
      {/* ======================================================== */}
      <section
        id="partner-opportunities"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] bg-[var(--pt-ink)] border-b border-[rgba(244,240,232,0.08)]"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-14 max-w-3xl">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
              <span>06 / For Employers, Corporates &amp; Funders</span>
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
              <span>Why Partner </span>
              <span className="ey-heading-italic">With Us</span>
              <span>?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--pt-muted)] leading-relaxed">
              This is not a charitable event sponsorship. It is a strategic acquisition of influence, auditable compliance value, and direct talent access in South Africa’s highest-velocity transformation engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Value Prop 1 */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                01
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Strategic ESG, CSI &amp; ESD Impact
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Deliver auditable B-BBEE scorecard contributions in enterprise development, socio-economic investment, and skills training. Receive verified evidence packs for job creation and community upliftment.
              </p>
            </article>

            {/* Value Prop 2 */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                02
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Pipeline Tomorrow’s Workforce
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Access thousands of vetted, enthusiastic, future-ready graduates, artisans, and tech specialists. Pre-screen delegates on the ground for corporate internships, learnerships, and permanent placements.
              </p>
            </article>

            {/* Value Prop 3 */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                03
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Unrivalled National Brand Authority
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Position your leadership alongside national Ministers, provincial dignitaries, and 10,000+ energized youth delegates. High-frequency media broadcast across TV, radio, print, and digital platforms.
              </p>
            </article>
          </div>

          {/* Marquee of Current & Past Strategic Partners */}
          <div className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.01)] p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--pt-accent)]" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-muted)]">
                Trusted by 200+ Brand Partners Across South Africa
              </p>
              <span className="w-8 h-px bg-[var(--pt-accent)]" />
            </div>
            <PartnerLogoMarquee />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. BROADCAST & NATIONAL MEDIA AMPLIFICATION STRIP        */}
      {/* ======================================================== */}
      <section className="py-14 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[#070a09]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-1">
                National Broadcast Spotlight
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[var(--pt-paper)]">
                Amplified Across South Africa’s Premier News Networks
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-white/80">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">SABC NEWS</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">eNCA</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">NEWZROOM AFRIKA</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">SA FM</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">RADIO 2000</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">702</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">YFM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. INTERACTIVE ACTION HUB: PARTICIPATE / PARTNER / FUND */}
      {/* ======================================================== */}
      <section
        id="participate"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] bg-[#090d0c] border-b border-[rgba(244,240,232,0.08)]"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-[var(--pt-accent)]/20 border border-[var(--pt-accent)]/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)] mb-3">
              Take Your Next Step
            </span>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
              <span>Get Involved in </span>
              <span className="ey-heading-italic">Vaal Week</span>
              <span>.</span>
            </h2>
            <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-lg mx-auto">
              Select your track below to register for a free delegate pass, partner as an employer, or enquire about corporate ESD sponsorship.
            </p>
          </div>

          {/* Form Selector Tabs */}
          <div className="flex rounded-2xl border border-[rgba(244,240,232,0.12)] bg-[rgba(244,240,232,0.04)] p-1.5 mb-8">
            <button
              type="button"
              onClick={() => setActiveFormTab('delegate')}
              className={`flex-1 rounded-xl py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeFormTab === 'delegate'
                  ? 'bg-[var(--pt-accent)] text-white shadow-lg'
                  : 'text-[var(--pt-paper)]/70 hover:text-white'
              }`}
            >
              1. Youth Delegate
            </button>
            <button
              type="button"
              onClick={() => setActiveFormTab('partner')}
              className={`flex-1 rounded-xl py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeFormTab === 'partner'
                  ? 'bg-[var(--pt-accent)] text-white shadow-lg'
                  : 'text-[var(--pt-paper)]/70 hover:text-white'
              }`}
            >
              2. Corporate Partner
            </button>
            <button
              type="button"
              onClick={() => setActiveFormTab('sponsor')}
              className={`flex-1 rounded-xl py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeFormTab === 'sponsor'
                  ? 'bg-[var(--pt-accent)] text-white shadow-lg'
                  : 'text-[var(--pt-paper)]/70 hover:text-white'
              }`}
            >
              3. Sponsor &amp; Fund
            </button>
          </div>

          {/* TAB 1: YOUTH DELEGATE REGISTRATION */}
          {activeFormTab === 'delegate' && (
            <div className="rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-7 sm:p-10 shadow-2xl">
              {delegateSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Delegate Registration Received!</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you, {delegateForm.firstName || 'Delegate'}. Your pass for Vaal EmpowaYouth Week has been recorded. Our team will contact you with admission passes, transport pickup points, and schedule updates.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDelegateSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-white/10 cursor-pointer"
                  >
                    Submit Another Delegate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDelegateSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">Free Delegate Registration</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Free admission for NEET youth, matriculants, graduates, artisans, and emerging founders.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lerato"
                        value={delegateForm.firstName}
                        onChange={(e) => setDelegateForm({ ...delegateForm, firstName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mokoena"
                        value={delegateForm.lastName}
                        onChange={(e) => setDelegateForm({ ...delegateForm, lastName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Age *
                      </label>
                      <input
                        type="number"
                        min="16"
                        max="35"
                        required
                        placeholder="e.g. 23"
                        value={delegateForm.age}
                        onChange={(e) => setDelegateForm({ ...delegateForm, age: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="lerato@example.co.za"
                        value={delegateForm.email}
                        onChange={(e) => setDelegateForm({ ...delegateForm, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="072 123 4567"
                        value={delegateForm.phone}
                        onChange={(e) => setDelegateForm({ ...delegateForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Township / Area of Residence *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sebokeng Zone 14 / Sharpeville / Evaton"
                        value={delegateForm.township}
                        onChange={(e) => setDelegateForm({ ...delegateForm, township: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Gender
                      </label>
                      <select
                        value={delegateForm.gender}
                        onChange={(e) => setDelegateForm({ ...delegateForm, gender: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="FEMALE">Female</option>
                        <option value="MALE">Male</option>
                        <option value="OTHER">Other / Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  {/* Industry Interests */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-2">
                      Sectors of Interest (Select up to 3)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Health, Wellness & the Care Economy',
                        'AI, Tech & the Digital Economy',
                        'Film, Media & the Creative Economy',
                        'Green Economy, Sustainability & AgriTech',
                        'Entrepreneurship, Funding & Innovation Ecosystems',
                      ].map((ind) => {
                        const checked = delegateForm.industries.includes(ind);
                        return (
                          <button
                            key={ind}
                            type="button"
                            onClick={() => toggleIndustry(ind)}
                            className={`flex items-center gap-2 rounded-xl border p-3 text-left text-xs font-bold transition cursor-pointer ${
                              checked
                                ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)]/20 text-white'
                                : 'border-white/10 bg-white/5 text-white/70 hover:border-white/30'
                            }`}
                          >
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                checked ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)] text-white' : 'border-white/30'
                              }`}
                            >
                              {checked && '✓'}
                            </span>
                            <span className="truncate">{ind}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="ey-button ey-button-dark-filled w-full text-center py-4 flex items-center justify-center gap-2"
                  >
                    <span>Complete Free Delegate Registration</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: CORPORATE PARTNER / EMPLOYER FORM */}
          {activeFormTab === 'partner' && (
            <div className="rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-7 sm:p-10 shadow-2xl">
              {partnerSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Partner Enquiry Received!</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you. Mbali Mavuso and the Empowaworx team will reach out within 24 hours with the corporate exhibition prospectus, talent matchmaking specs, and floorplan.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPartnerSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-white/10 cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">Corporate &amp; Employer Partnership</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Activate on-site recruitment pods, exhibition stands, or headline sector power panels.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Company / Organisation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Standard Bank / Microsoft / ArcelorMittal"
                        value={partnerForm.companyName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Key Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Thabo Ndlovu (Head of Talent / CSI)"
                        value={partnerForm.contactName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tndlovu@company.co.za"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+27 11 000 0000"
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Partnership Format
                      </label>
                      <select
                        value={partnerForm.partnershipType}
                        onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="Exhibitor Booth">Exhibitor Booth &bull; Talent Recruitment</option>
                        <option value="Demo Lab Host">Experiential Demo Lab Host</option>
                        <option value="Panel Sponsor">Sector Panel Keynote Sponsorship</option>
                        <option value="Pitch Stage Funder">Dragons’ Den Seed Grant Funder</option>
                        <option value="Comprehensive Partner">Full 5-Day Headline Partner</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Target Youth Placement Intent
                      </label>
                      <select
                        value={partnerForm.hiringIntent}
                        onChange={(e) => setPartnerForm({ ...partnerForm, hiringIntent: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="1-10 Placements">1 – 10 Youth Placements / Internships</option>
                        <option value="10-50 Youth Placements">10 – 50 Youth Placements</option>
                        <option value="50-100 Youth Placements">50 – 100 Youth Placements</option>
                        <option value="100+ Youth Placements">100+ Scaled Workforce Pipeline</option>
                        <option value="Skills Only">Skills Training &bull; ESD Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Specific Objectives or Custom Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Outline your talent pipeline needs, B-BBEE scorecard goals, or custom activation requirements..."
                      value={partnerForm.notes}
                      onChange={(e) => setPartnerForm({ ...partnerForm, notes: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ey-button ey-button-dark-filled w-full text-center py-4 flex items-center justify-center gap-2"
                  >
                    <span>Submit Employer Partnership Request</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: SPONSORSHIP & ESD FUNDING FORM */}
          {activeFormTab === 'sponsor' && (
            <div className="rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-7 sm:p-10 shadow-2xl">
              {sponsorSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Sponsorship Prospectus Dispatched</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you, {sponsorForm.contactName || 'Partner'}. Your enquiry has been received by Executive Producer Simphiwe Masiza. The official B-BBEE ESD, CSI, and branding sponsorship tiers pack will be delivered to your inbox shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSponsorSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-white/10 cursor-pointer"
                  >
                    Submit Another Funding Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSponsorSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">Sponsorship &amp; ESD Funding Desk</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Direct capital, enterprise supplier development, and CSI contributions into verifiable township impact.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Organisation / Foundation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. IDC / Anglo American / Naspers Labs"
                        value={sponsorForm.orgName}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, orgName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Representative Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nandi Sithole (Executive Director)"
                        value={sponsorForm.contactName}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, contactName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nsithole@foundation.org.za"
                        value={sponsorForm.email}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+27 11 000 0000"
                        value={sponsorForm.phone}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Target Funding Track
                      </label>
                      <select
                        value={sponsorForm.fundingTrack}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, fundingTrack: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="ESD Scorecard Contribution">Enterprise &amp; Supplier Development (ESD)</option>
                        <option value="CSI Social Impact Allocation">Socio-Economic Development (CSI / SED)</option>
                        <option value="Skills Development Bursary Pool">Skills Development (SETA &amp; Bursary Pool)</option>
                        <option value="Pitch Stage Seed Grant Sponsor">Dragons’ Den Equity-Free Seed Pool</option>
                        <option value="Headline Week Sponsor">Headline Title Sponsor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Envisaged Investment Scope
                      </label>
                      <select
                        value={sponsorForm.budgetRange}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, budgetRange: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="R100,000 – R250,000">R100,000 – R250,000</option>
                        <option value="R250,000 – R500,000">R250,000 – R500,000</option>
                        <option value="R500,000 – R1,000,000">R500,000 – R1,000,000</option>
                        <option value="R1,000,000+ Headline">R1,000,000+ (Headline / Multi-Year)</option>
                        <option value="Custom In-Kind Value">Custom In-Kind / Tooling / Tech Licenses</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Funding Objectives &amp; Scorecard Guidelines
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detail your target B-BBEE scorecard targets, reporting timelines, or custom branding requirements..."
                      value={sponsorForm.message}
                      onChange={(e) => setSponsorForm({ ...sponsorForm, message: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="ey-button ey-button-dark-filled w-full text-center py-4 flex items-center justify-center gap-2"
                  >
                    <span>Request Executive Sponsorship Prospectus</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. DIRECT COORDINATION DESK & VENUE DIRECTORY           */}
      {/* ======================================================== */}
      <section className="py-20 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[#060807]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-r from-[#121915] via-[#161f1c] to-[#121915] p-8 sm:p-12 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  Direct Coordination Desk
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[var(--pt-paper)] mt-2">
                  Connect With The Vaal Week Team
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[var(--pt-muted)] leading-relaxed">
                  Have questions about venue logistics, group transport for delegates, exhibition floorplans, or corporate sponsorship packages? Reach out directly.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.03)] p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                      Programme Lead &bull; Event Operations
                    </span>
                    <strong className="text-white text-sm block">Mbali Mavuso</strong>
                    <div className="mt-2.5 space-y-1.5 text-[rgba(244,240,232,0.75)]">
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="tel:+27114827256" className="hover:text-white transition">+27 (0) 11 482 7256</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="tel:+27728821840" className="hover:text-white transition">+27 (0) 72 882 1840</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="mailto:mbali@empowaworx.co.za" className="hover:text-white transition">mbali@empowaworx.co.za</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.03)] p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                      National Headquarters &bull; Randburg
                    </span>
                    <strong className="text-white text-sm block">Empowaworx House</strong>
                    <div className="mt-2.5 space-y-1.5 text-[rgba(244,240,232,0.75)]">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <span>364 Pine Avenue, Ferndale, Randburg</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="mailto:info@empowayouth.co.za" className="hover:text-white transition">info@empowayouth.co.za</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="tel:+27114827257" className="hover:text-white transition">+27 (0) 11 482 7257</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3.5">
                <a
                  href="#participate"
                  onClick={() => setActiveFormTab('delegate')}
                  className="ey-button ey-button-dark-filled w-full text-center"
                >
                  <span>Register Free Delegate Pass</span>
                </a>
                <a
                  href="#participate"
                  onClick={() => setActiveFormTab('partner')}
                  className="w-full text-center rounded-md border border-[var(--pt-accent)] bg-[rgba(232,131,42,0.15)] py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--pt-accent)] hover:bg-[var(--pt-accent)] hover:text-white transition"
                >
                  Partner With Us
                </a>
                <a
                  href="mailto:mbali@empowaworx.co.za?subject=Vaal%20EmpowaYouth%20Week%20Sponsorship%20Enquiry"
                  className="w-full text-center rounded-md border border-white/20 bg-white/5 py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--pt-paper)] hover:bg-white/10 transition"
                >
                  Email Sponsorship Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
