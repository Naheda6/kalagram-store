import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { categories } from '../mockData';

const Navigation = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#', hasDropdown: true },
    { name: 'Fruits & Vegetables', href: '#' },
    { name: 'Beverages', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* All Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-3 px-6 py-4 bg-[#233a95] hover:bg-[#1a2d75] text-white font-medium transition-colors"
            >
              <Menu className="h-5 w-5" />
              <span>ALL CATEGORIES</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Categories Mega Menu */}
            {categoriesOpen && (
              <div className="absolute top-full left-0 w-80 bg-white shadow-2xl z-50 rounded-b-md">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href="#"
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-gray-50 border-b border-gray-100 transition-colors group"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-[#2bbef9]">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-400">{category.itemCount}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center flex-1 ml-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-1 px-4 py-4 text-gray-700 hover:text-[#2bbef9] font-medium transition-colors relative group"
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2bbef9] transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            <div className="text-gray-600 text-sm">
              <span className="font-semibold text-[#2bbef9]">Free Delivery:</span> on orders over <span className="font-semibold">₹3500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;