// src/components/NavBar.js
import React from 'react';
import './NavBar.css'; // or include this in App.css if you're combining styles

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo-image" />
        Sharvani Chelumalla 
        <span className="animated-icons">
          <span>✨</span>
        </span>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#home">Home🏠</a>
          <a href="#profile">Profile👩🏻‍💻</a>
          <a href="#work">Experience💼</a>
          <a href="#projects">Projects📚</a>
          <a href="#certifications">Certifications📜</a>
          <a href="#skills">Skills⚙️</a> 
          <span className="delimiter">|</span>
        </div>
        <a
          href="/Sharvani_Chelumalla_Resume_Feb.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          Resume⬇️
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
