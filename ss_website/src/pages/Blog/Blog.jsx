// src/pages/Blog.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { 
  getBlogs, 
  getCategories, 
  getImageUrl, 
  formatDate 
} from "../API/Service";

const Blog = () => {
  // ✅ All blogs from API (fetched once)
  const [allBlogs, setAllBlogs] = useState([]);
  const [categories, setCategories] = useState([{ name: "All", blog_count: 0 }]);
  const [loading, setLoading] = useState(true);
  
  // ✅ Frontend filtering states
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ AOS Initialize
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 70,
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  // ✅ Fetch Data ONCE on mount
  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const [blogsRes, categoriesRes] = await Promise.all([
        getBlogs({ page_size: 100 }), // Get all blogs at once
        getCategories()
      ]);

      console.log("📝 Blogs fetched:", blogsRes);
      console.log("📁 Categories fetched:", categoriesRes);

      if (blogsRes.success && blogsRes.data) {
        const blogsData = Array.isArray(blogsRes.data) ? blogsRes.data : [];
        setAllBlogs(blogsData);
      }

      if (categoriesRes.success && categoriesRes.data) {
        const catsData = Array.isArray(categoriesRes.data) ? categoriesRes.data : [];
        const totalBlogs = blogsRes.count || blogsRes.data?.length || 0;
        
        setCategories([
          { id: 0, name: "All", slug: "all", blog_count: totalBlogs },
          ...catsData
        ]);
      }
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ FRONTEND FILTERING - No API calls
  const featuredPost = allBlogs.find(blog => blog.is_featured) || null;

  const filteredPosts = allBlogs.filter(post => {
    // Exclude featured post from grid
    const isNotFeatured = !featuredPost || post.id !== featuredPost.id;
    
    // Category filter
    const matchesCategory = activeCategory === "All" || 
                           post.category_name?.toLowerCase() === activeCategory.toLowerCase();
    
    // Search filter
    const matchesSearch = searchQuery === "" || 
                         post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    
    return isNotFeatured && matchesCategory && matchesSearch;
  });

  // Recent posts (first 5 from all blogs)
  const recentPosts = allBlogs.slice(0, 5);

  // ✅ Loading State
  if (loading) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <h1 className="blog-hero-title">Blog</h1>
              <p className="blog-hero-subtitle">Loading...</p>
            </div>
          </div>
        </section>
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading blogs...</p>
        </div>
        <style>{`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 40vh;
            gap: 1rem;
          }
          .loader {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #6366f1;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="blog-page">
      
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <h1 
              className="blog-hero-title"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Blog
            </h1>
            <p 
              className="blog-hero-subtitle"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Insights, tips, and updates from our team
            </p>
            <div 
              className="breadcrumb"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Link to="/">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: FEATURED POST ==================== */}
      {featuredPost && (
        <section className="featured-section">
          <div className="container">
            <Link 
              to={`/blog/${featuredPost.slug}`} 
              className="featured-post"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="featured-image">
                <img 
                  src={getImageUrl(featuredPost.image)} 
                  alt={featuredPost.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x500?text=No+Image';
                  }}
                />
              </div>
              <div className="featured-content">
                <span className="post-category">{featuredPost.category_name || 'Uncategorized'}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                
                <div className="post-meta">
                  <div className="post-author">
                    <div className="author-avatar">
                      {featuredPost.author_avatar ? (
                        <img 
                          src={getImageUrl(featuredPost.author_avatar)} 
                          alt={featuredPost.author_name}
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="avatar-placeholder">
                          {(featuredPost.author_name || 'A').charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="author-info">
                      <span className="author-name">{featuredPost.author_name || 'Admin'}</span>
                    </div>
                  </div>
                  <span className="post-date">{formatDate(featuredPost.published_date)}</span>
                </div>
                
                <span className="btn-primary" style={{ marginTop: '8px', display: 'inline-flex' }}>
                  Read Article
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ==================== SECTION 3: CATEGORY FILTER ==================== */}
      <section className="filter-section">
        <div className="container">
          <div 
            className="filter-tabs"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {categories.map((cat, index) => (
              <button
                key={cat.id || index}
                className={`filter-tab ${activeCategory === cat.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.name)}
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4 & 5: BLOG GRID & SIDEBAR ==================== */}
      <section className="blog-content-section">
        <div className="container">
          <div className="blog-layout">
            
            {/* Blog Grid */}
            <div className="blog-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.slug}`} 
                    className="blog-card"
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 100}
                  >
                    <div className="blog-card-image">
                      <img 
                        src={getImageUrl(post.image)} 
                        alt={post.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                        }}
                      />
                      <span className="blog-card-category">{post.category_name || 'Uncategorized'}</span>
                    </div>
                    <div className="blog-card-content">
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      
                      <div className="blog-card-meta">
                        <div className="blog-card-author">
                          <div className="blog-card-author-avatar">
                            {post.author_avatar ? (
                              <img 
                                src={getImageUrl(post.author_avatar)} 
                                alt={post.author_name}
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                            ) : (
                              <div className="avatar-placeholder-small">
                                {(post.author_name || 'A').charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <span className="blog-card-author-name">{post.author_name || 'Admin'}</span>
                        </div>
                        <span className="blog-card-date">{formatDate(post.published_date)}</span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="no-posts-message" data-aos="fade-up">
                  <h3>No posts found</h3>
                  <p>Try selecting a different category or search term.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              
              {/* Search Widget - ✅ FRONTEND SEARCH */}
              <div 
                className="sidebar-widget"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>Search</h3>
                <div className="search-form">
                  <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="button" className="search-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories Widget */}
              <div 
                className="sidebar-widget"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h3>Categories</h3>
                <div className="category-list">
                  {categories.map((cat, index) => (
                    <a 
                      key={cat.id || index} 
                      href="#" 
                      className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(cat.name);
                      }}
                    >
                      <span>{cat.name}</span>
                      <span className="category-count">{cat.blog_count || 0}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div 
                className="sidebar-widget"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h3>Recent Posts</h3>
                <div className="recent-posts-list">
                  {recentPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="recent-post-item">
                      <div className="recent-post-thumb">
                        <img 
                          src={getImageUrl(post.image)} 
                          alt={post.title}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/60x60?text=No+Image';
                          }}
                        />
                      </div>
                      <div className="recent-post-info">
                        <h4 className="recent-post-title">{post.title}</h4>
                        <span className="recent-post-date">{formatDate(post.published_date)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

             
              {/* Social Links Widget */}
              <div 
                className="sidebar-widget"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <h3>Follow Us</h3>
                <div className="social-links-grid">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;