// ClientLogosBento.jsx - Fully Responsive Version
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ClientLogosBento = () => {
  const clientLogos = [
    { name: "Sky AutoMobiles", logo: "/clients/sky-auto-logo.webp" },
    { name: "Milkiyana", logo: "/clients/milkiyana.webp" },
    { name: "Nistha Oil", logo: "/clients/nistha.webp" },
    { name: "Travel Tailor", logo: "/clients/tt-logo.webp" },
    { name: "P2", logo: "/clients/P2.webp" },
    { name: "Mangalam", logo: "/clients/mangalam.webp" },
    { name: "Pawan Patel", logo: "/clients/pp.webp" },
    { name: "Prime Gold", logo: "/clients/primegold.webp" },
    { name: "Sanjeevani", logo: "/clients/sanjivani.webp" },
    { name: "Shaurya TMT", logo: "/clients/shaurya-logo.webp" },
    { name: "TSS", logo: "/clients/tss.webp" },
    { name: "Friendly Footprints", logo: "/clients/footfriendly.webp" },
    { name: "Karuna Shree", logo: "/clients/karuna-shree-logo.webp" },
    { name: "Kalda", logo: "/clients/kalda.webp" },
    { name: "Geetalakshmi", logo: "/clients/geetalakshmi.webp" },
  ];

  const cardColors = [
    "#FF6A3D", "#0052CC", "#0B1C33", "#D71329", 
    "#6A00F3", "#1B7A6C", "#F4AD1F",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Responsive grid positions
  // Mobile (2 cols): All items span 1 column
  // Tablet (3 cols): Some items span 2 columns  
  // Desktop (4 cols): Full bento layout
  const getGridPosition = (index) => {
    const desktopPositions = [
      "md:col-span-2 md:row-span-1",  // 0 - wide
      "md:col-span-1 md:row-span-1",  // 1
      "md:col-span-1 md:row-span-1",  // 2
      "md:col-span-1 md:row-span-2",  // 3 - tall
      "md:col-span-1 md:row-span-1",  // 4
      "md:col-span-2 md:row-span-2",  // 5 - large featured
      "md:col-span-1 md:row-span-1",  // 6
      "md:col-span-1 md:row-span-1",  // 7
      "md:col-span-1 md:row-span-1",  // 8
      "md:col-span-1 md:row-span-1",  // 9
      "md:col-span-1 md:row-span-1",  // 10
      "md:col-span-1 md:row-span-1",  // 11
      "md:col-span-1 md:row-span-1",  // 12
      "md:col-span-1 md:row-span-1",  // 13
      "md:col-span-1 md:row-span-1",  // 14
    ];

    const tabletPositions = [
      "sm:col-span-2 sm:row-span-1",  // 0 - wide on tablet
      "sm:col-span-1 sm:row-span-1",  // 1
      "sm:col-span-1 sm:row-span-1",  // 2
      "sm:col-span-1 sm:row-span-1",  // 3
      "sm:col-span-1 sm:row-span-1",  // 4
      "sm:col-span-2 sm:row-span-1",  // 5 - wide on tablet (not tall)
      "sm:col-span-1 sm:row-span-1",  // 6
      "sm:col-span-1 sm:row-span-1",  // 7
      "sm:col-span-1 sm:row-span-1",  // 8
      "sm:col-span-1 sm:row-span-1",  // 9
      "sm:col-span-1 sm:row-span-1",  // 10
      "sm:col-span-1 sm:row-span-1",  // 11
      "sm:col-span-2 sm:row-span-1",  // 12 - wide on tablet
      "sm:col-span-1 sm:row-span-1",  // 13
      "sm:col-span-1 sm:row-span-1",  // 14
    ];

    // Mobile: all single column
    const mobilePosition = "col-span-1 row-span-1";

    return `${mobilePosition} ${tabletPositions[index] || ""} ${desktopPositions[index] || ""}`;
  };

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-white to-[#F8F9FA] py-12 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Animated Background - Hidden on mobile for performance */}
      <motion.div 
        className="hidden sm:block absolute top-20 right-20 w-48 md:w-72 h-48 md:h-72 bg-[#FF6A3D]/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hidden sm:block absolute bottom-20 left-20 w-64 md:w-96 h-64 md:h-96 bg-[#0052CC]/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span 
            className="inline-block text-[#FF6A3D] font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Trusted Partners
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1C33]"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Our <span className="text-[#FF6A3D]">Clients</span>
          </motion.h2>
          <motion.div 
            className="w-12 sm:w-16 h-1 bg-[#FF6A3D] mx-auto mt-3 sm:mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ maxWidth: 64 }}
          />
        </motion.div>

        {/* Bento Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[80px] sm:auto-rows-[100px] md:auto-rows-[120px] lg:auto-rows-[130px] gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {clientLogos.map((client, index) => (
            <SimpleCard
              key={index}
              client={client}
              index={index}
              color={cardColors[index % cardColors.length]}
              gridPosition={getGridPosition(index)}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// ✅ Simple Card - Fully Responsive
const SimpleCard = ({ client, index, color, gridPosition, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  // Handle touch for mobile
  const handleTouch = () => {
    setIsTouched(true);
    setTimeout(() => setIsTouched(false), 300);
  };

  const isActive = isHovered || isTouched;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
      } : {}}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.5), // Cap delay for many items
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ 
        y: -6,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouch}
      className={`${gridPosition} group cursor-pointer`}
    >
      <motion.div
        className="h-full w-full rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: isActive ? `${color}10` : '#FFFFFF',
          border: `1.5px solid ${isActive ? color : `${color}30`}`,
          boxShadow: isActive
            ? `0 15px 40px ${color}20, 0 5px 15px rgba(0,0,0,0.08)`
            : '0 2px 10px rgba(0,0,0,0.04)',
        }}
        animate={{
          borderColor: isActive ? color : `${color}30`,
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Pulse Ring Effect - Only on larger screens */}
        <motion.div
          className="hidden sm:block absolute inset-0 rounded-xl sm:rounded-2xl"
          style={{ border: `2px solid ${color}` }}
          initial={{ scale: 1, opacity: 0 }}
          animate={isActive ? {
            scale: [1, 1.04, 1],
            opacity: [0, 0.25, 0],
          } : {}}
          transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
        />

        {/* Logo - Responsive sizing */}
        <motion.img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          className="max-h-[70%] sm:max-h-[75%] md:max-h-[80%] lg:max-h-[85%] max-w-[80%] sm:max-w-[85%] md:max-w-[90%] object-contain relative z-10"
          animate={{
            scale: isActive ? 1.06 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine Sweep - Only on hover devices */}
        <motion.div
          className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          initial={{ x: "-200%" }}
          animate={isActive ? { x: "200%" } : { x: "-200%" }}
          transition={{ duration: 0.6 }}
        />

        {/* Mobile touch feedback */}
        <motion.div
          className="sm:hidden absolute inset-0 rounded-xl"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isTouched ? 0.1 : 0 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ClientLogosBento;