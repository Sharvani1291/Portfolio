import React, { useEffect, useRef } from 'react';
import './Skills.css';

const toImageKey = (text = '') =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const Skills = ({ categories = [] }) => {
  const sectionRef = useRef(null);
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            const items = sectionRef.current.querySelectorAll('[data-skill]');
            items.forEach((item, index) => {
              setTimeout(() => item.classList.add('visible'), index * 100);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [categories]);

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
          speed: 2.0,
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

    const syncVantaSize = () => {
      vantaEffectRef.current?.resize?.();
    };

    syncVantaSize();
    const t1 = setTimeout(syncVantaSize, 120);
    const t2 = setTimeout(syncVantaSize, 350);

    window.addEventListener('resize', syncVantaSize);

    let resizeObserver;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(syncVantaSize);
      if (vantaRef.current) resizeObserver.observe(vantaRef.current);
      if (sectionRef.current) resizeObserver.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', syncVantaSize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [categories]);

  const safeCategories = Array.isArray(categories) ? categories : [];

  return (
    <section id="skills" ref={vantaRef}>
      <div ref={sectionRef}>
        <h1 className="skills_header">
          My Skills <span className="skills-emoji">⚙️</span>
        </h1>

        <div className="skills-container">
          {safeCategories.map((cat, index) => (
            <div key={`${cat.category}-${index}`} className="category">
              <h4>{cat.category}</h4>
              <div className="skills-grid">
                {(cat.items || []).map((item, i) => {
                  const label = item.label || item.imageKey || 'Skill';
                  const imageKey = item.imageKey || toImageKey(label);
                  const iconSrc = item.iconUrl || `${process.env.PUBLIC_URL}/images/${imageKey}.png`;

                  return (
                    <div
                      className="skill-card"
                      key={`${label}-${i}`}
                      data-skill
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <img src={iconSrc} alt={label} />
                      <p>{label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
