import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#contact' },
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
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 rounded-full shadow-strong bg-primary hover:bg-primary-dark text-primary-foreground z-40 w-10 h-10 sm:w-12 sm:h-12"
        aria-label={t('footer.backToTop')}
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <img 
                src={logoImage} 
                alt="Krishiva Innovatives" 
                className="h-10 sm:h-12 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'flex items-center space-x-2';
                  fallback.innerHTML = `
                    <span class="text-secondary text-3xl">⚡</span>
                    <h3 class="font-heading font-bold text-2xl text-background">KRISHIVA INNOVATIVES</h3>
                  `;
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
            </div>
            <p className="text-background/80 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
              {t('footer.tagline')}
            </p>
            <div className="space-y-2 text-background/80 text-sm md:text-base">
              <p>📍 {t('contact.info.address.value')}</p>
              <p>📞 {t('contact.info.phone.value')}</p>
              <p>✉️ {t('contact.info.email.value')}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base md:text-lg mb-3 md:mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm md:text-base">
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
            <h4 className="font-heading font-semibold text-base md:text-lg mb-3 md:mb-4">{t('footer.followUs')}</h4>
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
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-background group-hover:text-foreground transition-smooth" />
                </a>
              ))}
            </div>
            <div className="mt-4 md:mt-6">
              <h5 className="font-semibold mb-2 text-sm md:text-base">{t('footer.newsletter.title')}</h5>
              <p className="text-background/80 text-xs md:text-sm mb-2 md:mb-3">
                {t('footer.newsletter.description')}
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-secondary"
                />
                <Button size="sm" className="bg-secondary hover:bg-secondary-light text-secondary-foreground text-xs md:text-sm whitespace-nowrap">
                  {t('footer.newsletter.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-background/70 text-xs md:text-sm text-center">
            <p>© {currentYear} KRISHIVA INNOVATIVES. {t('footer.rights')}</p>
            <p>
              Designed with ❤️ by{' '}
              <span className="text-secondary font-medium">Omkar Vaidya</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
