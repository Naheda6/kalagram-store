import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, Repeat } from 'lucide-react';
import { Button } from './ui/button';

const BacolaProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative p-4 bg-white">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10">
          {product.discount > 0 && (
            <span className="bg-[#ff6b6b] text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}%
            </span>
          )}
        </div>

        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-[#2bbef9] text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
              {product.badge}
            </span>
          </div>
        )}

        {/* Product Image */}
        <div className="relative aspect-square flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* Hover Icons */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onAddToWishlist?.(product)}
            className="bg-white hover:bg-[#2bbef9] hover:text-white p-2.5 rounded-full shadow-lg transition-all"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button className="bg-white hover:bg-[#2bbef9] hover:text-white p-2.5 rounded-full shadow-lg transition-all">
            <Eye className="h-4 w-4" />
          </button>
          <button className="bg-white hover:bg-[#2bbef9] hover:text-white p-2.5 rounded-full shadow-lg transition-all">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 pt-2">
        {/* Category */}
        <div className="text-xs text-gray-500 mb-1.5">{product.category}</div>

        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10 hover:text-[#2bbef9] cursor-pointer transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mb-3">
          <div>
            {product.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice}
              </div>
            )}
            <div className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </div>
          </div>
        </div>

        {/* Quantity and Add Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-200 rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1.5 hover:bg-gray-50 transition-colors text-gray-600"
            >
              -
            </button>
            <span className="px-3 py-1.5 min-w-[40px] text-center font-medium text-sm">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1.5 hover:bg-gray-50 transition-colors text-gray-600"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onAddToCart?.(product, quantity)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#233a95] hover:bg-[#1a2d75] text-white py-2 rounded font-medium transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BacolaProductCard;