import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const fadeInCert = {
  hidden: { opacity: 0, y: 30 },
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

const Certifications = () => {
  const certificates = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      org: 'Amazon Web Services',
      issuedDate: 'Jan 2024',
      expiryDate: 'Jan 2027',
      link: 'https://www.credly.com/badges/eddf5dc4-643d-478c-bdb2-13c5e2ce434d/linked_in?t=s6xdvq',
      image: `${process.env.PUBLIC_URL}/images/certificate.png`,
    },
    // Add more certificates if needed
  ];

  return (
    <section id="certifications">
      <h1 className="section-header">
        Certifications <span className="certificate-emoji">📜</span>
      </h1>
      <div className="cert-container">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            custom={index}
            variants={fadeInCert}
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
    </section>
  );
};

export default Certifications;
