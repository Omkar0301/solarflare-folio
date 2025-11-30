import { useTranslation } from 'react-i18next';
import { Bolt, Home, Settings, HardHat, Wrench, Sun, Cpu, Zap } from 'lucide-react';
import { useEffect } from 'react';

const Services = () => {
  const { t } = useTranslation();
  
  // Add mouse move effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      key: 'electricalEngineering',
      icon: <Bolt className="w-8 h-8 text-primary" />,
    },
    {
      key: 'industrialProjects',
      icon: <HardHat className="w-8 h-8 text-primary" />,
    },
    {
      key: 'projectManagement',
      icon: <Settings className="w-8 h-8 text-primary" />,
    },
    {
      key: 'maintenanceContracts',
      icon: <Wrench className="w-8 h-8 text-primary" />,
    },
    {
      key: 'solarSolutions',
      icon: <Sun className="w-8 h-8 text-primary" />,
    },
    {
      key: 'residentialProjects',
      icon: <Home className="w-8 h-8 text-primary" />,
    },
    {
      key: 'renewableEnergy',
      icon: <Sun className="w-8 h-8 text-primary" />,
    },
    {
      key: 'turnkeySolutions',
      icon: <Cpu className="w-8 h-8 text-primary" />,
    }
  ].filter(service => t(`services.items.${service.key}.title`) !== undefined);

  return (
    <section id="services" className="py-16 sm:py-20 relative bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              <span className="inline-block">{t('services.title').split(' ')[0]}</span>{' '}
              <span className="text-primary-dark">{t('services.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="w-24 h-1 bg-primary-dark mx-auto mb-6" />
            <p className="text-gray-800 max-w-2xl mx-auto text-lg">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group service-card relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 cursor-pointer h-full flex flex-col border border-white/20 hover:border-primary/30 overflow-hidden hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-1" 
                     style={{
                       background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.1), transparent 40%)'
                     }}>
                </div>
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="mb-4 p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 w-14 h-14 rounded-lg flex items-center justify-center">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-800 transition-colors duration-300">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {t(`services.items.${service.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
