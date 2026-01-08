// WhatsAppWidget.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp 
} from "react-icons/fa";

// 💬 WHATSAPP FLOATING WIDGET WITH SOCIAL ICONS
const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Show tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 5000);

    // Show social icons after 3 seconds
    const socialTimer = setTimeout(() => {
      setShowSocialIcons(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(socialTimer);
    };
  }, []);

  const messages = [
    { text: "Hey! Welcome to Social Spark India 👋,How can I help you?", time: "12:00 PM" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://instagram.com/socialsparkindia",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600"
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://facebook.com/socialsparkindia",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/company/socialsparkindia",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    }
  ];

  return (
    <>
      {/* LEFT SIDE SOCIAL ICONS - STUCK TO EDGE */}
      <AnimatePresence>
        {showSocialIcons && (
          <motion.div
            className="fixed left-0 bottom-32 z-[9997] hidden md:flex flex-col gap-2"
            initial={{ x: -60 }}
            animate={{ x: 0 }}
            exit={{ x: -60 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative bg-gradient-to-br ${social.color} ${social.hoverColor} h-12 flex items-center justify-start text-white shadow-lg group overflow-hidden`}
                style={{
                  width: hoveredIcon === index ? "150px" : "48px",
                  borderTopRightRadius: '24px',
                  borderBottomRightRadius: '24px',
                  transition: 'width 0.15s ease-out' // Fast transition
                }}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon Container */}
                <div className="min-w-[48px] h-12 flex items-center justify-center">
                  <span className="text-xl">
                    {social.icon}
                  </span>
                </div>

                {/* Label - Shows when expanded */}
                {hoveredIcon === index && (
                  <span
                    className="pr-4 font-medium text-sm whitespace-nowrap opacity-100"
                    style={{ 
                      fontFamily: 'Aeonik, sans-serif',
                      transition: 'opacity 0.1s ease-out'
                    }}
                  >
                    {social.name}
                  </span>
                )}

                {/* Shine Effect */}
                {hoveredIcon === index && (
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse"
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* RIGHT SIDE WHATSAPP BUTTON */}
      <motion.div
        className="fixed bottom-6 right-6 z-[9999]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: 1,
          type: "spring",
          stiffness: 260,
          damping: 20 
        }}
      >
        {/* Pulse Animation Ring */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.4, 0, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </div>

        {/* Second Pulse Ring */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.3, 0, 0]
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </div>

        {/* Tooltip Message */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute bottom-2 right-20 whitespace-nowrap"
            >
              <div className="relative bg-white rounded-lg shadow-xl px-4 py-2 border border-gray-100">
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 
                  border-t-[8px] border-t-transparent
                  border-b-[8px] border-b-transparent
                  border-l-[8px] border-l-white"
                />
                <p className="text-[#0B1C33] text-sm font-medium" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                  👋 Need help? Chat with us!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main WhatsApp Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-xl flex items-center justify-center group overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          <motion.div
            animate={isOpen ? { rotate: -90, scale: 0.8 } : { rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <FaWhatsapp className="w-7 h-7 text-white" />
            )}
          </motion.div>

          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6A3D] rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-6 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden z-[9998]"
            style={{ transformOrigin: "bottom right" }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src="/ss_icon.png" 
                    alt="Social Spark"
                    className="w-12 h-12 rounded-full bg-white p-2"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-sm" style={{ fontFamily: 'Helvetica, sans-serif' }}>
                    Social Spark India
                  </h4>
                  <p className="text-green-100 text-xs">
                    Typically replies within 5 min
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-4 bg-gray-50 h-[200px] overflow-y-auto">
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-2"
                  >
                    <img 
                      src="/ss_icon.png" 
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm">
                        <p className="text-[#0B1C33] text-sm" style={{ fontFamily: 'Aeonik, sans-serif' }}>
                          {msg.text}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Footer */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <motion.a
                href="https://wa.me/917000874785?text=Hi%20Social%20Spark%20India!%20I%20need%20help%20with%20digital%20marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 font-medium text-sm"
                style={{ fontFamily: 'Aeonik, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Start Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;