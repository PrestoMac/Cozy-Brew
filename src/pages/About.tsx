import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & Barista', bio: 'Passionate about coffee since 2010.', image: '/placeholder.svg' },
  { name: 'Bob Smith', role: 'Head Chef', bio: 'Crafting delicious food pairings for our brews.', image: '/placeholder.svg' },
  { name: 'Charlie Lee', role: 'Customer Service Lead', bio: 'Ensuring every visit is warm and welcoming.', image: '/placeholder.svg' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 text-center mb-8">About Us</h1>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our History</h2>
          <p className="text-amber-700 mb-6">
            Founded in 2015, our coffee shop started as a small dream in a cozy corner of the city. We've grown into a beloved community hub, sourcing the finest beans and creating a space where warmth and quality meet.
          </p>
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
          <p className="text-amber-700">
            To provide an inviting atmosphere where every cup of coffee tells a story, and every customer feels like family. We're committed to sustainability, fair trade, and exceptional experiences.
          </p>
        </div>
        <h2 className="text-2xl font-semibold text-amber-800 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-amber-900">{member.name}</CardTitle>
                <p className="text-amber-700">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-amber-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;