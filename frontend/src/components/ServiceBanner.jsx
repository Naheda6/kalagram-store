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
    <div className="bg-white py-8 md:py-12 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                  <Icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
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