// Process.jsx
import React from "react";
import { motion, useInView } from "framer-motion";
// import banner3 from "../public/banner3-Photoroom.png"

// 🎯 3D Image Component with Advanced Motion
const Motion3DImage = ({ src, alt, className = "", delay = 0 }) => {
  const ref = React.useRef(null);
  const mouseX = motion.useMotionValue(0);
  const mouseY = motion.useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rotateX = motion.useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = motion.useTransform(mouseX, [-300, 300], [-10, 10]);

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

// Main Process Component
const Process = () => {
  // ✅ Process Steps (5 steps)
  const processSteps = [
    { number: "01", title: "Understand", description: "We begin by understanding your brand, market, and audience." },
    { number: "02", title: "Strategize", description: "Clear planning and creative direction aligned with business goals." },
    { number: "03", title: "Create", description: "High-quality content and campaigns designed to engage and perform." },
    { number: "04", title: "Execute", description: "Seamless execution across platforms with attention to detail." },
    { number: "05", title: "Optimize", description: "Continuous tracking, learning, and improvement for better results." }
  ];

  return (
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
            // src={banner3}
            alt="Process 3D"
            className="w-full h-[450px] md:h-[500px] lg:h-[800px]"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;