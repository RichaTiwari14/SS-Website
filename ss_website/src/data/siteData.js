// ============================================
// SITE DATA - Saara Content Yahan Hai
// ============================================
import bluesantLogo from '../assets/blue-sant.jpg.webp';
import jaidurgaLogo from '../assets/jai-durga-oil.jpg.webp';
import civilindiaLogo from '../assets/civil-india-infra.jpg.webp';
import luckymetalsLogo from '../assets/lucky-metal-framing.jpg.webp';
import teologyLogo from '../assets/teology.jpg.webp';
import anantLogo from '../assets/Anantresources.jpg.webp';
import sourabhImage from '../assets/Sourabh-Virani-237x300.jpg.webp';
import priteshImage from '../assets/Pritesh-Patel-237x300.jpg.webp';
import sumandeepImage from '../assets/sumandeep-kaur-237x300.jpg.webp';
import abhimanyuImage from '../assets/Abhimanyu-Gupta-237x300.jpg.webp';
import samruddhiImage from '../assets/Samruddhi-Tayal-237x300.jpg.webp';
import drishtiImage from '../assets/Drishti-Jain-237x300.jpg.webp';
import projectImage1 from '../assets/landing_projects/Anant-Resources.jpg';
import projectImage2 from '../assets/landing_projects/gp1.jpeg';
import projectImage3 from '../assets/landing_projects/gp16.jpeg';
import projectImage4 from '../assets/landing_projects/gp18.jpeg';
import projectImage5 from '../assets/landing_projects/gp25.jpeg';
import projectImage6 from '../assets/landing_projects/logo5.jpeg';
export const siteData = {
  company: {
    name: "Social Spark",
    phone: "+91-7000874785",
    email: "socialspark20@gmail.com",
    address: "A 508, 5th Floor Babylon Tower, VIP Square, Great Eastern Rd, Telibandha, Raipur, Chhattisgarh 492001"
  },

  hero: {
    badge: "WEB & MOBILE EXPERIENCES",
    title: "Elegant Digital Experiences",
    description: "Innovative & Eye-Catching Web design & Development that help brands stand out from the crowd. We are your one-stop solution for all business needs.",
    stats: [
      { value: "500+", label: "Businesses Growing" },
      { value: "25+", label: "Team Members" },
      { value: "4.7", label: "Google Rating", isRating: true }
    ]
  },


clients: [
    { 
      name: "Bluesant", 
      url: "www.bluesant.com",
      logo: bluesantLogo  // ✅ Variable use karo, string nahi
    },
    { 
      name: "Jai Durga Oil", 
      url: "www.jaidurgaoil.com",
      logo: jaidurgaLogo
    },
    { 
      name: "Civil India Infra", 
      url: "www.civilindiainfra.com",
      logo: civilindiaLogo
    },
    { 
      name: "Lucky Metal Framings", 
      url: "www.luckymetalframings.com",
      logo: luckymetalsLogo
    },
    { 
      name: "Teology Organics", 
      url: "www.teologyorganics.com",
      logo: teologyLogo
    },
    { 
      name: "Anant Resources", 
      url: "www.anantresources.in",
      logo: anantLogo
    }
  ],

  services: [
    { num: "01", icon: "🚀", title: "Digital Marketing", desc: "Transforming businesses into brands with tailor-made strategic content.", color: "#FF6B3A" },
    { num: "02", icon: "📱", title: "Social Media Marketing", desc: "Latest platforms and tactics to benefit your business.", color: "#8B5CF6" },
    { num: "03", icon: "💻", title: "Website Development", desc: "Creative websites with responsive design.", color: "#06B6D4" },
    { num: "04", icon: "📍", title: "Indoor/Outdoor Marketing", desc: "Strategic advertising placements.", color: "#10B981" },
    { num: "05", icon: "✍️", title: "Creative Content Writing", desc: "Well-researched, plagiarism-free content.", color: "#F59E0B" },
    { num: "06", icon: "📸", title: "Photography/Videography", desc: "High-end professional visuals.", color: "#EC4899" }
  ],

  whyUs: [
    { icon: "🎯", title: "Comprehensive Services", desc: "Wide range of digital marketing services." },
    { icon: "💡", title: "Expertise", desc: "Years of experience with latest trends." },
    { icon: "🎨", title: "Personalized Solutions", desc: "Tailored approach for your needs." },
    { icon: "💰", title: "Competitive Pricing", desc: "Transparent and affordable pricing." },
    { icon: "🤝", title: "Exceptional Service", desc: "Always available for support." },
    { icon: "📈", title: "Results Driven", desc: "Focus on ROI and growth." }
  ],

  workflow: [
    { num: "01", title: "Requirements", icon: "📋" },
    { num: "02", title: "Plan", icon: "🎯" },
    { num: "03", title: "Design", icon: "🎨" },
    { num: "04", title: "Develop", icon: "💻" },
    { num: "05", title: "Release", icon: "🚀" },
    { num: "06", title: "Track & Monitor", icon: "📊" }
  ],

portfolio: [
  { 
    title: "Chaitanya Group", 
    category: "Branding", 
    color: "#FF6B3A",
    image: projectImage6// Add your image path
  },
  { 
    title: "Anant Resources", 
    category: "Website", 
    color: "#8B5CF6",
    image: projectImage2
  },
  { 
    title: "Blue Sant", 
    category: "Digital Marketing", 
    color: "#06B6D4",
    image: projectImage3
  },
  { 
    title: "Social Campaign", 
    category: "SMM", 
    color: "#10B981",
    image: projectImage4
  },
  { 
    title: "E-commerce Project", 
    category: "Web Dev", 
    color: "#F59E0B",
    image:projectImage5
  },
  { 
    title: "Brand Identity", 
    category: "Design", 
    color: "#EC4899",
    image: projectImage1
  }
],
 testimonials: [
  { 
    quote: "Social Spark Provides Amazing Services. Best Digital Marketing company!", 
    name: "Sourabh Virani", 
    company: "K S Real Value", 
    avatar: "SV",
    image: sourabhImage
  },
  { 
    quote: "Best agency in town. Staff is very supportive and friendly.", 
    name: "Pritesh Patel", 
    company: "P2 Hardware Solutions", 
    avatar: "PP",
    image: priteshImage
  },
  { 
    quote: "Your team rocks. Developer team supported us very well.", 
    name: "Sumandeep Kaur", 
    company: "Fashion Designer", 
    avatar: "SK",
    image: sumandeepImage
  },
  { 
    quote: "Highly recommend for professional work and transparency.", 
    name: "Abhimanyu Gupta", 
    company: "Anant Resources", 
    avatar: "AG",
    image:abhimanyuImage
  },
  { 
    quote: "Exceptional work, great team, excellent management!", 
    name: "Samruddhi Tayal", 
    company: "Samast Design Studio", 
    avatar: "ST",
    image: samruddhiImage
  },
  { 
    quote: "Best Digital marketing in Raipur. Fast and on-time delivery.", 
    name: "Drishti Jain", 
    company: "Bluedoor Interiors", 
    avatar: "DJ",
    image: drishtiImage
  }
],

  faqs: [
    { question: "What services do you offer?", answer: "Digital Marketing, Social Media Marketing, Website Development, Content Writing, Photography and Videography." },
    { question: "How can digital marketing benefit my business?", answer: "Increase online visibility, reach targeted customers, generate leads, and boost sales." },
    { question: "What sets you apart from others?", answer: "25+ experts, 360-degree solutions, transparent pricing, and proven track record." },
    { question: "How long to see results?", answer: "SEO takes 3-6 months, paid ads show results within weeks." }
  ]
};