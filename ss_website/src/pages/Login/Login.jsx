import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import API from "../API/api";
import logoImage from "../../assets/Social_Spark_Logo_white.png";

const Welcome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await API.post("api/login/", { email, password });

      if (response.data.access) {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.detail || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="welcome-page">
      {/* Animated Background Blobs */}
      <div className="welcome-bg-blob welcome-blob-1"></div>
      <div className="welcome-bg-blob welcome-blob-2"></div>
      <div className="welcome-bg-blob welcome-blob-3"></div>

      <div className="welcome-container">
        {/* Glass Card */}
        <div className="welcome-card">
          {/* Logo */}
          <div className="welcome-logo-wrapper">
            <img 
              src={logoImage} 
              alt="Social Spark Logo" 
              className="welcome-logo-image"
            />
          </div>

          {/* Error Alert */}
          {error && (
            <div className="welcome-error">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form className="welcome-form" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="welcome-input-group">
              <label className="welcome-label">Email Address</label>
              <div className="welcome-input-wrapper">
                <span className="welcome-input-icon">📧</span>
                <input
                  type="email"
                  className="welcome-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="welcome-input-group">
              <label className="welcome-label">Password</label>
              <div className="welcome-input-wrapper">
                <span className="welcome-input-icon">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="welcome-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="welcome-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="welcome-button"
              disabled={loading}
            >
              {loading ? (
                <span className="welcome-button-loading">
                  <span className="welcome-spinner"></span>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="welcome-footer">
          <p className="welcome-footer-text">
            © 2024 Social Spark. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;