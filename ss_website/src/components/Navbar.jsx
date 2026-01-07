import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Social_Spark_Logo.png";
import logo_white from "../assets/Social_Spark_Logo_white.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Who We Help", path: "/about" },
    { name: "Our Approach", path: "/services" },
    { name: "Results", path: "/portfolio" },
    { name: "Insights", path: "/blog" },
  ];

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="logo">
          <img src={scrolled ? logo : logo_white} alt="Social Spark" className="logo-img" />
          {/* <span className="logo-text">Social Spark</span> */}
        </Link>

        <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">
            Get Free Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>

        <button className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          <span className={mobileMenu ? "active" : ""}></span>
          <span className={mobileMenu ? "active" : ""}></span>
          <span className={mobileMenu ? "active" : ""}></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;