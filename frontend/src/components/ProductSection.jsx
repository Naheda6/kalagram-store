import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';

const ProductSection = ({ title, subtitle, products, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 md:mb-8 border-b-2 border-gray-200 pb-3 md:pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{title}</h2>
            {subtitle && <p className="text-sm md:text-base text-gray-600">{subtitle}</p>}
          </div>
          <Button 
            variant="ghost" 
            className="text-emerald-600 hover:text-emerald-700 hover:bg-transparent font-medium text-sm md:text-base px-2 md:px-4"
          >
            <span className="hidden sm:inline">View All</span>
            <ChevronRight className="h-5 w-5 sm:ml-1" />
          </Button>
        </div>

        {/* Products Grid - Mobile First */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;