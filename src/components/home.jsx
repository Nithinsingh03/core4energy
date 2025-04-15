import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
  {
    id: 1,
    image: '/public/u1.png',
  },
  {
    id: 2,
    image: '/public/u2.png',
  },
  {
    id: 3,
    image: '/public/u3.jpeg',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id='home'
      className="relative w-full h-screen overflow-hidden"
      data-aos="fade-in"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          custom={direction}
          className="absolute inset-0 w-full h-full"
          initial={{ x: direction > 0 ? '100%' : '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? '-100%' : '100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Image Container */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-auto object-cover object-center"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center">
            <motion.div
              className="text-white px-4 max-w-5xl flex flex-col items-start justify-center text-left w-full h-full pl-20 md:pl-48 lg:pl-64"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <h4
                className="text-lg md:text-xl font-medium mb-2 uppercase"
                data-aos="fade-up"
              >
                A Global Leader In Infrastructure
              </h4>
              <h1
                className="text-3xl md:text-5xl font-bold leading-tight mb-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We Will Be Happy <br /> To Take Care Of Your Work
              </h1>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 transition-all px-6 py-3 text-sm md:text-base font-bold text-[#0A2C52] w-fit "
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                GET IN TOUCH
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-20"
        aria-label="Previous slide"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-20"
        aria-label="Next slide"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <ChevronRight />
      </button>
    </section>
  );
};

export default HeroSection;
