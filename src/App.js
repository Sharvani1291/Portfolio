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
import { sanityClient } from './lib/sanityClient';
import { PORTFOLIO_QUERY } from './lib/portfolioQuery';

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [content, setContent] = useState({});

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let mounted = true;
    sanityClient
      .fetch(PORTFOLIO_QUERY)
      .then((data) => {
        if (mounted && data) setContent(data);
      })
      .catch((err) => {
        console.error('Sanity fetch failed:', err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const siteSettings = content.siteSettings || {};
  const email = siteSettings.email || 'ch.sharvani.29@gmail.com';
  const linkedin = siteSettings.linkedin || 'https://www.linkedin.com/in/sharvanichelumalla/';
  const github = siteSettings.github || 'https://github.com/Sharvani1291';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <NavBar siteSettings={siteSettings} />
      <div id="scroll-container">
        <Home home={content.home} siteSettings={siteSettings} />
        <Profile profile={content.profile} />
        <Work experiences={content.experiences || []} />
        <Projects projects={content.projects || []} />
        <Certifications certifications={content.certifications || []} />
        <Skills categories={content.skillCategories || []} />
        <Education education={content.education || []} />
      </div>

      <div className={`scroll-to-top ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
        <span className="caret-symbol">^</span>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <p>{siteSettings.footerText || '© 2025 Sharvani Chelumalla | All Rights Reserved'}</p>
        </div>
        <div className="footer-right">
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
