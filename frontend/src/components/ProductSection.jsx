import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';

const ProductSection = ({ title, subtitle, products, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Sparkles className="h-6 w-6 text-emerald-600" />
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Featured</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 font-medium">{subtitle}</p>
            )}
          </div>
          <Button 
            variant="ghost" 
            className="text-emerald-600 hover:text-white hover:bg-emerald-600 font-bold group border-2 border-emerald-600 rounded-full px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-emerald-600/30"
          >
            View All Products
            <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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