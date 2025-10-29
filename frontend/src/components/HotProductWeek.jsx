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
    <section className="py-6 md:py-8 bg-white border border-[#d9c9b0] rounded-2xl">
      <div className="container mx-auto px-4">
        {/* Header with View All */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Hot Product for{' '}
              <span className="text-[#7B4B24]">This Week</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 mb-1">
              Special discount just for this week
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#7B4B24] hover:text-[#5F391A] transition-colors text-sm font-semibold underline-offset-4 hover:underline">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Hot Deal Card */}
        <div className="bg-gradient-to-br from-[#f7f1ea] via-[#f9f6f1] to-[#f4eee6] rounded-2xl p-4 md:p-6 shadow-soft">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            {/* Left: Product Image */}
            <div className="relative bg-white rounded-xl p-4 md:p-6 flex items-center justify-center shadow-sm overflow-hidden">
              {/* ✅ Discount Badge (top-right corner) */}
              <div className="absolute top-3 right-3 bg-[#7B4B24] text-white font-bold text-xs md:text-sm px-3 py-1.5 rounded-full shadow-md z-10">
                {product.discount}% OFF
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-[180px] md:max-w-[230px] h-auto object-contain"
              />
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
                <span className="text-2xl md:text-3xl font-black text-[#7B4B24]">
                  ₹{product.price}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>

              {/* Stock & Weight */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-gray-600">
                  {product.weight}
                </span>
                <span className="text-xs font-semibold text-green-600">
                  {product.stock}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="relative h-5 md:h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-500"
                    style={{
                      width: `${product.dealProgress}%`,
                      background:
                        'linear-gradient(90deg, #7B4B24 0%, #C68B59 50%, #E1C299 100%)'
                    }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1.5">
                  {product.dealProgress}% sold
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-4">
                <div className="flex gap-2 text-center text-sm">
                  {['Days', 'Hrs', 'Mins', 'Secs'].map((label, i) => {
                    const values = [
                      timeLeft.days,
                      timeLeft.hours,
                      timeLeft.minutes,
                      timeLeft.seconds
                    ];
                    return (
                      <div
                        key={label}
                        className="bg-white border border-[#e7d7c2] rounded-lg px-2 py-1 shadow-sm min-w-[45px]"
                      >
                        <div className="font-bold text-gray-900">
                          {String(values[i]).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => onAddToCart(product, 1)}
                className="w-full bg-[#7B4B24] hover:bg-[#5F391A] text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm shadow-md"
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
