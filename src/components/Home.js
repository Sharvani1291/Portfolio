import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = ({ home = {}, siteSettings = {} }) => {
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
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
    };
  }, []);

  const greeting = home.greeting || 'Hello,';
  const highlightName = home.highlightName || 'Sharvani here!';
  const roles = home.roles || 'Data Engineer | Software Developer';
  const profileImageUrl = home.profileImageUrl || `${process.env.PUBLIC_URL}/images/My_Photo.jpg`;
  const resumeUrl = home.resumeUrl || `${process.env.PUBLIC_URL}/Sharvani_Resume_2025.pdf`;

  const email = siteSettings.email || 'ch.sharvani.29@gmail.com';
  const linkedin = siteSettings.linkedin || 'https://www.linkedin.com/in/sharvanichelumalla/';
  const github = siteSettings.github || 'https://github.com/Sharvani1291';

  return (
    <section id="home" ref={vantaRef}>
      <div className="home-container">
        <div className="right-part">
          <div className="photo-container photo-slide-in">
            <img className="desktop-photo" src={profileImageUrl} alt={highlightName} />
            <img className="mobile-photo" src={profileImageUrl} alt={`${highlightName} - Mobile`} />
          </div>
        </div>

        <div className="left-part">
          <div className="intro">
            <h1>
              {greeting}
              <br />
              <span className="highlight">{highlightName}</span> <span className="wave">👋</span>
            </h1>
            <p className="roles fade-slide-up">{roles}</p>
          </div>

          <div className="contact-container fade-slide-up">
            <p className="get-in-touch">Get in Touch</p>
            <div className="contact-details">
              <a href={`mailto:${email}`} className="contact-icon">
                <img src={`${process.env.PUBLIC_URL}/images/gmail.png`} alt="Email" />
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="contact-icon">
                <img src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn" />
              </a>
              <a href={github} target="_blank" rel="noreferrer" className="contact-icon">
                <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt="GitHub" />
              </a>
            </div>
          </div>

          <div className="resume-container fade-slide-up">
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="resume-box">
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
