import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, BarChart3, Users, Star, CheckCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrategyMarketingPage = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const marketingProcess = [
    {
      step: '01',
      title: 'Research',
      description: 'Market analysis and competitor research',
      icon: Target,
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Developing comprehensive marketing strategy',
      icon: TrendingUp,
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Executing campaigns across multiple channels',
      icon: Users,
    },
    {
      step: '04',
      title: 'Analysis',
      description: 'Performance tracking and optimization',
      icon: BarChart3,
    },
  ];

  const successStories = [
    {
      client: 'Tech Startup',
      challenge: 'Low brand awareness and lead generation',
      solution: 'Comprehensive digital marketing campaign',
      results: [
        '300% increase in website traffic',
        '150% boost in lead generation',
        '200% growth in social media following',
      ],
      roi: '400%',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      client: 'E-commerce Business',
      challenge: 'Poor conversion rates and high cart abandonment',
      solution: 'Conversion optimization and retargeting campaigns',
      results: [
        '85% increase in conversion rate',
        '60% reduction in cart abandonment',
        '250% improvement in ROAS',
      ],
      roi: '350%',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
    {
      client: 'Local Restaurant Chain',
      challenge: 'Declining foot traffic and online presence',
      solution: 'Local SEO and social media marketing',
      results: [
        '180% increase in online orders',
        '120% growth in foot traffic',
        '90% improvement in local search ranking',
      ],
      roi: '280%',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    },
  ];

  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies',
      features: ['SEO Optimization', 'PPC Campaigns', 'Email Marketing', 'Marketing Automation'],
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engaging social media presence and campaigns',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Advertising'],
    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Strategic content creation and distribution',
      features: ['Content Planning', 'Blog Writing', 'Video Production', 'Graphic Design'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and performance tracking',
      features: ['Performance Analytics', 'ROI Tracking', 'Custom Dashboards', 'Monthly Reports'],
    },
  ];

  const tools = [
    'Google Analytics', 'Google Ads', 'Facebook Ads Manager', 'HubSpot',
    'Mailchimp', 'Hootsuite', 'SEMrush', 'Canva', 'Adobe Creative Suite',
    'WordPress', 'Shopify', 'Salesforce'
  ];

  const testimonials = [
    {
      name: 'Alice Uwimana',
      company: 'Rwanda Tech Hub',
      rating: 5,
      text: 'Kiburan transformed our digital presence completely. Our lead generation increased by 300% in just 6 months.',
    },
    {
      name: 'Patrick Nzeyimana',
      company: 'Green Valley Foods',
      rating: 5,
      text: 'Their strategic approach to marketing helped us reach new markets and increase sales by 250%. Highly recommended!',
    },
    {
      name: 'Marie Mukamana',
      company: 'Fashion Forward',
      rating: 5,
      text: 'Professional, data-driven, and results-focused. They helped us build a strong online brand presence.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Campaigns Launched' },
    { number: '300%', label: 'Average ROI Increase' },
    { number: '25+', label: 'Brands Transformed' },
    { number: '2M+', label: 'Impressions Generated' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-500/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center text-orange-400 hover:text-orange-300 mb-8 transition-colors duration-300"
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
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shimmer">
              Strategic Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Data-driven marketing strategies that drive growth, engagement, and measurable results
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
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Marketing <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to creating effective marketing strategies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glassmorphism-strong rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-orange-400 mb-4">{process.step}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
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
              Marketing <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive marketing solutions to grow your business
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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Tools & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use industry-leading tools to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-4 text-center hover:scale-105 transition-all duration-300"
              >
                <span className="text-white font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our marketing campaigns
            </p>
          </motion.div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glassmorphism-strong rounded-3xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{story.client}</h3>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-orange-400 mb-2">Challenge:</h4>
                      <p className="text-gray-300 mb-4">{story.challenge}</p>
                      <h4 className="text-lg font-semibold text-orange-400 mb-2">Solution:</h4>
                      <p className="text-gray-300">{story.solution}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-orange-400 mb-3">Results:</h4>
                      <div className="space-y-2">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                      <span className="text-white font-bold">ROI: {story.roi}</span>
                    </div>
                  </div>
                  <div className="h-64 md:h-80 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${story.image})` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
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
              What our clients say about our marketing services
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
                  <div className="text-orange-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600/20 via-red-500/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-gradient">Grow Your Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a marketing strategy that drives real results
            </p>
            <motion.button
              onClick={() => navigate('/')}
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Marketing Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategyMarketingPage;