import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import kiburanLogo from '../assets/kiburan_logo2.png';
import kiburanLogoName from '../assets/kiburan logo name.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Decorative Header Border */}
      <div className="fixed top-0 left-0 right-0 z-40 h-[2px] bg-gradient-to-r from-transparent via-[#1E3B8A] to-transparent opacity-80" />
      
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
            ? 'glassmorphism-strong py-3'
            : 'bg-transparent py-5'
      }`}
    >
        {/* Decorative Zigzag Pattern */}
        <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden">
          <div className="absolute inset-0 bg-[#1E3B8A]/20" />
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'linear-gradient(135deg, transparent 25%, #1E3B8A 25%, #1E3B8A 50%, transparent 50%, transparent 75%, #1E3B8A 75%)',
              backgroundSize: '10px 10px',
              opacity: 0.3
            }}
          />
        </div>

        <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
            {/* Logo Container with Glow Effect */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#1E3B8A]/20 blur-xl rounded-full" />
              
              {/* Logo Button */}
          <motion.button
            onClick={() => navigate('/')}
                className="relative flex items-center"
              >
                <img 
                  src={kiburanLogo}
                  alt="Kiburan Logo"
                  className="h-12 md:h-14 object-contain brightness-110"
                />
                 <img 
                  src={kiburanLogoName}
                  alt="Kiburan" 
                  className="h-13 md:h-14 object-contain brightness-0"
                />
          </motion.button>
            </motion.div>

            {/* Desktop Navigation with Enhanced Styling */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative text-[#F5F5F5] hover:text-white transition-colors duration-300 font-medium text-lg tracking-wide py-2"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1E3B8A] origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    />
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-[#1E3B8A]/0 group-hover:bg-[#1E3B8A]/5 rounded-lg -z-10 transition-colors duration-300" />
                  </motion.button>
                ))}
              </nav>

              {/* Enhanced Get Started Button - Desktop Only */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center btn-primary space-x-2 px-8 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* Button Shine Effect */}
                <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Menu Button with Enhanced Styling */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F5F5F5] hover:text-white transition-colors duration-300 focus:outline-none relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-[#1E3B8A]/10 blur-sm rounded-lg" />
              {isMobileMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glassmorphism-strong border-t border-[#1E3B8A]/20"
            >
              <nav className="container mx-auto px-6 py-6 space-y-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-[#F5F5F5] hover:text-white transition-colors duration-300 py-3 font-medium text-lg hover:bg-[#1E3B8A]/10 rounded-lg px-4"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                {/* Get Started Button - Mobile Only */}
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-primary text-lg flex items-center justify-center space-x-2 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.header>
    </>
  );
};

export default Header;