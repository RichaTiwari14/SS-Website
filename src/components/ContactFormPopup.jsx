// ContactFormPopup.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 📝 PROFESSIONAL CONTACT FORM POPUP - BRAND COMPLIANT
const ContactFormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    onClose();
  };

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            style={{ zIndex: 99999 }}
          />

          {/* Popup Container - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 100000 }}
          >
            {/* Popup Modal - Optimized Height */}
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh] md:max-h-[600px]">
              
              {/* LEFT SIDE - BRAND DESIGN */}
              <div 
                className="relative bg-[#0B1C33] p-8 md:p-10 md:w-[40%] flex flex-col justify-center"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >
                {/* Close Button Mobile */}
                <button
                  onClick={onClose}
                  className="md:hidden absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Subtle Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #FF6A3D 0, #FF6A3D 1px, transparent 1px, transparent 15px)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Logo */}
                  <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    src="/Social_Spark_Logo.png"
                    alt="Social Spark India"
                    className="h-10 mb-8 brightness-0 invert"
                  />

                  {/* Headline */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight"
                    style={{ fontFamily: 'Helvetica Condensed, Helvetica, Arial, sans-serif' }}
                  >
                    Let's Build Your
                    <span className="text-[#FF6A3D] block">Digital Success</span>
                  </motion.h2>

                  {/* Subheading */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[#DFDFDF] text-base mb-8"
                    style={{ fontFamily: 'Aeonik, sans-serif' }}
                  >
                    Join 150+ brands that transformed their digital presence with us. Get your free consultation today.
                  </motion.p>

                  {/* Value Props */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                  >
                    {[
                      { icon: "✓", text: "Free Brand Audit Worth ₹15,000" },
                      { icon: "✓", text: "Response Within 2 Hours" },
                      { icon: "✓", text: "No Obligations, No Spam" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-5 h-5 bg-[#FF6A3D] rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {item.icon}
                        </span>
                        <span className="text-[#DFDFDF] text-sm" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-8 pt-8 border-t border-[#DFDFDF]/10"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}>
                          4.9<span className="text-[#FF6A3D] text-lg ml-1">★</span>
                        </p>
                        <p className="text-xs text-[#DFDFDF]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Google Rating
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}>
                          150<span className="text-[#FF6A3D]">+</span>
                        </p>
                        <p className="text-xs text-[#DFDFDF]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Happy Clients
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}>
                          98<span className="text-[#FF6A3D]">%</span>
                        </p>
                        <p className="text-xs text-[#DFDFDF]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Retention
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT SIDE - FORM */}
              <div className="flex-1 md:w-[60%] bg-white relative">
                {/* Close Button Desktop */}
                <button
                  onClick={onClose}
                  className="hidden md:flex absolute top-4 right-4 w-8 h-8 bg-[#DFDFDF]/20 hover:bg-[#DFDFDF]/30 rounded-lg items-center justify-center transition-all z-10"
                >
                  <svg className="w-4 h-4 text-[#0B1C33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Form Container */}
                <div className="p-6 md:p-10">
                  {/* Form Header */}
                  <div className="mb-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 text-[#FF6A3D] px-3 py-1 rounded-full text-xs font-medium mb-3"
                      style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                      <span className="w-2 h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
                      Limited Slots Available
                    </motion.div>
                    
                    <h3 
                      className="text-xl md:text-2xl font-bold text-[#0B1C33] mb-2"
                      style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}
                    >
                      Start Your Growth Journey
                    </h3>
                    <p 
                      className="text-[#555555] text-sm"
                      style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                      Fill the form below and get a response within 2 hours
                    </p>
                  </div>

                  {/* Compact Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name *"
                        className="w-full px-4 py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#555555] text-sm"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      />
                    </motion.div>

                    {/* Email & Phone Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Email Address *"
                          className="w-full px-4 py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#555555] text-sm"
                          style={{ fontFamily: 'Aeonik, sans-serif' }}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Phone Number *"
                          className="w-full px-4 py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#555555] text-sm"
                          style={{ fontFamily: 'Aeonik, sans-serif' }}
                        />
                      </motion.div>
                    </div>

                    {/* Service Selection */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] text-sm bg-white appearance-none"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        <option value="">Select Service *</option>
                        <option value="social-media">Social Media Marketing</option>
                        <option value="seo">SEO & Content Marketing</option>
                        <option value="performance">Performance Marketing</option>
                        <option value="branding">Branding & Strategy</option>
                        <option value="web-dev">Website Development</option>
                        <option value="influencer">Influencer Marketing</option>
                      </select>
                    </motion.div>

                    {/* Message - Optional, Smaller */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <textarea
                      // ContactFormPopup.jsx (continued)

                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Brief about your project (Optional)"
                        className="w-full px-4 py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#555555] text-sm resize-none"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      />
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-6 py-3.5 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#FF6A3D]/20"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        Get Free Consultation
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.button>
                    </motion.div>

                    {/* Trust Note */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="text-xs text-[#555555] text-center flex items-center justify-center gap-1"
                      style={{ fontFamily: 'Aeonik, sans-serif' }}
                    >
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      100% Secure. No Spam. Unsubscribe Anytime.
                    </motion.p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactFormPopup;