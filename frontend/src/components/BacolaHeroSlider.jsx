import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../mockData';

const BacolaHeroSlider = () => {
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
    <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden group rounded-xl">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-2 h-full items-center container mx-auto px-8">
            {/* Content */}
            <div className="space-y-4 z-10">
              <div className="inline-block bg-[#ff6b6b] text-white px-4 py-2 rounded-full text-sm font-bold">
                {slide.discount}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                {slide.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                {slide.subtitle}
              </p>
              
              <p className="text-gray-600">{slide.description}</p>
              
              <div className="flex items-baseline gap-2">
                <span className="text-gray-600">Starting at</span>
                <span className="text-3xl md:text-4xl font-black text-[#2bbef9]">
                  {slide.priceFrom}
                </span>
              </div>
              
              <button className="bg-[#233a95] hover:bg-[#1a2d75] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg">
                {slide.ctaText} →
              </button>
            </div>

            {/* Image */}
            <div className="hidden md:flex items-center justify-center h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-w-full max-h-[450px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-[#2bbef9]' : 'w-2 bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BacolaHeroSlider;