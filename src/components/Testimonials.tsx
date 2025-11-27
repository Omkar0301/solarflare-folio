import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: t('testimonials.items.first.name'),
      location: t('testimonials.items.first.location'),
      rating: 5,
      text: t('testimonials.items.first.text'),
    },
    {
      name: t('testimonials.items.second.name'),
      location: t('testimonials.items.second.location'),
      rating: 5,
      text: t('testimonials.items.second.text'),
    },
    {
      name: t('testimonials.items.third.name'),
      location: t('testimonials.items.third.location'),
      rating: 5,
      text: t('testimonials.items.third.text'),
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 relative bg-gradient-to-b from-background to-primary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t('testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>

          {/* Testimonial Card */}
          <Card className="relative p-6 sm:p-8 lg:p-12 shadow-soft border border-white/20 dark:border-border/30 bg-white/90 dark:bg-card/90 backdrop-blur-sm hover:shadow-strong hover:border-primary/30 transition-smooth animate-scale-in">
            {/* Quote Icon */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-primary/10">
              <Quote size={60} className="sm:w-20 sm:h-20" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4 sm:mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-foreground/90 dark:text-foreground leading-relaxed mb-6 sm:mb-8 relative z-10">
              "{current.text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-heading font-semibold text-lg sm:text-xl text-primary mb-1">
                  {current.name}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">📍 {current.location}</div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth border-border/50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth border-border/50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-smooth ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
