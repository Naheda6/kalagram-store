import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BacolaProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Badge color mapping
  const getBadgeColor = (badge) => {
    const colors = {
      'Best Seller': 'bg-brand-gold text-white',
      'Organic': 'bg-green-600 text-white',
      'Recommended': 'bg-brand-tan text-white',
      'Low GI': 'bg-blue-600 text-white',
      'New': 'bg-purple-600 text-white'
    };
    return colors[badge] || 'bg-brand-brown text-white';
  };

  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl hover:border-brand-tan transition-all duration-300 group relative">
      <div 
        className="relative p-6 bg-gray-50 aspect-square flex items-center justify-center cursor-pointer"
        onClick={handleProductClick}
      >
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-md">
              {product.discount}% OFF
            </span>
          </div>
        )}

        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className={`${getBadgeColor(product.badge)} text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md`}>
              {product.badge}
            </span>
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
          <button
            onClick={(e) => { e.stopPropagation(); onAddToWishlist?.(product); }}
            className="bg-white hover:bg-brand-brown hover:text-white p-3 rounded-full shadow-xl transition-all"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button 
            onClick={handleProductClick}
            className="bg-white hover:bg-brand-brown hover:text-white p-3 rounded-full shadow-xl transition-all"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4 md:p-5">
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
