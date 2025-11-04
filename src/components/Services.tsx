import { Card } from '@/components/ui/card';
import installationImg from '@/assets/service-installation.jpg';
import maintenanceImg from '@/assets/service-maintenance.jpg';
import consultationImg from '@/assets/service-consultation.jpg';
import solutionsImg from '@/assets/service-solutions.jpg';

const Services = () => {
  const services = [
    {
      title: 'Solar Panel Installation',
      description: 'Professional installation of high-efficiency solar panels tailored to your property\'s energy needs and roof specifications.',
      image: installationImg,
      features: ['Site Assessment', 'Custom Design', 'Expert Installation', 'System Testing'],
    },
    {
      title: 'System Maintenance',
      description: 'Regular maintenance and inspection services to ensure your solar panels operate at peak efficiency year-round.',
      image: maintenanceImg,
      features: ['Panel Cleaning', 'Performance Monitoring', 'Preventive Care', 'Repair Services'],
    },
    {
      title: 'Energy Consultation',
      description: 'Comprehensive energy audits and personalized recommendations to maximize your solar investment and savings.',
      image: consultationImg,
      features: ['Energy Audit', 'ROI Analysis', 'Financing Options', 'Government Incentives'],
    },
    {
      title: 'Residential & Commercial',
      description: 'Scalable solar solutions for homes, businesses, and industrial facilities with customized system designs.',
      image: solutionsImg,
      features: ['Home Systems', 'Business Solutions', 'Industrial Scale', 'Off-Grid Options'],
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
              Comprehensive solar energy solutions from consultation to installation and ongoing maintenance
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
