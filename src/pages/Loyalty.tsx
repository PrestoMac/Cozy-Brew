import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/components/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Coffee, Gift, History } from 'lucide-react';

interface LoyaltyData {
  points: number;
  redeemed_points: number;
}

interface Transaction {
  id: string;
  type: 'earned' | 'redeemed';
  points: number;
  description: string;
  created_at: string;
}

const Loyalty = () => {
  const { user } = useAuth();
  const [loyaltyData, setLoyaltyData] = useState<LoyaltyData | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchLoyaltyData();
      fetchTransactions();
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

  const fetchTransactions = async () => {
    // For prototype, we'll simulate transactions. In a real app, you'd have a transactions table.
    const mockTransactions: Transaction[] = [
      { id: '1', type: 'earned', points: 10, description: 'Purchased Espresso', created_at: '2023-10-01' },
      { id: '2', type: 'earned', points: 15, description: 'Purchased Latte', created_at: '2023-10-05' },
      { id: '3', type: 'redeemed', points: 100, description: 'Redeemed for Free Coffee', created_at: '2023-10-10' },
    ];
    setTransactions(mockTransactions);
  };

  const earnPoints = async (pointsToEarn: number, description: string) => {
    if (!loyaltyData) return;

    const { error } = await supabase
      .from('loyalty_points')
      .update({
        points: loyaltyData.points + pointsToEarn,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user?.id);

    if (error) {
      toast({ title: 'Error', description: 'Failed to earn points.' });
    } else {
      toast({ title: 'Success', description: `Earned ${pointsToEarn} points for ${description}!` });
      fetchLoyaltyData();
      // Add to transactions (in real app, insert into transactions table)
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        type: 'earned',
        points: pointsToEarn,
        description,
        created_at: new Date().toISOString(),
      };
      setTransactions([newTransaction, ...transactions]);
    }
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
      // Add to transactions
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        type: 'redeemed',
        points: pointsToRedeem,
        description: 'Redeemed for Free Coffee',
        created_at: new Date().toISOString(),
      };
      setTransactions([newTransaction, ...transactions]);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 flex items-center">
                <Coffee className="mr-2" />
                Points Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="text-lg font-semibold text-amber-900 mb-4">
                {loyaltyData?.points || 0} Points
              </Badge>
              <p className="text-amber-700 mb-4">Earn 1 point per $1 spent. Redeem 100 points for a free coffee!</p>
              <div className="space-y-2">
                <Button onClick={() => earnPoints(10, 'Purchased Espresso')} className="w-full bg-amber-600 hover:bg-amber-700">
                  Buy Espresso (+10 points)
                </Button>
                <Button onClick={() => earnPoints(15, 'Purchased Latte')} className="w-full bg-amber-600 hover:bg-amber-700">
                  Buy Latte (+15 points)
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 flex items-center">
                <Gift className="mr-2" />
                Redeem Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => redeemPoints(100)}
                disabled={(loyaltyData?.points || 0) < 100}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white mb-4"
              >
                Redeem 100 Points for Free Coffee
              </Button>
              <p className="text-amber-700">Total Redeemed: {loyaltyData?.redeemed_points || 0} Points</p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-900 flex items-center">
              <History className="mr-2" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            {transactions.length === 0 ? (
              <p className="text-amber-700">No transactions yet.</p>
            ) : (
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="font-semibold text-amber-900">{transaction.description}</p>
                      <p className="text-sm text-amber-600">{new Date(transaction.created_at).toLocaleDateString()}</p>
                    </div>
                    <Badge variant={transaction.type === 'earned' ? 'default' : 'secondary'}>
                      {transaction.type === 'earned' ? '+' : '-'}{transaction.points} points
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Loyalty;