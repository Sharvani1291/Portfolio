import React, { useEffect, useRef } from 'react';
import './Profile.css';

const fallbackIcons = [
  { alt: 'camera', url: `${process.env.PUBLIC_URL}/images/camera.png` },
  { alt: 'grad', url: `${process.env.PUBLIC_URL}/images/grad.png` },
  { alt: 'book', url: `${process.env.PUBLIC_URL}/images/book.png` },
  { alt: 'badminton', url: `${process.env.PUBLIC_URL}/images/badminton.png` },
  { alt: 'chess', url: `${process.env.PUBLIC_URL}/images/chess.png` },
];

const Profile = ({ profile = {} }) => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let scriptEl;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.FOG && !vantaEffectRef.current) {
        vantaEffectRef.current = window.VANTA.FOG({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x8c4863,
          midtoneColor: 0x8c4863,
          lowlightColor: 0x3e1f2f,
          baseColor: 0x1e0f18,
          blurFactor: 0.6,
          speed: 2.3,
          zoom: 0.9,
        });
      }
    };

    if (!window.VANTA || !window.VANTA.FOG) {
      scriptEl = document.createElement('script');
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js';
      scriptEl.async = true;
      scriptEl.onload = initVanta;
      document.body.appendChild(scriptEl);
    } else {
      initVanta();
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
      if (scriptEl) scriptEl.remove();
    };
  }, []);

  useEffect(() => {
    if (!vantaEffectRef.current) return;
    requestAnimationFrame(() => vantaEffectRef.current?.resize?.());
    setTimeout(() => vantaEffectRef.current?.resize?.(), 150);
  }, [profile]);

  const title = profile.title || 'About Me';
  const paragraphs =
    Array.isArray(profile.paragraphs) && profile.paragraphs.length
      ? profile.paragraphs
      : ['Add your About Me paragraphs in Sanity.'];
  const hobbyIcons =
    Array.isArray(profile.hobbyIcons) && profile.hobbyIcons.length ? profile.hobbyIcons : fallbackIcons;

  return (
    <section id="profile" ref={vantaRef}>
      <h2 className="about-me-title">
        {title} <span className="about-emoji">👩🏻‍💻</span>
      </h2>

      <div className="about-content">
        <div className="about-me-description">
          {paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>

        <div className="about-images">
          {hobbyIcons.map((icon, idx) => (
            <img key={idx} src={icon.url} alt={icon.alt || 'hobby'} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
