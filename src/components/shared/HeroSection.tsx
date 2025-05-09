import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  children,
}) => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-shadow mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {title}
            </span>
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-text-primary text-shadow mb-8">
              {subtitle}
            </p>
          )}
          
          {children}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-text-secondary text-sm mb-2">Scroll Down</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;