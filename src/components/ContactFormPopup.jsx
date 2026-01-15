// ContactFormPopup.jsx - Fully Responsive Mobile Form
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

          {/* Popup Container - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center p-3 xs:p-4 sm:p-6 lg:p-8"
            style={{ zIndex: 100000 }}
          >
            {/* Main Container - Mobile First */}
            <div className="w-full max-w-[calc(100vw-24px)] sm:max-w-md lg:max-w-4xl xl:max-w-5xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[calc(100vh-24px)] sm:max-h-[calc(100vh-48px)] lg:max-h-[650px]">
              
              {/* LEFT SIDE - BRAND DESIGN (Hidden on Mobile & Tablet) */}
              <div 
                className="hidden lg:flex relative bg-[#0B1C33] p-8 xl:p-10 lg:w-[42%] flex-col justify-center"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
              >
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
                    className="h-10 xl:h-12 mb-6 xl:mb-8 brightness-0 invert object-contain"
                  />

                  {/* Headline */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl xl:text-3xl 2xl:text-4xl font-black text-white mb-3 xl:mb-4 leading-tight"
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
                    className="text-[#DFDFDF] text-sm xl:text-base mb-6 xl:mb-8 leading-relaxed"
                    style={{ fontFamily: 'Aeonik, sans-serif' }}
                  >
                    Join 150+ brands that transformed their digital presence with us.
                  </motion.p>

                  {/* Value Props */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 xl:space-y-4 mb-6 xl:mb-8"
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
                        <span className="w-5 h-5 bg-[#FF6A3D] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {item.icon}
                        </span>
                        <span className="text-[#DFDFDF] text-xs xl:text-sm" style={{ fontFamily: 'Aeonik, sans-serif' }}>
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
                    className="pt-6 xl:pt-8 border-t border-[#DFDFDF]/10"
                  >
                    <div className="grid grid-cols-3 gap-3 xl:gap-4 text-center">
                      <div>
                        <p className="text-xl xl:text-2xl font-bold text-white" style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}>
                          4.9<span className="text-[#FF6A3D] text-base xl:text-lg ml-1">★</span>
                        </p>
                        <p className="text-[10px] xl:text-xs text-[#DFDFDF]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Google Rating
                        </p>
                      </div>
                      <div>
                        <p className="text-xl xl:text-2xl font-bold text-white" style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}>
                          150<span className="text-[#FF6A3D]">+</span>
                        </p>
                        <p className="text-[10px] xl:text-xs text-[#DFDFDF]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Happy Clients
                        </p>
                      </div>
                      <div>
                        <p className="text-xl xl:text-2xl font-bold text-white" style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}>
                          98<span className="text-[#FF6A3D]">%</span>
                        </p>
                        <p className="text-[10px] xl:text-xs text-[#DFDFDF]" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          Retention
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* FORM SIDE - Full Width on Mobile */}
              <div className="flex-1 lg:w-[58%] bg-white relative flex flex-col min-h-0">
                
                {/* Close Button - Fixed Position */}
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 w-7 h-7 xs:w-8 xs:h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all z-20"
                >
                  <svg className="w-4 h-4 text-[#0B1C33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Scrollable Form Container */}
                <div className="flex-1 overflow-y-auto overscroll-contain">
                  <div className="p-4 xs:p-5 sm:p-6 lg:p-8 xl:p-10">
                    
                    {/* Mobile Header with Logo - FIXED */}
                    <div className="lg:hidden mb-4 xs:mb-5 sm:mb-6">
                      {/* Logo Container - Properly Sized */}
                      <div className="flex justify-center mb-3 xs:mb-4">
                        <img
                          src="/Social_Spark_Logo.png"
                          alt="Social Spark India"
                          className="h-7 xs:h-8 sm:h-9 w-auto object-contain max-w-[180px] xs:max-w-[200px]"
                        />
                      </div>
                      
                      {/* Mobile Headline */}
                      <h2 
                        className="text-lg xs:text-xl sm:text-2xl font-black text-[#0B1C33] text-center leading-tight"
                        style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}
                      >
                        Let's Build Your{" "}
                        <span className="text-[#FF6A3D]">Digital Success</span>
                      </h2>
                      
                      {/* Mobile Subtitle */}
                      <p 
                        className="text-xs xs:text-sm text-[#555555] text-center mt-1 xs:mt-2"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        Join 150+ brands growing with us
                      </p>
                    </div>

                    {/* Form Header */}
                    <div className="mb-3 xs:mb-4 sm:mb-5">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-1.5 xs:gap-2 bg-[#FF6A3D]/10 text-[#FF6A3D] px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs font-medium mb-2 xs:mb-3"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
                        Limited Slots Available
                      </motion.div>
                      
                      <h3 
                        className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#0B1C33] mb-0.5 xs:mb-1"
                        style={{ fontFamily: 'Helvetica Condensed, sans-serif' }}
                      >
                        Start Your Growth Journey
                      </h3>
                      <p 
                        className="text-[#555555] text-[11px] xs:text-xs sm:text-sm"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        Get a response within 2 hours
                      </p>
                    </div>

                    {/* Form - Mobile Optimized */}
                    <form onSubmit={handleSubmit} className="space-y-2.5 xs:space-y-3 sm:space-y-4">
                      
                      {/* Name Input */}
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
                          className="w-full px-3 xs:px-3.5 sm:px-4 py-2.5 xs:py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#888] text-sm"
                          style={{ fontFamily: 'Aeonik, sans-serif' }}
                        />
                      </motion.div>

                      {/* Email & Phone - Grid */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4">
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
                            placeholder="Email *"
                            className="w-full px-3 xs:px-3.5 sm:px-4 py-2.5 xs:py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#888] text-sm"
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
                            placeholder="Phone *"
                            className="w-full px-3 xs:px-3.5 sm:px-4 py-2.5 xs:py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#888] text-sm"
                            style={{ fontFamily: 'Aeonik, sans-serif' }}
                          />
                        </motion.div>
                      </div>

                      {/* Service Selection */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="relative"
                      >
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-3 xs:px-3.5 sm:px-4 py-2.5 xs:py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] text-sm bg-white appearance-none pr-10 cursor-pointer"
                          style={{ fontFamily: 'Aeonik, sans-serif' }}
                        >
                          <option value="" className="text-[#888]">Select Service *</option>
                          <option value="social-media">Social Media Marketing</option>
                          <option value="seo">SEO & Content Marketing</option>
                          <option value="performance">Performance Marketing</option>
                          <option value="branding">Branding & Strategy</option>
                          <option value="web-dev">Website Development</option>
                          <option value="influencer">Influencer Marketing</option>
                        </select>
                        
                        {/* Dropdown Arrow */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-4 h-4 text-[#555555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Message - Optional */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="2"
                          placeholder="About your project (Optional)"
                          className="w-full px-3 xs:px-3.5 sm:px-4 py-2.5 xs:py-3 border border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#FF6A3D] focus:border-transparent outline-none transition-all text-[#0B1C33] placeholder-[#888] text-sm resize-none"
                          style={{ fontFamily: 'Aeonik, sans-serif' }}
                        />
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="pt-1 xs:pt-2"
                      >
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-4 py-3 xs:py-3.5 sm:py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#FF6A3D]/25 text-sm xs:text-base"
                          style={{ fontFamily: 'Aeonik, sans-serif' }}
                        >
                          Get Free Consultation
                          <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </motion.button>
                      </motion.div>

                      {/* Trust Note */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-[10px] xs:text-xs text-[#777] text-center flex items-center justify-center gap-1 pt-1 xs:pt-2"
                        style={{ fontFamily: 'Aeonik, sans-serif' }}
                      >
                        <svg className="w-3 h-3 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        100% Secure • No Spam • Unsubscribe Anytime
                      </motion.p>
                    </form>
                  </div>
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