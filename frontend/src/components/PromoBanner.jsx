import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { banners } from '../mockData';

const PromoBanner = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="p-8 md:p-12 text-white space-y-4 max-w-md">
                  <div className="inline-block bg-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    {banner.discount}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{banner.title}</h3>
                  <p className="text-xl font-semibold">{banner.subtitle}</p>
                  <p className="text-sm opacity-90">{banner.description}</p>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full group">
                    {banner.ctaText}
                    <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;