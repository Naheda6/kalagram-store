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
    <div className="relative w-full h-[450px] bg-gray-50 overflow-hidden group">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
          
          <div className="container mx-auto px-4 h-full">
            <div className="grid md:grid-cols-2 gap-8 h-full items-center">
              <div className="space-y-6 z-10 relative">
                <div className="inline-block bg-red-500 text-white px-4 py-2 text-sm font-semibold rounded-md">
                  {slide.discount}
                </div>
                
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h2>
                
                <p className="text-2xl text-gray-700 font-medium">
                  {slide.subtitle}
                </p>
                
                <p className="text-gray-600">{slide.description}</p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600">from</span>
                  <span className="text-3xl font-bold text-emerald-600">
                    {slide.priceFrom}
                  </span>
                </div>
                
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base font-semibold rounded-full">
                  {slide.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 hover:text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 hover:text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-emerald-600' : 'w-2.5 bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
