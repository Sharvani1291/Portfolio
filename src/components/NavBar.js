import React, { useState, useEffect } from 'react';
import './NavBar.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

const NavBar = ({ siteSettings = {} }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = siteSettings.logoUrl || `${process.env.PUBLIC_URL}/images/logo.png`;
  const fullName = siteSettings.fullName || 'Sharvani Chelumalla';

  return (
    <nav>
      <div className="nav-top-row">
        <div className="logo">
          <img src={logoUrl} alt="Logo" className="logo-image" />
          {fullName}
          <span className="animated-icons">
            <span>✨</span>
          </span>
        </div>

        <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
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
