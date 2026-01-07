import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { siteData } from "../../data/siteData";
import ceoImage from "../../assets/about_section/vibha-rajpoot-CEO-Social-Spark.jpg.webp";

// Hero Slides Data - HINGLISH
const heroSlides = [
  {
    id: 1,
    badge: "SOUND FAMILIAR?",
    title: (
      <>
        <span className="title-line">Bar-bar marketing agencies</span>
        <span className="title-line">
          <span className="title-highlight">change kar rahe ho,</span>
        </span>
        <span className="title-line">phir bhi results nahi aa rahe?</span>
      </>
    ),
    desc: "Agencies badli, strategies badli, budget bhi laga diya — lekin enquiries aur sales abhi bhi unpredictable hain.",
    cta: "Get Marketing Clarity",
  },
  {
    id: 2,
    badge: "THE REAL PROBLEM",
    title: (
      <>
        <span className="title-line">Ads chal rahe hain,</span>
        <span className="title-line">
          <span className="title-highlight">growth nahi aa rahi?</span>
        </span>
      </>
    ),
    desc: "Problem ads me nahi hoti, problem strategy me hoti hai. Random marketing kabhi scale nahi karti.",
    cta: "Fix My Strategy",
  },
  {
    id: 3,
    badge: "THE SOLUTION",
    title: (
      <>
        <span className="title-line">Real growth tab hoti hai jab</span>
        <span className="title-line">
          <span className="title-highlight">strategy + system sahi ho</span>
        </span>
      </>
    ),
    desc: "Hum services nahi bechte. Hum serious businesses ke liye predictable growth systems build karte hain.",
    cta: "See How It Works",
  },
];

// PDF Features - HINGLISH
const pdfFeatures = [
  "Ad budget waste karna band karo",
  "Sahi audience tak pahuncho",
  "Visitors ko leads me convert karo",
  "ROI measure karna seekho",
];

// Services Options for Multi-Step Form
const serviceOptions = [
  { id: "branding", label: "Branding & Identity", icon: "🎨" },
  { id: "website", label: "Website Design & Development", icon: "💻" },
  { id: "social", label: "Social Media Marketing", icon: "📱" },
  { id: "ads", label: "Paid Ads (Google/Meta)", icon: "📢" },
  { id: "seo", label: "SEO & Content Marketing", icon: "🔍" },
  { id: "video", label: "Video Production", icon: "🎬" },
  { id: "complete", label: "Complete Digital Marketing", icon: "🚀" },
  { id: "other", label: "Other / Not Sure", icon: "❓" },
];

// Business Level Options
const businessLevels = [
  {
    id: "startup",
    title: "Just Starting",
    desc: "New business, need to build online presence",
    icon: "🌱",
    color: "green"
  },
  {
    id: "growing",
    title: "Growing Business",
    desc: "Have some traction, ready to scale",
    icon: "📈",
    color: "blue"
  },
  {
    id: "established",
    title: "Established Brand",
    desc: "Running 3+ years, need better ROI",
    icon: "🏢",
    color: "orange"
  },
  {
    id: "enterprise",
    title: "Enterprise Level",
    desc: "Large team, complex requirements",
    icon: "🏛️",
    color: "purple"
  },
];

// Budget Options
const budgetOptions = [
  { id: "10k-25k", label: "₹10,000 - ₹25,000 / month" },
  { id: "25k-50k", label: "₹25,000 - ₹50,000 / month" },
  { id: "50k-1L", label: "₹50,000 - ₹1,00,000 / month" },
  { id: "1L-3L", label: "₹1,00,000 - ₹3,00,000 / month" },
  { id: "3L+", label: "₹3,00,000+ / month" },
  { id: "discuss", label: "Let's Discuss" },
];

// Timeline Options
const timelineOptions = [
  { id: "asap", label: "ASAP - Ready to start", icon: "🔥" },
  { id: "1month", label: "Within 1 Month", icon: "📅" },
  { id: "3months", label: "Within 3 Months", icon: "🗓️" },
  { id: "exploring", label: "Just Exploring", icon: "🔍" },
];

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [showPrivateModal, setShowPrivateModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // PDF Form Data
  const [pdfFormData, setPdfFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
  });

  // Private Session Form Data
  const [privateFormData, setPrivateFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    services: [],
    otherService: "",
    businessLevel: "",
    currentRevenue: "",
    teamSize: "",
    budget: "",
    timeline: "",
    challenges: "",
    goals: "",
  });

  // ✅ AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 100,
      delay: 0,
      anchorPlacement: "top-bottom",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  // Hero Slider Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // PDF Form Handler
  const handlePdfFormSubmit = (e) => {
    e.preventDefault();
    console.log("PDF Lead captured:", pdfFormData);
    alert("Thank you! Your PDF will be sent to your email.");
    setShowPdfModal(false);
    setPdfFormData({ name: "", business: "", email: "", phone: "" });
  };

  // Private Form Handlers
  const handlePrivateInputChange = (e) => {
    const { name, value } = e.target;
    setPrivateFormData({ ...privateFormData, [name]: value });
  };

  const handleServiceToggle = (serviceId) => {
    setPrivateFormData((prev) => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
  };

  const handlePrivateFormSubmit = (e) => {
    e.preventDefault();
    console.log("Private Session Request:", privateFormData);
    alert("🎉 Thank you! Vibha will personally review your request and get back within 24 hours.");
    setShowPrivateModal(false);
    setCurrentStep(1);
    setPrivateFormData({
      name: "",
      email: "",
      phone: "",
      companyName: "",
      website: "",
      services: [],
      otherService: "",
      businessLevel: "",
      currentRevenue: "",
      teamSize: "",
      budget: "",
      timeline: "",
      challenges: "",
      goals: "",
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return privateFormData.name && privateFormData.email && privateFormData.phone && privateFormData.companyName;
      case 2:
        return privateFormData.services.length > 0;
      case 3:
        return privateFormData.businessLevel;
      case 4:
        return privateFormData.budget && privateFormData.timeline;
      default:
        return true;
    }
  };

  // Navigate to Contact Page
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="landing-page">
      
      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-pattern" />
          <div className="hero-lines">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="hero-line"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="hero-container">
          {/* LEFT - Slider Content */}
          <div className="hero-content">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-slide ${index === currentSlide ? "active" : ""}`}
              >
                <div 
                  className="hero-badge"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <span className="badge-line" />
                  <span className="badge-text">{slide.badge}</span>
                </div>

                <h1 
                  className="hero-title"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="150"
                >
                  {slide.title}
                </h1>

                <p 
                  className="hero-desc"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  {slide.desc}
                </p>

                <div 
                  className="hero-buttons"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="450"
                >
                  <a href="#consultation" className="btn-primary">
                    <span>{slide.cta}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <button className="btn-outline" onClick={() => setShowPdfModal(true)}>
                    <span>Download Free PDF</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <p 
              className="hero-note"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              Aap akele nahi ho. 100+ growing businesses same problem face karti hain.
            </p>

            <div 
              className="hero-dots"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="750"
            >
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                >
                  <span className="dot-progress" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT - PDF Card */}
          <div 
            className="hero-visual-1"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="pdf-card-1">
              <div className="pdf-badge">📘 FREE GUIDE</div>
              <h3 className="pdf-title">
                10 Marketing Tips to Boost Your Business in 2025
              </h3>
              <ul className="pdf-list">
                {pdfFeatures.map((feature, i) => (
                  <li key={i}>
                    <span>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="pdf-btn" onClick={() => setShowPdfModal(true)}>
                Download Free PDF
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </button>
              <p className="pdf-note">🔒 No spam. Sirf value. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          CLIENTS SECTION - FROM siteData
          ============================================================ */}
      <section className="clients-section">
        <div className="container">
          <p 
            className="clients-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Trusted by Growing Brands
          </p>
          <div className="clients-grid">
            {siteData.clients && siteData.clients.slice(0, 6).map((client, i) => (
              <div 
                key={i} 
                className="client-item"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 100}
              >
                <div className="client-logo">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} />
                  ) : (
                    <span>{client.name.charAt(0)}</span>
                  )}
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ============================================================
    WHO WE HELP GROW SECTION - WITH SERVICES
    ============================================================ */}
<section className="who-help-section" id="who-we-help">
  <div className="container">
    <div className="section-header">
      <span 
        className="section-tag"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        WHO WE HELP GROW
      </span>
      <h2 
        className="section-title"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="150"
      >
        Is This <span className="highlight">You?</span>
      </h2>
      <p 
        className="section-subtitle"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        We partner with businesses ready to elevate their brand, expand their
        reach, and convert visibility into measurable revenue.
      </p>
    </div>

    <div className="who-help-grid">
      
      {/* LEFT CARD - SERVICES OVERVIEW */}
      <div 
        className="help-card"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="card-icon">🚀</div>
        <h3>Our Services</h3>
        <ul className="goals-list">
          <li>
            <span className="check-icon">🎨</span>
            Branding & Identity Design
          </li>
          <li>
            <span className="check-icon">💻</span>
            Website Design & Development
          </li>
          <li>
            <span className="check-icon">📱</span>
            Social Media Marketing
          </li>
          <li>
            <span className="check-icon">📢</span>
            Paid Ads (Google & Meta)
          </li>
          <li>
            <span className="check-icon">🔍</span>
            SEO & Content Marketing
          </li>
          <li>
            <span className="check-icon">🎬</span>
            Video & Reel Production
          </li>
        </ul>
      </div>

      {/* RIGHT CARD - BUSINESS STAGES (Same as before) */}
      <div 
        className="help-card blue"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="250"
      >
        <div className="card-icon">📊</div>
        <h3>Where Your Business Might Be</h3>
        <div className="stage-list">
          <div className="stage-item">
            <div className="stage-icon">🚀</div>
            <div className="stage-content">
              <strong>Newly Launched / Local Businesses</strong>
              <p>Looking to establish presence and gain early traction</p>
            </div>
          </div>
          <div className="stage-item">
            <div className="stage-icon">📈</div>
            <div className="stage-content">
              <strong>Growing Brands & Startups</strong>
              <p>Need scalable marketing systems and data-driven strategies</p>
            </div>
          </div>
          <div className="stage-item">
            <div className="stage-icon">🏢</div>
            <div className="stage-content">
              <strong>Established Businesses</strong>
              <p>Want better leads, consistent revenue, and ROI-focused campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div 
      className="who-help-cta"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
    >
      <a href="#consultation" className="btn-primary large">
        Get a Strategy Built for Your Business
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <p className="cta-note">
        Your goals. Your growth roadmap. Tailored specifically for your business.
      </p>
    </div>
  </div>
</section>      {/* ============================================================
          GROWTH FRAMEWORK SECTION
          ============================================================ */}
      <section className="framework-section" id="framework">
        <div className="container">
          <div className="section-header light">
            <span 
              className="section-tag light"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              THE REAL GROWTH FRAMEWORK
            </span>
            <h2 
              className="section-title light"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Why Most Marketing <span className="highlight">Fails</span>
            </h2>
            <p 
              className="section-subtitle light"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Our proven approach transforms your marketing from chaotic and inconsistent to{" "}
              <strong>strategic, scalable, and predictable</strong>.
            </p>
          </div>

          <div className="framework-grid">
            {/* THE PROBLEM */}
            <div 
              className="framework-card problem"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="framework-badge problem-badge">THE PROBLEM</div>
              <div className="framework-icon">❌</div>
              <h3>Random Marketing</h3>
              <p className="framework-intro">Why most brands struggle to grow online</p>
              <ul className="framework-list">
                <li>Disconnected marketing decisions</li>
                <li>No clear ownership of results</li>
                <li>Activity without measurable outcomes</li>
              </ul>
              <div className="framework-dot problem-dot" />
            </div>

            {/* THE SHIFT */}
            <div 
              className="framework-card shift"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <div className="framework-badge shift-badge">THE SHIFT</div>
              <div className="framework-icon">🔄</div>
              <h3>Strategy Before Execution</h3>
              <p className="framework-intro">What actually changes everything</p>
              <ul className="framework-list">
                <li>Clarity before launching campaigns</li>
                <li>Strategy before spending budget</li>
                <li>Systems before attempting to scale</li>
              </ul>
              <div className="framework-dot shift-dot" />
            </div>

            {/* THE OUTCOME */}
            <div 
              className="framework-card outcome"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="framework-badge outcome-badge">THE OUTCOME</div>
              <div className="framework-icon">✅</div>
              <h3>Predictable Growth</h3>
              <p className="framework-intro">What happens when marketing is done right</p>
              <ul className="framework-list">
                <li>Consistent and predictable lead flow</li>
                <li>Better ROI and full control</li>
                <li>Confidence in every decision</li>
              </ul>
              <div className="framework-dot outcome-dot" />
            </div>
          </div>

          <div 
            className="framework-line"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="600"
          />

          <div 
            className="framework-cta"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <p>
              Ready to shift from random marketing to <strong>predictable growth?</strong>
            </p>
            <a href="#consultation" className="btn-primary">
              Start Your Transformation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* ============================================================
          CONSULTATION SECTION
          ============================================================ */}
      <section className="consultation-section" id="consultation">
        <div className="container">
          <div className="section-header">
            <span 
              className="section-tag"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              BOOK YOUR CONSULTATION
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              One Call. Complete <span className="highlight">Clarity.</span>
            </h2>
            <p 
              className="section-subtitle"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Speak with real marketing experts. Get genuine clarity on what's working,
              what's not, and exactly what to fix next.
            </p>
          </div>

          <div className="consultation-grid">
            {/* FREE CONSULTATION - Links to Contact Page */}
            <div 
              className="consult-card"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="consult-badge free">🟢 RECOMMENDED</div>
              <div className="consult-icon">📞</div>
              <h3>Free Strategy Consultation</h3>
              <span className="consult-duration">⏱ 20-30 minute call</span>
              <p className="consult-desc">
                Connect with our expert team to understand what's working in your
                current marketing, what's not, and how to fix it.
              </p>
              <ul className="consult-list">
                <li><span>✓</span> Perfect for startups & new businesses</li>
                <li><span>✓</span> Ideal for growing companies</li>
                <li><span>✓</span> Great for first-time marketing audits</li>
                <li><span>✓</span> Zero obligations or commitments</li>
              </ul>
              <button className="btn-primary full" onClick={goToContact}>
                Book Free Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="consult-note">No pressure. No sales pitch. Just value.</p>
            </div>

            {/* FOUNDER CONSULTATION - Opens Multi-Step Modal */}
            <div 
              className="consult-card founder"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <div className="consult-badge premium">⭐ FOUNDER-LED</div>
              <div className="founder-header">
                <img src={ceoImage} alt="Vibha Rajpoot - CEO" className="founder-img" />
                <div className="founder-info">
                  <strong>Vibha Rajpoot</strong>
                  <span>Founder & Growth Strategist</span>
                  <small>Social Spark India</small>
                </div>
              </div>
              <p className="consult-desc">
                Strategic guidance directly from the founder — designed for serious
                business owners making critical growth decisions.
              </p>
              <ul className="consult-list">
                <li><span>✓</span> For established businesses</li>
                <li><span>✓</span> For scaling brands & enterprises</li>
                <li><span>✓</span> For key decision makers</li>
                <li><span>✓</span> Custom growth roadmap included</li>
              </ul>
              <button 
                className="btn-secondary full" 
                onClick={() => setShowPrivateModal(true)}
              >
                Request Private Session
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="consult-note highlight">🔒 Limited to 5 slots per month</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div 
            className="trust-bar"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="trust-item">
              <span className="trust-icon">🔒</span>
              <span className="orange">100% Confidential</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">❌</span>
              <span className="orange">No Hard Selling</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✅</span>
              <span className="orange">Actionable Insights</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💯</span>
              <span className="orange">100+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          TESTIMONIALS SECTION - FROM siteData
          ============================================================ */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span 
              className="section-tag"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              CLIENT SUCCESS STORIES
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Suniye Unki <span className="highlight">Kahani</span>
            </h2>
            <p 
              className="section-subtitle"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="testimonials-grid">
            {siteData.testimonials && siteData.testimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className="testimonial-card"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 150}
              >
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      <span className="avatar-fallback">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-company">{testimonial.company}</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="star">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ============================================================
          PDF MODAL
          ============================================================ */}
      {showPdfModal && (
        <div className="modal-overlay" onClick={() => setShowPdfModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPdfModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-header">
              <span className="modal-badge">📘 FREE GUIDE</span>
              <h3>Get Your Free Growth Guide</h3>
              <p>10 Marketing Tips to Boost Your Business in 2025</p>
            </div>
            <form className="modal-form" onSubmit={handlePdfFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={pdfFormData.name}
                onChange={(e) => setPdfFormData({...pdfFormData, name: e.target.value})}
                required
              />
              <input
                type="text"
                name="business"
                placeholder="Business Name"
                value={pdfFormData.business}
                onChange={(e) => setPdfFormData({...pdfFormData, business: e.target.value})}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={pdfFormData.email}
                onChange={(e) => setPdfFormData({...pdfFormData, email: e.target.value})}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp *"
                value={pdfFormData.phone}
                onChange={(e) => setPdfFormData({...pdfFormData, phone: e.target.value})}
                required
              />
              <button type="submit" className="btn-primary full">
                <span>Download Free PDF</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </button>
            </form>
            <p className="modal-note">🔒 No spam. For serious businesses only.</p>
          </div>
        </div>
      )}


      {/* ============================================================
          PRIVATE SESSION MULTI-STEP MODAL
          ============================================================ */}
      {showPrivateModal && (
        <div className="modal-overlay private-modal" onClick={() => setShowPrivateModal(false)}>
          <div className="modal-box private-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPrivateModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header with Founder */}
            <div className="private-header">
              <div className="founder-mini">
                <img src={ceoImage} alt="Vibha Rajpoot" />
                <div>
                  <strong>Private Session with Vibha</strong>
                  <span>Founder, Social Spark India</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="step-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
                <span className="step-text">Step {currentStep} of {totalSteps}</span>
              </div>
            </div>

            <form onSubmit={handlePrivateFormSubmit}>
              
              {/* ========== STEP 1 - Basic Info ========== */}
              {currentStep === 1 && (
                <div className="step-content">
                  <div className="step-header">
                    <span className="step-icon">👤</span>
                    <h3>Let's Start with the Basics</h3>
                    <p>Tell us about yourself and your company</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={privateFormData.name}
                        onChange={handlePrivateInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Your Company Pvt. Ltd."
                        value={privateFormData.companyName}
                        onChange={handlePrivateInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={privateFormData.email}
                        onChange={handlePrivateInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={privateFormData.phone}
                        onChange={handlePrivateInputChange}
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Website (if any)</label>
                      <input
                        type="url"
                        name="website"
                        placeholder="https://yourcompany.com"
                        value={privateFormData.website}
                        onChange={handlePrivateInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ========== STEP 2 - Services ========== */}
              {currentStep === 2 && (
                <div className="step-content">
                  <div className="step-header">
                    <span className="step-icon">🎯</span>
                    <h3>What Services Are You Looking For?</h3>
                    <p>Select all that apply to your business needs</p>
                  </div>

                  <div className="services-grid">
                    {serviceOptions.map((service) => (
                      <div
                        key={service.id}
                        className={`service-option ${
                          privateFormData.services.includes(service.id) ? "selected" : ""
                        }`}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <span className="service-emoji">{service.icon}</span>
                        <span className="service-label">{service.label}</span>
                        <span className="service-check">
                          {privateFormData.services.includes(service.id) ? "✓" : ""}
                        </span>
                      </div>
                    ))}
                  </div>

                  {privateFormData.services.includes("other") && (
                    <div className="form-group" style={{ marginTop: "20px" }}>
                      <label>Please specify your requirements</label>
                      <input
                        type="text"
                        name="otherService"
                        placeholder="Describe what you're looking for..."
                        value={privateFormData.otherService}
                        onChange={handlePrivateInputChange}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* ========== STEP 3 - Business Level ========== */}
              {currentStep === 3 && (
                <div className="step-content">
                  <div className="step-header">
                    <span className="step-icon">📊</span>
                    <h3>Where is Your Business Right Now?</h3>
                    <p>Help us understand your current stage</p>
                  </div>

                  <div className="level-grid">
                    {businessLevels.map((level) => (
                      <div
                        key={level.id}
                        className={`level-option ${level.color} ${
                          privateFormData.businessLevel === level.id ? "selected" : ""
                        }`}
                        onClick={() =>
                          setPrivateFormData({ ...privateFormData, businessLevel: level.id })
                        }
                      >
                        <span className="level-icon">{level.icon}</span>
                        <strong>{level.title}</strong>
                        <p>{level.desc}</p>
                        {privateFormData.businessLevel === level.id && (
                          <span className="level-check">✓</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="form-grid" style={{ marginTop: "24px" }}>
                    <div className="form-group">
                      <label>Monthly Revenue (Approx.)</label>
                      <select
                        name="currentRevenue"
                        value={privateFormData.currentRevenue}
                        onChange={handlePrivateInputChange}
                      >
                        <option value="">Select Range</option>
                        <option value="0-5L">₹0 - ₹5 Lakhs</option>
                        <option value="5L-25L">₹5 - ₹25 Lakhs</option>
                        <option value="25L-1Cr">₹25 Lakhs - ₹1 Crore</option>
                        <option value="1Cr-5Cr">₹1 Crore - ₹5 Crores</option>
                        <option value="5Cr+">₹5 Crores+</option>
                        <option value="prefer-not">Prefer not to say</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Team Size</label>
                      <select
                        name="teamSize"
                        value={privateFormData.teamSize}
                        onChange={handlePrivateInputChange}
                      >
                        <option value="">Select Size</option>
                        <option value="solo">Just Me</option>
                        <option value="2-5">2-5 People</option>
                        <option value="6-20">6-20 People</option>
                        <option value="21-50">21-50 People</option>
                        <option value="50+">50+ People</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ========== STEP 4 - Budget & Goals ========== */}
              {currentStep === 4 && (
                <div className="step-content">
                  <div className="step-header">
                    <span className="step-icon">🚀</span>
                    <h3>Almost There! Budget & Goals</h3>
                    <p>Final details to prepare your custom strategy</p>
                  </div>

                  <div className="form-group">
                    <label>Monthly Marketing Budget *</label>
                    <div className="budget-grid">
                      {budgetOptions.map((budget) => (
                        <div
                          key={budget.id}
                          className={`budget-option ${
                            privateFormData.budget === budget.id ? "selected" : ""
                          }`}
                          onClick={() =>
                            setPrivateFormData({ ...privateFormData, budget: budget.id })
                          }
                        >
                          {budget.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>When Do You Want to Start? *</label>
                    <div className="timeline-grid">
                      {timelineOptions.map((timeline) => (
                        <div
                          key={timeline.id}
                          className={`timeline-option ${
                            privateFormData.timeline === timeline.id ? "selected" : ""
                          }`}
                          onClick={() =>
                            setPrivateFormData({ ...privateFormData, timeline: timeline.id })
                          }
                        >
                          <span>{timeline.icon}</span>
                          <span>{timeline.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>What's Your Biggest Marketing Challenge?</label>
                    <textarea
                      name="challenges"
                      placeholder="E.g., Not getting enough leads, low website traffic, poor ad performance..."
                      value={privateFormData.challenges}
                      onChange={handlePrivateInputChange}
                      rows={3}
                    />
                  </div>

                  <div className="form-group">
                    <label>What Are Your Growth Goals?</label>
                    <textarea
                      name="goals"
                      placeholder="E.g., 2x revenue in 6 months, expand to new cities, build brand awareness..."
                      value={privateFormData.goals}
                      onChange={handlePrivateInputChange}
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="step-navigation">
                {currentStep > 1 && (
                  <button type="button" className="btn-back" onClick={prevStep}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    className="btn-next"
                    onClick={nextStep}
                    disabled={!canProceed()}
                  >
                    Continue
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={!canProceed()}
                  >
                    <span>Submit Request</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                )}
              </div>
            </form>

            <p className="private-note">
              🔒 Your information is 100% confidential and will only be used to prepare your custom strategy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;