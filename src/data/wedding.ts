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
    'https://ik.imagekit.io/wbbydpgjl/WhatsApp%20Image%202026-10-15%20at%201.43.03%20PM.jpeg',
  heroPhoto:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
  filmPoster:
    'https://ik.imagekit.io/wbbydpgjl/IMG_0878.PNG',
  filmSrc:
    'https://ik.imagekit.io/wbbydpgjl/WhatsApp%20Video%202026-09-24%20at%209.10.23%20PM.mp4',
  audioSrc:
    'https://ik.imagekit.io/wbbydpgjl/Inkem%20inkem%20wedding%20card.mp3.mpeg',
}

export const NAV_LINKS = [
  { href: '#date', label: 'Date' },
  { href: '#countdown', label: 'Countdown' },
  { href: '#story', label: 'Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#film', label: 'Film' },
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
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bride and groom in traditional attire',
    category: 'Portraits' as GalleryCategory,
  },
  {
    src: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=1200&q=80',
    alt: 'Haldi ceremony with turmeric and flowers',
    category: 'Haldi' as GalleryCategory,
  },
  {
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wedding rituals with floral garlands',
    category: 'Rituals' as GalleryCategory,
  },
  {
    src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Couple portrait in palace courtyard',
    category: 'Portraits' as GalleryCategory,
  },
  {
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9d2d9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bridal jewellery and marigold details',
    category: 'Rituals' as GalleryCategory,
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc330bf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Wedding celebration with family',
    category: 'Rituals' as GalleryCategory,
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Romantic couple portrait at dusk',
    category: 'Portraits' as GalleryCategory,
  },
  {
    src: 'https://images.unsplash.com/photo-1583939411023-14754922c800?auto=format&fit=crop&w=1200&q=80',
    alt: 'Turmeric and rose petals for Haldi',
    category: 'Haldi' as GalleryCategory,
  },
]

export const DESTINATIONS = [
  {
    name: 'Queens Banquet Hall',
    role: 'Tilak & Shagan Ceremony',
    image:
      'https://ik.imagekit.io/wbbydpgjl/WhatsApp%20Image%202026-10-15%20at%201.58.30%20PM.jpeg',
    address: 'GROUND FLOOR, B- 1/249, Kanpur Rd, MMD1, Sector H, LDA Colony, Lucknow, Uttar Pradesh 226012',
    stay: 'Arrival by 7:00 PM.',
    map: 'https://maps.app.goo.gl/u2gUePQ7JVJjq2Bx8',
    concierge: 'tel:+919450375503',
  },
  {
    name: 'Inara Farms',
    role: 'Wedding Ceremony & Reception',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a308c1aa?auto=format&fit=crop&w=1200&q=80',
    address: 'Plot no 60, near wild crest, Nawabganj, Mahnora, Uttar Pradesh 209859',
    stay: '.',
    map: 'https://maps.app.goo.gl/u5b9zqr5n1J3mnBSA',
    concierge: 'tel:+919450375503',
  }
]
