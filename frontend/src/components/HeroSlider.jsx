import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { heroSlides } from '../mockData';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[450px] bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden group">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 h-full">
            <div className="grid md:grid-cols-2 gap-8 h-full items-center">
              {/* Content */}
              <div className="space-y-4 md:space-y-6 z-10">
                <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {slide.discount}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 font-medium">
                  {slide.subtitle}
                </p>
                <p className="text-gray-600">{slide.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-600">Starting from</span>
                  <span className="text-2xl md:text-3xl font-bold text-emerald-600">
                    {slide.priceFrom}
                  </span>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full">
                  {slide.ctaText}
                </Button>
              </div>

              {/* Image */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;