// src/components/Profile.js
import React from 'react';
import './Profile.css'; // Optional if you're splitting styles

const Profile = () => {
  return (
    <section id="profile">
      <h2 className="about-me-title">
        About Me <span className="about-emoji">👩🏻‍💻</span>
      </h2>
      <p className="about-me-description">
        <br /><br /><br /><br />
        I am a Master's student in <strong>Computer Science</strong> at the <strong>University of Georgia</strong> 🎓, currently in my final semester. My daily routine revolves around delivering tasks efficiently and staying updated with the latest tech trends. With a background in <strong>Electronics and Communication Engineering</strong>, I have always been fascinated by the intersection of hardware and software, which led me to explore <strong>Computer Science</strong>. I am deeply passionate about <strong>Federated Learning, Machine Learning, Data Engineering, and Software Development</strong>.
        <br /><br />
        Before moving to the <strong>USA for my Master's</strong> 🇺🇸, I gained 3 years of industry experience at <strong>Cognizant</strong> 💼, where I worked on large-scale software solutions and developed a strong foundation in <strong>data-driven applications</strong>. Currently, I am expanding my expertise as a <strong>Full-Time Co-op at Resolution Life</strong> 🔍, where I apply my technical skills to real-world challenges.
        <br /><br />
        I am deeply passionate about advancing my career in <strong>Cloud Technologies, Machine Learning, and AI</strong>. I am eager to contribute to <strong>cutting-edge innovations</strong> that push the boundaries of <strong>scalability, automation, and intelligent systems</strong>.
        <br /><br />
        Outside of work, I love <strong>Photography📸, Reading Spiritual Books📚, crafting intricate paper models ✂️, playing badminton 🏸 and chess ♟️</strong> as a creative outlet.
      </p>
    </section>
  );
};

export default Profile;
