import { DollarSign, Leaf, TrendingUp, Shield, Zap, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: DollarSign,
      title: t('benefits.items.savings.title'),
      description: t('benefits.items.savings.description'),
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Shield,
      title: t('benefits.items.subsidy.title'),
      description: t('benefits.items.subsidy.description'),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: TrendingUp,
      title: t('benefits.items.roi.title'),
      description: t('benefits.items.roi.description'),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Leaf,
      title: t('benefits.items.environment.title'),
      description: t('benefits.items.environment.description'),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Zap,
      title: t('benefits.items.reliable.title'),
      description: t('benefits.items.reliable.description'),
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Home,
      title: t('benefits.items.value.title'),
      description: t('benefits.items.value.description'),
      color: "text-primary-dark",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('benefits.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>

          {/* Benefits Grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-strong transition-smooth cursor-pointer animate-slide-up border border-border/30"
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
        </div>
      </div>
    </section>
  );
};

export default Benefits;
