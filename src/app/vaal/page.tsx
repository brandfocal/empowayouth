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

  // Form input states (matching CMS registration fields)
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

  // 5-Day Programme Data (Exact sectors and focus from CMS link)
  const programmeDays = [
    {
      day: 1,
      badge: 'Day 01',
      sector: 'Health, Wellness & The Care Economy',
      theme: 'Healing the Economy: Careers in Care, Health & Humanity',
      icon: HeartPulse,
      tag: 'Care Economy',
      powerStatement:
        'Health is the new wealth, and the Care Economy is a trillion-dollar global sector waiting for Africa’s next generation of healers, innovators, and human-first entrepreneurs.',
      summary:
        'Launching scalable careers in preventative care, mental health services, longevity science, wellness tech, and professional caregiving, sectors rapidly expanding across Africa.',
      outcomes: [
        'Healthcare Career Fast-Track: Direct pathways into medicine, nursing, physiotherapy, sports science, and occupational therapy.',
        'Mental Health Enterprise Labs: Turning mental wellness into a scalable business opportunity.',
        'Wellness Tech Incubator: Exposure to startups disrupting healthcare with apps, wearables, and AI.',
        'Industry Access: Networking with CEOs, medical specialists, NGO leaders, and private hospital executives.',
      ],
      targetAudience: 'Life sciences graduates, pre-med students, community health workers, and wellness innovators.',
    },
    {
      day: 2,
      badge: 'Day 02',
      sector: 'AI, Digital Economy & Deep Tech',
      theme: 'Code the Future: AI, Innovation & the 4IR Workforce',
      icon: Cpu,
      tag: 'Digital & AI',
      powerStatement:
        'The 4th Industrial Revolution will not wait for Africa. We either write the code, or we get coded out of the future.',
      summary:
        'Unlocking the 4IR by fuelling youth-led innovation in fintech, automation, data science, cybersecurity, platform technologies, and digital infrastructure. This is the new backbone of productivity.',
      outcomes: [
        'Live AI Coding Arenas: Youth coding real-world solutions in fintech, logistics, and health.',
        'Fintech Power Sessions: Meeting the banks, digital lenders, and payment disruptors.',
        'Next-Gen Careers: Cybersecurity, data science, cloud architecture, blockchain innovation.',
        'AI in Business Masterclass: From predictive analytics to automated customer engagement.',
      ],
      targetAudience: 'Self-taught coders, STEM graduates, digital creatives, data analysts, and tech founders.',
    },
    {
      day: 3,
      badge: 'Day 03',
      sector: 'Creative & Film Economy',
      theme: 'Frame the Future: Youth in Film, Content & Storytelling',
      icon: Film,
      tag: 'Creative IP',
      powerStatement:
        'Whoever owns the story owns the culture. Whoever owns the IP owns the wealth. Turning African content into commercial capital.',
      summary:
        'Monetising Africa’s cultural capital. Empowering storytellers, digital creators, filmmakers, animators, game developers, and designers to build scalable IP and creative enterprise, turning content into capital.',
      outcomes: [
        'Content Monetisation Workshops: How to make your art pay, and keep the rights.',
        'Production Labs: Film, sound, animation, editing, hands-on, real-time creation.',
        'Creator-to-CEO Roadmap: Building brands that attract global audiences and buyers.',
        'Industry Immersion: Networking with streaming giants, production houses, and ad agencies.',
      ],
      targetAudience: 'Filmmakers, writers, animators, digital creators, sound engineers, actors, and media entrepreneurs.',
    },
    {
      day: 4,
      badge: 'Day 04',
      sector: 'Green Economy, Sustainability & AgriTech',
      theme: 'Regenerate: Green Jobs, Agribusiness & the Circular Economy',
      icon: Leaf,
      tag: 'Green Economy',
      powerStatement:
        'Climate crisis is the challenge, green enterprise is the answer. The future belongs to those who can grow, build, and innovate sustainably.',
      summary:
        'Mobilising youth to lead climate solutions, from smart agriculture and waste-to-energy ventures to circular economy models and renewable tech. This is risk transformed into economic resilience.',
      outcomes: [
        'Urban Farming Hackathons: Food security meets entrepreneurship.',
        'Climate Innovation Labs: Waste-to-energy, green construction, and eco-engineering.',
        'Agri-Processing Value Chains: Turning local produce into global products.',
        'Circular Economy Blueprint: Monetising sustainability in every industry.',
      ],
      targetAudience: 'Emerging farmers, green engineers, environmental graduates, and sustainability innovators.',
    },
    {
      day: 5,
      badge: 'Day 05',
      sector: 'Entrepreneurship, Funding & Innovation Ecosystems',
      theme: 'Fund the Future: From Hustle to High-Growth Startups',
      icon: DollarSign,
      tag: 'Deal Room & Funding',
      powerStatement:
        'Hustle is not enough. To win, you need systems, scale, and serious capital.',
      summary:
        'Creating a national deal flow of fundable youth-led businesses. From pitch stages to ESD pipelines and VC showcases, this is where real money meets real solutions, and youth founders scale their vision.',
      outcomes: [
        'Investor Readiness Bootcamp: Perfect your pitch and land the cheque.',
        'Startup Clinics: Legal, branding, and growth hacking for early-stage ventures.',
        'VC & Angel Network Access: Meet the funders who can accelerate your idea.',
        'Township-to-Global Case Studies: Real stories of entrepreneurs who scaled beyond borders.',
      ],
      targetAudience: 'Township entrepreneurs, early-stage founders, informal business operators, and innovators ready to scale.',
    },
  ];

  // 5-Part Pre-Summit Masterclass Power Labs (From CMS link)
  const masterclasses = [
    {
      number: '01',
      title: 'Health, Wellness & the Care Economy',
      sector: 'Healing the Economy: Careers in Care, Health & Humanity',
      powerStatement:
        'Health is the new wealth, and the Care Economy is a trillion-dollar global sector waiting for Africa’s next generation of healers, innovators, and human-first entrepreneurs.',
      bullets: [
        'Healthcare Career Fast-Track: Direct pathways into medicine, nursing, physiotherapy, sports science, and occupational therapy',
        'Mental Health Enterprise Labs: Turning mental wellness into a scalable business opportunity',
        'Wellness Tech Incubator: Exposure to startups disrupting healthcare with apps, wearables, and AI',
        'Industry Access: Networking with CEOs, medical specialists, NGO leaders, and private hospital executives',
      ],
    },
    {
      number: '02',
      title: 'AI, Tech & the Digital Economy',
      sector: 'Code the Future: AI, Innovation & the 4IR Workforce',
      powerStatement:
        'The 4th Industrial Revolution will not wait for Africa. We either write the code, or we get coded out of the future.',
      bullets: [
        'Live AI Coding Arenas: Youth coding real-world solutions in fintech, logistics, and health',
        'Fintech Power Sessions: Meeting the banks, digital lenders, and payment disruptors',
        'Next-Gen Careers: Cybersecurity, data science, cloud architecture, blockchain innovation',
        'AI in Business Masterclass: From predictive analytics to automated customer engagement',
      ],
    },
    {
      number: '03',
      title: 'Film, Media & the Creative Economy',
      sector: 'Frame the Future: Youth in Film, Content & Storytelling',
      powerStatement:
        'Whoever owns the story owns the culture. Whoever owns the IP owns the wealth.',
      bullets: [
        'Content Monetisation Workshops: How to make your art pay, and keep the rights',
        'Production Labs: Film, sound, animation, editing, hands-on, real-time creation',
        'Creator-to-CEO Roadmap: Building brands that attract global audiences and buyers',
        'Industry Immersion: Networking with streaming giants, production houses, and ad agencies',
      ],
    },
    {
      number: '04',
      title: 'Green Economy, Sustainability & AgriTech',
      sector: 'Regenerate: Green Jobs, Agribusiness & the Circular Economy',
      powerStatement:
        'Climate crisis is the challenge, green enterprise is the answer. The future belongs to those who can grow, build, and innovate sustainably.',
      bullets: [
        'Urban Farming Hackathons: Food security meets entrepreneurship',
        'Climate Innovation Labs: Waste-to-energy, green construction, and eco-engineering',
        'Agri-Processing Value Chains: Turning local produce into global products',
        'Circular Economy Blueprint: Monetising sustainability in every industry',
      ],
    },
    {
      number: '05',
      title: 'Entrepreneurship, Funding & Innovation Ecosystems',
      sector: 'Fund the Future: From Hustle to High-Growth Startups',
      powerStatement:
        'Hustle is not enough. To win, you need systems, scale, and serious capital.',
      bullets: [
        'Investor Readiness Bootcamp: Perfect your pitch and land the cheque',
        'Startup Clinics: Legal, branding, and growth hacking for early-stage ventures',
        'VC & Angel Network Access: Meet the funders who can accelerate your idea',
        'Township-to-Global Case Studies: Real stories of entrepreneurs who scaled beyond borders',
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
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,131,42,0.18)_0%,transparent_70%)] pointer-events-none z-[2]"
          aria-hidden="true"
        />

        <div className="relative z-[3] mx-auto w-full max-w-[var(--pt-container)]">
          {/* Eyebrow Kicker */}
          <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-4">
            <span className="inline-block w-8 h-[2px] bg-[var(--pt-accent)]" aria-hidden="true" />
            <span>Flagship Regional Activation &bull; Sebokeng, Zone 14</span>
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

          {/* Editorial Subtitle (Direct from CMS source) */}
          <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] font-normal leading-[1.7] text-[rgba(244,240,232,0.85)] [text-wrap:pretty]">
            EmpowaYouth is not a programme, it is a national power shift. Born in the townships and scaling across the nation, it is South Africa’s most urgent and unapologetic response to systemic youth exclusion — a catalytic engine bridging township youth into the future economy through employment, enterprise, and education pathways at scale.
          </p>

          {/* Quick Specifications Strip (Glassmorphic Bar - STRICTLY NO DATES) */}
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
                <Users className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Expected Attendance
              </span>
              <strong className="text-sm font-bold text-white">10,000+ Youth</strong>
              <span className="text-xs text-[var(--pt-muted)]">2,000+ Youth Daily</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1.5 mb-1">
                <Target className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Target Audience
              </span>
              <strong className="text-sm font-bold text-white">NEET &amp; Graduates</strong>
              <span className="text-xs text-[var(--pt-muted)]">Jobseekers &amp; Founders</span>
            </div>
          </div>

          {/* Three Visible Action Paths */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#participate"
              onClick={() => setActiveFormTab('delegate')}
              className="ey-button ey-button-dark-filled inline-flex items-center justify-center gap-2"
            >
              <span>1. Register Free Delegate Pass</span>
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
      {/* 2. PROVEN TRACK RECORD / STATS STRIP (FROM CMS SOURCE)   */}
      {/* ======================================================== */}
      <section className="border-b border-[rgba(244,240,232,0.08)] bg-[#070a09] py-12 px-[var(--pt-container-pad)]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
              <span>Proven Power to Deliver &bull; Auditable National Track Record</span>
            </p>
            <span className="text-xs text-[var(--pt-muted)] tracking-wider">
              Empowering 8 Provinces &bull; Engineering Scalable, Auditable Outcomes
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            <div className="rounded-2xl border border-[rgba(244,240,232,0.08)] bg-[rgba(244,240,232,0.02)] p-6 transition-all hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                198,000<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-paper)]">
                Youth Reached
              </p>
              <p className="mt-1 text-[11px] text-[var(--pt-muted)]">
                Mobilised across 8 provinces
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
                Verified placements with vetted employers
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(244,240,232,0.08)] bg-[rgba(244,240,232,0.02)] p-6 transition-all hover:border-[var(--pt-accent)]/40 hover:-translate-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--pt-paper)]">
                150<span className="text-[var(--pt-accent)]">+</span>
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--pt-paper)]">
                Township Enterprises Funded
              </p>
              <p className="mt-1 text-[11px] text-[var(--pt-muted)]">
                Seed capital, mentorship &amp; ESD integration
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
                Sector-aligned qualifications delivered
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
              Why the Vaal? Why now? Transforming abandoned potential into a generation of skilled, employed, and entrepreneurial young South Africans.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Context, Narrative & Founder Quote (From CMS link) */}
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-[1.75] text-[#2c3834] [text-wrap:pretty]">
                In the Vaal, where unemployment sits above <strong className="text-[var(--pt-ink)] font-extrabold">41%</strong> and some communities endure joblessness exceeding <strong className="text-[var(--pt-accent)] font-extrabold">90%</strong>, we are not facing a standard challenge — we are in an economic state of emergency. EmpowaYouth exists to flip the script, transforming abandoned potential into a generation of skilled, employed, and entrepreneurial young South Africans who will drive the nation’s economic future.
              </p>

              <p className="mt-4 text-[16px] leading-[1.75] text-[#475751] [text-wrap:pretty]">
                Once a manufacturing powerhouse, the Vaal has been hit by industrial decline, disinvestment, and broken talent pipelines. But this crisis is also a once-in-a-generation opportunity. In every unemployed graduate, every unlinked artisan, and every disconnected coder lies untapped human capital capable of fuelling sector growth, driving innovation, and generating profitability.
              </p>

              {/* Founder Quote Card (Exact from CMS link) */}
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

              {/* 4 Pillars of Transformation (Exact from CMS link lines 293-304) */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Youth
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Activating their potential through real platforms, not empty promises.
                  </p>
                </div>

                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Jobs
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Placing young people into meaningful employment across sectors, industries, and regions.
                  </p>
                </div>

                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Township Enterprises
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Backing youth-led businesses with capital, mentorship, and market access to scale where it matters most.
                  </p>
                </div>

                <div className="rounded-xl border border-[rgba(11,15,14,0.1)] bg-white p-5 shadow-sm hover:border-[var(--pt-accent)]/50 transition">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                    Accredited Skills Certifications
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-[#475751] leading-relaxed">
                    Equipping unemployed youth and graduates with the tools to enter, thrive, and lead in the economy of tomorrow.
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
                  What began as a one-day jobs summit in Orange Farm has evolved into the country’s most formidable youth economic force, mobilising hundreds of thousands of young people, funding township enterprises, and delivering scalable skills pipelines.
                </p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Live On-Site Recruitment</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Direct transactions, contracts, and employment offers delivered on the ground.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Live Pitch Stages &amp; Deal Room</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Youth enterprises go head-to-head, securing venture capital, ESD funding, and market partnerships.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Sector-Aligned Skills Pipelines</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Certified qualifications that directly meet the demands of the future economy.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--pt-accent)] mt-0.5" />
                    <div>
                      <strong className="block text-sm text-white">Auditable B-BBEE &amp; ESD Returns</strong>
                      <span className="text-xs text-[var(--pt-muted)]">Verifiable socio-economic development documentation and corporate impact evidence.</span>
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
      {/* 4. THE 5-DAY PROGRAMME: FIVE DAYS. FIVE INDUSTRIES.      */}
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
                <span>02 / Programme Highlights</span>
              </p>
              <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
                <span>Five Days. Five Industries. </span>
                <span className="ey-heading-italic">One National Reset</span>
                <span>.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--pt-muted)] max-w-md">
              Sebokeng becomes South Africa’s most powerful marketplace of opportunity, directly connecting more than 10,000 youth to jobs, funding, training, and supplier networks across the five fastest-growing economic sectors.
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
                    {currentDayData.badge} &bull; Sector Activation
                  </span>
                  <span className="text-xs font-semibold text-[var(--pt-muted)]">
                    08:00 – 15:00 Daily &bull; Koinonia Bible Church, Sebokeng
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight tracking-tight text-[var(--pt-paper)]">
                  {currentDayData.sector}
                </h3>
                <p className="mt-2 text-base sm:text-lg font-semibold text-[var(--pt-accent)]">
                  {currentDayData.theme}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[var(--pt-paper)]/80">
                  {currentDayData.summary}
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
                  Key Outcomes &amp; Activities
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
                  Target Audience
                </span>
                <p className="mt-2 text-sm font-semibold text-white leading-relaxed">
                  {currentDayData.targetAudience}
                </p>

                <div className="mt-6 border-t border-[rgba(244,240,232,0.1)] pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-muted)]">
                    Live Economic Activation:
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs text-[rgba(244,240,232,0.8)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Direct on-site employment interviews &amp; CV submission</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Accredited certificate of participation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Live pitch stages, bursary pools &amp; seed capital access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--pt-accent)] shrink-0" />
                      <span>Direct networking with C-Suite executives &amp; industry mentors</span>
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
      {/* 5. 5 CORE DELIVERY PILLARS (EXACT FROM CMS LINK)         */}
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
              Where innovation meets access, and opportunity becomes tangible. Every day is a live economic activation — transactions, contracts, and employment offers delivered on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1 (CMS lines 305-307) */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Megaphone className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">01</span>
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">
                100+ Power Panels &amp; Sector Dialogues
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Engage directly with Ministers, CEOs, trailblazing Founders, and Policy Architects in high-stakes conversations that shape policy, unlock markets, and redefine the youth economy across ten critical sectors.
              </p>
            </article>

            {/* Bento Card 2 (CMS lines 308-310) */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Cpu className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">02</span>
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">
                40+ Experiential Zones
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Step into the future through interactive Demo Labs, real-time Skills Accelerators, Employment Hubs, and Startup Showcases, where innovation meets access, and opportunity becomes tangible.
              </p>
            </article>

            {/* Bento Card 3 (CMS lines 311-313) */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Building2 className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">03</span>
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">
                200+ Strategic Partners Activated
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Corporates, government, funders, and ecosystem builders deliver live opportunities, from job placements and bursaries to enterprise funding, mentorship, ESD integration, and digital upskilling.
              </p>
            </article>

            {/* Bento Card 4 (CMS lines 317-319) */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <DollarSign className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">04</span>
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">
                Pitch Stages &amp; Deal Room
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                High-growth youth enterprises go head-to-head on dedicated Pitch Stages, securing investment, incubation, and visibility from corporate ESD executives and venture funds.
              </p>
            </article>

            {/* Bento Card 5 (CMS lines 317-319) */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Briefcase className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">05</span>
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">
                Career Clinics &amp; HR Pods
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Career Clinics connect job-seeking youth with top HR leaders, recruiters, and mentors for personalised, actionable pathways to employment, CV reviews, and live hiring matches.
              </p>
            </article>

            {/* Bento Card 6 (CMS lines 314-316) */}
            <article className="group relative rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--pt-accent)]/15 border border-[var(--pt-accent)]/30 flex items-center justify-center text-[var(--pt-accent)]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <span className="text-xs font-extrabold text-[var(--pt-accent)]">06</span>
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)]">
                Live Performances &amp; Cultural Immersions
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                South Africa’s top artists, storytellers, and cultural icons come alive on stage, amplifying youth identity, creativity, and voice, transforming inspiration into activation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PRE-SUMMIT MASTERCLASS LABS (EXACT FROM CMS LINK)     */}
      {/* ======================================================== */}
      <section
        id="masterclass"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[var(--pt-ink)]"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-12">
            <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
              <span>04 / Pre-Summit Power Labs</span>
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
                  <span>Five Power Labs. </span>
                  <span className="ey-heading-italic">Five Sectors</span>
                  <span>.</span>
                </h2>
                <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-xl">
                  One Mission: Build the Workforce That Will Own the Future. These are power labs designed to plug youth directly into high-growth industries, equip them with skills that pay, and connect them to decision-makers.
                </p>
              </div>

              {/* Masterclass Specs Pill (CMS lines 338-354 - NO CALENDAR DATES) */}
              <div className="flex flex-wrap items-center gap-4 bg-[rgba(244,240,232,0.04)] border border-[rgba(244,240,232,0.1)] rounded-2xl p-4 text-xs">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Audience</span>
                  <strong className="font-bold text-white">100 Youth / Session</strong>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Time</span>
                  <strong className="font-bold text-white">10:00 – 13:00</strong>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[var(--pt-muted)]">Format</span>
                  <strong className="font-bold text-white">Hybrid (Live &amp; Stream)</strong>
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
                      POWER LAB #{mc.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] bg-[var(--pt-accent)]/10 border border-[var(--pt-accent)]/30 px-2.5 py-1 rounded">
                      Specialized Cohort
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-1">
                    {mc.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--pt-accent)] mb-3">
                    {mc.sector}
                  </p>
                  <p className="text-xs italic leading-relaxed text-[var(--pt-paper)]/75 mb-4 border-l-2 border-[var(--pt-accent)] pl-3">
                    &ldquo;{mc.powerStatement}&rdquo;
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
      {/* 7. LEADERSHIP & KEYNOTE VOICES (SIMPHIWE MASIZA & ACCORDION) */}
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
              <span>Architect of the </span>
              <span className="ey-heading-italic">Movement</span>
              <span>.</span>
            </h2>
            <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-xl">
              Executive leadership guiding Vaal EmpowaYouth Week alongside distinguished keynote voices who champion South Africa’s youth economy.
            </p>
          </div>

          {/* Simphiwe Masiza Executive Card (Exact bio from CMS link lines 545-548) */}
          <div className="mb-16 max-w-4xl">
            <article className="group relative rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-b from-[#131b18] to-[var(--pt-ink)] p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-start shadow-2xl transition-all duration-300 hover:border-[var(--pt-accent)]/50">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-[var(--pt-accent)]/70 shadow-lg">
                <img
                  src="/team/simphiwe-masiza.jpg"
                  alt="Simphiwe Masiza"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--pt-accent)]">
                  Founder &amp; Executive Producer
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[var(--pt-paper)] mt-1.5">
                  Simphiwe Masiza
                </h3>
                <p className="text-xs text-[var(--pt-accent)] mb-4 font-semibold">
                  Founder &amp; CEO, Empowaworx &bull; The Speakers Firm
                </p>
                <p className="text-sm leading-relaxed text-[var(--pt-paper)]/85 mb-3">
                  Simphiwe Masiza is the visionary Founder and CEO of Empowaworx and The Speakers Firm — two powerhouse brands at the forefront of South Africa’s integrated marketing, reputation leadership, and impact ecosystem. As the architect of groundbreaking platforms like EmpowaYouth, EmpowaWomen, and EmpowaEntrepreneurs, he is redefining how nations mobilize people, capital, and ideas for lasting transformation.
                </p>
                <p className="text-sm leading-relaxed text-[var(--pt-muted)]">
                  A sought-after international keynote speaker, author, and trailblazing entrepreneur, Simphiwe is known for turning vision into velocity. Armed with academic excellence from WITS and GIBS, his platforms fuel opportunity, unlock capital, and engineer inclusive economic growth.
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
      {/* 8. PARTNERSHIP & SPONSORSHIP (EXACT TEXT FROM CMS LINK)  */}
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
              This is not an invitation to sponsor an event; it is a catalytic engine of national transformation. A high-impact economic activation designed to bridge township youth into the future economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {/* Value Prop 1 (Exact from CMS line 321) */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                01
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Strategic ESG, CSI &amp; ESD Impact
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Deliver measurable, mission-aligned transformation where it matters most, in youth employment, enterprise development, and inclusive economic growth. This is not a tick-box exercise. It is high-return, high-visibility impact that directly advances your Environmental, Social &amp; Governance (ESG) priorities, fulfils your Corporate Social Investment (CSI) objectives, and maximises Enterprise and Supplier Development (ESD) scorecard contributions.
              </p>
            </article>

            {/* Value Prop 2 (Exact from CMS line 323) */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                02
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Build the Workforce of the Future
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                From AI engineers and digital storytellers to skilled artisans and data analysts, this is where tomorrow’s workforce is discovered, shaped, and deployed at scale. Be first in line to access, mentor, and pipeline exceptional young talent into your organisation and sector, ensuring you’re not just meeting future skills demand, but owning the competitive edge in the talent economy.
              </p>
            </article>

            {/* Value Prop 3 (Exact from CMS line 326) */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                03
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Unrivalled Brand Reach &amp; Stakeholder Engagement
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Position your organisation in front of national ministers, policy architects, investors, funders, and a dynamic youth market ready to engage. Across every touchpoint — media, government, civil society, and community, your brand leads the conversation.
              </p>
            </article>

            {/* Value Prop 4 (Exact from CMS line 329) */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                04
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Purpose-Led Transformation with Legacy Returns
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                This is not charity. This is not compliance. This is catalytic transformation with your brand as the architect, powering real lives, shifting economic systems, and leaving a legacy built on scale, substance, and national relevance.
              </p>
            </article>
          </div>

          {/* Marquee of Current & Past Strategic Partners */}
          <div className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.01)] p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--pt-accent)]" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-muted)]">
                Trusted by 200+ Strategic Partners Across South Africa
              </p>
              <span className="w-8 h-px bg-[var(--pt-accent)]" />
            </div>
            <PartnerLogoMarquee />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. BROADCAST & NATIONAL MEDIA AMPLIFICATION (FROM CMS)   */}
      {/* ======================================================== */}
      <section className="py-14 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[#070a09]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-1">
                National Media Spotlight
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[var(--pt-paper)]">
                Covered Across South Africa’s Premier News &amp; Radio Networks
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
              <span className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2">JOZI FM</span>
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
              Whether your mission is to secure personal employment, hire exceptional young talent, or deploy high-impact ESD &amp; CSI funding, register your intention below.
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
              1. Delegate Registration
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
              2. Partner Registration
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
              3. Sponsorship &amp; Funding
            </button>
          </div>

          {/* TAB 1: YOUTH DELEGATE REGISTRATION (Exact fields from CMS lines 84-215) */}
          {activeFormTab === 'delegate' && (
            <div className="rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-7 sm:p-10 shadow-2xl">
              {delegateSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Delegate Registration Received!</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you, {delegateForm.firstName || 'Delegate'}. Your free pass for Vaal EmpowaYouth Week has been recorded. Our team will contact you with admission confirmation, transport pickup points, and schedule updates.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDelegateSubmitted(false)}
                    className="mt-6 rounded-lg border border-white/20 px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-white/10 cursor-pointer"
                  >
                    Submit Another Registration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDelegateSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold uppercase text-white">Delegate Registration</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Free admission for NEET youth, unemployed graduates, job seekers, entrepreneurs, and matriculants.
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
                        Contact Number(s) *
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
                        Address [Township of Residence] *
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
                        Gender *
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

                  {/* Motivation field (Direct from CMS line 103) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                      In 50 words tell us why you want to attend EmpowaYouth Week *
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Tell us about your background, career ambition, or business goals..."
                      value={delegateForm.motivation}
                      onChange={(e) => setDelegateForm({ ...delegateForm, motivation: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                    />
                  </div>

                  {/* Industry Interests (Direct from CMS line 129) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-2">
                      Which industries are you most interested in? * (Choose up to 3)
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

                  {/* Entrepreneurship Questions (Direct from CMS lines 165-198) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Are you an entrepreneur? *
                      </label>
                      <select
                        value={delegateForm.isEntrepreneur}
                        onChange={(e) => setDelegateForm({ ...delegateForm, isEntrepreneur: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Is your company registered? *
                      </label>
                      <select
                        value={delegateForm.isRegistered}
                        onChange={(e) => setDelegateForm({ ...delegateForm, isRegistered: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#141b17] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                      >
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="ey-button ey-button-dark-filled w-full text-center py-4 flex items-center justify-center gap-2"
                  >
                    <span>Submit Free Delegate Registration</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: CORPORATE PARTNER REGISTRATION */}
          {activeFormTab === 'partner' && (
            <div className="rounded-3xl border border-[rgba(244,240,232,0.15)] bg-gradient-to-b from-[#111815] to-[var(--pt-ink)] p-7 sm:p-10 shadow-2xl">
              {partnerSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white">Partner Registration Received!</h3>
                  <p className="mt-3 text-sm text-[var(--pt-muted)] max-w-md mx-auto">
                    Thank you, {partnerForm.contactName || 'Partner'}. Your partnership expression has been received. Our coordination team will reach out within 24 hours with the exhibition floorplan, employer onboarding pack, and sector options.
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
                    <h3 className="text-xl font-extrabold uppercase text-white">Partnership Registration</h3>
                    <p className="text-xs text-[var(--pt-muted)] mt-1">
                      Join South Africa’s leading employers, bold funders, and ecosystem builders to turn vision into measurable economic change.
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
                        Key Contact Person *
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
                        Contact Phone *
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
                    <span>Submit Partner Registration</span>
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
                    Thank you, {sponsorForm.contactName || 'Partner'}. Your enquiry has been received by Executive Producer Simphiwe Masiza and the EmpowaYouth sponsorship desk. The official B-BBEE ESD, CSI, and branding tiers pack will be delivered to your inbox shortly.
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
                      Direct capital, enterprise supplier development, and CSI contributions into verifiable township transformation.
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
      {/* 11. DIRECT COORDINATION DESK & VENUE DIRECTORY (FROM CMS) */}
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
                      Event Operations &bull; Media &amp; Partnerships
                    </span>
                    <strong className="text-white text-sm block">Empowaworx Team</strong>
                    <div className="mt-2.5 space-y-1.5 text-[rgba(244,240,232,0.75)]">
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="tel:+27114827256" className="hover:text-white transition">+27 (0) 11 482 7256</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="tel:+27728221840" className="hover:text-white transition">+27 72 822 1840</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="mailto:info@empowayouth.co.za" className="hover:text-white transition">info@empowayouth.co.za</a>
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
                        <span>364 Pine Avenue, Ferndale, Randburg, 2196</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-[var(--pt-accent)] shrink-0" />
                        <a href="mailto:info@empowaworx.co.za" className="hover:text-white transition">info@empowaworx.co.za</a>
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
                  href="mailto:info@empowayouth.co.za?subject=Vaal%20EmpowaYouth%20Week%20Sponsorship%20Enquiry"
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
