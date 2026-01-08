import { motion } from "framer-motion";

// Service Card Component with Brand Colors
const ServiceCard = ({ icon, title, description, features, index }) => {
  const cardThemes = [
    { accent: "#FF6A3D", bg: "bg-[#FF6A3D]/5", border: "border-[#FF6A3D]/20", iconBg: "bg-[#FF6A3D]" },
    { accent: "#0052CC", bg: "bg-[#0052CC]/5", border: "border-[#0052CC]/20", iconBg: "bg-[#0052CC]" },
    { accent: "#6A00F3", bg: "bg-[#6A00F3]/5", border: "border-[#6A00F3]/20", iconBg: "bg-[#6A00F3]" },
    { accent: "#1B7A6C", bg: "bg-[#1B7A6C]/5", border: "border-[#1B7A6C]/20", iconBg: "bg-[#1B7A6C]" },
    { accent: "#F4AD1F", bg: "bg-[#F4AD1F]/5", border: "border-[#F4AD1F]/20", iconBg: "bg-[#F4AD1F]" },
    { accent: "#D71329", bg: "bg-[#D71329]/5", border: "border-[#D71329]/20", iconBg: "bg-[#D71329]" },
  ];

  const theme = cardThemes[index % cardThemes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative ${theme.bg} border-2 ${theme.border} hover:border-[${theme.accent}] rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500`}
    >
      {/* Colored Icon */}
      <div className={`w-14 h-14 ${theme.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-2xl text-white">{icon}</span>
      </div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-bold text-[#0B1C33] mb-3"
        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#555555] text-sm md:text-base mb-5 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features && (
        <ul className="space-y-2 mb-5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-[#555555] text-sm">
              <span className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: theme.accent }} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Arrow */}
      <div className="flex items-center gap-2 font-medium text-sm cursor-pointer" style={{ color: theme.accent }}>
        <span>Learn More</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};

// Services Section
const ServicesSection = () => {
const services = [
    {
      icon: "🎨",
      title: "Branding & Strategy",
      description: "We help define brand positioning, tone of voice, and creative direction so your brand communicates with purpose and stays consistent across all touchpoints."
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "We manage platforms with a clear content direction, strong visuals, and messaging that connects with the right audience."
    },
    {
      icon: "💻",
      title: "Website Development",
      description: "We design and develop structured, responsive, and user-friendly websites that clearly reflect your brand and work smoothly across devices."
    },
    {
      icon: "🔍",
      title: "Search Engine Optimization (SEO)",
      description: "We strengthen your website's search presence through structured optimization, relevant content, and technical improvements that help your brand get discovered organically."
    },
    {
      icon: "🤝",
      title: "Influencer Marketing",
      description: "We help brands collaborate with influencers who align with their values and audience, ensuring authentic visibility and meaningful engagement."
    },
    {
      icon: "📸",
      title: "Photography & Videography",
      description: "We create high-quality photos and videos that capture your brand's personality and support consistent communication across digital platforms."
    }
  ];

  return (
    <section id="services" className="relative z-10 bg-gradient-to-b from-white to-[#F8F9FA] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#FF6A3D] font-medium text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2
            className="text-3xl md:text-5xl font-black text-[#0B1C33] mb-4"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Aapka <span className="text-[#FF6A3D]">Brand Grow</span> Karne Ke Liye
            <br />
            Sab Kuch Hai Yahan
          </h2>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Complete digital marketing solutions tailored for the Indian market
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;