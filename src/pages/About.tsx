import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import { Download, Calendar, Music, Award, Play } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      {/* Hero Section */}
      <div 
        className="relative min-h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1649693/pexels-photo-1649693.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            About <span className="text-primary">DJ Nebula</span>
          </h1>
          <p className="text-xl text-text-primary max-w-3xl mx-auto">
            Electronic music producer, performer, and sonic explorer based in Doha, Qatar.
          </p>
        </div>
      </div>
      
      {/* Bio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="Bio"
                subtitle="The story behind DJ Nebula"
                alignment="left"
                size="large"
              />
              
              <div className="space-y-6 text-text-secondary">
                <p>
                  DJ Nebula emerged onto the electronic music scene in 2018, quickly establishing a reputation 
                  for genre-bending productions that fuse cosmic atmospheres with driving beats and hypnotic melodies.
                </p>
                
                <p>
                  Born and raised in Doha, Qatar, Nebula draws inspiration from both Eastern and Western musical 
                  traditions, creating a unique sonic palette that transcends cultural boundaries. His productions 
                  often incorporate elements of deep house, techno, and ambient music, with occasional nods to his 
                  Middle Eastern heritage.
                </p>
                
                <p>
                  After releasing his debut EP "Cosmic Beginnings" in 2018, Nebula caught the attention of 
                  several influential labels and DJs. His follow-up album "Nebula Nights" secured his position 
                  as one of the region's most innovative electronic music producers, earning critical acclaim 
                  and a dedicated global following.
                </p>
                
                <p>
                  Beyond the studio, Nebula is known for his immersive live performances that combine stunning 
                  visuals with meticulously crafted soundscapes. He has performed at venues and festivals across 
                  the Middle East, Europe, and Asia, sharing stages with some of the industry's biggest names.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg" 
                  alt="DJ Nebula" 
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-lg">
                  <button 
                    className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full transition-colors"
                    aria-label="Play video"
                  >
                    <Play className="h-8 w-8" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-background-light relative">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading 
            title="Career Highlights"
            subtitle="Key moments in DJ Nebula's musical journey"
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Item 1 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 pb-10 md:pb-0 md:pr-12 text-right space-y-4 md:text-right">
                  <h3 className="text-2xl font-heading font-bold text-white">Beginning of the Journey</h3>
                  <p className="text-text-secondary">Released debut EP "Cosmic Beginnings" and performed first live shows in Doha.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-background-light border-4 border-primary rounded-full p-2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-primary"></span>
                </div>
                <div className="md:w-1/2 pt-10 md:pt-0 md:pl-12 space-y-2">
                  <span className="text-xl font-heading font-bold text-primary">2018</span>
                </div>
              </motion.div>
              
              {/* Item 2 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 pb-10 md:pb-0 md:pr-12 md:text-right space-y-4">
                  <span className="text-xl font-heading font-bold text-primary">2020</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-background-light border-4 border-secondary rounded-full p-2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-secondary"></span>
                </div>
                <div className="md:w-1/2 pt-10 md:pt-0 md:pl-12 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-white">Breakthrough Album</h3>
                  <p className="text-text-secondary">Released the acclaimed album "Nebula Nights" that received international recognition.</p>
                </div>
              </motion.div>
              
              {/* Item 3 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 pb-10 md:pb-0 md:pr-12 md:text-right space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-white">International Tours</h3>
                  <p className="text-text-secondary">First international tour across Europe and Asia, performed at major festivals.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-background-light border-4 border-primary rounded-full p-2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-primary"></span>
                </div>
                <div className="md:w-1/2 pt-10 md:pt-0 md:pl-12 space-y-2">
                  <span className="text-xl font-heading font-bold text-primary">2021</span>
                </div>
              </motion.div>
              
              {/* Item 4 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 pb-10 md:pb-0 md:pr-12 md:text-right space-y-4">
                  <span className="text-xl font-heading font-bold text-primary">2022</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-background-light border-4 border-secondary rounded-full p-2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-secondary"></span>
                </div>
                <div className="md:w-1/2 pt-10 md:pt-0 md:pl-12 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-white">Award Winner</h3>
                  <p className="text-text-secondary">Won "Best Electronic Artist" at the Middle East Music Awards and collaborated with major artists.</p>
                </div>
              </motion.div>
              
              {/* Item 5 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 pb-10 md:pb-0 md:pr-12 md:text-right space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-white">Cosmic Beats</h3>
                  <p className="text-text-secondary">Released the innovative "Cosmic Beats" album fusing electronic music with traditional Middle Eastern sounds.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-background-light border-4 border-primary rounded-full p-2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-primary"></span>
                </div>
                <div className="md:w-1/2 pt-10 md:pt-0 md:pl-12 space-y-2">
                  <span className="text-xl font-heading font-bold text-primary">2023</span>
                </div>
              </motion.div>
              
              {/* Item 6 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 pb-10 md:pb-0 md:pr-12 md:text-right space-y-4">
                  <span className="text-xl font-heading font-bold text-primary">Present</span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-background-light border-4 border-secondary rounded-full p-2 z-10">
                  <span className="block w-4 h-4 rounded-full bg-secondary"></span>
                </div>
                <div className="md:w-1/2 pt-10 md:pt-0 md:pl-12 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-white">World Tour</h3>
                  <p className="text-text-secondary">Currently on the Cosmic Tour, performing at venues across the globe and working on new material.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Influences Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Influences & Style"
            subtitle="The sounds and artists that inspire DJ Nebula"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 p-4 rounded-full inline-flex mb-4">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Electronic Roots</h3>
              <p className="text-text-secondary">
                Deep house, techno, and ambient form the core of Nebula's sound, with influences from pioneers like 
                Daft Punk, Carl Cox, and Brian Eno shaping his production style.
              </p>
            </motion.div>
            
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary/20 p-4 rounded-full inline-flex mb-4">
                <Music className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Middle Eastern Heritage</h3>
              <p className="text-text-secondary">
                Traditional Middle Eastern melodies and rhythms often find their way into Nebula's compositions, 
                creating a distinctive fusion that bridges cultures and musical traditions.
              </p>
            </motion.div>
            
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 p-4 rounded-full inline-flex mb-4">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Cinematic Atmosphere</h3>
              <p className="text-text-secondary">
                Inspired by film composers like Hans Zimmer and Vangelis, Nebula incorporates cinematic elements 
                and rich atmospheres that transport listeners to other worlds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Media Kit Section */}
      <section className="py-20 bg-background-light relative">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading 
              title="Media Kit"
              subtitle="Resources for press and event organizers"
            />
            
            <div className="card p-8">
              <p className="text-text-secondary mb-8">
                Download DJ Nebula's press kit for high-resolution photos, official biography, technical rider, and more.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="btn-outline flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Press Photos (ZIP)
                </a>
                
                <a href="#" className="btn-outline flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Full Biography (PDF)
                </a>
                
                <a href="#" className="btn-outline flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Technical Rider (PDF)
                </a>
                
                <a href="#" className="btn-outline flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Logo Pack (ZIP)
                </a>
              </div>
              
              <div className="mt-8 border-t border-gray-700 pt-6">
                <p className="text-text-secondary mb-4">
                  For press inquiries, interviews, or additional materials, please contact:
                </p>
                <p className="text-white font-medium">
                  press@djnebula.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Experience DJ Nebula Live
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Check out upcoming shows or book DJ Nebula for your event. From intimate club nights to 
              major festivals, bring the cosmic sound to your venue.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/events" className="btn-primary">
                <Calendar className="mr-2 h-5 w-5" />
                View Tour Dates
              </Link>
              
              <Link to="/contact" className="btn-outline">
                Book for an Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;