import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

// ✅ AOS Library Import - BOTH REQUIRED
import AOS from "aos";
import "aos/dist/aos.css";

// Services Options
const servicesOptions = [
  "Digital Marketing",
  "Social Media Marketing",
  "Website Development",
  "Photography & Videography",
  "Content Writing",
  "Complete Branding",
  "Other"
];

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ✅ AOS Initialize - EXACT SAME AS ABOUT PAGE
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

  // ✅ Refresh AOS on route change / component mount
  useEffect(() => {
    AOS.refresh();
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate Form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset Form
  const resetForm = () => {
    setIsSuccess(false);
  };

  return (
    <div className="contact-page">
      
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 
              className="contact-hero-title"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Get In Touch
            </h1>
            <p 
              className="contact-hero-subtitle"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Let's discuss how we can help your business grow
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
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2-5: CONTACT CONTENT ==================== */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* SECTION 3: CONTACT FORM */}
            <div 
              className="contact-form-wrapper"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              {!isSuccess ? (
                <>
                  <div className="form-header">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and we'll get back to you shortly.</p>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Full Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          className={`form-input ${errors.fullName ? 'error' : ''}`}
                          placeholder="Your Full Name"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                        {errors.fullName && (
                          <span className="error-message">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                            {errors.fullName}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className={`form-input ${errors.email ? 'error' : ''}`}
                          placeholder="Your Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="error-message">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          Phone Number <span className="required">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          className={`form-input ${errors.phone ? 'error' : ''}`}
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <span className="error-message">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          className="form-input"
                          placeholder="Company Name (Optional)"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Service Interested In <span className="required">*</span>
                      </label>
                      <select
                        name="service"
                        className={`form-select ${errors.service ? 'error' : ''}`}
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a Service</option>
                        {servicesOptions.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <span className="error-message">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                          </svg>
                          {errors.service}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Project Details <span className="required">*</span>
                      </label>
                      <textarea
                        name="message"
                        className={`form-textarea ${errors.message ? 'error' : ''}`}
                        placeholder="Tell us about your project requirements..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <span className="error-message">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                          </svg>
                          {errors.message}
                        </span>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round">
                              <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                            </path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out to us. We've received your message and 
                    will get back to you within 24 hours.
                  </p>
                  <button className="btn-secondary" onClick={resetForm}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* SECTION 4 & 5: CONTACT INFO & WORKING HOURS */}
            <div 
              className="contact-info-wrapper"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="contact-info-card">
                <div className="info-header">
                  <h3>Contact Information</h3>
                  <p>Reach out to us through any of these channels</p>
                </div>

                <div className="info-items">
                  {/* Email */}
                  <a 
                    href="mailto:hello@socialsparkindia.com" 
                    className="info-item"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Email Us</span>
                      <strong>hello@socialsparkindia.com</strong>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:+919876543210" 
                    className="info-item"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Call Us</span>
                      <strong>+91 98765 43210</strong>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/919876543210?text=Hi, I'm interested in your services" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="info-item"
                    data-aos="fade-left"
                    data-aos-delay="500"
                  >
                    <div className="info-icon whatsapp">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>WhatsApp</span>
                      <strong>+91 98765 43210</strong>
                    </div>
                  </a>

                  {/* Updated Address - Currency Tower */}
                  <div 
                    className="info-item"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Visit Us</span>
                      <strong>Office Number - 5001, 5th Floor<br/>
                      Currency Tower, VIP Square<br/>
                      Great Eastern Rd, Telibandha<br/>
                      Raipur, Chhattisgarh 492001</strong>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div 
                  className="working-hours"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  <h4><span>🕐</span> Working Hours</h4>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Monday - Saturday</span>
                      <span className="time">10:00 AM - 7:00 PM</span>
                    </div>
                    
                    <div className="hours-item">
                      <span className="day">Sunday</span>
                      <span className="time closed">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div 
                  className="social-section"
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: ENHANCED MAP WITH CURRENCY TOWER LOCATION ==================== */}
      <section className="map-section">
        <div 
          className="map-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Google Map with Currency Tower, VIP Square Location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5468845565894!2d81.67231931493323!3d21.210111585915156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddf4a7e4a8e7%3A0x5e4a8e4a8e4a8e4a!2sCurrency%20Tower%2C%20VIP%20Square%2C%20Great%20Eastern%20Rd%2C%20Telibandha%2C%20Raipur%2C%20Chhattisgarh%20492001!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Social Spark India - Currency Tower Office Location"
          ></iframe>
          
          {/* Custom Map Pin Marker (Overlay) */}
          <div className="custom-map-pin">
            <div className="pin-pulse"></div>
            <div className="pin-marker">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="pin-label">Currency Tower</div>
          </div>

          <div 
            className="map-overlay"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="map-overlay-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="map-overlay-text">
              <h4>Social Spark India</h4>
              <p>5001, 5th Floor, Currency Tower, VIP Square</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir//Currency+Tower,+VIP+Square,+Great+Eastern+Rd,+Telibandha,+Raipur,+Chhattisgarh+492001/@21.2101,81.6745,17z" 
              target="_blank" 
              rel="noreferrer"
              className="map-overlay-btn"
              title="Get Directions"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== QUICK CONTACT BAR ==================== */}
      <div className="quick-contact-bar">
        <a 
          href="https://wa.me/919876543210?text=Hi, I'm interested in your services" 
          target="_blank" 
          rel="noreferrer"
          className="quick-btn whatsapp"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a 
          href="tel:+919876543210" 
          className="quick-btn phone"
          title="Call Us"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </a>
      </div>

    </div>
  );
};

export default Contact;