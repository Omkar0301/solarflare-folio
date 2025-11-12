import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import htLtCablesImg from '@/assets/service-ht-lt-cables.jpg';
import solarPlantImg from '@/assets/service-solar-plant.jpg';
import electricalPanelImg from '@/assets/service-electrical-panel.jpg';
import installationImg from '@/assets/service-installation.jpg';
import consultationImg from '@/assets/service-consultation.jpg';
import solutionsImg from '@/assets/service-solutions.jpg';

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('services.items.htLt.title'),
      description: t('services.items.htLt.description'),
      image: htLtCablesImg,
      features: [
        t('services.items.htLt.features.0'),
        t('services.items.htLt.features.1'),
        t('services.items.htLt.features.2'),
        t('services.items.htLt.features.3'),
      ],
    },
    {
      title: t('services.items.solar.title'),
      description: t('services.items.solar.description'),
      image: solarPlantImg,
      features: [
        t('services.items.solar.features.0'),
        t('services.items.solar.features.1'),
        t('services.items.solar.features.2'),
        t('services.items.solar.features.3'),
      ],
    },
    {
      title: t('services.items.panel.title'),
      description: t('services.items.panel.description'),
      image: electricalPanelImg,
      features: [
        t('services.items.panel.features.0'),
        t('services.items.panel.features.1'),
        t('services.items.panel.features.2'),
        t('services.items.panel.features.3'),
      ],
    },
    {
      title: t('services.items.maintenance.title'),
      description: t('services.items.maintenance.description'),
      image: installationImg,
      features: [
        t('services.items.maintenance.features.0'),
        t('services.items.maintenance.features.1'),
        t('services.items.maintenance.features.2'),
        t('services.items.maintenance.features.3'),
      ],
    },
    {
      title: t('services.items.consultation.title'),
      description: t('services.items.consultation.description'),
      image: consultationImg,
      features: [
        t('services.items.consultation.features.0'),
        t('services.items.consultation.features.1'),
        t('services.items.consultation.features.2'),
        t('services.items.consultation.features.3'),
      ],
    },
    {
      title: t('services.items.solutions.title'),
      description: t('services.items.solutions.description'),
      image: solutionsImg,
      features: [
        t('services.items.solutions.features.0'),
        t('services.items.solutions.features.1'),
        t('services.items.solutions.features.2'),
        t('services.items.solutions.features.3'),
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-strong transition-smooth border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-xl sm:text-2xl text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
