// components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'Performance Marketing',
      subtitle: 'ROI-Driven Campaigns',
      description: 'Google Ads, Meta Ads, LinkedIn Ads - हम सिर्फ ads नहीं, conversions deliver करते हैं',
      metrics: ['500+ Campaigns', '3x Average ROAS', '₹15Cr+ Ad Spend'],
      icon: '🚀',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Social Media Marketing',
      subtitle: 'Brand Building & Engagement',
      description: 'Content that converts, strategies that stick, aur engagement jo viral jaaye',
      metrics: ['1M+ Reach/Month', '50+ Brands', '7x Engagement Rate'],
      icon: '📱',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'SEO & Content',
      subtitle: 'Organic Growth Engine',
      description: 'First page pe aana hai? We make Google fall in love with your brand',
      metrics: ['200+ Keywords Ranked', '400% Traffic Growth', '90+ DA Websites'],
      icon: '📈',
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Video Production',
      subtitle: 'Stories That Sell',
      description: 'Reels, ads, brand films - content jo dil aur algorithm dono jeete',
      metrics: ['500+ Videos', '10M+ Views', 'Viral Campaigns'],
      icon: '🎬',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Services That <span className="text-orange-500">Deliver</span>
          </h2>
          <p className="text-xl text-gray-600">
            No fluff, no false promises. Sirf results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <motion.div 
                        className="text-5xl mb-4"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-orange-500 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {service.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <p className="text-sm font-bold text-gray-800">{metric}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;