// Header.jsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Navbar = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Logo Animation Values
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
  const headerBgOpacity = useTransform(progress, [0, 1], [0, 0.95]);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* 📌 MAIN HEADER */}
      <motion.header
        className="fixed top-0 left-0 w-full h-[80px] px-6 md:px-12 flex items-center justify-between z-50"
        style={{
          backgroundColor: useTransform(headerBgOpacity, (opacity) => `rgba(255, 255, 255, ${opacity})`),
          backdropFilter: useTransform(progress, (p) => p > 0.5 ? "blur(20px)" : "none"),
          boxShadow: useTransform(progress, (p) => p > 0.8 ? "0 4px 30px rgba(0,0,0,0.08)" : "none"),
        }}
      >
        <div className="w-full flex items-center justify-between">
          
          {/* 🎯 ANIMATED LOGO */}
          <motion.div 
            className="fixed z-50" 
            style={{ x, y, scale, transformOrigin: "top left" }}
          >
            <motion.img 
              src="/Social_Spark_Logo.png" 
              alt="Social Spark India" 
              className="h-[50px] w-[140px] object-contain cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          {/* 🖥️ DESKTOP NAVIGATION */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8 ml-auto" 
            style={{ opacity: springProgress }}
          >
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-[#0B1C33] hover:text-[#FF6A3D] transition-colors duration-300 font-medium text-sm tracking-wide group"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
                
                {/* Hover Underline Effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6A3D] group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 106, 61, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#FF6A3D]/25 transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: 'Aeonik, sans-serif' }}
            >
              Get Started
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.nav>

          {/* 📱 MOBILE MENU BUTTON */}
          <motion.button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ opacity: springProgress }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-[#0B1C33] transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[#0B1C33] my-1 transition-all duration-300"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[#0B1C33] transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* 📱 MOBILE MENU OVERLAY */}
      <motion.div
        className="fixed inset-0 bg-white z-40 md:hidden"
        initial={{ opacity: 0, y: "-100%" }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          
          {/* Mobile Logo */}
          <motion.img 
            src="/Social_Spark_Logo.png" 
            alt="Social Spark India" 
            className="h-12 mb-8"
            initial={{ scale: 0 }}
            animate={isMobileMenuOpen ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2 }}
          />

          {/* Mobile Navigation Items */}
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-2xl font-bold text-[#0B1C33] hover:text-[#FF6A3D] transition-colors duration-300"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.1 * index }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}

          {/* Mobile CTA Button */}
          <motion.button
            className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#FF6A3D]/25 transition-all duration-300 flex items-center gap-3 mt-8"
            style={{ fontFamily: 'Aeonik, sans-serif' }}
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>

          {/* Contact Info */}
          <motion.div
            className="text-center mt-8 space-y-2"
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[#555555] text-sm" style={{ fontFamily: 'Aeonik, sans-serif' }}>
              Ready to grow your brand?
            </p>
            <p className="text-[#FF6A3D] font-semibold text-sm">
              📞 +91 70008 74785
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};


export default Navbar;