import { Exhibit } from '@/lib/types';

export const exhibits: Exhibit[] = [
  {
    id: 'friendster',
    title: 'Friendster & Early Socials',
    subtitle: 'Your Digital Barkada',
    description: 'Recreate your profile with glitter graphics, testimonials, and your top 8 friends.',
    image: '/images/friendster-mockup.jpg',
    category: 'social',
    path: '/exhibits/friendster',
    color: '#FF6B35'
  },
  {
    id: 'teleserye',
    title: 'Teleserye Living Room',
    subtitle: 'Family Bonding Time',
    description: 'Relive the drama, the tears, and the unforgettable theme songs.',
    image: '/images/teleserye-room.jpg',
    category: 'entertainment',
    path: '/exhibits/teleserye',
    color: '#8B0000'
  },
  {
    id: 'opm',
    title: 'OPM & Hugot Soundtrack',
    subtitle: 'Songs of the Heart',
    description: 'Listen to the hits that defined a generation and share your favorite lyrics.',
    image: '/images/opm-studio.jpg',
    category: 'music',
    path: '/exhibits/opm',
    color: '#DAA520'
  },
  {
    id: 'faith-fiestas',
    title: 'Mobile Games Arcade',
    subtitle: 'Nokia & Classic Gaming',
    description: 'Play real Nokia games from 2000-2010. Snake, Bounce, Space Impact and more!',
    image: '/images/faith-procession.jpg',
    category: 'gaming',
    path: '/exhibits/faith-fiestas',
    color: '#00FF00'
  }
];
