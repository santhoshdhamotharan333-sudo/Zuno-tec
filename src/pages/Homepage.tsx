import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Monitor, Camera, Code, Smartphone, TrendingUp } from "lucide-react";
import Robot3D from "../components/Robot3D";

// ✅ Correct GSAP imports
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }

    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
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
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Monitor,
      title: 'Modern Design',
      description: 'Contemporary interfaces with cutting-edge aesthetics',
      path: '/services/modern-design',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Design',
      description: 'Strategic designs that convert and engage audiences',
      path: '/services/marketing-design',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Camera,
      title: 'Photo Editing',
      description: 'Professional retouching and enhancement services',
      path: '/services/photo-editing',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with modern technologies',
      path: '/services/web-development',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Web Applications',
      description: 'Interactive web apps that deliver exceptional UX',
      path: '/services/web-applications',
      color: 'from-teal-500 to-blue-500'
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
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={heroRef} className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Premium <span className="text-accent">Design</span> & Development Solutions
              </motion.h1>
              <motion.p 
                className="text-xl text-text-secondary leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                We create stunning visual experiences that captivate audiences and drive results with cutting-edge technology and creative expertise.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Link
                  to="/portfolio"
                  className="group bg-accent text-primary px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 flex items-center justify-center animate-glow"
                >
                  View Our Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-lg font-medium border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 text-center"
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
      <section className="py-20 bg-gradient-to-b from-primary to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From creative design to cutting-edge development, we offer comprehensive solutions for all your digital needs.
            </p>
          </motion.div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-accent/50"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover our latest projects and see how we bring creative visions to life.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6" style={{ width: 'max-content' }}>
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="w-80 bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-accent text-sm font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      View Project
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the world of design and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-text-secondary mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary mb-4">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={16} />
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