import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'We develop comprehensive strategies that align with your business goals and market opportunities.',
      color: '#1E3B8A',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our diverse team of specialists brings years of experience across multiple industries.',
      color: '#2A4A9F',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'We stay ahead of trends and technologies to deliver cutting-edge solutions.',
      color: '#1A2F2F',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our track record speaks for itself with successful projects and satisfied clients.',
      color: '#1E3B8A',
    },
  ];

  return (
    <section id="about" className="section-padding bg-neutral-900/40">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="heading-2 mb-6">
              About <span className="text-gradient">Kiburan Rwanda</span>
            </h2>
            <p className="subtitle-1">
              We are a dynamic company specializing in technology innovation, creative design, 
              event management, and strategic marketing. Our mission is to empower businesses 
              and individuals to achieve their full potential through innovative solutions.
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { value: '50+', label: 'Clients' },
              { value: '100+', label: 'Projects' },
              { value: '5+', label: 'Years' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="heading-2 text-gradient mb-2">{stat.value}</div>
                <div className="body-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card p-6 hover-lift"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="heading-3 mb-3 text-[20px]">
                {feature.title}
              </h3>
              <p className="body-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default About;