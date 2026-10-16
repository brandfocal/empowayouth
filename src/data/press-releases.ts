export interface PressRelease {
  id: string;
  slug: string;
  type: string;
  status: string;
  title: string;
  subtitle: string;
  date: string;
  eventDates: string;
  location: string;
  theme: string;
  lead: string;
  heroImage?: string;
  badge: string;
  stats: { label: string; value: string }[];
  priorities: { tag: string; title: string; description: string }[];
  opportunityAreas: { title: string; description: string }[];
  vaalContext: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    organization: string;
  };
  mediaOpportunities: string[];
  industryInvitation: string[];
  eventDetails: {
    event: string;
    dates: string;
    time: string;
    venue: string;
    theme: string;
    targetAttendance: string;
    audience: string;
  };
  boilerplate: string;
  mediaContact: {
    name: string;
    title: string;
    organization: string;
    email: string;
    mobile: string;
    landline: string;
    website: string;
  };
  fullRawText: string;
}

export const pressReleases: PressRelease[] = [
  {
    id: 'vaal-empowayouth-week-2027',
    slug: 'vaal-empowayouth-week-2027',
    type: 'MEDIA RELEASE',
    status: 'FOR IMMEDIATE RELEASE',
    badge: 'Flagship Event',
    title: 'Vaal EmpowaYouth Week 2027 to connect young people with skills, industry and enterprise opportunities',
    subtitle: '3–7 May 2027 | Koinonia Bible Church, Zone 14, Sebokeng',
    date: '3–7 May 2027',
    eventDates: '3–7 May 2027',
    location: 'SEBOKENG, GAUTENG',
    theme: 'Powering South Africa’s Youth Economy',
    lead: 'Vaal EmpowaYouth Week 2027 will bring young people, employers, educators, funders and enterprise development partners together from 3–7 May 2027, creating a platform for access to career pathways, practical skills, entrepreneurship support and industry networks.',
    heroImage: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5582.jpg',
    stats: [
      { label: 'Target Attendance', value: '10,000+' },
      { label: 'Duration', value: '5 Days' },
      { label: 'Opportunity Sectors', value: '5 Sectors' },
      { label: 'Delegate Entry', value: '100% Free' },
    ],
    priorities: [
      {
        tag: 'INSPIRED',
        title: 'Broaden Horizons',
        description:
          'Broaden young people’s understanding of possible futures through industry exposure, credible role models and practical insight into careers and enterprise.',
      },
      {
        tag: 'CONNECTED',
        title: 'Bridge Networks',
        description:
          'Bring young people closer to employers, education and training institutions, funders, mentors and market access networks.',
      },
      {
        tag: 'TRANSFORMED',
        title: 'Concrete Progression',
        description:
          'Support progression from participation to practical next steps, including applications, training referrals, enterprise development support and further engagement with opportunity providers.',
      },
    ],
    opportunityAreas: [
      {
        title: 'Health, Wellness & Care Economy',
        description:
          'Career pathways, training opportunities and enterprise possibilities across health services, care and wellbeing.',
      },
      {
        title: 'AI, Digital Economy & Deep Tech',
        description:
          'Digital capability, emerging technologies and the skills needed to participate in a changing world of work.',
      },
      {
        title: 'Creative & Film Economy',
        description:
          'Creative careers, content production, intellectual property and the business of turning talent into income.',
      },
      {
        title: 'Green Economy & Climate Innovation',
        description:
          'Opportunities linked to renewable energy, sustainable agriculture, environmental services and circular business models.',
      },
      {
        title: 'Entrepreneurship, Funding & Innovation Ecosystems',
        description:
          'Business readiness, funding requirements, enterprise development and access to customers and supply chains.',
      },
    ],
    vaalContext: [
      'The Vaal’s industrial heritage, entrepreneurial energy and young talent make it a significant setting for conversations about South Africa’s economic future.',
      'Hosting the programme in Sebokeng brings industry engagement closer to communities where access to professional networks, career guidance and enterprise support can shape a young person’s next decision.',
      'The ambition is to strengthen the connections between local potential and the institutions, industries and markets that can help it grow.',
    ],
    quote: {
      text: '“Young people need ambition backed by access: access to information, skills, decision-makers and a clear next step. Vaal EmpowaYouth Week 2027 is designed to bring those connections closer to the communities that need them. When young people are inspired, connected and supported to act, we create stronger foundations for enterprise, employment and economic participation.”',
      author: 'Simphiwe Masiza',
      role: 'Founder & Executive Producer',
      organization: 'EmpowaYouth',
    },
    mediaOpportunities: [
      'Vaal EmpowaYouth Week offers media houses a local lens on issues of national importance: youth employment, artificial intelligence, skills development, township enterprise, the creative economy and the energy transition.',
      'For audiences, coverage can deliver practical value through career guidance, explanations of funding requirements, insights into emerging industries and information that helps young people make informed decisions.',
      'Media houses are invited to explore interviews, youth profiles, industry conversations, on-site reporting and broadcast opportunities. Editorial access can be coordinated around programme availability, participant consent and each newsroom’s requirements.',
      'The platform offers scope to follow stories beyond the week, examining how young people progress and what enables meaningful access to opportunity.',
    ],
    industryInvitation: [
      'Employers, training institutions, funders, development agencies and corporate partners are invited to contribute opportunities and expertise aligned with their priorities.',
      'Participation can support talent engagement, enterprise pipeline development and community relationships, with agreed deliverables and reporting providing a basis for assessing value.',
      'Bring an opportunity. Share expertise. Help a young person take the next step.',
    ],
    eventDetails: {
      event: 'Vaal EmpowaYouth Week 2027',
      dates: '3–7 May 2027',
      time: '08:00–15:00 daily',
      venue: 'Koinonia Bible Church, Zone 14, Sebokeng, Gauteng',
      theme: 'Powering South Africa’s Youth Economy',
      targetAttendance: '10,000+ young people across five days',
      audience:
        'Job seekers, unemployed graduates, aspiring entrepreneurs, matriculants and young people outside employment, education or training',
    },
    boilerplate:
      'EmpowaYouth is an EmpowaWorx platform advancing youth development through inspiration, connection and practical pathways to economic participation. Its strategic promise, INSPIRED | CONNECTED | TRANSFORMED, guides its focus on skills, industry exposure, entrepreneurship and access to opportunity.',
    mediaContact: {
      name: 'Boitumelo Mmakou',
      title: 'Public Relations Manager',
      organization: 'EmpowaWorx',
      email: 'boitumelo@empowaworx.co.za',
      mobile: '+27 (0)71 400 5152',
      landline: '+27 (0)11 482 7256 / 7257',
      website: 'https://www.empowaworx.co.za',
    },
    fullRawText: `MEDIA RELEASE
FOR IMMEDIATE RELEASE

Vaal EmpowaYouth Week 2027 to connect young people with skills, industry and enterprise opportunities
3–7 May 2027 | Koinonia Bible Church, Zone 14, Sebokeng
EmpowaYouth | INSPIRED | CONNECTED | TRANSFORMED

SEBOKENG, GAUTENG: Vaal EmpowaYouth Week 2027 will bring young people, employers, educators, funders and enterprise development partners together from 3–7 May 2027, creating a platform for access to career pathways, practical skills, entrepreneurship support and industry networks.

Under the theme “Powering South Africa’s Youth Economy”, the five-day programme aims to attract more than 10,000 young people across the week. Its focus is clear: help young people understand where opportunities exist, what those opportunities require and how to take the next step towards participation.

For unemployed graduates, job seekers, aspiring entrepreneurs, matriculants and young people outside employment, education or training, the platform is designed to make an often fragmented opportunity landscape easier to navigate.

For industry, it offers a concentrated opportunity to engage emerging talent, develop enterprise pipelines and connect organisational investment with the needs and ambitions of young South Africans.

Inspired. Connected. Transformed.
Vaal EmpowaYouth Week 2027 is built around three strategic priorities:
• INSPIRED: Broaden young people’s understanding of possible futures through industry exposure, credible role models and practical insight into careers and enterprise.
• CONNECTED: Bring young people closer to employers, education and training institutions, funders, mentors and market access networks.
• TRANSFORMED: Support progression from participation to practical next steps, including applications, training referrals, enterprise development support and further engagement with opportunity providers.

The emphasis is on making each interaction useful beyond the event itself.

Five days focused on economic participation
The programme will explore five opportunity areas:
1. Health, Wellness & Care Economy: Career pathways, training opportunities and enterprise possibilities across health services, care and wellbeing.
2. AI, Digital Economy & Deep Tech: Digital capability, emerging technologies and the skills needed to participate in a changing world of work.
3. Creative & Film Economy: Creative careers, content production, intellectual property and the business of turning talent into income.
4. Green Economy & Climate Innovation: Opportunities linked to renewable energy, sustainable agriculture, environmental services and circular business models.
5. Entrepreneurship, Funding & Innovation Ecosystems: Business readiness, funding requirements, enterprise development and access to customers and supply chains.

Why the Vaal matters
The Vaal’s industrial heritage, entrepreneurial energy and young talent make it a significant setting for conversations about South Africa’s economic future.
Hosting the programme in Sebokeng brings industry engagement closer to communities where access to professional networks, career guidance and enterprise support can shape a young person’s next decision.
The ambition is to strengthen the connections between local potential and the institutions, industries and markets that can help it grow.

“Young people need ambition backed by access: access to information, skills, decision-makers and a clear next step. Vaal EmpowaYouth Week 2027 is designed to bring those connections closer to the communities that need them. When young people are inspired, connected and supported to act, we create stronger foundations for enterprise, employment and economic participation.”
— Simphiwe Masiza, Founder & Executive Producer, EmpowaYouth

A compelling editorial platform for media houses
Vaal EmpowaYouth Week offers media houses a local lens on issues of national importance: youth employment, artificial intelligence, skills development, township enterprise, the creative economy and the energy transition.

For audiences, coverage can deliver practical value through career guidance, explanations of funding requirements, insights into emerging industries and information that helps young people make informed decisions.

Media houses are invited to explore interviews, youth profiles, industry conversations, on-site reporting and broadcast opportunities. Editorial access can be coordinated around programme availability, participant consent and each newsroom’s requirements.

The platform offers scope to follow stories beyond the week, examining how young people progress and what enables meaningful access to opportunity.

An invitation to industry and opportunity providers
Employers, training institutions, funders, development agencies and corporate partners are invited to contribute opportunities and expertise aligned with their priorities.

Participation can support talent engagement, enterprise pipeline development and community relationships, with agreed deliverables and reporting providing a basis for assessing value.

Bring an opportunity. Share expertise. Help a young person take the next step.

Event details:
• Event: Vaal EmpowaYouth Week 2027
• Dates: 3–7 May 2027
• Time: 08:00–15:00 daily
• Venue: Koinonia Bible Church, Zone 14, Sebokeng, Gauteng
• Theme: Powering South Africa’s Youth Economy
• Target attendance: 10,000+ young people across five days
• Audience: Job seekers, unemployed graduates, aspiring entrepreneurs, matriculants and young people outside employment, education or training

About EmpowaYouth:
EmpowaYouth is an EmpowaWorx platform advancing youth development through inspiration, connection and practical pathways to economic participation. Its strategic promise, INSPIRED | CONNECTED | TRANSFORMED, guides its focus on skills, industry exposure, entrepreneurship and access to opportunity.

Media enquiries:
For interviews, programme information and enquiries about editorial access:
Boitumelo Mmakou
Public Relations Manager, EmpowaWorx
Email: boitumelo@empowaworx.co.za
Mobile: +27 (0)71 400 5152
Landline: +27 (0)11 482 7256 / 7257
Website: www.empowaworx.co.za

ENDS`,
  },
];
