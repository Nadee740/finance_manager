import React, { useEffect, useState } from 'react';
import '../styles/BlogDetailPage.css';
import { useParams } from 'react-router-dom';

function BlogDetailPage() {
  // Sample blog post data - in a real app, you'd fetch this based on the URL/ID
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState(null);
  const blogs = [
    {
      id: 1,
      title: "How to Create a Budget That Actually Works",
      category: "Budgeting",
      date: "March 25, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      author: "Michael Chen",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      authorBio: "Certified financial planner passionate about helping people build realistic, effective budgets.",
      readTime: "7 min read",
      content: `
        <p>Creating a budget that truly works for your life isn’t about spreadsheets and stress. It's about creating a sustainable financial plan you can stick with.</p>
        <h2>1. Identify Your Income</h2>
        <p>Start by listing all your income sources. This gives you a clear understanding of how much money you have to work with.</p>
        <h2>2. Track Your Expenses</h2>
        <p>Keep a log of your spending for at least a month. This helps you understand your spending habits and where you can cut back.</p>
        <h2>3. Set Realistic Goals</h2>
        <p>Whether it’s saving for a house or paying off debt, goals keep your budget focused and purposeful.</p>
        <h2>4. Adjust and Improve</h2>
        <p>Budgets are living tools. Adjust them as your financial situation or goals change.</p>
      `,
      tags: ["Budgeting", "Money Management", "Personal Finance"],
      relatedPosts: [
        { id: 3, title: "Emergency Funds: How Much Should You Save?", category: "Savings", image: "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/factors-when-determining-how-much-to-save-for-emergencies.jpg" },
        { id: 5, title: "The 50/30/20 Rule for Financial Planning", category: "Budgeting", image: "/api/placeholder/100/70" },
        { id: 4, title: "5 Ways to Reduce Monthly Expenses", category: "Financial Tips", image: "/api/placeholder/100/70" }
      ]
    },
    {
      id: 2,
      title: "Understanding Index Funds for Beginners",
      category: "Investments",
      date: "March 22, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      author: "Jessica Williams",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      authorBio: "Investment strategist and educator focused on simplifying finance for beginners.",
      readTime: "6 min read",
      content: `
        <p>Index funds are a low-cost, passive way to invest in the stock market. They track major indices like the S&P 500.</p>
        <h2>Why Index Funds?</h2>
        <p>They offer diversification, low fees, and strong long-term performance without active management.</p>
        <h2>How to Get Started</h2>
        <p>Open an account with a brokerage, select an index fund, and start investing regularly. Stay consistent and think long term.</p>
      `,
      tags: ["Investing", "Index Funds", "Finance for Beginners"],
      relatedPosts: [
        { id: 1, title: "How to Create a Budget That Actually Works", category: "Budgeting", image: "/api/placeholder/100/70" },
        { id: 5, title: "The 50/30/20 Rule for Financial Planning", category: "Budgeting", image: "/api/placeholder/100/70" },
        { id: 4, title: "5 Ways to Reduce Monthly Expenses", category: "Financial Tips", image: "/api/placeholder/100/70" }
      ]
    },
    {
      id: 3,
      title: "Emergency Funds: How Much Should You Save?",
      category: "Savings",
      date: "March 18, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      author: "David Thompson",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      authorBio: "Personal finance coach helping individuals prepare for the unexpected.",
      readTime: "5 min read",
      content: `
        <p>An emergency fund is essential for financial stability. It acts as your safety net when life throws a curveball.</p>
        <h2>How Much Should You Save?</h2>
        <p>Most experts recommend 3–6 months of essential expenses. Base it on your job security, dependents, and lifestyle.</p>
        <h2>Where to Keep It?</h2>
        <p>Use a high-yield savings account that’s easily accessible but separate from daily spending.</p>
      `,
      tags: ["Emergency Funds", "Savings", "Financial Planning"],
      relatedPosts: [
        { id: 1, title: "How to Create a Budget That Actually Works", category: "Budgeting", image: "/api/placeholder/100/70" },
        { id: 4, title: "5 Ways to Reduce Monthly Expenses", category: "Financial Tips", image: "/api/placeholder/100/70" },
        { id: 5, title: "The 50/30/20 Rule for Financial Planning", category: "Budgeting", image: "/api/placeholder/100/70" }
      ]
    },
    {
      id: 4,
      title: "5 Ways to Reduce Monthly Expenses",
      category: "Financial Tips",
      date: "March 15, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      author: "Amanda Rodriguez",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      authorBio: "Lifestyle finance blogger sharing real-life tips for smarter spending.",
      readTime: "4 min read",
      content: `
        <p>Cutting costs doesn’t mean cutting happiness. These five practical tips help you save while still enjoying life.</p>
        <h2>1. Cancel Unused Subscriptions</h2>
        <p>Review your monthly charges and cancel services you don’t use.</p>
        <h2>2. Cook More at Home</h2>
        <p>Meal planning and cooking at home can drastically reduce your food expenses.</p>
        <h2>3. Use Energy Wisely</h2>
        <p>Lower utility bills by being energy-conscious—like turning off unused electronics.</p>
      `,
      tags: ["Saving Money", "Budgeting", "Frugal Living"],
      relatedPosts: [
        { id: 2, title: "Understanding Index Funds for Beginners", category: "Investments", image: "/api/placeholder/100/70" },
        { id: 3, title: "Emergency Funds: How Much Should You Save?", category: "Savings", image: "/api/placeholder/100/70" },
        { id: 5, title: "The 50/30/20 Rule for Financial Planning", category: "Budgeting", image: "/api/placeholder/100/70" }
      ]
    },
    {
      id: 5,
      title: "The 50/30/20 Rule for Financial Planning",
      category: "Budgeting",
      date: "March 10, 2025",
      image: "https://www.berlinsbi.com/uploads/sites/2/2021/12/7-very-good-reasons-to-do-master-s-in-finance.jpg",
      author: "Robert Kim",
      authorImage: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      authorBio: "Finance writer demystifying money rules for everyday people.",
      readTime: "5 min read",
      content: `
        <p>The 50/30/20 rule is a simple budgeting framework: 50% for needs, 30% for wants, and 20% for savings and debt.</p>
        <h2>Why It Works</h2>
        <p>It creates balance between responsibilities and lifestyle without overcomplicating finances.</p>
        <h2>How to Apply It</h2>
        <p>Track your monthly income and split it accordingly. Adjust as necessary for your personal situation.</p>
      `,
      tags: ["Budgeting", "Money Management", "Financial Tips"],
      relatedPosts: [
        { id: 1, title: "How to Create a Budget That Actually Works", category: "Budgeting", image: "/api/placeholder/100/70" },
        { id: 4, title: "5 Ways to Reduce Monthly Expenses", category: "Financial Tips", image: "/api/placeholder/100/70" },
        { id: 2, title: "Understanding Index Funds for Beginners", category: "Investments", image: "/api/placeholder/100/70" }
      ]
    }
  ];
  
  useEffect(() => {
    setBlogPost(blogs.find(blog => blog.id === parseInt(id)));
    setLoading(false);
  }, [])


  // Function to create markup from HTML string
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div >
    { loading? <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading expense report...</p>
    </div> : <>
          {/* Blog Hero Section */}
          <section className="blog-detail-hero">
        <div className="blog-detail-container">
          <div className="blog-detail-meta">
            <span className="blog-detail-category">{blogPost.category}</span>
            <span className="blog-detail-date">{blogPost.date}</span>
            <span className="blog-detail-read-time">{blogPost.readTime}</span>
          </div>
          <h1 className="blog-detail-title">{blogPost.title}</h1>
          <div className="blog-detail-author">
            <img src={blogPost.authorImage} alt={blogPost.author} className="author-image" />
            <div className="author-info">
              <span className="author-name">{blogPost.author}</span>
              <span className="author-bio">{blogPost.authorBio}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Detail Image */}
      <section className="blog-detail-image">
        <div className="blog-detail-container">
          <img src={blogPost.image} alt={blogPost.title} />
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-detail-content">
        <div className="blog-detail-container">
          <div className="blog-content">
            <div dangerouslySetInnerHTML={createMarkup(blogPost.content)} />
          </div>
          <div className="blog-detail-sidebar">
            <div className="sidebar-section author-sidebar">
              <img src={blogPost.authorImage} alt={blogPost.author} className="sidebar-author-image" />
              <h3>{blogPost.author}</h3>
              <p>{blogPost.authorBio}</p>
              <a href="/profile" className="view-profile-btn">View Profile</a>
            </div>
            
            <div className="sidebar-section">
              <h3>Tags</h3>
              <div className="tag-list">
                {blogPost.tags.map((tag, index) => (
                  <a key={index} href="#" className="tag">{tag}</a>
                ))}
              </div>
            </div>
            
            <div className="sidebar-section">
              <h3>Related Articles</h3>
              <div className="related-posts">
                {blogPost.relatedPosts.map((post) => (
                  <div key={post.id} className="related-post">
                    <img src={post.image} alt={post.title} />
                    <div className="related-post-info">
                      <span className="related-post-category">{post.category}</span>
                      <h4>{post.title}</h4>
                      <a href="#" className="read-more">Read →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="blog-share">
        <div className="blog-detail-container">
          <div className="share-content">
            <h3>Share this article</h3>
            <div className="share-buttons">
              <button className="share-btn facebook">Facebook</button>
              <button className="share-btn twitter">Twitter</button>
              <button className="share-btn linkedin">LinkedIn</button>
              <button className="share-btn copy">Copy Link</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
    </> }
      

    </div>
  );
}

export default BlogDetailPage;