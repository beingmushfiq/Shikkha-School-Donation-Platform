import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, GraduationCap, BookOpen, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const stats = [
    { label: 'Students Sponsored', value: '1,200+', icon: Users, color: 'text-blue-600' },
    { label: 'Schools Supported', value: '15', icon: GraduationCap, color: 'text-emerald-600' },
    { label: 'Funds Raised', value: '$250k+', icon: Heart, color: 'text-rose-600' },
    { label: 'Communities Impacted', value: '45', icon: Globe, color: 'text-amber-600' },
  ];

  const features = [
    {
      title: 'Quality Education',
      description: 'Providing modern curriculum and resources to underprivileged children.',
      icon: BookOpen,
    },
    {
      title: 'Nutrition Support',
      description: 'Ensuring every student has access to healthy meals during school hours.',
      icon: Heart,
    },
    {
      title: 'Digital Literacy',
      description: 'Equipping schools with computers and internet for the future.',
      icon: Globe,
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
            alt="Children in school"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Every Child Deserves a <span className="text-primary">Brighter Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We are on a mission to provide quality education and sponsorship to children in need across Bangladesh. Join our community of donors and make an impact today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8">
                  Donate Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8">
                  Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact & Mission</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            At Shikkha, we believe that education is the most powerful tool to break the cycle of poverty. Our programs are designed to provide not just books, but a holistic environment where children can thrive.
          </p>
          <ul className="space-y-4 mb-8">
            {['100% of donations go directly to programs', 'Regular progress reports for sponsors', 'Community-led development approach'].map((item) => (
              <li key={item} className="flex items-center text-slate-700">
                <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/programs">
            <Button variant="link" className="p-0 text-primary font-semibold text-lg">
              Learn more about our programs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            alt="Students studying"
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
            <p className="text-sm italic text-slate-600">
              "Since joining the Shikkha program, my daughter has found a new passion for learning. She wants to be a doctor one day."
            </p>
            <p className="text-sm font-bold mt-2">— Rahima, Mother of a sponsored student</p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Make a Difference</h2>
            <p className="text-slate-600">We focus on three core pillars to ensure sustainable impact in the communities we serve.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Change a Life?</h2>
            <p className="text-xl text-primary-foreground/90 mb-10">
              Your contribution, no matter how small, can provide a child with the education they deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/donate">
                <Button size="lg" variant="secondary" className="text-primary font-bold px-10 h-14 text-lg">
                  Start Donating
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-10 h-14 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
