// src/services/blogService.js
// import API from "../API/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL||"http://127.0.0.1:8000/";
// src/API/Service.js
import API, { PublicAPI } from "./api";  // ← PublicAPI import karo

// ============================================
// ✅ PUBLIC FUNCTIONS - No Auth Required
// ============================================

// ✅ GET ALL BLOGS - PUBLIC
export const getBlogs = async (params = {}) => {
  try {
    const response = await PublicAPI.get("blogs/", { params }); // ← PublicAPI
    const data = response.data;
    
    if (Array.isArray(data)) {
      return {
        success: true,
        data: data,
        count: data.length,
        next: null,
        previous: null,
      };
    }
    
    return {
      success: true,
      data: data.results || data,
      count: data.count || 0,
      next: data.next || null,
      previous: data.previous || null,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error.response?.data || error.message);
    return { success: false, data: [], count: 0 };
  }
};

// ✅ GET SINGLE BLOG BY SLUG - PUBLIC
export const getBlogBySlug = async (slug) => {
  try {
    const response = await PublicAPI.get(`blogs/slug/${slug}/`); // ← PublicAPI
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching blog:", error.response?.data || error.message);
    return { success: false, data: null };
  }
};

// ✅ GET CATEGORIES - PUBLIC
export const getCategories = async () => {
  try {
    const response = await PublicAPI.get("categories/"); // ← PublicAPI
    const data = response.data;
    return {
      success: true,
      data: Array.isArray(data) ? data : (data.results || [])
    };
  } catch (error) {
    console.error("Error fetching categories:", error.response?.data || error.message);
    return { success: false, data: [] };
  }
};

// ✅ GET TAGS - PUBLIC
export const getTags = async () => {
  try {
    const response = await PublicAPI.get("tags/"); // ← PublicAPI
    const data = response.data;
    return {
      success: true,
      data: Array.isArray(data) ? data : (data.results || [])
    };
  } catch (error) {
    console.error("Error fetching tags:", error.response?.data || error.message);
    return { success: false, data: [] };
  }
};

// ============================================
// 🔐 ADMIN FUNCTIONS - Auth Required
// ============================================

// Dashboard ke liye (ye default API use karega with auth)
export const getAdminBlogs = async () => {
  try {
    const response = await API.get("blogs/"); // ← Private API with auth
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, data: [] };
  }
};

// ✅ IMAGE URL HELPER
export const getImageUrl = (imagePath) => {
  if (!imagePath) return 'https://via.placeholder.com/400x250?text=No+Image';
  if (imagePath.startsWith('http')) return imagePath;
  
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
  return `${baseUrl}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};

// ✅ DATE FORMAT HELPER
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
// ==================== AUTHENTICATED ENDPOINTS ====================

// ✅ CREATE BLOG - AUTH REQUIRED
export const createBlog = async (formData) => {
  try {
    const response = await API.post("blogs/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error creating blog:", error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data || "Failed to create blog" 
    };
  }
};

// ✅ UPDATE BLOG - AUTH REQUIRED
export const updateBlog = async (blogId, formData) => {
  try {
    const response = await API.put(`blogs/${blogId}/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error updating blog:", error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data || "Failed to update blog" 
    };
  }
};

// ✅ DELETE BLOG - AUTH REQUIRED
export const deleteBlog = async (blogId) => {
  try {
    await API.delete(`blogs/${blogId}/`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data || "Failed to delete blog" 
    };
  }
};
// ✅ Format Date (Dec 22, 2024)
// export const formatDate = (dateString) => {
//   if (!dateString) return "";
//   try {
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   } catch (error) {
//     return dateString;
//   }
// };

// // ✅ Get Full Image URL
// export const getImageUrl = (imagePath) => {
//   if (!imagePath) {
//     return "https://via.placeholder.com/800x500?text=No+Image";
//   }
//   if (imagePath.startsWith('http')) {
//     return imagePath;
//   }
  
//   const baseUrl = BASE_URL.replace(/\/$/, '');
//   const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
//   return `${baseUrl}${path}`;
// };


// ✅ LOGIN USER
export const loginUser = async (email, password) => {
  try {
    const response = await API.post("api/login/", {
      email,
      password,
    });

    if (response.data.access) {
      localStorage.setItem("access", JSON.stringify(response.data.access));
      localStorage.setItem("refresh", JSON.stringify(response.data.refresh));
      
      return {
        success: true,
        data: response.data,
        message: "Login successful",
      };
    }
    
    return {
      success: false,
      message: "Invalid response from server",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: error.response?.data?.detail || "Invalid email or password",
    };
  }
};

// ✅ LOGOUT USER
export const logoutUser = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  return {
    success: true,
    message: "Logged out successfully",
  };
};

// ✅ CHECK IF USER IS LOGGED IN
export const isAuthenticated = () => {
  const token = localStorage.getItem("access");
  return !!token;
};

// ✅ GET ACCESS TOKEN
export const getAccessToken = () => {
  const token = localStorage.getItem("access");
  if (token) {
    try {
      return JSON.parse(token);
    } catch {
      return token;
    }
  }
  return null;
};
// ✅ REFRESH TOKEN
export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem("refresh");
    if (!refresh) {
      return { success: false, message: "No refresh token" };
    }

    const response = await API.post("api/token/refresh/", {
      refresh: JSON.parse(refresh),
    });

    if (response.data.access) {
      localStorage.setItem("access", JSON.stringify(response.data.access));
      return {
        success: true,
        data: response.data,
      };
    }

    return { success: false, message: "Failed to refresh token" };
  } catch (error) {
    console.error("Token refresh error:", error);
    // Clear tokens if refresh fails
    logoutUser();
    return {
      success: false,
      message: "Session expired. Please login again.",
    };
  }
};

// ✅ GET CURRENT USER (if you have user endpoint)
export const getCurrentUser = async () => {
  try {
    const response = await API.get("api/user/");
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Get user error:", error);
    return {
      success: false,
      message: "Failed to get user data",
    };
  }
};