import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Heart, Tag } from 'lucide-react';
import { toast } from 'sonner';
import BacolaHeader from './BacolaHeader';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';

const CartPage = () => {
  const navigate = useNavigate();
  
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 2,
      name: 'Ground Nut Oil (Peanut Oil)',
      image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/g/r/ground-nut-oil-2.jpg',
      price: 396,
      originalPrice: 549,
      quantity: 2,
      weight: '1 Liter',
      inStock: true
    },
    {
      id: 1,
      name: 'Henna & Indigo Powder Combo Pack',
      image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/H/e/Hennaindigo-3_2nd.jpg',
      price: 480,
      originalPrice: null,
      quantity: 1,
      weight: '250gm + 250gm',
      inStock: true
    },
    {
      id: 5,
      name: 'Kottakkal Kunkumadi Tailam',
      image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/K/u/Kunkumadi-Tailam-3_2nd.jpg',
      price: 505,
      originalPrice: null,
      quantity: 1,
      weight: '10ml',
      inStock: true
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [wishlistCount, setWishlistCount] = useState(0);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const moveToWishlist = (item) => {
    removeItem(item.id);
    setWishlistCount(prev => prev + 1);
    toast.success(`${item.name} moved to wishlist`);
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discount: 10 });
      toast.success('Coupon applied! 10% discount');
    } else {
      toast.error('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
  const shipping = subtotal >= 3500 ? 0 : 50;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <BacolaHeader cartCount={cartItems.length} wishlistCount={wishlistCount} />

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-16 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Button
              onClick={() => navigate('/')}
              className="bg-brand-brown hover:bg-brand-brown-dark text-white"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div 
                      className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-lg flex-shrink-0 cursor-pointer"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-semibold text-gray-900 mb-1 cursor-pointer hover:text-brand-brown transition-colors line-clamp-2"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{item.weight}</p>
                      
                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-xl font-bold text-brand-brown">
                          ₹{item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹{item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Actions Row */}
                      <div className="flex items-center gap-4 flex-wrap">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Move to Wishlist */}
                        <button
                          onClick={() => moveToWishlist(item)}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-brown transition-colors"
                        >
                          <Heart className="h-4 w-4" />
                          <span className="hidden md:inline">Move to Wishlist</span>
                        </button>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="hidden md:inline">Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* Item Total (Desktop) */}
                    <div className="hidden md:block text-right">
                      <p className="text-sm text-gray-600 mb-1">Item Total</p>
                      <p className="text-xl font-bold text-gray-900">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
                  Order Summary
                </h2>

                {/* Coupon Code */}
                <div className="mb-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      onClick={applyCoupon}
                      variant="outline"
                      className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white"
                    >
                      Apply
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <Badge className="mt-2 bg-green-50 text-green-700 border-green-200">
                      <Tag className="h-3 w-3 mr-1" />
                      {appliedCoupon.code} applied
                    </Badge>
                  )}
                </div>

                <Separator className="my-4" />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.discount}%)</span>
                      <span className="font-semibold">-₹{discount}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>

                  {subtotal < 3500 && shipping > 0 && (
                    <p className="text-xs text-gray-600">
                      Add ₹{3500 - subtotal} more for FREE shipping
                    </p>
                  )}
                </div>

                <Separator className="my-4" />

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-display font-bold text-brand-brown">
                    ₹{total}
                  </span>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white py-6 text-lg font-semibold"
                >
                  Proceed to Checkout
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>

                <Button
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="w-full mt-3"
                >
                  Continue Shopping
                </Button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>100% Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Easy Returns & Refunds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <MobileBottomNav cartCount={cartItems.length} wishlistCount={wishlistCount} />
    </div>
  );
};

export default CartPage;
