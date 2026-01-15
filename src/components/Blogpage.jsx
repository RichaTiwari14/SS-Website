// BlogPage.jsx
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const BlogPage = () => {
  return (
    <div className="bg-[#0B1C33] min-h-screen overflow-hidden">
      <HeroSection />
      <FeaturedPosts />
      <InstagramReelsSection />
      <YouTubeVideosSection />
      <BlogGridSection />
      <NewsletterSection />
    </div>
  );
};

// ============================================
// 🔥 HERO SECTION
// ============================================
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] sm:min-h-[70vh] bg-[#0B1C33] overflow-hidden flex items-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#FF6A3D]/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#0052CC]/10 rounded-full blur-[150px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#FF6A3D]/10 border border-[#FF6A3D]/30 px-4 py-2 rounded-full mb-6"
        >
          <motion.span 
            className="w-2 h-2 bg-[#FF6A3D] rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider">
            Blog & Media
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Insights, Tips &
          <br />
          <span className="text-[#FF6A3D]">Digital Trends</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-[#DFDFDF] text-lg sm:text-xl max-w-2xl mx-auto mb-8"
        >
          Stay updated with the latest in digital marketing, social media strategies, 
          and business growth tips from our experts.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-8 sm:gap-12"
        >
          {[
            { icon: "📝", number: "50+", label: "Articles" },
            { icon: "🎬", number: "100+", label: "Videos" },
            { icon: "📸", number: "200+", label: "Reels" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl mb-1 block">{stat.icon}</span>
              <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// ⭐ FEATURED POSTS
// ============================================
const FeaturedPosts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredPosts = [
    {
      id: 1,
      title: "10 Social Media Trends You Can't Ignore in 2024",
      excerpt: "Discover the latest trends shaping social media marketing this year.",
      image: "/blog/featured-1.jpg",
      category: "Social Media",
      date: "Dec 15, 2024",
      readTime: "5 min",
      color: "#FF6A3D"
    },
    {
      id: 2,
      title: "How to Build a Strong Brand Identity Online",
      excerpt: "Step-by-step guide to creating a memorable brand presence.",
      image: "/blog/featured-2.jpg",
      category: "Branding",
      date: "Dec 10, 2024",
      readTime: "8 min",
      color: "#0052CC"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Instagram Marketing",
      excerpt: "Everything you need to know about growing on Instagram.",
      image: "/blog/featured-3.jpg",
      category: "Instagram",
      date: "Dec 5, 2024",
      readTime: "10 min",
      color: "#6A00F3"
    },
  ];

  return (
    <section ref={ref} className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 sm:mb-12"
        >
          <div>
            <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-2 block">
              Featured
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1C33]">
              Latest <span className="text-[#FF6A3D]">Articles</span>
            </h2>
          </div>
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0B1C33] hover:bg-[#FF6A3D] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div 
                className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5"
                style={{ backgroundColor: `${post.color}15` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: post.color }}
                  >
                    <span className="text-white text-2xl">📝</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold"
                  style={{ backgroundColor: post.color }}
                >
                  {post.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C33]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white font-semibold flex items-center gap-2">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 text-sm text-[#555] mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-[#555] rounded-full" />
                <span>{post.readTime} read</span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1C33] mb-2 group-hover:text-[#FF6A3D] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[#555] text-sm line-clamp-2">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// 📸 INSTAGRAM REELS SECTION
// ============================================
const InstagramReelsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeReel, setActiveReel] = useState(null);

  const reels = [
    { id: 1, title: "Social Media Tips", views: "125K", likes: "8.5K", thumbnail: "/reels/reel-1.jpg", embedUrl: "https://www.instagram.com/reel/XXXXX/embed" },
    { id: 2, title: "Content Strategy", views: "98K", likes: "6.2K", thumbnail: "/reels/reel-2.jpg", embedUrl: "https://www.instagram.com/reel/XXXXX/embed" },
    { id: 3, title: "Brand Building", views: "156K", likes: "10.1K", thumbnail: "/reels/reel-3.jpg", embedUrl: "https://www.instagram.com/reel/XXXXX/embed" },
    { id: 4, title: "Marketing Hacks", views: "89K", likes: "5.8K", thumbnail: "/reels/reel-4.jpg", embedUrl: "https://www.instagram.com/reel/XXXXX/embed" },
    { id: 5, title: "Growth Tips", views: "112K", likes: "7.3K", thumbnail: "/reels/reel-5.jpg", embedUrl: "https://www.instagram.com/reel/XXXXX/embed" },
    { id: 6, title: "SEO Secrets", views: "78K", likes: "4.9K", thumbnail: "/reels/reel-6.jpg", embedUrl: "https://www.instagram.com/reel/XXXXX/embed" },
  ];

  return (
    <section ref={ref} className="bg-[#0B1C33] py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E4405F]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#833AB4]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 sm:mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45] flex items-center justify-center">
                <span className="text-white text-lg">📸</span>
              </div>
              <span className="text-[#E4405F] text-sm font-semibold uppercase tracking-wider">
                Instagram Reels
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Watch Our <span className="text-[#E4405F]">Latest Reels</span>
            </h2>
          </div>
          <motion.a
            href="https://instagram.com/socialsparkindia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2"
          >
            Follow Us
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setActiveReel(reel)}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">🎬</span>
                </div>
              </div>

              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-6 h-6 text-[#E4405F] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </motion.div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1">{reel.title}</h4>
                <div className="flex items-center gap-3 text-white/70 text-xs">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                    </svg>
                    {reel.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    {reel.likes}
                  </span>
                </div>
              </div>

              {/* Reel Icon */}
              <div className="absolute top-3 right-3">
                <svg className="w-5 h-5 text-white drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reel Modal */}
        <AnimatePresence>
          {activeReel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReel(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveReel(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Embed Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45] flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-6xl mb-4 block">📸</span>
                    <h4 className="font-bold text-xl mb-2">{activeReel.title}</h4>
                    <p className="text-white/70 text-sm mb-4">Instagram Reel</p>
                    <a
                      href="https://instagram.com/socialsparkindia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#E4405F] px-6 py-3 rounded-full font-semibold"
                    >
                      Watch on Instagram
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ============================================
// 🎬 YOUTUBE VIDEOS SECTION
// ============================================
const YouTubeVideosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { 
      id: 1, 
      title: "Complete Digital Marketing Course 2024", 
      views: "250K",
      duration: "45:30",
      thumbnail: "/youtube/video-1.jpg",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    },
    { 
      id: 2, 
      title: "How to Grow Your Business on Social Media", 
      views: "180K",
      duration: "28:15",
      thumbnail: "/youtube/video-2.jpg",
      videoId: "dQw4w9WgXcQ"
    },
    { 
      id: 3, 
      title: "Instagram Algorithm Secrets Revealed", 
      views: "320K",
      duration: "35:42",
      thumbnail: "/youtube/video-3.jpg",
      videoId: "dQw4w9WgXcQ"
    },
    { 
      id: 4, 
      title: "Facebook Ads Complete Tutorial", 
      views: "145K",
      duration: "52:18",
      thumbnail: "/youtube/video-4.jpg",
      videoId: "dQw4w9WgXcQ"
    },
    { 
      id: 5, 
      title: "Content Creation Tips for Beginners", 
      views: "98K",
      duration: "22:45",
      thumbnail: "/youtube/video-5.jpg",
      videoId: "dQw4w9WgXcQ"
    },
    { 
      id: 6, 
      title: "SEO Masterclass - Rank #1 on Google", 
      views: "275K",
      duration: "1:05:30",
      thumbnail: "/youtube/video-6.jpg",
      videoId: "dQw4w9WgXcQ"
    },
  ];

  return (
    <section ref={ref} className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 sm:mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span className="text-[#FF0000] text-sm font-semibold uppercase tracking-wider">
                YouTube Channel
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1C33]">
              Watch Our <span className="text-[#FF0000]">Videos</span>
            </h2>
          </div>
          <motion.a
            href="https://youtube.com/@socialsparkindia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF0000] text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2"
          >
            Subscribe
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 18v-6l5 3-5 3zm12-9.5V19c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v3.5z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-[#0B1C33]">
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/20 to-[#0B1C33] flex items-center justify-center">
                  <span className="text-5xl">🎬</span>
                </div>

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.15 }}
                  >
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                  {video.duration}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <h3 className="font-bold text-[#0B1C33] text-base lg:text-lg mb-2 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                {video.title}
              </h3>
              <div className="flex items-center gap-3 text-[#555] text-sm">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {video.views} views
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* YouTube Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ============================================
// 📚 BLOG GRID SECTION
// ============================================
const BlogGridSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Social Media", "SEO", "Content", "Branding", "Marketing"];

  const posts = [
    { id: 1, title: "How to Create Viral Content", category: "Content", date: "Dec 12, 2024", readTime: "5 min", color: "#FF6A3D" },
    { id: 2, title: "SEO Tips for Beginners", category: "SEO", date: "Dec 10, 2024", readTime: "7 min", color: "#0052CC" },
    { id: 3, title: "Building Your Personal Brand", category: "Branding", date: "Dec 8, 2024", readTime: "6 min", color: "#6A00F3" },
    { id: 4, title: "Social Media Calendar Template", category: "Social Media", date: "Dec 5, 2024", readTime: "4 min", color: "#1B7A6C" },
    { id: 5, title: "Email Marketing Strategies", category: "Marketing", date: "Dec 3, 2024", readTime: "8 min", color: "#D71329" },
    { id: 6, title: "Instagram Hashtag Guide", category: "Social Media", date: "Dec 1, 2024", readTime: "5 min", color: "#E4405F" },
  ];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section ref={ref} className="bg-[#F8F9FA] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-[#FF6A3D] text-sm font-semibold uppercase tracking-wider mb-2 block">
            All Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1C33] mb-6">
            Explore Our <span className="text-[#FF6A3D]">Blog</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#FF6A3D] text-white shadow-lg shadow-[#FF6A3D]/30"
                    : "bg-white text-[#555] hover:bg-[#FF6A3D]/10 hover:text-[#FF6A3D]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                {/* Image */}
                <div 
                  className="aspect-[16/10] flex items-center justify-center"
                  style={{ backgroundColor: `${post.color}15` }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: post.color }}
                  >
                    <span className="text-white text-2xl">📝</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-sm text-[#555] mb-3">
                    <span 
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${post.color}15`, color: post.color }}
                    >
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#0B1C33] text-lg mb-2 group-hover:text-[#FF6A3D] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#555] text-sm">{post.date}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0B1C33] hover:bg-[#FF6A3D] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// 📧 NEWSLETTER SECTION
// ============================================
const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section ref={ref} className="bg-[#0B1C33] py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A3D]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.span 
            className="text-5xl sm:text-6xl mb-6 block"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            📬
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Subscribe to Our
            <br />
            <span className="text-[#FF6A3D]">Newsletter</span>
          </h2>

          <p className="text-[#DFDFDF] text-lg mb-8 max-w-xl mx-auto">
            Get the latest tips, trends, and insights delivered straight to your inbox. No spam, we promise!
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 border border-green-500/50 rounded-2xl p-6"
            >
              <span className="text-4xl mb-3 block">✅</span>
              <h4 className="text-white font-bold text-xl mb-2">You're Subscribed!</h4>
              <p className="text-white/70">Check your inbox for a confirmation email.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-[#FF6A3D] transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF6A3D] hover:bg-[#e55a30] text-white px-8 py-4 rounded-full font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          )}

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Free Forever
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> No Spam
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#FF6A3D]">✓</span> Unsubscribe Anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPage;