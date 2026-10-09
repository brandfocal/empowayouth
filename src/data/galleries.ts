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
}

export const galleriesData: GalleryEdition[] = [
  // ==========================================
  // 1. ORANGE FARM – 2023
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
  // 2. ORANGE FARM – 2022
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
