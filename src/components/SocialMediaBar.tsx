import { useState, useEffect } from 'react';
import { MessageCircle, MessageSquare, Instagram, Linkedin, Youtube, Facebook, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialMediaBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'Contact Us',
      url: '#contact',
      color: 'bg-purple-600 hover:bg-purple-700',
      textColor: 'text-white',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      url: 'https://wa.me/1234567890',
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-white',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com',
      color: 'bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600',
      textColor: 'text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      url: 'https://youtube.com',
      color: 'bg-red-600 hover:bg-red-700',
      textColor: 'text-white',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://facebook.com',
      color: 'bg-blue-800 hover:bg-blue-900',
      textColor: 'text-white',
    },
    {
      icon: Mail,
      label: 'Enquiry',
      url: 'mailto:info@example.com',
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-white',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-2 p-2">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center h-12 rounded-r-lg overflow-hidden transition-all duration-300 hover:w-48"
        >
          <div className={`h-12 w-12 flex-shrink-0 flex items-center justify-center ${item.color} ${item.textColor}`}>
            <item.icon className="h-5 w-5" />
          </div>
          <span className="absolute left-12 h-12 px-4 flex items-center bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.label}
          </span>
        </a>
      ))}
      
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={() => setIsVisible(false)}
          aria-label="Close social media bar"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default SocialMediaBar;
