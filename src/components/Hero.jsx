// HeroSection.jsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

// 🎯 Typing Animation Component
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

// 🔄 Rotating Headlines Component
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
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0B1C33] leading-[1.15] tracking-tight absolute"
          style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
        >
          <span className="block mb-3">
            <span className="text-[#FF6A3D]">{headlines[currentIndex].line1.highlight}</span>
            {headlines[currentIndex].line1.normal2}
          </span>
          <span className="mb-3 text-[#0052CC]">
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

// 🎬 Background Video Component
const BackgroundVideo = ({ videoOpacity }) => {
  return (
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

      {/* Gradient Overlays */}
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
  );
};

// 🎨 3D Character Component
const Character3D = () => {
  return (
    <motion.div
      className="relative h-[400px] md:h-[600px] flex items-center justify-center lg:-ml-40"
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
        {/* Glow Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-[#FF6A3D]/20 to-[#0052CC]/20 blur-[100px] rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Main Character Image */}
        <img
          src="/banner2.png"
          alt="3D Character"
          className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* Thinking Cloud - Desktop Only */}
      <motion.div
        className="absolute right-6 top-[1%] hidden lg:block z-20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Thought Dots */}
        <div className="absolute -left-8 top-16 flex flex-col items-center gap-2">
          <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>

        {/* Cloud Body */}
        <div className="relative bg-white px-7 py-6 shadow-xl border border-gray-300 rounded-[50px] max-w-[280px]">
          <div className="relative flex flex-col items-center text-center gap-2 text-black">
            <span className="text-base font-semibold opacity-90">
              Soch Rahi Hoon…
            </span>
            <span className="text-base font-semibold opacity-90">
              Kya Aapka Brand
            </span>
            <span className="text-base font-bold">
              Growth Ready Hai?
            </span>
            <span className="text-base font-semibold opacity-90">
              Let's Think Together ✨
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🚀 CTA Buttons Component
const CTAButtons = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 10px 25px rgba(255, 106, 61, 0.3)" 
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6A3D]/20 transition-all duration-300 flex items-center justify-center gap-2"
        style={{ fontFamily: 'Aeonik, sans-serif' }}
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
        style={{ fontFamily: 'Aeonik, sans-serif' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Request a Callback
      </motion.button>
    </motion.div>
  );
};

// 🎯 Main Hero Section Component
const HeroSection = () => {
  const { scrollY } = useScroll();
  const scrollDistance = 300;

  const progress = useTransform(scrollY, [0, scrollDistance], [0, 1]);
  const videoOpacity = useTransform(progress, [0, 1], [1, 0]);
  const heroOpacity = useTransform(progress, [0.8, 1], [0, 1]);
  const heroY = useTransform(progress, [0.8, 1], [40, 0]);

  return (
    <>
      {/* Background Video */}
      <BackgroundVideo videoOpacity={videoOpacity} />

      {/* Spacer for scroll effect */}
      <div className="h-screen" />

      {/* 💡 HERO CONTENT */}
      <motion.section
        className="relative z-10 bg-white"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div>
              {/* Typing Badge */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6A3D]/10 to-[#0052CC]/10 text-[#0B1C33] px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 border border-[#FF6A3D]/20"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
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

              {/* Rotating Headlines */}
              <RotatingHeadlines />

              {/* Description */}
              <motion.p
                className="text-base md:text-lg text-[#555555] mb-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ fontFamily: 'Aeonik, sans-serif' }}
              >
                At Social Spark India, we help brands stand out in a crowded digital world. 
                By combining strategy, creativity, and data-driven execution, we create digital 
                experiences that don't just look good—but work effectively. Our focus is simple: 
                build meaningful brand presence and drive real growth.
              </motion.p>

              {/* CTA Buttons */}
              <CTAButtons />
            </div>

            {/* Right Content - 3D Character */}
            <Character3D />
          </div>
        </div>
      </motion.section>

     

      {/* ⚡ VIRAL BANNER */}
      <section className="relative z-10 bg-gradient-to-r from-[#FF6A3D] to-[#0052CC] py-6 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              {/* Message 1 */}
              <span className="text-white text-lg md:text-xl font-bold mx-6 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                Wait... aapka brand yahan viral ho sakta hai
              </span>

              <span className="text-yellow-300 text-2xl mx-4">✦</span>

              {/* Message 2 */}
              <span className="text-white text-lg md:text-xl font-bold mx-6 flex items-center gap-3">
                <span className="text-2xl">💥</span>
                Marketing that actually works, yaar
              </span>

              <span className="text-yellow-300 text-2xl mx-4">✦</span>

              {/* Message 3 */}
              <span className="text-white text-lg md:text-xl font-bold mx-6 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                Soch ke banate hai, jugaad se nahi
              </span>

              <span className="text-yellow-300 text-2xl mx-4">✦</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;