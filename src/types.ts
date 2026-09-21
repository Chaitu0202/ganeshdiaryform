export interface Product {
  id: string;
  number: string;
  name: string;
  tagline: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  traditionNote?: string;
  packagingNote?: string;
}

export interface DairyPackage {
  id: string;
  name: string;
  badge: string;
  description: string;
  productIds: string[];
  productNames: string[];
  bestFor: string;
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  role: string;
  verified: boolean;
}
