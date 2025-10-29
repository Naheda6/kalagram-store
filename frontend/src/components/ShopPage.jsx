import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, List, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

const ShopPage = () => {
  const navigate = useNavigate();
  
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBadges, setSelectedBadges] = useState([]);
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters
  let filteredProducts = products.filter(p => {
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const badgeMatch = selectedBadges.length === 0 || selectedBadges.includes(p.badge);
    const ratingMatch = selectedRating === 'all' || p.rating >= parseInt(selectedRating);
    return priceMatch && categoryMatch && badgeMatch && ratingMatch;
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

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
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
    setSelectedCategories([]);
    setSelectedBadges([]);
    setSelectedRating('all');
  };

  const availableBadges = [...new Set(products.map(p => p.badge).filter(Boolean))];
  const activeFiltersCount = selectedCategories.length + selectedBadges.length + (selectedRating !== 'all' ? 1 : 0);

  // Filter sidebar component
  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="p-4 bg-brand-cream rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Active Filters</h3>
            <button
              onClick={clearFilters}
              className="text-sm text-red-500 hover:text-red-600 font-semibold"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map(cat => (
              <Badge key={cat} variant="secondary" className="pr-1">
                {cat}
                <button onClick={() => handleCategoryToggle(cat)} className="ml-1 hover:bg-gray-300 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selectedBadges.map(badge => (
              <Badge key={badge} variant="secondary" className="pr-1">
                {badge}
                <button onClick={() => handleBadgeToggle(badge)} className="ml-1 hover:bg-gray-300 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selectedRating !== 'all' && (
              <Badge variant="secondary" className="pr-1">
                {selectedRating}★+
                <button onClick={() => setSelectedRating('all')} className="ml-1 hover:bg-gray-300 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Price Range */}
      <div className="p-5 border-2 border-gray-200 rounded-xl bg-white">
        <h3 className="font-display font-bold text-gray-900 mb-4 text-lg">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={2000}
          step={50}
          className="mb-4"
        />
        <div className="flex items-center justify-between text-sm font-semibold">
          <span className="text-brand-brown">₹{priceRange[0]}</span>
          <span className="text-brand-brown">₹{priceRange[1]}</span>
        </div>
      </div>

      {/* Categories */}
      <div className="p-5 border-2 border-gray-200 rounded-xl bg-white">
        <h3 className="font-display font-bold text-gray-900 mb-4 text-lg">Categories</h3>
        <div className="space-y-3">
          {categories.map(category => (
            <div key={category.id} className="flex items-center space-x-3">
              <Checkbox
                id={`cat-${category.id}`}
                checked={selectedCategories.includes(category.name)}
                onCheckedChange={() => handleCategoryToggle(category.name)}
              />
              <Label htmlFor={`cat-${category.id}`} className="cursor-pointer flex-1 flex items-center justify-between">
                <span className="font-medium">{category.name}</span>
                <span className="text-xs text-gray-500">({category.itemCount})</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Product Type */}
      <div className="p-5 border-2 border-gray-200 rounded-xl bg-white">
        <h3 className="font-display font-bold text-gray-900 mb-4 text-lg">Product Type</h3>
        <div className="space-y-3">
          {availableBadges.map(badge => (
            <div key={badge} className="flex items-center space-x-3">
              <Checkbox
                id={`badge-${badge}`}
                checked={selectedBadges.includes(badge)}
                onCheckedChange={() => handleBadgeToggle(badge)}
              />
              <Label htmlFor={`badge-${badge}`} className="cursor-pointer font-medium">
                {badge}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="p-5 border-2 border-gray-200 rounded-xl bg-white">
        <h3 className="font-display font-bold text-gray-900 mb-4 text-lg">Customer Rating</h3>
        <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="all" id="rating-all" />
              <Label htmlFor="rating-all" className="cursor-pointer font-medium">All Ratings</Label>
            </div>
            {[4, 3, 2].map(rating => (
              <div key={rating} className="flex items-center space-x-3">
                <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                <Label htmlFor={`rating-${rating}`} className="cursor-pointer font-medium">
                  {rating}★ & Above
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <BacolaHeader cartCount={cartCount} wishlistCount={wishlistCount} />
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-brand-brown to-brand-brown-dark text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Shop All Products
          </h1>
          <p className="text-sm md:text-base text-brand-cream">
            Explore our complete collection of natural and organic products
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Controls Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center justify-between gap-4 flex-wrap">
          {/* Left: Results & Mobile Filter */}
          <div className="flex items-center gap-4">
            <p className="text-gray-700 font-semibold">
              {filteredProducts.length} Products
            </p>

            {/* Mobile Filter Button */}
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-2 bg-brand-brown text-white">{activeFiltersCount}</Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right: View Toggle & Sort */}
          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="hidden md:flex items-center border-2 border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-brand-brown text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-brand-brown text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Products Grid/List */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6'
                  : 'space-y-4'
              }>
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
              <div className="text-center py-20">
                <p className="text-2xl font-semibold text-gray-600 mb-4">No products found</p>
                <Button
                  onClick={clearFilters}
                  className="bg-brand-brown hover:bg-brand-brown-dark text-white"
                >
                  Clear all filters
                </Button>
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

export default ShopPage;
