// components/TestimonialsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'TechStart India',
      role: 'Founder & CEO',
      content: 'Social Spark ne hamare startup ko 0 se 100 tak le jaane mein madad ki. Best decision ever!',
      rating: 5,
      growth: '+250% Revenue'
    },
    {
      name: 'Priya Patel',
      company: 'FashionForward',
      role: 'Marketing Head',
      content: 'Inki creativity aur data-driven approach ka combination is just unbeatable. Highly recommended!',
      rating: 5,
      growth: '5x Social Growth'
    },
    {
      name: 'Arjun Mehta',
      company: 'HealthPlus',
      role: 'Co-founder',
      content: 'ROI focused campaigns that actually work. Social Spark delivers what they promise.',
      rating: 5,
      growth: '3.8x ROAS'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Client <span className="text-orange-500">Love</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                {/* Quote Icon */}
                <motion.div
                  className="text-6xl text-orange-200 mb-4"
                  initial={{ rotate: -180, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  "
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-yellow-400 text-xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm font-medium text-orange-500">{testimonial.company}</p>
                    </div>
                    <motion.div
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {testimonial.growth}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;