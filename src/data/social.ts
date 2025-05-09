import { SocialLinks, NavigationLink, BookingType } from '../types';

export const socialLinks: SocialLinks = {
  spotify: 'https://spotify.com',
  youtube: 'https://youtube.com',
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  soundcloud: 'https://soundcloud.com',
  appleMusic: 'https://music.apple.com'
};

export const navigationLinks: NavigationLink[] = [
  { path: '/', label: 'Home' },
  { path: '/shop', label: 'Shop' },
  { path: '/music', label: 'Music' },
  { path: '/events', label: 'Events' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export const bookingTypes: BookingType[] = [
  { value: 'private', label: 'Private Show' },
  { value: 'concert', label: 'Concert' },
  { value: 'festival', label: 'Festival' },
  { value: 'club', label: 'Club Night' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'collaboration', label: 'Artist Collaboration' },
  { value: 'other', label: 'Other' },
];