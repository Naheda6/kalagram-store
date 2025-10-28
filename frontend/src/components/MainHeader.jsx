import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, MapPin, ChevronDown } from 'lucide-react';

const MainHeader = ({ cartCount = 0, wishlistCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-4 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <h1 className="text-2xl md:text-3xl font-black text-[#233a95]">
              Kalagura Gampa
            </h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-3xl mx-6">
            <div className="flex w-full shadow-sm">
              <select className="px-4 py-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md text-sm focus:outline-none text-gray-700 font-medium">
                <option>All Categories</option>
                <option>Personal & Hair Care</option>
                <option>Cold Pressed Oils</option>
                <option>Rice & Flours</option>
                <option>Seeds & Plants</option>
              </select>
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#2bbef9] text-sm"
              />
              <button className="px-6 bg-[#2bbef9] hover:bg-[#1da5db] text-white rounded-r-md transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Location - Desktop */}
            <button className="hidden xl:flex items-center gap-2 text-gray-700 hover:text-[#2bbef9] transition-colors">
              <MapPin className="h-5 w-5" />
              <div className="text-left">
                <div className="text-[10px] text-gray-500">Your Location</div>
                <div className="text-xs font-semibold flex items-center gap-1">
                  Select Location <ChevronDown className="h-3 w-3" />
                </div>
              </div>
            </button>

            {/* Account - Desktop */}
            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#2bbef9] transition-colors">
              <User className="h-6 w-6" />
              <div className="text-left">
                <div className="text-[10px] text-gray-500">Account</div>
                <div className="text-xs font-semibold">Login/Register</div>
              </div>
            </button>

            {/* Wishlist */}
            <button className="relative p-2 hover:text-[#2bbef9] transition-colors hidden md:block">
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button className="flex items-center gap-3 px-4 py-2.5 bg-[#2bbef9] hover:bg-[#1da5db] text-white rounded-md transition-colors shadow-sm">
              <ShoppingCart className="h-5 w-5" />
              <div className="hidden md:flex flex-col items-start">
                <span className="text-[10px] opacity-90">My Cart</span>
                <span className="text-sm font-bold">₹0.00</span>
              </div>
              {cartCount > 0 && (
                <span className="bg-white text-[#2bbef9] text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#2bbef9] text-sm"
            />
            <button className="px-4 bg-[#2bbef9] text-white rounded-md">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;