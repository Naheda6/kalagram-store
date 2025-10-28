import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Progress } from './ui/progress';

const HotProductWeek = ({ product, onAddToCart, onAddToWishlist }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!product.dealEndsAt) return;

    const calculateTimeLeft = () => {
      const difference = new Date(product.dealEndsAt) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [product.dealEndsAt]);

  if (!product.isHotDeal) return null;

  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Hot Product for <span className="text-red-500">This Week</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Special discount just for this week
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-brand-brown transition-colors text-sm font-medium">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Hot Deal Card */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 md:p-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            {/* Left: Product Image */}
            <div className="relative">
              {/* Discount Badge */}
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-12 h-12 md:w-16 md:h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-white font-black text-sm md:text-lg">{product.discount}%</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 md:p-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-[200px] md:max-w-xs h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Product Details */}
            <div>
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                {product.originalPrice && (
                  <span className="text-lg md:text-xl text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="text-2xl md:text-3xl font-black text-red-500">
                  ₹{product.price}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Stock & Weight */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-gray-600">{product.weight}</span>
                <span className="text-xs font-semibold text-green-600">{product.stock}</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-0 rounded-full transition-all duration-500"
                    style={{
                      width: `${product.dealProgress}%`,
                      background: 'linear-gradient(90deg, #ef4444 0%, #f97316 35%, #fbbf24 65%, #e5e7eb 100%)'
                    }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1.5">
                  {product.dealProgress}% sold
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  {/* Timer Boxes */}
                  <div className="flex gap-1.5">
                    <div className="bg-white rounded px-2 py-1.5 min-w-[45px] text-center border">
                      <div className="text-lg md:text-xl font-black text-gray-900">
                        {String(timeLeft.days).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-gray-500">Days</div>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-400">:</span>
                    <div className="bg-white rounded px-2 py-1.5 min-w-[45px] text-center border">
                      <div className="text-lg md:text-xl font-black text-gray-900">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-gray-500">Hrs</div>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-400">:</span>
                    <div className="bg-white rounded px-2 py-1.5 min-w-[45px] text-center border">
                      <div className="text-lg md:text-xl font-black text-gray-900">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-gray-500">Mins</div>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-400">:</span>
                    <div className="bg-white rounded px-2 py-1.5 min-w-[45px] text-center border">
                      <div className="text-lg md:text-xl font-black text-gray-900">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-gray-500">Secs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => onAddToCart(product, 1)}
                className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProductWeek;
