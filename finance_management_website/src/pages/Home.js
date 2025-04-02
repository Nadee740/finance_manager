import React, { useState } from 'react';
import '../styles/Home.css'
import { Navbar } from '../components/Navbar';

function HomePage() {


  return (
    <div className="app">
      {/* Navbar */}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>The perfect solution for Managing Your Finance</p>
          <div className="hero-buttons">
            <button className="cta-button" onClick={()=>{}}>Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img className="image-placeholder" src="https://thumbs.dreamstime.com/b/finance-business-concept-invesment-graph-coins-rows-investment-growth-table-blue-color-tone-111488763.jpg"></img>
        </div> 
        
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Our platform works seamlessly across all devices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Platform</h3>
            <p>Your data is protected with the latest security measures</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast loading times and smooth interactions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful UI With Charts</h3>
            <p>Carefully crafted interfaces for the best user experience</p>
          </div>
        </div>
      </section>

<section id="articles" className="articles">
  <h2>Latest Articles</h2>
  <div className="articles-grid">
    <div className="article-card">
      <div className="article-image">
        <img src="https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg" alt="Article image" />
      </div>
      <div className="article-content">
        <h3>Getting Started with Our Platform</h3>
        <p className="article-date">March 25, 2025</p>
        <p>Learn the basics and get up to speed with all our core features in minutes.</p>
        <a href="#" className="read-more">Read More →</a>
      </div>
    </div>
    <div className="article-card">
      <div className="article-image">
        <img src="https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg" alt="Article image" />
      </div>
      <div className="article-content">
        <h3>Advanced Techniques for Power Users</h3>
        <p className="article-date">March 18, 2025</p>
        <p>Discover advanced strategies to maximize productivity with our platform.</p>
        <a href="#" className="read-more">Read More →</a>
      </div>
    </div>
    <div className="article-card">
      <div className="article-image">
        <img src="https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg" alt="Article image" />
      </div>
      <div className="article-content">
        <h3>New Features: Q1 2025 Updates</h3>
        <p className="article-date">March 10, 2025</p>
        <p>Check out all the new capabilities we've added in our latest update.</p>
        <a href="#" className="read-more">Read More →</a>
      </div>
    </div>
  </div>
</section>

<section id="how-to-use" className="how-to-use">
  <h2>How To Use</h2>
  <div className="steps-container">
    <div className="step">
      <div className="step-number">1</div>
      <div className="step-content">
        <h3>Create an Account</h3>
        <p>Sign up for free and set up your profile in less than 2 minutes.</p>
      </div>
    </div>
    <div className="step">
      <div className="step-number">2</div>
      <div className="step-content">
        <h3>Upload Your Expense</h3>
        <p>In an Excel Sheet upload your Monthly Expense.</p>
      </div>
    </div>
    <div className="step">
      <div className="step-number">3</div>
      <div className="step-content">
        <h3>Get Your Report</h3>
        <p>Your Report Will Be Generated For The Expense</p>
      </div>
    </div>
    <div className="step">
      <div className="step-number">4</div>
      <div className="step-content">
        <h3>Analysis</h3>
        <p>Know Your Spending Habits And Trends</p>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="user-avatar"></div>
            <p>"This platform has completely transformed how we handle our digital presence."</p>
            <h4>Jane Smith</h4>
            <p className="user-title">CEO, TechStart</p>
          </div>
          <div className="testimonial-card">
            <div className="user-avatar"></div>
            <p>"I've tried many solutions before, but this one stands out with its simplicity and power."</p>
            <h4>John Davis</h4>
            <p className="user-title">Product Manager</p>
          </div>
          <div className="testimonial-card">
            <div className="user-avatar"></div>
            <p>"The customer support is excellent and the platform just works as promised."</p>
            <h4>Sarah Johnson</h4>
            <p className="user-title">Designer</p>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>📍 City Info</p>
            <p>📞 (+91 123456789</p>
            <p>✉️ abc@gmail.com</p>
            {/* <div className="social-icons">
              <div className="icon">FB</div>
              <div className="icon">TW</div>
              <div className="icon">IG</div>
              <div className="icon">LI</div>
            </div> */}
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Finance <span>Manager</span></h2>
            <p>The perfect platform for managing your financial expenses</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Finance Manager. All rights reserved.</p>
        </div>
      </footer>
      
    </div>
  );
}

export default HomePage;