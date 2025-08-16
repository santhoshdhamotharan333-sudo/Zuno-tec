import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
  ];

  const serviceLinks = [
    { name: 'Creative Design', path: '/services/creative-design' },
    { name: 'Modern Design', path: '/services/modern-design' },
    { name: 'Marketing Design', path: '/services/marketing-design' },
    { name: 'Photo Editing', path: '/services/photo-editing' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Web Applications', path: '/services/web-applications' },
  ];

  return (
    <footer className="bg-gray-900 text-text-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-accent">GraphicDesignEye</h3>
            <p className="text-sm leading-relaxed">
              Premium design and development services that bring your vision to life with cutting-edge technology and creative expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-text-primary">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors duration-300">Home</Link></li>
              <li><Link to="/portfolio" className="text-sm hover:text-accent transition-colors duration-300">Portfolio</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors duration-300">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-text-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span className="text-sm">contact@graphicdesigneye.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-sm">123 Design St, Creative City</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-6 text-center"
        >
          <p className="text-sm">&copy; 2025 GraphicDesignEye. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;