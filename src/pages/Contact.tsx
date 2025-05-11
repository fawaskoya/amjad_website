import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import { Send, Mail, Phone, MapPin, Headphones, Calendar, Instagram, Youtube, Music } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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
          title="Contact"
          subtitle="Get in touch with DJ Nebula for bookings, collaborations, or general inquiries"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-success/20 border border-success/50 text-success p-4 rounded-lg mb-6"
              >
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
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
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-text-primary mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="collaboration">Collaboration Proposal</option>
                    <option value="press">Press/Media Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="input-field resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                  <p className="text-text-secondary">
                    <a href="mailto:info@djnebula.com" className="hover:text-primary transition-colors">
                      info@djnebula.com
                    </a>
                  </p>
                  <p className="text-text-secondary">
                    <a href="mailto:bookings@djnebula.com" className="hover:text-primary transition-colors">
                      bookings@djnebula.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                  <p className="text-text-secondary">
                    <a href="tel:+97450001234" className="hover:text-secondary transition-colors">
                      +974 5000 1234
                    </a>
                    <span className="text-text-muted text-sm ml-2">(Management)</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Based In</h4>
                  <p className="text-text-secondary">
                    Doha, Qatar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/20 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Availability</h4>
                  <p className="text-text-secondary">
                    Now booking shows for 2025
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-10">
              <h4 className="text-lg font-medium text-white mb-4">Follow DJ Nebula</h4>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-md bg-background-light hover:bg-background text-text-secondary hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
                
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-md bg-background-light hover:bg-background text-text-secondary hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5 mr-2" />
                  YouTube
                </a>
                
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-md bg-background-light hover:bg-background text-text-secondary hover:text-primary transition-colors"
                >
                  <Music className="h-5 w-5 mr-2" />
                  Spotify
                </a>
                
                <a
                  href="https://soundcloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-md bg-background-light hover:bg-background text-text-secondary hover:text-primary transition-colors"
                >
                  <Headphones className="h-5 w-5 mr-2" />
                  SoundCloud
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mb-20">
          <SectionHeading 
            title="Studio Location"
            subtitle="Visit DJ Nebula's production studio in Doha"
          />
          
          <div className="rounded-lg overflow-hidden shadow-xl h-[400px] relative">
            {/* Placeholder for map - in a real application, use Google Maps or similar */}
            <div className="absolute inset-0 bg-background-light"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <p className="text-text-primary text-xl font-medium">Music District</p>
              <p className="text-text-secondary">West Bay, Doha, Qatar</p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Common questions about bookings and collaborations"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-hover">
              <h4 className="text-lg font-heading font-bold text-white mb-3">How far in advance should I book?</h4>
              <p className="text-text-secondary">
                For club shows, 2-3 months is recommended. For festivals and major events, 
                6-12 months is ideal to ensure availability.
              </p>
            </div>
            
            <div className="card-hover">
              <h4 className="text-lg font-heading font-bold text-white mb-3">Do you offer virtual performances?</h4>
              <p className="text-text-secondary">
                Yes! Virtual/livestream performances are available for special events, corporate functions, 
                and private parties.
              </p>
            </div>
            
            <div className="card-hover">
              <h4 className="text-lg font-heading font-bold text-white mb-3">What technical setup do you require?</h4>
              <p className="text-text-secondary">
                A detailed technical rider will be provided upon booking confirmation. Basic requirements include 
                a professional sound system, monitors, and specific booth equipment.
              </p>
            </div>
            
            <div className="card-hover">
              <h4 className="text-lg font-heading font-bold text-white mb-3">Are you open to collaborations?</h4>
              <p className="text-text-secondary">
                Absolutely! DJ Nebula is always interested in collaborating with other artists, producers, 
                and visual designers. Please submit your proposal via the contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;