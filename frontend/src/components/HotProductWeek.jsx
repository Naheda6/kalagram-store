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
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900">
              HOT PRODUCT FOR <span className="text-red-500">THIS WEEK</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Don't miss this opportunity at a special discount just for this week.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#2bbef9] transition-colors border border-gray-300 px-6 py-2 rounded-full font-medium">
            View All
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Hot Deal Card */}
        <div className="bg-white border-2 border-red-500 rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Product Image */}
            <div className="relative">
              {/* Discount Badge */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-white font-black text-lg md:text-2xl">{product.discount}%</span>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 md:p-10 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Product Details */}
            <div>
              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                {product.originalPrice && (
                  <span className="text-xl md:text-2xl text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="text-3xl md:text-5xl font-black text-red-500">
                  ₹{product.price}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h3>

              {/* Stock & Weight */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-600">{product.weight}</span>
                <span className="text-sm font-semibold text-green-600">{product.stock}</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-0 rounded-full transition-all duration-500"
                    style={{
                      width: `${product.dealProgress}%`,
                      background: 'linear-gradient(90deg, #ef4444 0%, #f97316 35%, #fbbf24 65%, #e5e7eb 100%)'
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {product.dealProgress}% sold - Hurry up!
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  {/* Timer Boxes */}
                  <div className="flex gap-2">
                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px] text-center">
                      <div className="text-2xl md:text-3xl font-black text-gray-900">
                        {String(timeLeft.days).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Days</div>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-400">:</span>
                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px] text-center">
                      <div className="text-2xl md:text-3xl font-black text-gray-900">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Hours</div>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-400">:</span>
                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px] text-center">
                      <div className="text-2xl md:text-3xl font-black text-gray-900">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Mins</div>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-gray-400">:</span>
                    <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[60px] text-center">
                      <div className="text-2xl md:text-3xl font-black text-gray-900">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Secs</div>
                    </div>
                  </div>
                  
                  {/* Remaining Text */}
                  <div className="hidden md:block">
                    <p className="text-sm text-gray-600 font-medium">
                      Remains until the end
                    </p>
                    <p className="text-sm text-gray-600">of the offer</p>
                  </div>
                </div>
              </div>

              {/* Mobile Timer Label */}
              <p className="md:hidden text-sm text-gray-600 text-center mb-6">
                Remains until the end of the offer
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => onAddToCart(product, 1)}
                className="w-full bg-[#2bbef9] hover:bg-[#1da5db] text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
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
