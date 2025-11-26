import { useTranslation } from 'react-i18next';
import { Bolt, Home, Settings, HardHat, Wrench, Sun, Cpu, Zap } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

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
    <section id="services" className="py-16 sm:py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {t(`services.items.${service.key}.description`)}
                  </p>
                  <div className="mt-4 text-sm text-primary font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
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
