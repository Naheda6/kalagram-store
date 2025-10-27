import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ServiceBanner from "./components/ServiceBanner";
import CategoryGrid from "./components/CategoryGrid";
import ProductSection from "./components/ProductSection";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";
import { products } from "./mockData";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    toast.success(`${product.name} added to cart!`, {
      description: `Price: ₹${product.price}`,
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlistCount(prev => prev + 1);
    toast.success(`${product.name} added to wishlist!`);
  };

  // Split products for different sections
  const bestSellers = products.filter(p => p.badge === 'Best Seller').slice(0, 8);
  const newArrivals = products.slice(0, 8);
  const featuredProducts = products.filter(p => p.badge === 'Organic').slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} wishlistCount={wishlistCount} />
      
      <main>
        <HeroSlider />
        <ServiceBanner />
        
        <ProductSection
          title="Best Sellers"
          subtitle="Don't miss the current offers until the end of March"
          products={bestSellers.length > 0 ? bestSellers : products.slice(0, 8)}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />

        <PromoBanner />

        <CategoryGrid />

        <div className="bg-gray-50">
          <ProductSection
            title="New Arrivals"
            subtitle="New products with updated stocks"
            products={newArrivals}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        </div>

        <ProductSection
          title="Organic Products"
          subtitle="100% natural and chemical-free products"
          products={featuredProducts.length > 0 ? featuredProducts : products.slice(8, 16)}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
