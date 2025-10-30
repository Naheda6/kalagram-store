import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, 
  ChevronRight, Plus, Minus, Check, Share2, Gift, Clock,
  MapPin
} from 'lucide-react';
import { toast } from 'sonner';
import BacolaHeader from './BacolaHeader';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import BacolaProductCard from './BacolaProductCard';
import { products, productReviews, relatedProducts, frequentlyBoughtTogether } from '../mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-[#6A4A2B] hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const productImages = product.images || [product.image];
  const reviews = productReviews[product.id] || [];
  const relatedProductIds = relatedProducts[product.id] || [];
  const relatedProductsList = products.filter(p => relatedProductIds.includes(p.id));
  const frequentlyBoughtIds = frequentlyBoughtTogether[product.id] || [];
  const frequentlyBoughtList = products.filter(p => frequentlyBoughtIds.includes(p.id));

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity);
    toast.success(`${product.name} added to cart!`, {
      description: `Quantity: ${quantity} - Total: ₹${product.price * quantity}`,
    });
  };

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      setWishlistCount(prev => prev + 1);
      setIsWishlisted(true);
      toast.success(`${product.name} added to wishlist!`);
    } else {
      setWishlistCount(prev => prev - 1);
      setIsWishlisted(false);
      toast.info(`${product.name} removed from wishlist`);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    toast.info('Redirecting to checkout...');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Product link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <BacolaHeader cartCount={cartCount} wishlistCount={wishlistCount} />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          {/* Mobile: Show only category */}
          <div className="flex md:hidden items-center text-sm">
            <span className="text-gray-500">
              {product.category}
            </span>
          </div>
          
          {/* Desktop: Show full breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <button 
              onClick={() => navigate('/')} 
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 whitespace-nowrap"
            >
              Home
            </button>
            <span className="text-gray-400">›</span>
            <button 
              onClick={() => navigate('/')} 
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 truncate max-w-[150px] lg:max-w-[200px]"
            >
              {product.category}
            </button>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500 truncate max-w-[200px] lg:max-w-md">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Product Main Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Images */}
            <div>
              {/* Main Image */}
              <div className="bg-gray-50 rounded-lg p-4 md:p-8 mb-4 relative">
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    {product.badge}
                  </Badge>
                )}
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>
              
              {/* Thumbnail Images */}
              {productImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg p-2 border-2 transition-colors ${
                        selectedImage === idx ? 'border-[#2bbef9]' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              
              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900">{product.rating}</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                {product.stock === 'In Stock' && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <Check className="h-3 w-3 mr-1" />
                    In Stock
                  </Badge>
                )}
              </div>

              {/* SKU */}
              {product.sku && (
                <p className="text-sm text-gray-500 mb-4">SKU: {product.sku}</p>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                )}
                <span className="text-4xl font-black text-[#6A4A2B]">₹{product.price}</span>
                {product.discount > 0 && (
                  <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                    {product.discount}% OFF
                  </Badge>
                )}
              </div>

              {/* Short Description */}
              {product.description && (
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
              )}

              {/* Weight/Size */}
              {product.weight && (
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Size:</p>
                  <Badge variant="outline" className="text-base px-4 py-2">{product.weight}</Badge>
                </div>
              )}

              <Separator className="my-6" />

              {/* Quantity Selector */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Quantity:</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-2 font-bold text-lg">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    Subtotal: <span className="font-bold text-gray-900">₹{product.price * quantity}</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
<div className="flex gap-3 mb-6">
  <button
    onClick={handleAddToCart}
    className="flex-1 bg-[#fdc040] hover:bg-[#e5ad3a] text-gray-900 font-bold h-12 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
  >
    <ShoppingCart className="h-5 w-5" />
    <span className="sm:hidden">Add</span>
    <span className="hidden sm:inline">Add to Cart</span>
  </button>
  <button
    onClick={handleAddToWishlist}
    className={`w-12 h-12 border-2 rounded-lg transition-colors flex items-center justify-center flex-shrink-0 ${
      isWishlisted 
        ? 'bg-red-50 border-red-500 text-red-500' 
        : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
    }`}
  >
    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
  </button>
  <button
    onClick={handleShare}
    className="w-12 h-12 border-2 border-gray-300 text-gray-600 hover:border-[#2bbef9] hover:text-[#6A4A2B] rounded-lg transition-colors flex items-center justify-center flex-shrink-0"
  >
    <Share2 className="h-5 w-5" />
  </button>
</div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-[#233a95] hover:bg-[#1c2e75] text-white font-bold py-4 px-6 rounded-lg transition-colors mb-6"
              >
                Buy Now
              </button>

              {/* Trust Badges (Warm Brown Theme) */}
<div className="grid grid-cols-3 gap-4 py-6 border-t border-b">
  <div className="text-center">
    <Truck className="h-6 w-6 text-[#7B4B24] mx-auto mb-2" />
    <p className="text-xs font-semibold text-gray-800">Free Delivery</p>
    <p className="text-xs text-gray-500">Orders over ₹3500</p>
  </div>
  <div className="text-center">
    <RotateCcw className="h-6 w-6 text-[#7B4B24] mx-auto mb-2" />
    <p className="text-xs font-semibold text-gray-800">Easy Returns</p>
    <p className="text-xs text-gray-500">7 Days Return</p>
  </div>
  <div className="text-center">
    <Shield className="h-6 w-6 text-[#7B4B24] mx-auto mb-2" />
    <p className="text-xs font-semibold text-gray-800">100% Secure</p>
    <p className="text-xs text-gray-500">Safe Payment</p>
  </div>
</div>
              {/* Delivery Info */}
<div className="mt-6 p-4 bg-blue-50 rounded-lg">
  <div className="flex items-start gap-3 mb-3">
    <MapPin className="h-5 w-5 text-[#6A4A2B] flex-shrink-0 mt-0.5" />
    <div className="flex-1">
      <p className="font-semibold text-gray-900 mb-1">Delivery Options</p>
      <p className="text-sm text-gray-700">Enter pincode to check delivery availability</p>
    </div>
  </div>
  <div className="flex flex-col sm:flex-row gap-2">
    <input
      type="text"
      placeholder="Enter pincode"
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbef9] text-sm sm:text-base"
      maxLength="6"
    />
    <button className="w-full sm:w-auto px-6 py-2 bg-[#2bbef9] text-white font-semibold rounded-lg hover:bg-[#1da5db] transition-colors whitespace-nowrap">
      Check
    </button>
  </div>
</div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs/Accordion */}
<div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-6">
  <Tabs defaultValue="description" className="w-full">
    <TabsList className="w-full flex flex-wrap gap-1 h-auto bg-transparent p-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-2 md:p-1 mb-6">
      <TabsTrigger value="description" className="flex-1 min-w-[100px] data-[state=active]:bg-white data-[state=active]:shadow-sm">Description</TabsTrigger>
      <TabsTrigger value="specifications" className="flex-1 min-w-[100px] data-[state=active]:bg-white data-[state=active]:shadow-sm">Specifications</TabsTrigger>
      <TabsTrigger value="reviews" className="flex-1 min-w-[100px] data-[state=active]:bg-white data-[state=active]:shadow-sm">Reviews ({reviews.length})</TabsTrigger>
      {product.howToUse && <TabsTrigger value="how-to-use" className="flex-1 min-w-[100px] md:block data-[state=active]:bg-white data-[state=active]:shadow-sm">How to Use</TabsTrigger>}
    </TabsList>

    <TabsContent value="description" className="mt-0">
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
        {product.features && (
          <>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </TabsContent>

    <TabsContent value="specifications" className="mt-0">
      {product.specifications ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex flex-col sm:flex-row py-3 border-b">
              <span className="font-semibold text-gray-700 sm:w-1/2 mb-1 sm:mb-0">{key}:</span>
              <span className="text-gray-900 sm:w-1/2">{value}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No specifications available</p>
      )}
    </TabsContent>

    <TabsContent value="reviews" className="mt-0">
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {/* Overall Rating Summary */}
          <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-5xl font-black text-gray-900 mb-2">{product.rating}</div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600">{product.reviews} Reviews</p>
            </div>
          </div>

          {/* Individual Reviews */}
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-b-0">
              <div className="flex items-start gap-4">
                <img
                  src={review.userAvatar}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">{review.userName}</span>
                    {review.verified && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  <button className="text-sm text-gray-600 hover:text-[#6A4A2B]">
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center py-8">No reviews yet. Be the first to review this product!</p>
      )}
    </TabsContent>

    {product.howToUse && (
      <TabsContent value="how-to-use" className="mt-0">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">{product.howToUse}</p>
        </div>
      </TabsContent>
    )}
  </Tabs>
</div>

        {/* Frequently Bought Together */}
        {frequentlyBoughtList.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Bought Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {frequentlyBoughtList.map((p) => (
                <BacolaProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={(prod) => {
                    setCartCount(prev => prev + 1);
                    toast.success(`${prod.name} added to cart!`);
                  }}
                  onAddToWishlist={(prod) => {
                    setWishlistCount(prev => prev + 1);
                    toast.success(`${prod.name} added to wishlist!`);
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProductsList.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProductsList.map((p) => (
                <BacolaProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={(prod) => {
                    setCartCount(prev => prev + 1);
                    toast.success(`${prod.name} added to cart!`);
                  }}
                  onAddToWishlist={(prod) => {
                    setWishlistCount(prev => prev + 1);
                    toast.success(`${prod.name} added to wishlist!`);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Sticky Add to Cart for Mobile */}
      <div className="md:hidden fixed bottom-16 left-0 right-0 bg-white border-t shadow-lg p-4 z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-xl font-bold text-gray-900">₹{product.price * quantity}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#2bbef9] hover:bg-[#1da5db] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
      <MobileBottomNav cartCount={cartCount} wishlistCount={wishlistCount} />
    </div>
  );
};

export default ProductDetail;
