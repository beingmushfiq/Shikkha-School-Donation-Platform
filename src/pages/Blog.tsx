import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const posts = [
  {
    title: 'New Computer Lab Opens in Sylhet',
    excerpt: 'Thanks to our generous donors, we have successfully installed 20 new computers in our Sylhet branch.',
    date: 'Oct 12, 2023',
    author: 'Admin',
    category: 'Update',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Student Spotlight: Sumaiya\'s Journey',
    excerpt: 'Sumaiya was one of our first students. Today, she is studying engineering at BUET.',
    date: 'Sep 28, 2023',
    author: 'Sarah J.',
    category: 'Success Story',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Annual Impact Report 2022',
    excerpt: 'Download our latest annual report to see how your donations are being used to change lives.',
    date: 'Aug 15, 2023',
    author: 'Finance Team',
    category: 'Report',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Blog & Updates</h1>
          <p className="text-slate-600">Stay updated with our latest news, success stories, and impact reports.</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Updates', 'Stories', 'Reports'].map(cat => (
            <Badge key={cat} variant={cat === 'All' ? 'default' : 'outline'} className="cursor-pointer px-4 py-1">
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow border-none shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                </div>
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-slate-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="link" className="p-0 text-primary font-semibold">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-slate-50 rounded-3xl p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">Get the latest updates and stories delivered straight to your inbox.</p>
        <div className="flex max-w-md mx-auto gap-2">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
