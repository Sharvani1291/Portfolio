// src/components/Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id="profile">
      <h2 className="about-me-title">
        About Me <span className="about-emoji">👩🏻‍💻</span>
      </h2>
      <p className="about-me-description">
        <br /><br /><br /><br />
        I recently graduated with a <strong>Master's degree in Computer Science</strong> from the <strong>University of Georgia</strong> 🎓. I'm passionate about delivering high-quality work and continuously learning the latest in tech. With a background in <strong>Electronics and Communication Engineering</strong>, my interest in the intersection of hardware and software naturally led me to explore <strong>Computer Science</strong> further. My key interests lie in <strong>Federated Learning, Machine Learning, Data Engineering, and Software Development</strong>.
        <br /><br />
        Before pursuing my Master's in the <strong>USA</strong> 🇺🇸, I gained 3 years of industry experience at <strong>Cognizant</strong> 💼, where I worked on enterprise-level software systems and built a solid foundation in <strong>data-centric development</strong>. During my graduate program, I also completed a <strong>Full-Time Co-op at Resolution Life</strong> 🔍, where I applied my skills to real-world business and data challenges, further refining my expertise in backend systems and cloud platforms.
        <br /><br />
        I’m now seeking full-time opportunities where I can contribute to <strong>Cloud Technologies, AI, and Machine Learning</strong>. I aim to be part of innovative teams pushing the boundaries of <strong>scalability, automation, and intelligent solutions</strong>.
        <br /><br />
        Outside of work, I enjoy <strong>Photography 📸, Reading Spiritual Books 📚, crafting paper models ✂️, and playing badminton 🏸 and chess ♟️</strong> as ways to stay creative and balanced.
      </p>
    </section>
  );
};

export default Profile;
