import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            404
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Page Not Found
        </h1>
        
        <p className="text-text-secondary mb-10">
          The cosmic page you're looking for seems to have drifted into a black hole. 
          Let's navigate back to safer cosmic territories.
        </p>
        
        <Link to="/" className="btn-primary inline-flex">
          <Home className="mr-2 h-5 w-5" />
          Return Home
        </Link>
      </div>
    </motion.main>
  );
};

export default NotFound;