// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css";
import API from "../API/api";
import logoImage from "../../assets/Social_Spark_Logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("blogs");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedCards, setExpandedCards] = useState({}); // For card expansion
  
  // Data
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Edit Mode
  const [editMode, setEditMode] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);

  // Blog Form
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [],
    published_date: "",
    is_featured: false,
    is_published: true,
    image: null,
  });

  // Category Form
  const [categoryForm, setCategoryForm] = useState({ name: "", slug: "" });

  // Tag Form
  const [tagForm, setTagForm] = useState({ name: "", slug: "" });

  // Toggle card expansion
  const toggleCardExpansion = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Fetch on tab change
  useEffect(() => {
    if (activeTab === "blogs") fetchBlogs();
    if (activeTab === "categories") fetchCategories();
    if (activeTab === "tags") fetchTags();
    if (activeTab === "add-blog") {
      fetchCategories();
      fetchTags();
    }
  }, [activeTab]);

  // ========== FETCH FUNCTIONS ==========
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await API.get("blogs/");
      setBlogs(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const fetchCategories = async () => {
    try {
      const res = await API.get("categories/");
      setCategories(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTags = async () => {
    try {
      const res = await API.get("tags/");
      setTags(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
    }
  };

  // ========== LOGOUT ==========
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  // ========== MESSAGE ==========
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  // ========== BLOG HANDLERS ==========
  const handleBlogChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setBlogForm({ ...blogForm, [name]: checked });
    } else if (type === "file") {
      setBlogForm({ ...blogForm, [name]: files[0] });
    } else {
      setBlogForm({ ...blogForm, [name]: value });
    }
  };

  const handleTagSelect = (tagId) => {
    const current = blogForm.tags || [];
    if (current.includes(tagId)) {
      setBlogForm({ ...blogForm, tags: current.filter(id => id !== tagId) });
    } else {
      setBlogForm({ ...blogForm, tags: [...current, tagId] });
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", blogForm.title);
      formData.append("excerpt", blogForm.excerpt);
      formData.append("content", blogForm.content);
      formData.append("category", blogForm.category);
      formData.append("published_date", blogForm.published_date);
      formData.append("is_featured", blogForm.is_featured);
      formData.append("is_published", blogForm.is_published);
      
      if (blogForm.image && typeof blogForm.image !== 'string') {
        formData.append("image", blogForm.image);
      }
      
      if (blogForm.tags) {
        blogForm.tags.forEach(tagId => formData.append("tags", tagId));
      }

      if (editMode) {
        await API.put(`blogs/${editingBlogId}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showMessage("success", "Blog updated successfully!");
      } else {
        await API.post("blogs/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showMessage("success", "Blog created successfully!");
      }

      resetForm();
      setActiveTab("blogs");
      fetchBlogs();
    } catch (err) {
      showMessage("error", editMode ? "Failed to update blog" : "Failed to create blog");
      console.error(err);
    }
    setLoading(false);
  };

  const handleEditBlog = async (id) => {
    try {
      const res = await API.get(`blogs/${id}/`);
      const blog = res.data;

      setBlogForm({
        title: blog.title || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        category: blog.category || "",
        tags: blog.tags || [],
        published_date: blog.published_date || "",
        is_featured: blog.is_featured || false,
        is_published: blog.is_published || true,
        image: blog.image || null,
      });

      setEditMode(true);
      setEditingBlogId(id);
      setActiveTab("add-blog");
      
      await fetchCategories();
      await fetchTags();
    } catch (err) {
      showMessage("error", "Failed to fetch blog details");
      console.error(err);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    
    setLoading(true);
    try {
      await API.delete(`blogs/${id}/`);
      showMessage("success", "Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      showMessage("error", "Failed to delete blog");
      console.error(err);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setBlogForm({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: [],
      published_date: "",
      is_featured: false,
      is_published: true,
      image: null,
    });
    setEditMode(false);
    setEditingBlogId(null);
  };

  const handleCancelEdit = () => {
    resetForm();
    setActiveTab("blogs");
  };

  // ========== CATEGORY HANDLERS ==========
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      setCategoryForm({ name: value, slug });
    } else {
      setCategoryForm({ ...categoryForm, [name]: value });
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("categories/", categoryForm);
      showMessage("success", "Category created!");
      setCategoryForm({ name: "", slug: "" });
      fetchCategories();
    } catch (err) {
      showMessage("error", "Failed to create category");
    }
    setLoading(false);
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await API.delete(`categories/${id}/`);
      showMessage("success", "Category deleted!");
      fetchCategories();
    } catch (err) {
      showMessage("error", "Failed to delete category");
    }
  };

  // ========== TAG HANDLERS ==========
  const handleTagChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      setTagForm({ name: value, slug });
    } else {
      setTagForm({ ...tagForm, [name]: value });
    }
  };

  const handleTagSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("tags/", tagForm);
      showMessage("success", "Tag created!");
      setTagForm({ name: "", slug: "" });
      fetchTags();
    } catch (err) {
      showMessage("error", "Failed to create tag");
    }
    setLoading(false);
  };

  const handleDeleteTag = async (id) => {
    if (!window.confirm("Delete this tag?")) return;
    try {
      await API.delete(`tags/${id}/`);
      showMessage("success", "Tag deleted!");
      fetchTags();
    } catch (err) {
      showMessage("error", "Failed to delete tag");
    }
  };

  // Menu
  const menuItems = [
    { id: "blogs", icon: "📝", label: "All Blogs" },
    { id: "add-blog", icon: "➕", label: editMode ? "Edit Blog" : "Add Blog" },
    { id: "categories", icon: "📁", label: "Categories" },
    { id: "tags", icon: "🏷️", label: "Tags" },
  ];

  return (
    <div className="dashboard">
      {/* Mobile Header */}
      <div className="mobile-header">
        <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div className="mobile-logo">
          <img src={logoImage} alt="Social Spark Logo" />
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Toast */}
      {message.text && (
        <div className={`toast ${message.type}`}>
          {message.type === "success" ? "✅" : "❌"} {message.text}
        </div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          {sidebarOpen && (
            <div className="sidebar-logo-1">
              <img src={logoImage} alt="Social Spark Logo" />
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="toggle-btn">
            {sidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
              onClick={() => {
                if (item.id === "add-blog" && editMode) {
                } else if (item.id === "add-blog") {
                  resetForm();
                }
                setActiveTab(item.id);
                if (window.innerWidth <= 768) {
                  setSidebarOpen(false);
                }
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="nav-item" onClick={() => window.innerWidth <= 768 && setSidebarOpen(false)}>
            <span className="nav-icon">🌐</span>
            {sidebarOpen && <span>View Website</span>}
          </Link>
          <button className="nav-item logout" onClick={handleLogout}>
            <span className="nav-icon">🚪</span>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>
            {activeTab === "blogs" && "📝 All Blogs"}
            {activeTab === "add-blog" && (editMode ? "✏️ Edit Blog" : "➕ Add New Blog")}
            {activeTab === "categories" && "📁 Categories"}
            {activeTab === "tags" && "🏷️ Tags"}
          </h1>
        </header>

        <div className="dashboard-content">
          
          {/* ========== BLOGS TAB ========== */}
          {activeTab === "blogs" && (
            <>
              {loading ? (
                <div className="loading-state">
                  <div className="spinner-large"></div>
                  <p>Loading blogs...</p>
                </div>
              ) : blogs.length > 0 ? (
                <>
                  {/* Desktop Table */}
                  <div className="table-wrapper desktop-only">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogs.map((blog) => (
                          <tr key={blog.id}>
                            <td>
                              <div className="blog-title-cell">
                                {blog.is_featured && <span className="featured-star" title="Featured">⭐</span>}
                                <strong>{blog.title}</strong>
                              </div>
                            </td>
                            <td>
                              <span className="category-badge">{blog.category_name || "Uncategorized"}</span>
                            </td>
                            <td className="date-cell">{blog.published_date}</td>
                            <td>
                              <span className="status-badge published">
                                <svg className="status-icon" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Published
                              </span>
                            </td>
                            <td>
                              <div className="action-buttons">
                                <button 
                                  onClick={() => handleEditBlog(blog.id)} 
                                  className="btn-action edit" 
                                  title="Edit Blog"
                                >
                                  <svg viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                  </svg>
                                </button>
                                <button 
                                  onClick={() => handleDeleteBlog(blog.id)} 
                                  className="btn-action delete" 
                                  title="Delete Blog"
                                >
                                  <svg viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="mobile-cards mobile-only">
                    {blogs.map((blog) => (
                      <div key={blog.id} className={`blog-card ${expandedCards[blog.id] ? 'expanded' : ''}`}>
                        {/* Card Header - Always Visible */}
                        <div 
                          className="card-header" 
                          onClick={() => toggleCardExpansion(blog.id)}
                        >
                          <div className="card-header-content">
                            <div className="card-title-row">
                              {blog.is_featured && <span className="featured-star">⭐</span>}
                              <h3 className="card-title">{blog.title}</h3>
                            </div>
                            <span className="category-badge-small">{blog.category_name || "Uncategorized"}</span>
                          </div>
                          <div className="card-expand-icon">
                            <svg 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2"
                              className={expandedCards[blog.id] ? 'rotated' : ''}
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        {/* Card Body - Expandable */}
                        <div className="card-body">
                          <div className="card-details">
                            <div className="card-detail-row">
                              <span className="detail-label">📅 Date:</span>
                              <span className="detail-value">{blog.published_date}</span>
                            </div>
                            <div className="card-detail-row">
                              <span className="detail-label">📊 Status:</span>
                              <span className="status-badge-small published">
                                <svg className="status-icon-small" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Published
                              </span>
                            </div>
                            {blog.excerpt && (
                              <div className="card-detail-row excerpt-row">
                                <span className="detail-label">📝 Excerpt:</span>
                                <p className="detail-excerpt">{blog.excerpt}</p>
                              </div>
                            )}
                          </div>

                          <div className="card-actions">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditBlog(blog.id);
                              }} 
                              className="card-btn edit"
                            >
                              <svg viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                              Edit
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteBlog(blog.id);
                              }} 
                              className="card-btn delete"
                            >
                              <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="empty">
                  <div className="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p>No blogs yet</p>
                  <button className="btn-primary" onClick={() => {
                    resetForm();
                    setActiveTab("add-blog");
                  }}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Create First Blog
                  </button>
                </div>
              )}
            </>
          )}

          {/* ========== ADD/EDIT BLOG TAB ========== */}
          {activeTab === "add-blog" && (
            <form className="blog-form" onSubmit={handleBlogSubmit}>
              {editMode && (
                <div className="edit-mode-banner">
                  <span>✏️ Editing Blog</span>
                  <button type="button" className="btn-cancel" onClick={handleCancelEdit}>
                    Cancel Edit
                  </button>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={blogForm.title}
                    onChange={handleBlogChange}
                    placeholder="Enter blog title"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Excerpt *</label>
                  <textarea
                    name="excerpt"
                    value={blogForm.excerpt}
                    onChange={handleBlogChange}
                    rows="3"
                    placeholder="Brief description..."
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Content *</label>
                  <textarea
                    name="content"
                    value={blogForm.content}
                    onChange={handleBlogChange}
                    rows="12"
                    placeholder="Write your content here..."
                    required
                  />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label>Category *</label>
                  <select name="category" value={blogForm.category} onChange={handleBlogChange} required>
                    <option value="">Select Category</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Published Date *</label>
                  <input type="date" name="published_date" value={blogForm.published_date} onChange={handleBlogChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Tags</label>
                  <div className="tags-select">
                    {tags.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        className={blogForm.tags?.includes(t.id) ? "selected" : ""}
                        onClick={() => handleTagSelect(t.id)}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label>Image</label>
                  <input type="file" name="image" onChange={handleBlogChange} accept="image/*" />
                  {editMode && blogForm.image && typeof blogForm.image === 'string' && (
                    <small className="current-image">Current: {blogForm.image.split('/').pop()}</small>
                  )}
                </div>
                <div className="form-group checkboxes">
                  <label>
                    <input type="checkbox" name="is_featured" checked={blogForm.is_featured} onChange={handleBlogChange} />
                    <span>Featured</span>
                  </label>
                  <label>
                    <input type="checkbox" name="is_published" checked={blogForm.is_published} onChange={handleBlogChange} />
                    <span>Published</span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? (editMode ? "Updating..." : "Creating...") : (editMode ? "Update Blog" : "Create Blog")}
                </button>
                {editMode && (
                  <button type="button" className="btn-secondary" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          )}

          {/* ========== CATEGORIES TAB ========== */}
          {activeTab === "categories" && (
            <>
              <form className="inline-form" onSubmit={handleCategorySubmit}>
                <input name="name" value={categoryForm.name} onChange={handleCategoryChange} placeholder="Category Name" required />
                <input name="slug" value={categoryForm.slug} onChange={handleCategoryChange} placeholder="category-slug" required />
                <button type="submit">{loading ? "Adding..." : "Add Category"}</button>
              </form>

              {categories.length > 0 ? (
                <>
                  {/* Desktop Table */}
                  <div className="table-wrapper desktop-only">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Slug</th>
                          <th>Blogs</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((c) => (
                          <tr key={c.id}>
                            <td><strong>{c.name}</strong></td>
                            <td><code>{c.slug}</code></td>
                            <td><span className="count-badge">{c.blog_count || 0}</span></td>
                            <td>
                              <button onClick={() => handleDeleteCategory(c.id)} className="btn-action delete" title="Delete">
                                🗑️
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="mobile-cards mobile-only">
                    {categories.map((c) => (
                      <div key={c.id} className="category-card">
                        <div className="category-card-content">
                          <h3>{c.name}</h3>
                          <code>{c.slug}</code>
                          <span className="count-badge">{c.blog_count || 0} blogs</span>
                        </div>
                        <button onClick={() => handleDeleteCategory(c.id)} className="card-btn-icon delete">
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="empty">
                  <div className="empty-icon">📁</div>
                  <p>No categories yet</p>
                </div>
              )}
            </>
          )}

          {/* ========== TAGS TAB ========== */}
          {activeTab === "tags" && (
            <>
              <form className="inline-form" onSubmit={handleTagSubmit}>
                <input name="name" value={tagForm.name} onChange={handleTagChange} placeholder="Tag Name" required />
                <input name="slug" value={tagForm.slug} onChange={handleTagChange} placeholder="tag-slug" required />
                <button type="submit">{loading ? "Adding..." : "Add Tag"}</button>
              </form>

              {tags.length > 0 ? (
                <div className="tags-grid">
                  {tags.map((t) => (
                    <div key={t.id} className="tag-card">
                      <div className="tag-info">
                        <strong>{t.name}</strong>
                        <span>{t.slug}</span>
                      </div>
                      <button onClick={() => handleDeleteTag(t.id)} className="tag-delete" title="Delete">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <div className="empty-icon">🏷️</div>
                  <p>No tags yet</p>
                </div>
              )}
            </>
          )}

        </div>
      </main>
    </div>
  );
};

export default Dashboard;