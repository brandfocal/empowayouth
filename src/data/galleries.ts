export interface GalleryVideo {
  id: string;
  title: string;
  description: string;
  duration?: string;
  thumbnail: string;
  youtubeId?: string | null;
  videoUrl?: string | null;
  tag?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  category: string;
  url: string;
  thumbnail?: string;
}

export interface GalleryEdition {
  id: string;
  slug: string;
  title: string;
  edition: string;
  year: number;
  location: string;
  partner: string;
  badge: string;
  headline: string;
  description: string;
  heroImage: string;
  stats: { label: string; value: string }[];
  videos: GalleryVideo[];
  images: GalleryImage[];
  playlistUrl?: string;
}

export const vaal2026Videos: GalleryVideo[] = [
  {
    id: 'vaal26-vid-1',
    title: "EmpowaYouth Week Vaal' 2026 — Day 1 (Morning Kickoff)",
    description: 'Day 1 morning launch broadcast, welcoming delegates and thousands of ambitious youth across the Vaal region.',
    duration: '01:20:18',
    thumbnail: 'https://img.youtube.com/vi/4tWzntnFPNY/hqdefault.jpg',
    youtubeId: '4tWzntnFPNY',
    tag: 'Day 1 Kickoff',
  },
  {
    id: 'vaal26-vid-2',
    title: "EmpowaYouth Week Vaal' 2026 — Day 1 (Main Plenary)",
    description: 'Day 1 official opening plenary session with opening dignitaries, partner leaders, and youth dialogues.',
    duration: '03:14:52',
    thumbnail: 'https://img.youtube.com/vi/TTtFt0t3HOQ/hqdefault.jpg',
    youtubeId: 'TTtFt0t3HOQ',
    tag: 'Day 1 Plenary',
  },
  {
    id: 'vaal26-vid-3',
    title: "EmpowaYouth Week Vaal' 2026 — Day 1 (Afternoon Session)",
    description: 'Day 1 afternoon plenary, career readiness clinics, and interactive student engagement sessions.',
    duration: '01:44:33',
    thumbnail: 'https://img.youtube.com/vi/zA4rtI6YEBw/hqdefault.jpg',
    youtubeId: 'zA4rtI6YEBw',
    tag: 'Day 1 Afternoon',
  },
  {
    id: 'vaal26-vid-4',
    title: "EmpowaYouth Week Vaal' 2026 — Day 2 (Morning Session)",
    description: 'Day 2 morning live broadcast featuring economic empowerment discussions and technical skills sessions.',
    duration: '03:04:12',
    thumbnail: 'https://img.youtube.com/vi/qglBkXVXK3s/hqdefault.jpg',
    youtubeId: 'qglBkXVXK3s',
    tag: 'Day 2 Morning',
  },
  {
    id: 'vaal26-vid-5',
    title: "EmpowaYouth Week Vaal' 2026 — Day 2 (Afternoon Session)",
    description: 'Day 2 afternoon interactive workshops, practical training demonstrations, and stakeholder panels.',
    duration: '02:07:44',
    thumbnail: 'https://img.youtube.com/vi/ztPBGRCEwNo/hqdefault.jpg',
    youtubeId: 'ztPBGRCEwNo',
    tag: 'Day 2 Afternoon',
  },
  {
    id: 'vaal26-vid-6',
    title: "EmpowaYouth Week Vaal' 2026 — Day 2 (Keynote Segment)",
    description: 'Day 2 keynote address on driving youth employability and sustainable skills growth across the Vaal.',
    duration: '06:35',
    thumbnail: 'https://img.youtube.com/vi/xAAtyHEQ4T4/hqdefault.jpg',
    youtubeId: 'xAAtyHEQ4T4',
    tag: 'Day 2 Keynote',
  },
  {
    id: 'vaal26-vid-7',
    title: "EmpowaYouth Week Vaal' 2026 — Day 2 (Stream Segment)",
    description: 'Day 2 live stream broadcast segment from the main auditorium stage.',
    duration: '00:04',
    thumbnail: 'https://img.youtube.com/vi/YAvRGtcLvDg/hqdefault.jpg',
    youtubeId: 'YAvRGtcLvDg',
    tag: 'Day 2 Segment',
  },
  {
    id: 'vaal26-vid-8',
    title: "EmpowaYouth Week Vaal' 2026 — Day 2 (Interviews & Highlights)",
    description: 'Day 2 attendee reflections, stakeholder interviews, and exhibition floor activations.',
    duration: '08:23',
    thumbnail: 'https://img.youtube.com/vi/2ZYrusYPQXg/hqdefault.jpg',
    youtubeId: '2ZYrusYPQXg',
    tag: 'Day 2 Highlights',
  },
  {
    id: 'vaal26-vid-9',
    title: "EmpowaYouth Week Vaal' 2026 — Day 3 (Morning Plenary)",
    description: 'Day 3 morning plenary connecting Vaal youth with accredited bursaries and industry partners.',
    duration: '02:58:15',
    thumbnail: 'https://img.youtube.com/vi/R729tF5dkF4/hqdefault.jpg',
    youtubeId: 'R729tF5dkF4',
    tag: 'Day 3 Morning',
  },
  {
    id: 'vaal26-vid-10',
    title: "EmpowaYouth Week Vaal' 2026 — Day 3 (Afternoon Session)",
    description: 'Day 3 afternoon broadcast covering enterprise funding, pitching preparation, and sector insights.',
    duration: '03:08:22',
    thumbnail: 'https://img.youtube.com/vi/tb18dXD3lOA/hqdefault.jpg',
    youtubeId: 'tb18dXD3lOA',
    tag: 'Day 3 Afternoon',
  },
  {
    id: 'vaal26-vid-11',
    title: "EmpowaYouth Week Vaal' 2026 — Day 4 (Full Day Broadcast)",
    description: 'Day 4 live broadcast featuring deep-dive technical masterclasses, recruiter panels, and youth mentoring.',
    duration: '02:53:48',
    thumbnail: 'https://img.youtube.com/vi/aUDQ03GMUIQ/hqdefault.jpg',
    youtubeId: 'aUDQ03GMUIQ',
    tag: 'Day 4 Full Day',
  },
  {
    id: 'vaal26-vid-12',
    title: "EmpowaYouth Week Vaal' 2026 — Day 5 (Grand Finale)",
    description: 'Day 5 grand finale live broadcast — pitching competition winners, certificate awards, and celebrations.',
    duration: '06:20:14',
    thumbnail: 'https://img.youtube.com/vi/WY8PxcydrmY/hqdefault.jpg',
    youtubeId: 'WY8PxcydrmY',
    tag: 'Day 5 Grand Finale',
  },
];

export const ekurhuleni2025Videos: GalleryVideo[] = [
  {
    id: 'ekurhuleni25-vid-1',
    title: 'EKHURULENI EMPOWAYOUTH - FULL VERSION',
    description: 'Official full feature documentary and broadcast overview of EmpowaYouth Week in Ekurhuleni 2025 — spotlighting youth empowerment, pitching battles, and career opportunities.',
    duration: '05:05',
    thumbnail: 'https://img.youtube.com/vi/t_D0YtTAjC0/hqdefault.jpg',
    youtubeId: 't_D0YtTAjC0',
    tag: 'Full Feature',
  },
  {
    id: 'ekurhuleni25-vid-2',
    title: 'EKHURULENI EMPOWAYOUTH - DAY ONE',
    description: 'Day 1 highlights from EmpowaYouth Week Ekurhuleni 2025 — official opening ceremony, leadership keynotes, and initial delegate orientation.',
    duration: '02:07',
    thumbnail: 'https://img.youtube.com/vi/Qldd76QdZIA/hqdefault.jpg',
    youtubeId: 'Qldd76QdZIA',
    tag: 'Day 1 Highlights',
  },
  {
    id: 'ekurhuleni25-vid-3',
    title: 'EKHURULENI EMPOWAYOUTH - DAY TWO',
    description: 'Day 2 recap from EmpowaYouth Week Ekurhuleni 2025 — skills development masterclasses, sector clinics, and interactive partner exhibition booths.',
    duration: '02:09',
    thumbnail: 'https://img.youtube.com/vi/AeNPV5cBrqM/hqdefault.jpg',
    youtubeId: 'AeNPV5cBrqM',
    tag: 'Day 2 Highlights',
  },
  {
    id: 'ekurhuleni25-vid-4',
    title: 'EKHURULENI EMPOWAYOUTH - DAY THREE',
    description: 'Day 3 grand finale and entrepreneurship pitching competition highlights from EmpowaYouth Week Ekurhuleni 2025.',
    duration: '02:35',
    thumbnail: 'https://img.youtube.com/vi/RvjJvng2jdk/hqdefault.jpg',
    youtubeId: 'RvjJvng2jdk',
    tag: 'Day 3 Finale',
  },
];

export const northWest2023Videos: GalleryVideo[] = [
  {
    id: 'nw23-vid-1',
    title: 'EYW NW Experience',
    description: 'Official highlight recap showing the transformative energy, youth participation, and impact of EmpowaYouth Week in North West.',
    duration: '04:42',
    thumbnail: 'https://img.youtube.com/vi/nMwd9_z8px8/hqdefault.jpg',
    youtubeId: 'nMwd9_z8px8',
    tag: 'Highlights Experience',
  },
  {
    id: 'nw23-vid-2',
    title: 'EYW NW Day 2 Reel',
    description: 'Day 2 recap reel capturing the workshop sessions, student delegates, and exhibition energy from EmpowaYouth Week North West.',
    duration: '00:55',
    thumbnail: 'https://img.youtube.com/vi/t1uitCdRVSs/hqdefault.jpg',
    youtubeId: 't1uitCdRVSs',
    tag: 'Day 2 Reel',
  },
];

export const limpopo2022Videos: GalleryVideo[] = [
  {
    id: 'limpopo22-vid-1',
    title: 'EYW Limpopo Experience',
    description: 'Official highlight experience and documentary recap from the EmpowaYouth Weekend 2022 in Limpopo.',
    duration: '03:49',
    thumbnail: 'https://img.youtube.com/vi/VgpyNdfBOYo/hqdefault.jpg',
    youtubeId: 'VgpyNdfBOYo',
    tag: 'Highlights Experience',
  },
  {
    id: 'limpopo22-vid-2',
    title: 'EYW Limpopo Day 1 — Frans Ramonyatse',
    description: 'Day 1 address and leadership masterclass featuring Frans Ramonyatse at EmpowaYouth Weekend Limpopo.',
    duration: '11:06',
    thumbnail: 'https://img.youtube.com/vi/3oW08ircvS4/hqdefault.jpg',
    youtubeId: '3oW08ircvS4',
    tag: 'Day 1 Keynote',
  },
  {
    id: 'limpopo22-vid-3',
    title: 'EmpowaYouth Limpopo — Nyiko Baloyi',
    description: 'Inspiring speaker session and youth entrepreneurship insights with Nyiko Baloyi at EmpowaYouth Weekend Limpopo.',
    duration: '16:49',
    thumbnail: 'https://img.youtube.com/vi/AKzyRdnEet8/hqdefault.jpg',
    youtubeId: 'AKzyRdnEet8',
    tag: 'Speaker Session',
  },
];

export const galleriesData: GalleryEdition[] = [
  // ==========================================
  // 1. VAAL – 2026
  // ==========================================
  {
    id: 'vaal-2026',
    slug: 'vaal-2026',
    title: 'EmpowaYouth Week',
    edition: 'Vaal – 2026',
    year: 2026,
    location: 'Vaal, Gauteng',
    partner: 'Vaal Regional & Industry Stakeholders',
    badge: 'Latest Edition 2026',
    headline: '5 Days of Live Impact, Enterprise Pitching, and Accredited Skills Pathways',
    description:
      'The 2026 edition of EmpowaYouth Week in the Vaal united youth with direct access to industry captains, skills bursaries, entrepreneurship funding battles, and live masterclasses. Watch the complete multi-hour livestream recordings from every single day of the week below.',
    heroImage: 'https://img.youtube.com/vi/WY8PxcydrmY/hqdefault.jpg',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLCw2jEjBGMr3TcoMxl0XiwqRjCWrhhBOg',
    stats: [
      { label: 'Broadcast Days', value: '5 Days' },
      { label: 'Live Stream Hours', value: '27+ Hours' },
      { label: 'Broadcast Sessions', value: '12 Streams' },
      { label: 'Grand Finale Run', value: '6h 20m' },
    ],
    videos: vaal2026Videos,
    images: [],
  },
  // ==========================================
  // 2. EKURHULENI – 2025
  // ==========================================
  {
    id: 'ekurhuleni-2025',
    slug: 'ekurhuleni-2025',
    title: 'EmpowaYouth Week',
    edition: 'Ekurhuleni – 2025',
    year: 2025,
    location: 'Ekurhuleni, Gauteng',
    partner: 'City of Ekurhuleni & Industry Partners',
    badge: 'Regional Edition 2025',
    headline: '3 Days of High-Impact Skills Training, Enterprise Funding, and Youth Career Pathways',
    description:
      'The 2025 edition of EmpowaYouth Week in Ekurhuleni brought transformative training, enterprise pitching competitions, accredited masterclasses, and direct career advisory pods to thousands of ambitious youth across the East Rand. Watch the daily recaps and full broadcast overview below.',
    heroImage: 'https://img.youtube.com/vi/t_D0YtTAjC0/hqdefault.jpg',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLY6BpHjPJzWc',
    stats: [
      { label: 'Event Days', value: '3 Days' },
      { label: 'Broadcast Features', value: '4 Videos' },
      { label: 'Region', value: 'Ekurhuleni' },
      { label: 'Focus', value: 'Skills & Enterprise' },
    ],
    videos: ekurhuleni2025Videos,
    images: [],
  },
  // ==========================================
  // 3. NORTH WEST – 2023
  // ==========================================
  {
    id: 'north-west-2023',
    slug: 'north-west-2023',
    title: 'EmpowaYouth Week',
    edition: 'North West – 2023',
    year: 2023,
    location: 'North West Province',
    partner: 'North West Provincial & Industry Partners',
    badge: 'Provincial Edition 2023',
    headline: 'Empowering North West Youth through Skills Development, Innovation Masterclasses, and Economic Inclusion',
    description:
      'The EmpowaYouth Week in North West brought together thousands of passionate youth, industry mentors, and training authorities for high-impact workshops, career guidance, and entrepreneurship enablement. Watch the experience highlights and daily reels below.',
    heroImage: 'https://img.youtube.com/vi/nMwd9_z8px8/hqdefault.jpg',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLonp0XsaNY5InTMSSuDxL6UhEIG2pd0az',
    stats: [
      { label: 'Event Edition', value: 'North West' },
      { label: 'Broadcast Features', value: '2 Videos' },
      { label: 'Region', value: 'North West' },
      { label: 'Focus', value: 'Skills Revolution' },
    ],
    videos: northWest2023Videos,
    images: [],
  },
  // ==========================================
  // 4. ORANGE FARM – 2023
  // ==========================================
  {
    id: 'orange-farm-2023',
    slug: 'orange-farm-2023',
    title: 'TETA Empowayouth Week',
    edition: 'Orange Farm – 2023',
    year: 2023,
    location: 'Eyethu Orange Farm Mall & Multipurpose Centre, Gauteng',
    partner: 'Transport Education Training Authority (TETA)',
    badge: 'Flagship Edition 2023',
    headline: 'Accelerating Momentum in the Transport and Logistics Economy',
    description:
      'The 2023 edition of the TETA Empowayouth Week in Orange Farm united thousands of ambitious youth with direct access to accredited transport bursaries, commercial driver licensing opportunities, tech innovation masterclasses, and entrepreneurial seed capital.',
    heroImage: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1453_1.jpg',
    stats: [
      { label: 'Youth Attendees', value: '7,200+' },
      { label: 'Accredited Opportunities', value: '450+' },
      { label: 'Pitch Funding Distributed', value: 'R350,000' },
      { label: 'Direct Industry Exhibitors', value: '48+' },
    ],
    videos: [
    {
        "id": "of23-vid-1",
        "title": "EYW 23 Orange Farm Day 2 Reel",
        "description": "Day 2 recap of TETA EmpowaYouth Week in Orange Farm — keynotes, student engagement, and transport sector briefings.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1453_1.jpg",
        "youtubeId": "Lo2iAsxWvR0",
        "tag": "Day 2 Highlights"
    },
    {
        "id": "of23-vid-2",
        "title": "EYW 23 Orange Farm Day 3 Reel",
        "description": "Day 3 highlights featuring innovation hubs, entrepreneurship discussions, and SETA training opportunities.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2530.jpg",
        "youtubeId": "ccIHZeCzbRQ",
        "tag": "Day 3 Highlights"
    },
    {
        "id": "of23-vid-3",
        "title": "EYW 2023 Orange Farm Day 4 Reel",
        "description": "Day 4 live pitch presentations, CV review clinics, and direct engagement with transport captains.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2438.jpg",
        "youtubeId": "FEn_Uhx6UGU",
        "tag": "Day 4 Highlights"
    },
    {
        "id": "of23-vid-4",
        "title": "EYW 23 Orange Farm Day 5 Reel",
        "description": "Grand finale celebrations, bursary and award announcements, and youth transformation reflections.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2360.jpg",
        "youtubeId": "sORLXrNa0ME",
        "tag": "Grand Finale"
    }
],
    images: [
    {
        "id": "of23-img-1",
        "title": "Orange Farm 2023 Highlight #1",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1453_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1453_1-400x284.jpg"
    },
    {
        "id": "of23-img-2",
        "title": "Orange Farm 2023 Highlight #2",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2530.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2530-400x284.jpg"
    },
    {
        "id": "of23-img-3",
        "title": "Orange Farm 2023 Highlight #3",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2438.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2438-400x284.jpg"
    },
    {
        "id": "of23-img-4",
        "title": "Orange Farm 2023 Highlight #4",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2360.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2360-400x284.jpg"
    },
    {
        "id": "of23-img-5",
        "title": "Orange Farm 2023 Highlight #5",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1400_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1400_1-400x284.jpg"
    },
    {
        "id": "of23-img-6",
        "title": "Orange Farm 2023 Highlight #6",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1160_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1160_1-400x284.jpg"
    },
    {
        "id": "of23-img-7",
        "title": "Orange Farm 2023 Highlight #7",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1560_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1560_1-400x284.jpg"
    },
    {
        "id": "of23-img-8",
        "title": "Orange Farm 2023 Highlight #8",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1573_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1573_1-400x284.jpg"
    },
    {
        "id": "of23-img-9",
        "title": "Orange Farm 2023 Highlight #9",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1630_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1630_1-400x284.jpg"
    },
    {
        "id": "of23-img-10",
        "title": "Orange Farm 2023 Highlight #10",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1430_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1430_1-400x284.jpg"
    },
    {
        "id": "of23-img-11",
        "title": "Orange Farm 2023 Highlight #11",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1253_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1253_1-400x284.jpg"
    },
    {
        "id": "of23-img-12",
        "title": "Orange Farm 2023 Highlight #12",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1364_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1364_1-400x284.jpg"
    },
    {
        "id": "of23-img-13",
        "title": "Orange Farm 2023 Highlight #13",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1442_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1442_1-400x284.jpg"
    },
    {
        "id": "of23-img-14",
        "title": "Orange Farm 2023 Highlight #14",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1238_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1238_1-400x284.jpg"
    },
    {
        "id": "of23-img-15",
        "title": "Orange Farm 2023 Highlight #15",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1312_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1312_1-400x284.jpg"
    },
    {
        "id": "of23-img-16",
        "title": "Orange Farm 2023 Highlight #16",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2394.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2394-400x284.jpg"
    },
    {
        "id": "of23-img-17",
        "title": "Orange Farm 2023 Highlight #17",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1300_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1300_1-400x284.jpg"
    },
    {
        "id": "of23-img-18",
        "title": "Orange Farm 2023 Highlight #18",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/5A6A3604.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/5A6A3604-400x284.jpg"
    },
    {
        "id": "of23-img-19",
        "title": "Orange Farm 2023 Highlight #19",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1380_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1380_1-400x284.jpg"
    },
    {
        "id": "of23-img-20",
        "title": "Orange Farm 2023 Highlight #20",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2380.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2380-400x284.jpg"
    },
    {
        "id": "of23-img-21",
        "title": "Orange Farm 2023 Highlight #21",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1231_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1231_1-400x284.jpg"
    },
    {
        "id": "of23-img-22",
        "title": "Orange Farm 2023 Highlight #22",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2395.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2395-400x284.jpg"
    },
    {
        "id": "of23-img-23",
        "title": "Orange Farm 2023 Highlight #23",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1581_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1581_1-400x284.jpg"
    },
    {
        "id": "of23-img-24",
        "title": "Orange Farm 2023 Highlight #24",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2433.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2433-400x284.jpg"
    },
    {
        "id": "of23-img-25",
        "title": "Orange Farm 2023 Highlight #25",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2480.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2480-400x284.jpg"
    },
    {
        "id": "of23-img-26",
        "title": "Orange Farm 2023 Highlight #26",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2396.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2396-400x284.jpg"
    },
    {
        "id": "of23-img-27",
        "title": "Orange Farm 2023 Highlight #27",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1465_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1465_1-400x284.jpg"
    },
    {
        "id": "of23-img-28",
        "title": "Orange Farm 2023 Highlight #28",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1503_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1503_1-400x284.jpg"
    },
    {
        "id": "of23-img-29",
        "title": "Orange Farm 2023 Highlight #29",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1349_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1349_1-400x284.jpg"
    },
    {
        "id": "of23-img-30",
        "title": "Orange Farm 2023 Highlight #30",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2406.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_2406-400x284.jpg"
    },
    {
        "id": "of23-img-31",
        "title": "Orange Farm 2023 Highlight #31",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1387_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1387_1-400x284.jpg"
    },
    {
        "id": "of23-img-32",
        "title": "Orange Farm 2023 Highlight #32",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1411_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1411_1-400x284.jpg"
    },
    {
        "id": "of23-img-33",
        "title": "Orange Farm 2023 Highlight #33",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1482_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1482_1-400x284.jpg"
    },
    {
        "id": "of23-img-34",
        "title": "Orange Farm 2023 Highlight #34",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1347_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1347_1-400x284.jpg"
    },
    {
        "id": "of23-img-35",
        "title": "Orange Farm 2023 Highlight #35",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Summit Arena",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1483_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1483_1-400x284.jpg"
    },
    {
        "id": "of23-img-36",
        "title": "Orange Farm 2023 Highlight #36",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Youth Energy",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1229_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1229_1-400x284.jpg"
    },
    {
        "id": "of23-img-37",
        "title": "Orange Farm 2023 Highlight #37",
        "caption": "TETA Empowayouth Week Orange Farm 2023 — youth activation, skills sessions, and community moments.",
        "category": "Masterclasses",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1221_1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/BMZ_1221_1-400x284.jpg"
    }
],
  },

  // ==========================================
  // 5. LIMPOPO – 2022
  // ==========================================
  {
    id: 'limpopo-2022',
    slug: 'limpopo-2022',
    title: 'EmpowaYouth Weekend',
    edition: 'Limpopo – 2022',
    year: 2022,
    location: 'Limpopo Province',
    partner: 'Limpopo Provincial & Industry Partners',
    badge: 'Regional Edition 2022',
    headline: 'Activating Limpopo Youth with Entrepreneurship Mentorship, Skills Masterclasses, and Economic Opportunities',
    description:
      'The 2022 edition of the EmpowaYouth Weekend in Limpopo connected youth with inspirational speakers, entrepreneurship clinics, and real pathways to skills and employment. Watch the experience recap and key speaker sessions below.',
    heroImage: 'https://img.youtube.com/vi/VgpyNdfBOYo/hqdefault.jpg',
    playlistUrl: 'https://www.youtube.com/playlist?list=PLonp0XsaNY5JQaNmOgdV-lB_D9somAtPl',
    stats: [
      { label: 'Event Edition', value: 'Limpopo' },
      { label: 'Broadcast Features', value: '3 Videos' },
      { label: 'Region', value: 'Limpopo' },
      { label: 'Focus', value: 'Youth & Enterprise' },
    ],
    videos: limpopo2022Videos,
    images: [],
  },

  // ==========================================
  // 6. ORANGE FARM – 2022
  // ==========================================
  {
    id: 'orange-farm-2022',
    slug: 'orange-farm-2022',
    title: 'TETA Empowayouth Week',
    edition: 'Orange Farm – 2022',
    year: 2022,
    location: 'Orange Farm Multipurpose Centre, Gauteng',
    partner: 'Transport Education Training Authority (TETA) & NYDA',
    badge: 'Impact Edition 2022',
    headline: 'Breaking Barriers: Connecting Grassroots Ambition with Transport Opportunities',
    description:
      'The 2022 TETA EmpowaYouth Week in Orange Farm expanded into a landmark multi-day activation, integrating national stakeholders, NYDA collaboration, skills certification, and immediate corporate intake pipelines.',
    heroImage: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5674.jpg',
    stats: [
      { label: 'Young People Activated', value: '5,800+' },
      { label: 'Learnership Intakes', value: '310+' },
      { label: 'Enterprises Supported', value: '65+' },
      { label: 'Bursary Opportunities', value: '180+' },
    ],
    videos: [
    {
        "id": "of22-vid-1",
        "title": "EYW 2022 Day 1 Teaser",
        "description": "Kick-off teaser from Orange Farm Day 1 — opening ceremonies, delegate registrations, and community mobilisation.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5674.jpg",
        "youtubeId": "xiffsnzpGU0",
        "tag": "Day 1 Teaser"
    },
    {
        "id": "of22-vid-2",
        "title": "EYW 2022 Day 2 Teaser",
        "description": "Day 2 masterclasses, transport career panels, and interactive guidance for Orange Farm candidates.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5255.jpg",
        "youtubeId": "bvrv00m4Zqw",
        "tag": "Day 2 Teaser"
    },
    {
        "id": "of22-vid-3",
        "title": "EYW 2022 Day 3 Teaser",
        "description": "Day 3 sector explorations, skills alignment, and young innovators taking the stage.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5131.jpg",
        "youtubeId": "NlCChZg1hIA",
        "tag": "Day 3 Teaser"
    },
    {
        "id": "of22-vid-4",
        "title": "EYW 2022 Day 4 Teaser",
        "description": "Biz-in-a-Box Dragons Den competition and entrepreneur funding opportunities live from Orange Farm.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5143.jpg",
        "youtubeId": "IVic4aKGJsc",
        "tag": "Day 4 Teaser"
    },
    {
        "id": "of22-vid-5",
        "title": "EYW 2022 Day 5 Teaser",
        "description": "Closing day ceremony, stakeholder appreciation, and placement commitments delivered in Orange Farm.",
        "duration": "01:00",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5509.jpg",
        "youtubeId": "mVonuS0o1-E",
        "tag": "Day 5 Wrap"
    }
],
    images: [
    {
        "id": "of22-img-1",
        "title": "Orange Farm 2022 Highlight #1",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5674.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5674-400x284.jpg"
    },
    {
        "id": "of22-img-2",
        "title": "Orange Farm 2022 Highlight #2",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5255.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5255-400x284.jpg"
    },
    {
        "id": "of22-img-3",
        "title": "Orange Farm 2022 Highlight #3",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5131.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5131-400x284.jpg"
    },
    {
        "id": "of22-img-4",
        "title": "Orange Farm 2022 Highlight #4",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5143.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5143-400x284.jpg"
    },
    {
        "id": "of22-img-5",
        "title": "Orange Farm 2022 Highlight #5",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5509.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5509-400x284.jpg"
    },
    {
        "id": "of22-img-6",
        "title": "Orange Farm 2022 Highlight #6",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5035.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5035-400x284.jpg"
    },
    {
        "id": "of22-img-7",
        "title": "Orange Farm 2022 Highlight #7",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5566.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5566-400x284.jpg"
    },
    {
        "id": "of22-img-8",
        "title": "Orange Farm 2022 Highlight #8",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5713.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5713-400x284.jpg"
    },
    {
        "id": "of22-img-9",
        "title": "Orange Farm 2022 Highlight #9",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5330.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5330-400x284.jpg"
    },
    {
        "id": "of22-img-10",
        "title": "Orange Farm 2022 Highlight #10",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5497.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5497-400x284.jpg"
    },
    {
        "id": "of22-img-11",
        "title": "Orange Farm 2022 Highlight #11",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5603.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5603-400x284.jpg"
    },
    {
        "id": "of22-img-12",
        "title": "Orange Farm 2022 Highlight #12",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5708-1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5708-1-400x284.jpg"
    },
    {
        "id": "of22-img-13",
        "title": "Orange Farm 2022 Highlight #13",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5235.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5235-400x284.jpg"
    },
    {
        "id": "of22-img-14",
        "title": "Orange Farm 2022 Highlight #14",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5150-1.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5150-1-400x284.jpg"
    },
    {
        "id": "of22-img-15",
        "title": "Orange Farm 2022 Highlight #15",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4948.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4948-400x284.jpg"
    },
    {
        "id": "of22-img-16",
        "title": "Orange Farm 2022 Highlight #16",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5537.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5537-400x284.jpg"
    },
    {
        "id": "of22-img-17",
        "title": "Orange Farm 2022 Highlight #17",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5171.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5171-400x284.jpg"
    },
    {
        "id": "of22-img-18",
        "title": "Orange Farm 2022 Highlight #18",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4984.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4984-400x284.jpg"
    },
    {
        "id": "of22-img-19",
        "title": "Orange Farm 2022 Highlight #19",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5086.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5086-400x284.jpg"
    },
    {
        "id": "of22-img-20",
        "title": "Orange Farm 2022 Highlight #20",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5582.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5582-400x284.jpg"
    },
    {
        "id": "of22-img-21",
        "title": "Orange Farm 2022 Highlight #21",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5506.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5506-400x284.jpg"
    },
    {
        "id": "of22-img-22",
        "title": "Orange Farm 2022 Highlight #22",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5402.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5402-400x284.jpg"
    },
    {
        "id": "of22-img-23",
        "title": "Orange Farm 2022 Highlight #23",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5678.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5678-400x284.jpg"
    },
    {
        "id": "of22-img-24",
        "title": "Orange Farm 2022 Highlight #24",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5550.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5550-400x284.jpg"
    },
    {
        "id": "of22-img-25",
        "title": "Orange Farm 2022 Highlight #25",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5397.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5397-400x284.jpg"
    },
    {
        "id": "of22-img-26",
        "title": "Orange Farm 2022 Highlight #26",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4954.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4954-400x284.jpg"
    },
    {
        "id": "of22-img-27",
        "title": "Orange Farm 2022 Highlight #27",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4958.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4958-400x284.jpg"
    },
    {
        "id": "of22-img-28",
        "title": "Orange Farm 2022 Highlight #28",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5520.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5520-400x284.jpg"
    },
    {
        "id": "of22-img-29",
        "title": "Orange Farm 2022 Highlight #29",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5121.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5121-400x284.jpg"
    },
    {
        "id": "of22-img-30",
        "title": "Orange Farm 2022 Highlight #30",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5649.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5649-400x284.jpg"
    },
    {
        "id": "of22-img-31",
        "title": "Orange Farm 2022 Highlight #31",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4987.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4987-400x284.jpg"
    },
    {
        "id": "of22-img-32",
        "title": "Orange Farm 2022 Highlight #32",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5354.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5354-400x284.jpg"
    },
    {
        "id": "of22-img-33",
        "title": "Orange Farm 2022 Highlight #33",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5443.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5443-400x284.jpg"
    },
    {
        "id": "of22-img-34",
        "title": "Orange Farm 2022 Highlight #34",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5066.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5066-400x284.jpg"
    },
    {
        "id": "of22-img-35",
        "title": "Orange Farm 2022 Highlight #35",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5070.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5070-400x284.jpg"
    },
    {
        "id": "of22-img-36",
        "title": "Orange Farm 2022 Highlight #36",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5539.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5539-400x284.jpg"
    },
    {
        "id": "of22-img-37",
        "title": "Orange Farm 2022 Highlight #37",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5269.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5269-400x284.jpg"
    },
    {
        "id": "of22-img-38",
        "title": "Orange Farm 2022 Highlight #38",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5198.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5198-400x284.jpg"
    },
    {
        "id": "of22-img-39",
        "title": "Orange Farm 2022 Highlight #39",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5181.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5181-400x284.jpg"
    },
    {
        "id": "of22-img-40",
        "title": "Orange Farm 2022 Highlight #40",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5620.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5620-400x284.jpg"
    },
    {
        "id": "of22-img-41",
        "title": "Orange Farm 2022 Highlight #41",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5688.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5688-400x284.jpg"
    },
    {
        "id": "of22-img-42",
        "title": "Orange Farm 2022 Highlight #42",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5122.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5122-400x284.jpg"
    },
    {
        "id": "of22-img-43",
        "title": "Orange Farm 2022 Highlight #43",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5709.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5709-400x284.jpg"
    },
    {
        "id": "of22-img-44",
        "title": "Orange Farm 2022 Highlight #44",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5159.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5159-400x284.jpg"
    },
    {
        "id": "of22-img-45",
        "title": "Orange Farm 2022 Highlight #45",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5685.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5685-400x284.jpg"
    },
    {
        "id": "of22-img-46",
        "title": "Orange Farm 2022 Highlight #46",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5465.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5465-400x284.jpg"
    },
    {
        "id": "of22-img-47",
        "title": "Orange Farm 2022 Highlight #47",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5609.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5609-400x284.jpg"
    },
    {
        "id": "of22-img-48",
        "title": "Orange Farm 2022 Highlight #48",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5175.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5175-400x284.jpg"
    },
    {
        "id": "of22-img-49",
        "title": "Orange Farm 2022 Highlight #49",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4920.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4920-400x284.jpg"
    },
    {
        "id": "of22-img-50",
        "title": "Orange Farm 2022 Highlight #50",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5627.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5627-400x284.jpg"
    },
    {
        "id": "of22-img-51",
        "title": "Orange Farm 2022 Highlight #51",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4962.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_4962-400x284.jpg"
    },
    {
        "id": "of22-img-52",
        "title": "Orange Farm 2022 Highlight #52",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Plenary & Keynote",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5660.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5660-400x284.jpg"
    },
    {
        "id": "of22-img-53",
        "title": "Orange Farm 2022 Highlight #53",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Exhibition",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5015.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5015-400x284.jpg"
    },
    {
        "id": "of22-img-54",
        "title": "Orange Farm 2022 Highlight #54",
        "caption": "TETA Empowayouth Week Orange Farm 2022 — career advisory pods, pitch competitions, and plenaries.",
        "category": "Delegates",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5285.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/09/DSC_5285-400x284.jpg"
    }
],
  },

  // ==========================================
  // 3. ORANGE FARM – 2021
  // ==========================================
  {
    id: 'orange-farm-2021',
    slug: 'orange-farm-2021',
    title: 'TETA Empowayouth Week',
    edition: 'Orange Farm – 2021',
    year: 2021,
    location: 'Orange Farm, Gauteng',
    partner: 'Transport Education Training Authority (TETA)',
    badge: 'Inaugural Community Edition 2021',
    headline: 'Foundational Impact: Bringing Industry Possibility Directly to Township Youth',
    description:
      'The inaugural 2021 TETA Empowayouth Week laid the blueprint for deep-impact township youth intervention. Grounded in resilience, this edition proved that bringing opportunities directly to grassroots communities changes the economic trajectory of thousands.',
    heroImage: 'https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6143.jpg',
    stats: [
      { label: 'Registered Participants', value: '4,200+' },
      { label: 'Career Masterclasses', value: '24+' },
      { label: 'Direct Bursary Inquiries', value: '150+' },
      { label: 'Community Stakeholders', value: '35+' },
    ],
    videos: [
    {
        "id": "of21-vid-1",
        "title": "EmpowaYouth Transformation Week | Media Launch - Day 1",
        "description": "Official media launch of the inaugural EmpowaYouth Transformation Week in Orange Farm.",
        "duration": "01:30",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6143.jpg",
        "youtubeId": "F0m_yFx7RI0",
        "tag": "Launch Day"
    },
    {
        "id": "of21-vid-2",
        "title": "EmpowaYouth Transformation Week | Day 2",
        "description": "Plenary address and TETA career guidance pods connecting grassroots youth with transport programmes.",
        "duration": "01:30",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8074.jpg",
        "youtubeId": "LXaVmG0wyrY",
        "tag": "Day 2"
    },
    {
        "id": "of21-vid-3",
        "title": "EmpowaYouth Transformation Week | Day 3",
        "description": "Youth dialogues, skills development workshops, and industry insights.",
        "duration": "01:30",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8162.jpg",
        "youtubeId": "5boiJhAJhlg",
        "tag": "Day 3"
    },
    {
        "id": "of21-vid-4",
        "title": "EmpowaYouth Transformation Week | Day 4",
        "description": "Township entrepreneur showcases and Dragons Den pitch presentations.",
        "duration": "01:30",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8350.jpg",
        "youtubeId": "nTJIXwuee94",
        "tag": "Day 4"
    },
    {
        "id": "of21-vid-5",
        "title": "EmpowaYouth Transformation Week | Day 5",
        "description": "Learnership sign-ups, interview coaching, and bursary distributions.",
        "duration": "01:30",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8288.jpg",
        "youtubeId": "fAHH1hR-aL0",
        "tag": "Day 5"
    },
    {
        "id": "of21-vid-6",
        "title": "EmpowaYouth Transformation Week | Day 6",
        "description": "Summit grand finale, music, celebration of youth resilience, and legacy blueprint.",
        "duration": "01:30",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7430.jpg",
        "youtubeId": "zNLbbKZFy1E",
        "tag": "Grand Finale"
    }
],
    images: [
    {
        "id": "of21-img-1",
        "title": "Orange Farm 2021 Highlight #1",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6143.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6143-400x284.jpg"
    },
    {
        "id": "of21-img-2",
        "title": "Orange Farm 2021 Highlight #2",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8074.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8074-400x284.jpg"
    },
    {
        "id": "of21-img-3",
        "title": "Orange Farm 2021 Highlight #3",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8162.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8162-400x284.jpg"
    },
    {
        "id": "of21-img-4",
        "title": "Orange Farm 2021 Highlight #4",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8350.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8350-400x284.jpg"
    },
    {
        "id": "of21-img-5",
        "title": "Orange Farm 2021 Highlight #5",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8288.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8288-400x284.jpg"
    },
    {
        "id": "of21-img-6",
        "title": "Orange Farm 2021 Highlight #6",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7430.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7430-400x284.jpg"
    },
    {
        "id": "of21-img-7",
        "title": "Orange Farm 2021 Highlight #7",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8244.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8244-400x284.jpg"
    },
    {
        "id": "of21-img-8",
        "title": "Orange Farm 2021 Highlight #8",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6106.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6106-400x284.jpg"
    },
    {
        "id": "of21-img-9",
        "title": "Orange Farm 2021 Highlight #9",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7321.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7321-400x284.jpg"
    },
    {
        "id": "of21-img-10",
        "title": "Orange Farm 2021 Highlight #10",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8595.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8595-400x284.jpg"
    },
    {
        "id": "of21-img-11",
        "title": "Orange Farm 2021 Highlight #11",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7762.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7762-400x284.jpg"
    },
    {
        "id": "of21-img-12",
        "title": "Orange Farm 2021 Highlight #12",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8035.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8035-400x284.jpg"
    },
    {
        "id": "of21-img-13",
        "title": "Orange Farm 2021 Highlight #13",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8106.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8106-400x284.jpg"
    },
    {
        "id": "of21-img-14",
        "title": "Orange Farm 2021 Highlight #14",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7822.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7822-400x284.jpg"
    },
    {
        "id": "of21-img-15",
        "title": "Orange Farm 2021 Highlight #15",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7424.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7424-400x284.jpg"
    },
    {
        "id": "of21-img-16",
        "title": "Orange Farm 2021 Highlight #16",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7924.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7924-400x284.jpg"
    },
    {
        "id": "of21-img-17",
        "title": "Orange Farm 2021 Highlight #17",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6970.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6970-400x284.jpg"
    },
    {
        "id": "of21-img-18",
        "title": "Orange Farm 2021 Highlight #18",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6046.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6046-400x284.jpg"
    },
    {
        "id": "of21-img-19",
        "title": "Orange Farm 2021 Highlight #19",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7038.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7038-400x284.jpg"
    },
    {
        "id": "of21-img-20",
        "title": "Orange Farm 2021 Highlight #20",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7967.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7967-400x284.jpg"
    },
    {
        "id": "of21-img-21",
        "title": "Orange Farm 2021 Highlight #21",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7567.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7567-400x284.jpg"
    },
    {
        "id": "of21-img-22",
        "title": "Orange Farm 2021 Highlight #22",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8726.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8726-400x284.jpg"
    },
    {
        "id": "of21-img-23",
        "title": "Orange Farm 2021 Highlight #23",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8896.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8896-400x284.jpg"
    },
    {
        "id": "of21-img-24",
        "title": "Orange Farm 2021 Highlight #24",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8473.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8473-400x284.jpg"
    },
    {
        "id": "of21-img-25",
        "title": "Orange Farm 2021 Highlight #25",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7087.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7087-400x284.jpg"
    },
    {
        "id": "of21-img-26",
        "title": "Orange Farm 2021 Highlight #26",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8705.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8705-400x284.jpg"
    },
    {
        "id": "of21-img-27",
        "title": "Orange Farm 2021 Highlight #27",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8494.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8494-400x284.jpg"
    },
    {
        "id": "of21-img-28",
        "title": "Orange Farm 2021 Highlight #28",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6158.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6158-400x284.jpg"
    },
    {
        "id": "of21-img-29",
        "title": "Orange Farm 2021 Highlight #29",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8608.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8608-400x284.jpg"
    },
    {
        "id": "of21-img-30",
        "title": "Orange Farm 2021 Highlight #30",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7763.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7763-400x284.jpg"
    },
    {
        "id": "of21-img-31",
        "title": "Orange Farm 2021 Highlight #31",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7871.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7871-400x284.jpg"
    },
    {
        "id": "of21-img-32",
        "title": "Orange Farm 2021 Highlight #32",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7101.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7101-400x284.jpg"
    },
    {
        "id": "of21-img-33",
        "title": "Orange Farm 2021 Highlight #33",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8081.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8081-400x284.jpg"
    },
    {
        "id": "of21-img-34",
        "title": "Orange Farm 2021 Highlight #34",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8087.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8087-400x284.jpg"
    },
    {
        "id": "of21-img-35",
        "title": "Orange Farm 2021 Highlight #35",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7146.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7146-400x284.jpg"
    },
    {
        "id": "of21-img-36",
        "title": "Orange Farm 2021 Highlight #36",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7274.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7274-400x284.jpg"
    },
    {
        "id": "of21-img-37",
        "title": "Orange Farm 2021 Highlight #37",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_5995.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_5995-400x284.jpg"
    },
    {
        "id": "of21-img-38",
        "title": "Orange Farm 2021 Highlight #38",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7443.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7443-400x284.jpg"
    },
    {
        "id": "of21-img-39",
        "title": "Orange Farm 2021 Highlight #39",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_5987.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_5987-400x284.jpg"
    },
    {
        "id": "of21-img-40",
        "title": "Orange Farm 2021 Highlight #40",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8269.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8269-400x284.jpg"
    },
    {
        "id": "of21-img-41",
        "title": "Orange Farm 2021 Highlight #41",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7956.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7956-400x284.jpg"
    },
    {
        "id": "of21-img-42",
        "title": "Orange Farm 2021 Highlight #42",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7022.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7022-400x284.jpg"
    },
    {
        "id": "of21-img-43",
        "title": "Orange Farm 2021 Highlight #43",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8227.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8227-400x284.jpg"
    },
    {
        "id": "of21-img-44",
        "title": "Orange Farm 2021 Highlight #44",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8714.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8714-400x284.jpg"
    },
    {
        "id": "of21-img-45",
        "title": "Orange Farm 2021 Highlight #45",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7520.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7520-400x284.jpg"
    },
    {
        "id": "of21-img-46",
        "title": "Orange Farm 2021 Highlight #46",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6250.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6250-400x284.jpg"
    },
    {
        "id": "of21-img-47",
        "title": "Orange Farm 2021 Highlight #47",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8010.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8010-400x284.jpg"
    },
    {
        "id": "of21-img-48",
        "title": "Orange Farm 2021 Highlight #48",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8145.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8145-400x284.jpg"
    },
    {
        "id": "of21-img-49",
        "title": "Orange Farm 2021 Highlight #49",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6200.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6200-400x284.jpg"
    },
    {
        "id": "of21-img-50",
        "title": "Orange Farm 2021 Highlight #50",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8865.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8865-400x284.jpg"
    },
    {
        "id": "of21-img-51",
        "title": "Orange Farm 2021 Highlight #51",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8408.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8408-400x284.jpg"
    },
    {
        "id": "of21-img-52",
        "title": "Orange Farm 2021 Highlight #52",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8062.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8062-400x284.jpg"
    },
    {
        "id": "of21-img-53",
        "title": "Orange Farm 2021 Highlight #53",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8282.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8282-400x284.jpg"
    },
    {
        "id": "of21-img-54",
        "title": "Orange Farm 2021 Highlight #54",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7759.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7759-400x284.jpg"
    },
    {
        "id": "of21-img-55",
        "title": "Orange Farm 2021 Highlight #55",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8709.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8709-400x284.jpg"
    },
    {
        "id": "of21-img-56",
        "title": "Orange Farm 2021 Highlight #56",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6043.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_6043-400x284.jpg"
    },
    {
        "id": "of21-img-57",
        "title": "Orange Farm 2021 Highlight #57",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7571.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7571-400x284.jpg"
    },
    {
        "id": "of21-img-58",
        "title": "Orange Farm 2021 Highlight #58",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Summit Opening",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8718.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8718-400x284.jpg"
    },
    {
        "id": "of21-img-59",
        "title": "Orange Farm 2021 Highlight #59",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Advisory Hub",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8061.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_8061-400x284.jpg"
    },
    {
        "id": "of21-img-60",
        "title": "Orange Farm 2021 Highlight #60",
        "caption": "Inaugural TETA Empowayouth Week Orange Farm 2021 — foundational movement, training, and job pathways.",
        "category": "Resilience",
        "url": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7297.jpg",
        "thumbnail": "https://cms.empowayouth.co.za/wp-content/uploads/2023/10/DSC_7297-400x284.jpg"
    }
],
  },
];
