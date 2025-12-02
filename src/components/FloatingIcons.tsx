import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Animation variants for the floating effect
const floatingVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
        y: [0, -10, 0],
        opacity: 1,
        transition: {
            default: { duration: 3, ease: 'easeInOut' },
            y: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse' as const,
                ease: 'easeInOut',
            },
            opacity: {
                duration: 0.5,
                delay: i * 0.2,
            },
        },
    }),
    hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
    },
    tap: {
        scale: 0.95,
    },
};



const FloatingIcons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Small delay to ensure the component is mounted before animating
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);
    const phoneNumber = '+919537222082';
    const whatsappMessage = 'Hello, I would like to know more about your solar solutions.';

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-4">
                    <motion.img
                        src="/icons/whatsapp.png"
                        alt="Chat on WhatsApp"
                        onClick={handleWhatsAppClick}
                        className="w-14 h-14 cursor-pointer"
                        custom={0}
                        variants={floatingVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                    />
                    <motion.img
                        src="/icons/mobile.png"
                        alt="Call Us"
                        onClick={handleCallClick}
                        className="w-14 h-14 cursor-pointer"
                        custom={1}
                        variants={floatingVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                    />
                </div>
            )}
        </AnimatePresence>
    );
};

export default FloatingIcons;
