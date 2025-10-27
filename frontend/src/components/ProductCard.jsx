import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist?.(product);
  };

  return (
    <div
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative bg-white p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain"
        />

        {/* Badges - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount > 0 && (
            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}%
            </div>
          )}
          {product.badge && (
            <div className={`text-white text-[10px] font-bold px-2 py-1 rounded uppercase ${
              product.badge === 'Best Seller' ? 'bg-orange-500' :
              product.badge === 'Organic' ? 'bg-green-600' :
              product.badge === 'Recommended' ? 'bg-blue-600' : 'bg-purple-600'
            }`}>
              {product.badge}
            </div>
          )}
        </div>

        {/* Quick Actions - Top Right */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToWishlist}
            className="bg-white hover:bg-emerald-600 hover:text-white p-2 rounded-full shadow-md transition-colors"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button className="bg-white hover:bg-emerald-600 hover:text-white p-2 rounded-full shadow-md transition-colors">
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Stock Status */}
        {product.stock !== 'In Stock' && (
          <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
            <span className="text-gray-700 font-semibold">{product.stock}</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 border-t border-gray-100">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-2">{product.category}</p>

        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 h-12 text-sm hover:text-emerald-600 transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-0.5">
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

        {/* Weight */}
        <p className="text-sm text-gray-600 mb-3">{product.weight}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
          <span className="text-xl font-bold text-gray-900">
            ₹{product.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm h-10"
          disabled={product.stock !== 'In Stock'}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;