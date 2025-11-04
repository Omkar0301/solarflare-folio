import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-strong bg-primary hover:bg-primary-dark text-primary-foreground z-40 w-12 h-12"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-secondary text-3xl">☀</span>
              <h3 className="font-heading font-bold text-2xl">SolarTech Solutions</h3>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Leading solar panel installation company committed to providing sustainable energy solutions 
              for residential and commercial properties. Building a cleaner, greener future together.
            </p>
            <div className="space-y-2 text-background/80">
              <p>📍 123 Solar Street, Los Angeles, CA 90001</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@solartech.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-secondary transition-smooth inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-smooth group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-background group-hover:text-foreground transition-smooth" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-background/80 text-sm mb-3">
                Subscribe for solar tips and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-secondary"
                />
                <Button size="sm" className="bg-secondary hover:bg-secondary-light text-secondary-foreground">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/70 text-sm">
            <p>© {currentYear} SolarTech Solutions. All rights reserved.</p>
            <p>
              Designed with ❤️ by{' '}
              <span className="text-secondary font-medium">Lovable AI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
