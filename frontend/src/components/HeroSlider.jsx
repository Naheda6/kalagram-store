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
    <div className="relative w-full h-[400px] md:h-[550px] bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 overflow-hidden group">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="container mx-auto px-4 h-full">
            <div className="grid md:grid-cols-2 gap-8 h-full items-center">
              {/* Content */}
              <div className="space-y-6 md:space-y-8 z-10 animate-fadeIn">
                <div className="inline-block">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-500/50 animate-pulse">
                    {slide.discount}
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h2>
                
                <p className="text-2xl md:text-3xl text-gray-800 font-bold">
                  {slide.subtitle}
                </p>
                
                <p className="text-lg text-gray-600 font-medium">{slide.description}</p>
                
                <div className="flex items-baseline gap-3 bg-white/80 backdrop-blur-sm inline-block px-6 py-3 rounded-2xl shadow-xl">
                  <span className="text-sm text-gray-600 font-semibold">Starting from</span>
                  <span className="text-3xl md:text-4xl font-black text-emerald-600">
                    {slide.priceFrom}
                  </span>
                </div>
                
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-10 py-7 text-lg font-bold rounded-full shadow-2xl shadow-emerald-600/50 hover:shadow-emerald-700/60 transform hover:scale-105 transition-all duration-300">
                  {slide.ctaText}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Image */}
              <div className="hidden md:flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative w-full h-[450px] object-cover rounded-3xl shadow-2xl ring-8 ring-white/50 transform hover:scale-105 transition-transform duration-500"
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
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 hover:text-white p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-emerald-600 hover:text-white p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-10 bg-gradient-to-r from-emerald-600 to-blue-600 shadow-lg' 
                : 'w-3 bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;