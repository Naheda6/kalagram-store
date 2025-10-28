import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BacolaProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
      <div 
        className="relative p-4 bg-white aspect-square flex items-center justify-center cursor-pointer"
        onClick={handleProductClick}
      >
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}%
            </span>
          </div>
        )}

        {product.badge && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-[#2bbef9] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
              {product.badge}
            </span>
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-darken"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
          <button
            onClick={() => onAddToWishlist?.(product)}
            className="bg-white hover:bg-[#2bbef9] hover:text-white p-2.5 rounded-full shadow-lg transition-all"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button 
            onClick={handleProductClick}
            className="bg-white hover:bg-[#2bbef9] hover:text-white p-2.5 rounded-full shadow-lg transition-all"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-3 md:p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>

        <h3 
          className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[40px] hover:text-[#2bbef9] cursor-pointer transition-colors"
          onClick={handleProductClick}
        >
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2.5 py-1.5 hover:bg-gray-100 transition-colors text-gray-600 font-semibold"
            >
              -
            </button>
            <span className="px-3 py-1.5 min-w-[35px] text-center font-semibold text-sm border-x border-gray-300">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2.5 py-1.5 hover:bg-gray-100 transition-colors text-gray-600 font-semibold"
            >
              +
            </button>
          </div>

          <button
            onClick={() => onAddToCart?.(product, quantity)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#2bbef9] hover:bg-[#1da5db] text-white py-2 px-3 rounded-md font-semibold text-sm transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BacolaProductCard;
