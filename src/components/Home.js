// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        {/* PHOTO FIRST — for better mobile stacking */}
        <div className="right-part">
          <div className="photo-container">
            {/* Desktop photo */}
            <img
              className="desktop-photo"
              src={`${process.env.PUBLIC_URL}/images/My_Photo.jpg`}
              alt="Sharvani Chelumalla"
            />

            {/* Mobile photo */}
            <img
              className="mobile-photo"
              src={`${process.env.PUBLIC_URL}/images/My_Photo.jpg`}
              alt="Sharvani Chelumalla - Mobile"
            />
          </div>
        </div>

        {/* INTRO, CONTACT, RESUME BELOW ON MOBILE */}
        <div className="left-part">
          <div className="intro">
            <h1>
              Hello,<br />
              <span className="highlight">Sharvani here!</span>{' '}
              <span className="wave">👋</span>
            </h1>
            <p className="roles">
              Data Engineer | Software Developer | Photographer | Editor
            </p>
          </div>

          <div className="contact-container">
            <p className="get-in-touch">Get in Touch</p>
            <div className="contact-details">
              <a
                href="mailto:ch.sharvani.29@gmail.com"
                className="contact-icon"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/gmail.png`}
                  alt="Email"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sharvanichelumalla/"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/Sharvani1291"
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/github.png`}
                  alt="GitHub"
                />
              </a>
            </div>
          </div>

          <div className="resume-container">
            <a
              href="/Sharvani_Chelumalla_Resume_Feb.pdf"
              download
              className="resume-box"
            >
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;