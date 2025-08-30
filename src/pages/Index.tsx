import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
    </div>
  );
};

export default Index;