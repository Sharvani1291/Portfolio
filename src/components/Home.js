import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = ({ home = {}, siteSettings = {} }) => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let resizeObserver = null;

    const ensureScript = (src, check) =>
      new Promise((resolve, reject) => {
        if (check()) return resolve();
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const initVanta = () => {
      if (!mounted || !vantaRef.current || !window.VANTA?.NET) return;

      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }

      vantaEffectRef.current = window.VANTA.NET({
        el: vantaRef.current,
        color: 0x8c4863,
        backgroundColor: 0xf5f5dc,
        points: 10.0,
        maxDistance: 40.0,
        spacing: 29.0,
        showDots: false,
        mouseControls: true,
        touchControls: true,
        scale: 1.0,
        scaleMobile: 1.0,
      });

      requestAnimationFrame(() => vantaEffectRef.current?.resize?.());
      setTimeout(() => vantaEffectRef.current?.resize?.(), 150);
    };

    const handleResize = () => {
      vantaEffectRef.current?.resize?.();
    };

    const setup = async () => {
      try {
        await ensureScript(
          'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
          () => Boolean(window.THREE)
        );
        await ensureScript(
          'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js',
          () => Boolean(window.VANTA?.NET)
        );

        initVanta();
        window.addEventListener('resize', handleResize);

        if (window.ResizeObserver && vantaRef.current) {
          resizeObserver = new ResizeObserver(handleResize);
          resizeObserver.observe(vantaRef.current);
        }
      } catch (err) {
        console.error('Vanta NET init failed:', err);
      }
    };

    setup();

    return () => {
      mounted = false;
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();

      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
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
