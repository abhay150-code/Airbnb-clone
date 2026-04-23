import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ navigate, searchQuery, setSearchQuery }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="brand">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="brand-logo">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <span className="brand-name">AirTours</span>
        </a>
        
        <div className="search-bar">
          <input 
            type="text" 
            className="navbar-search-input" 
            placeholder="Search destination or title..." 
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="search-icon-wrapper">
             🔍
          </div>
        </div>

        <div className="user-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
\n// feat: connect FilterBar state to HomePage\n\n// fix: resolve layout shift in PropertyCard grid\n