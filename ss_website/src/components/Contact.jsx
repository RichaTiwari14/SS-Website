// components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Let's Create
              <span className="block text-orange-500">Something Amazing</span>
              Together
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              Ready to transform your digital presence? Let's discuss how we can help you dominate your market.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us at</p>
                  <p className="text-lg font-semibold">hello@socialsparkindia.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                  📱
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us at</p>
                  <p className="text-lg font-semibold">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-400">Visit us at</p>
                  <p className="text-lg font-semibold">Mumbai | Delhi | Bangalore</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {['LinkedIn', 'Instagram', 'Twitter', 'YouTube'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6">Get Your Free Strategy Session</h3>
            
            <form className="space-y-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-400"
                whileFocus={{ scale: 1.02 }}
              >
                <option value="">Monthly Marketing Budget</option>
                <option value="< ₹50K">Less than ₹50K</option>
                <option value="₹50K - ₹2L">₹50K - ₹2L</option>
                <option value="₹2L - ₹5L">₹2L - ₹5L</option>
                <option value="₹5L+">₹5L+</option>
              </motion.select>

              <motion.textarea
                name="message"
                placeholder="Tell us about your goals..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl shadow-xl"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(251, 146, 60, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Now →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;