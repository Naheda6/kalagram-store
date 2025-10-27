import React from 'react';
import { Truck, ShieldCheck, BadgeCheck, Headphones } from 'lucide-react';
import { services } from '../mockData';

const iconMap = {
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
};

const ServiceBanner = () => {
  return (
    <div className="bg-white py-8 md:py-12 border-y-2 border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-blue-50 transition-all duration-300 group cursor-pointer border border-transparent hover:border-emerald-200 hover:shadow-md"
              >
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-3 md:p-4 rounded-xl md:rounded-2xl flex-shrink-0 group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-300 shadow-md">
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base md:text-lg mb-0.5 md:mb-1 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;