import { Button } from "@/components/ui/button";
import { ArrowRight, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-solar.jpg";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Relevant solar energy text array
  const energyTexts = [
    t("hero.energyTexts.solar"),
    t("hero.energyTexts.electrical"),
    t("hero.energyTexts.innovation"),
    t("hero.energyTexts.sustainability"),
  ];

  // Stats data with target values
  const statsData = [
    {
      value: 50,
      suffix: "+",
      label: t("hero.stats.projects"),
      duration: 2000,
    },
    {
      value: 20,
      suffix: "+",
      label: t("hero.stats.clients"),
      duration: 1500,
    },
    {
      value: 15,
      suffix: "+",
      label: t("hero.stats.experience"),
      duration: 1800,
    },
  ];

  // Auto-rotate texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((current) => (current + 1) % energyTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [energyTexts.length]);

  // Intersection Observer for stats animation - runs only once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasCounted]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // Text carousel variants
  const textCarousel = {
    enter: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 1.05,
    },
  };

  // Counter Component - runs only once when triggered
  const Counter = ({
    value,
    suffix,
    duration,
    delay = 0,
  }: {
    value: number;
    suffix: string;
    duration: number;
    delay?: number;
  }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (hasCounted && !hasStarted) {
        setHasStarted(true);

        const startTime = Date.now();
        const startValue = 0;
        const endValue = value;

        const updateCounter = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(
            startValue + (endValue - startValue) * easeOutQuart
          );

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        // Start animation after delay
        setTimeout(() => {
          requestAnimationFrame(updateCounter);
        }, delay);
      }
    }, [hasCounted, hasStarted, value, duration, delay]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImage}
          alt="Solar panels on modern rooftop with sunset sky"
          className="w-full h-full object-cover scale-105"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Animated Sun Icon */}
      <motion.div
        className="absolute top-20 right-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sun className="w-32 h-32 text-yellow-300" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
            variants={fadeUp}
            custom={0.2}
          >
            {t("hero.title")}
            <div className="h-3 sm:h-4 md:h-6"></div>
            <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 mt-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  variants={textCarousel}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0 text-secondary block py-2 md:py-3"
                >
                  {energyTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4"
            variants={fadeUp}
            custom={0.4}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6"
            variants={fadeUp}
            custom={0.6}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold shadow-strong text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group w-full sm:w-auto"
              >
                {t("hero.getStarted")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              >
                {t("hero.learnMore")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-12 sm:pt-16 max-w-3xl mx-auto px-4"
            variants={staggerContainer}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={0.8 + index * 0.2}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                }}
                className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-glow"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    delay={index * 300} // Stagger the counter animations
                  />
                </div>
                <div className="text-white/90 font-medium text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
