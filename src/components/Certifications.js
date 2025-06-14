// src/components/Certifications.js
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const flipInCert = {
  hidden: { opacity: 0, rotateY: 90, transformOrigin: 'left center', perspective: 1000 },
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    transformOrigin: 'left center',
    perspective: 1000,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Certifications = () => {
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
          maxDistance: 20.0,
          spacing: 15.0,
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

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      org: 'Amazon Web Services',
      issuedDate: 'Jan 2024',
      expiryDate: 'Jan 2027',
      link: 'https://www.credly.com/badges/eddf5dc4-643d-478c-bdb2-13c5e2ce434d/linked_in?t=s6xdvq',
      image: `${process.env.PUBLIC_URL}/images/certificate.png`,
    },
  ];

  return (
    <section id="certifications" ref={vantaRef}>
      <h1 className="section-header">
        Certifications <span className="certificate-emoji">📜</span>
      </h1>
      <div className="cert-center-wrapper">
        <div className="cert-container">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              custom={index}
              variants={flipInCert}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="cert-card-left">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
              <div className="cert-card-right">
                <h3>{cert.title}</h3>
                <p className="org-name">{cert.org}</p>
                <span>Issued: {cert.issuedDate}</span>
                <span>Valid Till: {cert.expiryDate}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link-box"
                >
                  Link
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
