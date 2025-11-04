import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'SolarTech transformed our home! Our electricity bills dropped by 85% within the first year. The installation was professional, and the team was incredibly knowledgeable. Best investment we\'ve made.',
    },
    {
      name: 'Michael Chen',
      location: 'San Diego, CA',
      rating: 5,
      text: 'Outstanding service from start to finish. They handled everything including permits and paperwork. Our business now runs on clean energy, and we\'re saving thousands annually.',
    },
    {
      name: 'Emily Rodriguez',
      location: 'Phoenix, AZ',
      rating: 5,
      text: 'I was skeptical at first, but SolarTech answered all my questions and made the process seamless. The panels look great, and I love knowing I\'m helping the environment while saving money.',
    },
    {
      name: 'David Thompson',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'Professional, efficient, and trustworthy. The team installed our 12kW system in just two days. Five years later, it\'s still performing above expectations. Highly recommend!',
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our satisfied customers have to say about their solar experience
            </p>
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
