import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, X, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import BacolaHeader from './BacolaHeader';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import { Button } from './ui/button';

const WishlistPage = () => {
  const navigate = useNavigate();
  
  // Mock wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 5,
      name: 'Kottakkal Kunkumadi Tailam',
      image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/K/u/Kunkumadi-Tailam-3_2nd.jpg',
      price: 505,
      originalPrice: null,
      weight: '10ml',
      inStock: true,
      category: 'Personal & Hair Care'
    },
    {
      id: 1,
      name: 'Henna & Indigo Powder Combo Pack',
      image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/H/e/Hennaindigo-3_2nd.jpg',
      price: 480,
      originalPrice: null,
      weight: '250gm + 250gm',
      inStock: true,
      category: 'Personal & Hair Care'
    }
  ]);

  const [cartCount, setCartCount] = useState(0);

  const removeItem = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from wishlist');
  };

  const moveToCart = (item) => {
    removeItem(item.id);
    setCartCount(prev => prev + 1);
    toast.success(`${item.name} moved to cart!`);
  };

  const moveAllToCart = () => {
    const count = wishlistItems.length;
    setCartCount(prev => prev + count);
    setWishlistItems([]);
    toast.success(`${count} items moved to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <BacolaHeader cartCount={cartCount} wishlistCount={wishlistItems.length} />

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          {wishlistItems.length > 0 && (
            <Button
              onClick={moveAllToCart}
              className="hidden md:flex bg-brand-brown hover:bg-brand-brown-dark text-white"
            >
              Add All to Cart
            </Button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          /* Empty Wishlist */
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-16 text-center">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-12 w-12 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Save items you love for later!</p>
            <Button
              onClick={() => navigate('/shop')}
              className="bg-brand-brown hover:bg-brand-brown-dark text-white"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow">
                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 z-10 bg-white hover:bg-red-50 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4 text-red-600" />
                </button>

                {/* Product Image */}
                <div 
                  className="relative bg-gray-50 p-6 aspect-square flex items-center justify-center cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.category}</p>
                  
                  <h3
                    className="font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-brand-brown transition-colors"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">{item.weight}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    {item.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{item.originalPrice}
                      </span>
                    )}
                    <span className="text-xl font-bold text-brand-brown">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-4">
                    {item.inStock ? (
                      <span className="text-sm text-green-600 font-semibold">In Stock</span>
                    ) : (
                      <span className="text-sm text-red-600 font-semibold">Out of Stock</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => moveToCart(item)}
                      disabled={!item.inStock}
                      className="flex-1 bg-brand-gold hover:bg-brand-gold-dark text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => removeItem(item.id)}
                      variant="outline"
                      className="border-gray-300 hover:border-red-500 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile: Add All to Cart */}
        {wishlistItems.length > 0 && (
          <div className="md:hidden fixed bottom-16 left-0 right-0 bg-white border-t shadow-lg p-4 z-40">
            <Button
              onClick={moveAllToCart}
              className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white py-3"
            >
              Add All to Cart ({wishlistItems.length} items)
            </Button>
          </div>
        )}
      </main>

      <Footer />
      <MobileBottomNav cartCount={cartCount} wishlistCount={wishlistItems.length} />
    </div>
  );
};

export default WishlistPage;
