// Stats.jsx
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Animation Variants
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

// Main Stats Component
const Stats = () => {
  return (
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
          <p className="text-[#DFDFDF] text-3xl">Ideas bolte hain</p>
          <motion.h2
            className="text-3xl md:text-4xl font-black text-white mb-2"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#FF6A3D]">Numbers</span> Jo Prove Karte Hain
          </motion.h2>
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
  );
};

export default Stats;