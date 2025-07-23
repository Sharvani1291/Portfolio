// src/components/Work.js
import React, { useEffect, useRef } from 'react';
import './Work.css';

const Work = () => {
  const sectionRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (!window.VANTA || !window.VANTA.NET) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js';
        script.async = true;
        script.onload = () => {
          if (window.VANTA && !vantaEffectRef.current) {
            vantaEffectRef.current = window.VANTA.NET({
              el: sectionRef.current,
              color: 0x8c4863,           
              backgroundColor: 0xf5f5dc,  
              points: 10.0,
              maxDistance: 25.0,
              spacing: 18.0,
              showDots: false,
              mouseControls: true,
              touchControls: true,
              scale: 1.0,
              scaleMobile: 1.0,
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const items = section?.querySelectorAll('.experience-details') || [];

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 400);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experienceData = [
    {
      logo: 'RLUS.png',
      alt: 'Resolution Life Logo',
      company: 'Resolution Life',
      title: 'Data Science Co-op',
      period: 'Aug 2024 - May 2025',
      duration: '10 mos',
      descriptions: [
        'Collaborated with BAs and Architects on data-driven enterprise solutions.',
        'Developed real-time analytical workflows using AWS Glue, Lambda, and Step Functions.',
        'Built scalable ETL pipelines with Apache Iceberg and Delta Lake for batch and streaming workloads.',
      ],
      direction: 'right',
    },
    {
      logo: 'school.png',
      alt: 'UGA School of Computing Logo',
      company: 'UGA School of Computing',
      title: 'Research Assistant',
      period: 'Aug 2023 - May 2025',
      duration: '1yr 10mos',
      descriptions: [
        'Developed a scalable federated learning framework leveraging transient VMs and fault recovery.',
        'Led the SpotLight system for client clustering and bandwidth-aware aggregation.',
        'Achieved superior results compared to FedAvg and FedSEA on straggler-simulated benchmarks.',
      ],
      direction: 'left',
    },
    {
      logo: 'CTS.png',
      alt: 'Cognizant Logo',
      company: 'Cognizant',
      title: 'Associate - Data Engineer',
      period: 'Dec 2020 - Jul 2023',
      duration: '2 yrs 8 mos',
      descriptions: [
        'Led data engineering projects improving BI via AWS services.',
        'Built ETL pipelines with AWS Glue, S3, DynamoDB, Athena, and Lambda.',
        'Designed real-time event-driven architectures using Step Functions and EventBridge.',
        'Enabled enterprise-wide data automation and integration.',
      ],
      direction: 'right',
    },
  ];

  return (
    <section id="work" ref={sectionRef}>
      <h1 className="section-header">
        Experience <span className="experience-emoji">💼</span>
      </h1>

      <div className="content-wrapper">
        {experienceData.map((exp, idx) => (
          <div key={idx} className={`experience-item ${exp.direction}`}>
            <div className="logo-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/images/${exp.logo}`}
                alt={exp.alt}
                className="company-logo"
              />
            </div>

            <div className="experience-details">
              <div className="company-name">{exp.company}</div>
              <div className="position-title">{exp.title}</div>
              <div className="work-duration">
                <span className="start-date">{exp.period}</span> ·{' '}
                <span className="duration">{exp.duration}</span>
              </div>

              <div className="description-container">
                <div className={`description-box-${idx}`}>
                  <ul>
                    {exp.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
