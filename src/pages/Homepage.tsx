import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Monitor, Camera, Code, Smartphone, TrendingUp } from "lucide-react";
import Robot3D from "../components/Robot3D";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power3.out" }
      );
    }

    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Innovative visual solutions that capture your brand essence',
      path: '/services/creative-design',
      color: 'from-emerald to-gold'
    },
    {
      icon: Monitor,
      title: 'Modern Design',
      description: 'Contemporary interfaces with cutting-edge aesthetics',
      path: '/services/modern-design',
      color: 'from-emerald/80 to-gold/80'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Design',
      description: 'Strategic designs that convert and engage audiences',
      path: '/services/marketing-design',
      color: 'from-gold to-emerald'
    },
    {
      icon: Camera,
      title: 'Photo Editing',
      description: 'Professional retouching and enhancement services',
      path: '/services/photo-editing',
      color: 'from-gold/70 to-emerald/70'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with modern technologies',
      path: '/services/web-development',
      color: 'from-emerald/90 to-gold/90'
    },
    {
      icon: Smartphone,
      title: 'Web Applications',
      description: 'Interactive web apps that deliver exceptional UX',
      path: '/services/web-applications',
      color: 'from-gold/60 to-emerald/60'
    }
  ];

  const portfolioItems = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Mobile App Interface',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Marketing Campaign',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Photography Portfolio',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of Web Design in 2025',
      excerpt: 'Explore the latest trends and technologies shaping the web design landscape.',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Creating Engaging User Experiences',
      excerpt: 'Learn how to design interfaces that captivate and convert users.',
      date: 'Jan 12, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Brand Identity Design Principles',
      excerpt: 'Master the fundamentals of creating memorable brand identities.',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={heroRef} className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-playfair font-bold leading-tight text-text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Premium <span className="text-emerald">Design</span> & 
                <span className="block text-gold">Development</span>
                <span className="block text-text-primary">Solutions</span>
              </motion.h1>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald to-gold"></div>
              <motion.p 
                className="text-xl text-text-secondary leading-relaxed font-montserrat font-light max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                We create stunning visual experiences that captivate audiences and drive results with cutting-edge technology and timeless creative expertise.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Link
                  to="/portfolio"
                  className="group bg-emerald text-primary px-10 py-4 rounded-luxury font-montserrat font-semibold hover:bg-emerald/90 transition-all duration-300 flex items-center justify-center animate-breathe shadow-luxury hover:shadow-luxury-hover border border-gold/20 hover:border-gold/40"
                >
                  View Our Work
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-4 rounded-luxury font-montserrat font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-primary-dark transition-all duration-300 text-center shadow-luxury hover:shadow-gold-glow"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <Robot3D />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-primary/90">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-text-primary">Our <span className="text-emerald">Services</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald to-gold mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-montserrat leading-relaxed">
              From creative design to cutting-edge development, we offer comprehensive solutions for all your digital needs.
            </p>
          </motion.div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="group bg-gradient-to-br from-primary to-primary/80 p-8 rounded-luxury hover:scale-105 transition-all duration-500 hover:shadow-luxury-hover border border-gold/20 hover:border-gold/40 backdrop-blur-sm"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-20 h-20 rounded-luxury bg-gradient-to-r ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-luxury`}>
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 group-hover:text-emerald transition-colors duration-300 text-text-primary">{service.title}</h3>
                  <p className="text-text-secondary mb-6 leading-relaxed font-montserrat">{service.description}</p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-gold hover:text-gold/80 transition-colors duration-300 group-hover:translate-x-1 font-montserrat font-medium uppercase text-sm tracking-wider"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-gradient-to-b from-primary/90 to-primary">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-text-primary">Featured <span className="text-gold">Work</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-emerald mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-montserrat leading-relaxed">
              Discover our latest projects and see how we bring creative visions to life.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-8" style={{ width: 'max-content' }}>
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="w-96 bg-gradient-to-br from-primary to-primary/80 rounded-luxury overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-luxury-hover border border-gold/20 hover:border-gold/40"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-gold text-sm font-montserrat font-medium uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-2xl font-playfair font-bold mt-3 mb-4 text-text-primary">{item.title}</h3>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center text-text-secondary hover:text-emerald transition-colors duration-300 font-montserrat font-medium"
                    >
                      View Project
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gradient-to-b from-primary to-primary/95">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-text-primary">Latest <span className="text-emerald">Insights</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald to-gold mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto font-montserrat leading-relaxed">
              Stay updated with the latest trends, tips, and insights from the world of design and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="bg-gradient-to-br from-primary to-primary/80 rounded-luxury overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-luxury-hover border border-gold/20 hover:border-gold/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-text-secondary mb-4 font-montserrat">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-4 hover:text-gold transition-colors duration-300 text-text-primary">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary mb-6 font-montserrat leading-relaxed">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-emerald hover:text-emerald/80 transition-colors duration-300 font-montserrat font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;