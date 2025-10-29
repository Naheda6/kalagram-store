import React, { useState } from 'react';
import { Home, Grid3x3, Heart, ShoppingCart, User, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../mockData';

const MobileBottomNav = ({ cartCount = 0, wishlistCount = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Grid3x3, label: 'Categories', path: null, isCategory: true },
    { icon: Heart, label: 'Wishlist', path: '/wishlist', badge: wishlistCount },
    { icon: ShoppingCart, label: 'Cart', path: '/cart', badge: cartCount },
    { icon: User, label: 'Account', path: '/auth' },
  ];

  const handleNavClick = (item) => {
    if (item.isCategory) {
      setShowCategories(true);
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
        <nav className="flex items-center justify-around h-16">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
                  isActive 
                    ? 'text-[#7B4B24]' 
                    : 'text-gray-500 hover:text-[#7B4B24]'
                }`}
              >
                <div className="relative">
                  <Icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
                  {item.badge > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {item.badge > 9 ? '9+' : item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-xs mt-1 font-medium ${isActive ? 'font-semibold' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Categories Modal/Overlay */}
      {showCategories && (
        <div className="fixed inset-0 bg-black/50 z-[60] md:hidden" onClick={() => setShowCategories(false)}>
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">All Categories</h3>
              <button
                onClick={() => setShowCategories(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Categories List */}
            <div className="overflow-y-auto max-h-[calc(80vh-70px)] pb-20">
              <div className="p-4 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      navigate(`/category/${category.slug}`);
                      setShowCategories(false);
                    }}
                    className="w-full text-left px-4 py-4 bg-gray-50 hover:bg-[#FFF8F0] rounded-xl transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-[#7B4B24]/20"
                  >
                    <div className="flex-1">
                      <span className="font-semibold text-gray-800 group-hover:text-[#7B4B24] transition-colors">
                        {category.name}
                      </span>
                      {category.description && (
                        <p className="text-xs text-gray-500 mt-1">{category.description}</p>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 group-hover:border-[#7B4B24] group-hover:text-[#7B4B24] transition-colors ml-3">
                      {category.itemCount}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default MobileBottomNav;