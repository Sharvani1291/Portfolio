import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'profile', 'work', 'projects', 'certifications', 'skills', 'education'];
      const scrollPosition = window.scrollY + 100; // Add offset for navbar height

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'work', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <nav>
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
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
