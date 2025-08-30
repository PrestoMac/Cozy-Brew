import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { cart } = useCart();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/events', label: 'Events' },
    { to: '/contact', label: 'Contact' },
    ...(user ? [{ to: '/loyalty', label: 'Loyalty' }] : []),
  ];

  return (
    <header className="bg-amber-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-900">
          Cozy Brews
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-amber-800 hover:text-amber-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>
          {user ? (
            <Button onClick={signOut} variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Login
              </Button>
            </Link>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-amber-50">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="text-amber-800 hover:text-amber-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;