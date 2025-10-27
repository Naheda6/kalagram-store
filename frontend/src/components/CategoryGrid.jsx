import React from 'react';
import { categories } from '../mockData';
import { ChevronRight } from 'lucide-react';

const CategoryGrid = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Shop by <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">Browse our wide range of natural products</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-white font-bold text-lg mb-2 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {category.itemCount} Items
                    </span>
                    <div className="bg-emerald-500 p-2 rounded-full shadow-lg group-hover:bg-emerald-600 transition-colors">
                      <ChevronRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;