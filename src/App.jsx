// import React, {  lazy, Suspense,useEffect, useState } from "react";
// import WebDevelopmentPage from "./pages/Webdevelopment";
// import PhotographyVideographyPage from "./pages/Photography";
// import InfluencerMarketingPage from "./pages/InfluencerMarketing";
// import SocialMediaPage from "./pages/SocialMedia";
// import BrandingStrategyPage from "./pages/Brandingpage";
// import SEOPage from "./pages/SEO";
// import Footer from "./components/Footer"
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/Hero";
// import Stats from "./components/Stats"
// import WhatsAppWidget from "./components/WhatsAppWidget";
// import ContactFormPopup from "./components/ContactFormPopup";
// import CustomCursor from "./components/CustomCursor";
// import ClientLogos from "./components/ClientLogos";
// import CTASection from "./components/CTASection";
// // ✅ Lazy load heavy components (No installation needed)
// const Services = lazy(() => import("./components/Services"));
// const About = lazy(() => import("./components/About"));
// const Process = lazy(() => import("./components/Process"));
// const Testimonials = lazy(() => import("./components/Testimonials"));

// const LoadingSpinner = () => (
//   <div className="flex justify-center items-center py-20">
//     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6A3D]"></div>
//   </div>
// );

// const App = () => {
//   const [showContactPopup, setShowContactPopup] = useState(false);

//   // Popup ko 2 seconds baad show karo
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowContactPopup(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div className="relative bg-white overflow-hidden" style={{ fontFamily: 'Aeonik, sans-serif' }}>
//       <CustomCursor />
//       <WhatsAppWidget />
//       <ContactFormPopup isOpen={showContactPopup} onClose={() => setShowContactPopup(false)} />
//       <Navbar />
//       <HeroSection />
//       <Stats />
//       <ClientLogos />
//          {/* ✅ Lazy load non-critical components */}
//       <Suspense fallback={<LoadingSpinner />}>
//         <Services />
//       </Suspense>

//       <Suspense fallback={<LoadingSpinner />}>
//         <About />
//       </Suspense>

//       <Suspense fallback={<LoadingSpinner />}>
//         <Process />
//       </Suspense>

//       <Suspense fallback={<LoadingSpinner />}>
//         <Testimonials />
//       </Suspense>
//       <CTASection />
//       <PhotographyVideographyPage />
//       <WebDevelopmentPage />
//       <InfluencerMarketingPage />
//       <SocialMediaPage />
//       <BrandingStrategyPage />
//       <SEOPage />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import WebDevelopmentPage from "./pages/Webdevelopment";
import PhotographyVideographyPage from "./pages/Photography";
import InfluencerMarketingPage from "./pages/InfluencerMarketing";
import SocialMediaPage from "./pages/SocialMedia";
import BrandingStrategyPage from "./pages/Brandingpage";
import SEOPage from "./pages/SEO";

// Components
import PortfolioPage from "./components/Portfolio";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Stats from "./components/Stats";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ContactFormPopup from "./components/ContactFormPopup";
import CustomCursor from "./components/CustomCursor";
import ClientLogos from "./components/ClientLogos";
import CTASection from "./components/CTASection";
import ContactPage from "./components/Contact";
import AboutPage from "./components/Aboutdetailpage";
import BlogPage from "./components/Blogpage";
// Lazy load heavy components
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6A3D]"></div>
  </div>
);

// Home Page Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <ClientLogos />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Process />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      
      <CTASection />
    </>
  );
};

const App = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative bg-white overflow-hidden" style={{ fontFamily: 'Aeonik, sans-serif' }}>
        <CustomCursor />
        <WhatsAppWidget />
        <ContactFormPopup isOpen={showContactPopup} onClose={() => setShowContactPopup(false)} />
        <Navbar />
        
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutdetail" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Service Pages */}
          <Route path="/services/branding-strategy" element={<BrandingStrategyPage />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaPage />} />
          <Route path="/services/website-development" element={<WebDevelopmentPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketingPage />} />
          <Route path="/services/photography-videography" element={<PhotographyVideographyPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;