import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketingDesign = () => {
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
              Marketing <span className="text-accent">Design</span> That Converts
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Strategic designs that drive engagement, conversions, and brand growth. 
              We create marketing materials that not only look great but deliver measurable results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Target, title: 'Targeted Campaigns', desc: 'Designs that reach your ideal audience' },
              { icon: TrendingUp, title: 'Conversion Focused', desc: 'Optimized for maximum conversions' },
              { icon: BarChart, title: 'Data Driven', desc: 'Backed by analytics and insights' }
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
              Boost Your Marketing
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingDesign;