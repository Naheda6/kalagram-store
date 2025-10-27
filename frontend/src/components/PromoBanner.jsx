import React from 'react';
import { Button } from './ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
import { banners } from '../mockData';

const PromoBanner = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {banners.map((banner, idx) => (
            <div
              key={banner.id}
              className="relative rounded-3xl overflow-hidden group cursor-pointer h-80 md:h-96 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 md:p-12 text-white space-y-5 max-w-md">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {banner.discount}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black leading-tight">
                    {banner.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl font-bold text-emerald-300">
                    {banner.subtitle}
                  </p>
                  
                  <p className="text-base opacity-90 font-medium">
                    {banner.description}
                  </p>
                  
                  <Button className="bg-white text-gray-900 hover:bg-emerald-600 hover:text-white rounded-full px-8 py-6 font-bold shadow-lg group/btn transform hover:scale-105 transition-all duration-300">
                    {banner.ctaText}
                    <ChevronRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;