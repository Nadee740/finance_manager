import React, { useRef, useState } from 'react';
import '../styles/ExpenseTracker.css';
import axios from 'axios';
import { baseUrl } from '../utils/baseurl';

function ExpenseUploadPage() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [monthName, setMonthName] = useState('');
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const months = [
    { "name": "January", "value": "JAN_2025" },
    { "name": "February", "value": "FEB_2025" },
    { "name": "March", "value": "MAR_2025" },
    { "name": "April", "value": "APR_2025" },
    { "name": "May", "value": "MAY_2025" },
    { "name": "June", "value": "JUN_2025" },
    { "name": "July", "value": "JUL_2025" },
    { "name": "August", "value": "AUG_2025" },
    { "name": "September", "value": "SEP_2025" },
    { "name": "October", "value": "OCT_2025" },
    { "name": "November", "value": "NOV_2025" },
    { "name": "December", "value": "DEC_2025" }
    ]


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      // Check if file is Excel
      if (selectedFile.name.endsWith('.xlsx') || selectedFile.name.endsWith('.xls')) {
        setFile(selectedFile);
        setError('');
      } else {
        setFile(null);
        setError('Please upload an Excel file (.xlsx or .xls)');
      }
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log("here")
    if (!selectedMonth) {
      setError('Please select a month');
      return;
    }
    
    if (!monthName.trim()) {
      setError('Please name the month');
      return;
    }
    
    if (!file) {
      setError('Please upload an Excel file');
      return;
    }
  
    console.log("here")
    // **Prepare Data for API**
    let user_id = localStorage.getItem("userid");
    user_id = parseInt(user_id);

    const formData = new FormData();
    formData.append("user_id", user_id)
    formData.append("month", selectedMonth);
    formData.append("name", monthName);
    formData.append("excel", file);

    try {

      const response = await axios.post(`${baseUrl}/excel/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Success:", response.data);
      alert("File uploaded successfully!");
      setIsUploaded(true);
      setError('');

      setFile(null);
      setSelectedMonth("");
      setMonthName("");
      fileInputRef.current.value = "";
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("Failed to upload file. Please try again.");
    }
    // Simulating successful upload

  };

  return (
    <div className="expense-tracker-page">
      {/* Navbar */}

      {/* Main Content */}
      <main className="expense-main">
        <section className="expense-upload">
          <div className="upload-container">
            <h2>Upload Monthly Expenses</h2>
            <div className="upload-form-wrapper">
              <form className="upload-form" onSubmit={handleUpload} >
                <div className="form-group">
                  <label htmlFor="month-select">Select Month</label>
                  <select 
                    id="month-select" 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="">-- Select Month --</option>
                    {months.map((month, index) => (
                      <option key={index} value={month.value}>{month.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="month-name">Name Your Month</label>
                  <input 
                    type="text" 
                    id="month-name" 
                    placeholder="e.g., Budget Month 1, January 2025"
                    value={monthName}
                    onChange={(e) => setMonthName(e.target.value)}
                  />
                </div>

                <div className="form-group file-upload">
                  <label htmlFor="expense-file">Upload Excel File</label>
                  <div className="file-input-container">
                    <input 
                      type="file" 
                      id="expense-file" 
                      accept=".xlsx,.xls"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    <div onClick={()=>{
                    fileInputRef.current.click();
                    }} className="file-input-button">
                      <span>Choose File</span>
                    </div>
                    <div className="file-name">
                      {file ? file.name : 'No file chosen'}
                    </div>
                  </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="upload-button">
                  Upload Expense File
                </button>
              </form>
            </div>

            {isUploaded && (
              <div className="upload-success">
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Upload Successful!</h3>
                  <p>Your expense file for {monthName} has been uploaded successfully.</p>
                </div>
                <a href={`/list-expenses/`} className="view-report-button">
                  View Expenses
                </a>
              </div>
            )}
          </div>
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
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Data Security</a></li>
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

export default ExpenseUploadPage;