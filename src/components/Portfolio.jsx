// // PortfolioPage.jsx - Premium Portfolio Page with 3D Image
// import React, { useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";

// const PortfolioPage = () => {
//   return (
//     <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
//       <HeroSection />
//       <PortfolioGrid />
//       <ClientsSection />
//       <StatsSection />
//       <CTASection />
//     </div>
//   );
// };

// // ============================================
// // ✅ MOTION 3D IMAGE COMPONENT
// // ============================================
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
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />
//       ) : (
//         // Fallback if image fails
//         <motion.div
//           className="w-full h-full flex items-center justify-center"
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <div className="text-8xl">🎨</div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// // ============================================
// // 🔥 HERO SECTION - With 3D Image
// // ============================================
// const HeroSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section
//       ref={ref}
//       className="relative min-h-[90vh] bg-[#0B1C33] overflow-hidden flex items-center"
//     >
//       {/* Background Glows */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#FF6A3D]/10 rounded-full blur-[120px]"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-[#0052CC]/10 rounded-full blur-[150px]"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="order-2 lg:order-1"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-4 py-2 rounded-full mb-6"
//             >
//               <span className="w-2 h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
//               <span className="text-[#FF6A3D] text-sm font-medium uppercase tracking-wider">
//                 Our Work
//               </span>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
//               style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
//             >
//               Our Creative
//               <br />
//               <span className="text-[#FF6A3D]">Portfolio</span>
//               <br />
//               <span className="text-[#92EBF9]">Showcase</span>
//             </motion.h1>

//             {/* Supporting Text */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
//             >
//               Explore our successful campaigns, creative projects, and the brands
//               we've helped grow through digital marketing excellence.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.5 }}
//               className="flex flex-wrap gap-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-[#FF6A3D]/20"
//               >
//                 View Projects 🎨
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
//               >
//                 Get Quote
//               </motion.button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="flex gap-8 mt-12"
//             >
//               {[
//                 { number: "150+", label: "Projects" },
//                 { number: "100+", label: "Clients" },
//                 { number: "50+", label: "Awards" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center sm:text-left">
//                   <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
//                   <div className="text-sm text-[#DFDFDF]/70">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Column - 3D Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
//             className="order-1 lg:order-2 relative flex items-center justify-center"
//           >
// <div className="relative w-[420px] h-[520px] sm:w-[500px] sm:h-[620px] md:w-[580px] md:h-[720px] lg:w-[650px] lg:h-[820px]">              
//               {/* Decorative Rings */}
            

//               {/* IMAGE CONTAINER */}
//               <div className="relative w-full h-full rounded-full overflow-hidden">
//                 {/* Grid Pattern */}
//                 <div
//                   className="absolute inset-0 opacity-10"
//                   style={{
//                     backgroundImage: `
//                       linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//                     `,
//                     backgroundSize: "30px 30px",
//                   }}
//                 />

//                 {/* 3D Floating Image */}
//                 <Motion3DImage
//                   src="/portfolio/portfolio-logo.png"
//                   alt="Portfolio Showcase"
//                   className="w-full h-full p-6"
//                   delay={0.3}
//                 />

//                 {/* Decorative Dots */}
//                 <motion.div 
//                   className="absolute top-4 right-4 w-3 h-3 bg-[#FF6A3D] rounded-full"
//                   animate={{ scale: [1, 1.3, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//                 <motion.div 
//                   className="absolute bottom-4 left-4 w-3 h-3 bg-[#0052CC] rounded-full"
//                   animate={{ scale: [1, 1.3, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                 />
//                 <motion.div 
//                   className="absolute top-1/2 right-8 w-2 h-2 bg-[#92EBF9] rounded-full"
//                   animate={{ scale: [1, 1.5, 1] }}
//                   transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//                 />
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>

//       {/* Scroll Indicator */}
     
//     </section>
//   );
// };

// // ============================================
// // 📸 PORTFOLIO GRID (Same as before)
// // ============================================
// const PortfolioGrid = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);

//   const categories = [
//     "All",
//     "Social Media",
//     "Branding",
//     "Web Design",
//     "Influencer",
//     "Video Production",
//   ];

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Luxury Fashion Brand Campaign",
//       category: "Social Media",
//       client: "Elite Fashion House",
//       image: "/portfolio/fashion-campaign.jpg",
//       description: "Complete social media transformation for a luxury fashion brand",
//       results: { reach: "5M+", engagement: "12%", growth: "250%" },
//       color: "#FF6A3D",
//     },
//     {
//       id: 2,
//       title: "Tech Startup Rebranding",
//       category: "Branding",
//       client: "InnovateTech Solutions",
//       image: "/portfolio/tech-branding.jpg",
//       description: "Full brand identity redesign including logo, guidelines, and collateral",
//       results: { reach: "2M+", engagement: "8%", growth: "180%" },
//       color: "#0052CC",
//     },
//     {
//       id: 3,
//       title: "E-commerce Website Redesign",
//       category: "Web Design",
//       client: "ShopEase India",
//       image: "/portfolio/ecommerce-web.jpg",
//       description: "Modern, conversion-focused e-commerce platform",
//       results: { reach: "1M+", engagement: "15%", growth: "320%" },
//       color: "#6A00F3",
//     },
//     {
//       id: 4,
//       title: "Mega Influencer Campaign",
//       category: "Influencer",
//       client: "FitLife Supplements",
//       image: "/portfolio/influencer-campaign.jpg",
//       description: "Multi-platform influencer marketing with 50+ creators",
//       results: { reach: "25M+", engagement: "18%", growth: "400%" },
//       color: "#1B7A6C",
//     },
//     {
//       id: 5,
//       title: "Product Launch Video",
//       category: "Video Production",
//       client: "GadgetWorld",
//       image: "/portfolio/video-production.jpg",
//       description: "Cinematic product launch video with viral potential",
//       results: { reach: "10M+", engagement: "22%", growth: "500%" },
//       color: "#D71329",
//     },
//     {
//       id: 6,
//       title: "Restaurant Social Media",
//       category: "Social Media",
//       client: "Spice Garden",
//       image: "/portfolio/restaurant-social.jpg",
//       description: "Mouth-watering content strategy for restaurant chain",
//       results: { reach: "3M+", engagement: "14%", growth: "200%" },
//       color: "#F4AD1F",
//     },
//     {
//       id: 7,
//       title: "Healthcare Brand Identity",
//       category: "Branding",
//       client: "MediCare Plus",
//       image: "/portfolio/healthcare-branding.jpg",
//       description: "Trust-building brand identity for healthcare provider",
//       results: { reach: "1.5M+", engagement: "9%", growth: "150%" },
//       color: "#00A878",
//     },
//     {
//       id: 8,
//       title: "SaaS Platform UI/UX",
//       category: "Web Design",
//       client: "CloudFlow",
//       image: "/portfolio/saas-design.jpg",
//       description: "User-centric SaaS dashboard and website design",
//       results: { reach: "500K+", engagement: "25%", growth: "280%" },
//       color: "#7B2CBF",
//     },
//     {
//       id: 9,
//       title: "Celebrity Collaboration",
//       category: "Influencer",
//       client: "Luxe Cosmetics",
//       image: "/portfolio/celebrity-collab.jpg",
//       description: "A-list celebrity partnership for product endorsement",
//       results: { reach: "50M+", engagement: "20%", growth: "600%" },
//       color: "#E91E63",
//     },
//   ];

//   const filteredItems =
//     activeCategory === "All"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === activeCategory);

//   return (
//     <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//             Featured Projects
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
//             Work That <span className="text-[#FF6A3D]">Speaks</span> For Itself
//           </h2>
//           <p className="text-[#555555] text-lg max-w-2xl mx-auto">
//             Each project represents our commitment to excellence and results
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-[#FF6A3D] text-white shadow-lg shadow-[#FF6A3D]/30"
//                   : "bg-[#F8F9FA] text-[#555555] hover:bg-[#FF6A3D]/10 hover:text-[#FF6A3D]"
//               }`}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Portfolio Grid */}
//         <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           <AnimatePresence mode="popLayout">
//             {filteredItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 whileHover={{ y: -10 }}
//                 onClick={() => setSelectedProject(item)}
//                 className="group cursor-pointer"
//               >
//                 <div className="relative overflow-hidden rounded-2xl bg-[#F8F9FA] aspect-[4/3]">
//                   {/* Image Placeholder */}
//                   <div
//                     className="absolute inset-0 flex items-center justify-center"
//                     style={{ backgroundColor: `${item.color}15` }}
//                   >
//                     <div
//                       className="w-20 h-20 rounded-2xl flex items-center justify-center"
//                       style={{ backgroundColor: item.color }}
//                     >
//                       <span className="text-white text-3xl">
//                         {item.category === "Social Media" && "📱"}
//                         {item.category === "Branding" && "🎨"}
//                         {item.category === "Web Design" && "💻"}
//                         {item.category === "Influencer" && "⭐"}
//                         {item.category === "Video Production" && "🎬"}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33] via-[#0B1C33]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
//                     <span
//                       className="text-xs font-semibold uppercase tracking-wider mb-2"
//                       style={{ color: item.color }}
//                     >
//                       {item.category}
//                     </span>
//                     <h3 className="text-white font-bold text-lg mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-white/70 text-sm mb-4 line-clamp-2">
//                       {item.description}
//                     </p>
//                     <div className="flex gap-4">
//                       {Object.entries(item.results).map(([key, value]) => (
//                         <div key={key} className="text-center">
//                           <div className="text-white font-bold text-sm">
//                             {value}
//                           </div>
//                           <div className="text-white/50 text-xs capitalize">
//                             {key}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Category Badge */}
//                   <div
//                     className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
//                     style={{ backgroundColor: item.color }}
//                   >
//                     {item.category}
//                   </div>
//                 </div>

//                 {/* Card Info */}
//                 <div className="mt-4">
//                   <h3 className="text-[#0B1C33] font-bold text-lg group-hover:text-[#FF6A3D] transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-[#555555] text-sm">{item.client}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* View More Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.5 }}
//           className="text-center mt-12"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-[#0B1C33] hover:bg-[#FF6A3D] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
//           >
//             View All Projects →
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <ProjectModal
//             project={selectedProject}
//             onClose={() => setSelectedProject(null)}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// // ============================================
// // 🔍 PROJECT MODAL
// // ============================================
// const ProjectModal = ({ project, onClose }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
//       >
//         {/* Modal Header */}
//         <div
//           className="relative h-64 flex items-center justify-center"
//           style={{ backgroundColor: `${project.color}20` }}
//         >
//           <div
//             className="w-24 h-24 rounded-2xl flex items-center justify-center"
//             style={{ backgroundColor: project.color }}
//           >
//             <span className="text-white text-4xl">
//               {project.category === "Social Media" && "📱"}
//               {project.category === "Branding" && "🎨"}
//               {project.category === "Web Design" && "💻"}
//               {project.category === "Influencer" && "⭐"}
//               {project.category === "Video Production" && "🎬"}
//             </span>
//           </div>

//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
//           >
//             <span className="text-[#0B1C33] text-xl">✕</span>
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="p-8">
//           <span
//             className="text-xs font-semibold uppercase tracking-wider"
//             style={{ color: project.color }}
//           >
//             {project.category}
//           </span>
//           <h2 className="text-2xl sm:text-3xl font-black text-[#0B1C33] mt-2 mb-2">
//             {project.title}
//           </h2>
//           <p className="text-[#555555] text-sm mb-6">
//             Client: {project.client}
//           </p>
//           <p className="text-[#555555] mb-8">{project.description}</p>

//           {/* Results Grid */}
//           <div className="grid grid-cols-3 gap-4 mb-8">
//             {Object.entries(project.results).map(([key, value]) => (
//               <div
//                 key={key}
//                 className="text-center p-4 rounded-xl"
//                 style={{ backgroundColor: `${project.color}10` }}
//               >
//                 <div
//                   className="text-2xl font-black"
//                   style={{ color: project.color }}
//                 >
//                   {value}
//                 </div>
//                 <div className="text-[#555555] text-sm capitalize">{key}</div>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="flex gap-4">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="flex-1 bg-[#FF6A3D] hover:bg-[#e55a30] text-white py-3 rounded-full font-semibold transition-all"
//             >
//               Start Similar Project
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={onClose}
//               className="px-6 py-3 border-2 border-[#0B1C33] text-[#0B1C33] rounded-full font-semibold transition-all hover:bg-[#0B1C33] hover:text-white"
//             >
//               Close
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // ============================================
// // 🏢 CLIENTS SECTION
// // ============================================
// const ClientsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const clients = [
//     { name: "Nike", logo: "👟" },
//     { name: "Adidas", logo: "⚽" },
//     { name: "Apple", logo: "🍎" },
//     { name: "Google", logo: "🔍" },
//     { name: "Amazon", logo: "📦" },
//     { name: "Microsoft", logo: "💻" },
//     { name: "Netflix", logo: "🎬" },
//     { name: "Spotify", logo: "🎵" },
//     { name: "Tesla", logo: "⚡" },
//     { name: "Samsung", logo: "📱" },
//     { name: "Sony", logo: "🎮" },
//     { name: "Uber", logo: "🚗" },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="bg-[#0B1C33] py-20 sm:py-28 md:py-32 relative overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052CC]/10 rounded-full blur-[120px]" />

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//             Trusted By
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
//             Brands We've <span className="text-[#FF6A3D]">Worked</span> With
//           </h2>
//           <p className="text-[#DFDFDF] text-lg max-w-2xl mx-auto">
//             From startups to Fortune 500 companies, we deliver results
//           </p>
//         </motion.div>

//         {/* Client Logo Grid */}
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
//           {clients.map((client, index) => (
//             <motion.div
//               key={client.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//               whileHover={{ scale: 1.1, y: -5 }}
//               className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-[#FF6A3D]/30 transition-all duration-300 group"
//             >
//               <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
//                 {client.logo}
//               </span>
//               <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
//                 {client.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 📊 STATS SECTION
// // ============================================
// const StatsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const stats = [
//     { number: "150+", label: "Projects Completed", icon: "🎯" },
//     { number: "100+", label: "Happy Clients", icon: "😊" },
//     { number: "500M+", label: "Total Reach", icon: "📢" },
//     { number: "15x", label: "Average ROI", icon: "📈" },
//     { number: "50+", label: "Industry Awards", icon: "🏆" },
//     { number: "5", label: "Years Experience", icon: "⏰" },
//   ];

//   return (
//     <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//             Our Impact
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
//             Numbers That <span className="text-[#FF6A3D]">Matter</span>
//           </h2>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -5, scale: 1.05 }}
//               className="text-center p-6 bg-[#F8F9FA] rounded-2xl hover:shadow-xl transition-all duration-300"
//             >
//               <span className="text-3xl mb-2 block">{stat.icon}</span>
//               <div className="text-2xl sm:text-3xl font-black text-[#0B1C33] mb-1">
//                 {stat.number}
//               </div>
//               <div className="text-[#555555] text-xs sm:text-sm">
//                 {stat.label}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 📞 CTA SECTION
// // ============================================
// const CTASection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28">
//       <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="text-6xl mb-6"
//           >
//             🚀
//           </motion.div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6">
//             Let's Create Something
//             <br />
//             <span className="text-[#FF6A3D]">Amazing Together</span>
//           </h2>

//           <p className="text-[#555555] text-lg mb-8 max-w-2xl mx-auto">
//             Ready to transform your brand's digital presence? Let's discuss
//             your next project.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <motion.button
//               whileHover={{
//                 scale: 1.03,
//                 boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)",
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
//             >
//               Start Your Project →
//             </motion.button>

//             <motion.a
//               href="tel:+919876543210"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="border-2 border-[#0B1C33] hover:bg-[#0B1C33] hover:text-white text-[#0B1C33] px-8 py-4 rounded-full font-semibold transition-all duration-300"
//             >
//               📞 Schedule a Call
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioPage;


// PortfolioPage.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const PortfolioPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <CreativeSection />
      <PhotoRunner />
      <WebsiteRunner />
      <CTASection />
    </div>
  );
};

// ============================================
// ✅ MOTION 3D IMAGE COMPONENT
// ============================================
const Motion3DImage = ({ src, alt, className, delay = 0 }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {!imageError ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <motion.div
          className="w-full h-full flex items-center justify-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-8xl">🎨</div>
        </motion.div>
      )}
    </motion.div>
  );
};

// ============================================
// 🔥 HERO SECTION
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
              <span className="text-[#FF6A3D] text-sm font-medium uppercase tracking-wider">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
            >
              Our Creative
              <br />
              <span className="text-[#FF6A3D]">Portfolio</span>
              <br />
              <span className="text-[#92EBF9]">Showcase</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Explore our successful campaigns, creative designs, and the brands
              we've helped grow through digital marketing excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold"
              >
                View Our Work 🎨
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold"
              >
                Get Quote
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
                { number: "150+", label: "Projects" },
                { number: "100+", label: "Clients" },
                { number: "50+", label: "Awards" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-[#DFDFDF]/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[520px] sm:w-[500px] sm:h-[620px] md:w-[580px] md:h-[720px] lg:w-[650px] lg:h-[820px]">
              
              {/* Rotating Rings */}
           

              {/* 3D Floating Image */}
              <Motion3DImage
                src="/portfolio/portfolio-logo.png"
                alt="Portfolio"
                className="w-full h-full p-6"
                delay={0.3}
              />

              {/* Floating Elements */}
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// 🎨 CREATIVE SECTION - Grid of Creative Work
// ============================================
const CreativeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const creatives = [
    { id: 1, title: "Brand Identity", category: "Branding", color: "#FF6A3D", image: "/portfolio/creative1.jpg" },
    { id: 2, title: "Social Media Post", category: "Social Media", color: "#0052CC", image: "/portfolio/creative2.jpg" },
    { id: 3, title: "Ad Campaign", category: "Advertising", color: "#6A00F3", image: "/portfolio/creative3.jpg" },
    { id: 4, title: "Logo Design", category: "Branding", color: "#1B7A6C", image: "/portfolio/creative4.jpg" },
    { id: 5, title: "Banner Design", category: "Digital", color: "#D71329", image: "/portfolio/creative5.jpg" },
    { id: 6, title: "Packaging", category: "Print", color: "#F4AD1F", image: "/portfolio/creative6.jpg" },
  ];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Creative Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            Our <span className="text-[#FF6A3D]">Creative</span> Designs
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Stunning visuals that capture attention and drive engagement
          </p>
        </motion.div>

        {/* Creative Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {creatives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div 
                className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                style={{ backgroundColor: `${item.color}15` }}
              >
                {/* Placeholder Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white text-4xl">
                      {item.category === "Branding" && "🎨"}
                      {item.category === "Social Media" && "📱"}
                      {item.category === "Advertising" && "📢"}
                      {item.category === "Digital" && "💻"}
                      {item.category === "Print" && "🖨️"}
                    </span>
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33] via-[#0B1C33]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <span 
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-3"
                    style={{ backgroundColor: item.color, color: 'white' }}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>

                {/* Category Badge (Always Visible) */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: item.color }}
                >
                  {item.category}
                </div>

                {/* Corner Decoration */}
                <div 
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0B1C33] hover:bg-[#FF6A3D] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            View All Creatives →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 📸 PHOTO RUNNER - Auto-Scrolling Photos
// ============================================
const PhotoRunner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const photos = [
    { id: 1, image: "/portfolio/photo1.jpg", title: "Campaign 1" },
    { id: 2, image: "/portfolio/photo2.jpg", title: "Campaign 2" },
    { id: 3, image: "/portfolio/photo3.jpg", title: "Campaign 3" },
    { id: 4, image: "/portfolio/photo4.jpg", title: "Campaign 4" },
    { id: 5, image: "/portfolio/photo5.jpg", title: "Campaign 5" },
    { id: 6, image: "/portfolio/photo6.jpg", title: "Campaign 6" },
    { id: 7, image: "/portfolio/photo7.jpg", title: "Campaign 7" },
    { id: 8, image: "/portfolio/photo8.jpg", title: "Campaign 8" },
  ];

  const colors = ["#FF6A3D", "#0052CC", "#6A00F3", "#1B7A6C", "#D71329", "#F4AD1F", "#00A878", "#7B2CBF"];

  return (
    <section ref={ref} className="bg-[#0B1C33] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Photo Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="text-[#FF6A3D]">Photo</span> Shoots
          </h2>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B1C33] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B1C33] to-transparent z-10" />

        {/* Row 1 - Left to Right */}
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 mb-6"
        >
          {[...photos, ...photos, ...photos].map((photo, index) => (
            <motion.div
              key={`row1-${index}`}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-[300px] h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer"
              style={{ backgroundColor: `${colors[index % colors.length]}20` }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-20 h-20 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <span className="text-white text-3xl">📸</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg">{photo.title}</h4>
                  <p className="text-white/70 text-sm">Photography</p>
                </div>
              </div>

              {/* Corner Badge */}
              <div 
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <span className="text-white text-sm font-bold">{(index % photos.length) + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 - Right to Left */}
        <motion.div
          animate={{ x: [-2000, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-6"
        >
          {[...photos, ...photos, ...photos].reverse().map((photo, index) => (
            <motion.div
              key={`row2-${index}`}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-[300px] h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer"
              style={{ backgroundColor: `${colors[(index + 3) % colors.length]}20` }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-20 h-20 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: colors[(index + 3) % colors.length] }}
                >
                  <span className="text-white text-3xl">🎬</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-lg">{photo.title}</h4>
                  <p className="text-white/70 text-sm">Photography</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 💻 WEBSITE RUNNER - Auto-Scrolling Websites
// ============================================
const WebsiteRunner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const websites = [
    { id: 1, title: "E-commerce Store", type: "E-commerce", color: "#FF6A3D", url: "shopease.com" },
    { id: 2, title: "Corporate Website", type: "Corporate", color: "#0052CC", url: "techcorp.com" },
    { id: 3, title: "Portfolio Site", type: "Portfolio", color: "#6A00F3", url: "creative.io" },
    { id: 4, title: "SaaS Platform", type: "SaaS", color: "#1B7A6C", url: "cloudapp.com" },
    { id: 5, title: "Restaurant Site", type: "Restaurant", color: "#D71329", url: "tastybites.com" },
    { id: 6, title: "Healthcare Portal", type: "Healthcare", color: "#00A878", url: "medicare.com" },
    { id: 7, title: "Education Platform", type: "Education", color: "#7B2CBF", url: "learnhub.com" },
    { id: 8, title: "Real Estate", type: "Real Estate", color: "#F4AD1F", url: "dreamhome.com" },
  ];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
            Web Development
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
            Our <span className="text-[#FF6A3D]">Website</span> Projects
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Modern, responsive websites that drive conversions
          </p>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Website Cards - Continuous Scroll */}
        <motion.div
          animate={{ x: [0, -2500] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-8"
        >
          {[...websites, ...websites, ...websites].map((site, index) => (
            <motion.div
              key={`site-${index}`}
              whileHover={{ y: -15, scale: 1.02 }}
              className="flex-shrink-0 w-[400px] group cursor-pointer"
            >
              {/* Browser Mockup */}
              <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                
                {/* Browser Top Bar */}
                <div className="bg-[#E5E7EB] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-gray-500 flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    {site.url}
                  </div>
                </div>

                {/* Website Preview */}
                <div 
                  className="h-[280px] relative flex items-center justify-center"
                  style={{ backgroundColor: `${site.color}10` }}
                >
                  {/* Placeholder Content */}
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: site.color }}
                    >
                      <span className="text-white text-2xl">
                        {site.type === "E-commerce" && "🛒"}
                        {site.type === "Corporate" && "🏢"}
                        {site.type === "Portfolio" && "🎨"}
                        {site.type === "SaaS" && "☁️"}
                        {site.type === "Restaurant" && "🍽️"}
                        {site.type === "Healthcare" && "🏥"}
                        {site.type === "Education" && "📚"}
                        {site.type === "Real Estate" && "🏠"}
                      </span>
                    </div>
                    <h4 className="text-[#0B1C33] font-bold text-lg">{site.title}</h4>
                    <span 
                      className="text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block"
                      style={{ backgroundColor: `${site.color}20`, color: site.color }}
                    >
                      {site.type}
                    </span>
                  </div>

                  {/* Decorative Elements */}
                  <div 
                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-20"
                    style={{ backgroundColor: site.color }}
                  />
                  <div 
                    className="absolute top-4 left-4 w-8 h-8 rounded-lg opacity-30"
                    style={{ backgroundColor: site.color }}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B1C33]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF6A3D] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Opposite Direction */}
        <motion.div
          animate={{ x: [-2500, 0] }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 mt-8"
        >
          {[...websites, ...websites, ...websites].reverse().map((site, index) => (
            <motion.div
              key={`site2-${index}`}
              whileHover={{ y: -15, scale: 1.02 }}
              className="flex-shrink-0 w-[400px] group cursor-pointer"
            >
              {/* Browser Mockup */}
              <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                
                {/* Browser Top Bar */}
                <div className="bg-[#1F2937] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-[#374151] rounded-md px-3 py-1.5 text-xs text-gray-300 flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    https://{site.url}
                  </div>
                </div>

                {/* Website Preview */}
                <div 
                  className="h-[280px] relative flex items-center justify-center"
                  style={{ backgroundColor: `${site.color}10` }}
                >
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: site.color }}
                    >
                      <span className="text-white text-2xl">💻</span>
                    </div>
                    <h4 className="text-[#0B1C33] font-bold text-lg">{site.title}</h4>
                    <span 
                      className="text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block"
                      style={{ backgroundColor: `${site.color}20`, color: site.color }}
                    >
                      {site.type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Below */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Websites Built", icon: "💻" },
            { number: "100%", label: "Responsive", icon: "📱" },
            { number: "99.9%", label: "Uptime", icon: "⚡" },
            { number: "5⭐", label: "Client Rating", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-[#F8F9FA] rounded-2xl"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-black text-[#0B1C33]">{stat.number}</div>
              <div className="text-[#555] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
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
    <section ref={ref} className="bg-[#0B1C33] py-20 sm:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A3D]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
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
            🚀
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Create Something
            <br />
            <span className="text-[#FF6A3D]">Amazing Together?</span>
          </h2>

          <p className="text-[#DFDFDF] text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your next project and bring your vision to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Start Your Project →
            </motion.button>

            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              📞 Let's Talk
            </motion.a>
          </div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Quick Turnaround
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> 100% Satisfaction
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPage;