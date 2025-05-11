import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Instagram, Youtube, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cartSlice';
import type { RootState } from '../../store';
import type { CartItem } from '../../store/cartSlice';
import { navigationLinks } from '../../data/social';

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

// Memoized cart button component
const CartButton = memo(({ count, onClick }: { count: number; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="relative p-2 hover:bg-white/5 rounded-full transition-colors"
  >
    <ShoppingCart className="w-6 h-6" />
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {count}
      </span>
    )}
  </button>
));

CartButton.displayName = 'CartButton';

// Memoized mobile menu component
const MobileMenu = memo(({ 
  isOpen, 
  onClose, 
  cartCount, 
  onCartClick 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  cartCount: number;
  onCartClick: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-background/95 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 py-6">
          <nav className="flex flex-col space-y-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-text-primary hover:text-primary transition-colors font-medium text-xl"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-6 mt-6 flex items-center space-x-6 border-t border-background-light">
            <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
            <SocialIcon href="https://youtube.com" icon={Youtube} label="YouTube" />
            <CartButton count={cartCount} onClick={onCartClick} />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
));

MobileMenu.displayName = 'MobileMenu';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleCartClick = useCallback(() => {
    dispatch(toggleCart());
  }, [dispatch]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const cartItemsCount = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);

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
          <CartButton count={cartItemsCount} onClick={handleCartClick} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden text-text-primary hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        cartCount={cartItemsCount}
        onCartClick={handleCartClick}
      />
    </header>
  );
});

Header.displayName = 'Header';

export default Header;