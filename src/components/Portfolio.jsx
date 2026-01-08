// components/PortfolioSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'performance', 'social', 'branding', 'video'];
  
  const projects = [
    {
      id: 1,
      title: 'Zomato Campaign',
      category: 'performance',
      result: '3.5x ROAS',
      image: '🍔',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 2,
      title: 'Myntra Fashion Week',
      category: 'social',
      result: '2M+ Impressions',
      image: '👗',
      color: 'from-pink-400 to-purple-600'
    },
    {
      id: 3,
      title: 'CRED Brand Film',
      category: 'video',
      result: '5M+ Views',
      image: '💳',
      color: 'from-black to-gray-800'
    },
    {
      id: 4,
      title: 'Swiggy Instamart',
      category: 'performance',
      result: '45% CAC Reduction',
      image: '📦',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 5,
      title: 'boAt Lifestyle',
      category: 'branding',
      result: 'Brand Value 2x',
      image: '🎧',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 6,
      title: 'PharmEasy Health',
      category: 'social',
      result: '8x Engagement',
      image: '💊',
      color: 'from-teal-400 to-green-600'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full filter blur-3xl"
          animate={{
            x: ['-50%', '-45%', '-50%'],
            y: ['-50%', '-45%', '-50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            Work That <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-xl text-gray-400">
            Results speak louder than presentations
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <motion.div 
                      className="text-8xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {project.image}
                    </motion.div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-orange-400 font-semibold text-lg">{project.result}</p>
                      <motion.div
                        className="mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <div className="h-1 bg-orange-500 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-full text-lg shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(251, 146, 60, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Case Studies →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;