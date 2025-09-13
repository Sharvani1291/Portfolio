// src/components/Profile.js
import React, { useEffect, useRef } from 'react';
import './Profile.css';

const Profile = () => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js';
    script.async = true;
    script.onload = () => {
      if (window.VANTA && !vantaEffectRef.current) {
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
    document.body.appendChild(script);

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  return (
    <section id="profile" ref={vantaRef}>
      <h2 className="about-me-title">
        About Me <span className="about-emoji">👩🏻‍💻</span>
      </h2>

      <div className="about-content">
        <p className="about-me-description">
          <br /><br /><br /><br />
          I am currently working as a <strong>Data & Application Migration Engineer</strong> at 
          <strong> Yoonefi Technology Solutions LLC</strong> 💼, where I contribute to the 
          <strong> stacX Platform</strong>, a cloud-native solution supporting nonprofit organizations. 
          My work focuses on <strong>building ETL pipelines with AWS Glue, S3, and RDS</strong>, enabling 
          migration from legacy systems to <strong>modern cloud data platforms</strong>. I also ensure  
          schema transformation, validation, and integration for scalable, multi-tenant applications.
          <br /><br />
          I recently earned my <strong>Master’s degree in Computer Science</strong> from the 
          <strong> University of Georgia</strong> 🎓, where I specialized in <strong>Machine Learning, 
          Federated Learning, and Data Engineering</strong>. As a <strong>Research Assistant</strong>, 
          I developed a <strong>hierarchical federated learning framework</strong> that improved convergence 
          time and reduced infrastructure costs, while also exploring client clustering and 
          gRPC-based communication for distributed training.
          <br /><br />
          During my <strong>Data Science Co-op at Resolution Life</strong> 💼, I designed automated pipelines 
          for both real-time and batch data using <strong>AWS Glue, Iceberg, and Lambda</strong>, improving 
          analytics-ready data availability by 35%. I also implemented <strong>CI/CD pipelines</strong> with 
          GitHub Actions and CodePipeline, reducing release cycles by 25%.
          <br /><br />
          Earlier in my career, I worked at <strong>Cognizant Technology Solutions</strong> 💼 as a 
          <strong> Associate Data Engineer</strong>, where I built <strong>event-driven ingestion frameworks, 
          data lakes, and fine-grained access controls</strong> using a wide range of AWS services. 
          These experiences helped me gain strong foundations in <strong>cloud platforms, big data, and automation</strong>.
          <br /><br />
          Looking forward, I am eager to contribute to projects in 
          <strong> Cloud Technologies, AI, and Machine Learning</strong>, combining my background in 
          <strong> data engineering and applied research</strong> to deliver scalable and intelligent solutions.
          <br /><br />
          Beyond my professional and academic life, I actively pursue creative and recreational activities that 
          help me stay balanced. I am passionate about <strong>Photography 📸, Reading Spiritual Books 📚, crafting 
          paper models ✂️, and playing badminton 🏸 and chess ♟️</strong>. These interests keep me grounded, 
          imaginative, and motivated to bring a fresh perspective to both my work and my life.
        </p>

        <div className="about-images">
          <img src={`${process.env.PUBLIC_URL}/images/camera.png`} alt="camera" />
          <img src={`${process.env.PUBLIC_URL}/images/grad.png`} alt="grad" />
          <img src={`${process.env.PUBLIC_URL}/images/book.png`} alt="book" />
          <img src={`${process.env.PUBLIC_URL}/images/badminton.png`} alt="badminton" />
          <img src={`${process.env.PUBLIC_URL}/images/chess.png`} alt="chess" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
