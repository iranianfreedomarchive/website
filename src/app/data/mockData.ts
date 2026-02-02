export interface FallenPerson {
  id: string;
  name: string;
  age: number;
  location: string;
  date: string;
  imageUrl: string;
  biography: string;
  gallery: string[];
}

export const mockFallenData: FallenPerson[] = [
  {
    id: '1',
    name: 'Aria Rezaei',
    age: 23,
    location: 'Tehran',
    date: 'Oct 14, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    biography: 'A young engineering student with dreams of building a better future. Aria was known for their kindness, brilliant mind, and unwavering commitment to justice. They believed in the power of education and peaceful protest to create change.',
    gallery: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    ],
  },
  {
    id: '2',
    name: 'Parisa Hosseini',
    age: 28,
    location: 'Isfahan',
    date: 'Oct 18, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    biography: 'A dedicated teacher who inspired countless students. Parisa devoted her life to education and empowering young minds. She believed that knowledge and critical thinking were the keys to a free society.',
    gallery: [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
    ],
  },
  {
    id: '3',
    name: 'Reza Karimi',
    age: 31,
    location: 'Shiraz',
    date: 'Oct 22, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    biography: 'An artist whose work spoke truth to power. Reza used his art to document the struggles and hopes of his people. His murals became symbols of resistance and freedom throughout the city.',
    gallery: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600',
      'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600',
    ],
  },
  {
    id: '4',
    name: 'Mina Ahmadi',
    age: 19,
    location: 'Mashhad',
    date: 'Oct 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    biography: 'A medical student with a passion for helping others. Mina dreamed of becoming a doctor to serve her community. She was volunteering at protests to provide medical aid when tragedy struck.',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600',
    ],
  },
  {
    id: '5',
    name: 'Amir Rashidi',
    age: 26,
    location: 'Tabriz',
    date: 'Oct 29, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    biography: 'A software developer who used technology to amplify voices. Amir created platforms and tools to help people communicate safely and share their stories with the world.',
    gallery: [
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    ],
  },
  {
    id: '6',
    name: 'Zahra Mohammadi',
    age: 35,
    location: 'Kerman',
    date: 'Nov 2, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400',
    biography: 'A lawyer and human rights activist. Zahra spent her career defending those who had no voice, fighting for justice in the courtroom and on the streets. Her courage inspired many.',
    gallery: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600',
      'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=600',
      'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600',
    ],
  },
  {
    id: '7',
    name: 'Soheil Amiri',
    age: 22,
    location: 'Karaj',
    date: 'Nov 5, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
    biography: 'A journalism student documenting history. Soheil believed in the power of truth and transparency. He risked everything to capture and share the reality of the revolution.',
    gallery: [
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=600',
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600',
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600',
    ],
  },
  {
    id: '8',
    name: 'Leila Sadeghi',
    age: 29,
    location: 'Ahvaz',
    date: 'Nov 8, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400',
    biography: 'An environmental scientist fighting for a sustainable future. Leila advocated for both environmental justice and human rights, seeing them as inseparable causes.',
    gallery: [
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
      'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600',
    ],
  },
  {
    id: '9',
    name: 'Navid Salehi',
    age: 24,
    location: 'Rasht',
    date: 'Nov 12, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    biography: 'A musician whose songs became anthems of hope. Navid\'s music brought people together and gave them strength during the darkest hours. His melodies will echo forever.',
    gallery: [
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    ],
  },
];

export interface DashboardStats {
  livesLost: number;
  injured: number;
  arrests: number;
}

export const mockStats: DashboardStats = {
  livesLost: 2847,
  injured: 15234,
  arrests: 42891,
};
