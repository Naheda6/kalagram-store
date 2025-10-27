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
    <div className="bg-white py-12 md:py-16 border-y-2 border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="flex items-center gap-5 p-6 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-blue-50 transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-emerald-200 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 rounded-2xl flex-shrink-0 group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-300 shadow-lg">
                  <Icon className="h-8 w-8 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}</div>
      </div>
    </div>
  );
};

export default ServiceBanner;