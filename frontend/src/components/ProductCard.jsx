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
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group relative transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge
              className={`${
                product.badge === 'Best Seller'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50'
                  : product.badge === 'Organic'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/50'
                  : product.badge === 'Recommended'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50'
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-500/50'
              } text-white font-semibold px-3 py-1 text-xs uppercase tracking-wide`}
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {product.discount > 0 && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-red-500 text-white font-bold px-3 py-2 rounded-full shadow-lg shadow-red-500/50 text-sm">
              -{product.discount}%
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <Button
            size="icon"
            className={`bg-white hover:bg-emerald-600 hover:text-white rounded-full shadow-lg transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            onClick={handleAddToWishlist}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            className={`bg-white hover:bg-emerald-600 hover:text-white rounded-full shadow-lg transition-all duration-300 delay-75 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Stock Status */}
        {product.stock !== 'In Stock' && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-10">
            <span className="text-white font-bold text-lg px-6 py-3 bg-black/40 rounded-full">
              {product.stock}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs text-emerald-600 font-semibold mb-2 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem] text-base hover:text-emerald-600 transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Weight */}
        <p className="text-sm text-gray-500 mb-3 font-medium">{product.weight}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-emerald-600">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through font-medium">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-6 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-700/40 transition-all duration-300"
          disabled={product.stock !== 'In Stock'}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;