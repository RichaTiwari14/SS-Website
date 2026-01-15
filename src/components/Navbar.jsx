

// // components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isLandingPage = location.pathname === "/";
  
//   const [viewport, setViewport] = useState({ width: 0, height: 0 });
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Close menu and scroll to top on route change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   // Viewport resize handler
//   useEffect(() => {
//     const handleResize = () => {
//       setViewport({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Manual scroll tracking (more reliable)
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollDistance = 300;
//       const progress = Math.min(window.scrollY / scrollDistance, 1);
//       setScrollProgress(progress);
//     };
    
//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial call
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Logo position values
//   const getLogoValues = () => {
//     if (viewport.width < 640) {
//       return {
//         START_SCALE: 2,
//         logoStartX: viewport.width / 2 - 100,
//         logoStartY: viewport.height / 2 - 60,
//         logoEndX: 16,
//         logoEndY: 5
//       };
//     } else if (viewport.width < 1024) {
//       return {
//         START_SCALE: 2.5,
//         logoStartX: viewport.width / 2 - 200,
//         logoStartY: viewport.height / 2 - 70,
//         logoEndX: 24,
//         logoEndY: 5
//       };
//     } else {
//       return {
//         START_SCALE: 4,
//         logoStartX: viewport.width / 2 - 300,
//         logoStartY: viewport.height / 2 - 80,
//         logoEndX: 48,
//         logoEndY: 5
//       };
//     }
//   };

//   const { START_SCALE, logoStartX, logoStartY, logoEndX, logoEndY } = getLogoValues();

//   // Calculate current logo position based on scroll (only for landing page)
//   const getCurrentLogoStyle = () => {
//     if (!isLandingPage) {
//       return {
//         x: logoEndX,
//         y: logoEndY,
//         scale: 1
//       };
//     }
    
//     return {
//       x: logoStartX + (logoEndX - logoStartX) * scrollProgress,
//       y: logoStartY + (logoEndY - logoStartY) * scrollProgress,
//       scale: START_SCALE + (1 - START_SCALE) * scrollProgress
//     };
//   };

//   const logoStyle = getCurrentLogoStyle();

//   const navigationItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/#about" },
//     { name: "Services", path: "/#services" },
//     { name: "Portfolio", path: "/#portfolio" },
//     { name: "Contact", path: "/#contact" }
//   ];

//   // Navigation handler
//   const handleNavClick = (path) => {
//     setIsMobileMenuOpen(false);
    
//     if (path === "/") {
//       navigate("/");
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }
    
//     if (path.startsWith("/#")) {
//       const sectionId = path.replace("/#", "");
      
//       if (location.pathname !== "/") {
//         // First navigate to home, then scroll
//         navigate("/");
//         setTimeout(() => {
//           const element = document.getElementById(sectionId);
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//           }
//         }, 300);
//       } else {
//         // Already on home, just scroll
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     } else {
//       navigate(path);
//     }
//   };

//   // Header background opacity
//   const headerBgOpacity = isLandingPage ? scrollProgress * 0.95 : 0.95;
//   const showNav = isLandingPage ? scrollProgress > 0.3 : true;

//   return (
//     <>
//       {/* MAIN HEADER */}
//       <header
//         className="fixed top-0 left-0 w-full h-[60px] sm:h-[70px] md:h-[80px] px-4 sm:px-6 md:px-12 flex items-center justify-between z-50 transition-all duration-300"
//         style={{
//           backgroundColor: `rgba(255, 255, 255, ${headerBgOpacity})`,
//           backdropFilter: headerBgOpacity > 0.5 ? "blur(20px)" : "none",
//           boxShadow: headerBgOpacity > 0.8 ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
//         }}
//       >
//         <div className="w-full flex items-center">
          
//           {/* LOGO */}
//           {isLandingPage ? (
//             // Animated Logo for Landing Page
//             <motion.div 
//               className="fixed z-50 cursor-pointer" 
//               animate={{
//                 x: logoStyle.x,
//                 y: logoStyle.y,
//                 scale: logoStyle.scale
//               }}
//               transition={{ type: "spring", stiffness: 100, damping: 30 }}
//               style={{ transformOrigin: "top left" }}
//               onClick={() => handleNavClick('/')}
//             >
//               <img 
//                 src="/Social_Spark_Logo.png" 
//                 alt="Social Spark India" 
//                 className="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
//               />
//             </motion.div>
//           ) : (
//             // Static Logo for Other Pages
//             <div 
//               className="cursor-pointer z-50"
//               onClick={() => handleNavClick('/')}
//             >
//               <img 
//                 src="/Social_Spark_Logo.png" 
//                 alt="Social Spark India" 
//                 className="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
//               />
//             </div>
//           )}

//           {/* Spacer */}
//           <div className="flex-1"></div>

//           {/* DESKTOP NAVIGATION */}
//           <nav 
//             className="hidden lg:flex items-center space-x-6 xl:space-x-8 transition-opacity duration-300"
//             style={{ opacity: showNav ? 1 : 0, pointerEvents: showNav ? "auto" : "none" }}
//           >
//             {navigationItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => handleNavClick(item.path)}
//                 className="relative text-[#0B1C33] hover:text-[#FF6A3D] transition-colors duration-300 font-medium text-sm xl:text-base tracking-wide group"
//                 style={{ fontFamily: 'Aeonik, sans-serif' }}
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6A3D] group-hover:w-full transition-all duration-300" />
//               </button>
//             ))}
            
//             {/* CTA Button */}
//             <button
//               className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-sm xl:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
//               onClick={() => handleNavClick('/#contact')}
//               style={{ fontFamily: 'Aeonik, sans-serif' }}
//             >
//               Get Started
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </button>
//           </nav>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center transition-opacity duration-300"
//             style={{ opacity: showNav ? 1 : 0, pointerEvents: showNav ? "auto" : "none" }}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <span
//               className={`w-6 h-0.5 bg-[#0B1C33] transition-all duration-300 absolute ${
//                 isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
//               }`}
//             />
//             <span
//               className={`w-6 h-0.5 bg-[#0B1C33] transition-all duration-300 ${
//                 isMobileMenuOpen ? "opacity-0" : "opacity-100"
//               }`}
//             />
//             <span
//               className={`w-6 h-0.5 bg-[#0B1C33] transition-all duration-300 absolute ${
//                 isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
//               }`}
//             />
//           </button>
//         </div>
//       </header>

//       {/* MOBILE MENU OVERLAY */}
//       <div
//         className={`fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-500 ${
//           isMobileMenuOpen 
//             ? "opacity-100 translate-x-0" 
//             : "opacity-0 translate-x-full pointer-events-none"
//         }`}
//       >
//         {/* Mobile Logo */}
//         <img 
//           src="/Social_Spark_Logo.png" 
//           alt="Social Spark India" 
//           className="h-10 mb-8 cursor-pointer"
//           onClick={() => handleNavClick('/')}
//         />

//         {/* Mobile Nav Items */}
//         {navigationItems.map((item, index) => (
//           <button
//             key={item.name}
//             onClick={() => handleNavClick(item.path)}
//             className="text-2xl font-bold text-[#0B1C33] hover:text-[#FF6A3D] transition-all duration-300 my-3"
//             style={{ 
//               fontFamily: 'Helvetica, Arial, sans-serif',
//               transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
//               opacity: isMobileMenuOpen ? 1 : 0,
//               transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)"
//             }}
//           >
//             {item.name}
//           </button>
//         ))}

//         {/* Mobile CTA */}
//         <button
//           className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-3 rounded-full text-lg font-semibold mt-6 flex items-center gap-2 transition-all duration-300 hover:scale-105"
//           onClick={() => handleNavClick('/#contact')}
//           style={{ 
//             fontFamily: 'Aeonik, sans-serif',
//             transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
//             opacity: isMobileMenuOpen ? 1 : 0,
//             transform: isMobileMenuOpen ? "scale(1)" : "scale(0.8)"
//           }}
//         >
//           Get Started
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//           </svg>
//         </button>
//       </div>

//       {/* Backdrop */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-30 lg:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;



// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";
  
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Services data - 6 services with their paths
  const servicesData = [
    {
      icon: "🎨",
      name: "Branding & Strategy",
      path: "/services/branding-strategy"
    },
    {
      icon: "📱",
      name: "Social Media Marketing",
      path: "/services/social-media-marketing"
    },
    {
      icon: "💻",
      name: "Website Development",
      path: "/services/website-development"
    },
    {
      icon: "🔍",
      name: "Search Engine Optimization (SEO)",
      path: "/services/seo"
    },
    {
      icon: "🤝",
      name: "Influencer Marketing",
      path: "/services/influencer-marketing"
    },
    {
      icon: "📸",
      name: "Photography & Videography",
      path: "/services/photography-videography"
    }
  ];

  // Close menu and scroll to top on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Viewport resize handler
  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Manual scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = 300;
      const progress = Math.min(window.scrollY / scrollDistance, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logo position values
  const getLogoValues = () => {
    if (viewport.width < 640) {
      return {
        START_SCALE: 2,
        logoStartX: viewport.width / 2 - 100,
        logoStartY: viewport.height / 2 - 60,
        logoEndX: 16,
        logoEndY: 5
      };
    } else if (viewport.width < 1024) {
      return {
        START_SCALE: 2.5,
        logoStartX: viewport.width / 2 - 200,
        logoStartY: viewport.height / 2 - 70,
        logoEndX: 24,
        logoEndY: 5
      };
    } else {
      return {
        START_SCALE: 4,
        logoStartX: viewport.width / 2 - 300,
        logoStartY: viewport.height / 2 - 80,
        logoEndX: 48,
        logoEndY: 5
      };
    }
  };

  const { START_SCALE, logoStartX, logoStartY, logoEndX, logoEndY } = getLogoValues();

  const getCurrentLogoStyle = () => {
    if (!isLandingPage) {
      return { x: logoEndX, y: logoEndY, scale: 1 };
    }
    return {
      x: logoStartX + (logoEndX - logoStartX) * scrollProgress,
      y: logoStartY + (logoEndY - logoStartY) * scrollProgress,
      scale: START_SCALE + (1 - START_SCALE) * scrollProgress
    };
  };

  const logoStyle = getCurrentLogoStyle();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutdetail" },
    { name: "Services", path: "/#services", hasDropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" }
  ];

  // Navigation handler
  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    
    if (path === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(path);
    }
  };

  // Service click handler
  const handleServiceClick = (servicePath) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    navigate(servicePath);
  };

  const headerBgOpacity = isLandingPage ? scrollProgress * 0.95 : 0.95;
  const showNav = isLandingPage ? scrollProgress > 0.3 : true;

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className="fixed top-0 left-0 w-full h-[60px] sm:h-[70px] md:h-[80px] px-4 sm:px-6 md:px-12 flex items-center justify-between z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${headerBgOpacity})`,
          backdropFilter: headerBgOpacity > 0.5 ? "blur(20px)" : "none",
          boxShadow: headerBgOpacity > 0.8 ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="w-full flex items-center">
          
          {/* LOGO */}
          {isLandingPage ? (
            <motion.div 
              className="fixed z-50 cursor-pointer" 
              animate={{
                x: logoStyle.x,
                y: logoStyle.y,
                scale: logoStyle.scale
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              style={{ transformOrigin: "top left" }}
              onClick={() => handleNavClick('/')}
            >
              <img 
                src="/Social_Spark_Logo.png" 
                alt="Social Spark India" 
                className="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
              />
            </motion.div>
          ) : (
            <div 
              className="cursor-pointer z-50"
              onClick={() => handleNavClick('/')}
            >
              <img 
                src="/Social_Spark_Logo.png" 
                alt="Social Spark India" 
                className="h-[30px] sm:h-[40px] md:h-[50px] w-auto object-contain"
              />
            </div>
          )}

          <div className="flex-1"></div>

          {/* DESKTOP NAVIGATION */}
          <nav 
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 transition-opacity duration-300"
            style={{ opacity: showNav ? 1 : 0, pointerEvents: showNav ? "auto" : "none" }}
          >
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(item.path)}
                  className="relative text-[#0B1C33] hover:text-[#FF6A3D] transition-colors duration-300 font-medium text-sm xl:text-base tracking-wide group flex items-center gap-1"
                  style={{ fontFamily: 'Aeonik, sans-serif' }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6A3D] group-hover:w-full transition-all duration-300" />
                </button>

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        style={{ 
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        {/* Dropdown Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />
                        
                        {/* Services List */}
                        <div className="relative py-2">
                          {servicesData.map((service, index) => (
                            <motion.button
                              key={service.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: 1, 
                                x: 0,
                                transition: { delay: index * 0.05 }
                              }}
                              onClick={() => handleServiceClick(service.path)}
                              className="w-full px-5 py-3 text-left hover:bg-gradient-to-r hover:from-[#FF6A3D]/10 hover:to-transparent transition-all duration-300 flex items-center gap-3 group"
                            >
                              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                              </span>
                              <div className="flex-1">
                                <span 
                                  className="text-[#0B1C33] group-hover:text-[#FF6A3D] transition-colors duration-300 font-medium text-sm block"
                                  style={{ fontFamily: 'Aeonik, sans-serif' }}
                                >
                                  {service.name}
                                </span>
                              </div>
                              <svg 
                                className="w-4 h-4 text-gray-400 group-hover:text-[#FF6A3D] group-hover:translate-x-1 transition-all duration-300"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.button>
                          ))}
                          
                          {/* View All Services Link */}
                          <div className="border-t border-gray-100 mt-2 pt-2 px-5 pb-3">
                            <button
                              onClick={() => handleNavClick('/#services')}
                              className="text-[#FF6A3D] hover:text-[#e55a30] font-semibold text-sm flex items-center gap-2 group"
                              style={{ fontFamily: 'Aeonik, sans-serif' }}
                            >
                              View All Services
                              <svg 
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <button
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-sm xl:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
              onClick={() => handleNavClick('/contact')}
              style={{ fontFamily: 'Aeonik, sans-serif' }}
            >
              Get Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center transition-opacity duration-300"
            style={{ opacity: showNav ? 1 : 0, pointerEvents: showNav ? "auto" : "none" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-[#0B1C33] transition-all duration-300 absolute ${
                isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#0B1C33] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#0B1C33] transition-all duration-300 absolute ${
                isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-start pt-24 overflow-y-auto transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Mobile Logo */}
        <img 
          src="/Social_Spark_Logo.png" 
          alt="Social Spark India" 
          className="h-10 mb-8 cursor-pointer"
          onClick={() => handleNavClick('/')}
        />

        {/* Mobile Nav Items */}
        {navigationItems.map((item, index) => (
          <div key={item.name} className="w-full flex flex-col items-center">
            <button
              onClick={() => {
                if (item.hasDropdown) {
                  setIsMobileServicesOpen(!isMobileServicesOpen);
                } else {
                  handleNavClick(item.path);
                }
              }}
              className="text-2xl font-bold text-[#0B1C33] hover:text-[#FF6A3D] transition-all duration-300 my-3 flex items-center gap-2"
              style={{ 
                fontFamily: 'Helvetica, Arial, sans-serif',
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)"
              }}
            >
              {item.name}
              {item.hasDropdown && (
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>

            {/* Mobile Services Dropdown */}
            {item.hasDropdown && (
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-xs overflow-hidden"
                  >
                    <div className="bg-gray-50 rounded-xl py-2 px-4 mb-4">
                      {servicesData.map((service, sIndex) => (
                        <motion.button
                          key={service.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { delay: sIndex * 0.05 }
                          }}
                          onClick={() => handleServiceClick(service.path)}
                          className="w-full py-3 text-left flex items-center gap-3 border-b border-gray-200 last:border-0"
                        >
                          <span className="text-xl">{service.icon}</span>
                          <span 
                            className="text-[#0B1C33] font-medium text-base"
                            style={{ fontFamily: 'Aeonik, sans-serif' }}
                          >
                            {service.name}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}

        {/* Mobile CTA */}
        <button
          className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-3 rounded-full text-lg font-semibold mt-6 flex items-center gap-2 transition-all duration-300 hover:scale-105"
          onClick={() => handleNavClick('/#contact')}
          style={{ 
            fontFamily: 'Aeonik, sans-serif',
            transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "scale(1)" : "scale(0.8)"
          }}
        >
          Get Started
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;