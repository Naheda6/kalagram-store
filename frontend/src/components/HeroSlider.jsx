import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { heroSlides } from "../mockData";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative w-full h-[300px] md:h-[300px] bg-[#faf5ef] overflow-hidden group rounded-2xl shadow-soft">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image background */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Overlay content with lighter gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf5ef]/70 via-[#faf5ef]/50 to-transparent flex flex-col justify-center px-6 md:px-10">
            <div className="max-w-lg space-y-3 md:space-y-5">
              <div className="flex items-center gap-2">
                <span className="bg-[#7B4B24] text-white px-3 py-1 text-xs md:text-sm font-semibold rounded-md shadow">
                  {slide.discount}
                </span>
                <span className="text-sm md:text-base text-[#7C6A56]">
                  from{" "}
                  <span className="text-2xl md:text-3xl font-bold text-[#7B4B24]">
                    {slide.priceFrom}
                  </span>
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#3E2C1B] leading-tight drop-shadow-sm">
                {slide.title}
              </h2>

              <p className="text-lg md:text-xl text-[#5A4635] font-medium drop-shadow-sm">
                {slide.subtitle}
              </p>

              <p className="text-sm md:text-base text-[#6E5B46] drop-shadow-sm">
                {slide.description}
              </p>

              <Button className="bg-[#7B4B24] hover:bg-[#5F391A] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold rounded-full shadow-md">
                {slide.ctaText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#7B4B24] hover:text-white p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#7B4B24] hover:text-white p-2 md:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 md:h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "w-6 md:w-8 bg-[#7B4B24]"
                : "w-2 md:w-2.5 bg-[#C9B89A]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
