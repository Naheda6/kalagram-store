import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-emerald-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-white/90 mb-6">
              Get the latest updates on new products and upcoming sales
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white border-0"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white h-12 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Kalagura Gampa</h3>
              <p className="text-sm mb-4">
                Your trusted source for authentic, natural, and organic products from Indian villages.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-emerald-500" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-emerald-500" />
                  <span>support@kalaguragampa.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-emerald-500" />
                  <span>Telangana, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Personal & Hair Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Cold Pressed Oils
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Indian Rice & Flours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Seeds & Plants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Pooja Items
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-white font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-500 transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2025 Kalagura Gampa. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-emerald-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-emerald-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-emerald-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-emerald-500 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;