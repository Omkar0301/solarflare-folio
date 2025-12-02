import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';
import { Card } from '@/components/ui/card';

const Portfolio = () => {
  const { t } = useTranslation();

  const projectImages = [
    '/portfolio/IMG-20251122-WA0001.jpg',
    '/portfolio/IMG-20251122-WA0003.jpg',
    '/portfolio/IMG-20251122-WA0005.jpg',
    '/portfolio/IMG-20251122-WA0007.jpg'
  ];

  // Duplicate images for seamless looping
  const marqueeImages = [...projectImages, ...projectImages];

  const project = {
    title: t('portfolio.title'),
    description: t('portfolio.subtitle'),
    location: 'Vadodara',
    images: projectImages,
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              <span className="inline-block">{t('portfolio.title').split(' ')[0]}</span>{' '}
              <span className="text-primary">{t('portfolio.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Image Marquee */}
          <div className="mb-12">
            <div className="relative h-72 md:h-96 lg:h-[32rem] rounded-xl overflow-hidden">
              <Marquee 
                speed={40}
                gradient={true}
                gradientWidth={100}
                className="h-full"
              >
                {marqueeImages.map((img, idx) => (
                  <div 
                    key={`${img}-${idx}`} 
                    className="relative h-64 md:h-[28rem] lg:h-[30rem] w-auto mx-2 md:mx-4 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={img}
                      alt={`Project ${idx + 1}`}
                      className="h-full w-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
