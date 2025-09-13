// src/components/Education.js
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

const Education = () => {
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

  const educationData = [
    {
      institution: "University of Georgia",
      logo: `${process.env.PUBLIC_URL}/images/uga.png`,
      degree: "MS - Computer Science",
      location: "Athens, GA, USA",
      date: "May 2025",
      gpa: "3.54 / 4.00",
      achievements: [
        "Graduate Research Assistant – worked on federated learning framework.",
        "Participated in coding projects and academic seminars.",
        "Courses: Algorithms, Distributed Computing Systems, Computer Networks, DataBase Management Systems, Advance Cloud Computing, Secure Programming, Software Engineering",
      ]
    },
    {
      institution: "Vardhaman College of Engineering",
      logo: `${process.env.PUBLIC_URL}/images/vce.png`,
      degree: "B.Tech - Electronics and Communication Engineering",
      location: "Hyderabad, TS, India",
      date: "May 2020",
      gpa: "8.71 / 10.00",
      achievements: [
        "Projects on signal processing and Embedded systems.",
        "IETE student organization coordinator.",
        "Earned NPTEL certificate on op-amp applications.",
      ]
    }
  ];

  return (
    <section id="education" ref={vantaRef}>
      <h2 className="education-title">Education 🎓</h2>

      <div className="education-wrapper">
        {educationData.map((edu, index) => (
          <motion.div
            className="edu-card"
            key={index}
            custom={index}
            variants={fadeInUpEdu}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="edu-header">
              <img src={edu.logo} alt={`${edu.institution} logo`} className="edu-logo" />
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
              <div
                className="progress-bar"
                style={{
                  width: `${parseFloat(edu.gpa.split(" ")[0]) * 100 / parseFloat(edu.gpa.split("/")[1])}%`,
                }}
              ></div>
              <p className="gpa-text">{edu.gpa}</p>
            </div>
            <ul className="achievements">
              {edu.achievements.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
