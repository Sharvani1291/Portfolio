import React from 'react';
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

      <footer className="footer">
        <div className="footer-left">
          <p>&copy; 2025 Sharvani Chelumalla | All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <a href="mailto:ch.sharvani.29@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.linkedin.com/in/sharvanichelumalla/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Sharvani1291" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
