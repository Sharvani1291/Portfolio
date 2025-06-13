// src/App.js
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

      <footer>
        <p>&copy; 2025 All Rights Reserved | Sharvani Chelumalla</p>
      </footer>
    </>
  );
}

export default App;
