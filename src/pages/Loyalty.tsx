import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/components/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface LoyaltyData {
  points: number;
  redeemed_points: number;
}

const Loyalty = () => {
  const { user } = useAuth();
  const [loyaltyData, setLoyaltyData] = useState<LoyaltyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchLoyaltyData();
    }
  }, [user]);

  const fetchLoyaltyData = async () => {
    const { data, error } = await supabase
      .from('loyalty_points')
      .select('points, redeemed_points')
      .eq('user_id', user?.id)
      .single();

    if (error) {
      toast({ title: 'Error', description: 'Failed to load loyalty data.' });
    } else {
      setLoyaltyData(data);
    }
    setLoading(false);
  };

  const redeemPoints = async (pointsToRedeem: number) => {
    if (!loyaltyData || loyaltyData.points < pointsToRedeem) {
      toast({ title: 'Error', description: 'Not enough points to redeem.' });
      return;
    }

    const { error } = await supabase
      .from('loyalty_points')
      .update({
        points: loyaltyData.points - pointsToRedeem,
        redeemed_points: loyaltyData.redeemed_points + pointsToRedeem,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user?.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to redeem points.' });
    } else {
      toast({ title: 'Success', description: `Redeemed ${pointsToRedeem} points for a free coffee!` });
      fetchLoyaltyData();
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <p className="text-amber-900">Please log in to view your loyalty rewards.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <p className="text-amber-900">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 text-center mb-8">Your Loyalty Rewards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">Points Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="text-lg font-semibold text-amber-900">
                {loyaltyData?.points || 0} Points
              </Badge>
              <p className="text-amber-700 mt-4">Earn 1 point per $1 spent. Redeem 100 points for a free coffee!</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">Redeem Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => redeemPoints(100)}
                disabled={(loyaltyData?.points || 0) < 100}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              >
                Redeem 100 Points for Free Coffee
              </Button>
              <p className="text-amber-700 mt-4">Total Redeemed: {loyaltyData?.redeemed_points || 0} Points</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;