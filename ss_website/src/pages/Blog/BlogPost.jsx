// src/pages/BlogPost.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogPost.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { 
  getBlogBySlug, 
  getBlogs,
  getImageUrl, 
  formatDate 
} from "../API/Service";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  // AOS Initialize
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

  // Fetch Post Data
  useEffect(() => {
    fetchPostData();
  }, [slug]);

  const fetchPostData = async () => {
    setLoading(true);
    setNotFound(false);
    
    try {
      // Fetch single post by slug
      const postRes = await getBlogBySlug(slug);
      
      console.log("📝 Post Response:", postRes);

      if (postRes.success && postRes.data) {
        setPost(postRes.data);
        
        // Fetch related posts (same category, exclude current)
        const allBlogsRes = await getBlogs({ page_size: 100 });
        if (allBlogsRes.success && allBlogsRes.data) {
          const related = allBlogsRes.data
            .filter(blog => 
              blog.slug !== slug && 
              blog.category_name === postRes.data.category_name
            )
            .slice(0, 3);
          
          // If not enough related posts in same category, get recent ones
          if (related.length < 3) {
            const moreRelated = allBlogsRes.data
              .filter(blog => blog.slug !== slug && !related.find(r => r.id === blog.id))
              .slice(0, 3 - related.length);
            setRelatedPosts([...related, ...moreRelated]);
          } else {
            setRelatedPosts(related);
          }
        }
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("❌ Error fetching post:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
      AOS.refresh();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post?.title || "");

  // Loading State
  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading article...</p>
        </div>
        <style>{`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
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

  // 404 State
  if (notFound) {
    return (
      <div className="blog-post-page">
        <div className="not-found-section">
          <div className="container">
            <div className="not-found-content">
              <h1>404</h1>
              <h2>Blog Post Not Found</h2>
              <p>The article you're looking for doesn't exist or has been moved.</p>
              <Link to="/blog" className="btn-primary">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  // Get author details
  const author = post.author_details || {
    name: post.author_name || "Admin",
    avatar: post.author_avatar || null,
    title: "",
    bio: "",
    linkedin: "",
    twitter: ""
  };

  // Get tags
  const tags = post.tags_names || [];

  return (
    <div className="blog-post-page">
      
      {/* ==================== SECTION 1: POST HEADER ==================== */}
      <header className="post-header">
        <div className="container">
          <div className="post-header-content">
            {/* Breadcrumb */}
            <div 
              className="breadcrumb"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Link to="/">Home</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <Link to="/blog">Blog</Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="current">{post.title}</span>
            </div>

            {/* Category */}
            <span 
              className="post-category-tag"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {post.category_name || 'Uncategorized'}
            </span>

            {/* Title */}
            <h1 
              className="post-title"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {post.title}
            </h1>

            {/* Meta - Author Left, Date Right */}
            <div 
              className="post-meta-header"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="post-author-header">
                <div className="author-avatar-header">
                  {author.avatar ? (
                    <img 
                      src={getImageUrl(author.avatar)} 
                      alt={author.name}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <div className="avatar-placeholder">
                      {(author.name || 'A').charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="author-info-header">
                  <span className="author-name-header">{author.name}</span>
                </div>
              </div>
              <span className="post-date-header">{formatDate(post.published_date)}</span>
            </div>

          
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div 
        className="post-featured-image"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img 
          src={getImageUrl(post.image)} 
          alt={post.title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x600?text=No+Image';
          }}
        />
      </div>

      {/* ==================== SECTION 2: POST CONTENT ==================== */}
      <section className="post-content-section">
        <div className="container">
          <div 
            className="post-content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
        <article 
  className="post-body"
  dangerouslySetInnerHTML={{ __html: post.html_content || post.content }}
/>

            {/* ==================== SECTION 3: POST TAGS ==================== */}
            {tags.length > 0 && (
              <div 
                className="post-tags-section"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="post-tags">
                  <span className="post-tags-label">Tags:</span>
                  {tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/blog?tag=${tag}`} 
                      className="post-tag"
                      data-aos="fade-up"
                      data-aos-delay={150 + (index * 50)}
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: AUTHOR BIO ==================== */}
      {/* {author.bio && (
        <section className="author-bio-section">
          <div className="container">
            <div className="content-container">
              <div 
                className="author-bio-card"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="author-bio-avatar">
                  {author.avatar ? (
                    <img 
                      src={getImageUrl(author.avatar)} 
                      alt={author.name}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : (
                    <div className="avatar-placeholder-large">
                      {(author.name || 'A').charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="author-bio-content">
                  <h3>{author.name}</h3>
                  {author.title && <span className="author-bio-title">{author.title}</span>}
                  <p className="author-bio-text">{author.bio}</p>
                  <div className="author-social-links">
                    {author.linkedin && (
                      <a 
                        href={author.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="author-social-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {author.twitter && (
                      <a 
                        href={author.twitter} 
                        target="_blank" 
                        rel="noreferrer"
                        className="author-social-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )} */}

      {/* ==================== SECTION 5: SOCIAL SHARE ==================== */}
      {/* <section className="social-share-section">
        <div className="container">
          <div className="content-container">
            <div className="social-share-content">
              <h3 data-aos="fade-right" data-aos-delay="100">Share This Article</h3>
              <div className="share-buttons">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="share-button facebook"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="share-button twitter"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="share-button linkedin"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="share-button whatsapp"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <button 
                  className="share-button copy-link"
                  onClick={copyToClipboard}
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                  {copied ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ==================== SECTION 6: RELATED POSTS ==================== */}
      {relatedPosts.length > 0 && (
        <section className="related-posts-section">
          <div className="container">
            <div className="related-posts-header">
              <span 
                className="section-tag"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                📚 Keep Reading
              </span>
              <h2 
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Related Articles
              </h2>
            </div>

            <div className="related-posts-grid">
              {relatedPosts.map((related, index) => (
                <Link 
                  key={related.id} 
                  to={`/blog/${related.slug}`} 
                  className="related-post-card"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={100 + (index * 100)}
                >
                  <div className="related-post-image">
                    <img 
                      src={getImageUrl(related.image)} 
                      alt={related.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
                      }}
                    />
                  </div>
                  <div className="related-post-content">
                    <span className="related-post-category">{related.category_name || 'Uncategorized'}</span>
                    <h3 className="related-post-title">{related.title}</h3>
                    <span className="related-post-date">{formatDate(related.published_date)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== SECTION 7: NEWSLETTER CTA ==================== */}
      <section className="newsletter-cta-section">
        <div className="container">
          <div className="newsletter-cta-content">
            <h2 
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Enjoyed This Article?
            </h2>
            <p 
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Subscribe to get more tips and insights delivered to your inbox weekly.
            </p>
            <form 
              className="newsletter-cta-form"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <input 
                type="email" 
                className="newsletter-cta-input"
                placeholder="Enter your email address"
                required
              />
              <button type="submit" className="newsletter-cta-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FLOATING SHARE BAR ==================== */}
      <div className="floating-share-bar">
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noreferrer"
          className="floating-share-btn facebook"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a 
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
          target="_blank"
          rel="noreferrer"
          className="floating-share-btn twitter"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a 
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
          target="_blank"
          rel="noreferrer"
          className="floating-share-btn linkedin"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a 
          href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
          target="_blank"
          rel="noreferrer"
          className="floating-share-btn whatsapp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <button 
          className="floating-share-btn copy"
          onClick={copyToClipboard}
          title={copied ? "Copied!" : "Copy Link"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
        </button>
      </div>

    </div>
  );
};

export default BlogPost;