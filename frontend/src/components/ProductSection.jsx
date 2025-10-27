import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Button } from './ui/button';

const ProductSection = ({ title, subtitle, products, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
          <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700">
            View All
            <ChevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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