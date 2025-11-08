import { Award, Users, Leaf, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Experts",
      description: "Licensed professionals with 15+ years of experience",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support from consultation to maintenance",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Committed to sustainable and green solutions",
    },
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Premium solar panels with maximum energy output",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              About <span className="gradient-text">KRISHIVA INNOVATIVES</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been at the forefront of renewable energy
              solutions, helping homeowners and businesses transition to clean,
              sustainable solar power. Our mission is to make solar energy
              accessible, affordable, and efficient for everyone.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-hero text-gray-900 rounded-3xl p-8 md:p-12 mb-12 shadow-strong animate-scale-in">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-heading font-bold text-3xl mb-4">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-gray-800">
                We envision a world powered by clean, renewable energy where
                every property harnesses the sun's potential. Through innovative
                technology and expert craftsmanship, we're building a
                sustainable future, one solar panel at a time.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-strong transition-smooth group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
