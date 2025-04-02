import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import { Navbar } from './components/Navbar';
import ExpenseUploadPage from './pages/ExpenseUploader';
import ExpenseReportPage from './pages/ExpenseReport';
import ExpenseMonthsListPage from './pages/ExpenseListPage';


function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/expense-upload" element={<ExpenseUploadPage />} />
        <Route path="/expense-report/:id" element={<ExpenseReportPage />} />
        <Route path="/list-expenses" element={<ExpenseMonthsListPage />} />
      </Routes>
    </Router>
  );
}

export default App;