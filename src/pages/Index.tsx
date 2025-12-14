import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import SocialMediaBar from "@/components/SocialMediaBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Partners from "../components/Partners";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import ContactPopup from "@/components/ContactPopup";
import FloatingIcons from "@/components/FloatingIcons";

const Index = (): JSX.Element => {
  const [showBanner, setShowBanner] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const handleBannerClose = () => {
    setShowBanner(false);
    localStorage.setItem("bannerClosed", "true");

    // Show contact popup 10 seconds after banner is closed
    const contactPopupClosedAt = localStorage.getItem("contactPopupClosedAt");
    const now = Date.now();

    if (!contactPopupClosedAt) {
      // First time visitor - show after 10 seconds
      setTimeout(() => {
        setShowContactPopup(true);
      }, 10000);
    } else {
      // Returning visitor - check if 30 seconds have passed since last close
      const timeSinceClose = now - parseInt(contactPopupClosedAt);
      if (timeSinceClose >= 30000) {
        setTimeout(() => {
          setShowContactPopup(true);
        }, 10000);
      }
    }
  };

  const handleContactPopupClose = () => {
    setShowContactPopup(false);
    const closeTime = Date.now();
    localStorage.setItem("contactPopupClosedAt", closeTime.toString());
  };

  useEffect(() => {
    // Check if banner was previously closed
    const bannerClosed = localStorage.getItem("bannerClosed");
    if (!bannerClosed) {
      setShowBanner(true);
    }

    // Contact popup logic - moved to handleBannerClose

    // Add JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "KRISHIVA INNOVATIVES",
      description:
        "Leading electrical contracting company offering HT/LT cable installation, solar plant commissioning, and industrial electrical solutions",
      url: "https://krishivainnovatives.com",
      telephone: "+91-022-1234-5678",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Industrial Area, Phase 2",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        // Updated to Mumbai, India coordinates
        latitude: 19.076,
        longitude: 72.8777,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "250",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {showBanner && <Banner onClose={handleBannerClose} />}
      {showContactPopup && <ContactPopup onClose={handleContactPopupClose} />}
      <main className="min-h-screen relative overflow-x-hidden">
        {/* <SocialMediaBar onInquiryClick={() => setShowContactPopup(true)} />  */}
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Partners />
        <Certifications />
        <Contact onOpenContact={() => setShowContactPopup(true)} />
        <Footer />
        <FloatingIcons />
      </main>
    </>
  );
};

export default Index;
