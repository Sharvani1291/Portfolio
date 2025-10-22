import React, { useEffect, useState } from 'react';
import './App.css';
import './components/Layout.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Work from './components/Work';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Show caret only after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <NavBar />
      <div id="scroll-container">
        <Home />
        <Profile />
        <Work />
        <Projects />
        <Certifications />
        <Skills />
        <Education />
      </div>

      {/* Floating scroll-to-top caret */}
      <div
        className={`scroll-to-top ${showScroll ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <span className="caret-symbol">^</span>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <p>&copy; 2025 Sharvani Chelumalla | All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <a
            href="mailto:ch.sharvani.29@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sharvanichelumalla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Sharvani1291"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
