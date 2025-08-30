import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-amber-200 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">
            Welcome to Cozy Brews
          </h1>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Experience the warmth of our carefully crafted coffees in a cozy, inviting space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-amber-900 text-center mb-12">
            Our Ambiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Coffee cups"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">Premium Coffees</h3>
                  <p className="text-amber-700">Savor every sip of our expertly brewed blends.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Cozy interior"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">Cozy Interior</h3>
                  <p className="text-amber-700">Relax in our warm, inviting space.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Ambiance"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">Welcoming Vibes</h3>
                  <p className="text-amber-700">Feel at home with our friendly atmosphere.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-amber-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-amber-700 mb-4">
                  "The best coffee in town! The atmosphere is so cozy and inviting."
                </p>
                <p className="font-semibold text-amber-900">- Sarah M.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-amber-700 mb-4">
                  "Love the loyalty program! I've earned so many free coffees."
                </p>
                <p className="font-semibold text-amber-900">- John D.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-amber-700 mb-4">
                  "The food is amazing too. Highly recommend the avocado toast!"
                </p>
                <p className="font-semibold text-amber-900">- Emily R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;