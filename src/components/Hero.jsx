// HeroSection.jsx - Fully Responsive
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// 🎯 Typing Animation Component - Responsive
const TypingText = ({ texts, className = "" }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 20 : 50; // ✅ Faster for mobile

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500); // ✅ Reduced delay
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

// 🔄 Rotating Headlines Component - Responsive
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
    }, 3000); // ✅ Faster transitions

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
      {/* Progress Dots - Responsive */}
      <div className="absolute bottom-0 left-0 flex gap-1 sm:gap-2">
        {headlines.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 sm:w-8 bg-[#FF6A3D]' : 'w-1 sm:w-1.5 bg-[#DFDFDF]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// 🎬 Background Video Component - Responsive
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

      {/* Responsive Gradient Overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white/70 sm:from-white/80 via-white/30 sm:via-white/40 to-transparent"
        style={{ opacity: videoOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#FF6A3D]/20 sm:from-[#FF6A3D]/30 via-transparent to-transparent"
        style={{ opacity: videoOpacity }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.2) sm:rgba(255,255,255,0.3) 100%)',
          opacity: videoOpacity
        }}
      />
    </div>
  );
};

// 🎨 3D Character Component - Responsive
// Character3D Component - Mobile Responsive Thinking Cloud
const Character3D = () => {
  return (
    <motion.div
      className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center lg:-ml-20 xl:-ml-40"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotateY: [0, 8, 0, -8, 0]
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-full h-full"
        style={{ perspective: 1000 }}
      >
        {/* Responsive Glow Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[80%] h-[70%] sm:h-[80%] bg-gradient-to-br from-[#FF6A3D]/15 sm:from-[#FF6A3D]/20 to-[#0052CC]/15 sm:to-[#0052CC]/20 blur-[50px] sm:blur-[100px] rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Main Character Image */}
        <img
          src="/banner2.png"
          loading="lazy"
          alt="3D Character"
          width={600}
          height={400}
          className="relative z-10 w-full h-full object-contain drop-shadow-lg sm:drop-shadow-2xl"
        />
      </motion.div>

      {/* ✅ Thinking Cloud - Now Mobile Responsive */}
      <motion.div
        className="absolute right-1 top-[2%] sm:right-2 sm:top-[3%] md:right-4 md:top-[1%] lg:right-6 z-20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Thought Dots - Mobile Responsive */}
        <div className="absolute -left-2 top-4 sm:-left-3 sm:top-6 md:-left-4 md:top-8 lg:-left-6 lg:top-12 xl:-left-8 xl:top-16 flex flex-col items-center gap-0.5 sm:gap-1 md:gap-2">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-gray-400 rounded-full"></span>
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full"></span>
        </div>

        {/* Cloud Body - Mobile Responsive */}
        <div className="relative bg-white px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-6 lg:py-5 xl:px-7 xl:py-6 shadow-md sm:shadow-lg md:shadow-xl border border-gray-300 rounded-[20px] sm:rounded-[25px] md:rounded-[35px] lg:rounded-[45px] xl:rounded-[50px] max-w-[120px] sm:max-w-[140px] md:max-w-[180px] lg:max-w-[220px] xl:max-w-[280px]">
          <div className="relative flex flex-col items-center text-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 text-black">
            <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base font-semibold opacity-90 leading-tight">
              Soch Rahi Hoon…
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base font-semibold opacity-90 leading-tight">
              Kya Aapka Brand
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base font-bold leading-tight">
              Growth Ready Hai?
            </span>
            <span className="text-[7px] sm:text-[8px] md:text-xs lg:text-sm xl:text-base font-semibold opacity-90 leading-tight">
              Let's Think Together ✨
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🚀 CTA Buttons Component - Responsive
const CTAButtons = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <motion.button
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 8px 20px rgba(255, 106, 61, 0.3)" 
        }}
        whileTap={{ scale: 0.97 }}
        className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg shadow-[#FF6A3D]/20 transition-all duration-200 flex items-center justify-center gap-2"
        style={{ fontFamily: 'Aeonik, sans-serif' }}
      >
        <span className="hidden sm:inline">Book a Consultation</span>
        <span className="sm:hidden">Book Consultation</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="border-2 border-[#0B1C33] text-[#0B1C33] hover:bg-[#0B1C33] hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2"
        style={{ fontFamily: 'Aeonik, sans-serif' }}
      >
        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="hidden sm:inline">Request a Callback</span>
        <span className="sm:hidden">Request Callback</span>
      </motion.button>
    </motion.div>
  );
};

// 🎯 Main Hero Section Component - Responsive
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

      {/* 💡 HERO CONTENT - Responsive */}
      <motion.section
        className="relative z-10 bg-white"
        style={{ opacity: heroOpacity, y: heroY }}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Left Content - Responsive */}
            <div className="order-2 lg:order-1">
              {/* Typing Badge - Responsive */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#FF6A3D]/10 to-[#0052CC]/10 text-[#0B1C33] px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6 border border-[#FF6A3D]/20"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
              >
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
                <div className="hidden sm:block">
                  <TypingText
                    texts={[
                      "Best Digital Marketing Agency in Raipur",
                      "Ideas jo bolte hain, numbers jo prove karte hain",
                      "Aapka brand yahan viral ho sakta hai"
                    ]}
                    className="text-[#0B1C33] font-semibold"
                  />
                </div>
                {/* Mobile simplified text */}
                <span className="sm:hidden text-[#0B1C33] font-semibold">
                  Digital Marketing Agency Raipur
                </span>
              </motion.div>

              {/* Rotating Headlines - Responsive */}
              <RotatingHeadlines />

              {/* Description - Responsive */}
              <motion.p
                className="text-sm sm:text-base md:text-lg text-[#555555] mb-6 sm:mb-8 max-w-full lg:max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ fontFamily: 'Aeonik, sans-serif' }}
              >
                <span className="hidden sm:inline">
                  At Social Spark India, we help brands stand out in a crowded digital world. 
                  By combining strategy, creativity, and data-driven execution, we create digital 
                  experiences that don't just look good—but work effectively. Our focus is simple: 
                  build meaningful brand presence and drive real growth.
                </span>
                {/* Mobile simplified description */}
                <span className="sm:hidden">
                  We help brands grow digitally with strategy, creativity, and data-driven results. 
                  Build meaningful brand presence and drive real growth with Social Spark India.
                </span>
              </motion.p>

              {/* CTA Buttons - Responsive */}
              <CTAButtons />
            </div>

            {/* Right Content - 3D Character - Responsive */}
            <div className="order-1 lg:order-2">
              <Character3D />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ⚡ VIRAL BANNER - Responsive */}
      <section className="relative z-10 bg-gradient-to-r from-[#FF6A3D] to-[#0052CC] py-4 sm:py-6 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center">
              {/* Message 1 - Responsive */}
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-3 sm:mx-4 md:mx-6 flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl md:text-2xl">🚀</span>
                <span className="hidden sm:inline">Wait... aapka brand yahan viral ho sakta hai</span>
                <span className="sm:hidden">Brand viral ho sakta hai</span>
              </span>

              <span className="text-yellow-300 text-lg sm:text-xl md:text-2xl mx-2 sm:mx-4">✦</span>

              {/* Message 2 - Responsive */}
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-3 sm:mx-4 md:mx-6 flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl md:text-2xl">💥</span>
                <span className="hidden sm:inline">Marketing that actually works, yaar</span>
                <span className="sm:hidden">Marketing that works</span>
              </span>

              <span className="text-yellow-300 text-lg sm:text-xl md:text-2xl mx-2 sm:mx-4">✦</span>

              {/* Message 3 - Responsive */}
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-3 sm:mx-4 md:mx-6 flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl md:text-2xl">🎯</span>
                <span className="hidden sm:inline">Soch ke banate hai, jugaad se nahi</span>
                <span className="sm:hidden">Soch ke banate hai</span>
              </span>

              <span className="text-yellow-300 text-lg sm:text-xl md:text-2xl mx-2 sm:mx-4">✦</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;