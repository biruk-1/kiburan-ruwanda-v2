import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import TechInnovationPage from './pages/TechInnovationPage';
import DesignExcellencePage from './pages/DesignExcellencePage';
import EventManagementPage from './pages/EventManagementPage';
import StrategyMarketingPage from './pages/StrategyMarketingPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F5F5] overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#1E3B8A]/20 to-[#2A4A9F]/20 rounded-full blur-[100px]"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-br from-[#1A2F2F]/15 to-[#1E3B8A]/15 rounded-full blur-[80px]"
          animate={{
            y: [0, 50, 0],
            x: [0, -25, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-[#1E3B8A]/15 to-[#2A4A9F]/15 rounded-full blur-[120px]"
          animate={{
            y: [0, -35, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-[#1A2F2F]/20 to-[#1E3B8A]/20 rounded-full blur-[90px]"
          animate={{
            y: [0, 45, 0],
            x: [0, -30, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional subtle background elements */}
        <div className="absolute inset-0 bg-[#1A1A1A]/50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/20 to-[#1A1A1A]/80" />
      </div>

      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/tech-innovation" element={<TechInnovationPage />} />
        <Route path="/services/design-excellence" element={<DesignExcellencePage />} />
        <Route path="/services/event-management" element={<EventManagementPage />} />
        <Route path="/services/strategy-marketing" element={<StrategyMarketingPage />} />
      </Routes>
    </div>
  );
}

export default App;