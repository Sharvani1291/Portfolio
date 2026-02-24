import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const normalizeBullets = (project = {}) => {
  if (Array.isArray(project.descriptionBullets)) {
    return project.descriptionBullets.filter(Boolean);
  }
  if (typeof project.description === 'string') {
    return project.description
      .split('. ')
      .map((s) => s.trim().replace(/\.$/, ''))
      .filter(Boolean)
      .map((s) => `${s}.`);
  }
  return [];
};

const normalizeTools = (project = {}) => {
  if (Array.isArray(project.tools)) return project.tools.filter(Boolean);
  if (typeof project.tools === 'string') {
    return project.tools
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
};

const Projects = ({ projects = [] }) => {
  const sectionRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let scriptEl;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.FOG && !vantaEffectRef.current) {
        vantaEffectRef.current = window.VANTA.FOG({
          el: sectionRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x8c4863,
          midtoneColor: 0x8c4863,
          lowlightColor: 0x3e1f2f,
          baseColor: 0x1e0f18,
          blurFactor: 0.6,
          speed: 1.5,
          zoom: 0.9,
        });
      }
    };

    if (!window.VANTA || !window.VANTA.FOG) {
      scriptEl = document.createElement('script');
      scriptEl.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js';
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

    const syncVantaSize = () => {
      vantaEffectRef.current?.resize?.();
    };

    syncVantaSize();
    const t1 = setTimeout(syncVantaSize, 120);
    const t2 = setTimeout(syncVantaSize, 320);

    window.addEventListener('resize', syncVantaSize);

    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(syncVantaSize);
      if (sectionRef.current) ro.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', syncVantaSize);
      if (ro) ro.disconnect();
    };
  }, [projects]);

  const safeProjects = Array.isArray(projects) ? projects : [];

  return (
    <section id="projects" ref={sectionRef}>
      <h1 className="projects_header">
        Projects <span className="projects-emoji">📚</span>
      </h1>

      <div className="projects-grid">
        {safeProjects.map((project, i) => {
          const bullets = normalizeBullets(project).slice(0, 4);
          const tools = normalizeTools(project).slice(0, 8);

          return (
            <motion.div
              className="project-box"
              key={`${project.title || 'project'}-${i}`}
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
                  {(bullets.length ? bullets : ['Details coming soon.']).map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>

                <div className="project-skills">
                  {tools.map((tool, idx) => (
                    <span key={idx}>{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
