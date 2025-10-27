import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#2bbef9] text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>Welcome to Kalagura Gampa Online Store!</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <span>Need help? Call Us:</span>
              <span className="font-semibold">+91 9876543210</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <span>English</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
              <span>INR</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;