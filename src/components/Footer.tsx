import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Subscribed!', description: 'Thanks for joining our newsletter.' });
    setEmail('');
  };

  return (
    <footer className="bg-amber-900 text-amber-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Cozy Brews</h3>
          <p className="text-amber-200 mb-4">
            Your cozy corner for the finest coffee and warm vibes.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-300 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-amber-300 transition-colors">Menu</Link></li>
            <li><Link to="/about" className="hover:text-amber-300 transition-colors">About</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-300 transition-colors">Gallery</Link></li>
            <li><Link to="/events" className="hover:text-amber-300 transition-colors">Events</Link></li>
            <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>123 Coffee Street, Brewtown, CA 90210</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>hello@cozybrews.com</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <Label htmlFor="newsletter-email">Stay updated with our latest brews</Label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-amber-800 border-amber-700 text-amber-100"
              required
            />
            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-amber-300">
        <p>&copy; 2023 Cozy Brews. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;