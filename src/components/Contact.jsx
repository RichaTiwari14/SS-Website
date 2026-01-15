// // ContactPage.jsx
// import React, { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";

// const ContactPage = () => {
//   return (
//     <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
//       <HeroSection />
//       <ContactFormSection />
//       <ContactInfoSection />
//       <MapSection />
//       <FAQSection />
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
//         <motion.div
//           className="w-full h-full flex items-center justify-center"
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <div className="text-8xl">📞</div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// // ============================================
// // 🔥 HERO SECTION
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
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-4 py-2 rounded-full mb-6"
//             >
//               <span className="w-2 h-2 bg-[#FF6A3D] rounded-full animate-pulse" />
//               <span className="text-[#FF6A3D] text-sm font-medium uppercase tracking-wider">
//                 Get In Touch
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
//             >
//               Let's Start A
//               <br />
//               <span className="text-[#FF6A3D]">Conversation</span>
//               <br />
//               <span className="text-[#92EBF9]">Together</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
//             >
//               Have a project in mind? We'd love to hear from you. 
//               Send us a message and we'll respond as soon as possible.
//             </motion.p>

//             {/* Quick Contact */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.5 }}
//               className="flex flex-wrap gap-4"
//             >
//               <motion.a
//                 href="tel:+919876543210"
//                 whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
//               >
//                 📞 Call Us Now
//               </motion.a>
//               <motion.a
//                 href="mailto:hello@socialsparkindia.com"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
//               >
//                 ✉️ Email Us
//               </motion.a>
//             </motion.div>

//             {/* Response Time */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="flex gap-8 mt-12"
//             >
//               {[
//                 { number: "24hrs", label: "Response Time" },
//                 { number: "100%", label: "Satisfaction" },
//                 { number: "24/7", label: "Support" },
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
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="order-1 lg:order-2 relative flex items-center justify-center"
//           >
//             <div className="relative w-[420px] h-[520px] sm:w-[500px] sm:h-[620px] md:w-[580px] md:h-[720px] lg:w-[650px] lg:h-[820px]">
              
//               {/* Rotating Rings */}
//               <motion.div
//                 className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF6A3D]/20"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//               />
//               <motion.div
//                 className="absolute inset-8 rounded-full border-2 border-dashed border-[#0052CC]/20"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               />

//               {/* 3D Floating Image */}
//               <Motion3DImage
//                 src="/contact-Photoroom.png"
//                 alt="Contact Us"
//                 className="w-full h-full p-6"
//                 delay={0.3}
//               />

//               {/* Floating Elements */}
//               <motion.div
//                 className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF6A3D]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#FF6A3D]/30"
//                 animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <span className="text-3xl">💬</span>
//               </motion.div>

//               <motion.div
//                 className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#0052CC]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-[#0052CC]/30"
//                 animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//               >
//                 <span className="text-3xl">📧</span>
//               </motion.div>

//               <motion.div
//                 className="absolute top-1/3 -left-8 w-16 h-16 bg-[#92EBF9]/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-[#92EBF9]/30"
//                 animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//               >
//                 <span className="text-2xl">📞</span>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 📝 CONTACT FORM SECTION
// // ============================================
// const ContactFormSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     service: "",
//     budget: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         service: "",
//         budget: "",
//         message: "",
//       });
//     }, 2000);
//   };

//   const services = [
//     "Social Media Marketing",
//     "Influencer Marketing",
//     "Content Creation",
//     "Web Development",
//     "SEO Services",
//     "Paid Advertising",
//     "Brand Strategy",
//     "Video Production",
//   ];

//   const budgets = [
//     "₹10,000 - ₹25,000",
//     "₹25,000 - ₹50,000",
//     "₹50,000 - ₹1,00,000",
//     "₹1,00,000 - ₹2,50,000",
//     "₹2,50,000+",
//   ];

//   return (
//     <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
//           {/* Left Side - Form Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//               Send Us A Message
//             </span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-6">
//               Let's Discuss Your
//               <br />
//               <span className="text-[#FF6A3D]">Project</span>
//             </h2>
//             <p className="text-[#555555] text-lg mb-8">
//               Fill out the form and our team will get back to you within 24 hours.
//             </p>

//             {/* Why Contact Us */}
//             <div className="space-y-4">
//               {[
//                 { icon: "⚡", text: "Quick Response within 24 hours" },
//                 { icon: "💼", text: "Free Project Consultation" },
//                 { icon: "🎯", text: "Customized Solutions for Your Business" },
//                 { icon: "🤝", text: "Dedicated Account Manager" },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                   className="flex items-center gap-4"
//                 >
//                   <div className="w-12 h-12 bg-[#FF6A3D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <span className="text-xl">{item.icon}</span>
//                   </div>
//                   <span className="text-[#0B1C33] font-medium">{item.text}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.6 }}
//               className="mt-12"
//             >
//               <h4 className="text-[#0B1C33] font-bold mb-4">Follow Us</h4>
//               <div className="flex gap-3">
//                 {[
//                   { icon: "📘", name: "Facebook", color: "#1877F2" },
//                   { icon: "📸", name: "Instagram", color: "#E4405F" },
//                   { icon: "💼", name: "LinkedIn", color: "#0A66C2" },
//                   { icon: "🐦", name: "Twitter", color: "#1DA1F2" },
//                   { icon: "▶️", name: "YouTube", color: "#FF0000" },
//                 ].map((social, index) => (
//                   <motion.a
//                     key={social.name}
//                     href="#"
//                     whileHover={{ scale: 1.1, y: -3 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
//                     style={{ backgroundColor: `${social.color}15` }}
//                   >
//                     <span className="text-xl">{social.icon}</span>
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {isSubmitted ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-12 text-center h-full flex flex-col items-center justify-center"
//               >
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 0.5 }}
//                   className="text-6xl mb-6"
//                 >
//                   ✅
//                 </motion.div>
//                 <h3 className="text-2xl font-bold text-[#0B1C33] mb-4">
//                   Thank You!
//                 </h3>
//                 <p className="text-[#555555] mb-6">
//                   Your message has been sent successfully. We'll get back to you within 24 hours.
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setIsSubmitted(false)}
//                   className="bg-[#FF6A3D] text-white px-6 py-3 rounded-full font-semibold"
//                 >
//                   Send Another Message
//                 </motion.button>
//               </motion.div>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-12"
//               >
//                 <div className="grid sm:grid-cols-2 gap-6">
                  
//                   {/* Name */}
//                   <div>
//                     <label className="block text-[#0B1C33] font-medium mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="John Doe"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-[#0B1C33] font-medium mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="john@example.com"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300"
//                     />
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-[#0B1C33] font-medium mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       placeholder="+91 98765 43210"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300"
//                     />
//                   </div>

//                   {/* Company */}
//                   <div>
//                     <label className="block text-[#0B1C33] font-medium mb-2">
//                       Company Name
//                     </label>
//                     <input
//                       type="text"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       placeholder="Your Company"
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300"
//                     />
//                   </div>

//                   {/* Service */}
//                   <div>
//                     <label className="block text-[#0B1C33] font-medium mb-2">
//                       Service Interested In *
//                     </label>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 bg-white"
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((service) => (
//                         <option key={service} value={service}>
//                           {service}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Budget */}
//                   <div>
//                     <label className="block text-[#0B1C33] font-medium mb-2">
//                       Budget Range
//                     </label>
//                     <select
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 bg-white"
//                     >
//                       <option value="">Select budget</option>
//                       {budgets.map((budget) => (
//                         <option key={budget} value={budget}>
//                           {budget}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Message */}
//                   <div className="sm:col-span-2">
//                     <label className="block text-[#0B1C33] font-medium mb-2">
//                       Your Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       placeholder="Tell us about your project..."
//                       className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 resize-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full mt-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
//                     isSubmitting
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-[#FF6A3D] hover:bg-[#e55a30] text-white shadow-lg shadow-[#FF6A3D]/30"
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 📍 CONTACT INFO SECTION
// // ============================================
// const ContactInfoSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const contactInfo = [
//     {
//       icon: "📍",
//       title: "Visit Our Office",
//       info: "123, Business Hub, Sector 62",
//       subInfo: "Noida, Uttar Pradesh - 201301",
//       color: "#FF6A3D",
//       action: "Get Directions",
//       link: "https://maps.google.com",
//     },
//     {
//       icon: "📞",
//       title: "Call Us",
//       info: "+91 98765 43210",
//       subInfo: "+91 87654 32109",
//       color: "#0052CC",
//       action: "Call Now",
//       link: "tel:+919876543210",
//     },
//     {
//       icon: "✉️",
//       title: "Email Us",
//       info: "hello@socialsparkindia.com",
//       subInfo: "support@socialsparkindia.com",
//       color: "#6A00F3",
//       action: "Send Email",
//       link: "mailto:hello@socialsparkindia.com",
//     },
//     {
//       icon: "⏰",
//       title: "Working Hours",
//       info: "Monday - Friday: 9AM - 7PM",
//       subInfo: "Saturday: 10AM - 4PM",
//       color: "#1B7A6C",
//       action: "Schedule Meeting",
//       link: "#",
//     },
//   ];

//   return (
//     <section ref={ref} className="bg-[#0B1C33] py-20 sm:py-28 md:py-32 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052CC]/10 rounded-full blur-[120px]" />

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//             Contact Information
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
//             Get In <span className="text-[#FF6A3D]">Touch</span> With Us
//           </h2>
//           <p className="text-[#DFDFDF] text-lg max-w-2xl mx-auto">
//             We're here to help and answer any questions you might have
//           </p>
//         </motion.div>

//         {/* Contact Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {contactInfo.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="group"
//             >
//               <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#FF6A3D]/30 transition-all duration-300">
//                 {/* Icon */}
//                 <div
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
//                   style={{ backgroundColor: `${item.color}20` }}
//                 >
//                   <span className="text-3xl">{item.icon}</span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>

//                 {/* Info */}
//                 <p className="text-white/80 text-sm mb-1">{item.info}</p>
//                 <p className="text-white/60 text-sm mb-5">{item.subInfo}</p>

//                 {/* Action Link */}
//                 <motion.a
//                   href={item.link}
//                   target={item.link.startsWith("http") ? "_blank" : "_self"}
//                   rel="noopener noreferrer"
//                   whileHover={{ x: 5 }}
//                   className="inline-flex items-center gap-2 text-sm font-semibold"
//                   style={{ color: item.color }}
//                 >
//                   {item.action}
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </motion.a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // 🗺️ MAP SECTION
// // ============================================
// const MapSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="bg-white py-20 sm:py-28">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//             Our Location
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
//             Find Us <span className="text-[#FF6A3D]">Here</span>
//           </h2>
//         </motion.div>

//         {/* Map Container */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="relative rounded-3xl overflow-hidden shadow-2xl"
//         >
//           {/* Map Placeholder - Replace with actual iframe */}
//           <div className="aspect-[16/9] md:aspect-[21/9] bg-[#F8F9FA] relative">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0186927795694!2d77.3572!3d28.6276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzM5LjQiTiA3N8KwMjEnMjUuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="absolute inset-0"
//             />

//             {/* Location Card Overlay */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.5 }}
//               className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm hidden md:block"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-[#FF6A3D] rounded-xl flex items-center justify-center flex-shrink-0">
//                   <span className="text-white text-xl">📍</span>
//                 </div>
//                 <div>
//                   <h4 className="text-[#0B1C33] font-bold mb-1">Social Spark India</h4>
//                   <p className="text-[#555555] text-sm mb-3">
//                     123, Business Hub, Sector 62<br />
//                     Noida, UP - 201301
//                   </p>
//                   <motion.a
//                     href="https://maps.google.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.05 }}
//                     className="inline-flex items-center gap-2 bg-[#FF6A3D] text-white px-4 py-2 rounded-full text-sm font-semibold"
//                   >
//                     Get Directions
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // ❓ FAQ SECTION
// // ============================================
// const FAQSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "How quickly can you start working on my project?",
//       answer: "We typically start new projects within 2-3 business days after the initial consultation and agreement. For urgent requirements, we can expedite the process.",
//     },
//     {
//       question: "What is your pricing model?",
//       answer: "We offer flexible pricing models including project-based, monthly retainers, and hourly rates. The cost depends on the scope, complexity, and duration of the project.",
//     },
//     {
//       question: "Do you work with small businesses?",
//       answer: "Absolutely! We work with businesses of all sizes - from startups to large enterprises. We have tailored packages specifically designed for small businesses and startups.",
//     },
//     {
//       question: "What platforms do you specialize in?",
//       answer: "We specialize in all major platforms including Instagram, Facebook, LinkedIn, Twitter, YouTube, and emerging platforms like Threads. We also handle Google Ads and other digital advertising platforms.",
//     },
//     {
//       question: "How do you measure success?",
//       answer: "We provide comprehensive monthly reports with key metrics like reach, engagement, conversions, and ROI. We set clear KPIs at the start of each project and track progress continuously.",
//     },
//     {
//       question: "Can I see examples of your previous work?",
//       answer: "Yes! Visit our Portfolio page to see case studies and examples of our work across various industries. We're happy to share specific examples relevant to your industry.",
//     },
//   ];

//   return (
//     <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28 md:py-32">
//       <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//             FAQs
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
//             Frequently Asked <span className="text-[#FF6A3D]">Questions</span>
//           </h2>
//           <p className="text-[#555555] text-lg">
//             Find answers to common questions about our services
//           </p>
//         </motion.div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div
//                 className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
//                   openIndex === index ? "shadow-lg" : "shadow-sm"
//                 }`}
//               >
//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//                   className="w-full px-6 py-5 flex items-center justify-between text-left"
//                 >
//                   <span className="text-[#0B1C33] font-semibold pr-4">
//                     {faq.question}
//                   </span>
//                   <motion.div
//                     animate={{ rotate: openIndex === index ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="w-8 h-8 bg-[#FF6A3D]/10 rounded-full flex items-center justify-center flex-shrink-0"
//                   >
//                     <svg
//                       className="w-4 h-4 text-[#FF6A3D]"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </motion.div>
//                 </button>

//                 <motion.div
//                   initial={false}
//                   animate={{
//                     height: openIndex === index ? "auto" : 0,
//                     opacity: openIndex === index ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="px-6 pb-5 text-[#555555]">
//                     {faq.answer}
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Still Have Questions */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.6 }}
//           className="text-center mt-12 p-8 bg-[#0B1C33] rounded-2xl"
//         >
//           <h4 className="text-white font-bold text-xl mb-3">
//             Still have questions?
//           </h4>
//           <p className="text-white/70 mb-6">
//             Can't find the answer you're looking for? Please chat with our team.
//           </p>
//           <motion.a
//             href="tel:+919876543210"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 bg-[#FF6A3D] text-white px-6 py-3 rounded-full font-semibold"
//           >
//             📞 Talk to Us
//           </motion.a>
//         </motion.div>
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
//     <section ref={ref} className="bg-[#0B1C33] py-20 sm:py-28 relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A3D]/10 rounded-full blur-[150px]" />

//       <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
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
//             🤝
//           </motion.div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
//             Ready to Grow Your
//             <br />
//             <span className="text-[#FF6A3D]">Business Together?</span>
//           </h2>

//           <p className="text-[#DFDFDF] text-lg mb-8 max-w-2xl mx-auto">
//             Let's create something amazing. Get in touch with us today and
//             take the first step towards digital success.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <motion.a
//               href="#form"
//               whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
//             >
//               Start Your Project →
//             </motion.a>

//             <motion.a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
//             >
//               💬 WhatsApp Us
//             </motion.a>
//           </div>

//           {/* Trust Points */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.5 }}
//             className="flex flex-wrap justify-center gap-6 mt-10 text-white/70 text-sm"
//           >
//             <span className="flex items-center gap-2">
//               <span className="text-[#FF6A3D]">✓</span> Free Consultation
//             </span>
//             <span className="flex items-center gap-2">
//               <span className="text-[#FF6A3D]">✓</span> 24hr Response
//             </span>
//             <span className="flex items-center gap-2">
//               <span className="text-[#FF6A3D]">✓</span> No Hidden Fees
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;




// ContactPage.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <ContactSection />
     
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
          <div className="text-8xl">📞</div>
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
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
            >
              Let's Start A
              <br />
              <span className="text-[#FF6A3D]">Conversation</span>
              <br />
              <span className="text-[#92EBF9]">Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#DFDFDF] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Have a project in mind? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </motion.p>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 106, 61, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
              >
                📞 Call Us Now
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 hover:border-[#25D366] hover:bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
              >
                💬 WhatsApp
              </motion.a>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-8 mt-12"
            >
              {[
                { number: "24hrs", label: "Response Time" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Support" },
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
            <div className="relative w-[340px] h-[440px] sm:w-[420px] sm:h-[540px] md:w-[500px] md:h-[640px] lg:w-[570px] lg:h-[740px]">
              
              {/* Rotating Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF6A3D]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border-2 border-dashed border-[#0052CC]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* 3D Floating Image */}
              <Motion3DImage
                src="/contact-Photoroom.png"
                alt="Contact Us"
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
// 📝 CONTACT SECTION - Form + Info Side by Side
// ============================================
const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 2000);
  };

  const services = [
    "Social Media Marketing",
    "Influencer Marketing",
    "Content Creation",
    "Web Development",
    "SEO Services",
    "Paid Advertising",
    "Brand Strategy",
    "Video Production",
  ];

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Side - Contact Form (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* Form Header */}
            <div className="mb-8">
              <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
                Send Us A Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1C33] mb-3">
                Get In <span className="text-[#FF6A3D]">Touch</span>
              </h2>
              <p className="text-[#555555] text-lg">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-12 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-6"
                >
                  ✅
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0B1C33] mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-[#555555] mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#FF6A3D] text-white px-6 py-3 rounded-full font-semibold"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[#0B1C33] font-semibold mb-2">
                      Full Name <span className="text-[#FF6A3D]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Full Name"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 text-[#0B1C33] placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-[#0B1C33] font-semibold mb-2">
                      Email Address <span className="text-[#FF6A3D]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email Address"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 text-[#0B1C33] placeholder:text-gray-400"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[#0B1C33] font-semibold mb-2">
                      Phone Number <span className="text-[#FF6A3D]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your Phone Number"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 text-[#0B1C33] placeholder:text-gray-400"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[#0B1C33] font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name (Optional)"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 text-[#0B1C33] placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Service Interested In */}
                <div>
                  <label className="block text-[#0B1C33] font-semibold mb-2">
                    Service Interested In <span className="text-[#FF6A3D]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 bg-white text-[#0B1C33] appearance-none cursor-pointer"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-[#0B1C33] font-semibold mb-2">
                    Project Details <span className="text-[#FF6A3D]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[#FF6A3D] outline-none transition-all duration-300 resize-none text-[#0B1C33] placeholder:text-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#FF6A3D] hover:bg-[#e55a30] text-white shadow-lg shadow-[#FF6A3D]/30 hover:shadow-xl hover:shadow-[#FF6A3D]/40"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right Side - Contact Information (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#0B1C33] rounded-3xl p-8 sm:p-10 h-full">
              
              {/* Header */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-white/60">
                  Reach out to us through any of these channels
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-8">
                
                {/* Email */}
                <motion.a
                  href="mailto:hello@socialsparkindia.com"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#FF6A3D]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6A3D] transition-all duration-300">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-[#FF6A3D] transition-colors">
                      Email Us
                    </h4>
                    <p className="text-white/70 text-sm">
                      hello@socialsparkindia.com
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#0052CC]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0052CC] transition-all duration-300">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-[#0052CC] transition-colors">
                      Call Us
                    </h4>
                    <p className="text-white/70 text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#25D366]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-all duration-300">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-[#25D366] transition-colors">
                      WhatsApp
                    </h4>
                    <p className="text-white/70 text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </motion.a>

                {/* Address */}
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#6A00F3]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#6A00F3] transition-all duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-[#6A00F3] transition-colors">
                      Visit Us
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Office Number - 5001, 5th Floor<br />
                      Currency Tower, VIP Square<br />
                      Great Eastern Rd, Telibandha<br />
                      Raipur, Chhattisgarh 492001
                    </p>
                  </div>
                </motion.a>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-10" />

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: "📘", name: "Facebook", color: "#1877F2", link: "#" },
                    { icon: "📸", name: "Instagram", color: "#E4405F", link: "#" },
                    { icon: "💼", name: "LinkedIn", color: "#0A66C2", link: "#" },
                    { icon: "🐦", name: "Twitter", color: "#1DA1F2", link: "#" },
                    { icon: "▶️", name: "YouTube", color: "#FF0000", link: "#" },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${social.color}20` }}
                      title={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ❓ FAQ SECTION
// ============================================
// const FAQSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: "How quickly can you start working on my project?",
//       answer: "We typically start new projects within 2-3 business days after the initial consultation and agreement. For urgent requirements, we can expedite the process.",
//     },
//     {
//       question: "What is your pricing model?",
//       answer: "We offer flexible pricing models including project-based, monthly retainers, and hourly rates. The cost depends on the scope, complexity, and duration of the project.",
//     },
//     {
//       question: "Do you work with small businesses?",
//       answer: "Absolutely! We work with businesses of all sizes - from startups to large enterprises. We have tailored packages specifically designed for small businesses and startups.",
//     },
//     {
//       question: "What platforms do you specialize in?",
//       answer: "We specialize in all major platforms including Instagram, Facebook, LinkedIn, Twitter, YouTube, and emerging platforms like Threads. We also handle Google Ads and other digital advertising platforms.",
//     },
//     {
//       question: "How do you measure success?",
//       answer: "We provide comprehensive monthly reports with key metrics like reach, engagement, conversions, and ROI. We set clear KPIs at the start of each project and track progress continuously.",
//     },
//     {
//       question: "Can I see examples of your previous work?",
//       answer: "Yes! Visit our Portfolio page to see case studies and examples of our work across various industries. We're happy to share specific examples relevant to your industry.",
//     },
//   ];

//   return (
//     <section ref={ref} className="bg-[#F8F9FA] py-20 sm:py-28 md:py-32">
//       <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-4 block">
//             FAQs
//           </span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1C33] mb-4">
//             Frequently Asked <span className="text-[#FF6A3D]">Questions</span>
//           </h2>
//           <p className="text-[#555555] text-lg">
//             Find answers to common questions about our services
//           </p>
//         </motion.div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div
//                 className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
//                   openIndex === index ? "shadow-lg" : "shadow-sm"
//                 }`}
//               >
//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//                   className="w-full px-6 py-5 flex items-center justify-between text-left"
//                 >
//                   <span className="text-[#0B1C33] font-semibold pr-4">
//                     {faq.question}
//                   </span>
//                   <motion.div
//                     animate={{ rotate: openIndex === index ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
//                       openIndex === index ? "bg-[#FF6A3D]" : "bg-[#FF6A3D]/10"
//                     }`}
//                   >
//                     <svg
//                       className={`w-5 h-5 transition-colors duration-300 ${
//                         openIndex === index ? "text-white" : "text-[#FF6A3D]"
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </motion.div>
//                 </button>

//                 <motion.div
//                   initial={false}
//                   animate={{
//                     height: openIndex === index ? "auto" : 0,
//                     opacity: openIndex === index ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="px-6 pb-5 text-[#555555] leading-relaxed">
//                     {faq.answer}
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

   
//       </div>
//     </section>
//   );
// };

export default ContactPage;