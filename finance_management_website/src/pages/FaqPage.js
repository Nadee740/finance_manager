import React, { useState } from 'react';
import '../styles/Faq.css';

function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I create an account?",
      answer: "Creating an account is simple! Click on the 'Sign Up' button in the top navigation bar, fill in your details in the registration form, and click 'Create Account'. You'll receive a confirmation email to verify your account."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We implement bank-level security measures including encryption, secure data storage, and regular security audits to ensure your financial information is always protected. We never share your data with third parties without your explicit consent."
    },
    {
      question: "How do I upload my expense data?",
      answer: "After logging in, navigate to the Dashboard and click on the 'Upload Expenses' button. You can upload Excel spreadsheets (.xlsx, .xls) with your expense data. We provide a template you can download to ensure your data is formatted correctly."
    },
    {
      question: "What formats are supported for uploading expenses?",
      answer: "We currently support Excel files (.xlsx, .xls) and CSV files. Make sure your spreadsheet contains at least date, category, and amount columns. You can download our template from the Upload section for the recommended format."
    },
    {
      question: "How do I interpret the reports and analytics?",
      answer: "Your reports include visualizations of spending trends, category breakdowns, and comparative analysis over time. Hover over charts for detailed information, and use the filter options to customize your view. We also provide insights and recommendations based on your spending patterns."
    },
    {
      question: "Can I set budgets and get alerts?",
      answer: "Yes! In the Budget section, you can set monthly or category-specific budgets. Our system will send you notifications when you're approaching your budget limits and provide weekly summaries of your spending status."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your Account Settings page. Select 'Subscription' and click on 'Cancel Subscription'. Your service will continue until the end of your current billing period."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer mobile apps for both iOS and Android devices. Search for 'Finance Manager' in the App Store or Google Play Store to download and access your financial data on the go."
    }
  ];

  return (
    <div className="app">
      {/* Navbar would be rendered here */}
      
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to the most common questions about our platform</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="faq-contact">
        <div className="faq-contact-content">
          <h2>Still Have Questions?</h2>
          <p>Our support team is here to help. Reach out to us directly.</p>
          <div className="faq-contact-options">
            <div className="contact-option">
              <div className="contact-icon">📧</div>
              <h3>Email Support</h3>
              <p>support@financemanager.com</p>
              <p>We typically respond within 24 hours</p>
            </div>
            <div className="contact-option">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available Monday-Friday</p>
              <p>9am - 5pm EST</p>
            </div>
            <div className="contact-option">
              <div className="contact-icon">📞</div>
              <h3>Phone Support</h3>
              <p>+1 (123) 456-7890</p>
              <p>Premium users only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer would be rendered here */}
    </div>
  );
}

export default FaqPage;