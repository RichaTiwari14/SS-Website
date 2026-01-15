// SEOPage.jsx - Premium SEO Service Page
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SEOPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesOverview />
      <SEOFactorsSection />
      <ProcessSection />
      <ResultsSection />
      <CTASection />
    </div>
  );
};

// ============================================
// ✅ MOTION 3D IMAGE COMPONENT WITH SWING + PULSE
// ============================================
const Motion3DImage = ({ 
  src, 
  alt, 
  className, 
  delay = 0, 
  swing = false,
  swingIntensity = "gentle",
  pulse = true,
  pulseIntensity = "medium"
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const swingAnimations = {
    gentle: { rotateZ: [0, 2, -2, 1, -1, 0] },
    medium: { rotateZ: [0, 3, -3, 2, -2, 0] },
    strong: { rotateZ: [0, 5, -5, 3, -3, 0] },
  };

  const pulseAnimations = {
    subtle: [1, 1.02, 1, 1.01, 1],
    medium: [1, 1.03, 1, 1.02, 1],
    strong: [1, 1.05, 1, 1.03, 1],
  };

  const currentSwing = swingAnimations[swingIntensity] || swingAnimations.gentle;
  const currentPulse = pulseAnimations[pulseIntensity] || pulseAnimations.medium;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!imageError ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-contain object-bottom cursor-pointer"
          onError={() => setImageError(true)}
          animate={isHovered ? {
            scale: 1.1,
            rotateZ: 0,
          } : {
            ...(swing ? currentSwing : {}),
            scale: pulse ? currentPulse : 1,
          }}
          transition={isHovered ? {
            duration: 0.3,
            ease: "easeOut"
          } : {
            rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transformOrigin: "bottom center",
          }}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-end pb-8">
          <motion.div
            animate={{ rotateZ: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformOrigin: "bottom center" }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#FF6A3D]/20 rounded-full flex items-center justify-center mb-4 border-2 border-[#FF6A3D]/30">
              <span className="text-5xl sm:text-6xl">🔍</span>
            </div>
          </motion.div>
          <p className="text-white/50 text-sm">SEO Services</p>
        </div>
      )}
    </motion.div>
  );
};

// ============================================
// 🔥 HERO SECTION - With 3 Rings + Swing + Pulse
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
                Search Engine Optimization
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
              Rank #1 On
              <br />
              <span className="text-[#FF6A3D]">Google</span>
              <br />
              Get Found
              <br />
              <span className="text-[#FF6A3D]">Organically</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              We strengthen your website's search presence through structured 
              optimization, relevant content, and technical improvements that 
              help your brand get discovered organically.
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
                Get Free SEO Audit 🔍
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
                { number: "500+", label: "Keywords Ranked" },
                { number: "300%", label: "Traffic Growth" },
                { number: "100+", label: "Clients Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-[#DFDFDF]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image with 3 ROUND RINGS + SWING + PULSE */}
           <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                  className="order-1 lg:order-2 relative flex items-center justify-center"
                >
                  {/* Container - Change size here */}
                  <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px]">
                    
               
              
                      
                      {/* Dot on Ring 2 */}
                   
                
                 
                
                    {/* ====== IMAGE CONTAINER (Square/Circle) ====== */}
                  
                
                      {/* Your Image */}
                      <Motion3DImage
                        src="/services/seo.webp"
                        alt="Photography & Videography"
                        className="w-full h-full p-6"
                        delay={0.3}
                        pulse={true}  
                      />
                
                      {/* Small Floating Dots */}
                      
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
      icon: "🔍", 
      title: "Keyword Research", 
      description: "In-depth keyword analysis to find high-value, low-competition keywords that drive targeted traffic to your website." 
    },
    { 
      icon: "⚙️", 
      title: "Technical SEO", 
      description: "Optimize site speed, mobile-friendliness, crawlability, and fix technical issues that hurt your rankings." 
    },
    { 
      icon: "📝", 
      title: "On-Page SEO", 
      description: "Optimize meta tags, headings, content structure, and internal linking for better search visibility." 
    },
    { 
      icon: "🔗", 
      title: "Link Building", 
      description: "Build high-quality backlinks from authoritative websites to boost your domain authority." 
    },
    { 
      icon: "📍", 
      title: "Local SEO", 
      description: "Dominate local search results with Google Business Profile optimization and local citations." 
    },
    { 
      icon: "📊", 
      title: "SEO Analytics", 
      description: "Comprehensive reporting and analytics to track rankings, traffic, and ROI from SEO efforts." 
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
            Our SEO Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            Complete <span className="text-[#FF6A3D]">SEO</span> Solutions
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Everything you need to rank higher and drive organic traffic
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
// 📈 SEO FACTORS SECTION
// ============================================
const SEOFactorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const factors = [
    { icon: "🚀", name: "Page Speed", value: "< 3 sec", description: "Fast loading pages" },
    { icon: "📱", name: "Mobile First", value: "100%", description: "Mobile optimized" },
    { icon: "🔒", name: "SSL Security", value: "HTTPS", description: "Secure website" },
    { icon: "🏗️", name: "Site Structure", value: "Optimized", description: "Clean architecture" },
    { icon: "📄", name: "Content Quality", value: "E-E-A-T", description: "Expert content" },
    { icon: "🔗", name: "Backlinks", value: "Quality", description: "Authority links" },
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
            Ranking Factors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            What We <span className="text-[#FF6A3D]">Optimize</span>
          </h2>
          <p className="text-[#DFDFDF] text-lg max-w-2xl mx-auto">
            Key factors that determine your Google rankings
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {factors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-[#FF6A3D]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#FF6A3D]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">{factor.icon}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{factor.name}</h3>
              <p className="text-[#FF6A3D] font-semibold text-xs mb-1">{factor.value}</p>
              <p className="text-white/50 text-xs">{factor.description}</p>
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
    { step: "01", icon: "🔍", title: "Audit & Analysis", description: "Complete website and competitor analysis." },
    { step: "02", icon: "📋", title: "Strategy", description: "Custom SEO strategy based on your goals." },
    { step: "03", icon: "⚙️", title: "Optimization", description: "Implement on-page and technical fixes." },
    { step: "04", icon: "📈", title: "Monitor & Grow", description: "Track rankings and continuously improve." },
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
            Our SEO Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            How We <span className="text-[#FF6A3D]">Rank</span> You Higher
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
// 📊 RESULTS SECTION
// ============================================
const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { number: "500+", label: "Keywords on Page 1", icon: "🎯" },
    { number: "300%", label: "Avg Traffic Increase", icon: "📈" },
    { number: "100+", label: "Businesses Ranked", icon: "🏢" },
    { number: "10M+", label: "Organic Visitors", icon: "👥" },
  ];

  const tools = [
    { name: "Google Search Console", icon: "🔍" },
    { name: "Google Analytics", icon: "📊" },
    { name: "SEMrush", icon: "📈" },
    { name: "Ahrefs", icon: "🔗" },
    { name: "Moz", icon: "🎯" },
    { name: "Screaming Frog", icon: "🐸" },
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
            Proven <span className="text-[#FF6A3D]">SEO Results</span>
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

        {/* Tools We Use */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-[#0B1C33] mb-8">Tools We Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm"
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="font-medium text-[#0B1C33]">{tool.name}</span>
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
            animate={{ rotateZ: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformOrigin: "bottom center" }}
            className="text-6xl mb-6"
          >
            🔍
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6">
            Ready to <span className="text-[#FF6A3D]">Rank #1</span>
            <br />
            on Google?
          </h2>
          
          <p className="text-[#555555] text-lg mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover how we can help your business 
            rank higher and drive more organic traffic.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get Free SEO Audit →
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
              <span className="text-[#FF6A3D]">✓</span> Free Website Audit
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> No Long-Term Contracts
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Monthly Reports
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOPage;