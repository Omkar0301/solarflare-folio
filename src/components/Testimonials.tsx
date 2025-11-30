import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    ) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-20 relative bg-gradient-to-br from-primary/8 via-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="w-full max-w-full px-0 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="inline-block">{t('testimonials.title').split(' ')[0]}</span>{' '}
            <span className="text-primary">{t('testimonials.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        </div>

        {/* Testimonial Card with Elfsight Google Reviews Widget */}
        <Card className="relative p-0 shadow-soft border-0 rounded-none bg-white/90 dark:bg-card/90 backdrop-blur-sm transition-smooth">
          <div className="relative z-10">
            <div className="w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] overflow-hidden bg-muted">
              <div
                className="elfsight-app-6253699a-49af-4e44-8a1e-2b37f7e1259b w-full h-full"
                data-elfsight-app-lazy
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
