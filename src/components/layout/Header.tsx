import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, ShoppingBag, Instagram, Youtube } from 'lucide-react';
import { navigationLinks } from '../../data/social';
import { motion, AnimatePresence } from 'framer-motion';

// Memoized navigation link component
const NavLink = memo(({ to, label, isActive }: { to: string; label: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`text-text-primary hover:text-primary transition-colors font-medium ${
      isActive ? 'text-primary' : ''
    }`}
  >
    {label}
  </Link>
));

NavLink.displayName = 'NavLink';

// Memoized social icon component
const SocialIcon = memo(({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-text-primary hover:text-primary transition-colors"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </a>
));

SocialIcon.displayName = 'SocialIcon';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Memoize menu toggle handler
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-background/95 backdrop-blur-md py-3 shadow-md' : 'bg-background/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-heading text-2xl font-bold tracking-wider"
        >
          <Crown className="h-8 w-8 text-primary" />
          <span className="text-text-primary">AMJ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              label={link.label}
              isActive={location.pathname === link.path}
            />
          ))}
        </nav>

        {/* Social & Shop - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
          <SocialIcon href="https://youtube.com" icon={Youtube} label="YouTube" />
          <Link 
            to="/shop" 
            className="text-text-primary hover:text-primary transition-colors"
            aria-label="Shop"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  label={link.label}
                  isActive={location.pathname === link.path}
                />
              ))}
              <div className="pt-4 flex items-center space-x-6 border-t border-background-lighter">
                <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
                <SocialIcon href="https://youtube.com" icon={Youtube} label="YouTube" />
                <Link 
                  to="/shop" 
                  className="text-text-primary hover:text-primary transition-colors"
                  aria-label="Shop"
                >
                  <ShoppingBag className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;