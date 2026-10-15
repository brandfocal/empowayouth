'use client';

import { useState } from 'react';
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
  Quote,
  Play,
  Calendar,
} from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';
import { PartnerLogoMarquee } from '@/components/PartnerLogoMarquee';
import { PartnershipForm } from '@/components/PartnershipForm';
import { SponsorshipForm } from '@/components/SponsorshipForm';
import { PastSpeakersSection } from '@/components/PastSpeakersSection';

export default function VaalEmpowaYouthWeekPage() {
  useEmpowaYouthScrollAnimations();

  // Video playback state
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Interactive tab states
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeFormTab, setActiveFormTab] = useState<'delegate' | 'partner' | 'sponsor'>('delegate');

  // Form submission feedback states
  const [delegateSubmitted, setDelegateSubmitted] = useState(false);

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

  const handleDelegateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDelegateSubmitted(true);
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

  // 5-Day Programme Data with authentic youth images from CMS
  const programmeDays = [
    {
      day: 1,
      badge: 'Day 01',
      date: 'Mon 3 May 2027',
      time: '08:00 – 15:00',
      sector: 'Health, Wellness & The Care Economy',
      theme: 'Healing the Economy: Careers in Care, Health & Humanity',
      icon: HeartPulse,
      tag: 'Care Economy',
      image: '/images/youth/feature_image_3.jpg',
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
      date: 'Tue 4 May 2027',
      time: '08:00 – 15:00',
      sector: 'AI, Digital Economy & Deep Tech',
      theme: 'Code the Future: AI, Innovation & the 4IR Workforce',
      icon: Cpu,
      tag: 'Digital & AI',
      image: '/images/youth/feature_image_10-1.jpg',
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
      date: 'Wed 5 May 2027',
      time: '08:00 – 15:00',
      sector: 'Creative & Film Economy',
      theme: 'Frame the Future: Youth in Film, Content & Storytelling',
      icon: Film,
      tag: 'Creative IP',
      image: '/images/youth/feature_image_17.jpg',
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
      date: 'Thu 6 May 2027',
      time: '08:00 – 15:00',
      sector: 'Green Economy, Sustainability & AgriTech',
      theme: 'Regenerate: Green Jobs, Agribusiness & the Circular Economy',
      icon: Leaf,
      tag: 'Green Economy',
      image: '/images/youth/DSC_8709.jpg',
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
      date: 'Fri 7 May 2027',
      time: '08:00 – 15:00',
      sector: 'Entrepreneurship, Funding & Innovation Ecosystems',
      theme: 'Fund the Future: From Hustle to High-Growth Startups',
      icon: DollarSign,
      tag: 'Deal Room & Funding',
      image: '/images/youth/hundred-thousand.jpg',
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

  // Real Youth Beneficiaries & Testimonial Videos from @empowayouth YouTube channel
  const testimonialVideos = [
    {
      name: 'Winnie Lamane',
      role: "Owner, 'The Shack' Meat & Grill",
      township: 'Sebokeng, Zone 14',
      youtubeId: 'jlcnWfviNWw',
      title: "Owner of 'The Shack' Meat & Grill, Winnie Lamane - EmpowaEntrepreneurs",
    },
    {
      name: 'Amanda Ncoza',
      role: 'Founder, Amanda Bakery',
      township: 'Drieziek Extension 2, Orange Farm',
      youtubeId: '-h_Uie5ntjQ',
      title: 'EYW week beneficiary Amanda Bakery',
    },
    {
      name: 'Kelebogile Koji',
      role: 'Junior Cloud & AI Practitioner',
      township: 'Evaton West, Vaal',
      youtubeId: 'L4DwCepQtC4',
      title: 'EYW Beneficiary Kelebogile Koji',
    },
    {
      name: 'Bonisiwe Molakeng',
      role: 'Founder, Kasi Flavour',
      township: 'Orange Farm, Extension 4',
      youtubeId: '9Z17llSEZFc',
      title: 'EYW Beneficiary Bonisiwe Molakeng - Kasi Flavour',
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
      title: 'The Creative Economy & Film',
      sector: 'Frame the Future: Youth in Film, Content & Storytelling',
      powerStatement:
        'Whoever owns the story owns the culture. Whoever owns the IP owns the wealth. Turning African content into commercial capital.',
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
      title: 'Township Entrepreneurship & Innovation',
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

  const currentDayData = programmeDays[activeDay - 1];

  return (
    <main className="min-h-screen bg-[var(--pt-ink)] text-[var(--pt-paper)] selection:bg-[var(--pt-accent)] selection:text-white">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (SPLIT EDITORIAL WITH VIBRANT YOUTH HERO) */}
      {/* ======================================================== */}
      <section
        id="hero"
        className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[var(--pt-ink)]"
      >
        {/* Hero Background Image with Editorial Dark Overlay */}
        <img
          src="/images/youth/IMG_2727.jpg"
          alt="Young people gathered at EmpowaYouth Week marquee"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(11,15,14,0.72)_0%,rgba(11,15,14,0.86)_40%,rgba(11,15,14,0.96)_80%,rgba(11,15,14,1)_100%)]"
          aria-hidden="true"
        />

        {/* Ambient Warm Underglow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,131,42,0.25)_0%,transparent_70%)] pointer-events-none z-[2]"
          aria-hidden="true"
        />

        <div className="relative z-[3] mx-auto w-full max-w-[var(--pt-container)]">
          <div className="max-w-4xl">
            {/* Eyebrow Kicker & Date Badge */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
                <span className="inline-block w-8 h-[2px] bg-[var(--pt-accent)]" aria-hidden="true" />
                <span>Next Activation &bull; 3–7 May 2027</span>
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(232,93,4,0.15)] border border-[rgba(232,93,4,0.35)] text-[11px] font-bold uppercase tracking-wider text-[var(--pt-accent)]">
                <MapPin size={12} />
                <span>Koinonia Bible Church, Sebokeng, Zone 14</span>
              </span>
            </div>

            {/* Main Display Headline */}
            <h1
              id="vaal-hero-title"
              className="text-[clamp(2.5rem,6.2vw,5.6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.045em] text-[var(--pt-paper)] [text-wrap:balance]"
            >
              <span>Vaal EmpowaYouth </span>
              <span className="ey-heading-italic">Week</span>
              <span>.</span>
              <span className="block text-white/90 text-[clamp(1.1rem,2.2vw,1.9rem)] font-bold tracking-tight mt-3 sm:mt-4">
                Powering South Africa’s Youth Economy.
              </span>
            </h1>

            {/* Editorial Subtitle (Direct from CMS source) */}
            <p className="mt-6 text-[16px] sm:text-[18px] font-normal leading-[1.7] text-[rgba(244,240,232,0.85)] [text-wrap:pretty] max-w-2xl">
              EmpowaYouth is not a programme, it is a national power shift. Born in the townships and scaling across the nation, it is South Africa’s most urgent and unapologetic response to systemic youth exclusion — a catalytic engine bridging township youth into the future economy through employment, enterprise, and education pathways at scale.
            </p>

            {/* Quick Specifications Strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 sm:gap-4 rounded-2xl border border-[rgba(244,240,232,0.12)] bg-[rgba(11,15,14,0.7)] p-4 sm:p-5 backdrop-blur-md">
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1 mb-1">
                  <Calendar className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Dates
                </span>
                <strong className="text-xs sm:text-sm font-bold text-white">3–7 May 2027</strong>
                <span className="text-[11px] text-[var(--pt-accent)] font-medium">5 Action-Packed Days</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1 mb-1">
                  <Clock className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Daily Times
                </span>
                <strong className="text-xs sm:text-sm font-bold text-white">08:00 – 15:00 Daily</strong>
                <span className="text-[11px] text-[var(--pt-muted)]">Morning &amp; Afternoon</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1 mb-1">
                  <MapPin className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Venue
                </span>
                <strong className="text-xs sm:text-sm font-bold text-white">Koinonia Bible Church</strong>
                <span className="text-[11px] text-[var(--pt-muted)]">Sebokeng, Zone 14</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1 mb-1">
                  <Users className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Expected Turnout
                </span>
                <strong className="text-xs sm:text-sm font-bold text-white">10,000+ Youth</strong>
                <span className="text-[11px] text-[var(--pt-muted)]">2,000+ Youth Daily</span>
              </div>
              <div className="flex flex-col hidden lg:flex">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] flex items-center gap-1 mb-1">
                  <Target className="h-3.5 w-3.5 text-[var(--pt-accent)]" /> Target Audience
                </span>
                <strong className="text-xs sm:text-sm font-bold text-white">NEET &amp; Graduates</strong>
                <span className="text-[11px] text-[var(--pt-muted)]">Jobseekers &amp; Founders</span>
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
              <span>Proven Power to Deliver</span>
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

            {/* Right Column: Visual Storytelling of Real Youth Agency */}
            <div className="lg:col-span-5 space-y-6">
              {/* Photo 1: Youth Triumph & Agency */}
              <div className="group relative rounded-3xl overflow-hidden border border-[rgba(11,15,14,0.12)] shadow-xl bg-black">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/youth/feature_image_23.jpg"
                    alt="Young woman triumphant at EmpowaYouth summit with fists raised"
                    className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                    Youth Agency &bull; Transforming Ambition
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-snug">
                    Overcoming economic exclusion: Young South Africans claiming their future with dignity and power.
                  </p>
                </div>
              </div>

              {/* Photo 2: Mentorship & Executive Access */}
              <div className="group relative rounded-3xl overflow-hidden border border-[rgba(11,15,14,0.12)] shadow-xl bg-black">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src="/images/youth/DSC_5402.jpg"
                    alt="Youth delegate taking selfie with executive mentor"
                    className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                    Direct Access &bull; Bridging Youth into Industry
                  </span>
                  <p className="text-xs sm:text-sm font-bold leading-snug">
                    Connecting township talent directly with CEOs, leaders, and decision makers who hold the keys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. 5-DAY SECTOR BREAKDOWN (INTERACTIVE TABS WITH YOUTH)   */}
      {/* ======================================================== */}
      <section
        id="programme"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[#070a09]"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
                <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
                <span>02 / The 5-Day Framework</span>
              </p>
              <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance]">
                <span>5 Days. 5 Industries. </span>
                <span className="ey-heading-italic">Infinite Trajectories</span>
                <span>.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[var(--pt-muted)] md:max-w-md">
              Each day focuses on a distinct economic sector, connecting 2,000+ youth daily with accredited skills, live hiring partners, and venture capital.
            </p>
          </div>

          {/* Interactive Day Selection Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
            {programmeDays.map((item) => {
              const isSelected = activeDay === item.day;

              return (
                <button
                  key={item.day}
                  type="button"
                  onClick={() => setActiveDay(item.day)}
                  className={`group relative flex flex-col p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[var(--pt-accent)] bg-gradient-to-b from-[#1b2521] to-[#0f1614] shadow-lg shadow-[rgba(232,131,42,0.15)] -translate-y-1'
                      : 'border-[rgba(244,240,232,0.08)] bg-[rgba(244,240,232,0.02)] hover:border-[rgba(244,240,232,0.2)] hover:bg-[rgba(244,240,232,0.04)]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-[11px] font-extrabold uppercase tracking-wider ${
                        isSelected ? 'text-[var(--pt-accent)]' : 'text-[var(--pt-muted)]'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-[10px] text-white/70 font-semibold bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                      {item.date}
                    </span>
                  </div>
                  <strong className="text-xs sm:text-sm font-bold text-white line-clamp-2 uppercase">
                    {item.sector}
                  </strong>
                  <span className="mt-2 text-[10px] text-[var(--pt-muted)] font-medium">
                    {item.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Day Detail Display Card with Matching Youth Media */}
          <div className="rounded-3xl border border-[rgba(244,240,232,0.12)] bg-gradient-to-b from-[#101715] to-[#090d0c] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Sector Narrative, Outcomes & Power Statement */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                  <span className="rounded-full bg-[var(--pt-accent)]/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--pt-accent)] border border-[var(--pt-accent)]/30">
                    {currentDayData.badge} &bull; {currentDayData.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-semibold text-white/90">
                    <Calendar className="h-3 w-3 text-[var(--pt-accent)]" />
                    <span>{currentDayData.date}</span>
                    <span className="text-white/40">•</span>
                    <Clock className="h-3 w-3 text-[var(--pt-accent)]" />
                    <span>{currentDayData.time}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-semibold text-white/90">
                    <MapPin className="h-3 w-3 text-[var(--pt-accent)]" />
                    <span>Koinonia Bible Church, Sebokeng</span>
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

              {/* Right Column: Youth Visual & Fast Track Card */}
              <div className="lg:col-span-5 rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.03)] p-6 sm:p-7">
                {/* Sector Youth Photo */}
                <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden mb-6 border border-[rgba(244,240,232,0.12)]">
                  <img
                    src={currentDayData.image}
                    alt={currentDayData.sector}
                    className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--pt-ink)] via-black/25 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-md bg-[var(--pt-accent)] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                      {currentDayData.tag}
                    </span>
                  </div>
                </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. 5 CORE DELIVERY PILLARS WITH REAL GROUND ATMOSPHERE   */}
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

          {/* Visual Showcase Banners: Live Festival Immersion & Live Pitch Deal Room */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-[rgba(244,240,232,0.12)] bg-black shadow-2xl">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/images/youth/IMG_2727.jpg"
                  alt="Over 10,000 young South Africans inside the massive EmpowaYouth marquee"
                  className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pt-ink)] via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-5 inset-x-5 p-5 rounded-2xl bg-[rgba(11,15,14,0.85)] border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                  10,000+ Young Leaders &bull; Live Festival Marquee
                </span>
                <p className="text-sm sm:text-base font-extrabold text-white">
                  Sebokeng arena activated with live recruitment pods, industry innovation zones, and executive dialogues.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-[rgba(244,240,232,0.12)] bg-black shadow-2xl">
              <div className="aspect-[16/9] lg:aspect-auto lg:h-full w-full overflow-hidden">
                <img
                  src="/images/youth/hundred-thousand.jpg"
                  alt="Township youth entrepreneur receiving R100,000 Bizniz In A Box cheque on stage"
                  className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pt-ink)] via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-5 inset-x-5 p-5 rounded-2xl bg-[rgba(11,15,14,0.85)] border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--pt-accent)] block mb-1">
                  Live Pitch Stages &bull; Real Enterprise Capital
                </span>
                <p className="text-sm sm:text-base font-extrabold text-white">
                  Over R100k in seed funding, tooling, and supply chain contracts awarded live to youth founders on stage.
                </p>
              </div>
            </div>
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
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
              <span>Deep-Dive Sector </span>
              <span className="ey-heading-italic">Masterclasses</span>
              <span>.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--pt-muted)] max-w-2xl">
              Five high-impact intensive masterclass tracks delivering accredited certifications, practical enterprise tools, and direct employment pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterclasses.map((lab) => (
              <div
                key={lab.number}
                className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-7 flex flex-col justify-between transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-[var(--pt-accent)]">
                      POWER LAB {lab.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-2">
                    {lab.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--pt-accent)] mb-4">
                    {lab.sector}
                  </p>
                  <p className="text-xs italic leading-relaxed text-[var(--pt-muted)] mb-5">
                    &ldquo;{lab.powerStatement}&rdquo;
                  </p>

                  <ul className="space-y-2.5 border-t border-[rgba(244,240,232,0.08)] pt-4">
                    {lab.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-[var(--pt-paper)]/80 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--pt-accent)] mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. LEADERSHIP & KEYNOTE VOICES (SIMPHIWE MASIZA & PAST SPEAKERS) */}
      {/* ======================================================== */}
      <section
        id="leadership"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[#070a09]"
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
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7b. PREVIOUS SPEAKERS FULL-WIDTH AUTO-MARQUEE */}
      {/* ======================================================== */}
      <PastSpeakersSection
        id="vaal-past-speakers"
        kicker="Previous Speakers"
        title={
          <>
            <span>Voices That </span>
            <span className="ey-heading-italic">Moved</span>
            <span> The Room.</span>
          </>
        }
        subtitle="Over 500 high-impact voices have powered the EmpowaYouth movement across South Africa — bringing their insights, networks, and leadership directly into township communities."
      />

      {/* ======================================================== */}
      {/* 8. VOICES OF YOUTH TRANSFORMATION (AUTHENTIC BENEFICIARIES)*/}
      {/* ======================================================== */}
      <section
        id="voices-of-youth"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-gradient-to-b from-[#090d0c] to-[#0f1513]"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
                <span className="inline-block w-6 h-[2px] bg-[var(--pt-accent)]" />
                <span>06 / Voices of Youth Transformation</span>
              </p>
              <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance]">
                <span>From The Ground: </span>
                <span className="ey-heading-italic">Real Youth Shifts</span>
                <span>.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[var(--pt-muted)] md:max-w-md">
              Meet the township entrepreneurs, artisans, and graduates whose livelihoods and enterprises were transformed by EmpowaYouth platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonialVideos.map((video) => (
              <article
                key={video.youtubeId}
                className="group relative rounded-2xl border border-[rgba(244,240,232,0.12)] bg-[rgba(244,240,232,0.02)] overflow-hidden transition-all duration-300 hover:border-[var(--pt-accent)]/50 hover:shadow-2xl"
              >
                {/* YouTube Video Player Embed / High-Performance Façade */}
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  {playingVideoId === video.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingVideoId(video.youtubeId)}
                      className="group/btn relative w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pt-accent)] block"
                      aria-label={`Play testimonial video of ${video.name}`}
                    >
                      {/* High-res poster thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/btn:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover/btn:from-black/70 transition-colors" />

                      {/* Centered Glowing Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[var(--pt-accent)] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-115">
                          <Play size={22} className="fill-current ml-1" />
                        </div>
                      </div>

                      {/* Video Tag Indicator */}
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/85 text-[10px] font-bold uppercase tracking-wider text-[var(--pt-paper)] border border-white/10">
                        Watch Story
                      </span>
                    </button>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-semibold text-[var(--pt-accent)] uppercase tracking-wider block mb-1">
                    {video.township}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold uppercase text-[var(--pt-paper)]">
                    {video.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(244,240,232,0.75)] font-medium mt-0.5">
                    {video.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. WHY PARTNER & SPONSOR (B-BBEE, ESG, ESD VALUE PROPS) */}
      {/* ======================================================== */}
      <section
        id="partner"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] border-b border-[rgba(244,240,232,0.08)] bg-[var(--pt-ink)]"
      >
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-3">
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
              <span>07 / Strategic Partner Proposition</span>
              <span className="w-5 h-[2px] bg-[var(--pt-accent)]" />
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)]">
              <span>Why South Africa’s </span>
              <span className="ey-heading-italic">Boldest Brands</span>
              <span> Partner.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--pt-muted)]">
              The national rise of EmpowaYouth is not coincidence, it’s corporate courage in action. Transform ESG, CSI, and ESD compliance into measurable, auditable economic dividends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Value Prop 1 (Exact from CMS line 326) */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                01
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Strategic ESG, CSI &amp; ESD Impact
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Directly contribute to high-priority national outcomes in youth employment, township enterprise growth, and skills transformation, all backed by auditable data and compliance documentation.
              </p>
            </article>

            {/* Value Prop 2 (Exact from CMS line 327) */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                02
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Build the Workforce of Tomorrow
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Secure early access to ambitious, pre-screened, and agile youth talent across priority sectors like AI, health tech, logistics, renewable energy, and creative digital industries.
              </p>
            </article>

            {/* Value Prop 3 (Exact from CMS line 328) */}
            <article className="rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-8 transition-all hover:border-[var(--pt-accent)]/50 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[var(--pt-accent)]/20 text-[var(--pt-accent)] flex items-center justify-center font-extrabold mb-5 border border-[var(--pt-accent)]/30">
                03
              </div>
              <h3 className="text-xl font-extrabold uppercase text-[var(--pt-paper)] mb-3">
                Unrivalled Brand &amp; Market Reach
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--pt-muted)]">
                Position your organisation in front of 10,000+ live attendees, 2,000+ daily decision-makers, and millions across multi-channel national broadcast and digital coverage.
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
      {/* 10. BROADCAST & NATIONAL MEDIA AMPLIFICATION (FROM CMS)  */}
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
      {/* 11. INTERACTIVE ACTION HUB: PARTICIPATE / PARTNER / FUND */}
      {/* ======================================================== */}
      <section
        id="participate"
        className="py-20 sm:py-28 px-[var(--pt-container-pad)] bg-[#090d0c] border-b border-[rgba(244,240,232,0.08)]"
      >
        <div className="mx-auto max-w-5xl">
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
          <div className="flex rounded-2xl border border-[rgba(244,240,232,0.12)] bg-[rgba(244,240,232,0.04)] p-1.5 mb-10">
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

          {/* Forms Centered Container */}
          <div className="max-w-3xl mx-auto rounded-3xl border border-[rgba(244,240,232,0.12)] bg-[#101715] p-6 sm:p-10 shadow-2xl">
            {/* TAB 1: YOUTH DELEGATE FORM (EXACT FIELDS FROM CMS LINK) */}
              {activeFormTab === 'delegate' && (
                <div>
                  <div className="mb-6">
                    <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[rgba(232,93,4,0.12)] border border-[rgba(232,93,4,0.3)] text-[11px] font-semibold text-[var(--pt-accent)] mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>3–7 May 2027</span>
                      <span className="text-white/30">•</span>
                      <Clock className="h-3.5 w-3.5" />
                      <span>08:00–15:00 daily</span>
                      <span className="text-white/30">•</span>
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="text-white/90">Koinonia Bible Church, Sebokeng, Zone 14</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[var(--pt-paper)]">
                      Reserve Your Free Youth Delegate Seat
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--pt-muted)] mt-1">
                      100% Free entry &bull; 3–7 May 2027 (08:00–15:00 daily). Fill out your details below to secure your seat at the Koinonia Bible Church, Sebokeng, Zone 14.
                    </p>
                  </div>

                  {delegateSubmitted ? (
                    <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-8 text-center">
                      <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 mb-3" />
                      <h4 className="text-xl font-extrabold text-white uppercase">
                        Seat Reserved Successfully!
                      </h4>
                      <p className="mt-2 text-sm text-[rgba(244,240,232,0.85)] max-w-md mx-auto">
                        Welcome, {delegateForm.firstName || 'Delegate'}. Your registration for Vaal EmpowaYouth Week (3–7 May 2027, 08:00–15:00 daily at Koinonia Bible Church, Sebokeng, Zone 14) is confirmed. Your digital accreditation and daily schedule have been sent to {delegateForm.email || 'your email'}.
                      </p>
                      <button
                        type="button"
                        onClick={() => setDelegateSubmitted(false)}
                        className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-[var(--pt-accent)] underline cursor-pointer"
                      >
                        Register another delegate
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleDelegateSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={delegateForm.firstName}
                            onChange={(e) => setDelegateForm({ ...delegateForm, firstName: e.target.value })}
                            placeholder="e.g. Lerato"
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={delegateForm.lastName}
                            onChange={(e) => setDelegateForm({ ...delegateForm, lastName: e.target.value })}
                            placeholder="e.g. Molefe"
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Age *
                          </label>
                          <input
                            type="number"
                            min="15"
                            max="35"
                            required
                            value={delegateForm.age}
                            onChange={(e) => setDelegateForm({ ...delegateForm, age: e.target.value })}
                            placeholder="18 - 34"
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Township of Residence *
                          </label>
                          <input
                            type="text"
                            required
                            value={delegateForm.township}
                            onChange={(e) => setDelegateForm({ ...delegateForm, township: e.target.value })}
                            placeholder="e.g. Sebokeng Zone 14, Sharpeville, Evaton, Orange Farm"
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={delegateForm.email}
                            onChange={(e) => setDelegateForm({ ...delegateForm, email: e.target.value })}
                            placeholder="lerato@gmail.com"
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={delegateForm.phone}
                            onChange={(e) => setDelegateForm({ ...delegateForm, phone: e.target.value })}
                            placeholder="082 123 4567"
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Gender *
                          </label>
                          <select
                            value={delegateForm.gender}
                            onChange={(e) => setDelegateForm({ ...delegateForm, gender: e.target.value })}
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[#141d1a] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                          >
                            <option value="FEMALE">Female</option>
                            <option value="MALE">Male</option>
                            <option value="NON_BINARY">Non-Binary / Prefer not to say</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Are you an entrepreneur? *
                          </label>
                          <select
                            value={delegateForm.isEntrepreneur}
                            onChange={(e) => setDelegateForm({ ...delegateForm, isEntrepreneur: e.target.value })}
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[#141d1a] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                          >
                            <option value="NO">No, seeking jobs/skills</option>
                            <option value="YES">Yes, running a venture</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                            Is your company registered? *
                          </label>
                          <select
                            value={delegateForm.isRegistered}
                            onChange={(e) => setDelegateForm({ ...delegateForm, isRegistered: e.target.value })}
                            className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[#141d1a] px-4 py-3 text-sm text-white focus:border-[var(--pt-accent)] focus:outline-none"
                          >
                            <option value="NO">Not Registered / N/A</option>
                            <option value="YES">Yes, CIPC Registered</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                          Which industry tracks interest you? (Select up to 3) *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {[
                            'Health, Wellness & The Care Economy',
                            'AI, Tech & the Digital Economy',
                            'Creative & Film Economy',
                            'Green Economy, Sustainability & AgriTech',
                            'Township Entrepreneurship & Innovation',
                          ].map((ind) => {
                            const checked = delegateForm.industries.includes(ind);
                            return (
                              <button
                                key={ind}
                                type="button"
                                onClick={() => toggleIndustry(ind)}
                                className={`flex items-center gap-2 p-3 rounded-xl border text-left cursor-pointer transition ${
                                  checked
                                    ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)]/15 text-white'
                                    : 'border-white/10 bg-white/5 text-[var(--pt-muted)] hover:text-white'
                                }`}
                              >
                                <span
                                  className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                                    checked
                                      ? 'border-[var(--pt-accent)] bg-[var(--pt-accent)] text-white'
                                      : 'border-white/30'
                                  }`}
                                >
                                  {checked ? '✓' : ''}
                                </span>
                                <span>{ind}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--pt-muted)] mb-2">
                          Your 50-word motivation: Why do you want to attend? *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={delegateForm.motivation}
                          onChange={(e) => setDelegateForm({ ...delegateForm, motivation: e.target.value })}
                          placeholder="Tell us what you hope to achieve, learn, or pitch at Vaal EmpowaYouth Week..."
                          className="w-full rounded-xl border border-[rgba(244,240,232,0.15)] bg-[rgba(244,240,232,0.03)] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[var(--pt-accent)] focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="ey-button ey-button-dark-filled w-full justify-center text-center cursor-pointer"
                      >
                        <span>Confirm Free Delegate Registration</span>
                        <ArrowRight className="h-4 w-4 ml-2 inline" />
                      </button>
                      <p className="text-[11px] text-center text-[var(--pt-muted)]">
                        Zero registration fee &bull; 100% Subsidised by Strategic Corporate Partners &bull; Strict capacity controls apply
                      </p>
                    </form>
                  )}
                </div>
              )}

              {/* TAB 2: PARTNERSHIP CONSULTATION FORM (MAPPED TO GRAVITY FORMS ID: 48) */}
              {activeFormTab === 'partner' && (
                <PartnershipForm
                  idPrefix="vaal-partner"
                  showHeader={true}
                  badge="Co-Author the Future"
                  title="Initiate an Employer & Ecosystem Partnership"
                  subtitle="This is the official B2B consultation request structured to match your organization with the right strategic mandate and intervention pathway for Vaal EmpowaYouth Week."
                  defaultIntervention="EmpowaYouth Summits National or Provincial"
                />
              )}

              {/* TAB 3: SPONSORSHIP & FUNDING FORM (MAPPED TO GRAVITY FORMS ID: 49) */}
              {activeFormTab === 'sponsor' && (
                <SponsorshipForm
                  idPrefix="vaal-sponsor"
                  showHeader={true}
                  badge="Strategic Mandate Alignment"
                  title="Sponsorship & B-BBEE ESD Investment"
                  subtitle="Power transformative socio-economic returns. Request the official Sponsorship & B-BBEE Scorecard Information Pack and structure high-impact investment."
                />
              )}
            </div>
          </div>
      </section>

      {/* ======================================================== */}
      {/* 12. DIRECT COORDINATION DESK & CONTACT DETAILS (FROM CMS) */}
      {/* ======================================================== */}
      <section className="py-20 px-[var(--pt-container-pad)] bg-[#070a09] border-b border-[rgba(244,240,232,0.08)]">
        <div className="mx-auto max-w-[var(--pt-container)]">
          <div className="rounded-3xl border border-[rgba(244,240,232,0.12)] bg-gradient-to-br from-[#121917] to-[#0a0f0d] p-8 sm:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--pt-accent)] mb-2">
                  Official Programme Secretariat
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[var(--pt-paper)]">
                  Empowaworx Coordination Desk
                </h3>
                <p className="mt-3 text-sm text-[var(--pt-muted)] leading-relaxed max-w-xl">
                  For institutional delegations, municipal protocols, corporate exhibition logistics, and media accreditations, reach the core management desk directly.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <Phone className="h-5 w-5 text-[var(--pt-accent)] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[var(--pt-muted)] block">
                        Telephone Lines
                      </span>
                      <a href="tel:+27114827256" className="text-sm font-bold text-white hover:text-[var(--pt-accent)] block">
                        +27 (0) 11 482 7256
                      </a>
                      <a href="tel:+27114827257" className="text-xs text-[var(--pt-muted)] hover:text-white block">
                        +27 (0) 11 482 7257
                      </a>
                      <a href="tel:+27728221840" className="text-xs text-[var(--pt-muted)] hover:text-white block mt-0.5">
                        Mobile: +27 72 822 1840
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <Mail className="h-5 w-5 text-[var(--pt-accent)] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[var(--pt-muted)] block">
                        Official Inquiries
                      </span>
                      <a href="mailto:info@empowayouth.co.za" className="text-sm font-bold text-white hover:text-[var(--pt-accent)] block">
                        info@empowayouth.co.za
                      </a>
                      <a href="mailto:info@empowaworx.co.za" className="text-xs text-[var(--pt-muted)] hover:text-white block">
                        info@empowaworx.co.za
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.02)] p-6 sm:p-7 space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-accent)] block mb-1">
                    Event Venue &amp; Activation Hub
                  </span>
                  <h4 className="text-base font-extrabold text-white uppercase mb-1">
                    Koinonia Bible Church
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--pt-muted)] leading-relaxed">
                    Zone 14, Sebokeng, Vaal Region, Gauteng
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(232,93,4,0.15)] border border-[rgba(232,93,4,0.3)] px-2.5 py-1 text-[var(--pt-accent)]">
                      <Calendar className="h-3.5 w-3.5" />
                      3–7 May 2027
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-white/80">
                      <Clock className="h-3.5 w-3.5 text-[var(--pt-accent)]" />
                      08:00–15:00 Daily
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(244,240,232,0.08)]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--pt-accent)] block mb-1">
                    National Headquarters
                  </span>
                  <h4 className="text-sm font-extrabold text-white uppercase mb-1">
                    Empowaworx House
                  </h4>
                  <p className="text-xs text-[var(--pt-muted)] leading-relaxed mb-3">
                    364 Pine Avenue, Ferndale, Randburg, 2196
                  </p>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-[var(--pt-muted)]">
                      Sebokeng Venue Coordinator
                    </span>
                    <span className="font-bold text-[var(--pt-accent)]">
                      Zone 14 Protocol Desk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
