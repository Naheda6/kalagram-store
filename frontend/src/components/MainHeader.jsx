import React, { useState } from 'react';
import { ShoppingCart, Heart, User, Search, Menu, MapPin, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const MainHeader = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Logo - 2 columns */}
          <div className="col-span-6 md:col-span-2">
            <div className="flex items-center">
              <div className="text-2xl font-black text-[#233a95]">
                Bacola
              </div>
            </div>
          </div>

          {/* Location & Search - 6 columns */}
          <div className="hidden md:block md:col-span-6">
            <div className="flex gap-2">
              {/* Location Dropdown */}
              <div className="relative min-w-[200px]">
                <button className="w-full flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-md hover:border-[#2bbef9] transition-colors">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#2bbef9]" />
                    <span className="text-sm font-medium">Select Location</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {/* Search */}
              <div className="flex-1 relative">
                <div className="flex">
                  <select className="px-4 py-3 border-2 border-r-0 border-gray-200 rounded-l-md text-sm focus:outline-none focus:border-[#2bbef9] bg-white">
                    <option>All Categories</option>
                    <option>Personal Care</option>
                    <option>Cold Pressed Oils</option>
                    <option>Rice & Flours</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 px-4 py-3 border-2 border-l-0 border-gray-200 focus:outline-none focus:border-[#2bbef9] text-sm"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  <button className="px-6 bg-[#2bbef9] hover:bg-[#1da5db] text-white rounded-r-md transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Icons - 4 columns */}
          <div className="col-span-6 md:col-span-4 flex items-center justify-end gap-4">
            <button className="hidden md:flex items-center gap-2 hover:text-[#2bbef9] transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Account</span>
            </button>

            <button className="relative hover:text-[#2bbef9] transition-colors">
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff6b6b] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button className="relative flex items-center gap-3 px-4 py-2.5 bg-[#233a95] hover:bg-[#1a2d75] text-white rounded-md transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="text-xs opacity-80">My Cart</span>
                <span className="text-sm font-bold">₹0.00</span>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff6b6b] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="col-span-12 md:hidden">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#2bbef9] text-sm"
              />
              <button className="px-4 bg-[#2bbef9] text-white rounded-md">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;