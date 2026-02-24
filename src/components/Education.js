import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const fadeInUpEdu = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const toNum = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
};

const Education = ({ education = [] }) => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
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
          spacing: 20.0,
          showDots: false,
          mouseControls: true,
          touchControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
    };
  }, []);

  const safeEducation = Array.isArray(education) ? education : [];

  return (
    <section id="education" ref={vantaRef}>
      <h2 className="education-title">Education 🎓</h2>

      <div className="education-wrapper">
        {safeEducation.map((edu, index) => {
          const gpaValue = toNum(edu.gpa);
          const gpaScale = toNum(edu.gpaScale) || 4;
          const percent = gpaValue !== null ? Math.max(0, Math.min(100, (gpaValue * 100) / gpaScale)) : 0;
          const gpaText = gpaValue !== null ? `${gpaValue.toFixed(2)} / ${gpaScale.toFixed(2)}` : '';

          return (
            <motion.div
              className="edu-card"
              key={`${edu.institution}-${index}`}
              custom={index}
              variants={fadeInUpEdu}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="edu-header">
                <img
                  src={edu.logoUrl || `${process.env.PUBLIC_URL}/images/uga.png`}
                  alt={`${edu.institution} logo`}
                  className="edu-logo"
                />
                <div className="edu-info">
                  <h2 className="institution">{edu.institution}</h2>
                  <div className="edu-location">
                    <span>📍 {edu.location}</span>
                  </div>
                </div>
              </div>

              <h3 className="degree">{edu.degree}</h3>

              <div className="edu-date">
                <span>🎓 {edu.date}</span>
              </div>

              <div className="gpa-bar">
                <div className="progress-bar" style={{ width: `${percent}%` }} />
                <p className="gpa-text">{gpaText}</p>
              </div>

              <ul className="achievements">
                {(edu.achievements || []).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
