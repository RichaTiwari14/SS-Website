// App.jsx - Complete Final Code
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, AnimatePresence } from "framer-motion";import banner3 from "../public/banner3-Photoroom.PNG"
import banner4 from "../public/banner4-Photoroom.png"
import banner7 from "../public/banner7.png"

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// 🎯 3D Image Component with Advanced Motion
const Motion3DImage = ({ src, alt, className = "", delay = 0 }) => {
  const ref = React.useRef(null);
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

// ⭐ Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);
    return () => document.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.img 
      src="/ss_icon.png" 
      alt=""
      animate={{ rotate: 360 }}
      transition={{ 
        duration: 2,
        repeat: Infinity, 
        ease: "linear" 
      }}
      style={{
        position: 'fixed',
        left: position.x + 20,
        top: position.y - 10,
        width: '40px',
        height: '40px',
        pointerEvents: 'none',
        zIndex: 999999,
        opacity: 1,
      }}
    />
  );
};

// Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = React.useRef(null);
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

// Service Card Component
const ServiceCard = ({ icon, title, description, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { delay: index * 0.1, duration: 0.5 }
      } : {}}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 40px rgba(255, 106, 61, 0.2)",
        transition: { duration: 0.3 }
      }}
      className="group relative bg-white rounded-xl p-8 shadow-lg transition-all duration-500 border border-[#DFDFDF]/50 hover:border-[#FF6A3D]/30 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/0 to-[#0052CC]/0"
        whileHover={{ 
          background: "linear-gradient(to bottom right, rgba(255, 106, 61, 0.05), rgba(0, 82, 204, 0.05))" 
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="relative w-14 h-14 bg-gradient-to-br from-[#FF6A3D] to-[#FF6A3D]/80 rounded-xl flex items-center justify-center mb-6"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-2xl text-white">{icon}</span>
      </motion.div>
      
      <h3 className="relative text-xl font-bold text-[#0B1C33] mb-3 tracking-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        {title}
      </h3>
      <p className="relative text-[#555555] leading-relaxed text-sm" style={{ fontFamily: 'Aeonik, sans-serif' }}>
        {description}
      </p>
      
      <motion.div 
        className="relative mt-6 flex items-center text-[#FF6A3D] font-medium text-sm"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span>Learn More</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

// Stats Card
const StatCard = ({ number, label, suffix = "" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(number);
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div 
      ref={ref}
      variants={scaleIn}
      className="text-center p-6"
    >
      <motion.div 
        className="text-5xl md:text-6xl font-black text-white mb-2" 
        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
        animate={isInView ? { scale: [0.5, 1.1, 1] } : {}}
        transition={{ duration: 0.5 }}
      >
        {count}<span className="text-[#FF6A3D]">{suffix}</span>
      </motion.div>
      <p className="text-[#DFDFDF] text-sm uppercase tracking-wider" style={{ fontFamily: 'Aeonik, sans-serif' }}>
        {label}
      </p>
    </motion.div>
  );
};

// Testimonial Card
const TestimonialCard = ({ quote, author, role, company, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-[#DFDFDF]/30 hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A3D] to-[#FF6A3D]/70 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-[#0B1C33] text-lg leading-relaxed mb-6" style={{ fontFamily: 'Aeonik, sans-serif' }}>
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4">
        <motion.div 
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0052CC] to-[#0B1C33] flex items-center justify-center text-white font-bold"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {author.charAt(0)}
        </motion.div>
        <div>
          <h4 className="font-bold text-[#0B1C33]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{author}</h4>
          <p className="text-[#555555] text-sm">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Process Step Component
const ProcessStep = ({ number, title, description, isLast = false }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          className="w-12 h-12 bg-gradient-to-br from-[#FF6A3D] to-[#FF6A3D]/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#FF6A3D]/30"
          animate={isInView ? { scale: [0, 1.2, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {number}
        </motion.div>
        {!isLast && <div className="w-0.5 h-full bg-gradient-to-b from-[#FF6A3D] to-[#0052CC]/30 mt-4" />}
      </div>
      
      <div className="pb-12">
        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {title}
        </h3>
        <p className="text-[#DFDFDF] leading-relaxed" style={{ fontFamily: 'Aeonik, sans-serif' }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Typing Animation
const TypingText = ({ texts, className = "" }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
// Rotating Headlines Component
const RotatingHeadlines = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const headlines = [
    {
      line1: { normal: "", highlight: "Trusted", normal2: " logon ki" },
      line2: "Best Digital Marketing",
      line3: { normal: "Agency in Raipur ", highlight: "hai hum" }
    },
    {
      line1: { normal: "", highlight: "Ideas", normal2: " ki dukan aur" },
      line2: "results ka pitara",
      line3: { normal: "bhi ", highlight: "hai hum" }
    },
    {
      line1: { normal: "", highlight: "Ideas", normal2: " jo bolte hain" },
      line2: "numbers jo prove",
      line3: { normal: "karte ", highlight: "hain." }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000); // 4 seconds per headline
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[200px] md:h-[250px] lg:h-[280px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1 
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#0B1C33] leading-[1.15] tracking-tight absolute" 
          style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
        >
          <span className="block mb-3">
            <span className="text-[#FF6A3D]">{headlines[currentIndex].line1.highlight}</span>
            {headlines[currentIndex].line1.normal2}
          </span>
          <span className="block mb-3 text-[#0052CC]">
            {headlines[currentIndex].line2}
          </span>
          <span className="block mb-3">
            {headlines[currentIndex].line3.normal}
            <span className="text-[#FF6A3D]">{headlines[currentIndex].line3.highlight}</span>
          </span>
        </motion.h1>
      </AnimatePresence>
      
      {/* Progress Dots */}
      <div className="absolute bottom-0 left-0 flex gap-2">
        {headlines.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-[#FF6A3D]' : 'w-1.5 bg-[#DFDFDF]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
const App = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();
  const scrollDistance = 300;

  // ✅ Logo Perfect Center
  const START_SCALE = viewport.width < 768 ? 2.5 : 4;
  const END_SCALE = 1;
  const logoStartX = viewport.width / 2 - 300;
  const logoStartY = viewport.height / 2 - 80;
  const logoEndX = 22;
  const logoEndY = 5;

  const progress = useTransform(scrollY, [0, scrollDistance], [0, 1]);
  const springProgress = useSpring(progress, { stiffness: 100, damping: 30 });

  const x = useTransform(springProgress, (p) => logoStartX + (logoEndX - logoStartX) * p);
  const y = useTransform(springProgress, (p) => logoStartY + (logoEndY - logoStartY) * p);
  const scale = useTransform(springProgress, [0, 1], [START_SCALE, END_SCALE]);
  const videoOpacity = useTransform(progress, [0, 1], [1, 0]);
  const heroOpacity = useTransform(progress, [0.8, 1], [0, 1]);
  const heroY = useTransform(progress, [0.8, 1], [40, 0]);
  const headerBgOpacity = useTransform(progress, [0, 1], [0, 0.95]);

  const services = [
    { icon: "🎯", title: "Performance Marketing", description: "Data-driven campaigns that deliver measurable ROI. We optimize every rupee for maximum impact." },
    { icon: "📱", title: "Social Media Marketing", description: "Building engaged communities across platforms with content that resonates and converts." },
    { icon: "🎨", title: "Brand Strategy & Design", description: "Crafting distinctive brand identities that stand out in the Indian market." },
    { icon: "🔍", title: "SEO & Content", description: "Dominating search results with strategic content that drives organic growth." },
    { icon: "📊", title: "Analytics & Insights", description: "Transforming data into actionable strategies for continuous improvement." },
    { icon: "🚀", title: "Growth Consulting", description: "Strategic advisory for scaling your business with proven growth frameworks." }
  ];

  // ✅ Updated Process Steps (5 steps)
  const processSteps = [
    { number: "01", title: "Understand", description: "We begin by understanding your brand, market, and audience." },
    { number: "02", title: "Strategize", description: "Clear planning and creative direction aligned with business goals." },
    { number: "03", title: "Create", description: "High-quality content and campaigns designed to engage and perform." },
    { number: "04", title: "Execute", description: "Seamless execution across platforms with attention to detail." },
    { number: "05", title: "Optimize", description: "Continuous tracking, learning, and improvement for better results." }
  ];

  const testimonials = [
    { quote: "Social Spark transformed our digital presence. Our leads increased by 300% in just 3 months.", author: "Rajesh Kumar", role: "CEO", company: "TechStart India" },
    { quote: "The team understands the Indian market like no other. Exceptional results and communication.", author: "Priya Sharma", role: "Marketing Head", company: "Fashion Hub" },
    { quote: "Professional, creative, and result-oriented. They're not just an agency, they're growth partners.", author: "Amit Patel", role: "Founder", company: "EduLearn" }
  ];

  return (
    <div className="relative bg-white overflow-hidden" style={{ fontFamily: 'Aeonik, sans-serif' }}>
      <CustomCursor />

      {/* 🎥 VIDEO WITH GRADIENT */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: videoOpacity }}
        >
          <source src="/hero-video2.mp4" type="video/mp4" />
        </motion.video>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent"
          style={{ opacity: videoOpacity }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-[#FF6A3D]/30 via-transparent to-transparent"
          style={{ opacity: videoOpacity }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{ 
            background: 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.3) 100%)',
            opacity: videoOpacity 
          }}
        />
      </div>

      {/* 📌 HEADER */}
      <motion.header 
        className="fixed top-0 left-0 w-full h-[80px] px-6 md:px-12 flex items-center justify-between z-50"
        style={{
          backgroundColor: useTransform(headerBgOpacity, (opacity) => `rgba(255, 255, 255, ${opacity})`),
          backdropFilter: useTransform(progress, (p) => p > 0.5 ? "blur(20px)" : "none"),
          boxShadow: useTransform(progress, (p) => p > 0.8 ? "0 4px 30px rgba(0,0,0,0.08)" : "none"),
        }}
      >
        <div className="w-full flex items-center justify-between">
          <motion.div className="fixed z-50" style={{ x, y, scale, transformOrigin: "top left" }}>
            <img src="/Social_Spark_Logo.png" alt="Social Spark India" className="h-[50px] w-[140px] object-contain" />
          </motion.div>

          <motion.nav className="hidden md:flex items-center space-x-8 ml-auto" style={{ opacity: springProgress }}>
            {["About", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#0B1C33] hover:text-[#FF6A3D] transition-colors duration-300 font-medium text-sm tracking-wide"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
              >
                {item}
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6A3D]/25 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.nav>
        </div>
      </motion.header>

      <div className="h-screen" />

      {/* 💡 HERO SECTION */}
     <motion.section
  className="relative z-10 bg-white"
  style={{ opacity: heroOpacity, y: heroY }}
>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        {/* Typing Badge */}
        <motion.div 
       initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -100 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6A3D]/10 to-[#0052CC]/10 text-[#0B1C33] px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 border border-[#FF6A3D]/20"
        >
          <span className="w-2 h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
          <TypingText 
            texts={[
              "Best Digital Marketing Agency in Raipur",
              "Ideas jo bolte hain, numbers jo prove karte hain",
              "Aapka brand yahan viral ho sakta hai"
            ]}
            className="text-[#0B1C33] font-semibold"
          />
        </motion.div>
        
        {/* ✅ Rotating Headlines */}
        <RotatingHeadlines />
        
        {/* Description */}
        <motion.p 
          className="text-base md:text-lg text-[#555555] mb-8 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          At Social Spark India, we help brands stand out in a crowded digital world. By combining strategy, creativity, and data-driven execution, we create digital experiences that don't just look good—but work effectively. Our focus is simple: build meaningful brand presence and drive real growth.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 106, 61, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6A3D]/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Book a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#0B1C33] text-[#0B1C33] hover:bg-[#0B1C33] hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Request a Callback
          </motion.button>
        </motion.div>
        
        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-[#DFDFDF]">
          <p className="text-[#555555] text-sm mb-4">Trusted by 100+ brands across India</p>
          <div className="flex items-center gap-8 opacity-50">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i} 
                className="h-8 w-20 bg-[#DFDFDF] rounded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 0.9 + (i * 0.1) }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3D Image */}
      <motion.div 
        className="relative h-[500px] md:h-[600px] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotateY: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-full h-full"
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-[#FF6A3D]/20 to-[#0052CC]/20 blur-[100px] rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <img
            src="/banner2.png"
            alt="3D Character"
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* ⚡ VIRAL BANNER */}
      <section className="relative z-10 bg-gradient-to-r from-[#FF6A3D] to-[#0052CC] py-6 overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-white text-lg md:text-xl font-bold mx-8 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Wait... aapka brand yahan viral ho sakta hai
              <span className="text-2xl">✨</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* 📊 STATS */}
      <section className="relative z-10 bg-[#0B1C33] py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/ss_pattern.png')`,
            backgroundSize: '800px 200px',
            backgroundRepeat: 'repeat',
            opacity: 0.1,
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-black text-white mb-2" 
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#FF6A3D]">Numbers</span> Jo Prove Karte Hain
            </motion.h2>
            <p className="text-[#DFDFDF] text-lg">Ideas bolte hain, results dikhate hain</p>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <StatCard number="150" suffix="+" label="Brands Served" />
            <StatCard number="500" suffix="%" label="Average ROI" />
            <StatCard number="50" suffix="M+" label="Ad Spend Managed" />
            <StatCard number="98" suffix="%" label="Client Retention" />
          </motion.div>
        </div>
      </section>

      {/* 🎯 SERVICES */}
      <section id="services" className="relative z-10 bg-gradient-to-b from-white to-[#F8F9FA] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#FF6A3D] font-medium text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0B1C33] mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Aapko <span className="text-[#FF6A3D]">Grow</span> Karne Ke Liye
              <br />
              Sab Kuch Hai Yahan
            </h2>
            <p className="text-[#555555] text-lg max-w-2xl mx-auto">
              Complete digital marketing solutions tailored for the Indian market
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 🖼️ ABOUT */}
      <section id="about" className="relative z-10 bg-white py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Motion3DImage 
              src={banner4}
              alt="About Us 3D"
              className="w-full h-[400px] md:h-[450px]"
            />

            <AnimatedSection delay={0.2}>
              <span className="inline-block text-[#FF6A3D] font-medium text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1C33] mb-6 leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <span className="text-[#FF6A3D]">Branding</span> ho ya <span className="text-[#0052CC]">marketing</span>—
                <br />
                <span className="bg-gradient-to-r from-[#FF6A3D] to-[#0052CC] bg-clip-text text-transparent">
                  spark toh hona hi chahiye.
                </span>
              </h2>
              <p className="text-[#555555] text-base md:text-lg leading-relaxed mb-8">
                Social Spark India is a 360° digital marketing agency focused on building strong, future-ready brands. We work closely with businesses to understand their goals, audience, and challenges, and craft strategies that balance creativity with clarity. Every decision we take is intentional, measurable, and designed to support long-term brand growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: "✓", text: "Strategy First" },
                  { icon: "✓", text: "Data-Driven" },
                  { icon: "✓", text: "Creative Excellence" },
                  { icon: "✓", text: "Measurable Results" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-6 h-6 bg-[#FF6A3D]/10 text-[#FF6A3D] rounded-full flex items-center justify-center text-sm font-bold">
                      {item.icon}
                    </span>
                    <span className="text-[#0B1C33] font-medium text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0052CC] hover:bg-[#003d99] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#0052CC]/20 transition-all duration-300"
              >
                Know More About Us
              </motion.button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 🔄 PROCESS */}
      <section className="relative z-10 bg-[#0B1C33] py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <span className="inline-block text-[#FF6A3D] font-medium text-sm uppercase tracking-wider mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  What Happens Before
                  <br />
                  You See the{" "}
                  <span className="text-[#FF6A3D]">Results?</span>
                </h2>
                <p className="text-[#DFDFDF] text-base md:text-lg leading-relaxed mb-12">
                  Our proven 5-step process ensures every project delivers exceptional results through strategic planning and seamless execution.
                </p>
              </AnimatedSection>
              
              <div className="space-y-0">
                {processSteps.map((step, index) => (
                  <ProcessStep 
                    key={index} 
                    {...step} 
                    isLast={index === processSteps.length - 1}
                  />
                ))}
              </div>
            </div>

            <Motion3DImage 
              src={banner3}
              alt="Process 3D"
              className="w-full h-[450px] md:h-[500px] lg:h-[600px]"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="relative z-10 bg-gradient-to-b from-[#F8F9FA] to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#FF6A3D] font-medium text-sm uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0B1C33] mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Humare <span className="text-[#0052CC]">Clients</span> Kya Kehte Hain
            </h2>
            <p className="text-[#555555] text-lg">Results khud bolte hain</p>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="relative z-10 bg-[#0B1C33] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6A3D]/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0052CC]/20 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-[#FF6A3D]/20 text-[#FF6A3D] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#FF6A3D]/30"
              >
                <span className="text-lg">✨</span>
                Let's create something impactful together
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Let's Build Something
                <br />
                That <span className="text-[#FF6A3D]">Works</span>
              </h2>
              
              <p className="text-[#DFDFDF] text-base md:text-lg leading-relaxed mb-4">
                Share your details with us, and our team will connect to understand your requirements and explore how we can help you grow digitally.
              </p>
              
              <p className="text-white font-semibold text-lg mb-8">
                Ready to spark your digital growth?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 106, 61, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6A3D]/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Book a Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0B1C33] px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Request a Callback
                </motion.button>
              </div>
            </AnimatedSection>

            <Motion3DImage 
              src={banner7}
              alt="CTA 3D"
              className="w-full h-[350px] md:h-[400px] lg:h-[450px]"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 🦶 FOOTER */}
      <footer className="relative z-10 bg-[#0B1C33] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src="/Social_Spark_Logo.png" alt="Social Spark India" className="h-12 mb-6" />
              <p className="text-[#DFDFDF] leading-relaxed max-w-md mb-4">
                Raipur's premier growth marketing agency helping ambitious brands achieve extraordinary results through data-driven strategies and creative excellence.
              </p>
              <p className="text-[#FF6A3D] font-semibold mb-6">
                Ideas jo bolte hain, numbers jo prove karte hain.
              </p>
              <div className="flex gap-4">
                {["linkedin", "instagram", "twitter", "facebook"].map((social) => (
                  <motion.a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-white/10 hover:bg-[#FF6A3D] rounded-full flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-sm">{social.charAt(0).toUpperCase()}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#DFDFDF] hover:text-[#FF6A3D] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Contact</h4>
              <ul className="space-y-3 text-[#DFDFDF]">
                <li className="flex items-start gap-3">
                  <span>📍</span>
                  <span>Raipur, Chhattisgarh, India</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>📧</span>
                  <a href="mailto:hello@socialspark.in" className="hover:text-[#FF6A3D] transition-colors">
                    hello@socialspark.in
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span>📱</span>
                  <a href="tel:+919876543210" className="hover:text-[#FF6A3D] transition-colors">
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#DFDFDF] text-sm">
              © 2024 Social Spark India. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#DFDFDF] hover:text-[#FF6A3D] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#DFDFDF] hover:text-[#FF6A3D] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;