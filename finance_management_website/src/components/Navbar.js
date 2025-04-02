import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] =useState(false);
  useEffect(() => {
    if (localStorage.getItem('userid')) {
      setLoggedIn(true)
  } else {
      setLoggedIn(false)
  }
  }, [])
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <nav className="navbar">
    <div className="logo">
      <h1>Finance <span>Manager</span></h1>
    </div>
    <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
      {loggedIn && <>
      <li><Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link></li>
      <li><Link to={"/expense-upload"} onClick={() => setMenuOpen(false)}>Upload Expense</Link></li>
      <li><Link to={"/list-expenses"} onClick={() => setMenuOpen(false)}>List Monthly Expense</Link></li>
      </>}

      {
        !loggedIn && <>
        <li className="auth-button">
        <button onClick={() => {

        }}><Link style={{ color: "white", textDecoration: "none" }} to={"/login"} onClick={() => setMenuOpen(false)}>Login</Link></button>
      </li>
      <li className="auth-button">
        <button onClick={() => {}}><Link style={{ color: "white", textDecoration: "none" }} to={"/signup"} onClick={() => setMenuOpen(false)}>Sign Up</Link></button>
      </li></>
      }

{
        loggedIn && <>
        <li className="auth-button">
       <button style={{ color: "white", textDecoration: "none" }}  onClick={() => { 
          localStorage.removeItem("userid");
          window.location = "/"
          setMenuOpen(false)
          }}>Logout</button>
      </li></>
      }

    </ul>
  </nav>
  );
};