'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'ADVANCING EVIDENCE-BASED SUSTAINABLE DEVELOPMENT',
    description: 'M31 Research delivers reliable data, research, and sustainable projects to Donors, NGOs, multilaterals, and Universities from around the world.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80',
  },
  {
    id: 2,
    title: 'DATA COLLECTION ACROSS SUB-SAHARAN AFRICA',
    description: 'Comprehensive data collection services powered by local expertise and cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=1920&q=80',
  },
  {
    id: 3,
    title: 'RIGOROUS RESEARCH FOR MEANINGFUL IMPACT',
    description: 'Evidence-based research that drives sustainable development and positive change across communities.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
              <div className="text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed">
                  {slide.description}
                </p>
                <Link
                  href="/company"
                  className="inline-block px-8 py-3 bg-primary-600 text-white text-sm font-semibold rounded-full hover:bg-primary-700 transition-all uppercase tracking-wide"
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-full px-2 py-2 shadow-lg">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Slide Indicators */}
        <div className="flex gap-1 px-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
