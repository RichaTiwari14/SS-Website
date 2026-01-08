// ClientLogos.jsx
import React from "react";
import { motion } from "framer-motion";

const ClientLogos = () => {
  const clientLogos = [
    { name: "Anantresources", logo: "/clients/Anantresources.jpg.webp" },
    { name: "blue-sant", logo: "/clients/blue-sant.jpg.webp" },
    { name: "civil-india-infra", logo: "/clients/civil-india-infra.jpg.webp" },
    { name: "jai-durga-oil", logo: "/clients/jai-durga-oil.jpg.webp" },
    { name: "lucky-metal-framing", logo: "/clients/lucky-metal-framing.jpg.webp" },
    { name: "teology", logo: "/clients/teology.jpg.webp" },
  ];

  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative z-10 bg-white pt-12 md:pt-16 pb-6 md:pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-[#FF6A3D] font-medium text-sm uppercase tracking-wider mb-3">
            Trusted By
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0B1C33] mb-3"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            Brands Jo <span className="text-[#FF6A3D]">Humpe Trust</span> Karte Hain
          </h2>
          <p className="text-[#555555] text-base max-w-xl mx-auto">
            From startups to established businesses, we've helped brands grow digitally
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="overflow-hidden py-2 md:py-4">
            <motion.div
              className="flex items-center gap-10 md:gap-14 lg:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="bg-gray-50 hover:bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FF6A3D]/20">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 md:h-16 lg:h-20 w-auto min-w-[100px] md:min-w-[120px] object-contain 
                                 grayscale group-hover:grayscale-0 
                                 opacity-70 group-hover:opacity-100 
                                 transition-all duration-500"
                      onError={(e) => {
                        console.error(`Failed to load: ${client.logo}`);
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;