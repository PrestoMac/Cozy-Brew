import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Coffee, Users, Award } from 'lucide-react';

const Index = () => {
  const carouselImages = [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section with Carousel */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-amber-900 mb-6">
                Welcome to Cozy Brews
              </h1>
              <p className="text-xl text-amber-700 mb-8 max-w-lg">
                Experience the warmth of our carefully crafted coffees in a cozy, inviting space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link to="/menu">View Menu</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {carouselImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={src}
                        alt={`Coffee shop ${index + 1}`}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Coffee className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-900">500+</h3>
              <p className="text-amber-700">Cups Served Daily</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-900">1000+</h3>
              <p className="text-amber-700">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-900">5</h3>
              <p className="text-amber-700">Years of Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-amber-900">4.9</h3>
              <p className="text-amber-700">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-amber-900 text-center mb-12">
            Today's Specials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Special Latte"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Pumpkin Spice Latte</h3>
                <p className="text-amber-700 mb-4">Our seasonal favorite with real pumpkin and spices.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$5.50</span>
                  <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Avocado Toast"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Avocado Toast Special</h3>
                <p className="text-amber-700 mb-4">Fresh avocado on sourdough with poached egg.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$9.00</span>
                  <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Croissant"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Butter Croissant</h3>
                <p className="text-amber-700 mb-4">Flaky, buttery pastry baked fresh daily.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">$3.50</span>
                  <Button className="bg-amber-600 hover:bg-amber-700">Order Now</Button>
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