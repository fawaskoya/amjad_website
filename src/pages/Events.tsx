import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { events, pastEvents } from '../data/events';
import { bookingTypes } from '../data/social';
import { Event } from '../types';
import SectionHeading from '../components/shared/SectionHeading';
import EventCard from '../components/shared/EventCard';
import { Calendar, ChevronDown, Map, Camera } from 'lucide-react';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Format function for dates in the header
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };
  
  // Group events by month and year
  const groupEventsByMonth = (eventsToGroup: Event[]): Record<string, Event[]> => {
    const grouped: Record<string, Event[]> = {};
    
    eventsToGroup.forEach(event => {
      const date = new Date(event.date);
      const key = formatDate(date);
      
      if (!grouped[key]) {
        grouped[key] = [];
      }
      
      grouped[key].push(event);
    });
    
    return grouped;
  };
  
  const groupedUpcomingEvents = groupEventsByMonth(events);
  const groupedPastEvents = groupEventsByMonth(pastEvents);
  
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Events"
          subtitle="Catch DJ Nebula live at venues around the world"
        />
        
        {/* Event Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-background-light rounded-lg p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Calendar className="inline-block mr-2 h-4 w-4" />
              Upcoming Shows
            </button>
            
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'past'
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              <Camera className="inline-block mr-2 h-4 w-4" />
              Past Performances
            </button>
          </div>
        </div>
        
        {/* Events Content */}
        <div>
          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div className="space-y-16 mb-16">
              {Object.entries(groupedUpcomingEvents).map(([month, monthEvents]) => (
                <div key={month}>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                    {month}
                  </h3>
                  
                  <div className="space-y-6">
                    {monthEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              ))}
              
              {Object.keys(groupedUpcomingEvents).length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    No upcoming events scheduled
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Check back soon for new tour dates and performances.
                  </p>
                </div>
              )}
            </div>
          )}
          
          {/* Past Events */}
          {activeTab === 'past' && (
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="card-hover overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={event.image || 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'}
                        alt={event.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
                        <p className="text-sm font-medium text-text-secondary">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                        <h3 className="text-xl font-heading font-bold text-white">{event.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-text-secondary mb-2">
                        <Map className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm">{event.venue}, {event.city}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {pastEvents.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    No past events to display
                  </h3>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Booking Section */}
        <div className="py-16 border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Book DJ Nebula"
              subtitle="Interested in booking DJ Nebula for your event? Fill out the form below to get started."
            />
            
            <div className="card p-8">
              <form onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventType" className="block text-text-primary mb-2">
                      Event Type
                    </label>
                    <div className="relative">
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        className="input-field appearance-none pr-10"
                      >
                        <option value="">Select Event Type</option>
                        {bookingTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted h-5 w-5 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-text-primary mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="input-field"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-text-primary mb-2">
                      Event Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      className="input-field"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-primary mb-2">
                    Event Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Please provide details about your event, expected audience size, technical setup, etc."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                      className="mt-1 mr-2"
                    />
                    <span className="text-text-secondary text-sm">
                      I agree to the processing of my personal data to be contacted about my booking request.
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Submit Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Success Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background-light p-8 rounded-lg max-w-md text-center"
            >
              <div className="bg-primary/20 p-4 rounded-full inline-flex mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Booking Request Received
              </h3>
              <p className="text-text-secondary mb-6">
                Thank you for your interest in booking DJ Nebula. We'll review your request and get back to you within 48 hours.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn-primary"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </motion.main>
  );
};

export default Events;