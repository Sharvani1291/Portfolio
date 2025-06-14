// src/components/Projects.js
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Projects = () => {
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
          highlightColor: 0x8c4863,   // Plum highlight
          midtoneColor: 0x8c4863,     // Plum midtone
          lowlightColor: 0x3e1f2f,     // Deep maroon
          baseColor: 0x1e0f18,         // Almost black background
          blurFactor: 0.6,
          speed: 2.7,
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
    <section id="projects" ref={vantaRef}>
      <h1 className="projects_header">
        Projects <span className="projects-emoji">📚</span>
      </h1>
      <div className="projects-grid">
        {projectList.map((project, i) => (
          <motion.div
            className="project-box"
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-duration">{project.duration}</p>
              <ul className="project-description">
                {project.description.split('. ').map((sentence, idx) => (
                  <li key={idx}>{sentence.trim().replace(/\.$/, '')}.</li>
                ))}
              </ul>
              <p className="project-skills">
                <strong>Tools:</strong> {project.tools}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const projectList = [
  {
    title: 'SpotLight: Lightweight, Cost-efficient, Scalable FL on Edge and Transient Servers',
    duration: 'Sep 2023 - Apr 2025',
    description:
      'Developed a novel scalable hierarchical federated learning framework. Implemented robust fault tolerance mechanisms. Integrated asynchronous communication and strategic client selection.',
    tools:
      'Kubernetes, Python, PyTorch, FastAPI, Uvicorn, Celery, RabbitMQ, MongoDB, AWS Spot Instances, Machine Learning',
  },
  {
    title: 'RustFL: Secure and Asynchronous Federated Learning',
    duration: 'Aug 2024 - Nov 2024',
    description:
      'RustFL is a secure federated learning framework built in Rust. It enables asynchronous training while incorporating Differential Privacy and Secure Multiparty Computation. It ensures end-to-end confidentiality, secure model update aggregation, and efficient decentralized collaboration.',
    tools: 'Rust, PyTorch, Machine Learning, Docker',
  },
  {
    title: 'Performance Testing & Cost Effectiveness Analysis',
    duration: 'Aug 2023 - Dec 2023',
    description:
      'Spearheaded front-end development for a food delivery app. Conducted a comprehensive cost analysis comparing AWS and Azure for hosting services. Compared Amazon Web Services and Microsoft Azure.',
    tools: 'MySQL, HTML, CSS, Node.js, SASS, Laravel, Bootstrap, Flutter',
  },
  {
    title: 'Movie Ticket Booking Website',
    duration: 'Jan 2024 - Apr 2024',
    description:
      'Developed a web-based platform that allows users to search for movies, select seats, and book tickets online. Led the full stack development. Demonstrated front-end design and database management skills. Increased system robustness using Express.js in backend.',
    tools: 'React.js, PostgreSQL, Express.js',
  },
  {
    title: 'Decentralized Peer Registration and Discovery System',
    duration: 'Jan 2024 - May 2024',
    description:
      'Implemented a distributed peer-to-peer bootstrap mechanism using Java. Simulated a decentralized network system. Bootstrap Server manages node registration. Normal Server handles dynamic joining and message exchange between peers. Demonstrates scalable node coordination and real-time server-to-server communication.',
    tools: 'Java, Socket Programming, Multi-threading, Distributed Systems',
  },
  {
    title: 'DNS Firewall: Blocking & Forwarding via DoH',
    duration: 'Aug 2024 - Dec 2024',
    description:
      'Developed a high-performance DNS forwarder in C that supports traditional DNS as well as DNS-over-HTTPS (DoH). Integrated a configurable domain deny list to block malicious or restricted queries by responding with NXDOMAIN. Built logging and domain parsing from raw packets. Included optional DoH forwarding using libcurl and OpenSSL. Enforces real-time DNS filtering and secure forwarding.',
    tools: 'C, libcurl, OpenSSL, Socket Programming, DNS Protocol, Python, Wireshark',
  },
  {
    title: 'Silver Screener: Dynamic Movie Reservation System with Full-Stack Implementation',
    duration: 'Aug 2023 – Dec 2023',
    description:
      'Designed and developed a dynamic movie booking web application. Supports user registration, seat selection, booking, payment processing, and cancellations. Focused on building normalized relational schemas. Enforced functional dependencies. Deployed via JSP and Servlets on Apache Tomcat. Integrated 3NF and BCNF decomposition for schema optimization. Ensured robust modular design through UML and relational modeling.',
    tools: 'Java, JSP, Servlets, MySQL, HTML, CSS, JavaScript, Apache Tomcat, Maven',
  },
  {
    title: 'Real-time Video Enhancement using Camera Response Model',
    duration: 'Jan 2020 - May 2020',
    description:
      'Proposed an efficient method for real-time video enhancement. Addressed the camera\'s non-linear process using the Camera Response Function (CRF). Reduced distortion and increased processing speed. Introduced a novel approach to improve video quality in low-light environments. Optimized camera parameters and reduced noise.',
    tools: 'Arduino Uno, Digital Image Processing, MATLAB, Video Processing',
  },
];

export default Projects;
