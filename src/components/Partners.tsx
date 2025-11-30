import { useTranslation } from 'react-i18next';


// Type definition for partner data
interface Partner {
  id: string;
  name: string;
  image: string;
}

const Partners = () => {
  const { t } = useTranslation();
  
  const partners: Partner[] = [
    { 
      id: 'adani', 
      name: 'Adani', 
      image: '/partners/adani.png' 
    },
    { 
      id: 'rayzon', 
      name: 'Rayzon', 
      image: '/partners/rayzon.jpg' 
    },
    { 
      id: 'waaree', 
      name: 'Waaree', 
      image: '/partners/waaree.jpg' 
    },
  ];

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-primary/3 to-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t('partners.title', 'Our Global Partners')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('partners.subtitle', 'We collaborate with industry leaders to deliver the best solar solutions')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-6 rounded-2xl shadow-soft hover:shadow-strong transition-smooth flex flex-col items-center justify-center h-full border border-white/20 dark:border-border/30 hover:border-primary/30 group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-32 flex items-center justify-center mb-4 group-hover:scale-105 transition-bounce">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading font-semibold text-lg text-center group-hover:text-primary transition-smooth">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
