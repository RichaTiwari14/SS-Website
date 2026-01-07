import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUsers, FaProjectDiagram, FaChartLine, FaTrophy } from 'react-icons/fa'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: FaUsers, number: 500, suffix: '+', label: 'Happy Clients', color: '#FF6B35' },
    { icon: FaProjectDiagram, number: 1000, suffix: '+', label: 'Projects Completed', color: '#FCBF49' },
    { icon: FaChartLine, number: 50, suffix: 'M+', label: 'Total Reach', color: '#10B981' },
    { icon: FaTrophy, number: 25, suffix: '+', label: 'Awards Won', color: '#8B5CF6' },
  ]

  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (isInView) {
        let start = 0
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(timer)
      }
    }, [isInView, end])

    return <span>{count}{suffix}</span>
  }

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon className="text-3xl" style={{ color: stat.color }} />
                </motion.div>

                {/* Number */}
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </h3>

                {/* Label */}
                <p className="text-white/60 font-medium">{stat.label}</p>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats