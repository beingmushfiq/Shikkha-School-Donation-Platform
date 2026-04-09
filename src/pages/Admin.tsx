import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Heart, 
  FileText, 
  Image as ImageIcon, 
  Plus, 
  Search, 
  MoreVertical,
  TrendingUp,
  DollarSign,
  UserCheck
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';

const data = [
  { name: 'Jan', amount: 4000 },
  { name: 'Feb', amount: 3000 },
  { name: 'Mar', amount: 5000 },
  { name: 'Apr', amount: 2780 },
  { name: 'May', amount: 1890 },
  { name: 'Jun', amount: 2390 },
  { name: 'Jul', amount: 3490 },
];

const Admin = () => {
  const { user, role, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
  if (!user || role !== 'admin') return <Navigate to="/login" />;

  const stats = [
    { label: 'Total Donations', value: '$45,231', icon: DollarSign, trend: '+12.5%', color: 'text-emerald-600' },
    { label: 'Active Students', value: '1,240', icon: Users, trend: '+3.2%', color: 'text-blue-600' },
    { label: 'Pending Sponsors', value: '48', icon: UserCheck, trend: '-2.4%', color: 'text-amber-600' },
    { label: 'Impact Score', value: '94/100', icon: TrendingUp, trend: '+5.0%', color: 'text-rose-600' },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your school, donations, and content.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export Reports</Button>
          <Button className="bg-primary">
            <Plus className="mr-2 h-4 w-4" /> Add Student
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={stat.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}>
                  {stat.trend}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Donation Trends</CardTitle>
                <CardDescription>Monthly donation volume for the current year.</CardDescription>
              </CardHeader>
              <CardContent className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="hsl(var(--primary))" 
                      fillOpacity={1} 
                      fill="url(#colorAmount)" 
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions across the platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { user: 'Sarah J.', action: 'donated $50', time: '2 mins ago', type: 'donation' },
                    { user: 'Admin', action: 'added new student', time: '1 hour ago', type: 'student' },
                    { user: 'Mike R.', action: 'sponsored a child', time: '3 hours ago', type: 'donation' },
                    { user: 'System', action: 'monthly report generated', time: '5 hours ago', type: 'report' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`h-2 w-2 rounded-full ${
                        item.type === 'donation' ? 'bg-emerald-500' : 
                        item.type === 'student' ? 'bg-blue-500' : 'bg-slate-400'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          <span className="font-bold">{item.user}</span> {item.action}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-6 text-primary">View All Activity</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>View and manage all students in the sponsorship program.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search students..." className="pl-8 w-[250px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sponsor</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: 'Arif Ahmed', grade: 'Class 4', status: 'Sponsored', sponsor: 'John Doe' },
                    { name: 'Sumaiya Akter', grade: 'Class 2', status: 'Pending', sponsor: '-' },
                    { name: 'Rakib Hasan', grade: 'Class 5', status: 'Sponsored', sponsor: 'Sarah Miller' },
                    { name: 'Mitu Khatun', grade: 'Class 3', status: 'Pending', sponsor: '-' },
                  ].map((student) => (
                    <TableRow key={student.name}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.grade}</TableCell>
                      <TableCell>
                        <Badge variant={student.status === 'Sponsored' ? 'default' : 'secondary'}>
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{student.sponsor}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations">
           <Card>
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>Track all incoming funds and their status.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { donor: 'John Doe', amount: '$50.00', method: 'Stripe', date: '2024-03-15', status: 'Completed' },
                    { donor: 'Sarah Miller', amount: '$120.00', method: 'bKash', date: '2024-03-14', status: 'Completed' },
                    { donor: 'Anonymous', amount: '$25.00', method: 'Nagad', date: '2024-03-14', status: 'Pending' },
                    { donor: 'Mike Ross', amount: '$200.00', method: 'SSLCommerz', date: '2024-03-13', status: 'Completed' },
                  ].map((donation, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{donation.donor}</TableCell>
                      <TableCell>{donation.amount}</TableCell>
                      <TableCell>{donation.method}</TableCell>
                      <TableCell>{donation.date}</TableCell>
                      <TableCell>
                        <Badge variant={donation.status === 'Completed' ? 'default' : 'outline'} className={donation.status === 'Completed' ? 'bg-emerald-500 hover:bg-emerald-600' : ''}>
                          {donation.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
