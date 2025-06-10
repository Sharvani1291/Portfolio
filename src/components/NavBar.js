// src/components/NavBar.js
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      {/* NEW: Wrap logo and hamburger in a flex container */}
      <div className="nav-top-row">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Logo"
            className="logo-image"
          />
          Sharvani Chelumalla
          <span className="animated-icons">
            <span>✨</span>
          </span>
        </div>

        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>

      <div className={`nav-right ${isMobileMenuOpen ? 'open' : ''}`}>
      <div className="nav-links">
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home🏠</a>
        <a href="#profile" onClick={() => setMobileMenuOpen(false)}>Profile👩🏻‍💻</a>
        <a href="#work" onClick={() => setMobileMenuOpen(false)}>Experience💼</a>
        <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects📚</a>
        <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications📜</a>
        <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills⚙️</a>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
