import React from 'react';
import { MapPin, ChevronDown, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#233a95] text-white py-2.5 text-sm hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs">Welcome to Kalagura Gampa online eCommerce store.</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 text-xs">
              <Phone className="h-3.5 w-3.5" />
              <span>Call Us:</span>
              <span className="font-semibold">+91 9876543210</span>
            </div>
            <button className="flex items-center gap-1 text-xs hover:opacity-80">
              <span>ENG</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <button className="flex items-center gap-1 text-xs hover:opacity-80">
              <span>INR</span>
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;