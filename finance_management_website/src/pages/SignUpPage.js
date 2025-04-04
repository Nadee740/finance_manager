import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/authenticationpage.css';
import { Navbar } from '../components/Navbar';
import { baseUrl } from '../utils/baseurl';
import axios from 'axios';

function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData?.password && formData?.password?.length <= 5) {
      alert("Password Lenght Should Be Greater Than 5");
      return;
    }
    try {
      const { data } = await axios.post(`${baseUrl}/user/sign-up`, formData);
      window.localStorage.setItem("userid" , data.id);
      window.location = "/"
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    };
  };

  return (
    <div className="auth-page">

      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-image signup-image"></div>
          <div className="overlay"></div>
          <div className="auth-welcome">
            <h2>Join Our Community</h2>
            <p>Create an account to access all features and become part of our growing community.</p>
          </div>
        </div>
        
        <div className="auth-right">
          <div className="auth-header">
            <Link to="/" className="logo">
              Finance <span>Manager</span>
            </Link>
            <h1>Create Account</h1>
            <p>Please fill in the details to get started</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            {/* <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-group">
                <i className="input-icon">👤</i>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  placeholder="Enter your full name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div> */}
            
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
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <i className="input-icon">🔒</i>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Create a password" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="password-strength">
                <div className="strength-meter">
                  <div className="strength-level" style={{ width: `${formData.password.length * 10}%`, maxWidth: '100%' }}></div>
                </div>
                <span>Password strength: {formData.password.length < 4 ? 'Weak' : formData.password.length < 8 ? 'Medium' : 'Strong'}</span>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-group">
                <i className="input-icon">🔒</i>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  placeholder="Confirm your password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required 
                />
              </div>
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && 
                <div className="password-error">Passwords do not match</div>
              }
            </div>
            
            <div className="form-group remember-me">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  name="agreeTerms" 
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <span className="checkmark"></span>
                I agree to the <Link to="/terms" className="terms-link">Terms of Service</Link> and <Link to="/privacy" className="terms-link">Privacy Policy</Link>
              </label>
            </div>
            
            <button type="submit" className="authentication-button" disabled={!formData.agreeTerms || (formData.password !== formData.confirmPassword && formData.confirmPassword)}>Create Account</button>
            
            
            <div className="auth-footer">
              <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;