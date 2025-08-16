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
    <footer className="bg-primary-dark text-text-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-playfair text-gold">GraphicDesignEye</h3>
            <p className="text-base leading-relaxed text-text-secondary font-montserrat">
              Premium design and development services that bring your vision to life with cutting-edge technology and creative expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-primary-dark transition-all duration-300 group border border-gold/20"
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
            <h3 className="text-xl font-bold font-playfair text-text-light">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-base hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block font-montserrat text-text-secondary"
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
            <h3 className="text-xl font-bold font-playfair text-text-light">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-base hover:text-gold transition-colors duration-300 font-montserrat text-text-secondary">Home</Link></li>
              <li><Link to="/portfolio" className="text-base hover:text-gold transition-colors duration-300 font-montserrat text-text-secondary">Portfolio</Link></li>
              <li><Link to="/blog" className="text-base hover:text-gold transition-colors duration-300 font-montserrat text-text-secondary">Blog</Link></li>
              <li><Link to="/contact" className="text-base hover:text-gold transition-colors duration-300 font-montserrat text-text-secondary">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold font-playfair text-text-light">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold" />
                <span className="text-base font-montserrat text-text-secondary">contact@graphicdesigneye.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold" />
                <span className="text-base font-montserrat text-text-secondary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gold" />
                <span className="text-base font-montserrat text-text-secondary">123 Design St, Creative City</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gold/20 mt-12 pt-8 text-center"
        >
          <p className="text-base font-montserrat text-text-secondary">&copy; 2025 GraphicDesignEye. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;