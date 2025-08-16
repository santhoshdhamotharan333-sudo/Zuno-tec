import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Palette, Lightbulb, Star, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CreativeDesign = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (featuresRef.current) {
      gsap.fromTo(featuresRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const features = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity packages including logos, color schemes, and visual guidelines.'
    },
    {
      icon: Lightbulb,
      title: 'Concept Development',
      description: 'From initial concept to final execution, we bring your creative vision to life.'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'High-quality designs that stand out and make a lasting impression.'
    },
    {
      icon: Users,
      title: 'Collaborative Process',
      description: 'We work closely with you throughout the design process to ensure perfect results.'
    }
  ];

  const projects = [
    {
      title: 'Tech Startup Branding',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete brand identity for a fintech startup'
    },
    {
      title: 'Restaurant Visual Identity',
      category: 'Visual Design',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern restaurant branding and menu design'
    },
    {
      title: 'E-commerce Brand',
      category: 'Digital Branding',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Full brand package for online retail business'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Creative <span className="text-accent">Design</span> Services
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Transform your vision into stunning visual experiences. Our creative design services bring innovation, 
              artistry, and strategic thinking together to create designs that captivate and inspire.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="group bg-accent text-primary px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 flex items-center justify-center animate-glow"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-lg font-medium border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 text-center"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our creative design services cover every aspect of visual communication, from brand identity to digital experiences.
            </p>
          </motion.div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-accent/50 text-center"
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Projects</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore some of our latest creative design work and see how we've helped brands stand out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    View Details
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-purple-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's collaborate to bring your creative vision to life with innovative design solutions that make an impact.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent text-primary px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 animate-glow"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CreativeDesign;