'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Users,
  Briefcase,
  Award,
  Sparkles,
  Layers,
  Building2,
  Send,
  Phone,
  Mail,
  ChevronRight,
  ExternalLink,
  Target,
  Compass,
  Cpu,
  HeartPulse,
  Film,
  Leaf,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Megaphone,
  Radio,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';
import { PartnerLogoMarquee } from '@/components/PartnerLogoMarquee';

export default function VaalEmpowaYouthWeekPage() {
  useEmpowaYouthScrollAnimations();

  // Interactive tab states
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeFormTab, setActiveFormTab] = useState<'delegate' | 'partner' | 'sponsor'>('delegate');

  // Form states
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
        'Healthcare Career Fast-Track: Direct career pipelines into medicine, nursing, physiotherapy, and sports science.',
        'Mental Health Enterprise Labs: Transforming community mental wellness into scalable, fundable service businesses.',
        'Wellness Tech Incubator: Exposure to digital healthcare startups disrupting triage with mobile apps and diagnostics.',
        'High-Level CEO Access: Networking with private healthcare group executives, health NGOs, and medical specialists.',
      ],
      targetAudience: 'Pre-med students, life sciences graduates, community health workers, wellness founders.',
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
        'Live AI Coding Arenas: Real-time hackathons solving real township logistics, payment friction, and healthcare routing.',
        'Fintech Power Sessions: Face-to-face engagements with South Africa’s leading retail banks, neo-banks, and digital payment disruptors.',
        'Next-Gen Tech Pathways: Rapid skill diagnostics in cybersecurity, cloud infrastructure, full-stack engineering, and data science.',
        'AI in Enterprise Masterclass: How young entrepreneurs leverage predictive AI tools to automate customer retention and scale.',
      ],
      targetAudience: 'Self-taught coders, STEM graduates, digital creatives, data analysts, tech founders.',
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
        'Content Monetisation & Rights: Masterclasses on IP ownership, copyright enforcement, licensing agreements, and streaming royalties.',
        'Hands-On Production Labs: Live camera rigging, spatial audio mixing, animation pipelines, and colour grading workshops.',
        'Creator-to-CEO Roadmaps: Structuring personal brands into scalable production agencies and commercial studios.',
        'Studio & Streamer Immersion: Direct portfolio pitches to streaming commissioning editors, ad agencies, and broadcast executives.',
      ],
      targetAudience: 'Filmmakers, writers, animators, digital creators, sound engineers, actors, influencers.',
    },
    {
      day: 4,
      badge: 'Day 04',
      sector: 'Green Economy, Sustainability & AgriTech',
      theme: 'Regenerate: Green Jobs, Agribusiness & the Circular Economy',
      icon: Leaf,
      accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
      tag: 'Green Economy',
      powerStatement:
        'The climate crisis is our challenge; green enterprise is our economic answer. Risk transformed into lasting resilience.',
      outcomes: [
        'Urban Farming Hackathons: Converting unused urban spaces into precision hydroponic and organic food production centres.',
        'Climate Innovation Labs: Practical pathways into waste-to-energy conversion, recycling economics, and solar installation.',
        'Agri-Processing Value Chains: Moving from raw crop harvest into commercial packaging, distribution, and supermarket retail shelfing.',
        'Circular Economy Blueprint: Sustainable business models turning industrial by-products into high-value consumer goods.',
      ],
      targetAudience: 'Emerging farmers, green engineers, environmental sciences graduates, sustainability innovators.',
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
        'Live Dragons’ Den Pitch Stage: 20 shortlisted youth enterprises pitch before corporate ESD executives and angel investors for non-dilutive capital.',
        'Investor Readiness Bootcamp: Financial model auditing, pitch deck refinement, and compliance verification clinics.',
        'Corporate ESD Deal Room: Instant procurement matching between township suppliers and major corporate supply chains.',
        'Grand Finale Awards Ceremony: Celebration of top innovators, placement announcements, and bursary awards.',
      ],
      targetAudience: 'Early-stage founders, township entrepreneurs, SMME owners, growth-stage innovators.',
    },
  ];

  // Past & Featured Voices
  const speakers = [
    {
      name: 'Simphiwe Masiza',
      role: 'Founder & Executive Producer, Empowaworx',
      topic: 'Economic Engineering & National Power Shift',
      imageUrl: '/images/about-hero-leaders.jpg',
      bio: 'Architect of EmpowaYouth, EmpowaWomen, and EmpowaEntrepreneurs. Wits and GIBS alumnus who turns vision into measurable economic velocity.',
    },
    {
      name: 'Mbali Mavuso',
      role: 'Programme Lead & Events Director',
      topic: 'Audience Psychology & Scaled Activations',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
      bio: 'Over a decade leading flagship national campaigns including Eskom 49M, TOTAL CSI, and Tiger Brands activations.',
    },
    {
      name: 'Panyaza Lesufi',
      role: 'Public Leadership & Policy Reform',
      topic: 'Civic Mandate & Township Economic Revitalisation',
      imageUrl: '/past_speakers/Panyaza-Lesufi.jpg',
    },
    {
      name: 'Somizi Mhlongo',
      role: 'Culture & Creative Economy Leader',
      topic: 'Monetising Cultural Capital & Creative Hustle',
      imageUrl: '/past_speakers/Somizi-Mhlongo.jpg',
    },
    {
      name: 'Lebo M',
      role: 'Grammy-Winning Composer & Producer',
      topic: 'Pan-African IP Ownership & Global Excellence',
      imageUrl: '/past_speakers/Lebo-M.jpg',
    },
    {
      name: 'Dr. David Molapo',
      role: 'Renowned Leadership Authority',
      topic: 'Resilience, Mindset Architecture & Enterprise',
      imageUrl: '/past_speakers/Dr.-David-Molapo.jpg',
    },
    {
      name: 'Prof. Tshilidzi Marwala',
      role: 'UN Under-Secretary-General & AI Scholar',
      topic: 'Artificial Intelligence & Africa’s 4IR Future',
      imageUrl: '/past_speakers/Prof.-Tshilidzi-Marwala.jpg',
    },
  ];

  // Masterclass Labs
  const masterclasses = [
    {
      number: '01',
      sector: 'Health & Care Economy',
      title: 'Healing the Economy',
      highlight: 'Careers in Care, Health & Digital Diagnostics',
      bullets: [
        'Direct career pathways into nursing, occupational therapy & biotech',
        'Mental health scalable service models',
        'Wearable and diagnostic health-tech incubation',
      ],
    },
    {
      number: '02',
      sector: 'AI & Digital Economy',
      title: 'Code the Future',
      highlight: 'AI, Innovation & 4IR Digital Productivity',
      bullets: [
        'Hands-on full-stack coding & machine learning sprints',
        'Fintech APIs, digital lending & payment gateways',
        'Enterprise cybersecurity & cloud infrastructure roadmap',
      ],
    },
    {
      number: '03',
      sector: 'Creative & Film Economy',
      title: 'Frame the Future',
      highlight: 'Monetising African IP, Media & Storytelling',
      bullets: [
        'Copyright, licensing, and global streaming distribution rights',
        'High-end camera, lighting, and sound engineering masterclass',
        'From digital content creator to commercial agency founder',
      ],
    },
    {
      number: '04',
      sector: 'Green Economy & AgriTech',
      title: 'Regenerate',
      highlight: 'Green Jobs, Climate Tech & Circular Value Chains',
      bullets: [
        'Hydroponic food production and climate-resilient farming',
        'Waste-to-energy and community circular economy models',
        'Packaging, logistics, and retail distribution chains',
      ],
    },
    {
      number: '05',
      sector: 'Entrepreneurship & Capital',
      title: 'Fund the Future',
      highlight: 'From Township Hustle to High-Growth Enterprise',
      bullets: [
        'Pitch deck structuring and financial audit preparation',
        'Corporate ESD procurement integration & vendor onboarding',
        'VC and angel investor capital matchmaking sessions',
      ],
    },
  ];

  const currentDayData = programmeDays.find((p) => p.day === activeDay) || programmeDays[0];

  return (
    <main className="min-h-screen bg-[var(--pt-ink)] text-[var(--pt-paper)] overflow-x-hidden selection:bg-[var(--pt-accent)] selection:text-white">
      {/* ======================================================== */}
      {/* 1. CINEMATIC HERO SECTION                                */}
      {/* ======================================================== */}
      <section
        id="vaal-hero"
        className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden border-b border-white/10 bg-[var(--pt-ink)] px-4 pb-14 pt-[clamp(120px,18vw,210px)] sm:px-6 md:px-8 md:pb-20 lg:px-[var(--pt-container-pad)] lg:pb-24"
      >
        {/* Background Visual Overlay */}
        <img
          src="/images/summit-crowd-movement.jpg"
          alt="Young delegates celebrating at EmpowaYouth Week in the Vaal"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center filter brightness-[0.25] contrast-[1.1] scale-105"
        />
        <div
          className="absolute inset-0 z-0 bg-gradient-to-t from-[var(--pt-ink)] via-[var(--pt-ink)]/75 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(232,131,42,0.22),transparent)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[var(--pt-container)]">
          {/* Tagline / Kicker Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--pt-accent)]/40 bg-[var(--pt-accent)]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[var(--pt-accent)] animate-pulse" />
              <span>Flagship Regional Activation &bull; Sebokeng, Gauteng</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
              <Compass className="h-3 w-3 text-[var(--pt-accent)]" />
              <span>5 Days &bull; 5 Sectors &bull; 10,000+ Youth</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-5xl text-[clamp(2.5rem,6.5vw,5.8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] text-[var(--pt-paper)] [text-wrap:balance]">
            <span>Vaal EmpowaYouth </span>
            <span className="font-light italic text-[var(--pt-accent)]">Week</span>
            <span className="block text-white/90 text-[0.62em] font-bold tracking-tight mt-2 sm:mt-3">
              Powering South Africa’s Youth Economy.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] font-normal leading-[1.7] text-white/80 [text-wrap:pretty]">
            Not an event — a national power shift. A high-impact catalytic economic engine built to bridge township youth into the future economy through verified jobs, enterprise deal rooms, accredited skills certifications, and high-growth sector masterclasses.
          </p>

          {/* Quick Specifications Strip (Venue, Audience, Time - NO DATE) */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-4xl border-y border-white/10 py-5">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-muted)] flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[var(--pt-accent)]" /> Venue
              </span>
              <span className="text-sm font-bold text-white mt-1">Koinonia Bible Church</span>
              <span className="text-xs text-white/60">Sebokeng, Zone 14</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-muted)] flex items-center gap-1">
                <Clock className="h-3 w-3 text-[var(--pt-accent)]" /> Schedule
              </span>
              <span className="text-sm font-bold text-white mt-1">08:00 – 15:00 Daily</span>
              <span className="text-xs text-white/60">5 Full Days of Action</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-muted)] flex items-center gap-1">
                <Users className="h-3 w-3 text-[var(--pt-accent)]" /> Attendance
              </span>
              <span className="text-sm font-bold text-white mt-1">10,000+ Delegates</span>
              <span className="text-xs text-white/60">2,000+ Youth Daily</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-muted)] flex items-center gap-1">
                <Target className="h-3 w-3 text-[var(--pt-accent)]" /> Focus Group
              </span>
              <span className="text-sm font-bold text-white mt-1">NEET &amp; Graduates</span>
              <span className="text-xs text-white/60">Founders &amp; Jobseekers</span>
            </div>
          </div>

          {/* Three Visible Calls to Action (Participate, Partner, Sponsor) */}
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#participate"
              onClick={() => setActiveFormTab('delegate')}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[var(--pt-accent)] px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[var(--pt-accent)]/20 transition-all duration-200 hover:bg-[var(--pt-accent-hot)] hover:scale-[1.02]"
            >
              <span>1. Register to Participate</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#participate"
              onClick={() => setActiveFormTab('partner')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--pt-accent)]/60 bg-[var(--pt-accent)]/10 px-6 py-4 text-sm font-bold uppercase tracking-wider text-[var(--pt-accent)] backdrop-blur-md transition-all duration-200 hover:border-[var(--pt-accent)] hover:bg-[var(--pt-accent)]/20 hover:text-white"
            >
              <span>2. Partner as an Employer</span>
            </a>

            <a
              href="#participate"
              onClick={() => setActiveFormTab('sponsor')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            >
              <span>3. Enquire About Sponsorship</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PROVEN TRACK RECORD / STATS STRIP                     */}
      {/* ======================================================== */}
      <section className="border-b border-white/10 bg-[#070a09] py-10 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
              <span>Proven Power to Deliver &bull; Auditable National Track Record</span>
            </p>
            <span className="text-xs text-[var(--pt-muted)]">Delivering across 8 Provinces</span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                198,000<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
                Youth Reached Across South Africa
              </p>
              <p className="mt-1 text-[11px] text-white/50">Townships and secondary towns mobilized</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                690<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
                Verified Direct Job Placements
              </p>
              <p className="mt-1 text-[11px] text-white/50">Signed contracts with vetted employers</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                150<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
                Township Enterprises Funded
              </p>
              <p className="mt-1 text-[11px] text-white/50">Seed capital &amp; ESD supply chain integration</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                2,000<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-muted)]">
                Accredited Skills Certifications
              </p>
              <p className="mt-1 text-[11px] text-white/50">SETA and industry recognized qualifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. THE PURPOSE: WHY THE VAAL? WHY NOW?                   */}
      {/* ======================================================== */}
      <section id="purpose" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-b border-white/10">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Context & Narrative */}
            <div className="lg:col-span-7">
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-4">
                <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
                <span>01 / The Purpose &amp; Economic Reality</span>
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.04em] text-[var(--pt-paper)]">
                <span>Ground Zero For A National </span>
                <span className="font-light italic text-[var(--pt-accent)]">Economic Reset</span>
                <span>.</span>
              </h2>

              <p className="mt-6 text-[16px] leading-[1.75] text-[var(--pt-muted)] [text-wrap:pretty]">
                In the Vaal, where youth unemployment sits stubbornly above <strong className="text-white">41%</strong> and specific communities endure joblessness exceeding <strong className="text-[var(--pt-accent)]">90%</strong>, we are not facing a standard social challenge — we are in an economic state of emergency.
              </p>

              <p className="mt-4 text-[16px] leading-[1.75] text-[var(--pt-muted)] [text-wrap:pretty]">
                Once a manufacturing powerhouse of South Africa, the Vaal region has suffered decades of industrial decline, broken corporate pipelines, and disinvested infrastructure. But inside every unemployed graduate, disconnected artisan, and self-taught coder lies untapped human capital capable of driving industrial revival.
              </p>

              <div className="mt-8 rounded-2xl border border-[var(--pt-accent)]/30 bg-[rgba(232,131,42,0.06)] p-6 sm:p-7 backdrop-blur-sm">
                <p className="text-base sm:text-lg font-bold italic leading-relaxed text-[var(--pt-paper)]">
                  &ldquo;This is not about speeches, it’s about economic engineering in real time. Every job secured, every enterprise funded, every skill certified is a direct step towards rebuilding South Africa’s economic future.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--pt-accent)] flex items-center justify-center font-extrabold text-white text-sm">
                    SM
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-white uppercase">Simphiwe Masiza</span>
                    <span className="text-xs text-[var(--pt-accent)]">Founder &amp; Executive Producer, EmpowaYouth</span>
                  </div>
                </div>
              </div>

              {/* 4 Pillars of Transformation */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Pillar 1: Youth Mobilisation</span>
                  <p className="mt-2 text-sm text-white/80">
                    Activating talent through real platforms and high-stakes market access, not empty awareness campaigns.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Pillar 2: Direct Employment</span>
                  <p className="mt-2 text-sm text-white/80">
                    Placing young people into vetted jobs, learnerships, and apprentice pipelines across the 5 core sectors.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Pillar 3: Enterprise Funding</span>
                  <p className="mt-2 text-sm text-white/80">
                    Injecting seed funding, mentorship, and commercial supplier contracts into township founders.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Pillar 4: Accredited Skills</span>
                  <p className="mt-2 text-sm text-white/80">
                    Delivering certified masterclasses and practical digital toolkits to make graduates immediately employable.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Infographic Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl border border-white/15 bg-gradient-to-b from-[#131b18] to-[var(--pt-ink)] p-7 sm:p-9 shadow-2xl">
                <span className="inline-block rounded-full bg-[var(--pt-accent)]/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  The Blueprint
                </span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase text-[var(--pt-paper)]">
                  How We Rewrite the Economic Script
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--pt-muted)]">
                  A high-velocity ecosystem that removes the friction between jobseekers, township entrepreneurs, corporate boardrooms, and funding authorities.
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Live On-Site Job Placements</strong>
                      <span className="text-xs text-white/60">Recruiters and corporate HR conduct interviews and issue offer letters on the ground.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Non-Dilutive Pitch Funding</strong>
                      <span className="text-xs text-white/60">Township SMMEs present in our Dragons’ Den to secure capital, tools, and ESD onboarding.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Accredited Pre-Screening</strong>
                      <span className="text-xs text-white/60">Delegates are vetted, trained, and certified in future-proof technical competencies.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Auditable B-BBEE &amp; ESG Returns</strong>
                      <span className="text-xs text-white/60">Corporates receive full socio-economic compliance documentation and impact telemetry.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="#participate"
                    onClick={() => setActiveFormTab('partner')}
                    className="w-full text-center rounded-lg bg-[var(--pt-accent)] py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[var(--pt-accent-hot)]"
                  >
                    Explore Partnership Options
                  </a>
                  <a
                    href="#programme"
                    className="w-full text-center rounded-lg border border-white/20 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/80 transition hover:bg-white/5"
                  >
                    View 5-Day Programme
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. THE 5-DAY PROGRAMME: SECTOR BY SECTOR                 */}
      {/* ======================================================== */}
      <section id="programme" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#090d0c] border-b border-white/10">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
                <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
                <span>02 / The Summit Programme</span>
              </p>
              <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)]">
                <span>Five Days. Five Sectors. </span>
                <span className="font-light italic text-[var(--pt-accent)]">One National Reset</span>
                <span>.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--pt-muted)] max-w-md">
              Each day is a live economic activation dedicated to South Africa’s fastest-growing sectors. Switch tabs below to explore the schedule.
            </p>
          </div>

          {/* Interactive Day Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4 mb-8">
            {programmeDays.map((p) => {
              const isActive = activeDay === p.day;
              return (
                <button
                  key={`day-btn-${p.day}`}
                  type="button"
                  onClick={() => setActiveDay(p.day)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--pt-accent)] text-white shadow-lg shadow-[var(--pt-accent)]/25 scale-[1.02]'
                      : 'border border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${isActive ? 'bg-black/30' : 'bg-white/10'}`}>
                    Day {p.day}
                  </span>
                  <span>{p.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Active Day Content Panel */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-300">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Left Column: Sector Overview */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-[var(--pt-accent)]/20 border border-[var(--pt-accent)]/40 px-3 py-1 text-xs font-extrabold uppercase text-[var(--pt-accent)]">
                    {currentDayData.badge} &bull; Full-Day Focus
                  </span>
                  <span className="text-xs font-semibold text-white/60">08:00 – 15:00 Daily</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight tracking-tight text-[var(--pt-paper)]">
                  {currentDayData.sector}
                </h3>
                <p className="mt-2 text-base sm:text-lg font-semibold text-[var(--pt-accent)]">
                  {currentDayData.theme}
                </p>

                <div className="my-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-muted)]">
                    Sector Power Statement
                  </span>
                  <p className="mt-2 text-sm sm:text-base italic leading-relaxed text-white/90">
                    &ldquo;{currentDayData.powerStatement}&rdquo;
                  </p>
                </div>

                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--pt-muted)] mb-3">
                  Key Outcomes &amp; Core Activities
                </h4>
                <ul className="space-y-3">
                  {currentDayData.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-white/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--pt-accent)]/20 text-[10px] font-bold text-[var(--pt-accent)] mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Delegate Targeting & CTA */}
              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-accent)]">
                  Target Demographic
                </span>
                <p className="mt-2 text-sm font-semibold text-white">
                  {currentDayData.targetAudience}
                </p>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-muted)]">
                    What Delegates Walk Away With:
                  </span>
                  <ul className="mt-3 space-y-2 text-xs text-white/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Accredited certificate of participation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Direct CV submission into partner databases</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Face-to-face mentorship from C-Suite executives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Eligibility for seed funding &amp; bursary pools</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="#participate"
                    onClick={() => {
                      setActiveFormTab('delegate');
                      setDelegateForm((prev) => ({
                        ...prev,
                        industries: [currentDayData.sector],
                      }));
                    }}
                    className="block w-full text-center rounded-lg bg-[var(--pt-accent)] py-3 px-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[var(--pt-accent-hot)] transition"
                  >
                    Register for {currentDayData.tag}
                  </a>
                  <p className="mt-2 text-center text-[10px] text-white/40">
                    Free admission &bull; Vetted entry &bull; Koinonia Bible Church
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. ANATOMY OF THE EXPERIENCE (WHAT HAPPENS ON GROUND)     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-b border-white/10">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
              <span>03 / Ground Level Architecture</span>
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)]">
              The Anatomy of The Experience
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--pt-muted)]">
              Vaal EmpowaYouth Week brings together multi-dimensional touchpoints engineered to turn passive listening into active, measurable economic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[var(--pt-accent)]/50 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)] mb-5">
                <Megaphone className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Dialogue &amp; Policy</span>
              <h3 className="mt-1 text-xl font-extrabold uppercase text-[var(--pt-paper)]">100+ Power Panels</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Engage directly with Ministers, corporate CEOs, trailblazing founders, and policy architects in high-stakes conversations across ten critical sectors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[var(--pt-accent)]/50 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)] mb-5">
                <Cpu className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Interactive Immersion</span>
              <h3 className="mt-1 text-xl font-extrabold uppercase text-[var(--pt-paper)]">40+ Experiential Demo Labs</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Step into interactive technology sandboxes, coding hubs, drone piloting demos, agricultural rigs, and artisan skills accelerators.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[var(--pt-accent)]/50 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)] mb-5">
                <Building2 className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Ecosystem Scale</span>
              <h3 className="mt-1 text-xl font-extrabold uppercase text-[var(--pt-paper)]">200+ Partners Activated</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Major banks, SETAs, multinational employers, provincial government, and venture funds deliver on-site bursaries, jobs, and mentorship.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[var(--pt-accent)]/50 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)] mb-5">
                <DollarSign className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Venture Capital</span>
              <h3 className="mt-1 text-xl font-extrabold uppercase text-[var(--pt-paper)]">Pitch Stages &amp; Deal Room</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Township enterprises go head-to-head on live pitch stages, winning equity-free seed grants and corporate supply chain onboarding contracts.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[var(--pt-accent)]/50 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)] mb-5">
                <Briefcase className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Recruitment Matching</span>
              <h3 className="mt-1 text-xl font-extrabold uppercase text-[var(--pt-paper)]">Career Clinics &amp; HR Pods</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                One-on-one resume diagnostics, professional digital profile photography, interview simulations, and instant recruitment matchmaking.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-[var(--pt-accent)]/50 hover:bg-white/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)] mb-5">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">Youth Identity</span>
              <h3 className="mt-1 text-xl font-extrabold uppercase text-[var(--pt-paper)]">Live Creative Immersion</h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                South Africa’s leading musicians, spoken word artists, and cultural icons ignite the main stage, turning inspiration into collective movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PRE-SUMMIT MASTERCLASS LABS (ACCELERATOR)             */}
      {/* ======================================================== */}
      <section id="masterclass" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#090d0c] border-b border-white/10">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-12">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
              <span>04 / Pre-Summit Power Labs</span>
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)]">
                  <span>Five Power Labs. </span>
                  <span className="font-light italic text-[var(--pt-accent)]">Five Specialized Sectors</span>
                  <span>.</span>
                </h2>
                <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-xl">
                  Intensive pre-summit cohorts preparing delegates with deep industry technical competence and direct employer access.
                </p>
              </div>

              {/* Masterclass Specs Pill */}
              <div className="flex flex-wrap items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-xs">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Intake</span>
                  <span className="font-bold text-white">100 Youth / Session</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Time</span>
                  <span className="font-bold text-white">10:00 – 13:00</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Format</span>
                  <span className="font-bold text-white">Hybrid (Live + Stream)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterclasses.map((mc) => (
              <div
                key={mc.number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex flex-col justify-between transition hover:border-[var(--pt-accent)]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-[var(--pt-accent)]">
                      LAB #{mc.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded">
                      {mc.sector}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-1">
                    {mc.title}
                  </h3>
                  <p className="text-xs font-medium text-[var(--pt-accent)] mb-4">
                    {mc.highlight}
                  </p>

                  <ul className="space-y-2.5 text-xs text-white/80 border-t border-white/10 pt-4">
                    {mc.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--pt-accent)] mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
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
      {/* 7. LEADERSHIP & INSPIRATIONAL VOICES                     */}
      {/* ======================================================== */}
      <section id="leadership" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 border-b border-white/10">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-14">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
              <span>05 / Leadership &amp; Voices That Moved The Room</span>
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)]">
              Architects of the Movement
            </h2>
            <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-xl">
              Meet the executive leadership guiding Vaal EmpowaYouth Week alongside distinguished keynote voices who champion South Africa’s youth economy.
            </p>
          </div>

          {/* Core Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Simphiwe Masiza */}
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#131b18] to-[var(--pt-ink)] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[var(--pt-accent)]/50">
                <img
                  src="/images/about-hero-leaders.jpg"
                  alt="Simphiwe Masiza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  Founder &amp; Executive Producer
                </span>
                <h3 className="text-2xl font-extrabold uppercase text-[var(--pt-paper)] mt-1">
                  Simphiwe Masiza
                </h3>
                <p className="text-xs text-white/60 mb-3">Empowaworx &bull; The Speakers Firm</p>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                  Visionary founder of EmpowaYouth, EmpowaWomen, and EmpowaEntrepreneurs. Wits and GIBS alumnus who turns vision into measurable economic velocity. Redefining how nations mobilize young people, capital, and market systems.
                </p>
              </div>
            </div>

            {/* Mbali Mavuso */}
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#131b18] to-[var(--pt-ink)] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[var(--pt-accent)]/50">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop"
                  alt="Mbali Mavuso"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  Lead Event Manager &bull; Programme Director
                </span>
                <h3 className="text-2xl font-extrabold uppercase text-[var(--pt-paper)] mt-1">
                  Mbali Mavuso
                </h3>
                <p className="text-xs text-white/60 mb-3">Vaal EmpowaYouth Week 2026</p>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                  Powerhouse strategist with over a decade of scaled activations for Eskom 49M, TOTAL CSI, and Tiger Brands. Turns logistical precision into unforgettable experiences that inspire action and unlock corporate sponsorship value.
                </p>
              </div>
            </div>
          </div>

          {/* Distinguished Voices Grid */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[var(--pt-muted)] mb-6">
              Distinguished Keynote Speakers &amp; Previous Leaders
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {speakers.slice(2).map((s) => (
                <div
                  key={s.name}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] aspect-[3/4]"
                >
                  <img
                    src={s.imageUrl}
                    alt={s.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition duration-500 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                      {s.role}
                    </span>
                    <h5 className="text-sm font-extrabold uppercase text-white leading-tight">
                      {s.name}
                    </h5>
                    <p className="text-[10px] text-white/70 line-clamp-1 mt-0.5">
                      {s.topic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. PARTNERSHIP & SPONSORSHIP OPPORTUNITIES               */}
      {/* ======================================================== */}
      <section id="partner-opportunities" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#090d0c] border-b border-white/10">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-14 max-w-3xl">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
              <span>06 / For Employers, Corporates &amp; Funders</span>
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)]">
              Why Partner With Us?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--pt-muted)] leading-relaxed">
              This is not an invitation to sponsor an event. It is a strategic acquisition of influence in one of South Africa’s most urgent, high-return transformation engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Value Prop 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-bold mb-5">
                01
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Strategic ESG, CSI &amp; ESD Impact
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Deliver auditable B-BBEE scorecard contributions in enterprise development, socio-economic initiatives, and skills development pipelines. Measure verified jobs created, local suppliers onboarded, and communities uplifted.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-bold mb-5">
                02
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Pipeline Tomorrow’s Workforce
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Access thousands of vetted, enthusiastic, future-ready graduates, artisans, and tech specialists. Pre-screen delegates directly for learnerships, internships, and permanent employment ahead of competitors.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-bold mb-5">
                03
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Unrivalled National Brand Authority
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Position your leadership before national Ministers, provincial dignitaries, industry peers, and 10,000+ energized youth delegates. High-frequency media spotlight across TV, radio, print, and digital.
              </p>
            </div>
          </div>

          {/* Marquee of Current & Past Strategic Partners */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-center text-[var(--pt-muted)] mb-5">
              Activated Alongside South Africa’s Leading Stakeholders
            </p>
            <PartnerLogoMarquee />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. BROADCAST & NATIONAL MEDIA REACH                      */}
      {/* ======================================================== */}
      <section className="py-16 px-4 sm:px-6 md:px-8 border-b border-white/10">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-1">
                National Media Amplification
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[var(--pt-paper)]">
                Covered Across South Africa’s Premier News Networks
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-white/70">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">SABC NEWS</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">eNCA</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">NEWZROOM AFRIKA</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">SA FM</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">RADIO 2000</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">702</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">YFM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. INTERACTIVE ACTION HUB: PARTICIPATE / PARTNER / SPONSOR */}
      {/* ======================================================== */}
      <section id="participate" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#090d0c] border-b border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block rounded-full bg-[var(--pt-accent)]/20 border border-[var(--pt-accent)]/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)] mb-3">
              Take Your Next Step
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em] text-[var(--pt-paper)]">
              Get Involved in Vaal EmpowaYouth Week
            </h2>
            <p className="mt-3 text-sm text-[var(--pt-muted)]">
              Whether you are an ambitious youth delegate, an employer hiring talent, or an investor seeking high-impact ESD deployment, register your intention below.
            </p>
          </div>

          {/* Form Selector Tabs */}
          <div className="flex rounded-2xl border border-white/15 bg-white/5 p-1.5 mb-8">
            <button
              type="button"
              onClick={() => setActiveFormTab('delegate')}
              className={`flex-1 rounded-xl py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition cursor-pointer ${
                activeFormTab === 'delegate'
                  ? 'bg-[var(--pt-accent)] text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              1. Youth Delegate
            </button>
            <button
              type="button"
              onClick={() => setActiveFormTab('partner')}
              className={`flex-1 rounded-xl py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition cursor-pointer ${
                activeFormTab === 'partner'
                  ? 'bg-[var(--pt-accent)] text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              2. Corporate Partner
            </button>
            <button
              type="button"
              onClick={() => setActiveFormTab('sponsor')}
              className={`flex-1 rounded-xl py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition cursor-pointer ${
                activeFormTab === 'sponsor'
                  ? 'bg-[var(--pt-accent)] text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              3. Sponsor &amp; Fund
            </button>
          </div>

          {/* TAB 1: YOUTH DELEGATE REGISTRATION */}
          {activeFormTab === 'delegate' && (
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-6 sm:p-10 shadow-2xl">
              {delegateSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Delegate Registration Received!</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you, {delegateForm.firstName || 'Delegate'}. Your registration for Vaal EmpowaYouth Week has been recorded. Our team will contact you with admission passes, transport pickup points, and schedule updates.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDelegateSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-white/10"
                  >
                    Submit Another Delegate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDelegateSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">Delegate Registration</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Free attendance for NEET youth, matriculants, graduates, and emerging founders.
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
                        Contact Phone *
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
                      Which sectors are you most interested in? (Choose up to 3)
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
                            className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs text-left transition cursor-pointer ${
                              checked
                                ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)]/15 text-white font-bold'
                                : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                                checked ? 'bg-[var(--pt-accent)] border-[var(--pt-accent)]' : 'border-white/30'
                              }`}
                            >
                              {checked && <span className="w-1.5 h-1.5 bg-white rounded-sm" />}
                            </span>
                            <span>{ind}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Entrepreneur Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Are you an entrepreneur?
                      </label>
                      <select
                        value={delegateForm.isEntrepreneur}
                        onChange={(e) => setDelegateForm({ ...delegateForm, isEntrepreneur: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="NO">No, I am looking for jobs &amp; skills training</option>
                        <option value="YES">Yes, I run a business or have a startup idea</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Is your business registered?
                      </label>
                      <select
                        value={delegateForm.isRegistered}
                        onChange={(e) => setDelegateForm({ ...delegateForm, isRegistered: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="NO">No / Not yet</option>
                        <option value="YES">Yes, CIPC registered</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      In 50 words, tell us why you want to attend EmpowaYouth Week *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share your ambition, what opportunity you are looking for, or how this week will change your journey..."
                      value={delegateForm.motivation}
                      onChange={(e) => setDelegateForm({ ...delegateForm, motivation: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[var(--pt-accent)] py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[var(--pt-accent-hot)] transition flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Free Delegate Registration</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: CORPORATE PARTNER & EMPLOYER ENQUIRY */}
          {activeFormTab === 'partner' && (
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-6 sm:p-10 shadow-2xl">
              {partnerSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Partner Enquiry Received!</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you. Mbali Mavuso and the Empowaworx project management team will reach out within 24 hours with the official employer pack and activation zone specs.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPartnerSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-white/10"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">Partner as an Employer or Exhibitor</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Pipeline young talent, host an interactive demo lab, or book an exhibition booth.
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
                        placeholder="e.g. Standard Bank / FoodBev SETA"
                        value={partnerForm.companyName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Contact Person &amp; Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sipho Sithole (Head of Talent)"
                        value={partnerForm.contactName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Direct Telephone / WhatsApp *
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
                        Partnership Format *
                      </label>
                      <select
                        value={partnerForm.partnershipType}
                        onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="Exhibitor Booth">Exhibition Booth &bull; Career Clinic</option>
                        <option value="Demo Lab Host">Experiential Demo Lab Host</option>
                        <option value="Hiring Partner">Direct Recruitment &bull; Job Placement Partner</option>
                        <option value="Masterclass Sponsor">Masterclass Sector Host</option>
                        <option value="Bursary Provider">Bursary / Learnership Provider</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Hiring / Placement Capacity
                      </label>
                      <select
                        value={partnerForm.hiringIntent}
                        onChange={(e) => setPartnerForm({ ...partnerForm, hiringIntent: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="1-10 Youth Placements">1 – 10 Placements / Internships</option>
                        <option value="10-50 Youth Placements">10 – 50 Placements</option>
                        <option value="50-200 Youth Placements">50 – 200 Placements</option>
                        <option value="200+ Youth Placements">200+ Large-Scale Cohort</option>
                        <option value="Brand & Skills Exhibition Only">Brand &amp; Skills Guidance Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Tell us about your strategic transformation goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify candidate profiles, preferred sector days (e.g. AI, Care Economy, Green Tech), or custom activation requirements..."
                      value={partnerForm.notes}
                      onChange={(e) => setPartnerForm({ ...partnerForm, notes: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[var(--pt-accent)] py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[var(--pt-accent-hot)] transition flex items-center justify-center gap-2"
                  >
                    <Building2 className="h-4 w-4" />
                    <span>Enquire as Employer / Partner</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: SPONSORSHIP & FUNDING ENQUIRY */}
          {activeFormTab === 'sponsor' && (
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-6 sm:p-10 shadow-2xl">
              {sponsorSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Sponsorship Enquiry Logged</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you. Simphiwe Masiza and the executive sponsorship desk will contact you directly with our auditable ESD, CSI, and headline sponsorship prospectus.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSponsorSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-white/10"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSponsorSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">Sponsorship, ESD &amp; Funding Enquiry</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Maximise B-BBEE scorecard points, fund township seed capital, or sponsor the main stage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Organisation / Funder *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nedbank / Anglo American / merSETA"
                        value={sponsorForm.orgName}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, orgName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Contact Person &amp; Designation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Head of ESD / CSI Manager"
                        value={sponsorForm.contactName}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, contactName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sponsor@funder.org.za"
                        value={sponsorForm.email}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Mobile / Telephone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+27 82 000 0000"
                        value={sponsorForm.phone}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Mandate Focus *
                      </label>
                      <select
                        value={sponsorForm.fundingTrack}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, fundingTrack: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="ESD Scorecard Contribution">Enterprise &amp; Supplier Development (ESD)</option>
                        <option value="CSI Grant">Corporate Social Investment (CSI)</option>
                        <option value="Pitch Stage Seed Fund">Dragons' Den Pitch Prize Funding</option>
                        <option value="Headline Summit Partner">Headline Title Sponsor</option>
                        <option value="Sector Track Host">Single Sector Day Sponsor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Anticipated Commitment Bracket
                      </label>
                      <select
                        value={sponsorForm.budgetRange}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, budgetRange: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="R100,000 – R250,000">R100,000 – R250,000</option>
                        <option value="R250,000 – R500,000">R250,000 – R500,000</option>
                        <option value="R500,000 – R1,000,000">R500,000 – R1,000,000</option>
                        <option value="R1,000,000+ Tier 1">R1,000,000+ (Anchor Partner)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      Specific Requirements or Message
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
                    className="w-full rounded-xl bg-[var(--pt-accent)] py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[var(--pt-accent-hot)] transition flex items-center justify-center gap-2"
                  >
                    <DollarSign className="h-4 w-4" />
                    <span>Request Executive Sponsorship Prospectus</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. DIRECT CONTACT & VENUE CARD                          */}
      {/* ======================================================== */}
      <section className="py-20 px-4 sm:px-6 md:px-8 border-b border-white/10 bg-[#060807]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-[#121915] via-[#161f1c] to-[#121915] p-8 sm:p-12 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  Direct Coordination Desk
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-[var(--pt-paper)] mt-2">
                  Connect With The Vaal Week Team
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[var(--pt-muted)] leading-relaxed">
                  Have questions about venue logistics, group delegate transport, exhibition space, or corporate sponsorship packages? Reach out directly.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                      Programme Lead &bull; Event Inquiries
                    </span>
                    <strong className="text-white text-sm block">Mbali Mavuso</strong>
                    <div className="mt-2 space-y-1 text-white/70">
                      <p className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-[var(--pt-accent)]" />
                        <a href="tel:+27114827256" className="hover:text-white">+27 (0) 11 482 7256</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-[var(--pt-accent)]" />
                        <a href="tel:+27728821840" className="hover:text-white">+27 (0) 72 882 1840</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-[var(--pt-accent)]" />
                        <a href="mailto:mbali@empowaworx.co.za" className="hover:text-white">mbali@empowaworx.co.za</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                      Head Office &bull; Empowaworx House
                    </span>
                    <strong className="text-white text-sm block">Johannesburg Hub</strong>
                    <div className="mt-2 space-y-1 text-white/70">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-[var(--pt-accent)]" />
                        <span>364 Pine Avenue, Ferndale, Randburg</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-[var(--pt-accent)]" />
                        <a href="mailto:info@empowayouth.co.za" className="hover:text-white">info@empowayouth.co.za</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-[var(--pt-accent)]" />
                        <a href="tel:+27114827257" className="hover:text-white">+27 (0) 11 482 7257</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <a
                  href="#participate"
                  onClick={() => setActiveFormTab('delegate')}
                  className="w-full text-center rounded-xl bg-[var(--pt-accent)] py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-[var(--pt-accent-hot)] transition"
                >
                  Register as Delegate
                </a>
                <a
                  href="#participate"
                  onClick={() => setActiveFormTab('partner')}
                  className="w-full text-center rounded-xl border border-[var(--pt-accent)]/50 bg-[var(--pt-accent)]/10 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--pt-accent)] hover:bg-[var(--pt-accent)] hover:text-white transition"
                >
                  Partner With Us
                </a>
                <a
                  href="mailto:mbali@empowaworx.co.za?subject=Vaal%20EmpowaYouth%20Week%20Sponsorship%20Enquiry"
                  className="w-full text-center rounded-xl border border-white/20 bg-white/5 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition"
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
