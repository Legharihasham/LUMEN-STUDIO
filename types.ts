export enum Category {
  JEWELLERY = 'Jewellery',
  HOMEWARES = 'Homewares',
  ACCESSORIES = 'Accessories',
  COUTURE = 'Couture',
  DIGITAL = 'Digital Files',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  isDigital?: boolean; // If true, external link to Cults3D
  externalLink?: string;
}

export interface Workshop {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  eventbriteLink: string;
  description: string;
}

export interface NavLink {
  label: string;
  path: string;
  isExternal?: boolean;
}