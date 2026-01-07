import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import ceoimage from "../../assets/about_section/vibha-rajpoot-CEO-Social-Spark.jpg.webp";

// ✅ AOS Library Import - BOTH REQUIRED
import AOS from "aos";
import "aos/dist/aos.css";
import demo from "../../assets/about_section/demo.png";
// ==================== DATA ====================

const teamMembers = [
  { 
    id: 1, 
    name: "Vibha Rajpoot", 
    role: "Founder & CEO", 
    image: ceoimage,
    experience: "8+ Years"
  },
  { 
    id: 2, 
    name: "Rahul Sharma", 
    role: "Marketing Head", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    experience: "6+ Years"
  },
  { 
    id: 3, 
    name: "Priya Patel", 
    role: "Creative Director", 
    image: demo,
    experience: "7+ Years"
  },
  { 
    id: 4, 
    name: "Amit Kumar", 
    role: "Web Developer", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    experience: "5+ Years"
  },
  { 
    id: 5, 
    name: "Sneha Gupta", 
    role: "Content Strategist", 
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    experience: "4+ Years"
  },
  { 
    id: 6, 
    name: "Vikram Singh", 
    role: "Social Media Manager", 
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    experience: "5+ Years"
  },
  { 
    id: 7, 
    name: "Neha Verma", 
    role: "SEO Specialist", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    experience: "4+ Years"
  },
  { 
    id: 8, 
    name: "Rohan Joshi", 
    role: "Graphic Designer", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5TSoWMiq8TBQU6fwt7zPjTgE5KcQXrhOtQ&s",
    experience: "3+ Years"
  }
];

const valuesData = [
  { icon: "💡", title: "Innovation", desc: "Embracing latest digital trends and technologies" },
  { icon: "⭐", title: "Quality", desc: "Delivering premium work that exceeds expectations" },
  { icon: "👁️", title: "Transparency", desc: "Clear communication and honest dealings" },
  { icon: "🎯", title: "Results", desc: "Focus on measurable outcomes for clients" },
  { icon: "🤝", title: "Partnership", desc: "Building long-term client relationships" }
];

const timelineData = [
  { year: "2019", icon: "🚀", title: "Company Founded", desc: "Social Spark India was born with a vision to help businesses grow digitally" },
  { year: "2020", icon: "📈", title: "First 50 Clients", desc: "Reached our first milestone of 50 happy clients" },
  { year: "2021", icon: "🔧", title: "Services Expanded", desc: "Added website development and content services" },
  { year: "2022", icon: "👥", title: "Team Expanded", desc: "Grew to a team of 10+ talented professionals" },
  { year: "2023", icon: "🏆", title: "100+ Projects", desc: "Completed over 100 successful projects" },
  { year: "2024", icon: "✨", title: "New Horizons", desc: "Expanding our reach and capabilities" }
];

const achievementsData = [
  { icon: "🚀", number: "150", suffix: "+", label: "Projects Completed" },
  { icon: "😊", number: "100", suffix: "+", label: "Happy Clients" },
  { icon: "📅", number: "5", suffix: "+", label: "Years Experience" },
  { icon: "👥", number: "15", suffix: "+", label: "Team Members" },
  { icon: "🏭", number: "15", suffix: "+", label: "Industries Served" }
];
// Add this inside the component, before the return statement

const awardsData = [
  {
    icon: "🏆",
    title: "Best Digital Marketing Agency",
    category: "Excellence in Digital Services",
    year: "2024",
    issuer: "BNI India",
    issuerIcon: "🔴",
    issuerLogo: null // Add logo path if available
  },
  {
    icon: "🥇",
    title: "Top Referral Partner",
    category: "Outstanding Business Referrals",
    year: "2023",
    issuer: "BNI Chapter",
    issuerIcon: "🤝",
    issuerLogo: null
  },
  {
    icon: "⭐",
    title: "Member Excellence Award",
    category: "Consistent Performance",
    year: "2023",
    issuer: "BNI Network",
    issuerIcon: "🌟",
    issuerLogo: null
  },
  {
    icon: "🎖️",
    title: "Growth Champion",
    category: "Business Development",
    year: "2022",
    issuer: "BNI India",
    issuerIcon: "📈",
    issuerLogo: null
  },
  {
    icon: "🏅",
    title: "Outstanding Contributor",
    category: "Community Support",
    year: "2022",
    issuer: "BNI Chapter",
    issuerIcon: "💪",
    issuerLogo: null
  },
  {
    icon: "💎",
    title: "Premium Service Provider",
    category: "Client Satisfaction",
    year: "2021",
    issuer: "Industry Recognition",
    issuerIcon: "✨",
    issuerLogo: null
  }
];

const bniAwardsData = [
  {
    icon: "🏆",
    title: "Best Digital Marketing Category",
    year: "2024"
  },
  {
    icon: "🥇",
    title: "Top Referral Generator",
    year: "2023"
  },
  {
    icon: "⭐",
    title: "Member of the Year Nominee",
    year: "2023"
  },
  {
    icon: "🎖️",
    title: "Excellence in Networking",
    year: "2022"
  },
  {
    icon: "💎",
    title: "Power Team Leader",
    year: "2022"
  }
];
// ==================== HOOKS ====================

const useCountUp = (end, duration = 2000, startCounting) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) return;
    
    let startTime = null;
    const endValue = parseInt(end);
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return count;
};

const useInView = (threshold = 0.3) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
};

const AchievementCard = ({ item, isVisible, index }) => {
  const count = useCountUp(item.number, 2000, isVisible);
  
  return (
    <div 
      className="achievement-card"
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={index * 100}
    >
      <div className="achievement-icon">{item.icon}</div>
      <div className="achievement-number">{count}{item.suffix}</div>
      <div className="achievement-label">{item.label}</div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================

const About = () => {
  const [achievementsRef, achievementsInView] = useInView(0.3);
const [hoveredCard, setHoveredCard] = useState(null);

  // ✅ AOS Initialize - EXACT SAME AS HOME PAGE
  useEffect(() => {
    // Initialize AOS
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

  // ✅ Refresh AOS on route change / component mount
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="about-page">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 
              className="about-hero-title"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              About Us
            </h1>
            <p 
              className="about-hero-subtitle"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Get to know the team behind Social Spark India
            </p>
            <div 
              className="breadcrumb"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Link to="/">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OVERVIEW SECTION ==================== */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <span 
                className="section-tag"
                data-aos="fade-right"
              >
                Who We Are
              </span>
              <h2 
                className="section-title"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Your Trusted Digital Marketing Partner
              </h2>
              
              <div className="overview-text">
                <p data-aos="fade-right" data-aos-delay="200">
                  Founded in 2019, <strong>Social Spark India</strong> has been at the forefront of digital innovation, 
                  helping businesses transform their online presence and achieve remarkable growth.
                </p>
                <p data-aos="fade-right" data-aos-delay="300">
                  Our approach combines creativity with data-driven strategies to deliver results that matter.
                </p>
                <p data-aos="fade-right" data-aos-delay="400">
                  What sets us apart is our commitment to understanding each client's unique needs.
                </p>
              </div>

              <div 
                className="overview-highlight"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <p>✨ "We don't just market your brand — we help you build a legacy."</p>
              </div>
            </div>

            <div className="overview-image">
              <div 
                className="overview-main-img"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Social Spark India Team"
                />
              </div>
              <div 
                className="overview-floating-card"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="card-icon">🏆</div>
                <div className="card-text">
                  <h4>5+ Years</h4>
                  <p>Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VISION ==================== */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" data-aos="fade-right">Our Purpose</span>
            <h2 className="section-title" data-aos="fade-left" data-aos-delay="100">Mission & Vision</h2>
            <p className="section-desc" data-aos="fade-right" data-aos-delay="200">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="mv-grid">
            <div className="mv-card mission-card" data-aos="fade-right" data-aos-delay="100">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To empower businesses with innovative digital solutions that drive measurable growth and lasting success.</p>
            </div>

            <div className="mv-card vision-card" data-aos="fade-left" data-aos-delay="200">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be India's most trusted digital marketing partner, known for creativity, results, and client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
      <section className="values-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag" data-aos="fade-right">What We Believe</span>
            <h2 className="section-title" data-aos="fade-left" data-aos-delay="100">Our Core Values</h2>
            <p className="section-desc" data-aos="fade-right" data-aos-delay="200">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="values-grid">
            {valuesData.map((value, i) => (
              <div 
                key={i} 
                className="value-card"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={i * 100}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER ==================== */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image-wrapper">
              <div className="founder-photo" data-aos="fade-right" data-aos-delay="100">
                <img src={ceoimage} alt="Vibha Rajpoot - Founder & CEO" />
              </div>
              <div className="founder-name-badge" data-aos="fade-right" data-aos-delay="200">
                <h4>Vibha Rajpoot</h4>
                <p>Founder & CEO</p>
              </div>
              <div className="founder-socials" data-aos="fade-right" data-aos-delay="300">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="founder-content">
              <span className="founder-label" data-aos="fade-left">👑 Meet Our Founder</span>
              <h2 className="founder-name" data-aos="fade-left" data-aos-delay="100">Vibha Rajpoot</h2>
              <p className="founder-title" data-aos="fade-left" data-aos-delay="200">Founder & Chief Executive Officer</p>

              <div className="founder-bio">
                <p data-aos="fade-left" data-aos-delay="300">
                  With over <strong>8 years of experience</strong> in digital marketing and brand strategy, 
                  Vibha founded Social Spark India with a vision to democratize digital marketing.
                </p>
                <p data-aos="fade-left" data-aos-delay="400">
                  Her journey began with a simple belief: every business deserves access to high-quality digital marketing services.
                </p>
                <p data-aos="fade-left" data-aos-delay="500">
                  Under her leadership, Social Spark India has grown to a team of 15+ professionals, serving over 100 clients.
                </p>
              </div>

              <div className="founder-quote" data-aos="fade-left" data-aos-delay="600">
                <p>"Success is not just about growing your business; it's about growing together with your clients."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM ==================== */}
    


 <section className="team-section-pro">
        {/* Background Decorations */}
        <div className="team-bg-decor">
          <div className="team-blob team-blob-1"></div>
          <div className="team-blob team-blob-2"></div>
          <div className="team-pattern"></div>
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="team-header-pro">
            <div className="team-badge" data-aos="fade-up">
              <span className="badge-dot"></span>
              <span>Our Team</span>
            </div>
            
            <h2 className="team-title-pro" data-aos="fade-up" data-aos-delay="100">
              Meet The <span className="title-gradient">Experts</span>
            </h2>
            
            <p className="team-subtitle-pro" data-aos="fade-up" data-aos-delay="200">
              The creative minds behind your success
            </p>
          </div>

          {/* Team Grid */}
          <div className="team-grid-pro">
            {teamMembers.map((member, i) => (
              <div 
                key={member.id} 
                className={`team-card-pro ${hoveredCard === member.id ? 'active' : ''} ${hoveredCard && hoveredCard !== member.id ? 'dimmed' : ''}`}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Card Top Accent */}
                <div className="card-accent-line"></div>
                
                {/* Glow Effect */}
                <div className="card-glow-effect"></div>

                {/* Photo Section */}
                <div className="card-photo-wrapper">
                  <div className="photo-bg-shape"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-photo-img"
                  />
                  
                  {/* Experience Badge */}
                  <div className="member-exp-badge">
                    <span>{member.experience}</span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="card-info-section">
                  <h4 className="member-name-pro">{member.name}</h4>
                  <p className="member-role-pro">{member.role}</p>
                  
                  {/* Decorative Line */}
                  <div className="info-accent-line"></div>
                </div>

                {/* Bottom Gradient */}
                <div className="card-bottom-gradient"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* ==================== BNI & AWARDS SECTION - COMBINED ==================== */}
<section className="bni-awards-section">
  {/* Background Decorations */}
  <div className="bni-awards-bg">
    <div className="bg-blob bg-blob-1"></div>
    <div className="bg-blob bg-blob-2"></div>
  </div>

  <div className="container">
    {/* Section Header */}
    <div className="bni-awards-header">
      <div className="header-badge" data-aos="fade-up">
        <span>🏆</span>
        <span>Recognition & Network</span>
      </div>
      
      <h2 className="header-title" data-aos="fade-up" data-aos-delay="100">
        Award-Winning & <span className="title-gradient">BNI Connected</span>
      </h2>
      
      <p className="header-subtitle" data-aos="fade-up" data-aos-delay="200">
        Recognized for excellence and backed by the world's largest business referral network
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="bni-awards-grid">
      
      {/* LEFT - BNI Card (Compact) */}
      <div className="bni-card" data-aos="fade-right" data-aos-delay="100">
        <div className="bni-card-header">
          <div className="bni-logo-box">
            <span className="bni-text">BNI</span>
            <span className="bni-tagline">Givers Gain®</span>
          </div>
          <div className="verified-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Verified
          </div>
        </div>

        <div className="bni-member-row">
          <img src={ceoimage} alt="Vibha Rajpoot" className="member-avatar" />
          <div className="member-info">
            <h4>Vibha Rajpoot</h4>
            <span>Digital Marketing Category</span>
          </div>
        </div>

        <div className="bni-benefits">
          <div className="benefit-row">
            <span className="benefit-icon">🤝</span>
            <span>Trusted Referral Network Access</span>
          </div>
          <div className="benefit-row">
            <span className="benefit-icon">🌍</span>
            <span>76+ Countries, 300K+ Members</span>
          </div>
          <div className="benefit-row">
            <span className="benefit-icon">💼</span>
            <span>Quality Business Partnerships</span>
          </div>
        </div>
      </div>

      {/* RIGHT - Awards Grid (Compact) */}
      <div className="awards-compact-grid">
        {awardsData.slice(0, 4).map((award, i) => (
          <div 
            key={i}
            className={`award-mini-card ${i % 2 === 0 ? 'orange' : 'blue'}`}
            data-aos="fade-left"
            data-aos-delay={150 + (i * 100)}
          >
            <div className="award-icon-box">
              <span>{award.icon}</span>
            </div>
            <div className="award-info">
              <h5>{award.title}</h5>
              <span className="award-meta">{award.issuer} • {award.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom - BNI Awards Row (Horizontal Scroll on Mobile) */}
    <div className="bni-awards-row" data-aos="fade-up" data-aos-delay="300">
      <div className="bni-awards-label">
        <div className="label-icon">🏅</div>
        <span>BNI Excellence Awards</span>
      </div>
      <div className="bni-awards-list">
        {bniAwardsData.slice(0, 4).map((award, i) => (
          <div key={i} className="bni-award-chip">
            <span className="chip-icon">{award.icon}</span>
            <span className="chip-text">{award.title}</span>
            <span className="chip-year">{award.year}</span>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Row */}
    <div className="bni-awards-cta" data-aos="fade-up" data-aos-delay="400">
      <p>Work with an award-winning, BNI-connected agency</p>
      <Link to="/contact" className="cta-btn">
        <span>Get Started</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
</section>
{/* ==================== TIMELINE SECTION ==================== */}
<section className="timeline-section-pro">
  {/* Background Elements */}
  <div className="timeline-bg-decor">
    <div className="timeline-blob timeline-blob-1"></div>
    <div className="timeline-blob timeline-blob-2"></div>
  </div>

  <div className="container">
    {/* Section Header */}
    <div className="timeline-header">
      <div className="timeline-badge" data-aos="fade-up">
        <span className="badge-dot"></span>
        <span>Our Journey</span>
      </div>
      
      <h2 className="timeline-title" data-aos="fade-up" data-aos-delay="100">
        Company <span className="title-gradient">Timeline</span>
      </h2>
      
      <p className="timeline-subtitle" data-aos="fade-up" data-aos-delay="200">
        Key milestones in our growth story
      </p>
    </div>

    {/* Timeline Container */}
    <div className="timeline-wrapper">
      {/* Center Line */}
      <div className="timeline-center-line"></div>
      
      {timelineData.map((item, i) => (
        <div 
          key={i} 
          className={`timeline-item-pro ${i % 2 === 0 ? 'left' : 'right'}`}
          data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={i * 100}
        >
          {/* Timeline Card */}
          <div className="timeline-card-pro">
            {/* Year Badge */}
            <div className="timeline-year-badge">
              <span>{item.year}</span>
            </div>
            
            {/* Icon */}
            <div className="timeline-icon-wrapper">
              <span className="timeline-icon-emoji">{item.icon}</span>
            </div>
            
            {/* Content */}
            <h4 className="timeline-card-title">{item.title}</h4>
            <p className="timeline-card-desc">{item.desc}</p>
            
            {/* Arrow */}
            <div className="timeline-arrow"></div>
          </div>
          
          {/* Center Dot */}
          <div className="timeline-center-dot">
            <div className="dot-inner"></div>
            <div className="dot-ring"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ==================== ACHIEVEMENTS ==================== */}
      <section className="achievements-section" ref={achievementsRef}>
        <div className="container">
          <div className="section-header center" style={{ marginBottom: '48px' }}>
            <span className="section-tag light" data-aos="fade-right">📊 By The Numbers</span>
            <h2 className="section-title light" data-aos="fade-left" data-aos-delay="100">Our Achievements</h2>
          </div>

          <div className="achievements-grid">
            {achievementsData.map((item, i) => (
              <AchievementCard key={i} item={item} isVisible={achievementsInView} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      {/* <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 data-aos="fade-right">Want to Work With Us?</h2>
            <p data-aos="fade-left" data-aos-delay="100">
              Let's discuss how we can help your business grow.
            </p>
            <div className="cta-buttons" data-aos="fade-right" data-aos-delay="200">
              <Link to="/contact" className="btn-white">
                Get In Touch
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
{/* ==================== CTA SECTION ==================== */}
<section className="cta-section">
  {/* Background Decorations */}
  <div className="cta-bg-decor">
    <div className="cta-blob cta-blob-1"></div>
    <div className="cta-blob cta-blob-2"></div>
    <div className="cta-shape cta-shape-1"></div>
    <div className="cta-shape cta-shape-2"></div>
    <div className="cta-shape cta-shape-3"></div>
  </div>

  <div className="container">
    <div className="cta-content">
      <span className="cta-badge" data-aos="fade-up">
        🚀 Let's Work Together
      </span>
      
      <h2 data-aos="fade-up" data-aos-delay="100">
        Ready to <span className="cta-highlight-3">Grow</span> Your Business?
      </h2>
      
      <p data-aos="fade-up" data-aos-delay="200">
        Let's discuss how we can help transform your digital presence and drive real results.
      </p>
      
      <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
        <Link to="/contact" className="cta-btn-primary">
          <span>Get In Touch</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        
        <Link to="/services" className="cta-btn-secondary">
          <span>View Services</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
      
      {/* Trust Badges */}
      <div className="cta-trust" data-aos="fade-up" data-aos-delay="400">
        <div className="trust-item">
          <span className="trust-icon">✓</span>
          <span>Free Consultation</span>
        </div>
        <div className="trust-item">
          <span className="trust-icon">✓</span>
          <span>Quick Response</span>
        </div>
        <div className="trust-item">
          <span className="trust-icon">✓</span>
          <span>Expert Team</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;