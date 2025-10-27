import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, Menu, MapPin, Phone, Mail, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { categories } from '../mockData';

const Header = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2 hidden md:flex">
              <Mail className="h-4 w-4" />
              <span>support@kalaguragampa.com</span>
            </div>
          </div>
          <div className="text-xs hidden sm:block">
            Free Delivery on orders over ₹3500
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-emerald-600">
                Kalagura Gampa
              </h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pr-12 h-12 border-2 border-gray-200 focus:border-emerald-500"
                />
                <Button
                  className="absolute right-0 top-0 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-l-none"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="relative hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="lg:hidden mt-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full pr-12 h-10 border-2 border-gray-200 focus:border-emerald-500"
              />
              <Button
                className="absolute right-0 top-0 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-l-none"
                size="sm"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Categories Dropdown */}
            <div className="relative">
              <Button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="bg-emerald-600 hover:bg-emerald-700 h-12 px-6"
              >
                <Menu className="h-5 w-5 mr-2" />
                All Categories
              </Button>

              {categoryOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className="w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors flex items-center justify-between"
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.itemCount}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                New Arrivals
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Best Sellers
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Special Offers
              </a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                About Us
              </a>
            </nav>

            {/* Location */}
            <div className="hidden md:flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium">Your Location</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <a href="#" className="py-2 text-gray-700 hover:text-emerald-600 font-medium">
              Home
            </a>
            <a href="#" className="py-2 text-gray-700 hover:text-emerald-600 font-medium">
              Shop
            </a>
            <a href="#" className="py-2 text-gray-700 hover:text-emerald-600 font-medium">
              New Arrivals
            </a>
            <a href="#" className="py-2 text-gray-700 hover:text-emerald-600 font-medium">
              Best Sellers
            </a>
            <a href="#" className="py-2 text-gray-700 hover:text-emerald-600 font-medium">
              Special Offers
            </a>
            <a href="#" className="py-2 text-gray-700 hover:text-emerald-600 font-medium">
              About Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;