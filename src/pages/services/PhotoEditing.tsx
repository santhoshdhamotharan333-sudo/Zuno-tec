import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotoEditing = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Professional <span className="text-accent">Photo</span> Editing
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Transform your images with expert retouching, color correction, and enhancement services. 
              We bring out the best in every photo with precision and artistic vision.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Camera, title: 'Photo Retouching', desc: 'Professional portrait and product retouching' },
              { icon: Edit, title: 'Color Correction', desc: 'Expert color grading and correction' },
              { icon: Zap, title: 'Quick Turnaround', desc: 'Fast delivery without compromising quality' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="bg-gray-800 p-8 rounded-xl hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Icon className="text-accent mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent text-primary px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300"
            >
              Enhance Your Photos
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoEditing;