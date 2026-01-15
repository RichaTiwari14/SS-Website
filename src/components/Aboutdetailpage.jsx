// AboutPage.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <FounderSection />
      <TeamSection />
      <AwardsSection />
      <TimelineSection />
      <StatsSection />
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
      {!imageError ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <motion.div
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF6A3D]/20 to-[#0052CC]/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-6xl sm:text-7xl md:text-8xl">👥</div>
        </motion.div>
      )}
    </motion.div>
  );
};

// ============================================
// 🔥 HERO SECTION
// ============================================
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] bg-[#0B1C33] overflow-hidden flex items-center"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#FF6A3D]/10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-[350px] sm:w-[500px] lg:w-[600px] h-[350px] sm:h-[500px] lg:h-[600px] bg-[#0052CC]/10 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
            >
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
              <span className="text-[#FF6A3D] text-xs sm:text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6"
            >
              Your Trusted
              <br />
              <span className="text-[#FF6A3D]">Digital Marketing</span>
              <br />
              <span className="text-[#92EBF9]">Partner</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Founded in 2019, Social Spark India has been at the forefront of digital innovation, 
              helping businesses transform their online presence and achieve remarkable growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#team"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Meet Our Team 👥
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center lg:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12"
            >
              {[
                { number: "5+", label: "Years" },
                { number: "150+", label: "Projects" },
                { number: "100+", label: "Clients" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-[#DFDFDF]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px]">
              
              {/* Main Image Container */}
              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Placeholder - Replace with actual team image */}
                <Motion3DImage
                  src="/about/team-hero.jpg"
                  alt="Social Spark India Team"
                  className="w-full h-full"
                  delay={0.3}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33]/80 via-transparent to-transparent" />

                {/* Badge on Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6A3D] rounded-xl flex items-center justify-center">
                        <span className="text-xl sm:text-2xl">🏆</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm sm:text-base">5+ Years</p>
                        <p className="text-white/70 text-xs sm:text-sm">Of Excellence</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-[#FF6A3D]/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#FF6A3D]/30 hidden sm:flex"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl sm:text-3xl">✨</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-[#0052CC]/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#0052CC]/30 hidden sm:flex"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-2xl sm:text-3xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 👥 WHO WE ARE SECTION
// ============================================
const WhoWeAreSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3]">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/10 to-[#0052CC]/10 flex items-center justify-center">
                <img 
                  src="/about/who-we-are.jpg" 
                  alt="Who We Are"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center">
                  <span className="text-6xl sm:text-8xl">👥</span>
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#FF6A3D] text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl"
              >
                <p className="text-2xl sm:text-3xl font-black">2019</p>
                <p className="text-xs sm:text-sm opacity-90">Founded</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#FF6A3D] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 block">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0B1C33] mb-4 sm:mb-6">
              Your Trusted <span className="text-[#FF6A3D]">Digital Marketing</span> Partner
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-[#555555] text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                Founded in 2019, Social Spark India has been at the forefront of digital innovation, 
                helping businesses transform their online presence and achieve remarkable growth.
              </p>
              <p>
                Our approach combines creativity with data-driven strategies to deliver results that matter.
              </p>
              <p>
                What sets us apart is our commitment to understanding each client's unique needs.
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#F8F9FA] rounded-xl sm:rounded-2xl border-l-4 border-[#FF6A3D]"
            >
              <p className="text-[#0B1C33] font-medium text-sm sm:text-base lg:text-lg italic">
                ✨ "We don't just market your brand — we help you build a legacy."
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-6 sm:mt-8"
            >
              {[
                { icon: "🎯", text: "Result Driven" },
                { icon: "💡", text: "Innovative Ideas" },
                { icon: "🤝", text: "Client Focused" },
                { icon: "📈", text: "Data Driven" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-[#0B1C33] font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 🎯 MISSION & VISION SECTION
// ============================================
const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0B1C33] py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A3D]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="text-[#FF6A3D] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 block">
            Our Purpose
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
            Mission & <span className="text-[#FF6A3D]">Vision</span>
          </h2>
          <p className="text-[#DFDFDF] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Guiding principles that drive everything we do
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-[#FF6A3D]/30 transition-all duration-300"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FF6A3D]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🎯</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
              To empower businesses with innovative digital solutions that drive measurable growth and lasting success.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-[#0052CC]/30 transition-all duration-300"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0052CC]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🔭</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
              To be India's most trusted digital marketing partner, known for creativity, results, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 💎 CORE VALUES SECTION
// ============================================
const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: "💡", title: "Innovation", description: "Embracing latest digital trends and technologies", color: "#FF6A3D" },
    { icon: "⭐", title: "Quality", description: "Delivering premium work that exceeds expectations", color: "#0052CC" },
    { icon: "👁️", title: "Transparency", description: "Clear communication and honest dealings", color: "#6A00F3" },
    { icon: "🎯", title: "Results", description: "Focus on measurable outcomes for clients", color: "#1B7A6C" },
    { icon: "🤝", title: "Partnership", description: "Building long-term client relationships", color: "#D71329" },
  ];

  return (
    <section ref={ref} className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="text-[#FF6A3D] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 block">
            What We Believe
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1C33] mb-3 sm:mb-4">
            Our Core <span className="text-[#FF6A3D]">Values</span>
          </h2>
          <p className="text-[#555555] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            The principles that guide our work and relationships
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div 
                className="h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:shadow-xl text-center"
                style={{
                  backgroundColor: `${value.color}08`,
                  borderColor: `${value.color}20`,
                }}
              >
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: value.color }}
                >
                  <span className="text-xl sm:text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1C33] mb-2">{value.title}</h3>
                <p className="text-[#555555] text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 👑 FOUNDER SECTION
// ============================================
const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#F8F9FA] py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="text-[#FF6A3D] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 block">
            👑 Meet Our Founder
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1C33]">
            Vibha <span className="text-[#FF6A3D]">Rajpoot</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]">
              
              {/* Main Image */}
              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="/about/founder-vibha.jpg" 
                  alt="Vibha Rajpoot - Founder & CEO"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/20 to-[#0052CC]/20 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl">👩‍💼</span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33]/80 via-transparent to-transparent" />

                {/* Name Badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl">Vibha Rajpoot</h3>
                  <p className="text-white/80 text-sm">Founder & CEO</p>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#FF6A3D] text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl"
              >
                <p className="text-xl sm:text-2xl font-black">8+</p>
                <p className="text-xs opacity-90">Years Exp</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <span className="text-[#FF6A3D] text-xs sm:text-sm font-medium">Founder & Chief Executive Officer</span>
            </div>

            <div className="space-y-4 sm:space-y-5 text-[#555555] text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                With over <span className="font-bold text-[#0B1C33]">8 years of experience</span> in digital marketing and brand strategy, 
                Vibha founded Social Spark India with a vision to democratize digital marketing.
              </p>
              <p>
                Her journey began with a simple belief: <span className="font-bold text-[#0B1C33]">every business deserves access 
                to high-quality digital marketing services.</span>
              </p>
              <p>
                Under her leadership, Social Spark India has grown to a team of <span className="font-bold text-[#0B1C33]">15+ professionals</span>, 
                serving over <span className="font-bold text-[#0B1C33]">100 clients</span>.
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#0B1C33] rounded-xl sm:rounded-2xl"
            >
              <p className="text-white font-medium text-sm sm:text-base lg:text-lg italic">
                "Success is not just about growing your business; it's about growing together with your clients."
              </p>
              <p className="text-[#FF6A3D] text-sm mt-3">— Vibha Rajpoot</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex gap-3 mt-6"
            >
              {[
                { icon: "💼", link: "#", color: "#0A66C2" },
                { icon: "📸", link: "#", color: "#E4405F" },
                { icon: "🐦", link: "#", color: "#1DA1F2" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <span className="text-lg sm:text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 👥 TEAM SECTION
// ============================================

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    { id: 1, name: "Vibha Rajpoot", role: "Founder & CEO", experience: "8+ Years", image: "/about/team/vibha.jpg" },
    { id: 2, name: "Rahul Sharma", role: "Marketing Head", experience: "6+ Years", image: "/about/team/rahul.jpg" },
    { id: 3, name: "Priya Patel", role: "Creative Director", experience: "7+ Years", image: "/about/team/priya.jpg" },
    { id: 4, name: "Amit Kumar", role: "Web Developer", experience: "5+ Years", image: "/about/team/amit.jpg" },
    { id: 5, name: "Sneha Gupta", role: "Content Strategist", experience: "4+ Years", image: "/about/team/sneha.jpg" },
    { id: 6, name: "Vikram Singh", role: "Social Media Manager", experience: "5+ Years", image: "/about/team/vikram.jpg" },
    { id: 7, name: "Neha Verma", role: "SEO Specialist", experience: "4+ Years", image: "/about/team/neha.jpg" },
    { id: 8, name: "Rohan Joshi", role: "Graphic Designer", experience: "3+ Years", image: "/about/team/rohan.jpg" },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orange Blob - Top Right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-[#FF6A3D]/[0.08] blur-[80px] sm:blur-[100px]"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blue Blob - Bottom Left */}
        <motion.div
          className="absolute -bottom-24 -left-24 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] rounded-full bg-[#0052CC]/[0.06] blur-[80px] sm:blur-[100px]"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ==================== SECTION HEADER ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full mb-5 sm:mb-6"
          >
            <motion.span 
              className="w-2 h-2 bg-[#FF6A3D] rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[#FF6A3D] text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Our Team
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#0B1C33] mb-4 sm:mb-5 leading-tight"
            style={{ fontFamily: 'Aeonik, sans-serif' }}
          >
            Meet The{' '}
            <span className="bg-gradient-to-r from-[#FF6A3D] to-[#FF8F6A] bg-clip-text text-transparent">
              Experts
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#555555] text-base sm:text-lg max-w-lg mx-auto leading-relaxed"
          >
            The creative minds behind your success
          </motion.p>
        </motion.div>

        {/* ==================== TEAM GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 1;
            const isHovered = hoveredCard === member.id;
            const isDimmed = hoveredCard !== null && hoveredCard !== member.id;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: isHovered ? -15 : 0,
                    scale: isHovered ? 1.02 : isDimmed ? 0.95 : 1,
                    opacity: isDimmed ? 0.5 : 1,
                    filter: isDimmed ? 'blur(2px)' : 'blur(0px)'
                  }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className={`
                    relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-center cursor-pointer overflow-hidden
                    border transition-all duration-500
                    ${isEven 
                      ? 'bg-[#EBF3FF] border-[#0052CC]/20 hover:border-[#0052CC] hover:shadow-[0_20px_50px_rgba(2,89,222,0.2)]' 
                      : 'bg-[#FFF5F2] border-[#FF6A3D]/20 hover:border-[#FF6A3D] hover:shadow-[0_20px_50px_rgba(253,102,73,0.2)]'
                    }
                    ${isHovered ? (isEven ? 'bg-[#E0EDFF]' : 'bg-[#FFEEE9]') : ''}
                  `}
                >
                  
                  {/* Top Accent Line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 ${isEven ? 'bg-gradient-to-r from-[#0052CC] to-[#4A90E2]' : 'bg-gradient-to-r from-[#FF6A3D] to-[#FF8F6A]'}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    style={{ transformOrigin: 'left' }}
                  />

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full pointer-events-none
                      ${isEven ? 'bg-[radial-gradient(circle,rgba(2,89,222,0.15)_0%,transparent_70%)]' : 'bg-[radial-gradient(circle,rgba(253,102,73,0.15)_0%,transparent_70%)]'}
                    `}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* ==================== PHOTO SECTION ==================== */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-5 sm:mb-6">
                    
                    {/* Photo Background Shape */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${isEven ? 'bg-[#A8C8FF]' : 'bg-[#FFB5A0]'}`}
                      animate={{
                        scale: isHovered ? 1.08 : 1,
                        backgroundColor: isHovered 
                          ? (isEven ? 'rgba(2, 89, 222, 0.3)' : 'rgba(253, 102, 73, 0.3)') 
                          : (isEven ? '#A8C8FF' : '#FFB5A0')
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Member Photo */}
                    <motion.div
                      className="relative w-full h-full rounded-full overflow-hidden z-10"
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback */}
                      <div 
                        className="hidden w-full h-full items-center justify-center text-4xl sm:text-5xl"
                        style={{ display: 'none' }}
                      >
                        👤
                      </div>
                    </motion.div>

                    {/* Experience Badge */}
                    <motion.div
                      className={`absolute bottom-1 right-1 px-2.5 sm:px-3 py-1.5 rounded-full shadow-lg z-20
                        ${isEven ? 'bg-[#EBF3FF] shadow-[0_4px_15px_rgba(2,89,222,0.2)]' : 'bg-[#FFF5F2] shadow-[0_4px_15px_rgba(253,102,73,0.2)]'}
                      `}
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        y: isHovered ? 0 : 10,
                        scale: isHovered ? 1 : 0.8
                      }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide
                        ${isEven ? 'text-[#0052CC]' : 'text-[#FF6A3D]'}
                      `}>
                        {member.experience}
                      </span>
                    </motion.div>
                  </div>

                  {/* ==================== INFO SECTION ==================== */}
                  <div className="relative z-10">
                    {/* Name */}
                    <motion.h4
                      className="text-base sm:text-lg lg:text-xl font-bold text-[#0B1C33] mb-1.5 transition-colors duration-300"
                      animate={{
                        color: isHovered ? (isEven ? '#0052CC' : '#FF6A3D') : '#0B1C33'
                      }}
                      style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                      {member.name}
                    </motion.h4>

                    {/* Role */}
                    <motion.p
                      className={`text-[10px] sm:text-xs font-semibold uppercase tracking-[1.5px] mb-4 ${isEven ? 'text-[#0052CC]/60' : 'text-[#FF6A3D]/60'}`}
                      animate={{ letterSpacing: isHovered ? '2px' : '1.5px' }}
                      transition={{ duration: 0.3 }}
                    >
                      {member.role}
                    </motion.p>

                    {/* Accent Line */}
                    <motion.div
                      className={`mx-auto h-[3px] rounded-full ${isEven ? 'bg-gradient-to-r from-[#0052CC] to-[#4A90E2]' : 'bg-gradient-to-r from-[#FF6A3D] to-[#FF8F6A]'}`}
                      animate={{ width: isHovered ? 80 : 40 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Bottom Gradient */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-24 pointer-events-none
                      ${isEven ? 'bg-gradient-to-t from-[#0052CC]/5 to-transparent' : 'bg-gradient-to-t from-[#FF6A3D]/5 to-transparent'}
                    `}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ==================== VIEW ALL BUTTON ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0B1C33] hover:bg-[#FF6A3D] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 inline-flex items-center gap-2"
          >
            View Full Team
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
// ============================================
// 🏆 AWARDS SECTION
// ============================================
const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    { icon: "🏆", title: "Best Digital Marketing Agency", org: "BNI India", year: "2024" },
    { icon: "🥇", title: "Top Referral Partner", org: "BNI Chapter", year: "2023" },
    { icon: "⭐", title: "Member Excellence Award", org: "BNI Network", year: "2023" },
    { icon: "🎖️", title: "Growth Champion", org: "BNI India", year: "2022" },
  ];

  return (
    <section ref={ref} className="bg-[#0B1C33] py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052CC]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="text-[#FF6A3D] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4 block">
            🏆 Recognition & Network
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
            Award-Winning & <span className="text-[#FF6A3D]">BNI Connected</span>
          </h2>
          <p className="text-[#DFDFDF] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Recognized for excellence and backed by the world's largest business referral network
          </p>
        </motion.div>

        {/* BNI Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-black text-[#D71329]">BNI</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">Givers Gain® Verified</h3>
              <p className="text-white/70 text-sm sm:text-base mb-4">Vibha Rajpoot - Digital Marketing Category</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white/60 text-xs sm:text-sm">
                <span>🤝 Trusted Referral Network</span>
                <span>🌍 76+ Countries, 300K+ Members</span>
                <span>💼 Quality Business Partnerships</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:border-[#FF6A3D]/30 transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl mb-3 block">{award.icon}</span>
              <h3 className="text-white font-bold text-sm sm:text-base mb-1">{award.title}</h3>
              <p className="text-[#FF6A3D] text-xs sm:text-sm font-medium">{award.org} • {award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 📅 TIMELINE SECTION
// ============================================





const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(null);

  const milestones = [
    { year: "2019", icon: "🚀", title: "Founded", desc: "Company started with a vision", color: "#FF6A3D" },
    { year: "2020", icon: "📈", title: "50 Clients", desc: "Reached first milestone", color: "#0052CC" },
    { year: "2021", icon: "🔧", title: "Expanded", desc: "Added new services", color: "#6A00F3" },
    { year: "2022", icon: "👥", title: "Team Grew", desc: "10+ team members", color: "#1B7A6C" },
    { year: "2023", icon: "🏆", title: "100+ Projects", desc: "Major success achieved", color: "#D71329" },
    { year: "2024", icon: "✨", title: "New Era", desc: "Expanding our reach", color: "#F4AD1F" },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#F8F9FA] overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FF6A3D]/[0.05] blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0052CC]/[0.05] blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-5 py-2.5 rounded-full text-[#FF6A3D] text-sm font-semibold mb-5"
          >
            <motion.span 
              className="w-2 h-2 bg-[#FF6A3D] rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Our Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C33] mb-4"
          >
            Company <span className="bg-gradient-to-r from-[#FF6A3D] to-[#FF8F6A] bg-clip-text text-transparent">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#555] text-base sm:text-lg max-w-lg mx-auto"
          >
            Key milestones in our growth story
          </motion.p>
        </motion.div>

        {/* ==================== DESKTOP TIMELINE ==================== */}
        <div className="hidden lg:block">
          
          {/* Timeline Container */}
          <div className="relative">
            
            {/* SVG Curved Path */}
            <svg 
              className="w-full h-[80px]"
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
            >
              {/* Shadow */}
              <motion.path
                d="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40"
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeWidth="30"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Background Line */}
              <motion.path
                d="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="16"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              
              {/* Gradient Line */}
              <motion.path
                d="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40"
                fill="none"
                stroke="url(#timelineGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
              />

              {/* Dashed Center */}
              <motion.path
                d="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
              />

              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6A3D" />
                  <stop offset="20%" stopColor="#0052CC" />
                  <stop offset="40%" stopColor="#6A00F3" />
                  <stop offset="60%" stopColor="#1B7A6C" />
                  <stop offset="80%" stopColor="#D71329" />
                  <stop offset="100%" stopColor="#F4AD1F" />
                </linearGradient>
              </defs>
            </svg>

            {/* Milestones Row - Positioned on curve */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-0">
              {milestones.map((milestone, index) => {
                const isActive = activeIndex === index;
                // Alternate Y position for wave effect
                const yOffset = index % 2 === 0 ? -15 : 15;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="relative flex flex-col items-center"
                    style={{ transform: `translateY(${yOffset}px)` }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {/* Circle on Line */}
                    <motion.div
                      className="relative z-20"
                      animate={{ 
                        scale: isActive ? 1.2 : 1,
                        y: isActive ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-14 h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center cursor-pointer border-4 border-white"
                        style={{ 
                          backgroundColor: milestone.color,
                          boxShadow: isActive 
                            ? `0 0 0 4px ${milestone.color}30, 0 10px 40px ${milestone.color}50` 
                            : `0 6px 20px ${milestone.color}40`
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-xl xl:text-2xl">{milestone.icon}</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Cards Row - Below the timeline */}
          <div className="flex justify-between mt-8">
            {milestones.map((milestone, index) => {
              const isActive = activeIndex === index;
              const isTop = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="w-[15%] flex flex-col items-center"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Connector Line */}
                  <motion.div
                    className="w-0.5 mb-3 "
                    style={{ 
                      backgroundColor: milestone.color,
                      height: isActive ? 40 : 25
                    }}
                    animate={{ height: isActive ? 40 : 25 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Year Badge */}
                  <motion.div
                    className="px-3 py-1 rounded-full mb-3 border-2"
                    style={{ 
                      backgroundColor: isActive ? milestone.color : 'white',
                      borderColor: milestone.color,
                      color: isActive ? 'white' : milestone.color
                    }}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                  >
                    <span className="text-xs font-bold">{milestone.year}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-white rounded-xl xl:rounded-2xl p-4 xl:p-5 shadow-lg border-2 transition-all duration-300 text-center w-full cursor-pointer -translate-x-4"
                    style={{ 
                      borderColor: isActive ? milestone.color : 'transparent',
                      boxShadow: isActive 
                        ? `0 20px 40px ${milestone.color}20` 
                        : '0 5px 20px rgba(0,0,0,0.06)'
                    }}
                    animate={{ 
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Small Icon */}
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: `${milestone.color}15` }}
                    >
                      <span className="text-lg">{milestone.icon}</span>
                    </div>

                    <h4 className="font-bold text-[#0B1C33] text-sm xl:text-base mb-1">{milestone.title}</h4>
                    <p className="text-[#555555] text-xs leading-relaxed">{milestone.desc}</p>

                    {/* Bottom Accent */}
                    <motion.div
                      className="h-1 rounded-full mt-3 mx-auto"
                      style={{ backgroundColor: milestone.color }}
                      animate={{ width: isActive ? 60 : 30 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==================== TABLET TIMELINE ==================== */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-7 left-0 right-0 h-2 bg-[#E5E7EB] rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6A3D] via-[#6A00F3] to-[#F4AD1F] rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {/* Milestones */}
            <div className="flex justify-between relative z-10">
              {milestones.map((milestone, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center w-[15%]"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {/* Circle */}
                    <motion.div
                      className="w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-lg cursor-pointer z-10"
                      style={{ 
                        backgroundColor: milestone.color,
                        boxShadow: isActive ? `0 0 25px ${milestone.color}50` : `0 5px 15px ${milestone.color}30`
                      }}
                      animate={{ scale: isActive ? 1.15 : 1 }}
                    >
                      <span className="text-xl">{milestone.icon}</span>
                    </motion.div>

                    {/* Connector */}
                    <div 
                      className="w-0.5 h-6 my-2"
                      style={{ backgroundColor: milestone.color }}
                    />

                    {/* Year */}
                    <div 
                      className="px-2 py-1 rounded-full text-xs font-bold mb-2"
                      style={{ backgroundColor: `${milestone.color}15`, color: milestone.color }}
                    >
                      {milestone.year}
                    </div>

                    {/* Card */}
                    <motion.div
                      className="bg-white rounded-xl p-3 shadow-lg text-center w-full border-2 "
                      style={{ borderColor: isActive ? milestone.color : 'transparent' }}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                    >
                      <h4 className="font-bold text-[#0B1C33] text-xs mb-1">{milestone.title}</h4>
                      <p className="text-[#555] text-[10px]">{milestone.desc}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================== MOBILE TIMELINE - VERTICAL ==================== */}
        <div className="md:hidden relative">
          
          {/* Vertical Curved Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#FF6A3D] via-[#6A00F3] to-[#F4AD1F] rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex items-start gap-4"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  {/* Circle - Sits on the line */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    animate={{ scale: isActive ? 1.15 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-xl cursor-pointer"
                      style={{ 
                        backgroundColor: milestone.color,
                        boxShadow: isActive 
                          ? `0 0 20px ${milestone.color}50, 0 8px 25px ${milestone.color}30` 
                          : `0 4px 15px ${milestone.color}30`
                      }}
                    >
                      <span className="text-lg">{milestone.icon}</span>
                    </div>
                  </motion.div>

                  {/* Card - Connected to circle */}
                  <motion.div 
                    className="flex-1 bg-white rounded-xl p-4 shadow-lg border-2 transition-all duration-300"
                    style={{ 
                      borderColor: isActive ? milestone.color : 'transparent',
                      boxShadow: isActive 
                        ? `0 15px 35px ${milestone.color}15` 
                        : '0 5px 20px rgba(0,0,0,0.06)'
                    }}
                    animate={{ 
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top Row - Year & Title */}
                    <div className="flex items-center gap-3 mb-2">
                      {/* Year Badge */}
                      <span 
                        className="px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: `${milestone.color}15`, color: milestone.color }}
                      >
                        {milestone.year}
                      </span>
                      <h4 className="font-bold text-[#0B1C33] text-base">{milestone.title}</h4>
                    </div>

                    <p className="text-[#555555] text-sm leading-relaxed">{milestone.desc}</p>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className="h-1 rounded-full mt-3"
                      style={{ backgroundColor: milestone.color }}
                      animate={{ width: isActive ? '100%' : '40%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==================== BOTTOM STATS ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="bg-[#0B1C33] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FF6A3D]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0052CC]/20 rounded-full blur-[100px]" />

            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: "5+", label: "Years of Growth", icon: "📅" },
                { number: "150+", label: "Projects Done", icon: "🚀" },
                { number: "100+", label: "Happy Clients", icon: "😊" },
                { number: "15+", label: "Team Members", icon: "👥" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center cursor-pointer"
                >
                  <motion.span 
                    className="text-2xl sm:text-3xl mb-2 block"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    {stat.icon}
                  </motion.span>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
// ============================================
// 📊 STATS SECTION
// ============================================
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: "🚀", number: "150+", label: "Projects Completed" },
    { icon: "😊", number: "100+", label: "Happy Clients" },
    { icon: "📅", number: "5+", label: "Years Experience" },
    { icon: "👥", number: "15+", label: "Team Members" },
    { icon: "🏭", number: "15+", label: "Industries Served" },
  ];

  return (
    <section ref={ref} className="bg-[#0B1C33] py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A3D]/5 to-[#0052CC]/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-[#FF6A3D] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block">
            📊 By The Numbers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Our <span className="text-[#FF6A3D]">Achievements</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-[#FF6A3D]/30 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1">{stat.number}</div>
              <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
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
    <section ref={ref} className="bg-white py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl sm:text-6xl mb-4 sm:mb-6"
          >
            🚀
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1C33] mb-4 sm:mb-6">
            Ready to Grow Your
            <br />
            <span className="text-[#FF6A3D]">Business?</span>
          </h2>

          <p className="text-[#555555] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and drive real results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch →
            </motion.a>

            <motion.a
              href="/services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#0B1C33] hover:bg-[#0B1C33] hover:text-white text-[#0B1C33] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
            >
              View Services
            </motion.a>
          </div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-[#555555] text-xs sm:text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Quick Response
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Expert Team
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;