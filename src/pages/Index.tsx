import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Check if banner should be shown
    const bannerClosed = localStorage.getItem('bannerClosed');
    setShowBanner(!bannerClosed);
  }, []);

  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'KRISHIVA INNOVATIVES',
      description: 'Leading electrical contracting company offering HT/LT cable installation, solar plant commissioning, and industrial electrical solutions',
      url: 'https://krishivainnovatives.com',
      telephone: '+91-022-1234-5678',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Industrial Area, Phase 2',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.0522,
        longitude: -118.2437,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '16:00',
        },
      ],
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '250',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Banner />
      <main className={`min-h-screen transition-all duration-300 ${showBanner ? 'blur-sm' : 'blur-0'}`}>
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Benefits />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
