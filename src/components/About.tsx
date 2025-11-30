import { Award, Users, ShieldCheck, Headphones, Lightbulb, Globe2 } from "lucide-react";
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
              <span className="inline-block">{t('about.companyName').split(' ')[0]}</span>{' '}
              <span className="text-primary">{t('about.companyName').split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            
            {/* Company Info */}
            <div className="mb-6">
              <p className="text-primary font-medium mb-2">{t('about.founded')}</p>
              <p className="text-muted-foreground mb-6">{t('about.headquarters')}</p>
            </div>
            
            {/* About Us */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {t('about.aboutUs')}
            </p>
            
            {/* Original Intro */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
              {t('about.intro')}
            </p>
          </div>

          {/* Global Reach & Commitment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 sm:mb-12">
            {/* Global Reach */}
            <div className="relative group overflow-hidden bg-gradient-to-br from-white/5 to-primary/5 rounded-2xl sm:rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 h-full">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-foreground">
                  <span className="inline-block">{t('about.globalReach.title').split(' ')[0]}</span>{' '}
                  <span className="text-primary">{t('about.globalReach.title').split(' ').slice(1).join(' ')}</span>
                </h3>
                <p className="text-lg leading-relaxed text-foreground/90 dark:text-muted-foreground">
                  {t('about.globalReach.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium">
                    India
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium">
                    Global Network
                  </span>
                  <span className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full font-medium">
                    Strategic Alliances
                  </span>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="relative group overflow-hidden bg-gradient-to-br from-white/5 to-primary/5 rounded-2xl sm:rounded-3xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 h-full">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9.5 9h5M7 13h10"></path>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-foreground">
                  <span className="inline-block">{t('about.ourCommitment.title').split(' ')[0]}</span>{' '}
                  <span className="text-primary">{t('about.ourCommitment.title').split(' ').slice(1).join(' ')}</span>
                </h3>
                <p className="text-lg leading-relaxed text-foreground/90 dark:text-muted-foreground mb-6">
                  {t('about.ourCommitment.description')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    </div>
                    <p className="text-foreground/90">Stringent Quality Standards</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    </div>
                    <p className="text-foreground/90">Reliable & Efficient Services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    </div>
                    <p className="text-foreground/90">Compliance with Industry Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 text-foreground border border-white/20 dark:border-border/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 shadow-soft hover:shadow-strong transition-smooth animate-scale-in">
            <div className="max-w-6xl mx-auto">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-10 text-foreground text-center">
                <span className="inline-block">{t('about.whyChooseUs.title').split(' ')[0]}</span>{' '}
                <span className="text-primary">{t('about.whyChooseUs.title').split(' ').slice(1).join(' ')}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {(t('about.whyChooseUs.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                  <div 
                    key={index} 
                    className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 border border-white/20 dark:border-border/30 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="w-6 h-6 text-primary">
                        {index === 0 && <Users className="w-full h-full" />}
                        {index === 1 && <Award className="w-full h-full" />}
                        {index === 2 && <Lightbulb className="w-full h-full" />}
                        {index === 3 && <Globe2 className="w-full h-full" />}
                      </div>
                    </div>
                    <h4 className="font-medium text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {point.split(' & ')[0]}
                      {point.includes(' & ') && (
                        <span className="text-primary"> & {point.split(' & ')[1]}</span>
                      )}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Combined Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 sm:mb-12">
            {/* Mission */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 text-foreground border border-white/20 dark:border-border/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-soft hover:shadow-strong transition-smooth animate-scale-in h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                  {t('about.ourMission')}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-foreground/90 dark:text-muted-foreground flex-grow">
                {t('about.missionText')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 text-foreground border border-white/20 dark:border-border/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-soft hover:shadow-strong transition-smooth animate-scale-in h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                  {t('about.vision')}
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-foreground/90 dark:text-muted-foreground flex-grow">
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
