'use client';

import Link from 'next/link';
import { useEmpowaYouthScrollAnimations } from '@/hooks/use-scroll-animations';

const platforms = [
  {
    number: '01',
    title: 'EmpowaYouth Awards',
    tagline: 'Recognising Impact. Elevating Excellence.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8718.jpg',
    imageAlt: 'Young award winners and changemakers celebrating impact and recognition at EmpowaYouth',
    description:
      'A national awards programme celebrating organisations, changemakers and institutions delivering measurable youth empowerment.',
    partnerValue:
      'Associate your organisation with excellence, strengthen stakeholder credibility and help establish a benchmark for meaningful youth impact. Opportunities include category sponsorship, knowledge partnerships and amplification of recognised initiatives.',
  },
  {
    number: '02',
    title: 'EmpowaYouth Indaba',
    tagline: 'Ideas That Shift Systems.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5674.jpg',
    imageAlt: 'Policymakers, industry leaders, and development executives convening at EmpowaYouth Indaba',
    description:
      'A thought leadership forum bringing policymakers, business leaders and development agencies together to examine barriers to youth economic participation and develop implementable responses.',
    partnerValue:
      'Contribute sector expertise, inform policy discussions and build relationships around shared priorities. Partners can support thematic dialogues, working sessions and action agendas.',
  },
  {
    number: '03',
    title: 'EmpowaYouth Experiences & Campaigns',
    tagline: 'Exposure. Inspiration. Activation.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2438.jpg',
    imageAlt: 'High-energy youth crowd participating in an EmpowaYouth community activation and career campaign',
    description:
      'Dynamic events and activations connecting young people with industries, role models and opportunities, from township career pop-ups to workplace immersions and innovation lab visits.',
    partnerValue:
      'Build brand relevance through useful experiences, introduce products and services in context, and connect young people with opportunities within your organisation.',
  },
  {
    number: '04',
    title: 'EmpowaYouth Summits: Weeks & Weekends',
    tagline: 'Immersive. Intensive. Impactful.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2530.jpg',
    imageAlt: 'Delegates participating in intensive workshops and masterclasses at EmpowaYouth Week',
    description:
      'Focused, multi-day programmes combining workshops, masterclasses, mentorship and opportunity access to equip young people with practical skills, networks and tools.',
    partnerValue:
      'Engage prospective talent, support work readiness, identify emerging entrepreneurs and bring recruitment, skills development and enterprise support into one coordinated programme.',
  },
  {
    number: '05',
    title: 'EmpowaYouth Industry Summits & Experiences',
    tagline: 'Sector-Specific. Insight-Rich. Future-Driven.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1400_1.jpg',
    imageAlt: 'Young professionals engaging directly with industry experts and sector equipment demonstrations',
    description:
      'Dedicated engagements connecting youth with the needs and opportunities of growth sectors, including agriculture, fintech, the green economy and creative industries.',
    partnerValue:
      'Strengthen sector awareness, introduce career and enterprise pathways, and connect future talent with industry requirements.',
  },
  {
    number: '06',
    title: 'EmpowaYouth Insights & Trends',
    tagline: 'Intelligence That Informs Strategy.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5035.jpg',
    imageAlt: 'Delegates participating in surveys and intelligence gathering to capture youth perspectives',
    description:
      'An intelligence platform capturing and analysing youth perspectives, aspirations, behaviours and barriers to participation.',
    partnerValue:
      "Inform programme design, audience engagement and investment decisions with insights grounded in young people's experiences.",
  },
  {
    number: '07',
    title: 'EmpowaYouth Content Studio',
    tagline: 'Stories That Inspire. Voices That Lead.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2025/07/DSC_3222.jpg',
    imageAlt: 'Live broadcast interview and digital content production in the EmpowaYouth studio',
    description:
      'A youth-focused content hub producing podcasts, interviews and digital series that elevate young voices, share practical knowledge and showcase pathways to progress.',
    partnerValue:
      'Extend engagement beyond events through relevant, reusable content. Opportunities include commissioned series, expert conversations, branded educational content and media collaborations.',
  },
  {
    number: '08',
    title: 'EmpowaYouth Speakers',
    tagline: 'Relevant Voices. Powerful Conversations. Lasting Impact.',
    imageUrl: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5582.jpg',
    imageAlt: 'Inspiring keynote speaker delivering a high-impact address at the EmpowaYouth podium',
    description:
      'A curated platform connecting organisations with compelling speakers, facilitators, moderators and role models for youth events and gatherings.',
    partnerValue:
      'Strengthen your event with contributors who connect with young audiences, translate complex ideas into practical insights and inspire purposeful action.',
  },
];

const partnerRoles = [
  {
    number: '01',
    id: 'corporates-employers',
    type: 'Corporates and employers',
    value:
      'Connect talent development, recruitment, enterprise support and social investment through programmes aligned with business priorities.',
  },
  {
    number: '02',
    id: 'brands',
    type: 'Brands',
    value:
      'Earn relevance and trust by helping young people access knowledge, experiences and opportunities that matter to their lives.',
  },
  {
    number: '03',
    id: 'government-public-institutions',
    type: 'Government and public institutions',
    value:
      'Extend programme reach, improve access to public opportunities and convene delivery partners around youth development priorities.',
  },
  {
    number: '04',
    id: 'media-organisations',
    type: 'Media organisations',
    value:
      'Access youth voices, expert contributors, community stories and relevant content that strengthens public-interest coverage and audience engagement.',
  },
  {
    number: '05',
    id: 'funders-development-agencies',
    type: 'Funders and development agencies',
    value:
      'Support defined interventions with agreed outcomes, delivery responsibilities and reporting requirements.',
  },
  {
    number: '06',
    id: 'education-industry-bodies',
    type: 'Education and industry bodies',
    value:
      'Connect learning with workplace expectations, mentorship, sector exposure and enterprise pathways.',
  },
];

const contributionModes = [
  {
    id: 'sponsorship-funding',
    label: 'Sponsorship & Funding',
  },
  {
    id: 'programme-co-creation',
    label: 'Programme Co-creation',
  },
  {
    id: 'expertise',
    label: 'Expertise',
  },
  {
    id: 'opportunity-provision',
    label: 'Opportunity Provision',
  },
  {
    id: 'media-support',
    label: 'Media Support',
  },
  {
    id: 'in-kind-contributions',
    label: 'In-kind Contributions',
  },
];

const pageStyles = `
  .ey-offerings-page {
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    background: var(--pt-ink);
    color: var(--pt-paper);
    font-family: var(--font-body);
    overflow-x: hidden;
  }
  .ey-section-container {
    width: 100%;
    max-width: var(--pt-container);
    margin-inline: auto;
    padding-inline: var(--pt-container-pad);
    box-sizing: border-box;
  }
  .ey-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    color: var(--pt-accent);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .16em;
    line-height: 1.3;
    text-transform: uppercase;
    text-wrap: pretty;
  }
  .ey-kicker::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 2px;
    flex: 0 0 24px;
    background: var(--pt-accent);
  }
  .ey-section-heading {
    margin: 12px 0 0;
    color: inherit;
    font-family: var(--font-heading);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    letter-spacing: -.025em;
    line-height: 1.05;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-heading-italic {
    font-style: italic;
    font-weight: 300;
    font-size: 1.08em;
    letter-spacing: -.02em;
    color: var(--pt-accent);
  }
  .ey-body-copy {
    max-width: 600px;
    margin: 20px 0 0;
    color: var(--pt-muted);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: .005em;
    text-wrap: pretty;
  }
  .ey-button {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 14px 28px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .02em;
    line-height: 1.2;
    text-decoration: none;
    transition: background 200ms ease-out, color 200ms ease-out, transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out;
  }
  .ey-button-primary {
    border: 1px solid var(--pt-accent);
    background: var(--pt-accent);
    color: var(--pt-white);
  }
  .ey-button-secondary {
    border: 1.5px solid rgba(244, 240, 232, .35);
    background: transparent;
    color: var(--pt-paper);
  }
  .ey-button-primary:hover, .ey-button-primary:focus-visible {
    background: color-mix(in srgb, var(--pt-accent) 86%, var(--pt-ink));
    border-color: color-mix(in srgb, var(--pt-accent) 86%, var(--pt-ink));
    color: var(--pt-white);
    transform: scale(1.02);
    box-shadow: 0 4px 16px color-mix(in srgb, var(--pt-accent) 35%, transparent);
  }
  .ey-button-secondary:hover, .ey-button-secondary:focus-visible {
    border-color: var(--pt-paper);
    background: color-mix(in srgb, var(--pt-paper) 8%, transparent);
    color: var(--pt-paper);
  }
  .ey-hero {
    position: relative;
    display: flex;
    min-height: 100vh;
    min-height: 100svh;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    background: var(--pt-ink);
    padding: calc(72px + clamp(40px, 6vw, 80px)) var(--pt-container-pad) clamp(40px, 6vw, 80px);
  }
  .ey-hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    z-index: 0;
  }
  .ey-hero-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(11, 15, 14, .25) 0%, rgba(11, 15, 14, .45) 30%, rgba(11, 15, 14, .80) 65%, rgba(11, 15, 14, .97) 100%);
  }
  .ey-hero-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: var(--pt-container);
    margin: 0 auto;
  }
  .ey-hero-content {
    position: relative;
    z-index: 1;
    max-width: 1100px;
  }
  .ey-hero .ey-kicker {
    margin-bottom: 24px;
  }
  .ey-hero-title {
    max-width: 1000px;
    margin: 0 0 24px;
    color: var(--pt-paper);
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 6vw, 7rem);
    font-weight: 800;
    letter-spacing: -.05em;
    line-height: .95;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-hero-title-line {
    display: block;
  }
  .ey-hero-descriptor {
    max-width: 560px;
    margin: 0;
    color: var(--pt-paper);
    font-size: clamp(15px, 1.35vw, 17px);
    font-weight: 500;
    line-height: 1.65;
    letter-spacing: .005em;
    text-wrap: pretty;
  }
  .ey-hero-cta-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: clamp(24px, 3vw, 40px);
  }
  .ey-intro {
    background: var(--pt-paper);
    color: var(--pt-ink);
    padding-block: clamp(80px, 8vw, 112px);
  }
  .ey-intro-grid {
    display: grid;
    grid-template-columns: minmax(0, .38fr) minmax(0, .62fr);
    gap: clamp(40px, 6vw, 80px);
    align-items: start;
  }
  .ey-intro-heading {
    color: var(--pt-ink);
  }
  .ey-intro-callout {
    background: var(--pt-ink);
    padding: 40px;
    color: var(--pt-paper);
    border-radius: 6px;
  }
  .ey-intro-callout-quote {
    margin: 0;
    color: var(--pt-paper);
    font-family: var(--font-heading);
    font-size: clamp(1.4rem, 2.4vw, 2rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -.05em;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-intro-callout-copy {
    margin: 28px 0 0;
    border-left: 4px solid var(--pt-accent);
    padding-left: 20px;
    color: var(--pt-muted);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: .005em;
    text-wrap: pretty;
  }
  .ey-platforms {
    background: var(--pt-ink);
    color: var(--pt-paper);
    padding-block: clamp(80px, 8vw, 112px);
  }
  .ey-section-header {
    max-width: 760px;
    margin-bottom: 48px;
  }
  .ey-platform-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .ey-platform-card {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    min-height: 430px;
    border: 1px solid var(--pt-dark-divider);
    background: color-mix(in srgb, var(--pt-paper) 4%, transparent);
    overflow: hidden;
    border-radius: 6px;
    transition: transform 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out, background 200ms ease-out;
  }
  .ey-platform-card:hover {
    transform: translateY(-4px);
    border-color: color-mix(in srgb, var(--pt-accent) 42%, transparent);
    box-shadow: 0 18px 48px rgba(0, 0, 0, .2);
  }
  .ey-platform-media {
    height: 360px;
    min-height: 0;
    margin: 0;
    overflow: hidden;
  }
  .ey-platform-media img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 500ms ease-out;
  }
  .ey-platform-card:hover .ey-platform-media img {
    transform: scale(1.035);
  }
  .ey-platform-card-reverse .ey-platform-media {
    order: 2;
  }
  .ey-platform-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(28px, 4vw, 48px);
  }
  .ey-platform-number {
    display: block;
    margin: 0 0 10px;
    color: var(--pt-accent);
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 800;
    letter-spacing: -.07em;
    line-height: .85;
    opacity: .18;
  }
  .ey-platform-title {
    margin: 0;
    color: var(--pt-paper);
    font-size: clamp(1.65rem, 3vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -.05em;
    line-height: .95;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-platform-tagline {
    margin: 16px 0 0;
    color: var(--pt-accent);
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
    line-height: 1.35;
    letter-spacing: -.02em;
  }
  .ey-platform-description {
    max-width: 640px;
    margin: 20px 0 0;
    color: var(--pt-muted);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: .005em;
    text-wrap: pretty;
  }
  .ey-platform-value {
    margin: 26px 0 0;
    border-left: 3px solid var(--pt-accent);
    background: rgba(244, 240, 232, .04);
    padding: 16px;
    color: var(--pt-muted);
    border-radius: 0 4px 4px 0;
  }
  .ey-platform-value p {
    margin: 0;
    color: var(--pt-muted);
    font-size: 15px;
    line-height: 1.7;
    letter-spacing: .005em;
  }
  .ey-platform-value strong {
    color: var(--pt-paper);
    font-weight: 800;
  }
  .ey-partners {
    background: var(--pt-paper);
    color: var(--pt-ink);
    padding-block: clamp(80px, 8vw, 112px);
  }
  .ey-partner-header {
    margin-bottom: 42px;
  }
  .ey-partner-heading {
    color: var(--pt-ink);
  }
  .ey-partner-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
  .ey-partner-card {
    min-height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--pt-dark-divider);
    background: var(--pt-ink);
    padding: 32px;
    color: var(--pt-paper);
    border-radius: 6px;
    transition: transform 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out;
  }
  .ey-partner-card:hover {
    transform: translateY(-4px);
    border-color: color-mix(in srgb, var(--pt-accent) 44%, transparent);
    box-shadow: 14px 14px 0 color-mix(in srgb, var(--pt-accent) 14%, transparent);
  }
  .ey-partner-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
  .ey-partner-number {
    color: var(--pt-accent);
    font-size: 42px;
    font-weight: 800;
    letter-spacing: -.06em;
    line-height: .9;
  }
  .ey-partner-square {
    width: 10px;
    height: 10px;
    background: var(--pt-accent);
    margin-top: 6px;
    flex: 0 0 10px;
  }
  .ey-partner-title {
    margin: 28px 0 0;
    color: var(--pt-paper);
    font-size: clamp(1.45rem, 2.4vw, 2rem);
    font-weight: 800;
    letter-spacing: -.05em;
    line-height: .95;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-partner-text {
    max-width: none;
    margin: 18px 0 0;
    color: var(--pt-muted);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: .005em;
  }
  .ey-partner-divider {
    height: 1px;
    width: 100%;
    margin-top: 30px;
    background: var(--pt-dark-divider);
    transition: background 200ms ease-out, height 200ms ease-out;
  }
  .ey-partner-card:hover .ey-partner-divider {
    height: 2px;
    background: var(--pt-accent);
  }
  .ey-outcomes {
    background: var(--pt-ink);
    color: var(--pt-paper);
    padding-block: clamp(80px, 8vw, 112px);
  }
  .ey-outcomes-grid {
    display: grid;
    grid-template-columns: minmax(0, .44fr) minmax(0, .56fr);
    gap: clamp(40px, 6vw, 80px);
    align-items: start;
  }
  .ey-outcomes-heading {
    color: var(--pt-paper);
  }
  .ey-contribution-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  .ey-contribution-card {
    position: relative;
    min-height: 132px;
    border: 1px solid var(--pt-dark-divider);
    background: color-mix(in srgb, var(--pt-paper) 4%, transparent);
    padding: 22px;
    display: flex;
    align-items: flex-end;
    border-radius: 6px;
    transition: background 200ms ease-out, border-color 200ms ease-out, transform 200ms ease-out;
  }
  .ey-contribution-card:hover {
    transform: translateY(-3px);
    border-color: color-mix(in srgb, var(--pt-accent) 40%, transparent);
    background: color-mix(in srgb, var(--pt-accent) 9%, transparent);
  }
  .ey-contribution-dot {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 8px;
    height: 8px;
    background: var(--pt-accent);
  }
  .ey-contribution-label {
    margin: 0;
    color: var(--pt-paper);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .08em;
    line-height: 1.25;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-outcomes-note {
    max-width: 720px;
    margin: 34px 0 0;
    border-left: 4px solid var(--pt-accent);
    padding-left: 20px;
    color: var(--pt-paper);
    font-size: clamp(1.1rem, 2.2vw, 1.7rem);
    font-weight: 800;
    letter-spacing: -.035em;
    line-height: 1.08;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-impact-final {
    background: var(--pt-ink);
    padding: clamp(80px, 8vw, 112px) var(--pt-container-pad);
    border-top: 1px solid var(--pt-dark-divider);
  }
  .ey-impact-final-inner {
    width: 100%;
    max-width: var(--pt-container);
    margin: 0 auto;
  }
  .ey-impact-final-heading {
    max-width: 1100px;
    margin: 0;
    color: var(--pt-paper);
    font-family: var(--font-heading);
    font-size: clamp(3rem, 8vw, 8rem);
    font-weight: 800;
    letter-spacing: -.05em;
    line-height: .95;
    text-transform: uppercase;
    text-wrap: balance;
  }
  .ey-impact-final-rule {
    width: 64px;
    height: 3px;
    background: var(--pt-accent);
    margin: 32px 0;
  }
  .ey-impact-final-copy {
    max-width: 520px;
    margin: 0 0 24px;
    color: var(--pt-muted);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: .005em;
    text-wrap: pretty;
  }
  .ey-impact-final-copy-strong {
    max-width: 680px;
    margin: 0 0 32px;
    color: var(--pt-paper);
    font-size: 16px;
    font-weight: 800;
    line-height: 1.55;
    letter-spacing: -.015em;
    text-wrap: pretty;
  }
  .ey-impact-final-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
  }
  .ey-impact-final-tagline {
    max-width: none;
    margin: 34px 0 0;
    color: var(--pt-accent);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: .12em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .ey-hero-title { font-size: clamp(2.5rem, 6vw, 5rem); }
    .ey-intro-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(40px, 5vw, 64px); }
    .ey-platform-card { grid-template-columns: minmax(0, .45fr) minmax(0, .55fr); min-height: 0; }
    .ey-platform-card-reverse { grid-template-columns: minmax(0, .55fr) minmax(0, .45fr); }
    .ey-platform-card-reverse .ey-platform-media { order: 2; }
    .ey-platform-media { height: 100%; min-height: 340px; }
    .ey-partner-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ey-outcomes-grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(40px, 5vw, 64px); }
    .ey-contribution-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  @media (max-width: 960px) {
    .ey-intro-grid, .ey-outcomes-grid { grid-template-columns: 1fr; }
    .ey-platform-card, .ey-platform-card-reverse { grid-template-columns: 1fr; }
    .ey-platform-card-reverse .ey-platform-media { order: 0; }
    .ey-platform-media { min-height: 300px; }
    .ey-partner-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ey-contribution-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 767px) {
    .ey-section-container { padding-inline: var(--pt-container-pad); }
    .ey-hero { min-height: 100svh; padding: calc(72px + clamp(40px, 6vw, 80px)) 20px clamp(40px, 6vw, 80px); }
    .ey-hero-title { font-size: clamp(2rem, 9vw, 3.2rem); }
    .ey-hero-content { text-align: left; }
    .ey-button { width: auto; min-height: 48px; }
    .ey-intro-grid { grid-template-columns: 1fr; }
    .ey-intro-callout { width: 100%; box-sizing: border-box; padding: 40px; }
    .ey-platform-card, .ey-platform-card-reverse { grid-template-columns: 1fr; min-height: 0; border: 1px solid var(--pt-dark-divider); }
    .ey-platform-card-reverse .ey-platform-media { order: 0; }
    .ey-platform-media { height: 220px; min-height: 220px; }
    .ey-platform-content { text-align: left; }
    .ey-platform-number { font-size: clamp(3rem, 12vw, 5rem); }
    .ey-partner-grid { grid-template-columns: 1fr; }
    .ey-partner-card { min-height: auto; width: 100%; box-sizing: border-box; }
    .ey-outcomes-grid { grid-template-columns: 1fr; }
    .ey-contribution-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ey-impact-final-heading { font-size: clamp(2rem, 9vw, 4rem); }
    .ey-impact-final-actions { width: 100%; align-items: stretch; flex-direction: column; }
    .ey-impact-final-actions .ey-button { width: 100%; }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .ey-hero-cta-row { flex-direction: row; align-items: center; }
    .ey-hero-cta-row .ey-button { width: auto; }
  }

  @media (max-width: 480px) {
    .ey-hero-cta-row { width: 100%; align-items: stretch; flex-direction: column; }
    .ey-hero-cta-row .ey-button { width: 100%; }
  }

  @media (max-width: 640px) {
    .ey-section-container { padding-inline: 16px; }
    .ey-hero { padding: 104px 16px 48px; }
    .ey-hero-title { font-size: clamp(2.65rem, 14vw, 3.5rem); }
    .ey-hero-descriptor { max-width: 100%; margin-bottom: 28px; }
    .ey-hero-cta-row, .ey-impact-final-actions { width: 100%; align-items: stretch; }
    .ey-button { width: 100%; padding-inline: 24px; }
    .ey-intro, .ey-platforms, .ey-partners, .ey-outcomes, .ey-impact-final { padding-block: 40px; }
    .ey-intro-callout { padding: 28px; }
    .ey-section-header { margin-bottom: 34px; }
    .ey-platform-grid { gap: 20px; }
    .ey-platform-media { min-height: 230px; }
    .ey-platform-content { padding: 24px; }
    .ey-partner-grid, .ey-contribution-grid { grid-template-columns: 1fr; }
    .ey-partner-card { min-height: 230px; padding: 26px; }
    .ey-contribution-card { min-height: 112px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .ey-offerings-page *, .ey-offerings-page *::before, .ey-offerings-page *::after {
      transition-duration: .01ms !important;
      animation-duration: .01ms !important;
    }
    .ey-button:hover, .ey-button:focus-visible, .ey-platform-card:hover, .ey-partner-card:hover, .ey-contribution-card:hover {
      transform: none;
    }
  }
`;

export default function OfferingsPage() {
  useEmpowaYouthScrollAnimations();

  return (
    <div className="ey-offerings-page">
      <style>{pageStyles}</style>
      <main id="offerings">
        {/* Hero Section */}
        <section className="ey-hero" aria-labelledby="offerings-hero-title">
          {/* Established Hero Background Image Preserved */}
          <img
            src="https://cms.empowayouth.co.za/wp-content/uploads/2023/10/IMG-20231020-WA0006.jpg"
            alt="Young people in a programme workshop"
            className="ey-hero-bg"
            style={{ zIndex: 0 }}
          />
          <div className="ey-hero-overlay" aria-hidden="true" />

          {/* Established Decorative Brand Icon Watermark */}
          <img
            src="/logo/empowayouth-icon.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-8%] top-[18%] z-[1] h-[420px] w-[420px] select-none object-contain opacity-20 md:h-[620px] md:w-[620px]"
          />

          <div className="ey-hero-inner">
            <div className="ey-hero-content">
              <p className="ey-kicker">
                <span>Partner to Power</span>
              </p>
              <h1 id="offerings-hero-title" className="ey-hero-title">
                <span>Partner To Power The</span>
                <span className="ey-hero-title-line">
                  Youth <span className="ey-heading-italic">Economy</span>
                </span>
              </h1>
              <p className="ey-hero-descriptor">
                <span>Build talent. Open markets. Shape futures.</span>
              </p>
              <div className="ey-hero-cta-row">
                <Link href="/partner" className="ey-button ey-button-primary">
                  <span>Book a Strategic Conversation</span>
                </Link>
                <a href="#platforms" className="ey-button ey-button-secondary">
                  <span>Explore Our Platforms</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="ey-intro" aria-labelledby="intro-title">
          <div className="ey-section-container ey-intro-grid">
            <div>
              <p className="ey-kicker">
                <span>The Partnership</span>
              </p>
              <h2 id="intro-title" className="ey-section-heading ey-intro-heading">
                <span>A Platform For Every </span>
                <span className="ey-heading-italic">Ambition</span>
              </h2>
              <p className="ey-body-copy">
                <span>
                  EmpowaYouth connects organisations, brands, media, government and development partners with
                  opportunities to advance youth participation in the economy. Through an integrated portfolio of summits,
                  industry experiences, policy dialogues, campaigns, intelligence and storytelling, we connect ambition with access.
                </span>
              </p>
            </div>
            <blockquote className="ey-intro-callout">
              <p className="ey-intro-callout-quote">
                <strong>
                  <span>Young people are the workforce, entrepreneurs, consumers, and leaders who will shape our economy.</span>
                </strong>
              </p>
              <p className="ey-intro-callout-copy">
                <span>
                  Our partnership proposition: align your strategic priorities with relevant youth audiences, meaningful
                  engagement and measurable outcomes.
                </span>
              </p>
            </blockquote>
          </div>
        </section>

        {/* Eight Complementary Platforms Section */}
        <section id="platforms" className="ey-platforms" aria-labelledby="platforms-title">
          <div className="ey-section-container">
            <div className="ey-section-header">
              <p className="ey-kicker">
                <span>Eight Complementary Platforms</span>
              </p>
              <h2 id="platforms-title" className="ey-section-heading">
                <span>Platforms That Move The Youth </span>
                <span className="ey-heading-italic">Economy</span>
              </h2>
              <p className="ey-body-copy">
                <span>
                  Partners can support a focused intervention or build a broader programme across eight complementary platforms.
                </span>
              </p>
            </div>
            <div className="ey-platform-grid">
              {platforms.map((platform) => (
                <article
                  key={platform.number}
                  className={`ey-platform-card${Number(platform.number) % 2 === 0 ? ' ey-platform-card-reverse' : ''}`}
                >
                  <figure className="ey-platform-media">
                    <img src={platform.imageUrl} alt={platform.imageAlt} loading="lazy" />
                  </figure>
                  <div className="ey-platform-content">
                    <span className="ey-platform-number" aria-hidden="true">
                      {platform.number}
                    </span>
                    <h3 className="ey-platform-title">
                      <span>{platform.title}</span>
                    </h3>
                    <p className="ey-platform-tagline">
                      <em>{platform.tagline}</em>
                    </p>
                    <p className="ey-platform-description">
                      <span>{platform.description}</span>
                    </p>
                    <div className="ey-platform-value">
                      <p>
                        <strong>
                          <span>Partner value: </span>
                        </strong>
                        <span>{platform.partnerValue}</span>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Roles Section */}
        <section id="partners" className="ey-partners" aria-labelledby="partners-title">
          <div className="ey-section-container">
            <div className="ey-partner-header">
              <p className="ey-kicker">
                <span>Partner Roles</span>
              </p>
              <h2 id="partners-title" className="ey-section-heading ey-partner-heading">
                <span>A </span>
                <span className="ey-heading-italic">Compelling</span>
                <span> Role For Every Partner</span>
              </h2>
            </div>
            <div className="ey-partner-grid">
              {partnerRoles.map((role) => (
                <article key={role.id} className="ey-partner-card">
                  <div>
                    <div className="ey-partner-card-top">
                      <span className="ey-partner-number" aria-hidden="true">
                        {role.number}
                      </span>
                      <span className="ey-partner-square" aria-hidden="true" />
                    </div>
                    <h3 className="ey-partner-title">
                      <span>{role.type}</span>
                    </h3>
                    <p className="ey-partner-text">
                      <span>{role.value}</span>
                    </p>
                  </div>
                  <div className="ey-partner-divider" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section id="outcomes" className="ey-outcomes" aria-labelledby="outcomes-title">
          <div className="ey-section-container ey-outcomes-grid">
            <div>
              <p className="ey-kicker">
                <span>Outcomes</span>
              </p>
              <h2 id="outcomes-title" className="ey-section-heading ey-outcomes-heading">
                <span>Designed Around Your </span>
                <span className="ey-heading-italic">Priorities</span>
              </h2>
              <p className="ey-body-copy">
                <span>
                  Together, we define the audience, geography, platform, deliverables, and measures of success.
                  Depending on the intervention, these may include participation, learning completion, mentorship
                  engagement, applications, interviews, placements, enterprise referrals, audience reach and content engagement.
                </span>
              </p>
            </div>
            <div>
              <div className="ey-contribution-grid" aria-label="Contribution modes">
                {contributionModes.map((mode) => (
                  <div key={mode.id} className="ey-contribution-card">
                    <span className="ey-contribution-dot" aria-hidden="true" />
                    <p className="ey-contribution-label">
                      <span>{mode.label}</span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="ey-outcomes-note">
                <strong>
                  <span>
                    The ambition is a clear progression: reach young people, engage them meaningfully and connect them
                    with a practical next step.
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Take Action / Final CTA Section */}
        <section id="take-action" className="ey-impact-final" aria-labelledby="final-title">
          <div className="ey-impact-final-inner">
            <p className="ey-kicker">
              <span>Build Your Partnership</span>
            </p>
            <h2 id="final-title" className="ey-impact-final-heading">
              <span>Let&apos;s </span>
              <span className="ey-heading-italic">Build</span>
              <span> Your EmpowaYouth Partnership</span>
            </h2>
            <div className="ey-impact-final-rule" aria-hidden="true" />
            <p className="ey-impact-final-copy">
              <span>
                Whether your priority is developing talent, supporting entrepreneurs, strengthening brand relevance,
                extending public services or telling stories that move audiences, EmpowaYouth offers a platform to turn shared
                priorities into coordinated action.
              </span>
            </p>
            <p className="ey-impact-final-copy-strong">
              <strong>
                <span>
                  We invite a 30-minute strategic conversation to understand your objectives and develop a tailored partnership proposition.
                </span>
              </strong>
            </p>
            <div className="ey-impact-final-actions">
              <Link
                href="/partner"
                className="ey-button ey-button-primary"
              >
                <span>Book a Strategic Conversation</span>
              </Link>
              <a href="#platforms" className="ey-button ey-button-secondary">
                <span>Explore Our Platforms</span>
              </a>
            </div>
            <p className="ey-impact-final-tagline">
              <span>EmpowaYouth™ — Powering the Youth Economy.</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
