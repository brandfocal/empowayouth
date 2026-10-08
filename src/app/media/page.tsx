'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';

const focusRingClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--pt-accent)]';
const primaryButtonClass = `inline-flex min-h-11 w-full items-center justify-center !rounded-[6px] border-0 bg-[var(--pt-accent)] px-7 py-3.5 text-[14px] font-bold leading-[1.2] tracking-[0.02em] text-white shadow-none transition-[background,color,transform,box-shadow] duration-200 ease-out hover:scale-[1.02] hover:bg-[color-mix(in_srgb,var(--pt-accent)_84%,var(--pt-ink))] hover:shadow-[0_4px_16px_rgba(232,131,42,0.28)] sm:w-auto ${focusRingClass}`;
const ghostIconButtonClass = `inline-flex min-h-11 w-full items-center justify-center !rounded-[6px] border-[1.5px] border-[rgba(244,240,232,0.35)] bg-transparent px-7 py-3.5 text-[14px] font-bold leading-[1.2] tracking-[0.02em] text-[var(--pt-paper)] shadow-none transition-[background,color,border-color,transform] duration-200 ease-out hover:border-[var(--pt-accent)] hover:bg-white/5 hover:text-[var(--pt-paper)] sm:w-auto ${focusRingClass}`;
const directMediaCtaClass = `inline-flex min-h-11 w-full items-center justify-center !rounded-[6px] border border-[var(--pt-accent)] bg-[var(--pt-accent)] px-7 py-3.5 text-[14px] font-bold leading-[1.2] tracking-[0.02em] text-white shadow-none transition-[background,color,transform,box-shadow] duration-200 ease-out hover:scale-[1.02] hover:bg-[color-mix(in_srgb,var(--pt-accent)_84%,var(--pt-ink))] hover:shadow-[0_4px_16px_rgba(232,131,42,0.32)] sm:w-auto ${focusRingClass}`;

const buttonFontStyle = {
  fontFamily: 'Manrope, Arial, sans-serif',
};

const kickerBarClass =
  "before:mr-2 before:inline-block before:h-0.5 before:w-6 before:flex-[0_0_24px] before:rounded-full before:bg-[var(--pt-accent)] before:content-['']";
const sectionHeadingClass =
  'max-w-4xl text-[clamp(30px,8.5vw,56px)] font-light leading-[1.05] tracking-[-0.025em] [text-wrap:balance]';
const standardSectionClass =
  'px-4 py-10 sm:px-6 md:px-8 md:py-20 lg:px-[var(--pt-container-pad)] lg:py-[clamp(80px,9vw,112px)]';
const tagPillClass =
  'inline-flex rounded-[4px] border border-transparent bg-[rgba(232,131,42,0.12)] px-2 py-0.5 text-[10px] font-semibold uppercase leading-[1.4] tracking-[0.1em] text-[var(--pt-accent)]';

const tvItems = [
  {
    id: 'empowering-unemployed-youth',
    title: 'Empowering the Unemployed Youth',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3374.jpg',
    youtubeId: null,
  },
  {
    id: 'expropriation-act-opportunities',
    title: 'Expropriation Act Presents Opportunities for Youth – Minister Chikunga',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3360.jpg',
    youtubeId: null,
  },
  {
    id: 'gauteng-film-commission-opportunities',
    title: 'Gauteng Film Commission Helping Youth With Opportunities',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3118.jpg',
    youtubeId: null,
  },
  {
    id: 'gfc-tackling-youth-unemployment',
    title: 'Gauteng Film Commission – Tackling Youth Unemployment – Tumi Lebaka Weighs In',
    outlet: 'SABC News',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3216.jpg',
    youtubeId: null,
  },
  {
    id: 'teta-ceo-morning-show',
    title: 'Transport Education Training Authority CEO: Mrs Maphefo Anno-Frempong on The Morning Show',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3222.jpg',
    youtubeId: null,
  },
  {
    id: 'mlambo-ngcuka-women-barriers',
    title: "Mlambo-Ngcuka: It's important for women to break barriers in male-dominated fields",
    outlet: 'NEWZROOM AFRIKA',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3230.jpg',
    youtubeId: 'JzMXegBxG-Y',
  },
  {
    id: 'women-in-agriculture',
    title: 'Women in Agriculture | Opportunities and funding for women',
    outlet: 'ENCA',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3242.jpg',
    youtubeId: 'a_cUS1NO0O0',
  },
  {
    id: 'mpumalanga-outreach',
    title: 'EmpowaYouth outreach programme empowers unemployed young people in Mpumalanga',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2986.jpg',
    youtubeId: 'AE37gSGKEy0',
  },
  {
    id: 'empowayouth-week-better-future',
    title: 'Empowayouth week | Building a better future for the youth',
    outlet: 'ENCA',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3058.jpg',
    youtubeId: 'AM1yPCViGpk',
  },
  {
    id: 'support-programme-solution',
    title: 'EmpowaYouth support programme a possible solution to high unemployment rate',
    outlet: 'NEWSROOM AFRIKA',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2984.jpg',
    youtubeId: 'OAw3QvtnMuU',
  },
  {
    id: 'orange-farm-launch',
    title: 'Discussion | NYDA joins Empowaworx to launch the 2022 Orange Farm Empowa Youth week',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2979.jpg',
    youtubeId: 'yovdeoAXRDw',
  },
  {
    id: 'north-west-weekend-campaign',
    title: 'Empowa Youth Weekend Campaign North West',
    outlet: 'NEWSROOM AFRIKA',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2957.jpg',
    youtubeId: 'YDvfvCyixPM',
  },
  {
    id: 'agripreneurs-kgalaletso-tlhoaele',
    title: 'Calls for young people to consider being agripreneurs: Kgalaletso Tlhoaele',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2906.jpg',
    youtubeId: 'wJO1Y2BCjbQ',
  },
  {
    id: 'mahikeng-youth-empowerment',
    title: 'Youth empowerment programme in Mahikeng',
    outlet: 'SABC NEWS',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2893.jpg',
    youtubeId: '_ww45OMAygY',
  },
  {
    id: 'qonce-teta-weekend',
    title: 'Last day of the TETA EmpowaYouth Weekend held in Qonce',
    outlet: 'NEWSROOM AFRIKA',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2879.jpg',
    youtubeId: 'BeBZXOCEskI',
  },
];

const printItems = [
  {
    id: 'inseta-skills-indaba',
    headline: 'INSETA launches first ever Insurance Skills Indaba',
    publication: 'RANDBURG SUN',
    url: 'https://www.citizen.co.za/randburg-sun/news-headlines/2025/04/02/insetas-skills-indaba-tackles-youth-unemployment-issues/',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8155.jpg',
  },
  {
    id: 'proagrimedia-unemployment-call',
    headline:
      'EmpowaYouth Addresses the Urgent Issue of Youth Unemployment in South Africa: A Call For Collaborative Action',
    publication: 'PROAGRIMEDIA',
    url: 'https://www.proagrimedia.com/news-events/empowayouth-addresses-the-urgent-issue-of-youth-unemployment-in-south-africa-a-call-for-collaborative-action/',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8141.jpg',
  },
  {
    id: 'future-sa-unemployment-call',
    headline:
      'EmpowaYouth Addresses the Urgent Issue of Youth Unemployment in South Africa: A Call For Collaborative Action',
    publication: 'FUTURE SA',
    url: 'https://www.futuresa.co.za/whats-new/empowayouth-addresses-the-urgent-issue-of-youth-unemployment-in-south-africa-a-call-for-collaborative-action/',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8143.jpg',
  },
  {
    id: 'future-filmmakers-masterclass',
    headline: 'EmpowaYouth Masterclass Empowers Future Filmmakers',
    publication: 'RANDBURG SUN',
    url: 'https://www.citizen.co.za/randburg-sun/news-headlines/2025/04/29/youth-in-film-gain-insights-at-empowayouth-event/',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8148.jpg',
  },
  {
    id: 'ekurhuleni-tangible-opportunities',
    headline: 'EmpowaYouth Heads to Ekurhuleni: Connecting Young People with Tangible Opportunities',
    publication: 'ONLINE MAGAZINE',
    url: 'https://www.onlinemag.co.za/empowayouth-heads-to-ekurhuleni-connecting-young-people-with-tangible-opportunities/',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8126.jpg',
  },
  {
    id: 'leaders-shape-job-solutions',
    headline: 'EmpowaYouth Gathers Leaders to Shape Job Solutions',
    publication: 'RANDBURG SUN',
    url: 'https://www.citizen.co.za/randburg-sun/news-headlines/2025/03/03/empowayouth-indaba-tackles-youth-unemployment-crisis/',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8138.jpg',
  },
  {
    id: 'stokvel-talk-indaba',
    headline:
      'EmpowaYouth and Minister Sindisiwe Chikunga Reimagine Livelihoods to Recover Lost Ground at Inaugural EmpowaYouth Indaba',
    publication: 'STOKVEL TALK',
    url: 'https://stokveltalk.co.za/empowayouth-and-minister-sindisiwe-chikunga-reimagine-livelihoods-to-recover-lost-ground-at-inaugural-empowayouth-indaba/',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8109.jpg',
  },
];

const radioItems = [
  {
    id: 'smg-workers-month',
    title: 'SMG – Celebrating Workers Month with Mookho Rich Aunty Mhlayivana',
    station: 'LIGWALAGWALA FM',
    src: 'https://empowayouth.co.za/wp-content/uploads/2025/07/SMG-CELEBRATING-WORKERS-MONTH-WITH-MOOKHO-RICH-AUNTY-MHLAYIVANA-1.mp3',
  },
  {
    id: 'life-in-balance-unemployment',
    title: '#LifeInBalance Practical Solutions to Unemployment in South Africa',
    station: 'RADIO 2000',
    src: 'https://empowayouth.co.za/wp-content/uploads/2025/07/LifeInBalance-Practical-Solutions-to-Unemployment-in-South-Africa.mp3',
  },
  {
    id: 'indaba-youth-unemployment',
    title: 'EmpowaYouth Indaba – Youth Unemployment',
    station: 'SA FM',
    src: 'https://empowayouth.co.za/wp-content/uploads/2025/07/EmpowaYouth-Indaba_-youth-unemployment-.mp3',
  },
  {
    id: 'yfm-podcast',
    title: 'YFM Podcast',
    station: 'YFM',
    src: 'https://empowayouth.co.za/wp-content/uploads/2023/10/YFM-PODCAST.mp3',
  },
  {
    id: 'tut-podcast',
    title: 'TUT Podcast',
    station: 'TUT',
    src: 'https://empowayouth.co.za/wp-content/uploads/2023/10/TUT-PODCAST.mp3',
  },
  {
    id: 'radio-2000-podcast',
    title: 'RADIO 2000 Podcast',
    station: 'RADIO 2000',
    src: 'https://empowayouth.co.za/wp-content/uploads/2023/10/Zaz-Molo-Empowaworx-Project-Lead.mp3',
  },
  {
    id: 'safm-educational-conversations',
    title: 'SA FM Educational Conversations – Youth Need More Than Promises',
    station: 'SAFM',
    src: 'https://empowayouth.co.za/wp-content/uploads/2023/10/SA-FM-Educational-conversations_-YOUTH-NEED-MORE-THAN-PROMISES-THEY-NEED-REAL-AND-RELEVANT-WORK-OPPORTUNITIES.mp3',
  },
  {
    id: 'jozi-fm-podcast',
    title: 'Jozi FM Podcast',
    station: 'JOZI FM',
    src: 'https://empowayouth.co.za/wp-content/uploads/2023/10/JOZI-FM.mp3',
  },
  {
    id: '702-podcast',
    title: '702 Podcast',
    station: '702',
    src: 'https://empowayouth.co.za/wp-content/uploads/2023/10/702-PODCAST.mp3',
  },
];

const featuredRadioItems = radioItems.slice(0, 3);
const podcastRadioItems = radioItems.slice(3);
const radioHeroItem = featuredRadioItems[0];

const horizontalRadioFeatureItems = [
  {
    ...featuredRadioItems[1],
    visualIndex: '02',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2906.jpg',
  },
  {
    ...featuredRadioItems[2],
    visualIndex: '03',
    image: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2893.jpg',
  },
];

const podcastEpisodeItems = podcastRadioItems.map((item, index) => ({
  ...item,
  visualIndex: String(index + 4).padStart(2, '0'),
}));

function SectionHeader({
  kicker,
  title,
  descriptor,
  light = false,
}: {
  kicker: string;
  title: React.ReactNode;
  descriptor?: string;
  light?: boolean;
}) {
  return (
    <header className={light ? 'text-[var(--pt-paper)]' : 'text-[var(--pt-ink)]'}>
      <p className={`label-mono mb-3 inline-flex max-w-full flex-wrap items-center gap-y-1 text-[var(--pt-accent)] ${kickerBarClass}`}>
        <span>{kicker}</span>
      </p>
      <h2 className={`${sectionHeadingClass} ${light ? 'text-[var(--pt-paper)]' : 'text-[var(--pt-ink)]'} font-extrabold uppercase`}>
        <span>{title}</span>
      </h2>
      {descriptor && (
        <p className="mt-5 max-w-[600px] text-sm font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty] sm:text-base">
          <span>{descriptor}</span>
        </p>
      )}
    </header>
  );
}

export default function MediaPage() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof tvItems)[0] | null>(null);
  useEmpowaYouthScrollAnimations();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--pt-paper)] text-[var(--pt-ink)] font-['Manrope',Arial,sans-serif]">
      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative mx-0 w-full max-w-none bg-black text-[var(--pt-paper)] shadow-[0_28px_80px_rgba(0,0,0,0.45)] md:mx-auto md:max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={`absolute right-4 top-4 z-10 inline-flex h-11 min-h-11 w-11 min-w-11 items-center justify-center rounded-none border border-[rgba(244,240,232,0.18)] bg-[rgba(11,15,14,0.72)] text-[var(--pt-paper)] transition-all duration-200 ease-out hover:border-[var(--pt-accent)] hover:bg-[var(--pt-accent)] hover:text-white ${focusRingClass}`}
              aria-label="Close video modal"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={20} aria-hidden="true" />
            </button>

            {selectedVideo.youtubeId ? (
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                className="relative flex w-full flex-col items-center justify-center bg-[var(--pt-ink)] text-[var(--pt-paper)]"
                style={{ paddingTop: '56.25%' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <Play className="w-12 h-12 opacity-30 text-[var(--pt-accent)]" aria-hidden="true" />
                  <p className="text-sm text-[var(--pt-muted)]">Video not available online</p>
                  <p className="max-w-md text-base font-semibold leading-snug text-[var(--pt-paper)]">
                    {selectedVideo.title}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--pt-accent)]">
                    {selectedVideo.outlet}
                  </p>
                </div>
              </div>
            )}

            <div className="bg-[rgba(11,15,14,0.95)] p-5">
              <span className={`${tagPillClass} w-fit bg-[rgba(232,131,42,0.16)] text-[var(--pt-accent)]`}>
                {selectedVideo.outlet}
              </span>
              <h2
                id="video-modal-title"
                className="mt-3 text-[clamp(18px,3.5vw,28px)] font-bold leading-[1.1] tracking-[-0.025em] text-white [text-wrap:balance]"
              >
                {selectedVideo.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--pt-ink)] px-4 pb-10 pt-[clamp(112px,24vw,200px)] text-[var(--pt-paper)] sm:px-6 md:px-8 md:pb-20 lg:px-[var(--pt-container-pad)] lg:pb-[clamp(80px,8vw,120px)]"
      >
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&auto=format&fit=crop"
          alt="Storytelling and media in action"
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,15,14,0.25)_0%,rgba(11,15,14,0.45)_30%,rgba(11,15,14,0.80)_65%,rgba(11,15,14,0.97)_100%)]"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />
        {/* Decorative brand icon overlay */}
        <img
          src="/logo/empowayouth-icon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-[18%] z-[1] h-[420px] w-[420px] select-none object-contain opacity-20 md:h-[620px] md:w-[620px]"
        />

        <div className="relative z-[2] mx-auto w-full max-w-[var(--pt-container)]">
          <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)] md:mb-6">
            <span className="inline-block h-[2px] w-6 shrink-0 bg-[var(--pt-accent)]" aria-hidden="true" />
            <span>Media &amp; Insights</span>
          </p>
          <h1 className="mb-5 max-w-5xl text-[clamp(2.5rem,10vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance] md:mb-6">
            <span>The Movement, </span>
            <span className="ey-heading-italic">Documented</span>
            <span>.</span>
          </h1>
          <p className="mb-8 max-w-[560px] text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty] md:mb-9">
            <span>Media coverage, data, behavioural insights, and policy analysis.</span>
          </p>
          <div className="flex w-full flex-col flex-wrap items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a href="#media" className={primaryButtonClass} style={buttonFontStyle}>
              <span>Read More Stories</span>
            </a>
            <Link href="/contact" className={ghostIconButtonClass} style={buttonFontStyle}>
              <span>Get Involved</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: TV Coverage */}
      <section id="media" className={`bg-[var(--pt-ink)] text-[var(--pt-paper)] ${standardSectionClass}`}>
        <div className="mx-auto w-full max-w-[var(--pt-container)]">
          <SectionHeader
            kicker="01 / TV coverage"
            title={
              <span>
                Broadcast by the <span className="ey-heading-italic">movement.</span>
              </span>
            }
            descriptor="Real coverage from national and regional TV platforms documenting EmpowaYouth's work across South Africa."
            light
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:gap-8 lg:grid-cols-3">
            {tvItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col border border-[rgba(244,240,232,0.12)] bg-[rgba(244,240,232,0.025)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(232,131,42,0.45)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
              >
                <button
                  type="button"
                  className={`relative aspect-video w-full cursor-pointer overflow-hidden bg-[var(--pt-ink)] text-left ${focusRingClass}`}
                  aria-label={item.youtubeId ? `Open video: ${item.title}` : `Open video: ${item.title}. Video not available online`}
                  title={item.youtubeId ? undefined : 'Video not available online'}
                  onClick={() => setSelectedVideo(item)}
                >
                  <img
                    src={item.youtubeId ? `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg` : item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
                  <div className="relative z-[1] flex h-full w-full items-center justify-center p-8">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-2 border-[rgba(244,240,232,0.78)] bg-[rgba(11,15,14,0.38)] text-[var(--pt-paper)] transition-all duration-200 ease-out group-hover:scale-110 group-hover:border-[var(--pt-accent)] group-hover:bg-[var(--pt-accent)] group-hover:text-white ${
                        item.youtubeId ? '' : ' opacity-60'
                      }`}
                    >
                      <Play size={24} strokeWidth={0} fill="currentColor" className="ml-1" aria-hidden="true" />
                    </div>
                  </div>
                  <span className={`${tagPillClass} absolute left-4 top-4 z-[2] bg-[rgba(232,131,42,0.25)] text-white font-bold`}>
                    {item.outlet}
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[18px] font-bold leading-[1.24] tracking-[-0.025em] text-[var(--pt-paper)] [text-wrap:balance]">
                    {item.title}
                  </h3>
                  <div className="mt-6 border-t border-[var(--pt-dark-divider)] pt-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--pt-muted)]">
                      Television feature
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Print Features */}
      <section id="print-features" className={standardSectionClass}>
        <div className="mx-auto w-full max-w-[var(--pt-container)]">
          <SectionHeader
            kicker="02 / Print features"
            title={
              <span>
                Reported in <span className="ey-heading-italic">detail.</span>
              </span>
            }
            descriptor="Selected written features and press coverage from publications following EmpowaYouth's programmes, indabas, and sector partnerships."
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:gap-8 lg:grid-cols-3">
            {printItems.map((item) => (
              <article
                key={item.id}
                className="group flex min-h-[250px] flex-col border border-[var(--pt-light-divider)] bg-white/40 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(232,131,42,0.5)] hover:shadow-xl focus-within:-translate-y-1"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-full flex-col text-current no-underline ${focusRingClass}`}
                  aria-label={`Read ${item.headline} on ${item.publication}`}
                >
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className={tagPillClass}>{item.publication}</span>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[var(--pt-muted)] transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--pt-accent)]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-6 flex-1 break-words text-[19px] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--pt-ink)] [text-wrap:balance] transition-colors duration-200 ease-out group-hover:text-[var(--pt-accent)]">
                      {item.headline}
                    </h3>
                    <p className="mt-6 border-t border-[var(--pt-light-divider)] pt-4 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--pt-muted)]">
                      Open feature &rarr;
                    </p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Radio & Podcasts */}
      <section id="radio-interviews" className={`${standardSectionClass} bg-[var(--pt-ink)] text-[var(--pt-paper)]`}>
        <div className="mx-auto w-full max-w-[var(--pt-container)]">
          <SectionHeader
            kicker="03 / Radio & Podcasts"
            title={
              <span>
                Voices on <span className="ey-heading-italic">Air.</span>
              </span>
            }
            descriptor="Conversations with EmpowaYouth and partners across South Africa's most-listened radio platforms and university podcasts."
            light
          />

          {/* Featured Hero Radio Item */}
          <article className="relative mt-10 flex min-h-[clamp(340px,56vw,680px)] items-end overflow-hidden md:mt-14">
            <img
              src="https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3374.jpg"
              alt="EmpowaYouth radio interview feature"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(11,15,14,0.98) 0%, rgba(11,15,14,0.72) 42%, rgba(11,15,14,0.18) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-[2] w-full min-w-0 p-5 sm:p-8 md:p-12 lg:p-16">
              <span className="inline-flex bg-[var(--pt-accent)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
                {radioHeroItem.station}
              </span>
              <h3 className="mt-4 max-w-3xl text-[clamp(28px,5.5vw,64px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[var(--pt-paper)] [text-wrap:balance]">
                {radioHeroItem.title}
              </h3>
              <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.1em] text-[var(--pt-muted)]">
                Radio interview &middot; Ligwalagwala FM
              </p>
              <div className="mt-6 block w-full min-w-0 border border-[rgba(244,240,232,0.14)] bg-[rgba(244,240,232,0.08)] p-4 sm:inline-block sm:min-w-[280px] sm:w-auto md:min-w-[360px]">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pt-accent)]">
                  Listen now
                </p>
                <audio
                  controls
                  preload="none"
                  className="block w-full max-w-full"
                  style={{ colorScheme: 'dark' }}
                  aria-label={`${radioHeroItem.title} audio interview`}
                >
                  <source src={radioHeroItem.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </article>

          {/* Secondary Radio Features */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {horizontalRadioFeatureItems.map((item) => (
              <article
                key={item.id}
                className="relative flex min-h-[clamp(260px,36vw,440px)] flex-col justify-end overflow-hidden"
              >
                <img src={item.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(11,15,14,1) 0%, rgba(11,15,14,0.7) 45%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-2 right-4 hidden select-none text-[clamp(80px,10vw,120px)] font-black leading-none tracking-[-0.07em] text-[rgba(244,240,232,0.04)] md:block"
                  aria-hidden="true"
                >
                  {item.visualIndex}
                </span>
                <div className="relative z-[2] w-full min-w-0 p-5 md:p-8">
                  <span className="inline-flex bg-[var(--pt-accent)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
                    {item.station}
                  </span>
                  <h3 className="mt-3 text-[clamp(20px,3.2vw,32px)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--pt-paper)] [text-wrap:balance]">
                    {item.title}
                  </h3>
                  <div className="mt-6 block w-full min-w-0 border border-[rgba(244,240,232,0.14)] bg-[rgba(244,240,232,0.08)] p-4 sm:inline-block sm:min-w-[280px] sm:w-auto md:min-w-[360px]">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--pt-accent)]">
                      Listen now
                    </p>
                    <audio
                      controls
                      preload="none"
                      className="block w-full max-w-full"
                      style={{ colorScheme: 'dark' }}
                      aria-label={`${item.title} audio interview`}
                    >
                      <source src={item.src} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Podcast Episodes Grid */}
          <div className="mb-0 mt-12 h-px bg-[rgba(244,240,232,0.10)]" aria-hidden="true" />
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--pt-muted)]">
            Podcast episodes
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {podcastEpisodeItems.map((item) => (
              <article
                key={item.id}
                className="border border-[rgba(244,240,232,0.10)] bg-[rgba(244,240,232,0.035)] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(232,131,42,0.5)] sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span className="inline-flex bg-[var(--pt-accent)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                    {item.station}
                  </span>
                  <span
                    className="text-[clamp(28px,4vw,40px)] font-black leading-none tracking-[-0.06em] text-[rgba(244,240,232,0.12)]"
                    aria-hidden="true"
                  >
                    {item.visualIndex}
                  </span>
                </div>
                <h3 className="mb-5 mt-4 text-[17px] font-bold leading-[1.3] tracking-[-0.025em] text-[var(--pt-paper)] [text-wrap:balance]">
                  {item.title}
                </h3>
                <audio
                  controls
                  preload="none"
                  className="block w-full max-w-full"
                  style={{ colorScheme: 'dark' }}
                  aria-label={`${item.title} audio interview`}
                >
                  <source src={item.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="mt-5 border-t border-[rgba(244,240,232,0.08)] pt-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pt-muted)]">
                  Podcast episode
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer Media CTA */}
      <section
        style={{
          background: 'var(--pt-ink)',
          padding: 'clamp(40px,9vw,112px) clamp(16px,4vw,48px)',
        }}
        className="border-t border-[var(--pt-dark-divider)]"
      >
        <div style={{ maxWidth: 'var(--pt-container)', width: '100%', margin: '0 auto' }}>
          <p className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pt-accent)]">
            <span className="inline-block h-[2px] w-6 bg-[var(--pt-accent)]" />
            <span>Media &amp; Insights / Stay Connected</span>
          </p>
          <h2 className="mb-0 text-[clamp(2.5rem,10vw,8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--pt-paper)] [text-wrap:balance]">
            <span>Stories Worth </span>
            <span className="ey-heading-italic">Sharing</span>
            <span>.</span>
          </h2>
          <div className="my-8 h-[3px] w-16 bg-[var(--pt-accent)]" aria-hidden="true" />
          <p className="mb-8 max-w-[520px] text-[15px] font-normal leading-[1.7] tracking-[0.005em] text-[var(--pt-muted)] [text-wrap:pretty]">
            Follow the movement, read the research, and amplify the voices that are changing South Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={directMediaCtaClass}
              style={buttonFontStyle}
            >
              <span>Direct Media Inquiries</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
