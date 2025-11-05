import { Award, Clock, Shield, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Government-approved contractors with industry certifications ensuring top-quality electrical installations and safety compliance.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Stringent safety protocols and quality checks at every stage. We prioritize the safety of your property and personnel.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Proven track record of completing projects within deadlines without compromising on quality or safety standards.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled engineers and technicians with extensive experience in industrial, commercial, and residential electrical work.',
      color: 'text-primary-dark',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Why Choose <span className="gradient-text">KRISHIVA INNOVATIVES</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading electrical contracting services with unmatched quality and reliability
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-strong transition-smooth cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-smooth">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Vision Stats Section */}
          <div className="mt-16 bg-foreground rounded-3xl p-6 sm:p-8 md:p-12 shadow-strong animate-scale-in">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-center mb-8 sm:mb-10 text-background">
              Our Vision & Commitment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-background/10">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2 sm:mb-3">25+</div>
                <div className="text-background text-sm sm:text-base font-medium">Years Warranty</div>
              </div>
              <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-background/10">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2 sm:mb-3">30%</div>
                <div className="text-background text-sm sm:text-base font-medium">Federal Tax Credit</div>
              </div>
              <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-background/10 sm:col-span-2 lg:col-span-1">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2 sm:mb-3">$2000+</div>
                <div className="text-background text-sm sm:text-base font-medium">Average Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
