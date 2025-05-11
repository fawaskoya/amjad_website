import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Headphones, Calendar, ShoppingBag, Play, ExternalLink, ArrowRight } from 'lucide-react';
import { albums } from '../data/albums';
import { events } from '../data/events';
import { products } from '../data/products';

import HeroSection from '../components/shared/HeroSection';
import SectionHeading from '../components/shared/SectionHeading';
import NewsletterForm from '../components/shared/NewsletterForm';
import ProductCard from '../components/shared/ProductCard';
import EventCard from '../components/shared/EventCard';
import AlbumCard from '../components/shared/AlbumCard';
import SEO from '../components/shared/SEO';

// Feature flags - set to true when content is ready
const SHOW_LATEST_RELEASE = false;
const SHOW_SHOP_SECTION = false;
const SHOW_EVENTS_SECTION = false;

const Home: React.FC = () => {
  // Get latest album
  const latestAlbum = albums[0];
  
  // Featured products (limited to 4)
  const featuredProducts = products.slice(0, 4);
  
  // Upcoming events (limited to 3)
  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      <SEO 
        title="AMJ - Official Website"
        description="Welcome to the official website of AMJ - Musician, Producer, and Artist. Discover music, tour dates, and exclusive merchandise."
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/images/hero.png"
          title="AMJ"
          subtitle="Creating cosmic beats from the heart of Doha"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={latestAlbum.spotifyUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Headphones className="mr-2 h-5 w-5" /> Listen Now
            </a>
            {SHOW_SHOP_SECTION && (
              <Link to="/shop" className="btn-outline">
                <ShoppingBag className="mr-2 h-5 w-5" /> Shop Vinyl
              </Link>
            )}
          </div>
        </HeroSection>

        {/* About/Intro Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg" 
                    alt="AMJ" 
                    className="w-full max-w-lg rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-background-light p-4 rounded-lg shadow-lg">
                    <div className="flex space-x-4">
                      <a 
                        href="https://spotify.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors"
                        aria-label="Spotify"
                      >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors"
                        aria-label="YouTube"
                      >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://tiktok.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-white transition-colors"
                        aria-label="TikTok"
                      >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Creating <span className="text-primary">Cosmic</span> Beats From Doha
                </h2>
                <p className="text-text-secondary mb-6">
                  AMJ is an independent electronic music producer and performer based in Doha, Qatar. 
                  Blending cosmic textures with deep basslines and hypnotic rhythms, his sound transports 
                  listeners to otherworldly dimensions.
                </p>
                <p className="text-text-secondary mb-8">
                  With performances across the Middle East and beyond, AMJ has established a 
                  reputation for immersive live shows that combine cutting-edge visuals with 
                  meticulously crafted soundscapes.
                </p>
                <div className="flex space-x-4">
                  <Link to="/about" className="btn-outline">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Release Section */}
        {SHOW_LATEST_RELEASE && (
          <section className="py-20 bg-background-light relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
              <SectionHeading 
                title="Latest Release"
                subtitle="Check out my newest musical journey"
              />
              
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <img 
                      src={latestAlbum.artwork} 
                      alt={latestAlbum.title}
                      className="w-full max-w-md rounded-lg shadow-xl mx-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={latestAlbum.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/90 hover:bg-primary text-white p-4 rounded-full transition-colors"
                        aria-label="Play on Spotify"
                      >
                        <Play className="h-8 w-8" />
                      </a>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">{latestAlbum.title}</h3>
                  <p className="text-text-secondary mb-6">{latestAlbum.releaseYear}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Tracklist:</h4>
                    <ul className="space-y-2">
                      {latestAlbum.tracks.slice(0, 5).map((track, index) => (
                        <li key={track.id} className="flex items-center justify-between border-b border-gray-700 pb-2">
                          <div className="flex items-center">
                            <span className="text-primary font-medium mr-3">{index + 1}</span>
                            <span className="text-text-primary">{track.title}</span>
                          </div>
                          <span className="text-text-secondary">{track.duration}</span>
                        </li>
                      ))}
                      {latestAlbum.tracks.length > 5 && (
                        <li className="text-text-secondary text-center pt-2">
                          + {latestAlbum.tracks.length - 5} more tracks
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={latestAlbum.spotifyUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      Listen on Spotify
                    </a>
                    {latestAlbum.appleMusicUrl && (
                      <a 
                        href={latestAlbum.appleMusicUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                      >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.664.113 1.322.376 1.945.416.995 1.1 1.748 2.064 2.28.56.307 1.157.472 1.784.55.737.097 1.477.082 2.216.082L17.9 24c.464-.084.928-.162 1.382-.29 1.114-.31 2.025-.92 2.64-1.93.433-.7.642-1.47.723-2.278.098-.98.097-1.963.097-2.946 0-3.36.013-6.72-.012-10.08-.017-1.015-.17-2.014-.546-2.97-.216-.547-.514-1.027-.89-1.45-.693-.795-1.533-1.31-2.54-1.578-.38-.103-.778-.156-1.172-.18-.57-.033-1.14-.046-1.708-.07H7.75c-.103.015-.208.027-.312.04-.3.04-.59.093-.89.143-.83.134-1.618.49-2.268 1.13-.58.58-.933 1.283-1.12 2.097-.17.746-.17 1.505-.166 2.263L3.01 12c.016.81.016 1.618.037 2.427.032 1.095.192 2.165.777 3.13.53.87 1.292 1.468 2.258 1.816.896.323 1.826.377 2.764.377l13.096-.003c.566-.058 1.135-.102 1.694-.23.755-.17 1.458-.45 2.068-.9.945-.7 1.532-1.64 1.87-2.76.082-.276.142-.56.183-.844.126-.892.163-1.792.165-2.695.006-2.467.006-4.934.007-7.403z"/>
                          <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.664.113 1.322.376 1.945.416.995 1.1 1.748 2.064 2.28.56.307 1.157.472 1.784.55.737.097 1.477.082 2.216.082L17.9 24c.464-.084.928-.162 1.382-.29 1.114-.31 2.025-.92 2.64-1.93.433-.7.642-1.47.723-2.278.098-.98.097-1.963.097-2.946 0-3.36.013-6.72-.012-10.08-.017-1.015-.17-2.014-.546-2.97-.216-.547-.514-1.027-.89-1.45-.693-.795-1.533-1.31-2.54-1.578-.38-.103-.778-.156-1.172-.18-.57-.033-1.14-.046-1.708-.07H7.75c-.103.015-.208.027-.312.04-.3.04-.59.093-.89.143-.83.134-1.618.49-2.268 1.13-.58.58-.933 1.283-1.12 2.097-.17.746-.17 1.505-.166 2.263L3.01 12c.016.81.016 1.618.037 2.427.032 1.095.192 2.165.777 3.13.53.87 1.292 1.468 2.258 1.816.896.323 1.826.377 2.764.377l13.096-.003c.566-.058 1.135-.102 1.694-.23.755-.17 1.458-.45 2.068-.9.945-.7 1.532-1.64 1.87-2.76.082-.276.142-.56.183-.844.126-.892.163-1.792.165-2.695.006-2.467.006-4.934.007-7.403z" fill="none"/>
                          <path d="M12 3.212l-.2.002c-.302.004-.605.016-.905.042-.696.06-1.318.23-1.87.543-.67.382-1.142.962-1.452 1.654-.257.573-.37 1.172-.413 1.793-.034.49-.035.982-.028 1.473.004.374.01.748.04 1.12.036.452.11.897.264 1.322.3.825.77 1.497 1.536 1.962.35.213.72.346 1.118.43.34.07.686.093 1.034.108.145.006.29.013.436.014l.26.007c.17-.006.34-.011.51-.022.296-.02.587-.055.873-.114.95-.197 1.71-.637 2.223-1.453.34-.538.5-1.14.573-1.778.048-.413.07-.828.076-1.243.013-.89-.028-1.77-.318-2.614-.26-.756-.696-1.37-1.347-1.844-.578-.424-1.225-.662-1.908-.778-.16-.027-.32-.045-.48-.061z" fill="none"/>
                        </svg>
                        Apple Music
                      </a>
                    )}
                    
                    <Link to="/shop" className="btn btn-secondary text-black">
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Buy Album
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              {/* Embedded Player */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <div className="rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                  <iframe 
                    src={latestAlbum.spotifyUrl}
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title={`${latestAlbum.title} on Spotify`}
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Featured Shop Items Section */}
        {SHOW_SHOP_SECTION && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center mb-12">
                <SectionHeading 
                  title="Featured Merch"
                  subtitle="Limited edition vinyls and exclusive merchandise"
                  alignment="left"
                />
                
                <Link to="/shop" className="hidden md:flex items-center text-primary hover:text-secondary transition-colors">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              <div className="mt-10 text-center md:hidden">
                <Link to="/shop" className="btn-outline">
                  View All Products
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Upcoming Events Section */}
        {SHOW_EVENTS_SECTION && (
          <section className="py-20 bg-background-light relative">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex justify-between items-center mb-12">
                <SectionHeading 
                  title="Upcoming Events"
                  subtitle="Catch AMJ live at these upcoming shows"
                  alignment="left"
                />
                
                <Link to="/events" className="hidden md:flex items-center text-primary hover:text-secondary transition-colors">
                  View All Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
              
              <div className="mt-10 text-center md:hidden">
                <Link to="/events" className="btn-outline">
                  View All Events
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-20" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Stay Connected
              </h2>
              <p className="text-text-secondary mb-8">
                Subscribe to my newsletter for exclusive content, early access to releases, and VIP event invitations.
              </p>
              
              <div className="max-w-md mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default Home;