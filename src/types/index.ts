export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'vinyl' | 'apparel' | 'digital' | 'bundle';
  image: string;
  description: string;
  isLimitedEdition?: boolean;
  isSoldOut?: boolean;
  options?: ProductOption[];
}

interface ProductOption {
  name: string;
  values: string[];
}

export interface Album {
  id: string;
  title: string;
  releaseYear: number;
  artwork: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  soundCloudUrl?: string;
  tracks: Track[];
}

export interface Track {
  id: string;
  title: string;
  duration: string;
  lyrics?: string;
  story?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketUrl?: string;
  isSoldOut?: boolean;
  isFree?: boolean;
  image?: string;
}

export interface SocialLinks {
  spotify: string;
  youtube: string;
  instagram: string;
  tiktok: string;
  soundcloud?: string;
  appleMusic?: string;
}

export interface NavigationLink {
  path: string;
  label: string;
}

export interface BookingType {
  value: string;
  label: string;
}