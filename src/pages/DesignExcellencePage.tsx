import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Palette, Brush, Layout, Eye, Star, CheckCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DesignExcellencePage = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const designProcess = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your brand, goals, and target audience',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Concept',
      description: 'Creating initial concepts and design directions',
      icon: Brush,
    },
    {
      step: '03',
      title: 'Design',
      description: 'Developing detailed designs and prototypes',
      icon: Layout,
    },
    {
      step: '04',
      title: 'Refine',
      description: 'Iterating and perfecting the final design',
      icon: Palette,
    },
  ];

  const portfolio = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity for tech startup',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'E-commerce Website',
      category: 'Web Design',
      description: 'Modern e-commerce platform design',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Mobile App UI',
      category: 'UI/UX',
      description: 'Intuitive mobile application interface',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Print Campaign',
      category: 'Print Design',
      description: 'Marketing materials and print collateral',
      image: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Motion Graphics',
      category: 'Animation',
      description: 'Engaging animated content for social media',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Dashboard Design',
      category: 'UI/UX',
      description: 'Analytics dashboard for SaaS platform',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
  ];

  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity design and guidelines',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'User-centered design for web and mobile',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
    },
    {
      icon: Brush,
      title: 'Print Design',
      description: 'Professional print materials and collateral',
      features: ['Business Cards', 'Brochures', 'Posters', 'Packaging'],
    },
    {
      icon: Eye,
      title: 'Motion Graphics',
      description: 'Engaging animations and video content',
      features: ['Logo Animation', 'Explainer Videos', 'Social Media Content', '2D Animation'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      rating: 5,
      text: 'Kiburan transformed our brand identity completely. The design perfectly captures our vision.',
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Business',
      rating: 5,
      text: 'Outstanding UI/UX design that increased our conversion rates by 40%. Highly recommended!',
    },
    {
      name: 'Emma Wilson',
      company: 'Marketing Agency',
      rating: 5,
      text: 'Professional, creative, and always delivers on time. Our go-to design partner.',
    },
  ];

  const stats = [
    { number: '200+', label: 'Designs Created' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Brands Transformed' },
    { number: '3+', label: 'Design Awards' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors duration-300"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shimmer">
              Design Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Creative design solutions that captivate audiences and drive meaningful engagement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center glassmorphism rounded-2xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Design <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to creating exceptional design solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glassmorphism-strong rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-purple-400 mb-4">{process.step}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <process.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Design <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive design solutions for all your creative needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glassmorphism-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our creative work and design excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glassmorphism-strong rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="p-6">
                  <div className="text-purple-400 text-sm font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our clients say about our design work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glassmorphism-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create <span className="text-gradient">Something Amazing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's bring your vision to life with exceptional design
            </p>
            <motion.button
              onClick={() => navigate('/')}
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Design Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DesignExcellencePage;