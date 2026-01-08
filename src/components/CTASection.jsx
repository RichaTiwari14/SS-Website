// CTASection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import banner7 from "../../public/banner7.png";

// Section Component
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

const CTASection = () => {
  return (
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
                style={{ fontFamily: 'Aeonik, sans-serif' }}
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
                style={{ fontFamily: 'Aeonik, sans-serif' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request a Callback
              </motion.button>
            </div>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full h-[350px] md:h-[400px] lg:h-[450px]"
          >
            <img
              src={banner7}
              alt="CTA 3D"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;