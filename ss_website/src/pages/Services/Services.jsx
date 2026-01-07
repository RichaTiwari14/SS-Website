import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

// ✅ AOS Library Import
import AOS from "aos";
import "aos/dist/aos.css";

// Services Data
const servicesData = [
  {
    id: 1,
    slug: "digital-marketing",
    icon: "📊",
    title: "Digital Marketing",
    description: "Drive growth with SEO, paid advertising, marketing funnels, and data-driven strategies that deliver measurable results.",
    features: ["SEO", "PPC Ads", "Marketing Funnels", "Analytics"]
  },
  {
    id: 2,
    slug: "social-media-marketing",
    icon: "📱",
    title: "Social Media Marketing",
    description: "Build your brand presence with engaging content, strategic campaigns, and community management across all platforms.",
    features: ["Content Creation", "Reels & Stories", "Paid Ads", "Page Management"]
  },
  {
    id: 3,
    slug: "website-development",
    icon: "💻",
    title: "Website Development",
    description: "Get modern, responsive websites that look great and perform even better. From landing pages to complete e-commerce solutions.",
    features: ["UI/UX Design", "Responsive Sites", "E-commerce", "Performance"]
  },
  {
    id: 4,
    slug: "media-production",
    icon: "🎬",
    title: "Photography & Videography",
    description: "Professional visual content that captures your brand essence. From product shoots to promotional videos.",
    features: ["Brand Shoots", "Product Photography", "Ad Films", "Reels Production"]
  },
  {
    id: 5,
    slug: "content-writing",
    icon: "✍️",
    title: "Content Writing",
    description: "Compelling content that engages your audience and drives action. SEO-optimized and brand-aligned.",
    features: ["Blog Writing", "Website Copy", "Ad Copy", "Social Captions"]
  }
];

// Why Choose Data
const whyChooseData = [
  {
    icon: "🎯",
    title: "Customized Solutions",
    description: "Every project tailored to your specific needs"
  },
  {
    icon: "👨‍💼",
    title: "Experienced Team",
    description: "Skilled professionals with proven track record"
  },
  {
    icon: "🔍",
    title: "Transparent Process",
    description: "Clear communication at every step"
  },
  {
    icon: "🤝",
    title: "Ongoing Support",
    description: "We're with you beyond project delivery"
  }
];

const Services = () => {
  // ✅ AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 70,
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // ✅ Refresh AOS on component mount
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="services-page">
      
      {/* ==================== SECTION 1: HERO - MIDNIGHT BLUE ==================== */}
      <section className="services-hero">
        <div className="grid-pattern"></div>
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        
        <div className="container">
          <div className="services-hero-content">
            <h1 
              className="services-hero-title"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Our Services
            </h1>
            <p 
              className="services-hero-subtitle"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Comprehensive digital solutions for your business growth
            </p>
            <div 
              className="breadcrumb"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: SERVICES GRID - WHITE ==================== */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header center">
            <span 
              className="section-tag"
              data-aos="fade-right"
            >
              💼 What We Offer
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Our Core Services
            </h2>
            <p 
              className="section-desc"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              From strategy to execution, we provide end-to-end digital solutions 
              that help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-card-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="service-feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to={`/services/${service.slug}`} className="service-card-link">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: WHY CHOOSE US - MIDNIGHT BLUE ==================== */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header center">
            <span 
              className="section-tag light"
              data-aos="fade-right"
            >
              ⭐ Why Us
            </span>
            <h2 
              className="section-title light"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Why Our Services Stand Out
            </h2>
            <p 
              className="section-desc light"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              We don't just deliver services; we deliver results that matter to your business.
            </p>
          </div>

          <div className="why-choose-grid">
            {whyChooseData.map((item, index) => (
              <div 
                key={index} 
                className="why-choose-card"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="why-choose-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: CTA - WHITE ==================== */}
      <section className="services-cta-section">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
          <div className="cta-shape cta-shape-3"></div>
        </div>
        
        <div className="container">
          <div className="services-cta-content">
            <span 
              className="cta-badge"
              data-aos="fade-up"
            >
              🚀 Let's Work Together
            </span>
            <h2 data-aos="fade-up" data-aos-delay="100">
              Not Sure Which <span className="cta-highlight">Service</span> You Need?
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Let's discuss your requirements and find the perfect solution for your business goals.
            </p>
            <div 
              className="cta-buttons"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/contact" className="btn-primary">
                Book Free Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div 
              className="cta-trust"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="blue">Free Consultation</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="blue">Quick Response</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="blue">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;