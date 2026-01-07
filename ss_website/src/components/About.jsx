import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaAward, FaUsers, FaGlobe } from 'react-icons/fa'

const About = () => {
  const features = [
    'Data-Driven Strategies',
    'Creative Excellence',
    '24/7 Support',
    'Transparent Reporting',
    'ROI Focused',
    'Industry Expertise',
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Graphics */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-64 h-64 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl"
                  />
                </div>

                {/* Team Preview Cards */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-10 left-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <FaUsers className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-bold">50+</p>
                      <p className="text-white/60 text-sm">Team Members</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-10 right-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center">
                      <FaAward className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-bold">25+</p>
                      <p className="text-white/60 text-sm">Awards Won</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-1/2 right-5 transform -translate-y-1/2 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <FaGlobe className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Pan India</p>
                      <p className="text-white/60 text-sm">Presence</p>
                    </div>
                  </div>
                </motion.div>

                {/* Central Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent p-1"
                  >
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                      <span className="text-4xl font-black gradient-text">SS</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-lg">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              We Are <span className="gradient-text">Social Spark India</span>
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Founded with a vision to transform how Indian businesses approach digital marketing, 
              Social Spark India has grown into one of the most trusted digital marketing agencies in the country.
            </p>
            <p className="text-white/70 text-lg mb-8">
              Our team of creative strategists, designers, and digital experts work together 
              to create campaigns that don't just reach audiences – they inspire action and drive results.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              Know More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About