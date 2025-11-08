import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bannerImage from '@/assets/service-electrical-panel.jpg';

interface BannerProps {
  onClose: () => void;
}

const Banner = ({ onClose }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was already closed
    const bannerClosed = localStorage.getItem('bannerClosed');
    if (!bannerClosed) {
      setIsVisible(true);
    } else {
      onClose();
    }
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('bannerClosed', 'true');
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in p-4"
      style={{ animationDuration: '0.3s' }}
    >
      {/* Semi-transparent backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Centered banner card */}
      <div 
        className="relative z-10 w-full max-w-4xl bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        style={{ backgroundImage: `url(${bannerImage})`, maxHeight: '85vh' }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 text-background border border-background/30"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Banner content */}
        <div className="relative z-10 text-center px-6 py-12 md:py-16 space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background drop-shadow-lg">
            Welcome to KRISHIVA INNOVATIVES
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-background/90 drop-shadow-md max-w-2xl mx-auto">
            Leading Electrical Contracting Solutions for Industrial & Commercial Projects
          </p>
          <p className="text-base md:text-lg text-background/80 drop-shadow-md">
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
    </div>
  );
};

export default Banner;
