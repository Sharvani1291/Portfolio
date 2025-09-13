// src/components/Work.js
import React, { useEffect, useRef } from 'react';
import './Work.css';

const Work = () => {
  const sectionRef = useRef(null);
  const vantaEffectRef = useRef(null);


  const calculateDuration = (startDateStr, endDateStr = new Date()) => {
    const startDate = new Date(startDateStr);
    const endDateObj = new Date(endDateStr);

    let months =
      (endDateObj.getFullYear() - startDate.getFullYear()) * 12 +
      (endDateObj.getMonth() - startDate.getMonth());

    if (endDateObj.getDate() < startDate.getDate()) {
      months--; 
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0) {
      return remainingMonths > 0
        ? `${years} yr ${remainingMonths} mos`
        : `${years} yr${years > 1 ? 's' : ''}`;
    }
    return `${months} mos`;
  };

  useEffect(() => {
    const loadVanta = async () => {
      if (!window.THREE) {
        const threeScript = document.createElement('script');
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
        threeScript.async = true;
        document.body.appendChild(threeScript);
        await new Promise((resolve) => (threeScript.onload = resolve));
      }

      if (!window.VANTA || !window.VANTA.NET) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
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
    const items = document.querySelectorAll('.experience-details');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stop once visible
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);


  const experienceData = [
    {
      company: 'Yoonefi Technology Solutions LLC',
      title: 'Data & Application Migration Engineer',
      period: 'Sep 2025 - Present',
      startDate: '2025-09-01',
      endDate: null,
      descriptions: [
        'Contributing to the end-to-end development and modernization of the stacX Platform, a cloud-native solution tailored to support nonprofit organizations data and infrastructure needs.',
        'Designing and building robust ETL pipelines leveraging AWS Glue, Amazon S3, and Amazon RDS, facilitating seamless data migration from on-premise relational systems to scalable, cloud-first architectures.',
        'Implementing schema transformation, data validation, and integration frameworks to ensure the accuracy, consistency, and readiness of data across regional and multi-tenant applications.',
        'Collaborating with cross-functional teams to optimize data workflows for scalability and performance in a distributed cloud environment.',
      ],
      direction: 'left',
    },
    {
      company: 'Resolution Life',
      title: 'Data Science Co-op',
      period: 'Aug 2024 - May 2025',
      startDate: '2024-08-01',
      endDate: '2025-05-01',
      descriptions: [
        'Architected and deployed automated, end-to-end ETL pipelines for both real-time and batch data processing using AWS Glue, Apache Iceberg, Step Functions, and Lambda.',
        'Developed scalable ingestion workflows capable of unifying structured (RDBMS, CSV) and unstructured (JSON, logs) data, leading to a 35% increase in analytics-ready data availability and significantly reduced manual overhead.',
        'Integrated CI/CD pipelines using AWS CodePipeline and GitHub Actions, enabling automated deployment, testing, and monitoring of data workflows cutting release cycles by 25%.',
        'Engineered high-performance data lakes with optimized Iceberg tables, leveraging partitioning and compaction strategies to improve data retrieval and storage efficiency.',
        'Enforced robust data quality frameworks using custom validation layers, enhancing trust in enterprise-wide reporting and analytics.',
      ],
      direction: 'right',
    },
    {
      company: 'UGA School of Computing',
      title: 'Research Assistant',
      period: 'Aug 2023 - May 2025',
      startDate: '2023-08-01',
      endDate: '2025-05-01',
      descriptions: [
        'Designed and implemented a cost-efficient, fault-tolerant hierarchical federated learning framework using transient VMs, asynchronous communication, and spot instances achieving a 20% reduction in convergence time and over 40% infrastructure cost savings.',
        'Developed the SpotLight system, a novel client clustering mechanism that grouped similar nodes based on bandwidth and availability for better aggregation efficiency.',
        'Integrated gRPC-based communication protocols, achieving up to 7x improvement in communication speed during training phases across geographically distributed clients.',
        'Conducted comparative evaluations against state-of-the-art methods (FedAvg, FedSEA), demonstrating superior performance under simulated straggler and bandwidth-limited conditions.',
      ],
      direction: 'left',
    },
    {
      company: 'Cognizant Technology Solutions',
      title: 'Associate - Data Engineer',
      period: 'Dec 2020 - Jul 2023',
      startDate: '2020-12-01',
      endDate: '2023-07-01',
      descriptions: [
        'Led the development of an event-driven data lake ingestion framework, ingesting data from multiple source systems, applying transformations using PySpark, and cataloging processed datasets via AWS Glue for downstream analytics.',
        'Built and managed a scalable data lake architecture using services like S3, DynamoDB, Redshift, and Athena, significantly improving data accessibility and BI capabilities for enterprise stakeholders.',
        'Designed secure, fine-grained access controls using AWS Lake Formation, ensuring compliance with data governance and privacy standards.',
        'Orchestrated and automated complex data workflows using AWS Step Functions, Lambda, and EventBridge, enabling real-time and batch data processing with minimal latency.',
        'Developed and maintained CI/CD pipelines for data infrastructure using Git, Jenkins, and CloudFormation, improving deployment velocity and reducing human error in production environments.',
        'Acted as a key contributor in cross-functional Agile teams, collaborating with data scientists, analysts, and architects to deliver production-ready solutions for high-impact business problems.',
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
                src={`${process.env.PUBLIC_URL}/images/worklogo.png`}
                alt="Company Logo"
                className="company-logo"
              />
            </div>

            <div className="experience-details">
              <div className="company-name">{exp.company}</div>
              <div className="position-title">{exp.title}</div>
              <div className="work-duration">
                <span className="start-date">{exp.period}</span> ·{' '}
                <span className="duration">
                  {calculateDuration(exp.startDate, exp.endDate || new Date())}
                </span>
              </div>

              <div className="description-container">
                <ul>
                  {exp.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
