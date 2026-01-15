// InfluencerMarketingPage.jsx - Premium Influencer Marketing Page
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const InfluencerMarketingPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <InfluencerTypesSection />
      <ResultsSection />
      <CTASection />
    </div>
  );
};

// ============================================
// ✅ MOTION 3D IMAGE COMPONENT
// ============================================
const Motion3DImage = ({ src, alt, className, delay = 0 }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={className}
    >
      
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      
  
    </motion.div>
  );
};

// ============================================
// 🔥 HERO SECTION - With 3 Rings
// ============================================
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] bg-[#0B1C33] overflow-hidden flex items-center"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#FF6A3D]/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#0052CC]/10 rounded-full blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
              <span className="text-[#FF6A3D] text-sm font-medium uppercase tracking-wider">
                Influencer Marketing
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Connect With
              <br />
              <span className="text-[#FF6A3D]">Right Influencers</span>
              <br />
              Grow Your
              <br />
              <span className="text-[#92EBF9]">Brand</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              We connect your brand with influencers who align with your values 
              and audience, ensuring authentic visibility and meaningful engagement.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-[#FF6A3D]/20"
              >
                Start Campaign 🚀
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: "500+", label: "Influencers" },
                { number: "100+", label: "Campaigns" },
                { number: "50M+", label: "Reach" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-[#DFDFDF]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image with 3 ROUND RINGS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
<div className="relative w-[350px] h-[450px] sm:w-[400px] sm:h-[520px] md:w-[450px] md:h-[600px] lg:w-[500px] lg:h-[680px]">              
              {/* RING 1 - Outermost (Orange, Clockwise) */}
         
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />

                <Motion3DImage
                  src="/services/infulancer-Photoroom.png"
                  alt="Influencer Marketing"
                  
                  className="w-full h-full p-6"
                  delay={0.3}
                />

                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6A3D] rounded-full" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#0052CC] rounded-full" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// ============================================
// 📋 SERVICES OVERVIEW
// ============================================
const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { 
      icon: "🎯", 
      title: "Influencer Discovery", 
      description: "We find the perfect influencers who align with your brand values and target audience demographics." 
    },
    { 
      icon: "🤝", 
      title: "Campaign Strategy", 
      description: "Custom campaign strategies designed to maximize reach, engagement, and ROI for your brand." 
    },
    { 
      icon: "📊", 
      title: "Performance Tracking", 
      description: "Real-time analytics and detailed reports to measure campaign success and influencer performance." 
    },
    { 
      icon: "✍️", 
      title: "Content Collaboration", 
      description: "We work with influencers to create authentic, engaging content that resonates with their audience." 
    },
    { 
      icon: "📱", 
      title: "Multi-Platform Campaigns", 
      description: "Campaigns across Instagram, YouTube, Twitter, LinkedIn, and emerging platforms like Threads." 
    },
    { 
      icon: "💰", 
      title: "Budget Optimization", 
      description: "Maximize your marketing budget with data-driven influencer selection and negotiation." 
    },
  ];

  const cardColors = ["#FF6A3D", "#0052CC", "#6A00F3", "#1B7A6C", "#D71329", "#F4AD1F"];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            Complete <span className="text-[#FF6A3D]">Influencer Marketing</span> Solutions
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            End-to-end influencer marketing services to amplify your brand's voice
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div 
                className="h-full p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: `${cardColors[index]}08`,
                  borderColor: `${cardColors[index]}20`,
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: cardColors[index] }}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1C33] mb-3">{service.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 🔄 PROCESS SECTION
// ============================================
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { step: "01", icon: "🎯", title: "Define Goals", description: "Understand your brand objectives and target audience." },
    { step: "02", icon: "🔍", title: "Find Influencers", description: "Identify and vet the perfect influencers for your brand." },
    { step: "03", icon: "🤝", title: "Collaborate", description: "Coordinate content creation and campaign execution." },
    { step: "04", icon: "📈", title: "Analyze & Optimize", description: "Track performance and optimize for better results." },
  ];

  return (
    <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            How We <span className="text-[#FF6A3D]">Connect</span> Brands
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative w-28 h-28 mx-auto mb-6">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF6A3D]/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-3 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">{step.icon}</span>
                  <span className="text-[#FF6A3D] font-bold text-sm">{step.step}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0B1C33] mb-2">{step.title}</h3>
              <p className="text-[#555555] text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 👥 INFLUENCER TYPES SECTION
// ============================================
const InfluencerTypesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const influencerTypes = [
    { icon: "👑", name: "Mega Influencers", followers: "1M+ Followers", description: "Maximum reach for mass awareness" },
    { icon: "⭐", name: "Macro Influencers", followers: "100K-1M Followers", description: "Balance of reach and engagement" },
    { icon: "💎", name: "Micro Influencers", followers: "10K-100K Followers", description: "High engagement, niche audiences" },
    { icon: "🌟", name: "Nano Influencers", followers: "1K-10K Followers", description: "Authentic, hyper-local impact" },
    { icon: "🎭", name: "Celebrity Influencers", followers: "Bollywood & Sports", description: "Star power for brand prestige" },
    { icon: "💼", name: "Industry Experts", followers: "B2B & Professional", description: "Credibility in specific domains" },
  ];

  return (
    <section ref={ref} className="bg-[#0B1C33] py-20 sm:py-28 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052CC]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Influencer Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Access to <span className="text-[#FF6A3D]">All Types</span> of Influencers
          </h2>
          <p className="text-[#DFDFDF] text-lg max-w-2xl mx-auto">
            From nano to celebrity influencers, we have the right connections for your brand
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#FF6A3D]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#FF6A3D]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{type.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{type.name}</h3>
                  <p className="text-[#FF6A3D] text-sm font-medium mb-2">{type.followers}</p>
                  <p className="text-white/60 text-sm">{type.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ============================================
// 📊 RESULTS SECTION
// ============================================
const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { number: "500+", label: "Influencer Partners", icon: "👥" },
    { number: "100+", label: "Successful Campaigns", icon: "🎯" },
    { number: "50M+", label: "Total Reach", icon: "📢" },
    { number: "10x", label: "Average ROI", icon: "📈" },
  ];

  const platforms = [
    { name: "Instagram", icon: "📸", color: "#E4405F" },
    { name: "YouTube", icon: "▶️", color: "#FF0000" },
    { name: "Twitter/X", icon: "🐦", color: "#1DA1F2" },
    { name: "LinkedIn", icon: "💼", color: "#0077B5" },
    { name: "Facebook", icon: "👤", color: "#1877F2" },
    { name: "Threads", icon: "🧵", color: "#000000" },
  ];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Results Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            Proven <span className="text-[#FF6A3D]">Track Record</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-[#F8F9FA] rounded-2xl"
            >
              <span className="text-3xl mb-2 block">{result.icon}</span>
              <div className="text-3xl sm:text-4xl font-black text-[#0B1C33] mb-1">{result.number}</div>
              <div className="text-[#555555] text-sm">{result.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-[#0B1C33] mb-8">Platforms We Cover</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm"
              >
                <span className="text-xl">{platform.icon}</span>
                <span className="font-medium text-[#0B1C33]">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// ============================================
// 📞 CTA SECTION
// ============================================
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            🤝
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6">
            Ready to <span className="text-[#FF6A3D]">Amplify</span><br />
            Your Brand?
          </h2>
          
          <p className="text-[#555555] text-lg mb-8 max-w-2xl mx-auto">
            Let's connect you with the right influencers and create campaigns that deliver real results.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Start Your Campaign →
            </motion.button>

            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#0B1C33] hover:bg-[#0B1C33] hover:text-white text-[#0B1C33] px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              📞 Let's Talk
            </motion.a>
          </div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-[#555555] text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> No Hidden Fees
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Vetted Influencers
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> ROI Guaranteed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerMarketingPage;