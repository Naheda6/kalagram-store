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
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-2 left-2">
            <Badge
              className={`${
                product.badge === 'Best Seller'
                  ? 'bg-orange-500'
                  : product.badge === 'Organic'
                  ? 'bg-green-600'
                  : product.badge === 'Recommended'
                  ? 'bg-blue-600'
                  : 'bg-purple-600'
              } text-white`}
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {product.discount > 0 && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-red-500 text-white font-semibold">
              -{product.discount}%
            </Badge>
          </div>
        )}

        {/* Quick Actions */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="bg-white hover:bg-emerald-600 hover:text-white rounded-full shadow-lg"
            onClick={handleAddToWishlist}
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white hover:bg-emerald-600 hover:text-white rounded-full shadow-lg"
          >
            <Eye className="h-5 w-5" />
          </Button>
        </div>

        {/* Stock Status */}
        {product.stock !== 'In Stock' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">{product.stock}</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        {/* Weight */}
        <p className="text-sm text-gray-600 mb-2">{product.weight}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
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
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-emerald-600">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
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