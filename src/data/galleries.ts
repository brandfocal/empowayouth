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
    heroImage: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8155.jpg',
    stats: [
      { label: 'Youth Attendees', value: '7,200+' },
      { label: 'Accredited Opportunities', value: '450+' },
      { label: 'Pitch Funding Distributed', value: 'R350,000' },
      { label: 'Direct Industry Exhibitors', value: '48+' },
    ],
    videos: [
      {
        id: 'of23-vid-1',
        title: 'TETA EmpowaYouth Week 2023 | Official Highlight Reel',
        description:
          'Experience the high-octane energy, inspiring keynote addresses, and life-changing moments from the 2023 Orange Farm week.',
        duration: '04:15',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8155.jpg',
        youtubeId: 'AM1yPCViGpk', // Replace with your YouTube ID or video link
        videoUrl: '', // Or provide direct video URL
        tag: 'Official Highlight',
      },
      {
        id: 'of23-vid-2',
        title: 'TETA Leadership Address: Building Sustainable Transport Careers',
        description:
          'Keynote reflections on bridging the township unemployment gap through targeted transport sector skills and bursaries.',
        duration: '06:40',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3222.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Keynote & Policy',
      },
      {
        id: 'of23-vid-3',
        title: 'Biz-in-a-Box Dragons Den Pitch Competition Final 2023',
        description:
          'Watch five brave youth entrepreneurs pitch their business ideas live on stage for catalytic grant funding.',
        duration: '08:25',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8138.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Pitching Finals',
      },
      {
        id: 'of23-vid-4',
        title: 'Voices of Orange Farm: Beneficiary Stories & Placements',
        description:
          'Firsthand testimonials from youth who secured learnerships, funding, and career guidance during the week.',
        duration: '03:50',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3374.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Youth Voices',
      },
    ],
    images: [
      {
        id: 'of23-img-1',
        title: 'Main Arena Crowd & Plenary Energy',
        caption: 'Thousands of young leaders assembled in Orange Farm for the morning keynote and industry briefings.',
        category: 'Summit Sessions',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8155.jpg',
      },
      {
        id: 'of23-img-2',
        title: 'TETA Career & Bursary Activation Pod',
        caption: 'Advisors guiding young candidates through transport sector bursary requirements and curriculum options.',
        category: 'Skills Hub',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8141.jpg',
      },
      {
        id: 'of23-img-3',
        title: 'Youth Innovator Pitching on Main Stage',
        caption: 'Finalists presenting their township logistics and mobility solutions to corporate judges.',
        category: 'Dragons Den',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8138.jpg',
      },
      {
        id: 'of23-img-4',
        title: 'Digital Skills & Tech Masterclass',
        caption: 'Interactive workshop on future-proof digital tools, logistics management, and coding basics.',
        category: 'Masterclasses',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8148.jpg',
      },
      {
        id: 'of23-img-5',
        title: 'VIP Dignitaries & TETA Delegation',
        caption: 'Government representatives, SETA executives, and youth leaders during the opening ceremony.',
        category: 'Dignitaries',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8126.jpg',
      },
      {
        id: 'of23-img-6',
        title: 'Peer Networking & Collaboration Space',
        caption: 'Youth exchanging ideas, contacts, and collaborating on joint business ventures between sessions.',
        category: 'Community',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_8109.jpg',
      },
      {
        id: 'of23-img-7',
        title: 'Certificate Awarding & Grant Handover',
        caption: 'Celebrating winners of the enterprise funding support and accredited certificates.',
        category: 'Awards',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3360.jpg',
      },
      {
        id: 'of23-img-8',
        title: 'Outdoor Career Expo & Partner Booths',
        caption: 'Partner organisations offering on-the-spot CV revamps, interview prep, and hiring registrations.',
        category: 'Career Expo',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3374.jpg',
      },
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
    heroImage: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2979.jpg',
    stats: [
      { label: 'Young People Activated', value: '5,800+' },
      { label: 'Learnership Intakes', value: '310+' },
      { label: 'Enterprises Supported', value: '65+' },
      { label: 'Bursary Opportunities', value: '180+' },
    ],
    videos: [
      {
        id: 'of22-vid-1',
        title: 'Discussion | NYDA Joins Empowaworx to Launch 2022 Orange Farm Week',
        description:
          'Broadcast discussion on the national television launch of the 2022 Orange Farm EmpowaYouth Week initiative.',
        duration: '05:12',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2979.jpg',
        youtubeId: 'yovdeoAXRDw', // Actual 2022 Orange Farm broadcast video
        videoUrl: '',
        tag: 'Broadcast Coverage',
      },
      {
        id: 'of22-vid-2',
        title: 'TETA Empowayouth Week 2022: Daily Highlights & Wrap',
        description:
          'Comprehensive recap of plenary sessions, skills pods, transport showcases, and candidate onboarding.',
        duration: '04:45',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2984.jpg',
        youtubeId: 'OAw3QvtnMuU', // Replace with your YouTube ID or video link
        videoUrl: '',
        tag: 'Event Wrap',
      },
      {
        id: 'of22-vid-3',
        title: 'Youth Entrepreneur Pitching Competition 2022',
        description:
          'Orange Farm local entrepreneurs competing for equipment funding, mentoring, and supplier accreditation.',
        duration: '07:10',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3058.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Entrepreneurship',
      },
      {
        id: 'of22-vid-4',
        title: 'Industry Mentorship Panels: Careers in Aviation, Rail & Maritime',
        description:
          'Senior transport captains demystifying entry requirements and technical paths for high-school leavers.',
        duration: '06:05',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2957.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Industry Panels',
      },
    ],
    images: [
      {
        id: 'of22-img-1',
        title: 'Launch Day Welcoming & Crowd Turnout',
        caption: 'Enthusiastic Orange Farm youth queuing for day-one registration and summit accreditation.',
        category: 'Plenary',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2979.jpg',
      },
      {
        id: 'of22-img-2',
        title: 'TETA Career Advisory Zone in Action',
        caption: 'Direct one-on-one engagements between learners and TETA career development specialists.',
        category: 'Advisory',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2984.jpg',
      },
      {
        id: 'of22-img-3',
        title: 'Dynamic Stage Presentations & Guest Speakers',
        caption: 'Inspiring keynote addresses motivating youth to seize high-growth transport sector opportunities.',
        category: 'Keynotes',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3058.jpg',
      },
      {
        id: 'of22-img-4',
        title: 'Interactive CV Clinics & Readiness Coaching',
        caption: 'Volunteers and coaches refining resumes and professional interview presentation.',
        category: 'Coaching',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2957.jpg',
      },
      {
        id: 'of22-img-5',
        title: 'Transport Sector Exhibition Hall',
        caption: 'Cutting-edge exhibits highlighting logistics technology, fleet management, and engineering.',
        category: 'Exhibition',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2906.jpg',
      },
      {
        id: 'of22-img-6',
        title: 'Pitching Finalists Receiving Awards',
        caption: 'Community entrepreneurs receiving seed vouchers and mentorship commitments.',
        category: 'Dragons Den',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2893.jpg',
      },
      {
        id: 'of22-img-7',
        title: 'Youth Community Vibrance & Solidarity',
        caption: 'Young participants bonding, sharing ambitions, and building lifelong peer support networks.',
        category: 'Youth Life',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2879.jpg',
      },
      {
        id: 'of22-img-8',
        title: 'Closing Ceremony & Stakeholder Appreciation',
        caption: 'Commending community partners, leaders, and youth organisers who made the week a milestone.',
        category: 'Ceremony',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3118.jpg',
      },
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
    heroImage: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3216.jpg',
    stats: [
      { label: 'Registered Participants', value: '4,200+' },
      { label: 'Career Masterclasses', value: '24+' },
      { label: 'Direct Bursary Inquiries', value: '150+' },
      { label: 'Community Stakeholders', value: '35+' },
    ],
    videos: [
      {
        id: 'of21-vid-1',
        title: 'Inaugural TETA Orange Farm Week 2021 | Event Story',
        description:
          'How the movement sparked in Orange Farm: setting up the stages, welcoming the youth, and delivering real solutions.',
        duration: '05:30',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3216.jpg',
        youtubeId: 'AE37gSGKEy0', // Replace with your YouTube ID or video link
        videoUrl: '',
        tag: 'Origins & Vision',
      },
      {
        id: 'of21-vid-2',
        title: 'TETA Transport Careers Roadmap for Township Youth',
        description:
          'Deep dive into maritime, aerospace, freight forwarding, and courier sector qualifications.',
        duration: '04:18',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3222.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Transport Roadmap',
      },
      {
        id: 'of21-vid-3',
        title: 'Grassroots Pitch Competition 2021',
        description:
          'Emerging micro-enterprises and community startups making their case for development capital.',
        duration: '06:15',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3230.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Dragons Den',
      },
      {
        id: 'of21-vid-4',
        title: 'Community Feedback & Participant Testimonials',
        description:
          'Reflections from local youth who attended the very first edition and went on to secure formal employment.',
        duration: '03:40',
        thumbnail: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3242.jpg',
        youtubeId: null, // Ready for video link
        videoUrl: '',
        tag: 'Impact Stories',
      },
    ],
    images: [
      {
        id: 'of21-img-1',
        title: 'Foundational Summit Plenary Session',
        caption: 'The opening gathering of the very first TETA EmpowaYouth Week in Orange Farm.',
        category: 'Summit Opening',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3216.jpg',
      },
      {
        id: 'of21-img-2',
        title: 'TETA Advisory Desk & Career Guidance',
        caption: 'Connecting first-generation job seekers with accredited training avenues in transport.',
        category: 'Advisory',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3222.jpg',
      },
      {
        id: 'of21-img-3',
        title: 'Interactive Youth Dialogue',
        caption: 'Q&A session with industry captains on real barriers and overcoming job hunting fatigue.',
        category: 'Dialogue',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3230.jpg',
      },
      {
        id: 'of21-img-4',
        title: 'Women in Logistics & Transport Session',
        caption: 'Spotlighting successful female leaders breaking stereotypes in traditionally male-dominated sectors.',
        category: 'Masterclasses',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_3242.jpg',
      },
      {
        id: 'of21-img-5',
        title: 'Township Entrepreneur Showcases',
        caption: 'Local products and innovative ventures created by Orange Farm youth.',
        category: 'Exhibitions',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2986.jpg',
      },
      {
        id: 'of21-img-6',
        title: 'Learnership Sign-Up Hub',
        caption: 'Youth submitting documents and registering for verified SETA learnership opportunities.',
        category: 'Placements',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2984.jpg',
      },
      {
        id: 'of21-img-7',
        title: 'Celebration of Youth Resilience',
        caption: 'The spirit of determination and optimism that defines South Africa’s next workforce.',
        category: 'Community',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2979.jpg',
      },
      {
        id: 'of21-img-8',
        title: 'Closing Reflections & Masterplan Delivery',
        caption: 'Setting the foundation for continuous annual growth across Gauteng and beyond.',
        category: 'Ceremony',
        url: 'https://empowayouth.co.za/wp-content/uploads/2025/07/DSC_2893.jpg',
      },
    ],
  },
];
