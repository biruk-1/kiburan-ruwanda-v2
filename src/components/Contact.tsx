import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, MapPin, Phone, Mail, Zap } from 'lucide-react';
import kiburanLogo from '../assets/kiburan logo.png';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kigali, Rwanda',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+250 788 123 456',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@kiburan.rw',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">Get In</span>{' '}
            <span className="text-shimmer">
              Touch
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mx-auto mb-10 rounded-full" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="glassmorphism-strong rounded-3xl p-10 gradient-border"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 glassmorphism rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 glassmorphism rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 glassmorphism rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full btn-primary text-lg flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-6 h-6 mr-3" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + (index * 0.2) }}
                className="flex items-center space-x-6 p-8 glassmorphism rounded-2xl hover:scale-105 transition-all duration-300 gradient-border"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                  <p className="text-gray-300 text-lg">{info.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 p-8 glassmorphism rounded-2xl gradient-border floating-sparkles"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-white">Why Choose Kiburan?</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                We combine local expertise with global standards to deliver exceptional results. 
                Our team is passionate about helping businesses in Rwanda and beyond reach their full potential.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.6 }}
        className="mt-24 pt-12 border-t border-gray-700/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img 
                src={kiburanLogo}
                alt="Kiburan Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-kiburan-blue via-kiburan-blue-light to-kiburan-green bg-clip-text text-transparent">
                Kiburan Rwanda
              </span>
            </div>
            <p className="text-neutral-400 text-lg">
              © 2025 Kiburan Rwanda. All rights reserved. Empowering Innovation, Design & Growth.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;