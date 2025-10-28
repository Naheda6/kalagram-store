import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import BacolaHeader from './BacolaHeader';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import BacolaProductCard from './BacolaProductCard';
import { products, categories } from '../mockData';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const category = categories.find(c => c.slug === slug);
  
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Get category products
  const categoryProducts = category 
    ? products.filter(p => p.category === category.name)
    : products;

  // Apply filters
  let filteredProducts = categoryProducts.filter(p => {
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    const badgeMatch = selectedBadges.length === 0 || selectedBadges.includes(p.badge);
    const ratingMatch = selectedRating === 'all' || p.rating >= parseInt(selectedRating);
    return priceMatch && badgeMatch && ratingMatch;
  });

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default: // popularity
        return b.reviews - a.reviews;
    }
  });

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

  const handleBadgeToggle = (badge) => {
    setSelectedBadges(prev =>
      prev.includes(badge)
        ? prev.filter(b => b !== badge)
        : [...prev, badge]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedBadges([]);
    setSelectedRating('all');
  };

  const availableBadges = [...new Set(products.map(p => p.badge).filter(Boolean))];
  const activeFiltersCount = selectedBadges.length + (selectedRating !== 'all' ? 1 : 0);

  // Filter sidebar component
  const FilterSidebar = ({ isMobile = false }) => (
    <div className="space-y-6">
      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Active Filters</h3>
            <button
              onClick={clearFilters}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedBadges.map(badge => (
              <Badge key={badge} variant="secondary" className="pr-1">
                {badge}
                <button
                  onClick={() => handleBadgeToggle(badge)}
                  className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selectedRating !== 'all' && (
              <Badge variant="secondary" className="pr-1">
                {selectedRating}★+
                <button
                  onClick={() => setSelectedRating('all')}
                  className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Price Range */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={2000}
          step={50}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">₹{priceRange[0]}</span>
          <span className="font-semibold">₹{priceRange[1]}</span>
        </div>
      </div>

      {/* Product Type */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">Product Type</h3>
        <div className="space-y-3">
          {availableBadges.map(badge => (
            <div key={badge} className="flex items-center space-x-2">
              <Checkbox
                id={`badge-${badge}`}
                checked={selectedBadges.includes(badge)}
                onCheckedChange={() => handleBadgeToggle(badge)}
              />
              <Label htmlFor={`badge-${badge}`} className="cursor-pointer">
                {badge}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">Customer Rating</h3>
        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="rating-all" />
              <Label htmlFor="rating-all" className="cursor-pointer">All Ratings</Label>
            </div>
            {[4, 3, 2].map(rating => (
              <div key={rating} className="flex items-center space-x-2">
                <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                <Label htmlFor={`rating-${rating}`} className="cursor-pointer">
                  {rating}★ & Above
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Availability */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">Availability</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" defaultChecked />
            <Label htmlFor="in-stock" className="cursor-pointer">
              In Stock <span className="text-gray-500">({filteredProducts.length})</span>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );

  if (!category && slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Category not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-[#2bbef9] hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <BacolaHeader cartCount={cartCount} wishlistCount={wishlistCount} />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-[#2bbef9]">Home</button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{category?.name || 'All Products'}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            {category?.name || 'All Products'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Filters & Sort Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between gap-4">
          {/* Mobile Filter Button */}
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <button className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-[#2bbef9] transition-colors">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge className="bg-red-500 text-white">{activeFiltersCount}</Badge>
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterSidebar isMobile />
              </div>
            </SheetContent>
          </Sheet>

          {/* Sort By */}
          <div className="flex items-center gap-2 flex-1 md:flex-initial justify-end">
            <span className="text-sm text-gray-600 hidden md:inline">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-4">
              <FilterSidebar />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="md:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {filteredProducts.map((product) => (
                  <BacolaProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-[#2bbef9] hover:underline font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav cartCount={cartCount} wishlistCount={wishlistCount} />
    </div>
  );
};

export default CategoryPage;
