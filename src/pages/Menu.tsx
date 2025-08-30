import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', description: 'Rich, bold shot of pure coffee essence.', price: '$3.50', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
      { name: 'Latte', description: 'Smooth espresso with steamed milk and a light foam.', price: '$4.50', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
      { name: 'Cappuccino', description: 'Espresso topped with equal parts steamed milk and foam.', price: '$4.00', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
      { name: 'Americano', description: 'Espresso diluted with hot water for a milder taste.', price: '$3.00', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    ],
  },
  {
    category: 'Food',
    items: [
      { name: 'Croissant', description: 'Buttery, flaky pastry perfect with your coffee.', price: '$3.00', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
      { name: 'Avocado Toast', description: 'Fresh avocado on toasted sourdough with herbs.', price: '$8.00', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
      { name: 'Blueberry Muffin', description: 'Moist muffin bursting with blueberries.', price: '$4.50', image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
      { name: 'Quiche Lorraine', description: 'Savory pie with bacon, cheese, and eggs.', price: '$7.50', image: 'https://images.unsplash.com/photo-1541599468348-e96984315621?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 text-center mb-8">Our Menu</h1>
        <p className="text-lg text-amber-700 text-center mb-12">
          Indulge in our carefully crafted selection of coffees and bites, made with the finest ingredients.
        </p>
        {menuItems.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <Card key={item.name} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                    <CardTitle className="text-xl text-amber-900">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 mb-4">{item.description}</p>
                    <Badge variant="secondary" className="text-lg font-semibold text-amber-900">
                      {item.price}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;