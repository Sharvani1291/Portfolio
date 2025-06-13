// src/components/Education.js
import React from 'react';
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
        "Collaborated with staff to validate lighting fixture positions within the campus facilities app, ensuring accurate spatial data representation.",
        "Supported the Facilities Management Division (FMD) Plans Room by organizing and updating architectural blueprints and campus infrastructure data."
      ]
    },
    {
      institution: "Vardhaman College of Engineering",
      logo: `${process.env.PUBLIC_URL}/images/vce.png`,
      degree: "B.Tech - Electronics and Communication Engineering",
      location: "Hyderabad, Telangana, India",
      date: "May 2020",
      gpa: "9.5 / 10.00",
      achievements: [
        "Completed projects involving signal processing and Embedded systems.",
        "Coordinator for The Institution of Electronics and Telecommunications Engineers (IETE) student organization.",
        "Achieved NPTEL certificate on op-amp applications."
      ]
    }
  ];

  return (
    <section id="education">
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
