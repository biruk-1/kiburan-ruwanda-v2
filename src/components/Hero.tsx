import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [currentIndustry, setCurrentIndustry] = useState(0);

  const industries = [
    {
      title: 'Tech Innovation',
      description: 'Cutting-edge technology solutions for modern businesses',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      title: 'Design Excellence',
      description: 'Creative design that captivates and converts',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      title: 'Event Management',
      description: 'Memorable experiences that bring people together',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
    {
      title: 'Strategic Marketing',
      description: 'Data-driven strategies that drive growth',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [industries.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Images */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndustry}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${industries[currentIndustry].image})` }}
            />
            <div className="absolute inset-0 bg-neutral-900/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/50 to-neutral-900" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <img 
              src="/src/assets/kiburan logo and name.png" 
              alt="Kiburan Rwanda" 
              className="h-16 md:h-20 mx-auto mb-8 object-contain"
            />
            <h1 className="heading-1 mb-6">
              Empowering Innovation
              <br />
              <span className="text-gradient">Design & Growth</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="subtitle-1 mb-12"
          >
            We combine local expertise with global standards to deliver
            <br className="hidden md:block" />
            exceptional results for businesses in Rwanda and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('services')}
              className="btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Industry Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="heading-3 mb-4 text-gradient">
                  {industries[currentIndustry].title}
                </h3>
                <p className="subtitle-2">
                  {industries[currentIndustry].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Industry Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndustry(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndustry 
                      ? 'bg-kiburan-blue w-8' 
                      : 'bg-neutral-700 hover:bg-neutral-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default Hero;