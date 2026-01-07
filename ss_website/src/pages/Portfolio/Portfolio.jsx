import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

// ✅ AOS Import
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Portfolio Data with Slugs for linking
const portfolioProjects = [
  {
    id: 1,
    slug: "ecommerce-platform-fashion-hub",
    title: "E-Commerce Platform",
    client: "Fashion Hub",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Modern online shopping experience with seamless checkout"
  },
  {
    id: 2,
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    client: "Tech Innovations",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    description: "Complete brand identity with logo and brand guidelines"
  },
  {
    id: 3,
    slug: "social-media-campaign-fitness",
    title: "Social Media Campaign",
    client: "Fitness Pro",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    description: "Engaging social media strategy with 200% growth"
  },
  {
    id: 4,
    slug: "restaurant-website-spice-route",
    title: "Restaurant Website",
    client: "The Spice Route",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description: "Beautiful website with online reservation system"
  },
  {
    id: 5,
    slug: "product-photography-jewel-craft",
    title: "Product Photography",
    client: "Jewel Craft",
    category: "Photography/Video",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    description: "Stunning product shots for jewelry catalog"
  },
  {
    id: 6,
    slug: "content-strategy-edu-learn",
    title: "Content Strategy",
    client: "Edu Learn",
    category: "Content",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    description: "Educational content that drives engagement"
  },
  {
    id: 7,
    slug: "mobile-app-design-health-track",
    title: "Mobile App Design",
    client: "Health Track",
    category: "Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description: "Intuitive health tracking app interface"
  },
  {
    id: 8,
    slug: "corporate-branding-global-solutions",
    title: "Corporate Branding",
    client: "Global Solutions",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop",
    description: "Professional corporate identity refresh"
  },
  {
    id: 9,
    slug: "video-production-travel-tales",
    title: "Video Production",
    client: "Travel Tales",
    category: "Photography/Video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    description: "Captivating travel documentary series"
  },
  {
    id: 10,
    slug: "real-estate-portal-dream-homes",
    title: "Real Estate Portal",
    client: "Dream Homes",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    description: "Property listing website with virtual tours"
  },
  {
    id: 11,
    slug: "instagram-growth-beauty-bliss",
    title: "Instagram Growth",
    client: "Beauty Bliss",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&h=600&fit=crop",
    description: "Instagram strategy resulting in 50K followers"
  },
  {
    id: 12,
    slug: "blog-content-tech-insights",
    title: "Blog Content",
    client: "Tech Insights",
    category: "Content",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    description: "Technical blog posts that rank on Google"
  },
  {
    id: 13,
    slug: "ui-ux-redesign-banking-app",
    title: "UI/UX Redesign",
    client: "Banking App",
    category: "Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "User-friendly banking app interface"
  },
  {
    id: 14,
    slug: "event-photography-wedding-bells",
    title: "Event Photography",
    client: "Wedding Bells",
    category: "Photography/Video",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    description: "Memorable wedding photography collection"
  },
  {
    id: 15,
    slug: "logo-design-startup-hub",
    title: "Logo Design",
    client: "Startup Hub",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    description: "Modern logo for tech startup"
  },
  {
    id: 16,
    slug: "linkedin-strategy-b2b-connect",
    title: "LinkedIn Strategy",
    client: "B2B Connect",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop",
    description: "LinkedIn marketing for lead generation"
  },
  {
    id: 17,
    slug: "portfolio-website-john-photographer",
    title: "Portfolio Website",
    client: "John Photographer",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    description: "Stunning portfolio showcasing photography work"
  },
  {
    id: 18,
    slug: "email-marketing-shop-more",
    title: "Email Marketing",
    client: "Shop More",
    category: "Content",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    description: "Email campaigns with 45% open rate"
  }
];

const categories = [
  "All",
  "Web Development",
  "Branding",
  "Social Media",
  "Content",
  "Photography/Video",
  "Design"
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(12);
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);

  // ✅ AOS Initialize - Match About Page
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

  // ✅ Refresh AOS on filter change
  useEffect(() => {
    AOS.refresh();
  }, [filteredProjects]);

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    setVisibleProjects(12);
    
    if (category === "All") {
      setFilteredProjects(portfolioProjects);
    } else {
      const filtered = portfolioProjects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  return (
    <div className="portfolio-page">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content">
            <h1 
              className="portfolio-hero-title"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Our Portfolio
            </h1>
            <p 
              className="portfolio-hero-subtitle"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Explore our latest projects and success stories
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
              <span>Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FILTER BAR SECTION ==================== */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-bar" data-aos="fade-up">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO GRID SECTION ==================== */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {displayedProjects.map((project, index) => (
              // ✅ CHANGED: div → Link with to={`/portfolio/${project.slug}`}
              <Link 
                key={project.id} 
                to={`/portfolio/${project.slug}`}
                className="portfolio-card"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Image */}
                <div className="portfolio-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className="portfolio-card-overlay">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  {project.client && (
                    <p className="portfolio-client">Client: {project.client}</p>
                  )}
                  <p className="portfolio-description">{project.description}</p>
                  {/* ✅ CHANGED: button → span (since parent is Link) */}
                  <span className="view-project-btn">
                    View Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length > visibleProjects && (
            <div className="load-more-container" data-aos="fade-up">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More Projects
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="no-projects" data-aos="fade-up">
              <div className="no-projects-icon">📂</div>
              <h3>No Projects Found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="portfolio-cta-section">
        <div className="cta-bg-decor">
          <div className="cta-blob cta-blob-1"></div>
          <div className="cta-blob cta-blob-2"></div>
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>

        <div className="container">
          <div className="portfolio-cta-content">
            <span className="cta-badge" data-aos="fade-up">
              🚀 Let's Work Together
            </span>
            
            <h2 data-aos="fade-up" data-aos-delay="100">
              Like What You <span className="cta-highlight-2">See?</span>
            </h2>
            
            <p data-aos="fade-up" data-aos-delay="200">
              Let's create something amazing for your business
            </p>
            
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
              <Link to="/contact" className="cta-btn-primary">
                <span>Start Your Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link to="/services" className="cta-btn-secondary">
                <span>View Services</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="cta-trust" data-aos="fade-up" data-aos-delay="400">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="blue-1">Free Consultation</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="blue-1">Quick Turnaround</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="blue-1">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;