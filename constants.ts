import { Category, Product, Workshop } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aether Ring',
    price: 350,
    category: Category.JEWELLERY,
    image: 'https://picsum.photos/id/112/800/800',
    description: 'Sterling silver ring with raw cut quartz. Hand-forged in the studio.',
  },
  {
    id: '2',
    name: 'Orbit Earring',
    price: 120,
    category: Category.JEWELLERY,
    image: 'https://picsum.photos/id/113/800/800',
    description: 'Minimalist kinetic earrings.',
  },
  {
    id: '3',
    name: 'Void Pendant',
    price: 280,
    category: Category.JEWELLERY,
    image: 'https://picsum.photos/id/114/800/800',
    description: 'Oxidized silver pendant representing the void.',
  },
  {
    id: '4',
    name: 'Brutalist Vase',
    price: 150,
    category: Category.HOMEWARES,
    image: 'https://picsum.photos/id/115/800/800',
    description: 'Concrete and resin vessel.',
  },
  {
    id: '5',
    name: 'Leather Tech Pouch',
    price: 95,
    category: Category.ACCESSORIES,
    image: 'https://picsum.photos/id/116/800/800',
    description: 'Vegetable tanned leather pouch for digital nomads.',
  },
  {
    id: '6',
    name: 'Cyber-Couture Bodysuit',
    price: 1200,
    category: Category.COUTURE,
    image: 'https://picsum.photos/id/117/800/800',
    description: 'Made to order. 3D printed elements on mesh.',
  },
  {
    id: '7',
    name: 'Exo-Skeleton STL',
    price: 25,
    category: Category.DIGITAL,
    image: 'https://picsum.photos/id/118/800/800',
    description: 'Digital 3D model for personal printing.',
    isDigital: true,
    externalLink: 'https://cults3d.com',
  },
  {
    id: '8',
    name: 'Spine Armor STL',
    price: 30,
    category: Category.DIGITAL,
    image: 'https://picsum.photos/id/119/800/800',
    description: 'Articulated spine armor model.',
    isDigital: true,
    externalLink: 'https://cults3d.com',
  },
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'w1',
    title: 'Silver Casting Basics',
    date: 'Oct 12, 2024',
    location: 'LUMEN Studio HQ',
    image: 'https://picsum.photos/id/201/800/600',
    eventbriteLink: '#',
    description: 'Learn the lost wax casting process.',
  },
  {
    id: 'w2',
    title: 'Intro to 3D Design',
    date: 'Nov 05, 2024',
    location: 'Online',
    image: 'https://picsum.photos/id/202/800/600',
    eventbriteLink: '#',
    description: 'Digital craft fundamentals using Blender.',
  },
];

export const CATEGORIES = Object.values(Category);
