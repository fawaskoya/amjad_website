import React from 'react';
import { Event } from '../../types';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // Format date
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  // Extract day and month for the date badge
  const day = new Date(event.date).getDate();
  const month = new Date(event.date).toLocaleDateString('en-US', { month: 'short' });

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card-hover group relative flex flex-col md:flex-row overflow-hidden"
    >
      {/* Image section */}
      <div className="md:w-1/3 relative">
        <img
          src={event.image || 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg'}
          alt={event.title}
          className="w-full h-48 md:h-full object-cover"
        />
        
        {/* Date badge */}
        <div className="absolute top-4 left-4 bg-primary text-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-primary/80 px-3 py-1 text-center">
            <span className="text-xs font-bold">{month}</span>
          </div>
          <div className="px-3 py-2 text-center bg-background/90">
            <span className="text-xl font-bold">{day}</span>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-heading font-bold text-white mb-2">{event.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-text-secondary">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{formattedDate}</span>
            </div>
            
            <div className="flex items-center text-text-secondary">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{event.venue}, {event.city}, {event.country}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {event.isSoldOut ? (
            <span className="bg-error/20 text-error text-sm px-3 py-1 rounded-full">
              Sold Out
            </span>
          ) : event.isFree ? (
            <span className="bg-success/20 text-success text-sm px-3 py-1 rounded-full">
              Free Entry
            </span>
          ) : event.ticketUrl ? (
            <a 
              href={event.ticketUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex"
            >
              <Ticket className="h-4 w-4 mr-2" />
              Get Tickets
            </a>
          ) : null}
          
          <Link 
            to={`/events/${event.id}`}
            className="btn-outline text-sm"
          >
            Event Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;