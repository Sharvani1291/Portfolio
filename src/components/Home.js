// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (!window.VANTA || !window.VANTA.NET) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js';
        script.async = true;
        script.onload = () => {
          if (window.VANTA && !vantaEffectRef.current) {
            vantaEffectRef.current = window.VANTA.NET({
              el: vantaRef.current,
              color: 0x8c4863,            
              backgroundColor: 0xf5f5dc,  
              points: 10.0,
              maxDistance: 25.0,
              spacing: 18.0,
              showDots: false,
              mouseControls: true,
              touchControls: true,
              scale: 1.0,
              scaleMobile: 1.0,
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" ref={vantaRef}>
      <div className="home-container">
        <div className="right-part">
          <div className="photo-container photo-slide-in">
            <img
              className="desktop-photo"
              src={`${process.env.PUBLIC_URL}/images/My_Photo.jpg`}
              alt="Sharvani Chelumalla"
            />
            <img
              className="mobile-photo"
              src={`${process.env.PUBLIC_URL}/images/My_Photo.jpg`}
              alt="Sharvani Chelumalla - Mobile"
            />
          </div>
        </div>

        <div className="left-part">
          <div className="intro">
            <h1>
              Hello,<br />
              <span className="highlight">Sharvani here!</span>{' '}
              <span className="wave">👋</span>
            </h1>
            <p className="roles fade-slide-up">
              Data Engineer | Software Developer 
            </p>
          </div>

          <div className="contact-container fade-slide-up">
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

          <div className="resume-container fade-slide-up">
            <a
              href="/Sharvani_Resume_2025.pdf"
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
