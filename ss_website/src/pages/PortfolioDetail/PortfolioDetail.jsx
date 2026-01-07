import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./PortfolioDetail.css";

// ✅ AOS Library Import
import AOS from "aos";
import "aos/dist/aos.css";

// Sample Project Data (In real app, fetch from API based on slug)
// ✅ Complete Project Data - Maps to Portfolio slugs
const projectsData = {
  // ==================== WEB DEVELOPMENT ====================
  "ecommerce-platform-fashion-hub": {
    id: 1,
    slug: "ecommerce-platform-fashion-hub",
    title: "E-Commerce Platform",
    subtitle: "Modern online shopping experience for Fashion Hub",
    categories: ["Web Development", "E-commerce", "UI/UX"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop",
    client: "Fashion Hub",
    industry: "Fashion & Retail",
    services: "Website Development, UI/UX Design, Payment Integration",
    duration: "8 Weeks",
    completionDate: "January 2024",
    website: "https://fashionhub.com",
    overview: [
      "Fashion Hub needed a modern e-commerce platform that could showcase their fashion collections while providing a seamless shopping experience.",
      "We designed and developed a fully responsive website with advanced filtering, wishlist functionality, and integrated payment solutions.",
      "The new platform significantly improved user experience and conversion rates."
    ],
    challenge: "The existing website was slow, not mobile-friendly, and had a complicated checkout process leading to high cart abandonment rates.",
    solutions: [
      "Designed mobile-first responsive UI with focus on product imagery",
      "Implemented fast-loading pages with optimized images",
      "Created intuitive navigation with smart product filtering",
      "Built seamless checkout with multiple payment options",
      "Integrated inventory management system",
      "Added wishlist and product comparison features"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", caption: "Homepage Design" },
      { id: 2, src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", caption: "Product Listing" },
      { id: 3, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", caption: "Product Detail" },
      { id: 4, src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop", caption: "Shopping Cart" },
      { id: 5, src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop", caption: "Checkout Process" },
      { id: 6, src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop", caption: "Mobile View" }
    ],
    results: [
      { icon: "🛒", number: "180%", label: "Conversion Rate Increase" },
      { icon: "📱", number: "65%", label: "Mobile Traffic Growth" },
      { icon: "⬇️", number: "40%", label: "Cart Abandonment Reduced" }
    ],
    testimonial: {
      quote: "Our new website has completely transformed our online business. The design is stunning and our sales have nearly tripled!",
      name: "Priya Sharma",
      designation: "CEO",
      company: "Fashion Hub",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "restaurant-website-spice-route", title: "Restaurant Website", category: "Web Development", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", excerpt: "Online reservation system" },
      { slug: "real-estate-portal-dream-homes", title: "Real Estate Portal", category: "Web Development", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop", excerpt: "Property listing with virtual tours" },
      { slug: "portfolio-website-john-photographer", title: "Portfolio Website", category: "Web Development", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop", excerpt: "Photography showcase" }
    ]
  },

  "restaurant-website-spice-route": {
    id: 4,
    slug: "restaurant-website-spice-route",
    title: "Restaurant Website",
    subtitle: "Beautiful website with online reservation system",
    categories: ["Web Development", "UI/UX", "Booking System"],
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=800&fit=crop",
    client: "The Spice Route",
    industry: "Food & Hospitality",
    services: "Website Development, Reservation System, Menu Design",
    duration: "6 Weeks",
    completionDate: "February 2024",
    website: "https://thespiceroute.com",
    overview: [
      "The Spice Route needed a website that would capture the essence of their culinary experience and allow customers to make reservations online.",
      "We created an immersive website with stunning food photography, interactive menus, and a seamless booking system.",
      "The website now serves as their primary customer acquisition channel."
    ],
    challenge: "The restaurant relied heavily on phone reservations which was inefficient. They needed a digital presence that would attract new customers and streamline bookings.",
    solutions: [
      "Designed an appetizing visual experience with food photography",
      "Built interactive digital menu with dietary filters",
      "Integrated real-time reservation system",
      "Added Google Maps integration for directions",
      "Implemented customer review section",
      "Created event booking functionality"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", caption: "Restaurant Interior" },
      { id: 2, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", caption: "Signature Dishes" },
      { id: 3, src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop", caption: "Menu Design" },
      { id: 4, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop", caption: "Reservation System" },
      { id: 5, src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=600&fit=crop", caption: "Mobile View" },
      { id: 6, src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop", caption: "Event Page" }
    ],
    results: [
      { icon: "📅", number: "300%", label: "Online Reservations" },
      { icon: "👥", number: "150%", label: "New Customers" },
      { icon: "⭐", number: "4.8", label: "Google Rating" }
    ],
    testimonial: {
      quote: "The website exceeded our expectations. Our reservations are now fully automated and we've seen a significant increase in new customers!",
      name: "Raj Malhotra",
      designation: "Owner",
      company: "The Spice Route",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" },
      { slug: "real-estate-portal-dream-homes", title: "Real Estate Portal", category: "Web Development", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop", excerpt: "Property listings" },
      { slug: "portfolio-website-john-photographer", title: "Portfolio Website", category: "Web Development", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop", excerpt: "Photography portfolio" }
    ]
  },

  "real-estate-portal-dream-homes": {
    id: 10,
    slug: "real-estate-portal-dream-homes",
    title: "Real Estate Portal",
    subtitle: "Property listing website with virtual tours",
    categories: ["Web Development", "Real Estate", "Virtual Tours"],
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=800&fit=crop",
    client: "Dream Homes",
    industry: "Real Estate",
    services: "Website Development, Virtual Tours, CRM Integration",
    duration: "10 Weeks",
    completionDate: "March 2024",
    website: "https://dreamhomes.com",
    overview: [
      "Dream Homes needed a comprehensive real estate portal to showcase their property listings with advanced search and virtual tour capabilities.",
      "We built a feature-rich platform with 360° virtual tours, mortgage calculator, and agent scheduling.",
      "The portal has become the go-to destination for property seekers in the region."
    ],
    challenge: "Property buyers wanted to view homes remotely. The client needed a platform that could provide immersive property experiences online.",
    solutions: [
      "Developed advanced property search with filters",
      "Integrated 360° virtual tour functionality",
      "Built mortgage calculator tool",
      "Created agent scheduling system",
      "Added property comparison feature",
      "Implemented saved searches and alerts"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop", caption: "Property Listing" },
      { id: 2, src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", caption: "Virtual Tour" },
      { id: 3, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", caption: "Property Details" },
      { id: 4, src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", caption: "Search Interface" },
      { id: 5, src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop", caption: "Agent Profile" },
      { id: 6, src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop", caption: "Mobile App" }
    ],
    results: [
      { icon: "🏠", number: "500+", label: "Properties Listed" },
      { icon: "👁️", number: "250%", label: "Page Views Increase" },
      { icon: "📞", number: "180%", label: "Lead Generation" }
    ],
    testimonial: {
      quote: "The virtual tours feature has been a game-changer. Buyers can now explore properties from anywhere, increasing our qualified leads significantly!",
      name: "Anita Kapoor",
      designation: "Director",
      company: "Dream Homes",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" },
      { slug: "restaurant-website-spice-route", title: "Restaurant Website", category: "Web Development", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", excerpt: "Online reservations" },
      { slug: "portfolio-website-john-photographer", title: "Portfolio Website", category: "Web Development", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop", excerpt: "Photography showcase" }
    ]
  },

  "portfolio-website-john-photographer": {
    id: 17,
    slug: "portfolio-website-john-photographer",
    title: "Portfolio Website",
    subtitle: "Stunning portfolio showcasing photography work",
    categories: ["Web Development", "Portfolio", "Photography"],
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&h=800&fit=crop",
    client: "John Photographer",
    industry: "Photography",
    services: "Website Development, Gallery Design, SEO",
    duration: "4 Weeks",
    completionDate: "December 2023",
    website: "https://johnphotographer.com",
    overview: [
      "John needed a portfolio website that would showcase his photography work in the most stunning way possible.",
      "We created a minimal, image-focused design that lets his work speak for itself.",
      "The website has helped him attract high-end clients and wedding bookings."
    ],
    challenge: "As a photographer, John needed his portfolio to load fast despite having hundreds of high-resolution images, while still looking beautiful.",
    solutions: [
      "Designed minimal, image-focused layout",
      "Implemented lazy loading for fast performance",
      "Created categorized gallery system",
      "Built client proofing portal",
      "Added booking inquiry form",
      "Optimized for SEO and social sharing"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop", caption: "Portfolio Gallery" },
      { id: 2, src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop", caption: "Homepage Design" },
      { id: 3, src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop", caption: "About Section" },
      { id: 4, src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop", caption: "Contact Page" },
      { id: 5, src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop", caption: "Mobile View" },
      { id: 6, src: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&h=600&fit=crop", caption: "Gallery View" }
    ],
    results: [
      { icon: "📷", number: "200%", label: "Booking Inquiries" },
      { icon: "⚡", number: "95", label: "PageSpeed Score" },
      { icon: "🔍", number: "Top 3", label: "Google Rankings" }
    ],
    testimonial: {
      quote: "My portfolio finally does justice to my work. The design is clean, loading is instant, and I'm getting more bookings than ever!",
      name: "John Smith",
      designation: "Professional Photographer",
      company: "John Photography",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" },
      { slug: "restaurant-website-spice-route", title: "Restaurant Website", category: "Web Development", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", excerpt: "Online reservations" },
      { slug: "real-estate-portal-dream-homes", title: "Real Estate Portal", category: "Web Development", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop", excerpt: "Property listings" }
    ]
  },

  // ==================== BRANDING ====================
  "brand-identity-design": {
    id: 2,
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    subtitle: "Complete brand transformation for Tech Innovations",
    categories: ["Branding", "Logo Design", "Visual Identity"],
    heroImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920&h=800&fit=crop",
    client: "Tech Innovations",
    industry: "Technology",
    services: "Complete Branding, Logo Design, Brand Guidelines",
    duration: "6 Weeks",
    completionDate: "March 2024",
    website: "https://techinnovations.com",
    overview: [
      "Tech Innovations approached us with a vision to create a brand identity that would position them as an innovative leader in the AI technology space.",
      "Our task was to develop a cohesive visual identity system that would work across all touchpoints.",
      "We delivered a comprehensive brand package including logo, colors, typography, and guidelines."
    ],
    challenge: "Tech Innovations was struggling with a fragmented brand identity that failed to communicate their innovative approach. They needed a brand that could compete with established tech giants.",
    solutions: [
      "Conducted extensive market research and competitor analysis",
      "Developed multiple logo concepts through iterative design",
      "Created a modern, tech-forward color palette",
      "Designed comprehensive typography system",
      "Built 50+ page brand guidelines document",
      "Delivered ready-to-use marketing templates"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop", caption: "Logo Design" },
      { id: 2, src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop", caption: "Brand Colors" },
      { id: 3, src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop", caption: "Business Cards" },
      { id: 4, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", caption: "Brand Guidelines" },
      { id: 5, src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop", caption: "Marketing Materials" },
      { id: 6, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", caption: "Presentation Design" }
    ],
    results: [
      { icon: "📈", number: "200%", label: "Brand Recognition" },
      { icon: "👥", number: "150%", label: "Social Media Growth" },
      { icon: "💰", number: "45%", label: "Lead Generation" }
    ],
    testimonial: {
      quote: "Social Spark India completely transformed our brand identity. The new design perfectly captures our innovative spirit!",
      name: "Rajesh Sharma",
      designation: "CEO & Founder",
      company: "Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "corporate-branding-global-solutions", title: "Corporate Branding", category: "Branding", image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&h=400&fit=crop", excerpt: "Corporate identity" },
      { slug: "logo-design-startup-hub", title: "Logo Design", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop", excerpt: "Startup logo" },
      { slug: "social-media-campaign-fitness", title: "Social Media Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", excerpt: "200% growth" }
    ]
  },

  "corporate-branding-global-solutions": {
    id: 8,
    slug: "corporate-branding-global-solutions",
    title: "Corporate Branding",
    subtitle: "Professional corporate identity refresh",
    categories: ["Branding", "Corporate Identity", "Design"],
    heroImage: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=1920&h=800&fit=crop",
    client: "Global Solutions",
    industry: "Consulting",
    services: "Corporate Branding, Stationery Design, Brand Guidelines",
    duration: "5 Weeks",
    completionDate: "January 2024",
    website: "https://globalsolutions.com",
    overview: [
      "Global Solutions needed a corporate rebrand that would reflect their evolution from a local consultancy to a global player.",
      "We created a sophisticated brand identity that communicates professionalism and global reach.",
      "The new branding has been rolled out across all their international offices."
    ],
    challenge: "The existing brand felt dated and didn't reflect the company's growth and international presence. They needed a refresh that would appeal to enterprise clients.",
    solutions: [
      "Modernized logo while maintaining brand recognition",
      "Developed professional color palette",
      "Created multi-language brand assets",
      "Designed complete stationery suite",
      "Built presentation templates",
      "Delivered brand training materials"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop", caption: "New Logo" },
      { id: 2, src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop", caption: "Business Cards" },
      { id: 3, src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop", caption: "Stationery" },
      { id: 4, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", caption: "Presentation" },
      { id: 5, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", caption: "Office Signage" },
      { id: 6, src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop", caption: "Brand Guidelines" }
    ],
    results: [
      { icon: "🌍", number: "12", label: "Countries Rolled Out" },
      { icon: "📊", number: "85%", label: "Brand Consistency" },
      { icon: "💼", number: "60%", label: "Enterprise Leads Up" }
    ],
    testimonial: {
      quote: "The rebrand has positioned us perfectly for global expansion. Our clients immediately noticed the professional upgrade!",
      name: "Michael Chen",
      designation: "Managing Director",
      company: "Global Solutions",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "brand-identity-design", title: "Brand Identity Design", category: "Branding", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop", excerpt: "Tech branding" },
      { slug: "logo-design-startup-hub", title: "Logo Design", category: "Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop", excerpt: "Startup logo" },
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" }
    ]
  },

  "logo-design-startup-hub": {
    id: 15,
    slug: "logo-design-startup-hub",
    title: "Logo Design",
    subtitle: "Modern logo for tech startup",
    categories: ["Branding", "Logo Design", "Startup"],
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&h=800&fit=crop",
    client: "Startup Hub",
    industry: "Technology",
    services: "Logo Design, Brand Identity, Visual Assets",
    duration: "3 Weeks",
    completionDate: "February 2024",
    website: "https://startuphub.io",
    overview: [
      "Startup Hub, a co-working space for tech startups, needed a fresh, modern logo that would appeal to young entrepreneurs.",
      "We designed a versatile logo that works across digital and print, capturing innovation and community.",
      "The logo has become instantly recognizable in the startup ecosystem."
    ],
    challenge: "The co-working space needed a logo that would stand out in a crowded market while appealing to diverse tech startups and entrepreneurs.",
    solutions: [
      "Created multiple concept directions",
      "Designed scalable vector logo",
      "Developed icon variations for different uses",
      "Created animated logo for digital platforms",
      "Designed merchandise mockups",
      "Delivered complete logo usage guidelines"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop", caption: "Final Logo" },
      { id: 2, src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop", caption: "Logo Concepts" },
      { id: 3, src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop", caption: "Business Cards" },
      { id: 4, src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop", caption: "Color Variations" },
      { id: 5, src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop", caption: "Merchandise" },
      { id: 6, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", caption: "Signage" }
    ],
    results: [
      { icon: "🎨", number: "15+", label: "Design Iterations" },
      { icon: "⭐", number: "100%", label: "Client Satisfaction" },
      { icon: "🏆", number: "Featured", label: "Design Awards" }
    ],
    testimonial: {
      quote: "The logo perfectly captures our innovative spirit. Every startup that walks through our doors comments on how cool it looks!",
      name: "Vikram Singh",
      designation: "Founder",
      company: "Startup Hub",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "brand-identity-design", title: "Brand Identity Design", category: "Branding", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop", excerpt: "Tech branding" },
      { slug: "corporate-branding-global-solutions", title: "Corporate Branding", category: "Branding", image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&h=400&fit=crop", excerpt: "Corporate identity" },
      { slug: "mobile-app-design-health-track", title: "Mobile App Design", category: "Design", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", excerpt: "Health app UI" }
    ]
  },

  // ==================== SOCIAL MEDIA ====================
  "social-media-campaign-fitness": {
    id: 3,
    slug: "social-media-campaign-fitness",
    title: "Social Media Campaign",
    subtitle: "Engaging social media strategy with 200% growth",
    categories: ["Social Media", "Digital Marketing", "Content"],
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=800&fit=crop",
    client: "Fitness Pro",
    industry: "Fitness & Health",
    services: "Social Media Strategy, Content Creation, Community Management",
    duration: "Ongoing",
    completionDate: "Ongoing Project",
    website: "https://fitnesspro.com",
    overview: [
      "Fitness Pro wanted to establish a strong social media presence to attract new members and engage their existing community.",
      "We developed a comprehensive social media strategy across Instagram, Facebook, and YouTube.",
      "The campaign has resulted in significant follower growth and increased gym memberships."
    ],
    challenge: "The fitness industry is highly competitive on social media. Fitness Pro needed to stand out with authentic content that resonated with their target audience.",
    solutions: [
      "Developed content calendar with daily posts",
      "Created workout video series for YouTube",
      "Launched transformation challenge campaign",
      "Built engaged community through Stories",
      "Partnered with micro-influencers",
      "Implemented UGC strategy for authenticity"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop", caption: "Instagram Feed" },
      { id: 2, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", caption: "Workout Content" },
      { id: 3, src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop", caption: "Transformation Posts" },
      { id: 4, src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop", caption: "Video Content" },
      { id: 5, src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop", caption: "Story Highlights" },
      { id: 6, src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop", caption: "Community Posts" }
    ],
    results: [
      { icon: "📈", number: "200%", label: "Follower Growth" },
      { icon: "❤️", number: "5x", label: "Engagement Rate" },
      { icon: "🏃", number: "45%", label: "Membership Increase" }
    ],
    testimonial: {
      quote: "Our social media presence has completely transformed. We're now one of the most followed fitness brands in our city!",
      name: "Amit Patel",
      designation: "Marketing Head",
      company: "Fitness Pro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "instagram-growth-beauty-bliss", title: "Instagram Growth", category: "Social Media", image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=600&h=400&fit=crop", excerpt: "50K followers" },
      { slug: "linkedin-strategy-b2b-connect", title: "LinkedIn Strategy", category: "Social Media", image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&h=400&fit=crop", excerpt: "B2B leads" },
      { slug: "content-strategy-edu-learn", title: "Content Strategy", category: "Content", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop", excerpt: "Educational content" }
    ]
  },

  "instagram-growth-beauty-bliss": {
    id: 11,
    slug: "instagram-growth-beauty-bliss",
    title: "Instagram Growth",
    subtitle: "Instagram strategy resulting in 50K followers",
    categories: ["Social Media", "Instagram", "Beauty"],
    heroImage: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=1920&h=800&fit=crop",
    client: "Beauty Bliss",
    industry: "Beauty & Cosmetics",
    services: "Instagram Strategy, Content Creation, Influencer Marketing",
    duration: "6 Months",
    completionDate: "February 2024",
    website: "https://instagram.com/beautybliss",
    overview: [
      "Beauty Bliss, a cosmetics startup, needed to build a strong Instagram presence from scratch to drive sales.",
      "We developed a visually stunning content strategy focused on tutorials, product showcases, and user testimonials.",
      "The account grew from 500 to 50K followers in just 6 months."
    ],
    challenge: "Starting with almost no following, Beauty Bliss needed to compete with established beauty brands with massive budgets and influencer partnerships.",
    solutions: [
      "Created cohesive visual aesthetic for feed",
      "Developed Reels strategy for viral reach",
      "Launched giveaway campaigns for growth",
      "Built relationships with micro-influencers",
      "Implemented shoppable posts",
      "Created engaging Stories and Highlights"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&h=600&fit=crop", caption: "Instagram Feed" },
      { id: 2, src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop", caption: "Product Shots" },
      { id: 3, src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop", caption: "Tutorial Content" },
      { id: 4, src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop", caption: "Reels Content" },
      { id: 5, src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop", caption: "Influencer Collab" },
      { id: 6, src: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&h=600&fit=crop", caption: "Stories Design" }
    ],
    results: [
      { icon: "👥", number: "50K", label: "Followers Gained" },
      { icon: "💰", number: "300%", label: "Sales Increase" },
      { icon: "📱", number: "10M+", label: "Impressions" }
    ],
    testimonial: {
      quote: "We went from unknown to a recognized beauty brand on Instagram. The growth has been phenomenal and our sales reflect it!",
      name: "Neha Gupta",
      designation: "Founder",
      company: "Beauty Bliss",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "social-media-campaign-fitness", title: "Social Media Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", excerpt: "200% growth" },
      { slug: "linkedin-strategy-b2b-connect", title: "LinkedIn Strategy", category: "Social Media", image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&h=400&fit=crop", excerpt: "B2B leads" },
      { slug: "product-photography-jewel-craft", title: "Product Photography", category: "Photography/Video", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", excerpt: "Jewelry catalog" }
    ]
  },

  "linkedin-strategy-b2b-connect": {
    id: 16,
    slug: "linkedin-strategy-b2b-connect",
    title: "LinkedIn Strategy",
    subtitle: "LinkedIn marketing for lead generation",
    categories: ["Social Media", "LinkedIn", "B2B Marketing"],
    heroImage: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1920&h=800&fit=crop",
    client: "B2B Connect",
    industry: "Business Services",
    services: "LinkedIn Strategy, Thought Leadership, Lead Generation",
    duration: "4 Months",
    completionDate: "March 2024",
    website: "https://linkedin.com/company/b2bconnect",
    overview: [
      "B2B Connect needed to establish thought leadership on LinkedIn and generate qualified leads for their consulting services.",
      "We developed a content strategy focused on industry insights, case studies, and executive branding.",
      "The LinkedIn presence now generates 40% of their qualified leads."
    ],
    challenge: "B2B marketing on LinkedIn requires establishing credibility and trust. The client needed to position themselves as industry experts without coming across as salesy.",
    solutions: [
      "Developed thought leadership content strategy",
      "Created executive personal branding",
      "Launched weekly newsletter",
      "Implemented LinkedIn Ads for targeting",
      "Built engagement groups for reach",
      "Created case study content series"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=600&fit=crop", caption: "Company Page" },
      { id: 2, src: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=800&h=600&fit=crop", caption: "Content Posts" },
      { id: 3, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", caption: "Case Studies" },
      { id: 4, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", caption: "Executive Branding" },
      { id: 5, src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop", caption: "Newsletter" },
      { id: 6, src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop", caption: "Analytics" }
    ],
    results: [
      { icon: "🎯", number: "40%", label: "Leads from LinkedIn" },
      { icon: "📈", number: "500%", label: "Engagement Growth" },
      { icon: "💼", number: "25+", label: "Enterprise Clients" }
    ],
    testimonial: {
      quote: "LinkedIn has become our primary lead source. The thought leadership strategy has positioned us as industry experts!",
      name: "Suresh Kumar",
      designation: "CEO",
      company: "B2B Connect",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "social-media-campaign-fitness", title: "Social Media Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", excerpt: "200% growth" },
      { slug: "instagram-growth-beauty-bliss", title: "Instagram Growth", category: "Social Media", image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=600&h=400&fit=crop", excerpt: "50K followers" },
      { slug: "content-strategy-edu-learn", title: "Content Strategy", category: "Content", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop", excerpt: "Educational content" }
    ]
  },

  // ==================== CONTENT ====================
  "content-strategy-edu-learn": {
    id: 6,
    slug: "content-strategy-edu-learn",
    title: "Content Strategy",
    subtitle: "Educational content that drives engagement",
    categories: ["Content", "Education", "Strategy"],
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=800&fit=crop",
    client: "Edu Learn",
    industry: "Education Technology",
    services: "Content Strategy, Blog Writing, SEO Content",
    duration: "Ongoing",
    completionDate: "Ongoing Project",
    website: "https://edulearn.com",
    overview: [
      "Edu Learn needed a content strategy that would establish them as a trusted resource for online education.",
      "We created an SEO-focused content plan with blog posts, guides, and educational resources.",
      "The content now drives 60% of their organic traffic and student enrollments."
    ],
    challenge: "The edtech space is crowded with content. Edu Learn needed to stand out with high-quality, SEO-optimized content that genuinely helps students.",
    solutions: [
      "Developed comprehensive content calendar",
      "Created pillar content and topic clusters",
      "Built student resource library",
      "Implemented SEO optimization strategy",
      "Launched email course series",
      "Created video tutorial scripts"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop", caption: "Blog Design" },
      { id: 2, src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop", caption: "Study Guides" },
      { id: 3, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop", caption: "Course Content" },
      { id: 4, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop", caption: "Resource Library" },
      { id: 5, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", caption: "Email Courses" },
      { id: 6, src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop", caption: "Analytics" }
    ],
    results: [
      { icon: "📝", number: "150+", label: "Articles Published" },
      { icon: "🔍", number: "60%", label: "Organic Traffic" },
      { icon: "🎓", number: "35%", label: "Enrollment Increase" }
    ],
    testimonial: {
      quote: "The content strategy has transformed our online presence. We're now the go-to resource for students in our niche!",
      name: "Dr. Priya Singh",
      designation: "Content Director",
      company: "Edu Learn",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "blog-content-tech-insights", title: "Blog Content", category: "Content", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop", excerpt: "SEO blog posts" },
      { slug: "email-marketing-shop-more", title: "Email Marketing", category: "Content", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop", excerpt: "45% open rate" },
      { slug: "social-media-campaign-fitness", title: "Social Media Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", excerpt: "200% growth" }
    ]
  },

  "blog-content-tech-insights": {
    id: 12,
    slug: "blog-content-tech-insights",
    title: "Blog Content",
    subtitle: "Technical blog posts that rank on Google",
    categories: ["Content", "SEO", "Technology"],
    heroImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=800&fit=crop",
    client: "Tech Insights",
    industry: "Technology Media",
    services: "Technical Writing, SEO Content, Thought Leadership",
    duration: "Ongoing",
    completionDate: "Ongoing Project",
    website: "https://techinsights.blog",
    overview: [
      "Tech Insights needed high-quality technical content that would attract developers and tech professionals.",
      "We developed a content strategy focused on in-depth tutorials, industry analysis, and technical guides.",
      "The blog now ranks for over 500 keywords and attracts 100K+ monthly visitors."
    ],
    challenge: "Technical content requires accuracy and depth. The client needed writers who could understand complex topics and explain them clearly.",
    solutions: [
      "Assembled technical writing team",
      "Created in-depth tutorial series",
      "Developed industry analysis content",
      "Implemented technical SEO strategies",
      "Built developer community features",
      "Launched code example repository"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop", caption: "Blog Homepage" },
      { id: 2, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", caption: "Tutorial Posts" },
      { id: 3, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop", caption: "Code Examples" },
      { id: 4, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", caption: "Analytics Dashboard" },
      { id: 5, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", caption: "SEO Rankings" },
      { id: 6, src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop", caption: "Reader Comments" }
    ],
    results: [
      { icon: "🔍", number: "500+", label: "Ranking Keywords" },
      { icon: "👥", number: "100K+", label: "Monthly Visitors" },
      { icon: "📊", number: "Top 10", label: "Industry Rankings" }
    ],
    testimonial: {
      quote: "The content quality is exceptional. Our blog has become a trusted resource in the developer community!",
      name: "Arjun Reddy",
      designation: "Editor-in-Chief",
      company: "Tech Insights",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "content-strategy-edu-learn", title: "Content Strategy", category: "Content", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop", excerpt: "Educational content" },
      { slug: "email-marketing-shop-more", title: "Email Marketing", category: "Content", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop", excerpt: "45% open rate" },
      { slug: "linkedin-strategy-b2b-connect", title: "LinkedIn Strategy", category: "Social Media", image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&h=400&fit=crop", excerpt: "B2B leads" }
    ]
  },

  "email-marketing-shop-more": {
    id: 18,
    slug: "email-marketing-shop-more",
    title: "Email Marketing",
    subtitle: "Email campaigns with 45% open rate",
    categories: ["Content", "Email Marketing", "E-commerce"],
    heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&h=800&fit=crop",
    client: "Shop More",
    industry: "E-commerce",
    services: "Email Strategy, Automation, Campaign Design",
    duration: "3 Months",
    completionDate: "January 2024",
    website: "https://shopmore.com",
    overview: [
      "Shop More wanted to maximize their email marketing ROI with engaging campaigns that drive sales.",
      "We redesigned their email strategy with automated sequences, personalized content, and A/B testing.",
      "Email now generates 35% of their total revenue with industry-leading open rates."
    ],
    challenge: "Low open rates and high unsubscribes were killing their email marketing. They needed a complete overhaul of their email strategy and design.",
    solutions: [
      "Redesigned email templates for mobile",
      "Implemented segmentation strategy",
      "Created automated welcome sequence",
      "Built abandoned cart recovery emails",
      "Developed personalization system",
      "Set up A/B testing framework"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop", caption: "Email Templates" },
      { id: 2, src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", caption: "Welcome Series" },
      { id: 3, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", caption: "Analytics" },
      { id: 4, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", caption: "Campaign Dashboard" },
      { id: 5, src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop", caption: "Mobile Design" },
      { id: 6, src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop", caption: "A/B Tests" }
    ],
    results: [
      { icon: "📧", number: "45%", label: "Open Rate" },
      { icon: "💰", number: "35%", label: "Revenue from Email" },
      { icon: "🛒", number: "25%", label: "Cart Recovery" }
    ],
    testimonial: {
      quote: "Email marketing went from an afterthought to our top revenue channel. The transformation has been incredible!",
      name: "Kavita Jain",
      designation: "Marketing Manager",
      company: "Shop More",
      avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "content-strategy-edu-learn", title: "Content Strategy", category: "Content", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop", excerpt: "Educational content" },
      { slug: "blog-content-tech-insights", title: "Blog Content", category: "Content", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop", excerpt: "SEO blog posts" },
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" }
    ]
  },

  // ==================== PHOTOGRAPHY/VIDEO ====================
  "product-photography-jewel-craft": {
    id: 5,
    slug: "product-photography-jewel-craft",
    title: "Product Photography",
    subtitle: "Stunning product shots for jewelry catalog",
    categories: ["Photography/Video", "E-commerce", "Jewelry"],
    heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=800&fit=crop",
    client: "Jewel Craft",
    industry: "Jewelry & Accessories",
    services: "Product Photography, Catalog Design, Image Editing",
    duration: "4 Weeks",
    completionDate: "December 2023",
    website: "https://jewelcraft.com",
    overview: [
      "Jewel Craft needed professional product photography that would showcase the intricate details and beauty of their handcrafted jewelry.",
      "We created a complete catalog with lifestyle and product shots that elevated their brand presence.",
      "The new imagery has significantly increased their online sales and customer engagement."
    ],
    challenge: "Jewelry photography requires capturing intricate details, proper lighting for reflective surfaces, and consistent styling across hundreds of products.",
    solutions: [
      "Set up professional product photography studio",
      "Developed consistent styling guidelines",
      "Created lifestyle photography for marketing",
      "Implemented 360-degree product views",
      "Edited all images for web optimization",
      "Designed print-ready catalog"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop", caption: "Diamond Ring" },
      { id: 2, src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop", caption: "Necklace Set" },
      { id: 3, src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop", caption: "Earrings" },
      { id: 4, src: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=600&fit=crop", caption: "Bracelet" },
      { id: 5, src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop", caption: "Lifestyle Shot" },
      { id: 6, src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop", caption: "Catalog Page" }
    ],
    results: [
      { icon: "📷", number: "500+", label: "Products Shot" },
      { icon: "📈", number: "85%", label: "Conversion Increase" },
      { icon: "🛒", number: "60%", label: "Online Sales Up" }
    ],
    testimonial: {
      quote: "The photography quality is exceptional. Our jewelry has never looked this beautiful and our customers can see every detail!",
      name: "Meera Shah",
      designation: "Creative Director",
      company: "Jewel Craft",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "video-production-travel-tales", title: "Video Production", category: "Photography/Video", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop", excerpt: "Travel documentary" },
      { slug: "event-photography-wedding-bells", title: "Event Photography", category: "Photography/Video", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", excerpt: "Wedding photography" },
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" }
    ]
  },

  "video-production-travel-tales": {
    id: 9,
    slug: "video-production-travel-tales",
    title: "Video Production",
    subtitle: "Captivating travel documentary series",
    categories: ["Photography/Video", "Documentary", "Travel"],
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=800&fit=crop",
    client: "Travel Tales",
    industry: "Travel & Tourism",
    services: "Video Production, Editing, Motion Graphics",
    duration: "8 Weeks",
    completionDate: "November 2023",
    website: "https://traveltales.tv",
    overview: [
      "Travel Tales needed a documentary series that would inspire viewers to explore incredible destinations.",
      "We produced a 6-episode series featuring stunning cinematography and compelling storytelling.",
      "The series has garnered millions of views and established Travel Tales as a premium travel brand."
    ],
    challenge: "Creating broadcast-quality travel content requires extensive planning, on-location shooting, and professional post-production.",
    solutions: [
      "Developed series concept and story arcs",
      "Planned shoots across 6 locations",
      "Captured 4K cinematography",
      "Created motion graphics and titles",
      "Produced original music score",
      "Optimized for multiple platforms"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop", caption: "Mountain Episode" },
      { id: 2, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop", caption: "Beach Location" },
      { id: 3, src: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&h=600&fit=crop", caption: "Cultural Segment" },
      { id: 4, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop", caption: "Road Trip" },
      { id: 5, src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=600&fit=crop", caption: "Adventure Scene" },
      { id: 6, src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop", caption: "Final Edit" }
    ],
    results: [
      { icon: "🎬", number: "6", label: "Episodes Produced" },
      { icon: "👁️", number: "5M+", label: "Total Views" },
      { icon: "🏆", number: "3", label: "Award Nominations" }
    ],
    testimonial: {
      quote: "The documentary series exceeded all expectations. The cinematography is breathtaking and the storytelling is compelling!",
      name: "Rohan Kapoor",
      designation: "Founder",
      company: "Travel Tales",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "product-photography-jewel-craft", title: "Product Photography", category: "Photography/Video", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", excerpt: "Jewelry catalog" },
      { slug: "event-photography-wedding-bells", title: "Event Photography", category: "Photography/Video", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", excerpt: "Wedding photography" },
      { slug: "social-media-campaign-fitness", title: "Social Media Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop", excerpt: "200% growth" }
    ]
  },

    "event-photography-wedding-bells": {
    id: 14,
    slug: "event-photography-wedding-bells",
    title: "Event Photography",
    subtitle: "Memorable wedding photography collection",
    categories: ["Photography/Video", "Wedding", "Events"],
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop",
    client: "Wedding Bells",
    industry: "Wedding & Events",
    services: "Wedding Photography, Videography, Photo Albums",
    duration: "Ongoing",
    completionDate: "Ongoing Project",
    website: "https://weddingbells.studio",
    overview: [
      "Wedding Bells needed a team to capture the most beautiful moments of their clients' special days.",
      "We provide comprehensive wedding coverage including pre-wedding shoots, ceremony, and reception.",
      "Our work has made Wedding Bells the most sought-after wedding photography studio in the region."
    ],
    challenge: "Wedding photography requires capturing fleeting moments, managing large groups, and delivering exceptional quality under time pressure.",
    solutions: [
      "Developed pre-wedding consultation process",
      "Created shot lists and timelines",
      "Deployed multi-photographer teams",
      "Implemented same-day sneak peek delivery",
      "Designed custom album layouts",
      "Built client gallery portal"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop", caption: "Ceremony" },
      { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop", caption: "First Dance" },
      { id: 3, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop", caption: "Couple Portrait" },
      { id: 4, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop", caption: "Reception" },
      { id: 5, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop", caption: "Details" },
      { id: 6, src: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&h=600&fit=crop", caption: "Photo Album" }
    ],
    results: [
      { icon: "💒", number: "200+", label: "Weddings Captured" },
      { icon: "⭐", number: "5.0", label: "Average Rating" },
      { icon: "❤️", number: "100%", label: "Referral Rate" }
    ],
    testimonial: {
      quote: "They captured every precious moment of our wedding day. The photos are absolutely stunning and we'll treasure them forever!",
      name: "Anjali & Rahul",
      designation: "Bride & Groom",
      company: "Wedding Bells Client",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "product-photography-jewel-craft", title: "Product Photography", category: "Photography/Video", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", excerpt: "Jewelry catalog" },
      { slug: "video-production-travel-tales", title: "Video Production", category: "Photography/Video", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop", excerpt: "Travel documentary" },
      { slug: "portfolio-website-john-photographer", title: "Portfolio Website", category: "Web Development", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop", excerpt: "Photography showcase" }
    ]
  },

  // ==================== DESIGN ====================
  "mobile-app-design-health-track": {
    id: 7,
    slug: "mobile-app-design-health-track",
    title: "Mobile App Design",
    subtitle: "Intuitive health tracking app interface",
    categories: ["Design", "Mobile App", "UI/UX"],
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=800&fit=crop",
    client: "Health Track",
    industry: "Health & Fitness",
    services: "UI/UX Design, Prototyping, User Testing",
    duration: "8 Weeks",
    completionDate: "January 2024",
    website: "https://healthtrack.app",
    overview: [
      "Health Track needed a mobile app design that would make health tracking simple and enjoyable for users.",
      "We designed an intuitive interface with beautiful visualizations and seamless user flows.",
      "The app has received excellent reviews for its user-friendly design and engaging experience."
    ],
    challenge: "Health apps often overwhelm users with data. The client needed a design that would make complex health information easy to understand and track.",
    solutions: [
      "Conducted user research and persona development",
      "Created intuitive information architecture",
      "Designed clean, modern UI components",
      "Built interactive prototypes for testing",
      "Implemented gamification elements",
      "Created design system for developers"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop", caption: "App Dashboard" },
      { id: 2, src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop", caption: "Health Stats" },
      { id: 3, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", caption: "Activity Tracking" },
      { id: 4, src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop", caption: "Wearable Integration" },
      { id: 5, src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop", caption: "Progress Charts" },
      { id: 6, src: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop", caption: "Settings Screen" }
    ],
    results: [
      { icon: "⭐", number: "4.8", label: "App Store Rating" },
      { icon: "📱", number: "50K+", label: "Downloads" },
      { icon: "👥", number: "85%", label: "User Retention" }
    ],
    testimonial: {
      quote: "The app design is beautiful and users love how easy it is to track their health. Our retention rates are industry-leading!",
      name: "Dr. Sandeep Kumar",
      designation: "Product Manager",
      company: "Health Track",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "ui-ux-redesign-banking-app", title: "UI/UX Redesign", category: "Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", excerpt: "Banking app" },
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" },
      { slug: "brand-identity-design", title: "Brand Identity Design", category: "Branding", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop", excerpt: "Tech branding" }
    ]
  },

  "ui-ux-redesign-banking-app": {
    id: 13,
    slug: "ui-ux-redesign-banking-app",
    title: "UI/UX Redesign",
    subtitle: "User-friendly banking app interface",
    categories: ["Design", "Banking", "UI/UX"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=800&fit=crop",
    client: "Banking App",
    industry: "Finance & Banking",
    services: "UI/UX Redesign, User Research, Prototyping",
    duration: "12 Weeks",
    completionDate: "December 2023",
    website: "https://bankingapp.com",
    overview: [
      "A leading bank needed to modernize their mobile banking app to improve customer satisfaction and reduce support calls.",
      "We conducted extensive user research and redesigned the entire app experience from the ground up.",
      "The redesign resulted in a 60% reduction in support tickets and significantly improved app ratings."
    ],
    challenge: "The existing app had poor navigation, confusing transaction flows, and accessibility issues. Users were frustrated and customer support was overwhelmed.",
    solutions: [
      "Conducted user research with 200+ participants",
      "Mapped and optimized all user journeys",
      "Redesigned with accessibility in mind",
      "Simplified transaction flows",
      "Added biometric authentication",
      "Created comprehensive design system"
    ],
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", caption: "New Dashboard" },
      { id: 2, src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop", caption: "Transaction Flow" },
      { id: 3, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", caption: "Account Overview" },
      { id: 4, src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", caption: "Transfer Screen" },
      { id: 5, src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop", caption: "Mobile Views" },
      { id: 6, src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop", caption: "Settings" }
    ],
    results: [
      { icon: "📞", number: "60%", label: "Support Tickets Down" },
      { icon: "⭐", number: "4.7", label: "New App Rating" },
      { icon: "👥", number: "40%", label: "Active Users Up" }
    ],
    testimonial: {
      quote: "The redesign has transformed our customer experience. Support calls are down dramatically and our app ratings have never been higher!",
      name: "Vikram Malhotra",
      designation: "Chief Digital Officer",
      company: "Banking App",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
    },
    relatedProjects: [
      { slug: "mobile-app-design-health-track", title: "Mobile App Design", category: "Design", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", excerpt: "Health app" },
      { slug: "ecommerce-platform-fashion-hub", title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", excerpt: "Fashion e-commerce" },
      { slug: "real-estate-portal-dream-homes", title: "Real Estate Portal", category: "Web Development", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop", excerpt: "Property listings" }
    ]
  }
};

// ✅ Default/Fallback project for unknown slugs
const defaultProject = projectsData["brand-identity-design"];
const PortfolioDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ AOS Initialize - SAME AS ABOUT PAGE
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

  useEffect(() => {
    // In real app, fetch project data from API
    const projectData = projectsData[slug] || projectsData["brand-identity-design"];
    setProject(projectData);
    window.scrollTo(0, 0);
  }, [slug]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  if (!project) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="portfolio-detail-page">
      
      {/* ==================== SECTION 1: PROJECT HERO (DARK) ==================== */}
      <section className="project-hero">
        <div className="project-hero-image">
          <img src={project.heroImage} alt={project.title} />
        </div>
        <div className="project-hero-overlay"></div>
        <div className="project-hero-content">
          <div className="project-hero-inner">
            <div 
              className="breadcrumb"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Link to="/">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <Link to="/portfolio">Portfolio</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="current">{project.title}</span>
            </div>
            
            <div 
              className="project-categories"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {project.categories.map((cat, index) => (
                <span key={index} className="category-tag">{cat}</span>
              ))}
            </div>
            
            <h1 
              className="project-hero-title"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {project.title}
            </h1>
            <p 
              className="project-hero-subtitle"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTIONS 2-7: MAIN CONTENT (LIGHT) ==================== */}
      <section className="project-content-section">
        <div className="container">
          <div className="project-content-grid">
            
            {/* Main Content */}
            <div className="project-main-content">
              
              {/* SECTION 3: PROJECT OVERVIEW */}
              <div 
                className="project-overview"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="content-section-header">
                  <div className="content-section-icon">📋</div>
                  <h2>About This Project</h2>
                </div>
                <div className="content-text">
                  {project.overview.map((para, index) => (
                    <p 
                      key={index}
                      data-aos="fade-right"
                      data-aos-delay={200 + (index * 100)}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* SECTION 4: CHALLENGE */}
              <div 
                className="project-challenge"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="content-section-header">
                  <div className="content-section-icon">🎯</div>
                  <h2>The Challenge</h2>
                </div>
                <div className="content-text">
                  <p data-aos="fade-left" data-aos-delay="200">{project.challenge}</p>
                </div>
              </div>

              {/* SECTION 5: SOLUTION */}
              <div 
                className="project-solution"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="content-section-header">
                  <div className="content-section-icon">💡</div>
                  <h2>Our Approach</h2>
                </div>
                <div className="content-text">
                  <p data-aos="fade-right" data-aos-delay="200">
                    We developed a comprehensive strategy to address all the challenges and deliver exceptional results:
                  </p>
                </div>
                <div className="solution-list">
                  {project.solutions.map((solution, index) => (
                    <div 
                      key={index} 
                      className="solution-item"
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                      data-aos-delay={100 + (index * 80)}
                    >
                      <div className="solution-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <p>{solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 7: RESULTS */}
              <div 
                className="project-results"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="content-section-header">
                  <div className="content-section-icon">🏆</div>
                  <h2>The Results</h2>
                </div>
                <div className="content-text">
                  <p data-aos="fade-up" data-aos-delay="200">
                    Our strategic approach delivered measurable outcomes that exceeded client expectations:
                  </p>
                </div>
                <div className="results-stats">
                  {project.results.map((result, index) => (
                    <div 
                      key={index} 
                      className="result-stat"
                      data-aos="fade-up"
                      data-aos-delay={100 + (index * 100)}
                    >
                      <div className="result-stat-icon">{result.icon}</div>
                      <div className="result-stat-number">{result.number}</div>
                      <div className="result-stat-label">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* SECTION 2: PROJECT INFO SIDEBAR */}
            <div className="project-info-sidebar">
              <div 
                className="project-info-card"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h3>Project Information</h3>
                <div className="info-list">
                  <div className="info-item" data-aos="fade-left" data-aos-delay="250">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Client</span>
                      <strong>{project.client}</strong>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-left" data-aos-delay="300">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z" />
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Industry</span>
                      <strong>{project.industry}</strong>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-left" data-aos-delay="350">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Services</span>
                      <strong>{project.services}</strong>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-left" data-aos-delay="400">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Duration</span>
                      <strong>{project.duration}</strong>
                    </div>
                  </div>

                  <div className="info-item" data-aos="fade-left" data-aos-delay="450">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div className="info-text">
                      <span>Completed</span>
                      <strong>{project.completionDate}</strong>
                    </div>
                  </div>

                  {project.website && (
                    <div className="info-item" data-aos="fade-left" data-aos-delay="500">
                      <div className="info-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                        </svg>
                      </div>
                      <div className="info-text">
                        <span>Website</span>
                        <a href={project.website} target="_blank" rel="noreferrer">
                          Visit Website
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div 
                  className="project-info-cta"
                  data-aos="fade-left"
                  data-aos-delay="550"
                >
                  <Link to="/contact" className="btn-primary">
                    Start Similar Project
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: PROJECT GALLERY (DARK) ==================== */}
      <section className="project-gallery-section">
        <div className="container">
          <div className="section-header center">
            <span 
              className="section-tag"
              data-aos="fade-right"
            >
              📸 Project Gallery
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Visual Showcase
            </h2>
          </div>

          <div className="gallery-grid">
            {project.gallery.map((item, index) => (
              <div 
                key={item.id} 
                className={`gallery-item ${index === 0 ? 'large' : ''}`}
                onClick={() => openLightbox(index)}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <img src={item.src} alt={item.caption} />
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                </div>
                <div className="gallery-zoom">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'active' : ''}`} onClick={closeLightbox}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <img src={project.gallery[currentImage]?.src} alt={project.gallery[currentImage]?.caption} />
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button className="lightbox-nav prev" onClick={prevImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="lightbox-nav next" onClick={nextImage}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="lightbox-counter">
            {currentImage + 1} / {project.gallery.length}
          </div>
        </div>
      </div>

      {/* ==================== SECTION 8: CLIENT TESTIMONIAL (DARK) ==================== */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div 
              className="testimonial-quote-icon"
              data-aos="fade-up"
            >
              "
            </div>
            <p 
              className="testimonial-text"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {project.testimonial.quote}
            </p>
            <div 
              className="testimonial-author"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="testimonial-avatar">
                <img src={project.testimonial.avatar} alt={project.testimonial.name} />
              </div>
              <div className="testimonial-author-info">
                <h4>{project.testimonial.name}</h4>
                <p>{project.testimonial.designation}, <span>{project.testimonial.company}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: RELATED PROJECTS (LIGHT) ==================== */}
      <section className="related-projects-section">
        <div className="container">
          <div className="section-header center">
            <span 
              className="section-tag"
              data-aos="fade-right"
            >
              🔗 More Work
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Related Projects
            </h2>
          </div>

          <div className="related-projects-grid">
            {project.relatedProjects.map((related, index) => (
              <Link 
                key={index} 
                to={`/portfolio/${related.slug}`} 
                className="related-project-card"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="related-project-image">
                  <img src={related.image} alt={related.title} />
                </div>
                <div className="related-project-overlay">
                  <span className="related-project-category">{related.category}</span>
                  <h3>{related.title}</h3>
                  <p>{related.excerpt}</p>
                </div>
                <div className="related-project-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 10: CTA (DARK) ==================== */}
      <section className="project-cta-section">
        <div className="cta-bg-decor">
          <div className="cta-blob cta-blob-1"></div>
          <div className="cta-blob cta-blob-2"></div>
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
          <div className="cta-shape cta-shape-3"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <span 
              className="cta-badge"
              data-aos="fade-up"
            >
              🚀 Let's Work Together
            </span>
            <h2 
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Want <span className="cta-highlight">Similar</span> Results?
            </h2>
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Let's discuss how we can help transform your business with our proven strategies and creative solutions.
            </p>
            <div 
              className="cta-buttons"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/contact" className="cta-btn-primary">
                <span>Start Your Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/portfolio" className="cta-btn-secondary">
                <span>View More Projects</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* ==================== PROJECT NAVIGATION (LIGHT) ==================== */}
      <section className="project-navigation">
        <div className="container">
          <div className="project-nav-grid">
            <Link 
              to="/portfolio/ecommerce-website" 
              className="project-nav-item prev"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="nav-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="nav-text">
                <span>Previous Project</span>
                <strong>E-commerce Website</strong>
              </div>
            </Link>
            <Link 
              to="/portfolio/social-media-campaign" 
              className="project-nav-item next"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="nav-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="nav-text">
                <span>Next Project</span>
                <strong>Social Media Campaign</strong>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioDetail;