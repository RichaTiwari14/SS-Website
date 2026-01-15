import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter, 
  FaFacebookF, 
  FaYoutube,
  FaWhatsapp 
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { motion} from "framer-motion";

const Footer = () => {
  const services = [
    "Social Media Marketing",
    "Performance Marketing",
    "SEO & Content",
    "Brand Strategy",
    "Web Development",
    "Video Production",
  ];

  const quickLinks = [
    { name: "About Us", href: "/aboutdetail" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <FaLinkedinIn size={16} />, 
      href: "https://linkedin.com/company/socialsparkindia",
      color: "hover:bg-[#0077B5]" 
    },
    { 
      name: "Instagram", 
      icon: <FaInstagram size={16} />, 
      href:"https://instagram.com/socialsparkindia",
      color: "hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]" 
    },
   
    { 
      name: "Facebook", 
      icon: <FaFacebookF size={16} />, 
      href: "https://facebook.com/socialsparkindia",
      color: "hover:bg-[#1877F2]" 
    },
    { 
      name: "YouTube", 
      icon: <FaYoutube size={16} />, 
      href: "https://www.youtube.com/@SocialSparkIndia",
      color: "hover:bg-[#FF0000]" 
    },
    { 
      name: "WhatsApp", 
      icon: <FaWhatsapp size={16} />, 
      href: "https://wa.me/917000874785",
      color: "hover:bg-[#25D366]" 
    },
  ];

  return (
    <footer className="relative z-10 bg-[#0B1C33] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img 
              src="/Social_Spark_Logo.png" 
              alt="Social Spark India" 
              className="h-10 md:h-12 mb-5" 
            />
            <p className="text-[#DFDFDF] text-sm leading-relaxed max-w-sm mb-4">
Social Spark India partners with brands to create meaningful presence through clear strategy and intentional execution. Every idea is crafted to support consistency, credibility, and sustainable growth.            </p>
            
            
            {/* Social Links with Real Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 text-white`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-[#DFDFDF] text-sm hover:text-[#FF6A3D] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#FF6A3D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-[#DFDFDF] text-sm hover:text-[#FF6A3D] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#FF6A3D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#DFDFDF] text-sm">
                <HiLocationMarker className="text-[#FF6A3D] text-lg flex-shrink-0 mt-0.5" />
                <span>Raipur, Chhattisgarh<br/>India - 492001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiMail className="text-[#FF6A3D] text-lg flex-shrink-0" />
                <a 
                  href="mailto:socialspark20@gmail.com" 
                  className="text-[#DFDFDF] hover:text-[#FF6A3D] transition-colors"
                >
                  socialspark20@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <HiPhone className="text-[#FF6A3D] text-lg flex-shrink-0" />
                <a 
                  href="tel:+91-7000874785" 
                  className="text-[#DFDFDF] hover:text-[#FF6A3D] transition-colors"
                >
                 +91-7000874785
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#FF6A3D] text-white text-sm font-medium rounded-lg hover:bg-[#ff5a2a] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Quote
              <span>→</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#DFDFDF]/70 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Social Spark India. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <a href="/privacy" className="text-[#DFDFDF]/70 hover:text-[#FF6A3D] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[#DFDFDF]/70 hover:text-[#FF6A3D] transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-[#DFDFDF]/70 hover:text-[#FF6A3D] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;