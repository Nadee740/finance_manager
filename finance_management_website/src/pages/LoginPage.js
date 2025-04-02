import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/authenticationpage.css';
import { baseUrl } from '../utils/baseurl';
import axios from 'axios';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/user/sign-in`, formData);
      console.log(data);
      localStorage.setItem("userid", data.id);
      window.location = "/"
    } catch (error) {
      alert("failed")
      console.error('Login error:', error.response?.data || error.message);
    };
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-image"></div>
          <div className="overlay"></div>
          <div className="auth-welcome">
            <h2>Welcome Back!</h2>
            <p>Log in to access your account and continue your journey with us.</p>
          </div>
        </div>
        
        <div className="auth-right">
          <div className="auth-header">
            <Link to="/" className="logo">
              Finance <span>Manager</span>
            </Link>
            <h1>Sign In</h1>
            <p>Please sign in to your account</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-group">
                <i className="input-icon">✉️</i>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              </div>
              <div className="input-group">
                <i className="input-icon">🔒</i>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Enter your password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group remember-me">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  name="rememberMe" 
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
            </div>
            
            <button type="submit" className="authentication-button">Sign In</button>
            
            <div className="auth-divider">
              <span>Or</span>
            </div>

            <div className="auth-footer">
              <p>Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;