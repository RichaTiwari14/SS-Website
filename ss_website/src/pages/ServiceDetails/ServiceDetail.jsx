import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";

// ✅ AOS Library Import - BOTH REQUIRED
import AOS from "aos";
import "aos/dist/aos.css";

// ============================================
// COMPLETE SERVICES DATA FOR ALL 5 PAGES
// ============================================
const servicesData = {
  
  // ==========================================
  // 1. DIGITAL MARKETING
  // ==========================================
  "digital-marketing": {
    id: 1,
    slug: "digital-marketing",
    icon: "📊",
    title: "Digital Marketing",
    tagline: "Drive Growth with Data-Driven Strategies",
    description: "Transform your online presence with our comprehensive digital marketing solutions. We combine SEO, paid advertising, and marketing automation to deliver measurable results that grow your business.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop",
    
    overviewText: "Our digital marketing services are designed to help businesses of all sizes achieve their growth goals. We use a data-driven approach to create strategies that deliver real, measurable results. From improving your search engine rankings to running high-converting ad campaigns, we've got you covered.",
    
    benefits: [
      { 
        icon: "🎯", 
        title: "Targeted Reach", 
        desc: "Reach your ideal customers with precision targeting across all digital channels" 
      },
      { 
        icon: "📈", 
        title: "Measurable Results", 
        desc: "Track every click, conversion, and sale with detailed analytics" 
      },
      { 
        icon: "💰", 
        title: "Better ROI", 
        desc: "Maximize your marketing budget efficiency with optimized campaigns" 
      },
      { 
        icon: "🚀", 
        title: "Scalable Growth", 
        desc: "Strategies that grow with your business and adapt to market changes" 
      }
    ],
    
    subServices: [
      { 
        icon: "🔍", 
        title: "SEO Services", 
        desc: "Comprehensive on-page, off-page, and technical SEO with keyword research to improve your organic search rankings and drive qualified traffic." 
      },
      { 
        icon: "🎯", 
        title: "Sales Funnels", 
        desc: "Strategic landing pages, email sequences, and marketing automation that convert visitors into leads and leads into customers." 
      },
      { 
        icon: "📢", 
        title: "Paid Advertising", 
        desc: "Expert Google Ads and Meta Ads campaign management with continuous optimization for maximum ROI." 
      },
      { 
        icon: "📋", 
        title: "Marketing Strategy", 
        desc: "In-depth market analysis, competitor research, and strategic roadmap development tailored to your business goals." 
      },
      { 
        icon: "📊", 
        title: "Analytics & Reporting", 
        desc: "Comprehensive performance tracking with detailed monthly reports and actionable insights for continuous improvement." 
      },
      { 
        icon: "✉️", 
        title: "Email Marketing", 
        desc: "Automated email campaigns, newsletters, and lead nurturing sequences that keep your audience engaged." 
      }
    ],
    
    process: [
      { step: 1, title: "Discovery", desc: "Understanding your business goals and target audience" },
      { step: 2, title: "Research", desc: "Market analysis and competitor research" },
      { step: 3, title: "Strategy", desc: "Custom marketing plan creation" },
      { step: 4, title: "Execute", desc: "Campaign implementation and launch" },
      { step: 5, title: "Optimize", desc: "Continuous monitoring and improvement" }
    ],
    
    portfolio: [
      { 
        title: "E-commerce SEO Success", 
        desc: "200% organic traffic increase in 6 months", 
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
      },
      { 
        title: "Lead Generation Campaign", 
        desc: "500+ qualified leads per month", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
      },
      { 
        title: "Brand Awareness Campaign", 
        desc: "2M+ impressions across platforms", 
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop" 
      },
      { 
        title: "PPC Optimization", 
        desc: "40% reduction in cost per acquisition", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
      }
    ],
    
    faqs: [
      { 
        q: "How long does it take to see results from digital marketing?", 
        a: "SEO typically takes 3-6 months to show significant results, while paid advertising can show results within days. We provide regular reports so you can track progress from day one." 
      },
      { 
        q: "What's included in your digital marketing packages?", 
        a: "Our packages include a combination of SEO, paid advertising, content creation, and analytics. The specific services depend on the package you choose, and we can also create custom packages." 
      },
      { 
        q: "Do you work with businesses in specific industries?", 
        a: "We work with businesses across all industries including e-commerce, healthcare, real estate, education, hospitality, and more. Our team has diverse experience." 
      },
      { 
        q: "How do you measure the success of campaigns?", 
        a: "We track KPIs like website traffic, conversion rates, lead generation, ROI, and more. You'll receive detailed monthly reports with all metrics and insights." 
      },
      { 
        q: "Can I cancel my subscription anytime?", 
        a: "Yes, our services are month-to-month with no long-term contracts required. We believe our results should speak for themselves." 
      },
      { 
        q: "Do you offer a free consultation?", 
        a: "Yes! We offer a free 30-minute consultation to discuss your business goals and how we can help you achieve them." 
      }
    ]
  },

  // ==========================================
  // 2. SOCIAL MEDIA MARKETING
  // ==========================================
  "social-media-marketing": {
    id: 2,
    slug: "social-media-marketing",
    icon: "📱",
    title: "Social Media Marketing",
    tagline: "Build Your Brand, Engage Your Audience",
    description: "Grow your social media presence with strategic content, engaging campaigns, and community management that turns followers into loyal customers.",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=800&fit=crop",
    
    overviewText: "Social media is where your customers spend their time. Our social media marketing services help you connect with your audience, build brand awareness, and drive real business results. From content creation to paid campaigns, we handle everything so you can focus on running your business.",
    
    benefits: [
      { 
        icon: "👥", 
        title: "Brand Awareness", 
        desc: "Get your brand in front of millions of potential customers" 
      },
      { 
        icon: "💬", 
        title: "Engagement", 
        desc: "Build meaningful connections with your audience" 
      },
      { 
        icon: "📈", 
        title: "Lead Generation", 
        desc: "Turn social followers into paying customers" 
      },
      { 
        icon: "🎨", 
        title: "Brand Consistency", 
        desc: "Maintain a cohesive brand image across all platforms" 
      }
    ],
    
    subServices: [
      { 
        icon: "🎨", 
        title: "Content Creation", 
        desc: "Eye-catching graphics, carousel posts, and stories designed to stop the scroll and engage your audience." 
      },
      { 
        icon: "🎬", 
        title: "Reels & Video Content", 
        desc: "Short-form videos, trending content, and reels that capture attention and go viral." 
      },
      { 
        icon: "📢", 
        title: "Social Media Ads", 
        desc: "Targeted paid campaigns on Facebook, Instagram, and LinkedIn for maximum reach and conversions." 
      },
      { 
        icon: "📅", 
        title: "Page Management", 
        desc: "Daily posting, engagement management, and community building across all your social platforms." 
      },
      { 
        icon: "🤝", 
        title: "Influencer Marketing", 
        desc: "Strategic influencer partnerships and collaborations to expand your brand reach." 
      },
      { 
        icon: "📊", 
        title: "Analytics & Insights", 
        desc: "Detailed performance tracking and monthly reporting on all social media metrics." 
      }
    ],
    
    process: [
      { step: 1, title: "Audit", desc: "Analyze your current social presence" },
      { step: 2, title: "Strategy", desc: "Create content calendar and plan" },
      { step: 3, title: "Create", desc: "Design engaging content" },
      { step: 4, title: "Publish", desc: "Post at optimal times" },
      { step: 5, title: "Analyze", desc: "Track and optimize performance" }
    ],
    
    portfolio: [
      { 
        title: "Fashion Brand Growth", 
        desc: "50K+ followers gained in 6 months", 
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
      },
      { 
        title: "Restaurant Chain", 
        desc: "300% increase in engagement", 
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" 
      },
      { 
        title: "Tech Startup Launch", 
        desc: "Viral campaign with 1M+ reach", 
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
      },
      { 
        title: "Fitness Brand", 
        desc: "Community of 100K+ followers", 
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop" 
      }
    ],
    
    faqs: [
      { 
        q: "Which social media platforms do you manage?", 
        a: "We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, and Pinterest. We'll recommend the best platforms based on your target audience." 
      },
      { 
        q: "How often will you post on our social media?", 
        a: "Posting frequency depends on your package. Basic includes 12 posts/month (3/week), Professional includes 24 posts/month (6/week), and Premium includes daily posting." 
      },
      { 
        q: "Do you create the content or do we need to provide it?", 
        a: "We handle all content creation including graphics, captions, and videos. We'll work with you to understand your brand voice and create content that resonates with your audience." 
      },
      { 
        q: "Can you run paid advertising on social media?", 
        a: "Yes! Our Professional and Premium plans include paid ad management. We create, run, and optimize campaigns on Facebook, Instagram, and LinkedIn." 
      },
      { 
        q: "How do you measure social media success?", 
        a: "We track engagement rates, follower growth, reach, impressions, website traffic from social, and conversions. You'll receive detailed monthly reports with all metrics." 
      },
      { 
        q: "Do you respond to comments and messages?", 
        a: "Yes! Community management is included in Professional and Premium plans. We respond to comments, messages, and engage with your audience on your behalf." 
      }
    ]
  },

  // ==========================================
  // 3. WEBSITE DEVELOPMENT
  // ==========================================
  "website-development": {
    id: 3,
    slug: "website-development",
    icon: "💻",
    title: "Website Development",
    tagline: "Beautiful Websites That Convert",
    description: "Get a stunning, high-performance website that represents your brand perfectly and turns visitors into customers. From simple landing pages to complex e-commerce solutions.",
    heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&h=800&fit=crop",
    
    overviewText: "Your website is your digital storefront and often the first impression customers have of your business. We create modern, responsive websites that not only look amazing but also perform exceptionally well. Whether you need a simple business website or a complex e-commerce platform, our team delivers solutions that drive results.",
    
    benefits: [
      { 
        icon: "📱", 
        title: "Mobile-First Design", 
        desc: "Perfect experience on all devices and screen sizes" 
      },
      { 
        icon: "⚡", 
        title: "Lightning Fast", 
        desc: "Optimized for speed and performance" 
      },
      { 
        icon: "🔒", 
        title: "Secure & Reliable", 
        desc: "Built with security best practices" 
      },
      { 
        icon: "📈", 
        title: "SEO-Ready", 
        desc: "Optimized for search engines from day one" 
      }
    ],
    
    subServices: [
      { 
        icon: "🎨", 
        title: "UI/UX Design", 
        desc: "Beautiful wireframes, mockups, and user experience design that converts visitors into customers." 
      },
      { 
        icon: "📱", 
        title: "Responsive Development", 
        desc: "Mobile-first, cross-device compatible websites that work flawlessly on all screen sizes." 
      },
      { 
        icon: "🚀", 
        title: "Landing Pages", 
        desc: "High-converting single page websites optimized for campaigns, launches, and lead generation." 
      },
      { 
        icon: "🛒", 
        title: "E-commerce Solutions", 
        desc: "Full-featured online stores with payment integration, inventory management, and order tracking." 
      },
      { 
        icon: "⚡", 
        title: "Performance Optimization", 
        desc: "Speed optimization, image compression, and SEO-ready code for better rankings." 
      },
      { 
        icon: "🔧", 
        title: "Maintenance & Support", 
        desc: "Ongoing updates, security patches, backups, and technical support to keep your site running smoothly." 
      }
    ],
    
    process: [
      { step: 1, title: "Discovery", desc: "Understand requirements & goals" },
      { step: 2, title: "Design", desc: "Create mockups & wireframes" },
      { step: 3, title: "Develop", desc: "Build the website" },
      { step: 4, title: "Test", desc: "Quality assurance & testing" },
      { step: 5, title: "Launch", desc: "Go live & ongoing support" }
    ],
    
    portfolio: [
      { 
        title: "Corporate Website", 
        desc: "Modern business online presence", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
      },
      { 
        title: "E-commerce Store", 
        desc: "Full-featured shopping experience", 
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
      },
      { 
        title: "Portfolio Website", 
        desc: "Creative professional showcase", 
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" 
      },
      { 
        title: "SaaS Platform", 
        desc: "Complex web application", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
      }
    ],
    
    faqs: [
      { 
        q: "How long does it take to build a website?", 
        a: "Timeline depends on complexity: Landing pages take 1-2 weeks, business websites take 3-4 weeks, and e-commerce sites take 6-8 weeks. We'll provide a detailed timeline during consultation." 
      },
      { 
        q: "Will my website be mobile-friendly?", 
        a: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices including phones, tablets, and desktops." 
      },
      { 
        q: "Do you provide website hosting?", 
        a: "We can recommend reliable hosting providers and help you set everything up. We also offer managed hosting solutions if you prefer a hands-off approach." 
      },
      { 
        q: "Can I update the website content myself?", 
        a: "Yes! We build websites with user-friendly CMS (Content Management Systems) like WordPress so you can easily update content, add blog posts, and manage your site without technical knowledge." 
      },
      { 
        q: "What about ongoing maintenance?", 
        a: "We offer maintenance packages starting at ₹5,000/month that include regular updates, security patches, backups, and technical support." 
      },
      { 
        q: "Do you redesign existing websites?", 
        a: "Yes! We can redesign and modernize your existing website while preserving your content and SEO rankings. Contact us for a redesign quote." 
      }
    ]
  },

  // ==========================================
  // 4. PHOTOGRAPHY & VIDEOGRAPHY
  // ==========================================
  "media-production": {
    id: 4,
    slug: "media-production",
    icon: "🎬",
    title: "Photography & Videography",
    tagline: "Visual Stories That Captivate",
    description: "Professional photography and videography services that capture your brand's essence and create lasting impressions. From product shoots to promotional videos, we bring your vision to life.",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=800&fit=crop",
    
    overviewText: "In today's visual world, high-quality imagery and videos are essential for standing out from the competition. Our media production team creates stunning visual content that tells your brand story, engages your audience, and drives results across all platforms.",
    
    benefits: [
      { 
        icon: "📸", 
        title: "Professional Quality", 
        desc: "Industry-standard equipment and expert techniques" 
      },
      { 
        icon: "🎨", 
        title: "Creative Direction", 
        desc: "Unique concepts that reflect your brand identity" 
      },
      { 
        icon: "⚡", 
        title: "Quick Turnaround", 
        desc: "Fast delivery without compromising quality" 
      },
      { 
        icon: "🔄", 
        title: "Multi-Platform Ready", 
        desc: "Content optimized for all channels and formats" 
      }
    ],
    
    subServices: [
      { 
        icon: "👔", 
        title: "Brand Shoots", 
        desc: "Professional corporate and team photography that showcases your company culture and professionalism." 
      },
      { 
        icon: "📦", 
        title: "Product Photography", 
        desc: "E-commerce ready product images with professional lighting and styling that sell." 
      },
      { 
        icon: "🎬", 
        title: "Ad Films", 
        desc: "Commercial and promotional videos that tell your brand story and convert viewers into customers." 
      },
      { 
        icon: "📱", 
        title: "Reels Production", 
        desc: "Trendy short-form video content optimized for Instagram, TikTok, and YouTube Shorts." 
      },
      { 
        icon: "🎉", 
        title: "Event Coverage", 
        desc: "Comprehensive live event documentation including photography, videography, and highlight reels." 
      },
      { 
        icon: "✈️", 
        title: "Drone Photography", 
        desc: "Stunning aerial shots for real estate, events, and promotional content." 
      }
    ],
    
    process: [
      { step: 1, title: "Brief", desc: "Understand your vision & goals" },
      { step: 2, title: "Plan", desc: "Concept development & storyboard" },
      { step: 3, title: "Shoot", desc: "Professional production day" },
      { step: 4, title: "Edit", desc: "Post-production & color grading" },
      { step: 5, title: "Deliver", desc: "Final files in all formats" }
    ],
    
    portfolio: [
      { 
        title: "Product Catalog", 
        desc: "500+ product images for e-commerce", 
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop" 
      },
      { 
        title: "Corporate Video", 
        desc: "Brand story documentary film", 
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop" 
      },
      { 
        title: "Event Coverage", 
        desc: "Annual conference highlights", 
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" 
      },
      { 
        title: "Social Media Reels", 
        desc: "Viral content series for fashion brand", 
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop" 
      }
    ],
    
    faqs: [
      { 
        q: "What equipment do you use?", 
        a: "We use professional-grade cameras (Sony, Canon, RED), cinema lenses, professional lighting setups, and high-end audio equipment. For video, we use 4K cinema cameras." 
      },
      { 
        q: "How far in advance should we book?", 
        a: "We recommend booking at least 2 weeks in advance for standard shoots and 4 weeks for large productions or events. Rush bookings may be available at additional cost." 
      },
      { 
        q: "Do you travel for shoots?", 
        a: "Yes! We travel anywhere in India for shoots. Travel and accommodation costs are additional for locations outside Raipur." 
      },
      { 
        q: "How many revisions are included?", 
        a: "Basic packages include 1 revision round, Brand Package includes 2 rounds, and Premium includes unlimited revisions within scope." 
      },
      { 
        q: "What formats will we receive the final files in?", 
        a: "Photos are delivered in high-resolution JPEG and optional RAW formats. Videos are delivered in MP4 (1080p/4K) optimized for web and social media." 
      },
      { 
        q: "Can we use the content for advertising?", 
        a: "Yes! All our packages include commercial usage rights. You can use the content for advertising, marketing, and promotional purposes." 
      }
    ]
  },

  // ==========================================
  // 5. CONTENT WRITING
  // ==========================================
  "content-writing": {
    id: 5,
    slug: "content-writing",
    icon: "✍️",
    title: "Content Writing",
    tagline: "Words That Connect and Convert",
    description: "Compelling content that engages your audience and drives action. From SEO-optimized blog posts to persuasive ad copy, we craft words that work for your business.",
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=800&fit=crop",
    
    overviewText: "Great content is the foundation of effective marketing. Our content writing team creates engaging, SEO-optimized content that resonates with your audience, builds trust, and helps you achieve your business goals. Every word is crafted with purpose and strategy.",
    
    benefits: [
      { 
        icon: "🔍", 
        title: "SEO Optimized", 
        desc: "Content that ranks on search engines and drives organic traffic" 
      },
      { 
        icon: "🎯", 
        title: "Conversion Focused", 
        desc: "Copy that persuades readers to take action" 
      },
      { 
        icon: "📝", 
        title: "Brand Voice", 
        desc: "Consistent tone that reflects your brand personality" 
      },
      { 
        icon: "⚡", 
        title: "Fast Delivery", 
        desc: "Quality content delivered on time, every time" 
      }
    ],
    
    subServices: [
      { 
        icon: "📰", 
        title: "Blog Writing", 
        desc: "SEO-optimized articles and blog posts that drive organic traffic and establish thought leadership." 
      },
      { 
        icon: "🌐", 
        title: "Website Copy", 
        desc: "Compelling homepage, about, and service page content that converts visitors into customers." 
      },
      { 
        icon: "📢", 
        title: "Ad Copywriting", 
        desc: "Persuasive headlines, descriptions, and CTAs that drive clicks and conversions." 
      },
      { 
        icon: "📱", 
        title: "Social Media Captions", 
        desc: "Engaging post text with relevant hashtags that boost engagement and reach." 
      },
      { 
        icon: "✉️", 
        title: "Email Marketing", 
        desc: "Newsletter content, drip campaigns, and email sequences that get opened and drive action." 
      },
      { 
        icon: "📄", 
        title: "Product Descriptions", 
        desc: "Compelling e-commerce product content that informs and sells." 
      }
    ],
    
    process: [
      { step: 1, title: "Brief", desc: "Understand your needs & goals" },
      { step: 2, title: "Research", desc: "Topic & keyword research" },
      { step: 3, title: "Write", desc: "Create first draft" },
      { step: 4, title: "Edit", desc: "Refine & polish content" },
      { step: 5, title: "Deliver", desc: "Final review & handoff" }
    ],
    
    portfolio: [
      { 
        title: "Tech Blog", 
        desc: "100+ articles, 50K monthly readers", 
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
      },
      { 
        title: "E-commerce Copy", 
        desc: "500+ product descriptions", 
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
      },
      { 
        title: "Email Campaigns", 
        desc: "45% average open rate", 
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop" 
      },
      { 
        title: "Website Rewrite", 
        desc: "150% conversion rate increase", 
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop" 
      }
    ],
    
    faqs: [
      { 
        q: "What industries do you write for?", 
        a: "We have writers experienced in technology, healthcare, finance, e-commerce, real estate, education, travel, and many more industries. We can adapt to any niche." 
      },
      { 
        q: "How do you ensure content quality?", 
        a: "Every piece goes through our quality process: research, writing, editing, and proofreading. We use Grammarly and plagiarism checkers to ensure error-free, original content." 
      },
      { 
        q: "Can you match our brand voice?", 
        a: "Absolutely! We start by understanding your brand voice, tone, and style. We can also create a brand voice guide if you don't have one." 
      },
      { 
        q: "Do you do keyword research?", 
        a: "Yes, SEO keyword research is included in all our packages. We identify the best keywords to target based on search volume and competition." 
      },
      { 
        q: "What's your typical turnaround time?", 
        a: "Blog posts are delivered within 3-5 business days. Professional plan offers 3-day delivery, and Enterprise offers same-day delivery for urgent needs." 
      },
      { 
        q: "Do you offer bulk discounts?", 
        a: "Yes! For large content requirements, we offer custom packages with volume discounts. Contact us to discuss your needs." 
      }
    ]
  }
};

// ============================================
// SERVICE DETAIL COMPONENT
// ============================================
const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

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

  useEffect(() => {
    // Get service data based on URL slug
    const serviceData = servicesData[slug];
    
    if (serviceData) {
      setService(serviceData);
    } else {
      // Default to digital marketing if slug not found
      setService(servicesData["digital-marketing"]);
    }
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [slug]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Loading state
  if (!service) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#64748B'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      
      {/* ==================== SECTION 1: SERVICE HERO ==================== */}
      <section className="service-hero">
        <div className="service-hero-bg">
          <img src={service.heroImage} alt={service.title} />
          <div className="service-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="service-hero-content">
            {/* Breadcrumb */}
            <div 
              className="breadcrumb"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Link to="/">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <Link to="/services">Services</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="current">{service.title}</span>
            </div>

            {/* Hero Content */}
            <div 
              className="service-hero-icon"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {service.icon}
            </div>
            <h1 
              className="service-hero-title"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {service.title}
            </h1>
            <p 
              className="service-hero-tagline"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              {service.tagline}
            </p>
            <p 
              className="service-hero-desc"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              {service.description}
            </p>

            {/* CTA Buttons */}
            <div 
              className="service-hero-ctas"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link to="/contact" className="btn-primary">
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: SERVICE OVERVIEW ==================== */}
      <section className="service-overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <span 
                className="section-tag"
                data-aos="fade-right"
              >
                📋 Overview
              </span>
              <h2 
                className="section-title"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                What We Offer
              </h2>
              <p 
                className="overview-text"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {service.overviewText}
              </p>

              <div className="overview-benefits">
                {service.benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="benefit-item"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={300 + (index * 100)}
                  >
                    <div className="benefit-icon">{benefit.icon}</div>
                    <div className="benefit-text">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-image">
              <img 
                src={service.heroImage} 
                alt={service.title}
                data-aos="fade-left"
                data-aos-delay="200"
              />
              <div 
                className="overview-stats-card"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="overview-stats-icon">🏆</div>
                <div className="overview-stats-text">
                  <h4>100+</h4>
                  <p>Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: SUB-SERVICES ==================== */}
      <section className="sub-services-section">
        <div className="container">
          <div className="section-header center">
            <span 
              className="section-tag"
              data-aos="fade-right"
            >
              🛠️ Services
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Our {service.title} Services
            </h2>
            <p 
              className="section-desc"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Comprehensive solutions tailored to your specific needs
            </p>
          </div>

          <div className="sub-services-grid">
            {service.subServices.map((subService, index) => (
              <div 
                key={index} 
                className="sub-service-card"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="sub-service-icon">{subService.icon}</div>
                <h4>{subService.title}</h4>
                <p>{subService.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: PROCESS ==================== */}
      <section className="process-section">
        <div className="container">
          <div className="section-header center">
            <span 
              className="section-tag"
              data-aos="fade-right"
            >
              ⚙️ Process
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              How We Work
            </h2>
            <p 
              className="section-desc"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Our proven process ensures quality results every time
            </p>
          </div>

          <div className="process-timeline">
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="process-step"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="process-step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: RELATED WORK ==================== */}
      <section className="related-work-section">
        <div className="container">
          <div className="section-header center">
            <span 
              className="section-tag"
              data-aos="fade-right"
            >
              🎨 Portfolio
            </span>
            <h2 
              className="section-title"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Our Work in {service.title}
            </h2>
            <p 
              className="section-desc"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              See the results we've delivered for our clients
            </p>
          </div>

          <div className="related-work-grid">
            {service.portfolio.map((work, index) => (
              <Link 
                key={index} 
                to="/portfolio" 
                className="work-card"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <img src={work.image} alt={work.title} />
                <div className="work-card-overlay">
                  <h4>{work.title}</h4>
                  <p>{work.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: FAQ ==================== */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-container">
            <div className="faq-content">
              <span 
                className="section-tag"
                data-aos="fade-right"
              >
                ❓ FAQ
              </span>
              <h2 
                className="section-title"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Frequently Asked Questions
              </h2>
              <p 
                className="section-desc"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Got questions? We've got answers. If you don't find what you're 
                looking for, feel free to contact us.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary" 
                style={{ marginTop: '24px' }}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Ask a Question
              </Link>
            </div>

            <div className="faq-list">
              {service.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    <div className="faq-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: CTA ==================== */}
      <section className="service-cta-section">
        <div className="container">
          <div className="service-cta-content">
            <h2 
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Ready to Get Started with {service.title}?
            </h2>
            <p 
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Let's discuss your project requirements and create a strategy 
              that delivers real results for your business.
            </p>
            <div 
              className="service-cta-buttons"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="/contact" className="btn-white">
                Contact Us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/portfolio" className="btn-outline-white">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;