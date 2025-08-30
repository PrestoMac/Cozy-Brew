import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission (integrate with Supabase later)
    toast({ title: 'Message Sent!', description: 'Thank you for reaching out. We\'ll get back to you soon.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="bg-white shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Hours of Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-amber-700 space-y-2">
                  <li>Monday - Friday: 7:00 AM - 8:00 PM</li>
                  <li>Saturday: 8:00 AM - 9:00 PM</li>
                  <li>Sunday: 9:00 AM - 6:00 PM</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 mb-4">123 Coffee Street, Brewtown, CA 90210</p>
                {/* Placeholder for embedded map (e.g., Google Maps iframe) */}
                <div className="bg-gray-200 h-64 flex items-center justify-center text-amber-700">
                  [Embedded Map Placeholder - Replace with actual map embed]
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;