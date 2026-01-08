// CustomCursor.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export default CustomCursor;