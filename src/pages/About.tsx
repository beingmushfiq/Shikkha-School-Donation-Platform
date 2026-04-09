import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Story & Mission
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Founded in 2015, Shikkha has been dedicated to bridging the educational gap for children in rural Bangladesh.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            In many parts of Bangladesh, children are forced to leave school early due to financial constraints. We believe that every child has the potential to become a leader if given the right opportunities.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our approach is simple: we identify children at risk, provide them with full educational support, and work with their families to ensure they stay in school.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="School" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
          <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b55a?q=80&w=1000&auto=format&fit=crop" alt="Classroom" className="rounded-2xl h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Our Vision', desc: 'A world where every child can read, write, and dream.', icon: Target },
              { title: 'Our Values', desc: 'Integrity, Transparency, and Community First.', icon: Heart },
              { title: 'Our Team', desc: 'Dedicated educators and social workers.', icon: Users },
              { title: 'Our Awards', desc: 'Recognized for social impact in 2022.', icon: Award },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
