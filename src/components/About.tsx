import { Award, Users, ShieldCheck, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Award,
      title: t('about.features.experience.title'),
      description: t('about.features.experience.description'),
    },
    {
      icon: ShieldCheck,
      title: t('about.features.certified.title'),
      description: t('about.features.certified.description'),
    },
    {
      icon: Award,
      title: t('about.features.quality.title'),
      description: t('about.features.quality.description'),
    },
    {
      icon: Headphones,
      title: t('about.features.support.title'),
      description: t('about.features.support.description'),
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-gradient-to-br from-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('about.companyName')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.intro')}
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 text-foreground border border-white/20 dark:border-border/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 shadow-soft hover:shadow-strong transition-smooth animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-foreground">
                {t('about.vision')}
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90 dark:text-muted-foreground">
                {t('about.visionText')}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-strong transition-smooth group cursor-pointer animate-slide-up border border-white/20 dark:border-border/30 hover:border-primary/30"
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
