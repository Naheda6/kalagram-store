import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import BacolaHeader from "./components/BacolaHeader";
// import BacolaHeroSlider from "./components/BacolaHeroSlider";
import ServiceBanner from "./components/ServiceBanner";
import CategoryGrid from "./components/CategoryGrid";
import BacolaProductCard from "./components/BacolaProductCard";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import HotProductWeek from "./components/HotProductWeek";
import ProductDetail from "./components/ProductDetail";
import CategoryPage from "./components/CategoryPage";
import AuthPage from "./components/AuthPage";
import CartPage from "./components/CartPage";
import ShopPage from "./components/ShopPage";
import WishlistPage from "./components/WishlistPage";
import CheckoutPage from "./components/CheckoutPage";
import { products } from "./mockData";
import { ChevronRight, TrendingUp } from "lucide-react";
import HeroSlider from "./components/HeroSlider";

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
    <div className="min-h-screen bg-gray-50">
      <BacolaHeader cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <main className="pb-16 md:pb-0">
        {/* Hero Slider and Trending Products Side by Side */}
{/* Hero Slider and Trending Products Side by Side */}
<section className="py-4 md:py-6">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
      
      {/* Left: Hero Slider with Trending Products below */}
      <div className="flex flex-col gap-3 md:gap-4">
        <HeroSlider />

        {/* Trending Products under Hero Slider */}
{trendingProducts.length > 0 && (
  <div className="bg-[#fffaf5] rounded-xl p-3 md:p-4 shadow-md border border-[#eadcc9]">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-base md:text-xl font-bold text-[#3C2A1A]">
        Trending <span className="text-[#7B4B24]">Products</span>
      </h2>
      <button className="text-[#7B4B24] hover:text-[#5F391A] font-semibold text-xs md:text-sm flex items-center gap-1">
        View All
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>

    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {trendingProducts.slice(0, 2).map((product) => (
        <div
          key={product.id}
          className="bg-white border border-[#e9dfd1] rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="relative w-full h-[80px] md:h-[100px] overflow-hidden rounded-md mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-1 left-1 bg-[#7B4B24] text-white text-[9px] md:text-[10px] font-semibold px-1.5 py-0.5 rounded-full shadow-md">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="w-full space-y-1">
              <h3 className="text-[11px] md:text-[13px] font-semibold text-[#3C2A1A] truncate text-center">
                {product.name}
              </h3>
              <p className="text-[10px] md:text-[11px] text-gray-500 text-center">{product.category}</p>
              <div className="flex items-center justify-center gap-1.5">
                {product.originalPrice && (
                  <span className="text-[10px] md:text-[11px] text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="text-[12px] md:text-[13px] font-bold text-[#7B4B24]">
                  ₹{product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      </div>

      {/* Right: Hot Product of the Week */}
      {hotDealProduct && (
        <div className="w-full h-full">
          <HotProductWeek
            product={hotDealProduct}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        </div>
      )}
    </div>
  </div>
</section>


        <ServiceBanner />
        
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6">
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

      <Footer className="mb-16 md:mb-0" />
      <MobileBottomNav cartCount={cartCount} wishlistCount={wishlistCount} />
    </div>
  );
};

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <MobileBottomNav cartCount={cartCount} wishlistCount={wishlistCount} />
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;