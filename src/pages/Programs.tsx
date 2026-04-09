import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Coffee, Laptop, Music, Palette, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: 'Primary Education',
      desc: 'Foundational learning for children aged 5-11, focusing on literacy and numeracy.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Nutrition & Health',
      desc: 'Daily nutritious meals and regular health checkups for all our students.',
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Digital Literacy',
      desc: 'Introducing basic computer skills and internet safety to prepare for the modern world.',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Arts & Culture',
      desc: 'Encouraging creativity through music, painting, and traditional dance.',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1000&auto=format&fit=crop'
    },
  ];

  return (
    <div className="pb-20">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            We provide a holistic education that goes beyond the classroom to nurture every aspect of a child's growth.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {program.desc}
                  </p>
                  <Link to="/donate">
                    <Button variant="outline" className="w-full">Support this Program</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Over 500 of our graduates have gone on to higher education and meaningful careers. Your support makes these stories possible.
          </p>
          <Link to="/blog">
            <Button size="lg" variant="secondary">Read Case Studies</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;
