import { DollarSign, Leaf, Shield, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce your electricity bills by up to 80% with solar energy. Most systems pay for themselves in 5-7 years.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Lower your carbon footprint and contribute to a cleaner planet. Each installation prevents tons of CO₂ emissions.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      title: 'Increase Property Value',
      description: 'Solar installations increase home value by 4-6% on average, making it a smart long-term investment.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Shield,
      title: 'Energy Independence',
      description: 'Generate your own electricity and protect yourself from rising energy costs and power outages.',
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
              Why Choose <span className="gradient-text">Solar Energy</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the compelling advantages of switching to solar power for your home or business
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

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-hero rounded-3xl p-8 md:p-12 text-white shadow-strong animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">25+</div>
                <div className="text-white/90 font-medium">Years Warranty</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">30%</div>
                <div className="text-white/90 font-medium">Federal Tax Credit</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">$2000+</div>
                <div className="text-white/90 font-medium">Average Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
