// src/components/Home.js
import React from 'react';
import './Home.css'; // optional if you extract specific CSS, else keep it in App.css

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        {/* Left Part: Text and "Get in Touch" */}
        <div className="left-part">
          <div className="intro">
            <h1>
              Hello,<br />
              <span className="highlight">Sharvani here!</span> <span className="wave">👋</span>
            </h1>
            <p className="roles">
              Data Engineer | Software Developer | Photographer | Editor
            </p>
          </div>

          {/* Get in Touch Section */}
          <div className="contact-container">
            <p className="get-in-touch">Get in Touch</p>
            <div className="contact-details">
              <a href="mailto:ch.sharvani.29@gmail.com" className="contact-icon">
                <img src={`${process.env.PUBLIC_URL}/images/gmail.png`} alt="Email" />
              </a>
              <a href="https://www.linkedin.com/in/sharvanichelumalla/" target="_blank" rel="noreferrer" className="contact-icon">
                <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Sharvani1291" target="_blank" rel="noreferrer" className="contact-icon">
                <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="GitHub" />
              </a>
            </div>
          </div>

          {/* Resume Section */}
          <div className="resume-container">
            <a href="/Sharvani_Chelumalla_Resume_Feb.pdf" download className="resume-box">
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Part: Photo */}
        <div className="right-part">
          <div className="photo-container">
            <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Sharvani Chelumalla" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
