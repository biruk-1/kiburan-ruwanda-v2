import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: 'Tech Innovation',
      description: 'Custom software development, web applications, and digital transformation solutions.',
      features: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'API Integration'],
      route: '/services/tech-innovation',
      color: '#1E3B8A',
    },
    {
      icon: Palette,
      title: 'Design Excellence',
      description: 'Creative design services that combine aesthetics with functionality.',
      features: ['UI/UX Design', 'Branding', 'Print Design', 'Motion Graphics'],
      route: '/services/design-excellence',
      color: '#2A4A9F',
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Comprehensive event planning and execution for memorable experiences.',
      features: ['Corporate Events', 'Conferences', 'Workshops', 'Social Events'],
      route: '/services/event-management',
      color: '#1A2F2F',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Marketing',
      description: 'Data-driven marketing strategies that drive growth and engagement.',
      features: ['Digital Marketing', 'Content Strategy', 'Social Media', 'Analytics'],
      route: '/services/strategy-marketing',
      color: '#1E3B8A',
    },
  ];

  return (
    <section id="services" className="section-padding bg-neutral-900/40">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="subtitle-1 max-w-3xl mx-auto">
            We offer comprehensive solutions across multiple domains to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card p-8 hover-lift"
              style={{
                '--hover-color': service.color,
              } as React.CSSProperties}
            >
              {/* Service Header */}
              <div className="flex items-start gap-6 mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="heading-3 mb-3">
                    {service.title}
                  </h3>
                  <p className="body-1">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="body-2">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                onClick={() => navigate(service.route)}
                className="btn-secondary w-full justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default Services;