import { Button } from '@/components/ui/button';
import { ArrowRight, Sun } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on modern rooftop with sunset sky"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Animated Sun Icon */}
      <div className="absolute top-20 right-10 animate-pulse">
        <Sun className="w-32 h-32 text-secondary opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-white leading-tight">
            Power Your Future with
            <span className="block mt-2 text-secondary">Clean Energy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transform your property with premium solar panel solutions. Save money, reduce carbon footprint, and embrace sustainable living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold shadow-strong text-lg px-8 py-6 group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
