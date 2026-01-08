// Testimonials.jsx
import React from "react";
import { motion, useInView } from "framer-motion";

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
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

// Testimonial Card Component
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

// Main Testimonials Component
const Testimonials = () => {
  const testimonials = [
    { 
      quote: "Social Spark transformed our digital presence. Our leads increased by 300% in just 3 months.", 
      author: "Rajesh Kumar", 
      role: "CEO", 
      company: "TechStart India" 
    },
    { 
      quote: "The team understands the Indian market like no other. Exceptional results and communication.", 
      author: "Priya Sharma", 
      role: "Marketing Head", 
      company: "Fashion Hub" 
    },
    { 
      quote: "Professional, creative, and result-oriented. They're not just an agency, they're growth partners.", 
      author: "Amit Patel", 
      role: "Founder", 
      company: "EduLearn" 
    }
  ];

  return (
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
  );
};

export default Testimonials;