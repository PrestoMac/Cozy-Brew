import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

const events = [
  {
    title: 'Coffee Tasting Workshop',
    date: 'October 15, 2023',
    time: '2:00 PM - 4:00 PM',
    description: 'Join us for a guided tasting of our premium coffee blends. Learn about origins and brewing techniques.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Workshop',
  },
  {
    title: 'Live Music Night',
    date: 'October 20, 2023',
    time: '7:00 PM - 9:00 PM',
    description: 'Enjoy acoustic music while sipping your favorite brew. Local artists perform every Thursday.',
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Entertainment',
  },
  {
    title: 'Loyalty Member Special',
    date: 'Ongoing',
    time: 'All Day',
    description: 'Earn double points on all purchases this week! Join our loyalty program to get started.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'Promotion',
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 text-center mb-8">Events & Specials</h1>
        <p className="text-lg text-amber-700 text-center mb-12">
          Stay updated with our latest events, workshops, and special promotions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardTitle className="text-xl text-amber-900">{event.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">{event.category}</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-amber-700 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-amber-700 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <p className="text-amber-600">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;