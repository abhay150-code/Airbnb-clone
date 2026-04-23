import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">airbnb</span>
      </div>
      <div className="navbar-search">
        <button>Anywhere</button>
        <button>Any week</button>
        <button className="add-guests">Add guests</button>
        <div className="search-icon">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '5.33333', overflow: 'visible'}}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513224-4.9248678-11-11-11-6.07513224 0-11 4.92486776-11 11 0 6.0751322 4.92486776 11 11 11zm8-3 9 9"></path></g></svg>
        </div>
      </div>
      <div className="navbar-user">
        <span>Airbnb your home</span>
        <div className="user-menu">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '3', overflow: 'visible'}}><g fill="none"><path d="m2 16h28m-28-10h28m-28 20h28"></path></g></svg>
          <div className="user-icon">
             <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentColor', overflow: 'visible'}}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4c.366-.115.774-.012 1.03.248.86.865 2.109 1.483 3.452 1.483s2.592-.618 3.452-1.483c.256-.26.665-.363 1.03-.248a12.425 12.425 0 0 1 6.451 4.4c-2.328 2.926-5.912 4.81-9.933 4.81zm6.6-15.3c0 3.645-2.955 6.6-6.6 6.6s-6.6-2.955-6.6-6.6 2.955-6.6 6.6-6.6 6.6 2.955 6.6 6.6z"></path></svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
