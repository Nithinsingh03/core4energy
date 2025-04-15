// HomePage.jsx (Parent Component)
import React, { useState, useEffect } from 'react';
import Navbar from './nav';
import HeroSection from './home';

const slides = [
  { id: 1, image: '/u1.png' },
  { id: 2, image: '/u2.png' },
  { id: 3, image: '/u3.jpeg' },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar currentSlide={currentSlide} slides={slides} direction={direction} />
      <HeroSection
        currentSlide={currentSlide}
        slides={slides}
        direction={direction}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </>
  );
};

export default HomePage;
