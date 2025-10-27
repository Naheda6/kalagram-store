import React, { useState } from 'react';
import { Menu, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { categories } from '../mockData';

const Navigation = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Shop', href: '#', hasDropdown: true },
    { name: 'Personal Care', href: '#' },
    { name: 'Cold Pressed Oils', href: '#' },
    { name: 'Rice & Flours', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <div className="bg-white border-b sticky top-0 z-40 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* All Categories Mega Menu */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-3 px-6 py-4 bg-[#fdc040] hover:bg-[#fcb827] text-gray-900 font-bold transition-colors rounded-sm"
            >
              <Menu className="h-5 w-5" />
              <span className="text-sm uppercase">Browse All Categories</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Mega Menu Dropdown */}
            {categoriesOpen && (
              <div className="absolute top-full left-0 w-72 bg-white shadow-2xl z-50 border border-gray-100 mt-1">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href="#"
                    className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 border-b border-gray-50 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 group-hover:text-[#2bbef9] font-medium">
                      {category.name}
                    </span>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#2bbef9]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center flex-1 ml-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`flex items-center gap-1 px-4 py-4 text-sm font-medium transition-colors relative ${
                  link.active
                    ? 'text-[#2bbef9]'
                    : 'text-gray-700 hover:text-[#2bbef9]'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                {link.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2bbef9]"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Special Offers */}
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-orange-500" />
            <span className="text-gray-700">
              <span className="font-bold text-orange-500">Special Offer:</span> Get <span className="font-bold">30% Off</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;