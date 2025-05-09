import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Music, Instagram, Youtube, AlignJustify as Spotify, Headphones, Crown } from 'lucide-react';
import NewsletterForm from '../shared/NewsletterForm';

// Memoized social icon component
const SocialIcon = memo(({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-background-lighter p-2 rounded-full text-text-secondary hover:text-primary hover:bg-background-light transition-colors"
    aria-label={label}
  >
    <Icon className="h-5 w-5" />
  </a>
));

SocialIcon.displayName = 'SocialIcon';

// Memoized footer link component
const FooterLink = memo(({ to, label }: { to: string; label: string }) => (
  <li>
    <Link to={to} className="text-text-secondary hover:text-primary transition-colors">
      {label}
    </Link>
  </li>
));

FooterLink.displayName = 'FooterLink';

// Memoized footer section component
const FooterSection = memo(({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h4 className="text-xl font-heading font-semibold mb-6 text-white">{title}</h4>
    {children}
  </div>
));

FooterSection.displayName = 'FooterSection';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Branding & Social */}
          <FooterSection title="">
            <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold tracking-wider">
              <Crown className="h-8 w-8 text-primary" />
              <span className="text-text-primary">AMJ</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-xs">
              Creating cosmic beats and sonic journeys since 2018. Based in Doha, Qatar.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon href="https://instagram.com" icon={Instagram} label="Instagram" />
              <SocialIcon href="https://youtube.com" icon={Youtube} label="YouTube" />
              <SocialIcon href="https://spotify.com" icon={Spotify} label="Spotify" />
              <SocialIcon href="https://soundcloud.com" icon={Headphones} label="SoundCloud" />
            </div>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/shop" label="Shop" />
              <FooterLink to="/music" label="Music" />
              <FooterLink to="/events" label="Events" />
              <FooterLink to="/about" label="About" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            <ul className="space-y-3">
              <FooterLink to="/privacy" label="Privacy Policy" />
              <FooterLink to="/terms" label="Terms of Service" />
              <FooterLink to="/shipping" label="Shipping Policy" />
              <FooterLink to="/refund" label="Refund Policy" />
            </ul>
          </FooterSection>

          {/* Newsletter */}
          <FooterSection title="Newsletter">
            <p className="text-text-secondary text-sm mb-4">
              Subscribe to get updates on new releases, exclusive content, and upcoming events.
            </p>
            <NewsletterForm />
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} AMJ. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Made with <span className="text-error">♥</span> in Doha, Qatar
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;