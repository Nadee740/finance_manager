import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExpenseListingPage.css';
import axios from 'axios';
import { baseUrl } from '../utils/baseurl';

function ExpenseMonthsListPage() {
  const [months, setMonths] = useState([]);
  const [filteredMonths, setFilteredMonths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date-desc');

  useEffect(() => {
    let user_id = localStorage.getItem("userid");
    user_id = parseInt(user_id);

    axios
      .get(`${baseUrl}/expense/get-list?user_id=${user_id}`)
      .then((response) => {
        setMonths(response.data.data);
        setFilteredMonths(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("expense list Page :" + error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter and sort months when search query or sort option changes
    let result = [...months];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(month => 
        month.name.toLowerCase().includes(query)
      );
    }   
    setFilteredMonths(result);
  }, [months, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="expense-tracker-page">
      {/* Main Content */}
      <main className="expense-main">
        <section className="months-list-container">
          <div className="months-header">
            <h2>Expense Reports by Month</h2>
            <p>Select a month to view detailed expense report</p>
          </div>

          <div className="search-sort-container">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by month name..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <div className="sort-container">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortOption}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="date-desc">Date (Newest First)</option>
                <option value="date-asc">Date (Oldest First)</option>
                <option value="name-asc">Month Name (A-Z)</option>
                <option value="name-desc">Month Name (Z-A)</option>
                <option value="expenses-desc">Expenses (High-Low)</option>
                <option value="expenses-asc">Expenses (Low-High)</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading expense months...</p>
            </div>
          ) : (
            <>
              {filteredMonths.length === 0 ? (
                <div className="no-results">
                  <p>No months found matching your search criteria.</p>
                  <button 
                    className="clear-search-button"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="months-grid">
                  {filteredMonths.map((month) => (
                    <Link 
                      to={`/expense-report/${month.id}`} 
                      className="month-card" 
                      key={month.id}
                    >
                      <div className="month-card-header">
                        <h3>{month.month}</h3>
                        <span className="month-badge">{month.entryCount} entries</span>
                      </div>
                      <div className="month-card-content">
                        <div className="expense-amount">
                          <span className="currency"></span>
                          <span className="amount">{month.name}</span>
                        </div>
                        <div className="update-info">
                          Created Date: {new Date("2025-01-10").toLocaleDateString()}
                        </div>
                      </div>
                      <div className="view-details">
                        <span>View Details</span>
                        <span className="arrow-icon">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Expense<span>Tracker</span></h2>
            <p>Manage your finances with ease</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/reports">Reports</a></li>
                <li><a href="/analytics">Analytics</a></li>
                <li><a href="/help">Help</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/security">Data Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ExpenseMonthsListPage;