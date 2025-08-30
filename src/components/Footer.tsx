import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter subscription (integrate with Supabase later)
    toast({ title: 'Subscribed!', description: 'Thanks for joining our newsletter.' });
    setEmail('');
  };

  return (
    <footer className="bg-amber-900 text-amber-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Cozy Brews</h3>
          <p className="text-amber-200">
            Your cozy corner for the finest coffee and warm vibes.
          </p>
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
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
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
      </div>
      <div className="mt-8 text-center text-amber-300">
        <p>&copy; 2023 Cozy Brews. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;