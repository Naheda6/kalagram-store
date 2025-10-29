import { ShoppingCart } from "lucide-react";
import React from "react";
import { useNavigate } from 'react-router-dom';


const BacolaProductCard = ({ product }) => {
    const navigate = useNavigate();
const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div onClick={handleProductClick} style={{ cursor: 'pointer' }}
  className="flex items-center justify-between w-full max-w-[420px] bg-white shadow-md rounded-2xl p-3 hover:shadow-lg transition-all duration-300"
>
      {/* Left: Product Image */}
      <div className="w-40 h-40 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right: Product Info */}
      <div className="flex flex-col justify-between flex-grow pl-4">
        {/* Category */}
        <p className="text-xs uppercase text-gray-500 font-medium">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="text-base font-semibold text-[#4B2E05] leading-tight">
          {product.name}
        </h3>

        {/* Ratings */}
        <div className="flex items-center mt-1 mb-1">
          <div className="flex text-yellow-400 text-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i < product.rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
          <span className="text-lg font-bold text-[#6A4A2B]">
            ₹{product.price}
          </span>
        </div>

        {/* Add to Cart */}
<div className="flex items-center gap-2 mt-2">
  <button className="px-2 py-1 border rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
    -
  </button>
  <span className="text-sm font-medium">{product.quantity || 1}</span>
  <button className="px-2 py-1 border rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
    +
  </button>

  <button className="ml-auto bg-[#6A4A2B] text-white p-2 rounded-md hover:bg-[#5B3F23] transition-all">
    <ShoppingCart className="h-4 w-4" />
  </button>
</div>
      </div>
    </div>
  );
};

export default BacolaProductCard;
