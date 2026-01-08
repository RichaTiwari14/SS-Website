// AboutSection.jsx
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";

// 🎯 3D Image Component with Advanced Motion
const Motion3DImage = ({ src, alt, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, delay, ease: "easeOut" }
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className={`relative ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-20 h-20 bg-[#FF6A3D]/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-16 h-16 bg-[#0052CC]/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.div>
  );
};

// 📝 Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ✅ Feature Item Component
const FeatureItem = ({ icon, text, index }) => {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 5 }}
    >
      <motion.span 
        className="w-6 h-6 bg-[#FF6A3D]/10 text-[#FF6A3D] rounded-full flex items-center justify-center text-sm font-bold"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.span>
      <span 
        className="text-[#0B1C33] font-medium text-sm"
        style={{ fontFamily: 'Aeonik, sans-serif' }}
      >
        {text}
      </span>
    </motion.div>
  );
};

// 🎨 Background Elements Component
const BackgroundElements = () => {
  return (
    <>
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-[#FF6A3D]/5 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-[#0052CC]/5 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Geometric Patterns */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-[#FF6A3D] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-10 w-3 h-3 bg-[#0052CC] rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      />
    </>
  );
};

// 🏢 Main About Section Component
const About = () => {
  const features = [
    { icon: "✓", text: "Strategy First" },
    { icon: "✓", text: "Data-Driven" },
    { icon: "✓", text: "Creative Excellence" },
    { icon: "✓", text: "Measurable Results" }
  ];

  return (
    <section id="about" className="relative z-10 bg-white py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - 3D Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Motion3DImage
              src="/banner4-Photoroom.png"
              alt="About Us 3D"
              className="w-full h-[400px] md:h-[450px]"
            />
          </motion.div>

          {/* Right Side - Content */}
          <AnimatedSection delay={0.2}>
            {/* Badge */}
            <motion.span 
              className="inline-block text-[#FF6A3D] font-medium text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: 'Aeonik, sans-serif' }}
            >
              About Us
            </motion.span>

            {/* Main Heading */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1C33] mb-6 leading-tight" 
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.span 
                className="text-[#FF6A3D]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Branding
              </motion.span> ho ya{" "}
              <motion.span 
                className="text-[#0052CC]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                marketing
              </motion.span>
              <br />
              <span className="bg-gradient-to-r from-[#FF6A3D] to-[#0052CC] bg-clip-text text-transparent">
                spark toh hona hi chahiye.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-[#555555] text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'Aeonik, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Social Spark India is a 360° digital marketing agency focused on building strong, 
              future-ready brands. We work closely with businesses to understand their goals, 
              audience, and challenges, and craft strategies that balance creativity with clarity. 
              Every decision we take is intentional, measurable, and designed to support long-term brand growth.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {features.map((item, i) => (
                <FeatureItem key={i} {...item} index={i} />
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 82, 204, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0052CC] hover:bg-[#003d99] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#0052CC]/20 transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: 'Aeonik, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Know More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DFDFDF] to-transparent" />
    </section>
  );
};

export default About;