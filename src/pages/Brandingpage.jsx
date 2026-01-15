// BrandingStrategyPage.jsx - Premium Branding & Strategy Page
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const BrandingStrategyPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesOverview />
      <BrandElementsSection />
      <ProcessSection />
      <WhyBrandingSection />
      <CTASection />
    </div>
  );
};

// ============================================
// ✅ MOTION 3D IMAGE COMPONENT WITH SWING
// ============================================
const Motion3DImage = ({ 
  src, 
  alt, 
  className, 
  delay = 0, 
  swing = false,
  swingIntensity = "gentle",
  pulse = true  // 👈 New prop for continuous scale
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const swingAnimations = {
    gentle: {
      animate: { rotateZ: [0, 2, -2, 1, -1, 0] },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    },
    medium: {
      animate: { rotateZ: [0, 3, -3, 2, -2, 0] },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    strong: {
      animate: { rotateZ: [0, 5, -5, 3, -3, 0] },
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
    },
  };

  const currentSwing = swingAnimations[swingIntensity] || swingAnimations.gentle;

  // Combined animation: swing + pulse (scale)
  const combinedAnimation = {
    ...(swing ? currentSwing.animate : {}),
    scale: pulse ? [1, 1.03, 1, 1.02, 1] : 1, // 👈 Continuous scale pulse
  };

  const combinedTransition = {
    rotateZ: swing ? currentSwing.transition : {},
    scale: pulse ? { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    } : {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1.48 }}
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
            scale: 1.08, // 👈 Bigger on hover
            rotateZ: 0,
          } : combinedAnimation}
          transition={isHovered ? {
            duration: 0.3,
            ease: "easeOut"
          } : combinedTransition}
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
              <span className="text-5xl sm:text-6xl">🎨</span>
            </div>
          </motion.div>
          <p className="text-white/50 text-sm">Your Brand Image</p>
        </div>
      )}
    </motion.div>
  );
};
// ============================================
// 🔥 HERO SECTION - With 3 Rings + Swing
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
                Branding & Strategy
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
              Build A
              <br />
              <span className="text-[#FF6A3D]">Brand</span> That
              <br />
              People
              <br />
              <span className="text-[#FF6A3D]">Remember</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              We help define your brand positioning, tone of voice, and creative 
              direction so your brand communicates with purpose and stays consistent 
              across all touchpoints.
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
                Build Your Brand 🎨
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              >
                View Portfolio
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
                { number: "150+", label: "Brands Created" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-[#DFDFDF]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image with 3 ROUND RINGS + SWING */}
       <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
         className="order-1 lg:order-2 relative flex items-center justify-center"
       >
         {/* Container - Change size here */}
         <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
           
           {/* ====== RING 1 - Outermost (Orange, Clockwise) ====== */}
           <motion.div
             className="absolute inset-[-40px] sm:inset-[-50px] md:inset-[-60px] rounded-full border-[3px] border-[#FF6A3D]/40"
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           >
             {/* Dot on Ring 1 */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6A3D] rounded-full" />
           </motion.div>
       
           {/* ====== RING 2 - Middle (Blue, Counter-Clockwise) ====== */}
           <motion.div
             className="absolute inset-[-20px] sm:inset-[-25px] md:inset-[-30px] rounded-full border-[2px] border-dashed border-[#0052CC]/50"
             animate={{ rotate: -360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           >
             
             {/* Dot on Ring 2 */}
             <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0052CC] rounded-full" />
           </motion.div>
       
           {/* ====== RING 3 - Inner (Orange, Clockwise, Slower) ====== */}
           <motion.div
             className="absolute inset-[-5px] sm:inset-[-8px] md:inset-[-10px] rounded-full border-[2px] border-[#FF6A3D]/60"
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           >
             {/* Dot on Ring 3 */}
            
           </motion.div>
       
           {/* ====== IMAGE CONTAINER (Square/Circle) ====== */}
             
             {/* Grid Pattern */}
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
       
             {/* Your Image */}
             <Motion3DImage
               src="/services/brand&strategy.png"
               alt="Photography & Videography"
               className="w-full h-full p-6"
               delay={0.3}
               pulse={true}  
             />
       
             {/* Small Floating Dots */}
             <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6A3D] rounded-full" />
             <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#0052CC] rounded-full" />
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
      title: "Brand Strategy", 
      description: "Define your brand's purpose, vision, mission, and unique value proposition that sets you apart from competitors." 
    },
    { 
      icon: "🎨", 
      title: "Visual Identity", 
      description: "Create a cohesive visual system including logo, colors, typography, and design elements that represent your brand." 
    },
    { 
      icon: "✍️", 
      title: "Brand Voice & Messaging", 
      description: "Develop a consistent tone of voice and messaging framework that resonates with your target audience." 
    },
    { 
      icon: "📖", 
      title: "Brand Guidelines", 
      description: "Comprehensive brand book with rules and guidelines to maintain consistency across all touchpoints." 
    },
    { 
      icon: "🔄", 
      title: "Brand Refresh", 
      description: "Modernize and revitalize your existing brand while maintaining its core equity and recognition." 
    },
    { 
      icon: "📊", 
      title: "Brand Audit", 
      description: "In-depth analysis of your current brand positioning, perception, and opportunities for improvement." 
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
            Complete <span className="text-[#FF6A3D]">Branding</span> Solutions
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            From strategy to execution, we build brands that connect and convert
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
// 🎨 BRAND ELEMENTS SECTION
// ============================================
const BrandElementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const elements = [
    { icon: "✨", name: "Logo Design", description: "Memorable, versatile logos" },
    { icon: "🎨", name: "Color Palette", description: "Strategic color selection" },
    { icon: "🔤", name: "Typography", description: "Font pairing & hierarchy" },
    { icon: "📐", name: "Design System", description: "Consistent UI elements" },
    { icon: "🖼️", name: "Imagery Style", description: "Photo & illustration guidelines" },
    { icon: "📝", name: "Brand Voice", description: "Tone & messaging style" },
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
            Brand Elements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Everything Your <span className="text-[#FF6A3D]">Brand Needs</span>
          </h2>
          <p className="text-[#DFDFDF] text-lg max-w-2xl mx-auto">
            Comprehensive brand identity elements for a complete brand experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {elements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-[#FF6A3D]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#FF6A3D]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{element.icon}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{element.name}</h3>
              <p className="text-white/50 text-xs">{element.description}</p>
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
    { step: "01", icon: "🔍", title: "Discovery", description: "Understand your business, audience, and goals." },
    { step: "02", icon: "📋", title: "Strategy", description: "Define positioning, messaging, and brand architecture." },
    { step: "03", icon: "🎨", title: "Design", description: "Create visual identity and brand elements." },
    { step: "04", icon: "📖", title: "Guidelines", description: "Deliver comprehensive brand guidelines." },
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
            How We <span className="text-[#FF6A3D]">Build</span> Brands
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
// 💡 WHY BRANDING SECTION
// ============================================
const WhyBrandingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: "🎯", title: "Clear Positioning", description: "Stand out from competitors with unique brand identity" },
    { icon: "🤝", title: "Build Trust", description: "Professional branding builds credibility and trust" },
    { icon: "💰", title: "Premium Pricing", description: "Strong brands can command higher prices" },
    { icon: "❤️", title: "Customer Loyalty", description: "Emotional connection creates loyal customers" },
    { icon: "📈", title: "Business Growth", description: "Consistent branding drives business growth" },
    { icon: "🌟", title: "Recognition", description: "Become instantly recognizable in your market" },
  ];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
              Why Branding Matters
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6">
              A Strong Brand Is Your
              <br />
              <span className="text-[#FF6A3D]">Best Investment</span>
            </h2>
            <p className="text-[#555555] text-lg mb-8 leading-relaxed">
              Your brand is more than just a logo. It's the complete experience 
              people have with your business. A well-crafted brand strategy 
              creates lasting impressions and drives business results.
            </p>

            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Start Your Brand Journey →
            </motion.button>
          </motion.div>

          {/* Right - Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-[#F8F9FA] rounded-xl p-4 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl mb-2 block">{benefit.icon}</span>
                <h4 className="text-[#0B1C33] font-bold text-sm mb-1">{benefit.title}</h4>
                <p className="text-[#555555] text-xs">{benefit.description}</p>
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
            🎨
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6">
            Ready to Build a
            <br />
            <span className="text-[#FF6A3D]">Memorable Brand?</span>
          </h2>
          
          <p className="text-[#555555] text-lg mb-8 max-w-2xl mx-auto">
            Let's create a brand identity that tells your story and connects with your audience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get Brand Consultation →
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
              <span className="text-[#FF6A3D]">✓</span> Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Full Brand Package
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Unlimited Revisions
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingStrategyPage;