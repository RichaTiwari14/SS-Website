import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const HeroSection = () => {
  const containerRef = useRef(null)
  
  const { scrollY } = useScroll()
  
  // Scroll range
  const scrollStart = 0
  const scrollEnd = 500
  
  // Premium spring config for buttery smooth animation
  const springConfig = { stiffness: 80, damping: 25, restDelta: 0.001 }
  
  // ===== TITLE TRANSFORMATIONS =====
  
  // Scale: 1 -> 0.18 (big title to small header logo)
  const titleScale = useTransform(scrollY, [scrollStart, scrollEnd], [1, 0.18])
  
  // Y Position: center of screen -> top header position
  const titleY = useTransform(scrollY, [scrollStart, scrollEnd], ['0vh', '-42vh'])
  
  // X Position: center -> left side
  const titleX = useTransform(scrollY, [scrollStart, scrollEnd], ['0vw', '-38vw'])
  
  // Title layout change (vertical to horizontal feel)
  const sparkIndiaOpacity = useTransform(scrollY, [scrollEnd * 0.7, scrollEnd], [1, 1])
  
  // Smooth springs
  const smoothScale = useSpring(titleScale, springConfig)
  const smoothY = useSpring(titleY, springConfig)
  const smoothX = useSpring(titleX, springConfig)
  
  // ===== HEADER BACKGROUND =====
  const headerBgOpacity = useTransform(scrollY, [scrollEnd * 0.8, scrollEnd], [0, 1])
  const smoothHeaderBg = useSpring(headerBgOpacity, springConfig)
  
  // ===== NAV ITEMS =====
  const navOpacity = useTransform(scrollY, [scrollEnd * 0.7, scrollEnd], [0, 1])
  const navX = useTransform(scrollY, [scrollEnd * 0.7, scrollEnd], [50, 0])
  const smoothNavOpacity = useSpring(navOpacity, springConfig)
  const smoothNavX = useSpring(navX, springConfig)
  
  // ===== HERO CONTENT =====
  const heroOpacity = useTransform(scrollY, [scrollEnd * 0.5, scrollEnd], [0, 1])
  const heroY = useTransform(scrollY, [scrollEnd * 0.5, scrollEnd], [100, 0])
  const smoothHeroOpacity = useSpring(heroOpacity, springConfig)
  const smoothHeroY = useSpring(heroY, springConfig)
  
  // ===== SCROLL INDICATOR =====
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0])

  const navItems = ['About', 'Services', 'Portfolio', 'Insights', 'Contact']

  return (
    <>
      {/* ========== FIXED HEADER BACKGROUND ========== */}
      <motion.div
        style={{ opacity: smoothHeaderBg }}
        className="fixed top-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-b border-gray-100 z-40 pointer-events-none"
      />

      {/* ========== NAVIGATION (Right Side) ========== */}
      <motion.div
        style={{ 
          opacity: smoothNavOpacity,
          x: smoothNavX 
        }}
        className="fixed top-0 right-0 h-24 z-50 flex items-center px-6 lg:px-12"
      >
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-dark-600 hover:text-dark-900 font-medium text-sm tracking-wide transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 bg-dark-900 hover:bg-dark-800 text-white px-6 py-3 rounded-full font-semibold text-sm ml-8 transition-all shadow-lg shadow-dark-900/20"
        >
          <span>Let's Talk</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </motion.div>

      {/* ========== TRANSFORMING TITLE ========== */}
      <motion.div
        style={{
          scale: smoothScale,
          y: smoothY,
          x: smoothX,
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
      >
        <div className="flex flex-col items-center lg:items-start">
          {/* SOCIAL - Always biggest */}
          <motion.span 
            className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-black text-dark-900 leading-[0.85] tracking-tighter"
          >
            SOCIAL
          </motion.span>
          
          {/* SPARK INDIA - Below, transforms to smaller on scroll */}
          <div className="flex items-baseline gap-[0.5vw]">
            <motion.span 
              className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-black leading-[0.85] tracking-tighter bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600 bg-clip-text text-transparent"
            >
              SPARK
            </motion.span>
            <motion.span 
              className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold text-dark-400 leading-[0.85] tracking-tight"
            >
              INDIA
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* ========== HERO SECTION ========== */}
      <section ref={containerRef} className="relative min-h-[300vh]">
        
        {/* ===== Initial Screen - Background for Big Title ===== */}
        <div className="h-screen flex items-center justify-center sticky top-0 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} 
            />
          </div>

          {/* Animated Background Orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-500/[0.03] blur-[100px]"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-orange-400/[0.04] blur-[120px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 text-dark-400"
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-2.5 bg-primary-500 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== Hero Content - Reveals after title moves to header ===== */}
        <motion.div 
          style={{
            opacity: smoothHeroOpacity,
            y: smoothHeroY,
          }}
          className="min-h-screen flex items-center relative bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* ===== Left Content ===== */}
              <div className="order-2 lg:order-1">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-5 py-2.5 mb-8"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                  </span>
                  <span className="text-primary-700 font-semibold text-sm">Premium Digital Marketing Agency</span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-[1.1] mb-8"
                >
                  <span className="block mb-2">Sab Apne Aap Ko</span>
                  <span className="block text-primary-500 mb-2">Best Agency</span>
                  <span className="block">Kehte Hain.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-3xl font-semibold text-dark-700 mb-8"
                >
                  Hum <span className="text-primary-600 relative">
                    Results
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span> Dikhate Hain.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-dark-500 leading-relaxed mb-10 max-w-xl"
                >
                  We don't just run campaigns. We build growth engines that transform 
                  ambitious brands into market leaders. <strong className="text-dark-700">500+ brands trust us.</strong>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center justify-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-5 rounded-2xl font-semibold text-lg shadow-xl shadow-primary-500/25 transition-all"
                  >
                    <span>Schedule Free Strategy Call</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: '#0A0A0A', color: '#fff' }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center justify-center gap-3 bg-white border-2 border-dark-900 text-dark-900 px-8 py-5 rounded-2xl font-semibold text-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-dark-900 group-hover:bg-white flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-white group-hover:text-dark-900 ml-0.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span>Watch Our Story</span>
                  </motion.button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pt-10 border-t border-gray-100"
                >
                  <p className="text-xs text-dark-400 mb-5 font-semibold uppercase tracking-[0.2em]">
                    Trusted by India's Best
                  </p>
                  <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                    {['TATA', 'Flipkart', 'Zomato', 'Swiggy', 'PhonePe'].map((brand, index) => (
                      <motion.span
                        key={brand}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.35 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ opacity: 0.8, scale: 1.05 }}
                        className="text-xl font-bold text-dark-900 cursor-default transition-all"
                      >
                        {brand}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* ===== Right Content - 3D Character ===== */}
              <div className="order-1 lg:order-2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 80 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Main Character */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <img 
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-working-on-laptop-5691680-4743108.png"
                      alt="3D Character"
                      className="w-full max-w-lg mx-auto"
                      style={{ filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.15))' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = `
                          <div style="width: 350px; height: 350px; margin: 0 auto; border-radius: 50%; background: linear-gradient(135deg, #F97316, #EA580C); display: flex; align-items: center; justify-content: center; font-size: 150px;">🚀</div>
                        `
                      }}
                    />
                    
                    {/* Floating Cards */}
                    <motion.div
                      animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-8 -left-8"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-green-500/30">
                            📈
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Growth</p>
                            <p className="text-xl font-bold text-dark-900">+340%</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute bottom-20 -right-4"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-xl shadow-lg shadow-primary-500/30">
                            🎯
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Leads</p>
                            <p className="text-xl font-bold text-dark-900">50K+</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute top-1/2 -right-12"
                    >
                      <div className="bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl shadow-2xl p-4 text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">⚡</span>
                          <span className="font-bold text-lg">10x ROI</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      className="absolute bottom-0 left-12"
                    >
                      <div className="bg-dark-900 rounded-2xl shadow-2xl p-4 text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">💰</span>
                          <div>
                            <p className="text-[10px] text-gray-400">Revenue</p>
                            <p className="font-bold">₹100Cr+</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Background Glow */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-100 via-orange-50 to-yellow-50 blur-3xl opacity-80" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '500+', label: 'Brands', icon: '🏢' },
                  { value: '₹100Cr+', label: 'Revenue', icon: '💰' },
                  { value: '50M+', label: 'Reach', icon: '👥' },
                  { value: '15+', label: 'Awards', icon: '🏆' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <span className="text-3xl mb-2 block">{stat.icon}</span>
                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default HeroSection