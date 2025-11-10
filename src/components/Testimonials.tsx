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
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              {t('testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>

          {/* Testimonial Card */}
          <Card className="relative p-8 md:p-12 shadow-strong border-0 animate-scale-in">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary/10">
              <Quote size={80} />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 relative z-10">
              "{current.text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading font-semibold text-xl text-primary mb-1">
                  {current.name}
                </div>
                <div className="text-muted-foreground">📍 {current.location}</div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={prevTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextTestimonial}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth"
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
