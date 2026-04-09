import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb28f74b55a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">A glimpse into the daily lives of our students and the impact of your support.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
          >
            <img 
              src={src} 
              alt={`Gallery ${i}`} 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {i % 3 === 0 && (
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
