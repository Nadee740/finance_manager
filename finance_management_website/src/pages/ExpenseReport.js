import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ExpenseTracker.css';
import { baseUrl } from '../utils/baseurl';
import axios from 'axios';

function ExpenseReportPage() {
  const { id } = useParams();
  const [reportData, setReportData] = useState(null);
  const [expenseData, setExpenseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/expense/analysis?id=${id}`)
      .then((response) => {
        const data = {
          bankSum: parseFloat(response.data.data.bankSum[0].sum),
          cashSum: parseFloat(response.data.data.cashSum[0].sum),
          utilitySum: parseFloat(response.data.data.utilitySum[0].sum),
          variableSum: parseFloat(response.data.data.variableSum[0].sum),
          totalSum: parseFloat(response.data.data.bankSum[0].sum) + parseFloat(response.data.data.cashSum[0].sum),
          expenses: response.data.data.expenses,
          month_value: response.data.data.month[0].month,
          file_name :response.data.data.month[0].name
        };
        setExpenseData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("expense list Page :" + error);
      });
    setTimeout(() => {
      // Mock data
      const mockData = {
        monthName: 'Budget Month - January 2025',
        totalExpenses: 2450,
        fixedExpenses: 1500,
        variableExpenses: 950,
        expenseItems: [
          { id: 1, category: 'Fixed', description: 'Rent', amount: 800, date: '2025-01-05' },
          { id: 2, category: 'Fixed', description: 'Car Payment', amount: 350, date: '2025-01-10' },
          { id: 3, category: 'Fixed', description: 'Insurance', amount: 150, date: '2025-01-15' },
          { id: 4, category: 'Fixed', description: 'Internet', amount: 80, date: '2025-01-02' },
          { id: 5, category: 'Fixed', description: 'Phone', amount: 120, date: '2025-01-07' },
          { id: 6, category: 'Variable', description: 'Groceries', amount: 450, date: '2025-01-08' },
          { id: 7, category: 'Variable', description: 'Dining Out', amount: 200, date: '2025-01-14' },
          { id: 8, category: 'Variable', description: 'Entertainment', amount: 100, date: '2025-01-21' },
          { id: 9, category: 'Variable', description: 'Gas', amount: 120, date: '2025-01-18' },
          { id: 10, category: 'Variable', description: 'Shopping', amount: 80, date: '2025-01-25' },
        ]
      };
      
      setReportData(mockData);
      setLoading(false);
    }, 1000);
  }, [id]);

  // Function to draw the pie chart using SVG
  const renderPieChart = () => {
    if (!expenseData) return null;
    
    const total = expenseData.utilitySum + expenseData.variableSum;
    const fixedPercentage = (expenseData.utilitySum / total) * 100;
    const variablePercentage = (expenseData.variableSum / total) * 100;
    
    // Calculate the angles for the pie slices
    const fixedSlice = fixedPercentage * 3.6; // 3.6 degrees per percentage point (360 / 100)
    
    return (
      <div className="pie-chart-container">
        <svg viewBox="0 0 100 100" className="pie-chart">
          {/* Fixed expenses slice */}
          <circle 
            cx="50" 
            cy="50" 
            r="25" 
            fill="transparent"
            stroke="#4a6cf7" 
            strokeWidth="50"
            strokeDasharray={`${fixedSlice} ${360-fixedSlice}`}
            transform="rotate(-90 50 50)"
          />
          
          {/* Variable expenses slice */}
          <circle 
            cx="50" 
            cy="50" 
            r="25" 
            fill="transparent"
            stroke="#6a88ff"
            strokeWidth="50"
            strokeDasharray={`${variablePercentage * 3.6} ${fixedSlice}`}
            transform={`rotate(${fixedSlice-90} 50 50)`}
          />
        </svg>
        
        <div className="pie-chart-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "#4a6cf7" }}></div>
            <span>Fixed Expenses: ${expenseData.utilitySum} ({fixedPercentage.toFixed(1)}%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "#6a88ff" }}></div>
            <span>Variable Expenses: ${expenseData.variableSum} ({variablePercentage.toFixed(1)}%)</span>
          </div>
        </div>
      </div>
    );
  };

  const renderPieChart2 = () => {
    if (!expenseData) return null;
    
    const total = expenseData.bankSum + expenseData.cashSum;
    const fixedPercentage = (expenseData.cashSum / total) * 100;
    const variablePercentage = (expenseData.bankSum / total) * 100;
    
    // Calculate the angles for the pie slices
    const fixedSlice = fixedPercentage * 3.6; // 3.6 degrees per percentage point (360 / 100)
    
    return (
      <div className="pie-chart-container">
        <svg viewBox="0 0 100 100" className="pie-chart">
          {/* Fixed expenses slice */}
          <circle 
            cx="50" 
            cy="50" 
            r="25" 
            fill="transparent"
            stroke="#4a6cf7" 
            strokeWidth="50"
            strokeDasharray={`${fixedSlice} ${360-fixedSlice}`}
            transform="rotate(-90 50 50)"
          />
          
          {/* Variable expenses slice */}
          <circle 
            cx="50" 
            cy="50" 
            r="25" 
            fill="transparent"
            stroke="#6a88ff"
            strokeWidth="50"
            strokeDasharray={`${variablePercentage * 3.6} ${fixedSlice}`}
            transform={`rotate(${fixedSlice-90} 50 50)`}
          />
        </svg>
        
        <div className="pie-chart-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "#4a6cf7" }}></div>
            <span>Cash Expense Sum: ${expenseData.cashSum} ({fixedPercentage.toFixed(1)}%)</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: "#6a88ff" }}></div>
            <span>Bank Expense Sum: ${expenseData.bankSum} ({variablePercentage.toFixed(1)}%)</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="expense-tracker-page">
      {/* Main Content */}
      <main className="expense-main">
        <section className="expense-report">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading expense report...</p>
            </div>
          ) : (
            <>
              <div className="report-header">
                <div className="report-title">
                  <h2>{expenseData.month_value} -  {expenseData.file_name}</h2>
                  <p>Total Expenses: <span className="highlight">${reportData.totalExpenses}</span></p>
                </div>
                <div className="report-actions">
                  {/* <button className="action-button">
                    <span className="icon">↓</span> Download
                  </button> */}
                  <button className="action-button">
                    <span className="icon">↺</span> Refresh
                  </button>
                  <button className="secondary-button" onClick={() => window.history.back()}>
                    Back
                  </button>
                </div>
              </div>

              <div className="report-content">
                <div className="report-summary">
                  <h3>Utility Vs Variable Expense Breakdown</h3>
                  {renderPieChart()}
                </div>
                <div className="report-summary">
                  <h3>Cash vs Bank Spending Pattern</h3>
                  {renderPieChart2()}
                </div>

                <div className="report-details">
                  <h3>Expense Details</h3>
                  <div className="table-container">
                    <table className="expense-table">
                      <thead>
                        <tr>
                        <th>Transaction Id</th>
                          <th>Category</th>
                          <th>Payment Mode</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {expenseData.expenses.map(item => (
                          <tr key={item.id} className={item.category === 'Fixed' ? 'fixed-expense' : 'variable-expense'}>
                            <td>{item.id}</td>
                            <td>{item.payment_type}</td>
                            <td>{item.payment_mode}</td>
                            <td className="amount">${item.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="3">Total</td>
                          <td className="amount">${expenseData.totalSum}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
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

export default ExpenseReportPage;