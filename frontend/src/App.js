import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import BacolaHeader from "./components/BacolaHeader";
import BacolaHeroSlider from "./components/BacolaHeroSlider";
import ServiceBanner from "./components/ServiceBanner";
import CategoryGrid from "./components/CategoryGrid";
import BacolaProductCard from "./components/BacolaProductCard";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import HotProductWeek from "./components/HotProductWeek";
import ProductDetail from "./components/ProductDetail";
import { products } from "./mockData";
import { ChevronRight, TrendingUp } from "lucide-react";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleAddToCart = (product, quantity = 1) => {
    setCartCount(prev => prev + quantity);
    toast.success(`${product.name} added to cart!`, {
      description: `Quantity: ${quantity} - Price: ₹${product.price * quantity}`,
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlistCount(prev => prev + 1);
    toast.success(`${product.name} added to wishlist!`);
  };

  const bestSellers = products.filter(p => p.badge === 'Best Seller').slice(0, 10);
  const newArrivals = products.slice(0, 10);
  const featuredProducts = products.filter(p => p.badge === 'Organic').slice(0, 10);
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 10);
  const hotDealProduct = products.find(p => p.isHotDeal);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <BacolaHeader cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <main>
        <section className="py-4 md:py-8">
          <div className="container mx-auto px-4">
            <BacolaHeroSlider />
          </div>
        </section>

        <ServiceBanner />
        
        {/* Hot Product of the Week */}
        {hotDealProduct && (
          <HotProductWeek 
            product={hotDealProduct}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        )}
        
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Best Sellers</h2>
                <p className="text-sm md:text-base text-gray-600 mt-1">Do not miss this opportunity at a special discount just for this week.</p>
              </div>
              <button className="text-[#2bbef9] hover:text-[#1da5db] font-semibold flex items-center gap-1 text-sm">
                <span className="hidden md:inline">View All</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {(bestSellers.length > 0 ? bestSellers : products.slice(0, 10)).map((product) => (
                <BacolaProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
          </div>
        </section>

        <PromoBanner />

        <CategoryGrid />

        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">New Arrivals</h2>
                <p className="text-sm md:text-base text-gray-600 mt-1">New products with updated stocks</p>
              </div>
              <button className="text-[#2bbef9] hover:text-[#1da5db] font-semibold flex items-center gap-1 text-sm">
                <span className="hidden md:inline">View All</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {newArrivals.map((product) => (
                <BacolaProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Organic Products</h2>
                <p className="text-sm md:text-base text-gray-600 mt-1">100% natural and chemical-free</p>
              </div>
              <button className="text-[#2bbef9] hover:text-[#1da5db] font-semibold flex items-center gap-1 text-sm">
                <span className="hidden md:inline">View All</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {(featuredProducts.length > 0 ? featuredProducts : products.slice(10, 20)).map((product) => (
                <BacolaProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Products Section */}
        {trendingProducts.length > 0 && (
          <section className="py-8 md:py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">Trending Products</h2>
                    <p className="text-sm md:text-base text-gray-600 mt-1">Most popular items right now</p>
                  </div>
                </div>
                <button className="text-[#2bbef9] hover:text-[#1da5db] font-semibold flex items-center gap-1 text-sm">
                  <span className="hidden md:inline">View All</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {trendingProducts.map((product) => (
                  <BacolaProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileBottomNav cartCount={cartCount} wishlistCount={wishlistCount} />
      <Toaster position="top-right" richColors />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
