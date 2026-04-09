import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Heart, Users } from 'lucide-react';

const fundData = [
  { name: 'Education Programs', value: 65, color: '#0ea5e9' },
  { name: 'Nutrition & Meals', value: 20, color: '#10b981' },
  { name: 'Infrastructure', value: 10, color: '#f59e0b' },
  { name: 'Admin & Ops', value: 5, color: '#64748b' },
];

const donorWall = [
  { name: 'John Doe', amount: '$5,000', date: '2024' },
  { name: 'Sarah Miller', amount: '$2,500', date: '2024' },
  { name: 'Anonymous', amount: '$1,200', date: '2023' },
  { name: 'TechCorp Foundation', amount: '$10,000', date: '2023' },
  { name: 'Mike Ross', amount: '$1,500', date: '2023' },
];

const Transparency = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Transparency & Impact</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We are committed to 100% transparency. See exactly how your donations are being used to change lives.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Fund Usage Breakdown</CardTitle>
            <CardDescription>Where your money goes (Percentage of total funds).</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fundData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {fundData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-primary" />
              Live Donation Counter
            </h3>
            <div className="text-5xl font-bold text-primary mb-2">$254,892.00</div>
            <p className="text-slate-600">Total funds raised since 2015</p>
            <div className="mt-6 h-4 w-full bg-slate-200 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: '85%' }}
                 transition={{ duration: 1.5 }}
                 className="h-full bg-primary" 
               />
            </div>
            <p className="text-sm text-slate-500 mt-2">85% of our 2024 goal reached!</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="text-primary" />
                Annual Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[2023, 2022, 2021].map(year => (
                <div key={year} className="flex items-center justify-between p-4 border rounded-xl hover:bg-slate-50 transition-colors">
                  <span className="font-medium">Annual Impact Report {year}</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" /> PDF
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Donor Recognition Wall</h2>
          <p className="text-slate-600">Honoring those who have made significant contributions to our mission.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {donorWall.map((donor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 text-center border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-rose-600 fill-current" />
              </div>
              <h4 className="font-bold text-slate-900">{donor.name}</h4>
              <p className="text-primary font-bold text-lg">{donor.amount}</p>
              <p className="text-xs text-slate-400 mt-1">Member since {donor.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="bg-slate-900 text-white rounded-[2rem] p-12 text-center">
        <Users className="h-16 w-16 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">Join the Wall of Impact</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          Your support helps us plan for the future. Start a monthly donation today and become a permanent part of our mission.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">Become a Sponsor</Button>
      </div>
    </div>
  );
};

export default Transparency;
