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
    <section id="services" className="py-16 sm:py-20 relative bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
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
                className="group bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-strong transition-smooth cursor-pointer h-full flex flex-col border border-white/20 dark:border-border/30 hover:border-primary/30"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {t(`services.items.${service.key}.title`)}
                  </h3>
                  <p className="text-foreground/80 dark:text-muted-foreground leading-relaxed">
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
