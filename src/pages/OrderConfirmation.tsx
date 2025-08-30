import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-2xl mb-4">Order Confirmed!</CardTitle>
            <p className="text-amber-700 mb-6">
              Thank you for your order. We'll start preparing your delicious items right away.
            </p>
            <p className="text-sm text-amber-600 mb-6">
              You can track your order status in your account or contact us if you have any questions.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                <Link to="/menu">Order More</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmation;