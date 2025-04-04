import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import { Navbar } from './components/Navbar';
import ExpenseUploadPage from './pages/ExpenseUploader';
import ExpenseReportPage from './pages/ExpenseReport';
import ExpenseMonthsListPage from './pages/ExpenseListPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import ProfilePage from './pages/ProfilePage';
import BlogDetailPage from './pages/BlogDetailPage';


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
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />

      </Routes>
    </Router>
  );
}

export default App;