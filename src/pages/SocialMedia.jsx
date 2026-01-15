// SocialMediaMarketingPage.jsx - Premium Social Media Marketing Page
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SocialMediaMarketingPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesOverview />
      <PlatformsSection />
      <ProcessSection />
      <ResultsSection />
      <CTASection />
    </div>
  );
};

// ============================================
// ✅ MOTION 3D IMAGE COMPONENT
// ============================================
// const Motion3DImage = ({ src, alt, className, delay = 0 }) => {
//   const [imageError, setImageError] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
//       className={className}
//     >
//       {!imageError ? (
//         <motion.img
//           src={src}
//           alt={alt}
//           loading="lazy"
//           className="w-full h-full object-contain"
//           onError={() => setImageError(true)}
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//       ) : (
//         <div className="w-full h-full flex flex-col items-center justify-center">
//           <motion.div
//             animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
//             transition={{ duration: 4, repeat: Infinity }}
//           >
//             <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#FF6A3D]/20 rounded-full flex items-center justify-center mb-4 border-2 border-[#FF6A3D]/30">
//               <span className="text-5xl sm:text-6xl">📱</span>
//             </div>
//           </motion.div>
//           <p className="text-white/50 text-sm">Social Media Marketing</p>
//           <p className="text-white/30 text-xs mt-1">Image will appear here</p>
//         </div>
//       )}
//     </motion.div>
//   );
// };
const Motion3DImage = ({ src, alt, className, delay = 0, swing = false }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={className}
      style={{ 
        transformOrigin: "bottom center", // 👈 Bottom fix, top moves
      }}
    >
      {!imageError ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-contain object-bottom"
          onError={() => setImageError(true)}
          animate={swing ? { 
            rotateZ: [0, 3, -3, 2, -2, 0], // 👈 Swing left-right
          } : {}}
          transition={swing ? { 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
          } : {}}
          style={{
            transformOrigin: "bottom center", // 👈 Pivot point at bottom
          }}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-end pb-8">
          <motion.div
            animate={{ rotateZ: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ transformOrigin: "bottom center" }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#FF6A3D]/20 rounded-full flex items-center justify-center mb-4 border-2 border-[#FF6A3D]/30">
              <span className="text-5xl sm:text-6xl">📱</span>
            </div>
          </motion.div>
          <p className="text-white/50 text-sm">Your Image Here</p>
        </div>
      )}
    </motion.div>
  );
};
// ============================================
// 🔥 HERO SECTION - With 3 Rings
// ============================================
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative min-h-[90vh] bg-[#0B1C33] overflow-hidden flex items-center"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#FF6A3D]/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#0052CC]/10 rounded-full blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
              <span className="text-[#FF6A3D] text-sm font-medium uppercase tracking-wider">
                Social Media Marketing
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              Dominate
              <br />
              <span className="text-[#FF6A3D]">Social Media</span>
              <br />
              Grow Your
              <br />
              <span className="text-[#FF6A3D]">Audience</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              We manage your social media platforms with clear content direction, 
              strong visuals, and messaging that connects with the right audience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-[#FF6A3D]/20"
              >
                Get Started 🚀
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: "200+", label: "Brands Managed" },
                { number: "5M+", label: "Followers Grown" },
                { number: "10x", label: "Avg Engagement" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-[#DFDFDF]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image with 3 ROUND RINGS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            {/* Container - Taller Height */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
               
               {/* ====== RING 1 - Outermost (Orange, Clockwise) ====== */}
               <motion.div
                 className="absolute inset-[-40px] sm:inset-[-50px] md:inset-[-60px] rounded-full border-[3px] border-[#FF6A3D]/40"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               >
                 {/* Dot on Ring 1 */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6A3D] rounded-full" />
               </motion.div>
           
               {/* ====== RING 2 - Middle (Blue, Counter-Clockwise) ====== */}
               <motion.div
                 className="absolute inset-[-20px] sm:inset-[-25px] md:inset-[-30px] rounded-full border-[2px] border-dashed border-[#0052CC]/50"
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               >
                 
                 {/* Dot on Ring 2 */}
                 <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#0052CC] rounded-full" />
               </motion.div>
           
               {/* ====== RING 3 - Inner (Orange, Clockwise, Slower) ====== */}
               <motion.div
                 className="absolute inset-[-5px] sm:inset-[-8px] md:inset-[-10px] rounded-full border-[2px] border-[#FF6A3D]/60"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               >
                 {/* Dot on Ring 3 */}
                
               </motion.div>
           

              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                />

                <Motion3DImage
                  src="/services/smmBanner.webp"
                  alt="Social Media Marketing"
                  className="w-full h-full p-6"
                  delay={0.3}
                  swing={true}  
                />

                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6A3D] rounded-full" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#0052CC] rounded-full" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// ============================================
// 📋 SERVICES OVERVIEW
// ============================================
const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { 
      icon: "📝", 
      title: "Content Creation", 
      description: "Engaging posts, reels, stories, and carousels designed to capture attention and drive engagement." 
    },
    { 
      icon: "📅", 
      title: "Content Calendar", 
      description: "Strategic content planning and scheduling to maintain consistent brand presence across platforms." 
    },
    { 
      icon: "📊", 
      title: "Analytics & Insights", 
      description: "Data-driven insights to track performance, understand audience behavior, and optimize strategy." 
    },
    { 
      icon: "💬", 
      title: "Community Management", 
      description: "Active engagement with your audience through comments, DMs, and community building." 
    },
    { 
      icon: "🎯", 
      title: "Paid Advertising", 
      description: "Targeted social media ads on Facebook, Instagram, LinkedIn to reach your ideal customers." 
    },
    { 
      icon: "📈", 
      title: "Growth Strategy", 
      description: "Customized growth strategies to increase followers, engagement, and brand awareness." 
    },
  ];

  const cardColors = ["#FF6A3D", "#0052CC", "#6A00F3", "#1B7A6C", "#D71329", "#F4AD1F"];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            Complete <span className="text-[#FF6A3D]">Social Media</span> Solutions
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Everything you need to build a powerful social media presence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div 
                className="h-full p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: `${cardColors[index]}08`,
                  borderColor: `${cardColors[index]}20`,
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: cardColors[index] }}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1C33] mb-3">{service.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 📱 PLATFORMS SECTION
// ============================================
const PlatformsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const platforms = [
    { 
      name: "Instagram", 
      icon: "📸", 
      color: "#E4405F",
      features: ["Reels & Stories", "Feed Posts", "IGTV", "Shopping"]
    },
    { 
      name: "Facebook", 
      icon: "👤", 
      color: "#1877F2",
      features: ["Page Management", "Groups", "Ads", "Marketplace"]
    },
    { 
      name: "LinkedIn", 
      icon: "💼", 
      color: "#0077B5",
      features: ["B2B Content", "Company Pages", "Articles", "Networking"]
    },
    { 
      name: "Twitter/X", 
      icon: "🐦", 
      color: "#1DA1F2",
      features: ["Tweets", "Threads", "Spaces", "Trending"]
    },
    { 
      name: "YouTube", 
      icon: "▶️", 
      color: "#FF0000",
      features: ["Video Content", "Shorts", "Community", "Analytics"]
    },
    { 
      name: "Pinterest", 
      icon: "📌", 
      color: "#BD081C",
      features: ["Pins", "Boards", "Shopping", "Ideas"]
    },
  ];

  return (
    <section ref={ref} className="bg-[#0B1C33] py-20 sm:py-28 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052CC]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Platforms We Manage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            All Major <span className="text-[#FF6A3D]">Social Platforms</span>
          </h2>
          <p className="text-[#DFDFDF] text-lg max-w-2xl mx-auto">
            We manage your presence across all platforms that matter to your audience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#FF6A3D]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${platform.color}20` }}
                >
                  <span className="text-2xl">{platform.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{platform.name}</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {platform.features.map((feature, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ============================================
// 🔄 PROCESS SECTION
// ============================================
const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { step: "01", icon: "🔍", title: "Audit & Research", description: "Analyze your current presence and competitors." },
    { step: "02", icon: "📋", title: "Strategy Planning", description: "Create customized content and growth strategy." },
    { step: "03", icon: "🎨", title: "Content Creation", description: "Design and create engaging social content." },
    { step: "04", icon: "📈", title: "Publish & Grow", description: "Post content and optimize for maximum reach." },
  ];

  return (
    <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            How We <span className="text-[#FF6A3D]">Grow</span> Your Social
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative w-28 h-28 mx-auto mb-6">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF6A3D]/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-3 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">{step.icon}</span>
                  <span className="text-[#FF6A3D] font-bold text-sm">{step.step}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0B1C33] mb-2">{step.title}</h3>
              <p className="text-[#555555] text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 📊 RESULTS SECTION
// ============================================
const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    { number: "200+", label: "Brands Managed", icon: "🏢" },
    { number: "5M+", label: "Followers Grown", icon: "👥" },
    { number: "500%", label: "Avg Engagement Increase", icon: "📈" },
    { number: "1000+", label: "Content Pieces/Month", icon: "📝" },
  ];

  const contentTypes = [
    { name: "Reels & Videos", icon: "🎬" },
    { name: "Carousel Posts", icon: "📸" },
    { name: "Stories", icon: "📱" },
    { name: "Infographics", icon: "📊" },
    { name: "Memes & Trends", icon: "😂" },
    { name: "Educational Content", icon: "📚" },
  ];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Results Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            Results That <span className="text-[#FF6A3D]">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-[#F8F9FA] rounded-2xl"
            >
              <span className="text-3xl mb-2 block">{result.icon}</span>
              <div className="text-3xl sm:text-4xl font-black text-[#0B1C33] mb-1">{result.number}</div>
              <div className="text-[#555555] text-sm">{result.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Content Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-[#0B1C33] mb-8">Content We Create</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm"
              >
                <span className="text-xl">{type.icon}</span>
                <span className="font-medium text-[#0B1C33]">{type.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// ============================================
// 📞 CTA SECTION
// ============================================
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-6"
          >
            📱
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6">
            Ready to <span className="text-[#FF6A3D]">Dominate</span><br />
            Social Media?
          </h2>
          
          <p className="text-[#555555] text-lg mb-8 max-w-2xl mx-auto">
            Let's create a social media strategy that grows your brand and engages your audience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get Free Audit →
            </motion.button>

            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#0B1C33] hover:bg-[#0B1C33] hover:text-white text-[#0B1C33] px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              📞 Let's Talk
            </motion.a>
          </div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-[#555555] text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Free Social Media Audit
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Custom Strategy
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Monthly Reports
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaMarketingPage;