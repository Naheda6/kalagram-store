import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, MapPin, CreditCard, Package, ChevronRight, Home, Building2 } from 'lucide-react';
import { toast } from 'sonner';
import BacolaHeader from './BacolaHeader';
import Footer from './Footer';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    addressType: 'home'
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');

  // Mock cart data
  const cartItems = [
    {
      id: 2,
      name: 'Ground Nut Oil (Peanut Oil)',
      image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/g/r/ground-nut-oil-2.jpg',
      price: 396,
      quantity: 2,
      weight: '1 Liter'
    },
    {
      id: 1,
      name: 'Henna & Indigo Powder Combo Pack',
      image: 'https://kalaguragampa.com/media/catalog/product/cache/631a6e8f8ba77a1f8e669d028c5146f3/H/e/Hennaindigo-3_2nd.jpg',
      price: 480,
      quantity: 1,
      weight: '250gm + 250gm'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 3500 ? 0 : 50;
  const total = subtotal + shipping;

  const steps = [
    { number: 1, title: 'Shipping', icon: MapPin },
    { number: 2, title: 'Payment', icon: CreditCard },
    { number: 3, title: 'Review', icon: Package }
  ];

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    if (!shippingAddress.name || !shippingAddress.phone || !shippingAddress.addressLine1 || !shippingAddress.city || !shippingAddress.state || !shippingAddress.pincode) {
      toast.error('Please fill all required fields');
      return;
    }
    setCurrentStep(2);
  };

  const handlePaymentSubmit = () => {
    setCurrentStep(3);
  };

  const handlePlaceOrder = () => {
    toast.success('Order placed successfully!', {
      description: 'You will receive a confirmation email shortly.'
    });
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BacolaHeader cartCount={cartItems.length} wishlistCount={0} />

      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      currentStep >= step.number
                        ? 'bg-brand-brown text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </div>
                  <span className={`text-sm mt-2 font-medium ${
                    currentStep >= step.number ? 'text-brand-brown' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-24 h-1 mx-4 mt-[-20px] transition-colors ${
                    currentStep > step.number ? 'bg-brand-brown' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Address */}
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Shipping Address
                </h2>
                
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={shippingAddress.name}
                        onChange={(e) => setShippingAddress({...shippingAddress, name: e.target.value})}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingAddress.phone}
                        onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address1">Address Line 1 *</Label>
                    <Input
                      id="address1"
                      value={shippingAddress.addressLine1}
                      onChange={(e) => setShippingAddress({...shippingAddress, addressLine1: e.target.value})}
                      placeholder="House no, Street name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address2">Address Line 2</Label>
                    <Input
                      id="address2"
                      value={shippingAddress.addressLine2}
                      onChange={(e) => setShippingAddress({...shippingAddress, addressLine2: e.target.value})}
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                        placeholder="Mumbai"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={shippingAddress.state}
                        onChange={(e) => setShippingAddress({...shippingAddress, state: e.target.value})}
                        placeholder="Maharashtra"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={shippingAddress.pincode}
                        onChange={(e) => setShippingAddress({...shippingAddress, pincode: e.target.value})}
                        placeholder="400001"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Address Type</Label>
                    <RadioGroup value={shippingAddress.addressType} onValueChange={(value) => setShippingAddress({...shippingAddress, addressType: value})}>
                      <div className="flex gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="home" id="home" />
                          <Label htmlFor="home" className="cursor-pointer flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            Home
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="work" id="work" />
                          <Label htmlFor="work" className="cursor-pointer flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            Work
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full bg-brand-brown hover:bg-brand-brown-dark text-white">
                    Continue to Payment
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Payment Method
                </h2>
                
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-brand-brown transition-colors">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="cursor-pointer flex-1">
                          <div className="font-semibold">Cash on Delivery</div>
                          <div className="text-sm text-gray-600">Pay when you receive</div>
                        </Label>
                      </div>
                    </div>

                    <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-brand-brown transition-colors">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="cursor-pointer flex-1">
                          <div className="font-semibold">UPI Payment</div>
                          <div className="text-sm text-gray-600">PhonePe, GPay, Paytm (Mockup)</div>
                        </Label>
                      </div>
                    </div>

                    <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-brand-brown transition-colors">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="cursor-pointer flex-1">
                          <div className="font-semibold">Credit/Debit Card</div>
                          <div className="text-sm text-gray-600">Visa, Mastercard, RuPay (Mockup)</div>
                        </Label>
                      </div>
                    </div>
                  </div>
                </RadioGroup>

                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handlePaymentSubmit}
                    className="flex-1 bg-brand-brown hover:bg-brand-brown-dark text-white"
                  >
                    Continue to Review
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Review Order */}
            {currentStep === 3 && (
              <div className="space-y-4">
                {/* Shipping Address Review */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Shipping Address</h3>
                    <Button
                      onClick={() => setCurrentStep(1)}
                      variant="link"
                      className="text-brand-brown"
                    >
                      Edit
                    </Button>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold">{shippingAddress.name}</p>
                    <p>{shippingAddress.phone}</p>
                    <p>{shippingAddress.addressLine1}</p>
                    {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
                    <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pincode}</p>
                  </div>
                </div>

                {/* Payment Method Review */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Payment Method</h3>
                    <Button
                      onClick={() => setCurrentStep(2)}
                      variant="link"
                      className="text-brand-brown"
                    >
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">
                    {paymentMethod === 'cod' && 'Cash on Delivery'}
                    {paymentMethod === 'upi' && 'UPI Payment'}
                    {paymentMethod === 'card' && 'Credit/Debit Card'}
                  </p>
                </div>

                {/* Order Items */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Order Items</h3>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain bg-gray-50 rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.weight} × {item.quantity}</p>
                        </div>
                        <p className="font-bold text-gray-900">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handlePlaceOrder}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Order Summary
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                
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
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-display font-bold text-brand-brown">
                  ₹{total}
                </span>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>100% Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Easy Returns within 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
