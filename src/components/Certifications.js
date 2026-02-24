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
      delay: i * 0.25,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Certifications = ({ certifications = [] }) => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let scriptEl;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.NET && !vantaEffectRef.current) {
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

    if (!window.VANTA || !window.VANTA.NET) {
      scriptEl = document.createElement('script');
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js';
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

    const resize = () => vantaEffectRef.current?.resize?.();
    resize();

    const t1 = setTimeout(resize, 120);
    const t2 = setTimeout(resize, 300);

    window.addEventListener('resize', resize);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', resize);
    };
  }, [certifications]);

  const safeCertifications = Array.isArray(certifications) ? certifications : [];

  return (
    <section id="certifications" ref={vantaRef}>
      <h1 className="section-header">
        Certifications <span className="certificate-emoji">📜</span>
      </h1>

      <div className="cert-center-wrapper">
        <div className="cert-container">
          {safeCertifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              className="cert-card"
              custom={index}
              variants={flipInCert}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="cert-card-left">
                <img
                  src={cert.imageUrl || `${process.env.PUBLIC_URL}/images/certificate.png`}
                  alt={cert.title}
                  className="cert-image"
                />
              </div>

              <div className="cert-card-right">
                <h3>{cert.title}</h3>
                <p className="org-name">{cert.org}</p>
                <span>Issued: {cert.issuedDate}</span>
                <span>Valid Till: {cert.expiryDate}</span>

                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link-box">
                    Link
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
