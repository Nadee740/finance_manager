import React, { useState } from 'react';
import '../styles/BlogPage.css';
import { Link } from 'react-router-dom';

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Financial Tips', 'Budgeting', 'Investments', 'Savings'];
  
  const featuredPost = {
    title: "10 Essential Financial Habits for a Secure Future",
    category: "Financial Tips",
    date: "March 30, 2025",
    image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
    excerpt: "Discover the key financial habits that can transform your relationship with money and set you up for long-term financial success. From automated savings to investment strategies, these habits will help you build wealth consistently.",
    author: "Sarah Johnson",
    authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
  };
  
  const blogPosts = [
    {
      id: 1,
      title: "How to Create a Budget That Actually Works",
      category: "Budgeting",
      date: "March 25, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      excerpt: "Learn the step-by-step process to create a personalized budget that fits your lifestyle and financial goals.",
      author: "Michael Chen",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
    },
    {
      id: 2,
      title: "Understanding Index Funds for Beginners",
      category: "Investments",
      date: "March 22, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      excerpt: "Index funds offer a simple way to diversify your investment portfolio. Here's everything you need to know to get started.",
      author: "Jessica Williams",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
    },
    {
      id: 3,
      title: "Emergency Funds: How Much Should You Save?",
      category: "Savings",
      date: "March 18, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      excerpt: "Discover the right size for your emergency fund based on your personal circumstances and financial obligations.",
      author: "David Thompson",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
    },
    {
      id: 4,
      title: "5 Ways to Reduce Monthly Expenses",
      category: "Financial Tips",
      date: "March 15, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      excerpt: "Simple strategies to trim your monthly spending without sacrificing your quality of life.",
      author: "Amanda Rodriguez",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
    },
    {
      id: 5,
      title: "The 50/30/20 Rule for Financial Planning",
      category: "Budgeting",
      date: "March 10, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      excerpt: "How to divide your income among needs, wants, and savings for a balanced financial life.",
      author: "Robert Kim",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
    }
  ];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="app">
      {/* Navbar would be rendered here */}
      
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Finance Manager Blog</h1>
          <p>Tips, strategies, and insights to help you manage your finances better</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post">
        <div className="featured-post-container">
          <div className="featured-post-image">
            <img src={featuredPost.image} alt="Featured post" />
            <div className="featured-tag">Featured</div>
          </div>
          <div className="featured-post-content">
            <div className="post-meta">
              <span className="post-category">{featuredPost.category}</span>
              <span className="post-date">{featuredPost.date}</span>
            </div>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="post-author">
              <img src={featuredPost.authorImage} alt={featuredPost.author} className="author-image" />
              <span>{featuredPost.author}</span>
            </div>
            <Link to={"/blog/" + "1"} className="read-more-btn">Read Full Article</Link>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="blog-categories">
        <div className="categories-container">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <img src={post.authorImage} alt={post.author} />
                    <span>{post.author}</span>
                  </div>
                  <Link to={"/blog/" + post.id} className="blog-read-more">Read More →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="blog-subscribe">
        <div className="subscribe-container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to receive the latest financial tips and articles</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer would be rendered here */}
    </div>
  );
}

export default BlogPage;