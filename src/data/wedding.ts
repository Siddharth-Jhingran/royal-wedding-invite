export const WEDDING = {
  bride: 'Ujjwala',
  groom: 'Akshat',
  brideFull: 'Ujjwala Jhingran',
  groomFull: 'Akshat Joshi',
  families: 'The Jhingran Families',
  hashtag: '#UjjwalaWedsAkshat',
  city: 'Lucknow',
  venueName: 'Inara Farms, Lucknow',
  dateLabel: '21 November 2026',
  timeLabel: '7:00 PM IST',
  targetDate: '2026-11-21T19:00:00+05:30',
  blessing: 'Shubh Vivah',
  couplePhoto:
    'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-15%20at%201.43.03%20PM.jpeg?updatedAt=1792175912288',
  heroPhoto:
    'https://ik.imagekit.io/wbbydpgjl/photo_1.jpeg',
  filmPoster:
    'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/IMG_0878.PNG?updatedAt=1792175587561',
  filmSrc:
    'https://ik.imagekit.io/wbbydpgjl/WhatsApp%20Video%202026-09-24%20at%209.10.23%20PM.mp4',
  audioSrc:
    'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/Inkem%20inkem%20wedding%20card.mp3.mpeg?updatedAt=1792175913564',
}

export const NAV_LINKS = [
  { href: '#date', label: 'Date' },
  { href: '#countdown', label: 'Countdown' },
  // { href: '#story', label: 'Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#film', label: 'Invitation Film' },
  { href: '#destination', label: 'Venues' },
  { href: '#rsvp', label: 'RSVP' },
] as const

export const MILESTONES = [
  {
    title: 'A Chance Encounter',
    date: 'Jaipur, 2019',
    detail:
      'A monsoon evening at a family wedding, a shared glance across the mandap, and a conversation that lasted until dawn.',
    icon: 'spark',
  },
  {
    title: 'The Promise',
    date: 'Udaipur, 2023',
    detail:
      'On the steps of Gangaur Ghat, Vikram asked for forever. Ananya answered with a smile brighter than the lake lamps.',
    icon: 'heart',
  },
  {
    title: 'Roka & Blessings',
    date: 'Delhi, Spring 2026',
    detail:
      'Both families gathered to exchange sweets, blessings, and the first glimpse of a wedding painted in gold and maroon.',
    icon: 'gift',
  },
] as const

export const RITUALS = [
  {
    title: 'Mehendi',
    date: '10 December 2026',
    time: '4:00 PM',
    venue: 'Lake Courtyard, The Leela Palace',
    note: 'Henna, folk songs, and a garden washed in marigold.',
  },
  {
    title: 'Sangeet',
    date: '11 December 2026',
    time: '7:30 PM',
    venue: 'Darbar Hall, Fateh Prakash Palace',
    note: 'A night of dance, dhol, and stories told through song.',
  },
  {
    title: 'Wedding Ceremony',
    date: '12 December 2026',
    time: '7:12 PM',
    venue: 'Mor Chowk, City Palace',
    note: 'Sacred pheras beneath a canopy of jasmine and antique gold.',
  },
  {
    title: 'Reception',
    date: '13 December 2026',
    time: '8:00 PM',
    venue: 'Taj Lake Palace',
    note: 'A royal soirée on the water, under a sky of lanterns.',
  },
] as const

export type GalleryCategory = 'All' | 'Haldi' | 'Rituals' | 'Portraits'

export const GALLERY = [
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-16%20at%2010.26.28%20PM%20(1).jpeg?updatedAt=1792175587889',
    alt: '',
    category: 'Portraits' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-16%20at%2010.26.28%20PM%20(2).jpeg?updatedAt=1792175588064',
    alt: '',
    category: 'Haldi' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-16%20at%204.21.09%20PM.jpeg?updatedAt=1792175587628',
    alt: '',
    category: 'Rituals' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-16%20at%2010.26.27%20PM%20(1).jpeg?updatedAt=1792175587901',
    alt: '',

    category: 'Rituals' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/photo_2.jpeg?updatedAt=1792175587581',
    alt: '',
    category: 'Portraits' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-16%20at%2010.26.27%20PM.jpeg?updatedAt=1792175587991',
    alt: '',
    category: 'Rituals' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-16%20at%2010.26.26%20PM%20(2).jpeg?updatedAt=1792175587698',
    alt: '',
    category: 'Rituals' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/photo_1.jpeg',
    alt: '',
    category: 'Portraits' as GalleryCategory,
  },
  {
    src: 'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-16%20at%2010.26.28%20PM%20(3).jpeg?updatedAt=1792175588810',
    alt: '',
    category: 'Haldi' as GalleryCategory,
  },
]

export const DESTINATIONS = [
  {
    name: 'Queens Banquet Hall',
    role: 'Godbharai Ceremony',
    image:
      'https://ik.imagekit.io/wbbydpgjl/Ujjwala%20Weds%20Akshat/WhatsApp%20Image%202026-10-15%20at%201.58.30%20PM.jpeg?updatedAt=1792175912081',
    address: 'GROUND FLOOR, B- 1/249, Kanpur Rd, MMD1, Sector H, LDA Colony, Lucknow, Uttar Pradesh 226012',
    stay: '20 November 2026.',
    map: 'https://maps.app.goo.gl/u2gUePQ7JVJjq2Bx8',
    concierge: 'tel:+919450375503',
  },
  {
    name: 'Inara Farms',
    role: 'Wedding Ceremony & Reception',
    image:
      'https://ik.imagekit.io/wbbydpgjl/WhatsApp%20Image%202026-10-24%20at%2011.18.39%20PM.jpeg',
    address: 'Plot no 60, near wild crest, Nawabganj, Mahnora, Uttar Pradesh 209859',
    stay: '21 November 2026.',
    map: 'https://maps.app.goo.gl/u5b9zqr5n1J3mnBSA',
    concierge: 'tel:+919450375503',
  }
]
