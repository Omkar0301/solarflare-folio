import { Card } from '@/components/ui/card';
import htLtCablesImg from '@/assets/service-ht-lt-cables.jpg';
import cableTrayImg from '@/assets/service-cable-tray.jpg';
import residentialWiringImg from '@/assets/service-residential-wiring.jpg';
import solarPlantImg from '@/assets/service-solar-plant.jpg';
import electricalPanelImg from '@/assets/service-electrical-panel.jpg';
import cleanroomLightingImg from '@/assets/service-cleanroom-lighting.jpg';
import heavyEquipmentImg from '@/assets/service-heavy-equipment.jpg';
import govtApprovedImg from '@/assets/service-govt-approved.jpg';

const Services = () => {
  const services = [
    {
      title: 'HT/LT Cable Laying & Termination',
      description: 'Expert installation and termination of high-tension and low-tension electrical cables for industrial and commercial infrastructure with precision and safety compliance.',
      image: htLtCablesImg,
      features: ['Cable Laying', 'HT/LT Termination', 'Underground Cabling', 'Testing & Commissioning'],
    },
    {
      title: 'Cable Tray Installation',
      description: 'Professional cable tray system design and installation for organized cable management in commercial buildings and industrial facilities.',
      image: cableTrayImg,
      features: ['System Design', 'Tray Installation', 'Cable Organization', 'Safety Standards'],
    },
    {
      title: 'Residential Wiring',
      description: 'Complete electrical wiring solutions for residential properties including new installations, upgrades, and maintenance services.',
      image: residentialWiringImg,
      features: ['House Wiring', 'Outlet Installation', 'Circuit Setup', 'Safety Inspection'],
    },
    {
      title: 'Solar Plant Installation & Commissioning',
      description: 'End-to-end solar power plant installation and commissioning services for large-scale renewable energy projects.',
      image: solarPlantImg,
      features: ['Plant Design', 'Installation', 'Grid Connection', 'Performance Testing'],
    },
    {
      title: 'Electrical Panel Installation & Commissioning',
      description: 'Professional installation and commissioning of electrical control panels, distribution boards, and switchgear systems.',
      image: electricalPanelImg,
      features: ['Panel Installation', 'System Integration', 'Load Testing', 'Documentation'],
    },
    {
      title: 'Cleanroom Light Fitting for Pharma Plants',
      description: 'Specialized cleanroom lighting installation for pharmaceutical facilities meeting strict contamination control and regulatory standards.',
      image: cleanroomLightingImg,
      features: ['Cleanroom Lights', 'Sterile Installation', 'Compliance', 'LED Solutions'],
    },
    {
      title: 'DG Set, Transformer & Heavy Equipment Commissioning',
      description: 'Expert commissioning services for diesel generators, transformers, and heavy electrical equipment with comprehensive testing protocols.',
      image: heavyEquipmentImg,
      features: ['DG Commissioning', 'Transformer Setup', 'Load Testing', 'Maintenance Plans'],
    },
    {
      title: 'Government-Approved Electrical Contractors',
      description: 'Certified and government-approved electrical contracting services ensuring compliance with all electrical codes and safety regulations.',
      image: govtApprovedImg,
      features: ['Licensed Contractors', 'Code Compliance', 'Safety Standards', 'Quality Assurance'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical contracting services from residential wiring to industrial-scale installations and commissioning
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-strong transition-smooth border-0 shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
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
