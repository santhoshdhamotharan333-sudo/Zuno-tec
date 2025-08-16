import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', dropdown: [
      { name: 'Creative Design', path: '/services/creative-design' },
      { name: 'Modern Design', path: '/services/modern-design' },
      { name: 'Marketing Design', path: '/services/marketing-design' },
      { name: 'Photo Editing', path: '/services/photo-editing' },
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Web Applications', path: '/services/web-applications' },
    ]},
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-luxury' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold font-playfair text-emerald hover:text-gold transition-colors duration-300">
            GraphicDesignEye
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`text-text-primary hover:text-gold transition-all duration-300 relative font-montserrat font-medium uppercase text-sm tracking-wider ${
                    location.pathname === item.path ? 'text-gold' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-4 w-56 bg-primary/95 backdrop-blur-md rounded-luxury shadow-luxury opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gold/20">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-6 py-3 text-text-secondary hover:text-gold hover:bg-gold/10 transition-all duration-300 first:rounded-t-luxury last:rounded-b-luxury font-montserrat"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary hover:text-gold transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-6 bg-primary/95 backdrop-blur-md rounded-luxury shadow-luxury border border-gold/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="block px-6 py-4 text-text-primary hover:text-gold hover:bg-gold/10 transition-all duration-300 font-montserrat font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-6">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-8 py-3 text-text-secondary hover:text-gold hover:bg-gold/10 transition-all duration-300 text-sm font-montserrat"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;