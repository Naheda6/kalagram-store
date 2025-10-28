// Mock data for Kalagura Gampa products

export const categories = [
  {
    id: 1,
    name: 'Personal & Hair Care',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=300&fit=crop',
    itemCount: 45,
    slug: 'personal-hair-care'
  },
  {
    id: 2,
    name: 'Seeds & Plants',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
    itemCount: 28,
    slug: 'seeds-plants'
  },
  {
    id: 3,
    name: 'Indian Rice & Flours',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
    itemCount: 35,
    slug: 'rice-flours'
  },
  {
    id: 4,
    name: 'Cold Pressed Oils',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop',
    itemCount: 22,
    slug: 'cold-pressed-oils'
  },
  {
    id: 5,
    name: 'Herbs & Extracts',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
    itemCount: 18,
    slug: 'herbs-extracts'
  },
  {
    id: 6,
    name: 'Pickles & Powders',
    image: 'https://images.unsplash.com/photo-1599909216003-64f8150ad2f9?w=400&h=300&fit=crop',
    itemCount: 30,
    slug: 'pickles-powders'
  },
  {
    id: 7,
    name: 'Indian Snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    itemCount: 25,
    slug: 'indian-snacks'
  },
  {
    id: 8,
    name: 'Pooja Items',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop',
    itemCount: 40,
    slug: 'pooja-items'
  }
];

export const products = [
  {
    id: 1,
    name: 'Henna & Indigo Powder Combo Pack',
    category: 'Personal & Hair Care',
    price: 480,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 38,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/H/e/Hennaindigo-3_2nd.jpg',
    images: [
      'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/H/e/Hennaindigo-3_2nd.jpg',
      'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/H/e/Hennaindigo-2_2nd.jpg'
    ],
    stock: 'In Stock',
    badge: 'Best Seller',
    weight: '250gm + 250gm',
    description: 'Premium quality natural henna and indigo powder combo for natural hair coloring. 100% pure and chemical-free. Perfect for achieving dark brown to black hair color naturally.',
    features: [
      '100% Natural & Chemical-Free',
      'No Ammonia, No PPD',
      'Suitable for all hair types',
      'Long-lasting color',
      'Nourishes hair & scalp'
    ],
    specifications: {
      'Brand': 'Kalagura Gampa',
      'Item Form': 'Powder',
      'Net Weight': '500 Grams (250gm each)',
      'Ingredients': 'Pure Henna Leaves, Pure Indigo Leaves',
      'Shelf Life': '24 Months',
      'Country of Origin': 'India'
    },
    howToUse: 'Mix henna powder with warm water to make a paste. Apply to hair and leave for 2-3 hours. Rinse thoroughly. Next day, mix indigo powder with warm water and apply. Leave for 1-2 hours and rinse.',
    sku: 'KG-HI-500'
  },
  {
    id: 2,
    name: 'Ground Nut Oil (Peanut Oil)',
    category: 'Cold Pressed Oils',
    price: 396,
    originalPrice: 549,
    discount: 28,
    rating: 5.0,
    reviews: 15,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/g/r/ground-nut-oil-2.jpg',
    images: [
      'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/g/r/ground-nut-oil-2.jpg',
      'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/g/r/ground-nut-oil-1.jpg'
    ],
    stock: 'In Stock',
    badge: 'Organic',
    weight: '1 Liter',
    isHotDeal: true,
    dealEndsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
    dealProgress: 65, // 65% sold
    description: 'Pure cold-pressed groundnut oil extracted from premium quality peanuts. Rich in Vitamin E and monounsaturated fats. Ideal for deep frying, cooking, and salad dressings.',
    features: [
      'Cold Pressed - No Heat Treatment',
      'Rich in Vitamin E & Antioxidants',
      'High Smoke Point - Perfect for Frying',
      'No Preservatives or Additives',
      'Traditional Wooden Press Method'
    ],
    specifications: {
      'Brand': 'Kalagura Gampa',
      'Type': 'Cold Pressed',
      'Volume': '1 Liter',
      'Ingredients': '100% Pure Groundnuts',
      'Shelf Life': '6 Months',
      'Storage': 'Store in cool, dry place',
      'Country of Origin': 'India'
    },
    howToUse: 'Use for everyday cooking, deep frying, sautéing, or as a salad dressing. Store in a cool, dry place away from direct sunlight.',
    sku: 'KG-GO-1L',
    isTrending: true
  },
  {
    id: 3,
    name: 'Indigo Powder Natural Hair Dye',
    category: 'Personal & Hair Care',
    price: 630,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 12,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/i/n/indigo-1-kg-3_2nd.jpg',
    stock: 'In Stock',
    badge: null,
    weight: '500 Grams'
  },
  {
    id: 4,
    name: 'Henna Powder (Mehandi)',
    category: 'Personal & Hair Care',
    price: 330,
    originalPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: 10,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/H/e/Henna-3_2nd.jpg',
    stock: 'In Stock',
    badge: 'Recommended',
    weight: '500 Grams'
  },
  {
    id: 5,
    name: 'Kottakkal Kunkumadi Tailam',
    category: 'Personal & Hair Care',
    price: 505,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviews: 21,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/K/u/Kunkumadi-Tailam-3_2nd.jpg',
    images: [
      'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/K/u/Kunkumadi-Tailam-3_2nd.jpg'
    ],
    stock: 'In Stock',
    badge: 'Best Seller',
    weight: '10ml',
    isTrending: true,
    description: 'Authentic Ayurvedic Kunkumadi Tailam from Kottakkal Arya Vaidya Sala. A precious blend of saffron and rare herbs for radiant, glowing skin. Reduces blemishes, dark circles, and signs of aging.',
    features: [
      'Contains Pure Saffron (Kumkuma)',
      'Reduces Dark Circles & Blemishes',
      'Anti-Aging Properties',
      'Improves Skin Complexion',
      'Authentic Ayurvedic Formula'
    ],
    specifications: {
      'Brand': 'Kottakkal Arya Vaidya Sala',
      'Type': 'Face Oil',
      'Volume': '10 ml',
      'Key Ingredients': 'Saffron, Sandalwood, Turmeric, Vetiver',
      'Shelf Life': '36 Months',
      'Country of Origin': 'India'
    },
    howToUse: 'Apply 2-3 drops on clean face at night. Gently massage in circular motions. Can be used daily for best results.',
    sku: 'KK-KT-10ML'
  },
  {
    id: 6,
    name: 'Henna Powder 1 Kg Pack',
    category: 'Personal & Hair Care',
    price: 660,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviews: 4,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/h/e/henna-3_2nd.jpg',
    stock: 'In Stock',
    badge: null,
    weight: '1 Kg'
  },
  {
    id: 7,
    name: 'Chandamama Sunni Pindi (Bath Powder)',
    category: 'Personal & Hair Care',
    price: 176,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 11,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/C/h/Chandamama-Sunnipindi-2_2nd.jpg',
    stock: 'In Stock',
    badge: 'Organic',
    weight: '250 Grams'
  },
  {
    id: 8,
    name: 'Pure Natural Honey (Raw, Unfiltered)',
    category: 'Herbs & Extracts',
    price: 486,
    originalPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: 23,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/P/u/Pure-Naturral-Honey-3.jpg',
    stock: 'In Stock',
    badge: 'Best Seller',
    weight: '1000 Grams'
  },
  {
    id: 9,
    name: 'White Sesame Oil (Nuvvula Nune)',
    category: 'Cold Pressed Oils',
    price: 746,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviews: 9,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/W/h/White-Sesame-Oil-1.jpg',
    stock: 'In Stock',
    badge: 'Organic',
    weight: '1 Liter'
  },
  {
    id: 10,
    name: 'Cold Pressed Safflower Oil',
    category: 'Cold Pressed Oils',
    price: 546,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviews: 5,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/s/a/safflower-oil-2.jpg',
    stock: 'In Stock',
    badge: null,
    weight: '1 Liter'
  },
  {
    id: 11,
    name: 'Turtle Vine Plant',
    category: 'Seeds & Plants',
    price: 150,
    originalPrice: null,
    discount: 0,
    rating: 4.6,
    reviews: 17,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/t/r/trutle_2nd.jpg',
    stock: 'In Stock',
    badge: null,
    weight: '1 Plant'
  },
  {
    id: 12,
    name: 'Telagapindi (White Sesame Powder)',
    category: 'Pickles & Powders',
    price: 250,
    originalPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: 9,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/T/e/Telagapindi-900-gm_2nd.jpg',
    stock: 'In Stock',
    badge: null,
    weight: '1000 Grams'
  },
  {
    id: 13,
    name: 'Kullakar Rice (Diabetic Friendly)',
    category: 'Indian Rice & Flours',
    price: 246,
    originalPrice: null,
    discount: 0,
    rating: 4.5,
    reviews: 8,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/k/u/kulkar_rice_4_.jpg',
    stock: 'In Stock',
    badge: 'Low GI',
    weight: '1 KG'
  },
  {
    id: 14,
    name: 'Desi Basmati Rice (Hand Pounded)',
    category: 'Indian Rice & Flours',
    price: 255,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviews: 4,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/B/a/Basmathi-Rice-3.jpg',
    stock: 'In Stock',
    badge: 'Organic',
    weight: '1000 Grams'
  },
  {
    id: 15,
    name: 'Indigo Powder 1 Kg',
    category: 'Personal & Hair Care',
    price: 1260,
    originalPrice: null,
    discount: 0,
    rating: 5.0,
    reviews: 4,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/I/n/Indigo-1-kg-3_2nd.jpg',
    stock: 'In Stock',
    badge: null,
    weight: '1 kg'
  },
  {
    id: 16,
    name: 'Asta Laxmi Vothulu',
    category: 'Pooja Items',
    price: 100,
    originalPrice: null,
    discount: 0,
    rating: 4.0,
    reviews: 2,
    image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/a/s/asta_laskshmi_vattulu_2_.jpg',
    stock: 'In Stock',
    badge: null,
    weight: '5 Pcs'
  }
];

export const heroSlides = [
  {
    id: 1,
    title: 'Organic & Natural Products',
    subtitle: 'Fresh from village farms',
    discount: '30% Off',
    description: 'Only this week. Don\'t miss...',
    priceFrom: '₹99',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&h=500&fit=crop',
    ctaText: 'Shop Now'
  },
  {
    id: 2,
    title: 'Cold Pressed Oils',
    subtitle: 'Pure & Healthy',
    discount: '25% Off',
    description: 'Special offer on all oils',
    priceFrom: '₹396',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&h=500&fit=crop',
    ctaText: 'Shop Now'
  },
  {
    id: 3,
    title: 'Natural Hair Care',
    subtitle: 'Henna & Indigo Powders',
    discount: '20% Off',
    description: 'Chemical-free hair solutions',
    priceFrom: '₹330',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1200&h=500&fit=crop',
    ctaText: 'Shop Now'
  }
];

export const services = [
  {
    id: 1,
    icon: 'Truck',
    title: 'Free Delivery',
    description: 'For all orders over ₹3500'
  },
  {
    id: 2,
    icon: 'ShieldCheck',
    title: 'Safe Payment',
    description: '100% secure payment'
  },
  {
    id: 3,
    icon: 'BadgeCheck',
    title: 'Shop With Confidence',
    description: 'Safe and Secure Environment'
  },
  {
    id: 4,
    icon: 'Headphones',
    title: 'Dedicated Help Center',
    description: 'IST 9:30 AM to 6:00 PM'
  }
];

export const banners = [
  {
    id: 1,
    title: 'Weekend Discount',
    subtitle: 'Cold Pressed Oils',
    discount: '40% OFF',
    description: 'Pure and natural cooking oils',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop',
    ctaText: 'Shop Now'
  },
  {
    id: 2,
    title: 'Special Offer',
    subtitle: 'Organic Hair Care',
    discount: '35% OFF',
    description: 'Natural henna & indigo powders',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop',
    ctaText: 'Shop Now'
  }
];


// Product Reviews Data
export const productReviews = {
  1: [
    {
      id: 1,
      userId: 1,
      userName: 'Priya Sharma',
      userAvatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      date: '2024-03-15',
      verified: true,
      title: 'Excellent quality henna and indigo!',
      comment: 'Best combo pack I have used. Natural color, no chemicals. My hair feels soft and healthy. Highly recommended!',
      helpful: 24
    },
    {
      id: 2,
      userId: 2,
      userName: 'Rajesh Kumar',
      userAvatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      date: '2024-03-10',
      verified: true,
      title: 'Great product',
      comment: 'Pure and natural. Gives beautiful dark brown color. Worth the price.',
      helpful: 18
    }
  ],
  2: [
    {
      id: 3,
      userId: 3,
      userName: 'Anjali Reddy',
      userAvatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      date: '2024-03-18',
      verified: true,
      title: 'Best groundnut oil!',
      comment: 'Cold pressed and pure. The aroma is amazing. Using it for all my cooking needs now.',
      helpful: 31
    }
  ],
  5: [
    {
      id: 4,
      userId: 4,
      userName: 'Sneha Patel',
      userAvatar: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      date: '2024-03-20',
      verified: true,
      title: 'Reduced my dark circles significantly',
      comment: 'Been using for 3 weeks. My dark circles have reduced and skin looks more radiant. Authentic Kottakkal product!',
      helpful: 42
    }
  ]
};

// Mock user data for authentication screens
export const mockUsers = [
  {
    id: 1,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    password: 'demo123', // In real app, this would be hashed
    phone: '+91 98765 43210',
    avatar: 'https://i.pravatar.cc/150?img=1',
    addresses: [
      {
        id: 1,
        type: 'Home',
        name: 'Priya Sharma',
        phone: '+91 98765 43210',
        addressLine1: 'Flat 302, Green Valley Apartments',
        addressLine2: 'Near City Mall, Banjara Hills',
        city: 'Hyderabad',
        state: 'Telangana',
        pincode: '500034',
        isDefault: true
      }
    ],
    orders: [
      {
        id: 'ORD-2024-001',
        date: '2024-03-15',
        status: 'Delivered',
        total: 1250,
        items: 3,
        deliveredDate: '2024-03-18'
      },
      {
        id: 'ORD-2024-002',
        date: '2024-03-20',
        status: 'In Transit',
        total: 896,
        items: 2,
        estimatedDelivery: '2024-03-25'
      }
    ]
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    password: 'demo123',
    phone: '+91 87654 32109',
    avatar: 'https://i.pravatar.cc/150?img=12'
  }
];

// Related products mapping
export const relatedProducts = {
  1: [3, 4, 6, 15], // For Henna & Indigo combo
  2: [9, 10], // For Groundnut Oil
  5: [1, 7], // For Kunkumadi Tailam
};

// People also bought mapping
export const frequentlyBoughtTogether = {
  1: [3, 4], // Henna combo with individual packs
  2: [9, 14], // Groundnut oil with sesame oil and rice
  5: [1, 7], // Kunkumadi with hair care products
};
