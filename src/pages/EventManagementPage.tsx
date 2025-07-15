import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Calendar, Users, MapPin, Clock, Star, CheckCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventManagementPage = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const eventProcess = [
    {
      step: '01',
      title: 'Planning',
      description: 'Detailed event planning and strategy development',
      icon: Calendar,
    },
    {
      step: '02',
      title: 'Coordination',
      description: 'Vendor coordination and logistics management',
      icon: Users,
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Seamless event execution and on-site management',
      icon: Clock,
    },
    {
      step: '04',
      title: 'Follow-up',
      description: 'Post-event analysis and feedback collection',
      icon: CheckCircle,
    },
  ];

  const pastEvents = [
    {
      title: 'Tech Conference 2024',
      type: 'Corporate Event',
      attendees: '500+',
      location: 'Kigali Convention Centre',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Product Launch',
      type: 'Corporate Event',
      attendees: '200+',
      location: 'Radisson Blu Hotel',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Annual Gala Dinner',
      type: 'Social Event',
      attendees: '300+',
      location: 'Serena Hotel',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Workshop Series',
      type: 'Educational',
      attendees: '150+',
      location: 'Impact Hub Kigali',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Networking Event',
      type: 'Business',
      attendees: '100+',
      location: 'Kigali Heights',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      title: 'Cultural Festival',
      type: 'Cultural',
      attendees: '1000+',
      location: 'Amahoro Stadium',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
  ];

  const services = [
    {
      icon: Calendar,
      title: 'Corporate Events',
      description: 'Professional corporate events and conferences',
      features: ['Conference Planning', 'Product Launches', 'Team Building', 'Board Meetings'],
    },
    {
      icon: Users,
      title: 'Social Events',
      description: 'Memorable social gatherings and celebrations',
      features: ['Weddings', 'Birthday Parties', 'Anniversary Celebrations', 'Graduation Parties'],
    },
    {
      icon: MapPin,
      title: 'Venue Management',
      description: 'Complete venue selection and management',
      features: ['Venue Sourcing', 'Layout Design', 'Decoration', 'Technical Setup'],
    },
    {
      icon: Clock,
      title: 'Event Coordination',
      description: 'Full-service event coordination and management',
      features: ['Timeline Management', 'Vendor Coordination', 'Guest Management', 'On-site Support'],
    },
  ];

  const testimonials = [
    {
      name: 'David Mukamana',
      company: 'Rwanda Development Board',
      rating: 5,
      text: 'Kiburan managed our annual conference flawlessly. Every detail was perfect and the event exceeded our expectations.',
    },
    {
      name: 'Grace Uwimana',
      company: 'Bank of Kigali',
      rating: 5,
      text: 'Professional, reliable, and creative. They transformed our product launch into an unforgettable experience.',
    },
    {
      name: 'Jean Baptiste',
      company: 'Private Client',
      rating: 5,
      text: 'Our wedding was absolutely perfect thanks to Kiburan. They handled everything with such care and attention to detail.',
    },
  ];

  const stats = [
    { number: '100+', label: 'Events Managed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10K+', label: 'Attendees Served' },
    { number: '5+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-teal-500/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors duration-300"
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
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shimmer">
              Event Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Creating memorable experiences that bring people together and leave lasting impressions
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
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Process */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Event <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to creating exceptional events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glassmorphism-strong rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-green-400 mb-4">{process.step}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
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
              Event <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive event management solutions for every occasion
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Past <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our successful events and memorable experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glassmorphism-strong rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="p-6">
                  <div className="text-green-400 text-sm font-semibold mb-2">{event.type}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-green-400" />
                      {event.attendees} attendees
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-green-400" />
                      {event.location}
                    </div>
                  </div>
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
              What our clients say about our event management services
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
                  <div className="text-green-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600/20 via-teal-500/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create <span className="text-gradient">Memorable Events</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's plan your next event and make it an unforgettable experience
            </p>
            <motion.button
              onClick={() => navigate('/')}
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Event
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventManagementPage;