import React from 'react';
import { Home, ShoppingCart, Heart, User, Menu } from 'lucide-react';

const MobileBottomNav = ({ cartCount = 0, wishlistCount = 0 }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="grid grid-cols-5 h-16">
        {/* Home */}
        <button className="flex flex-col items-center justify-center gap-1 text-[#2bbef9] bg-blue-50">
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-semibold">Home</span>
        </button>

        {/* Categories */}
        <button className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#2bbef9] transition-colors">
          <Menu className="h-5 w-5" />
          <span className="text-[10px] font-medium">Categories</span>
        </button>

        {/* Cart */}
        <button className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#2bbef9] transition-colors relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="text-[10px] font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="absolute top-2 right-1/2 translate-x-3 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>

        {/* Wishlist */}
        <button className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#2bbef9] transition-colors relative">
          <Heart className="h-5 w-5" />
          <span className="text-[10px] font-medium">Wishlist</span>
          {wishlistCount > 0 && (
            <span className="absolute top-2 right-1/2 translate-x-3 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* Account */}
        <button className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[#2bbef9] transition-colors">
          <User className="h-5 w-5" />
          <span className="text-[10px] font-medium">Account</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
