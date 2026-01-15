// CustomCursor.jsx - Mobile optimized
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                            window.innerWidth < 768 ||
                            'ontouchstart' in window ||
                            navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // ✅ Only add mouse listener on desktop
    if (isMobile) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);
    return () => document.removeEventListener('mousemove', updatePosition);
  }, [isMobile]);

  // ✅ Don't render on mobile
  if (isMobile) return null;

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
        width: '30px',
        height: '40px',
        pointerEvents: 'none', // ✅ Important: No click interference
        zIndex: 999999,
        opacity: 1,
      }}
    />
  );
};

export default CustomCursor;