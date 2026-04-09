import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, CreditCard, Smartphone, Globe, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const tiers = [
  { id: 'meal', amount: 10, label: 'Provide a Meal', description: 'Feeds a child for a week.' },
  { id: 'books', amount: 25, label: 'Buy Books', description: 'Provides a full set of textbooks.' },
  { id: 'sponsor', amount: 50, label: 'Sponsor a Child', description: 'Full monthly education support.' },
  { id: 'custom', amount: 0, label: 'Custom Amount', description: 'Any amount helps.' },
];

const paymentMethods = [
  { id: 'bkash', name: 'bKash', icon: Smartphone, color: 'bg-pink-600' },
  { id: 'nagad', name: 'Nagad', icon: Smartphone, color: 'bg-orange-600' },
  { id: 'ssl', name: 'SSLCommerz', icon: CreditCard, color: 'bg-blue-600' },
  { id: 'stripe', name: 'Stripe (International)', icon: Globe, color: 'bg-indigo-600' },
];

const Donate = () => {
  const [type, setType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedTier, setSelectedTier] = useState('sponsor');
  const [customAmount, setCustomAmount] = useState('');
  const [method, setMethod] = useState('bkash');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const amount = selectedTier === 'custom' ? parseFloat(customAmount) : tiers.find(t => t.id === selectedTier)?.amount;

    if (!amount || amount <= 0) {
      toast.error('Please enter a valid amount');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/donations/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          type,
          method,
          donorInfo: {
            name: (e.target as any).name.value,
            email: (e.target as any).email.value,
            message: (e.target as any).message.value,
          }
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success('Redirecting to payment gateway...');
        setTimeout(() => {
          // Simulate success for demo
          toast.success(`Thank you! Transaction ${data.transactionId} completed.`);
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-4"
        >
          <Heart className="h-8 w-8 text-rose-600 fill-current" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Make a Difference Today</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Your donation directly supports the education and well-being of children in underprivileged communities. Choose a plan that works for you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Donation Form */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Select Donation Type</CardTitle>
              <CardDescription>Choose between a one-time gift or a recurring monthly support.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={type} onValueChange={(v) => setType(v as any)} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="one-time">One-time</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                        selectedTier === tier.id
                          ? 'border-primary bg-primary/5'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">{tier.label}</span>
                        {selectedTier === tier.id && <CheckCircle2 className="h-5 w-5 text-primary" />}
                      </div>
                      <div className="text-2xl font-bold mb-1">
                        {tier.id === 'custom' ? 'Custom' : `$${tier.amount}`}
                      </div>
                      <p className="text-xs text-slate-500">{tier.description}</p>
                    </div>
                  ))}
                </div>

                {selectedTier === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mb-8"
                  >
                    <Label htmlFor="custom-amount">Enter Amount ($)</Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="e.g. 100"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="mt-2"
                    />
                  </motion.div>
                )}
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Donor Information</CardTitle>
              <CardDescription>Tell us a bit about yourself.</CardDescription>
            </CardHeader>
            <form onSubmit={handleDonate}>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <textarea
                    id="message"
                    name="message"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Leave a message for the children..."
                  />
                </div>

                <div className="pt-4">
                  <Label className="mb-4 block">Payment Method</Label>
                  <RadioGroup value={method} onValueChange={setMethod} className="grid sm:grid-cols-2 gap-4">
                    {paymentMethods.map((pm) => (
                      <Label
                        key={pm.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          method === pm.id ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${pm.color} text-white`}>
                            <pm.icon className="h-5 w-5" />
                          </div>
                          <span className="font-medium">{pm.name}</span>
                        </div>
                        <RadioGroupItem value={pm.id} id={pm.id} className="sr-only" />
                      </Label>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={loading}>
                  {loading ? 'Processing...' : `Donate ${type === 'monthly' ? 'Monthly' : 'Now'}`}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader>
              <CardTitle className="text-xl">Your Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">100% Transparency</h4>
                  <p className="text-sm text-slate-400">Every dollar is tracked and reported annually.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Tax Deductible</h4>
                  <p className="text-sm text-slate-400">Receive an official receipt for your records.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Direct Support</h4>
                  <p className="text-sm text-slate-400">Funds go directly to school supplies and meals.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p className="mb-4">If you have any questions regarding your donation or would like to donate via bank transfer, please contact us.</p>
              <p className="font-bold">Email: donations@shikkha.org</p>
              <p className="font-bold">Phone: +880 1234-567890</p>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100 text-center">
             <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4 animate-pulse" />
             <h3 className="font-bold text-rose-900 mb-2">Join 1,200+ Donors</h3>
             <p className="text-sm text-rose-700">You are joining a global community of people making a real difference.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
