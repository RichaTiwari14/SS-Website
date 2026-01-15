
// WebDevelopmentPage.jsx - FIXED VERSION
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";



const WebDevelopmentPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

// ============================================
// ✅ MOTION 3D IMAGE COMPONENT - ADD THIS!
// ============================================
const Motion3DImage = ({ src, alt, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className={className}
      style={{ perspective: "1000px" }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-contain"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
};

// ============================================
// 🔥 HERO SECTION - FIXED
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
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#0052CC]/10 rounded-full blur-[150px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
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
              <span 
                className="text-[#FF6A3D] text-sm font-medium uppercase tracking-wider"
                style={{ fontFamily: "Aeonik, sans-serif" }}
              >
                Web Development
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
              We Build{" "}
              <span className="text-[#FF6A3D]">Websites</span>
              <br />
              That Convert
              <br />
              <span className="text-[#FF6A3D]">Visitors</span> Into
              <br />
              Customers
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: "Aeonik, sans-serif" }}
            >
              From stunning designs to powerful functionality, we create 
              responsive, SEO-optimized websites that represent your brand 
              and drive real business results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-[#FF6A3D]/20"
                style={{ fontFamily: "Aeonik, sans-serif" }}
              >
                Start Your Project
                <span className="ml-2">→</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
                style={{ fontFamily: "Aeonik, sans-serif" }}
              >
                View Portfolio
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: "150+", label: "Websites Built" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#DFDFDF]/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer Rings */}
              <div className="absolute -inset-8 border-2 border-[#FF6A3D]/20 rounded-3xl" />
              <div className="absolute -inset-16 border border-[#0052CC]/10 rounded-[40px]" />

              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/10 to-[#0052CC]/10 rounded-3xl blur-2xl" />

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-[#0B1C33] to-[#1a2d47] border-2 border-white/10 rounded-3xl overflow-hidden">
                
                {/* ✅ FIXED: Using Motion3DImage correctly */}
                <Motion3DImage
                  src="/services/webdevelopment-Photoroom.png"  // ✅ Correct path for public folder
                  alt="Web Development"
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                  delay={0.3}
                />

                {/* Floating Dots */}
                <motion.div 
                  className="absolute top-6 right-6 w-3 h-3 bg-[#FF6A3D] rounded-full z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-8 left-8 w-2 h-2 bg-[#0052CC] rounded-full z-10"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-1/3 left-6 w-2 h-2 bg-white/30 rounded-full z-10"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>

              {/* Corner Accents */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF6A3D]/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#0052CC]/20 rounded-full blur-xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>

   
    </section>
  );
};


// ============================================
// 📋 SERVICES OVERVIEW SECTION
// ============================================
const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: "🎨",
      title: "Custom Web Design",
      description: "Unique, brand-focused designs that capture your identity and engage your audience from the first click.",
    },
    {
      icon: "⚡",
      title: "Fast & Responsive",
      description: "Lightning-fast websites optimized for all devices - mobile, tablet, and desktop with seamless experience.",
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help your website rank higher and attract organic traffic.",
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with SSL, regular backups, and 99.9% uptime guarantee.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and order tracking.",
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Integrated analytics to track visitor behavior, conversions, and website performance.",
    },
  ];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            What We Offer
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Complete <span className="text-[#FF6A3D]">Web Development</span> Solutions
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            From concept to launch, we handle every aspect of your web presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, isInView }) => {
  const cardColors = [
    "#FF6A3D", "#0052CC", "#0B1C33", "#D71329", "#6A00F3", "#1B7A6C"
  ];
  const color = cardColors[index % cardColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
    >
      <div 
        className="h-full p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl"
        style={{
          backgroundColor: `${color}08`,
          borderColor: `${color}20`,
        }}
      >
        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: color }}
        >
          <span className="text-2xl">{service.icon}</span>
        </div>

        {/* Title */}
        <h3 
          className="text-xl font-bold text-[#0B1C33] mb-3"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[#555555] leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

// ============================================
// 🔄 PROCESS SECTION
// ============================================
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your goals, target audience, and requirements to create a strategic roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Our designers create stunning mockups and interactive prototypes for your approval.",
    },
    {
      step: "03",
      title: "Development",
      description: "Clean, optimized code brings your design to life with all required functionality.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing across devices followed by a smooth, monitored launch.",
    },
  ];

  return (
    <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            How We <span className="text-[#FF6A3D]">Build</span> Your Website
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#FF6A3D]/50 to-transparent z-0" />
              )}

              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Step Number */}
                <div className="w-12 h-12 bg-[#FF6A3D] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B1C33] mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#555555] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ============================================
// ✨ FEATURES SECTION
// ============================================
const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Mobile-First Responsive Design",
    "Fast Loading Speed (< 3 seconds)",
    "SEO-Friendly Structure",
    "SSL Security Certificate",
    "Contact Form Integration",
    "Social Media Integration",
    "Google Analytics Setup",
    "Content Management System",
    "Cross-Browser Compatibility",
    "Free 1 Month Support",
  ];

  return (
    <section ref={ref} className="bg-[#0B1C33] py-20 sm:py-28 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052CC]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
              What's Included
            </span>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Everything You Need
              <br />
              <span className="text-[#FF6A3D]">In One Package</span>
            </h2>
            <p className="text-[#DFDFDF] text-lg mb-8 leading-relaxed">
              We don't believe in hidden costs. Our web development packages include 
              everything you need to launch and succeed online.
            </p>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get Free Quote →
            </motion.button>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <div className="w-6 h-6 bg-[#FF6A3D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
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
    <section ref={ref} className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Ready to Build Your
            <br />
            <span className="text-[#FF6A3D]">Dream Website?</span>
          </h2>
          
          <p className="text-[#555555] text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            Get a free consultation and quote today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Start Your Project →
            </motion.button>

            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#0B1C33] hover:bg-[#0B1C33] hover:text-white text-[#0B1C33] px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              📞 Call Now
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WebDevelopmentPage;