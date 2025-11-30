import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();
  
  const certifications = [
    { id: 'ugvcl', name: 'UGVCL', image: '/certifications/ugvcl.jpg' },
    { id: 'pgvcl', name: 'PGVCL', image: '/certifications/pgvcl.png' },
    { id: 'mgvcl', name: 'MGVCL', image: '/certifications/mgvcl.png' },
    { id: 'guvnl', name: 'GUVNL', image: '/certifications/guvnl.png' },
    { id: 'dgvcl', name: 'DGVCL', image: '/certifications/dgvcl.png' },
    { id: 'iso', name: 'ISO 9001:2015', image: '/certifications/iso.jpg' },
    { id: 'msme', name: 'MSME', image: '/certifications/msme.png' },
    { id: 'makeinindia', name: 'Make in India', image: '/certifications/makeinindia.webp' },
    { id: 'nise', name: 'NISE', image: '/certifications/nise.jpg' },
    { id: 'nsic', name: 'NSIC', image: '/certifications/nsic.png' },
    { id: 'startupindia', name: 'Startup India', image: '/certifications/startupindia.png' },
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 bg-gradient-to-b from-background to-primary/5 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="inline-block">{t('certifications.title').split(' ')[0]}</span>{' '}
            <span className="text-primary">{t('certifications.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-soft hover:shadow-strong transition-smooth flex flex-col items-center justify-center h-full border border-white/20 dark:border-border/30 hover:border-primary/30 group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-24 h-24 flex items-center justify-center mb-2 group-hover:scale-105 transition-bounce">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium text-center mt-2 group-hover:text-primary transition-smooth">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
