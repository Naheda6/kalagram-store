import React from 'react';
import { categories } from '../mockData';
import { ChevronRight } from 'lucide-react';

const CategoryGrid = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Browse our wide range of natural products</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/90 text-sm">{category.itemCount} Items</span>
                  <ChevronRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;