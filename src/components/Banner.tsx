import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bannerImage from '@/assets/service-electrical-panel.jpg';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was already closed
    const bannerClosed = localStorage.getItem('bannerClosed');
    if (!bannerClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('bannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style={{ animationDuration: '0.3s' }}
    >
      {/* Overlay background with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 h-12 w-12 rounded-full bg-background/10 backdrop-blur-sm hover:bg-background/20 text-background border border-background/30"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Banner content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6 animate-scale-in">
        <h1 className="text-4xl md:text-6xl font-bold text-background drop-shadow-lg">
          Welcome to KRISHIVA INNOVATIVES
        </h1>
        <p className="text-xl md:text-2xl text-background/90 drop-shadow-md max-w-2xl mx-auto">
          Leading Electrical Contracting Solutions for Industrial & Commercial Projects
        </p>
        <p className="text-lg text-background/80 drop-shadow-md">
          Expert HT/LT Cable Installation • Solar Plant Commissioning • Government Approved Contractors
        </p>
        <Button
          onClick={handleClose}
          size="lg"
          className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
        >
          Explore Our Services
        </Button>
      </div>
    </div>
  );
};

export default Banner;
