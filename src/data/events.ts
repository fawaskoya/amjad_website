import { Event } from '../types';

// Current date for reference
const currentDate = new Date();

export const events: Event[] = [
  {
    id: '1',
    title: 'Cosmic Beats Tour - Doha',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 15).toISOString(),
    venue: 'Katara Amphitheatre',
    city: 'Doha',
    country: 'Qatar',
    ticketUrl: 'https://example.com/tickets/1',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
  },
  {
    id: '2',
    title: 'Club Nebula Night',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 28).toISOString(),
    venue: 'Illusion Club',
    city: 'Doha',
    country: 'Qatar',
    ticketUrl: 'https://example.com/tickets/2',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg'
  },
  {
    id: '3',
    title: 'Summer Electronic Festival',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 10).toISOString(),
    venue: 'Al Bidda Park',
    city: 'Doha',
    country: 'Qatar',
    ticketUrl: 'https://example.com/tickets/3',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
  },
  {
    id: '4',
    title: 'Private Event',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 25).toISOString(),
    venue: 'The Pearl-Qatar',
    city: 'Doha',
    country: 'Qatar',
    isSoldOut: true,
    image: 'https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg'
  },
  {
    id: '5',
    title: 'Galactic Grooves - Dubai',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 5).toISOString(),
    venue: 'Coca-Cola Arena',
    city: 'Dubai',
    country: 'UAE',
    ticketUrl: 'https://example.com/tickets/5',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg'
  },
  {
    id: '6',
    title: 'Fan Appreciation Day',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 20).toISOString(),
    venue: 'Virgin Megastore',
    city: 'Doha',
    country: 'Qatar',
    isFree: true,
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg'
  }
];

// Past events for the gallery
export const pastEvents: Event[] = [
  {
    id: 'past-1',
    title: 'New Year\'s Eve Special',
    date: new Date(currentDate.getFullYear(), 0, 1).toISOString(),
    venue: 'W Doha Hotel',
    city: 'Doha',
    country: 'Qatar',
    image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg'
  },
  {
    id: 'past-2',
    title: 'Album Release Party',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 15).toISOString(),
    venue: 'Culture Club',
    city: 'Doha',
    country: 'Qatar',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg'
  },
  {
    id: 'past-3',
    title: 'Sunset Sessions Beach Party',
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 10).toISOString(),
    venue: 'Katara Beach',
    city: 'Doha',
    country: 'Qatar',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'
  }
];