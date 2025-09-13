import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["python", "java", "html", "css", "javascript", "rust"],
    format: (name) => name.charAt(0).toUpperCase() + name.slice(1),
  },
  {
    category: "Technologies & Platforms",
    items: ["aws", "azure", "gcp", "bigdata", "federated-learning"],
    format: (name) => name.replace("-", " "),
  },
  {
    category: "Development Tools & Frameworks",
    items: [
      "vscode",
      "intellij",
      "eclipse",
      "jenkins",
      "jira",
      "confluence",
      "cicd",
      "github",
      "kubernetes",
      "docker",
      "fastapi",
      "grpc",
      "androidstudio",
    ],
    format: (name) => name,
  },
  {
    category: "Databases",
    items: ["sql", "postgresql", "mongodb"],
    format: (name) => name,
  },
  {
    category: "Machine Learning Frameworks & Tools",
    items: ["tensorflow", "pytorch", "pandas", "numpy"],
    format: (name) => name.charAt(0).toUpperCase() + name.slice(1),
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = sectionRef.current.querySelectorAll("[data-skill]");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 100);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js";
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
          speed: 2.0,
          zoom: 0.9,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (vantaEffectRef.current) vantaEffectRef.current.destroy();
    };
  }, []);

  return (
    <section id="skills" ref={vantaRef}>
      <div ref={sectionRef}>
        <h1 className="skills_header">
          My Skills <span className="skills-emoji">⚙️</span>
        </h1>

        <div className="skills-container">
          {skillsData.map(({ category, items, format }, index) => (
            <div key={index} className="category">
              <h4>{category}</h4>
              <div className="skills-grid">
                {items.map((item, i) => (
                  <div
                    className="skill-card"
                    key={item}
                    data-skill
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${item}.png`}
                      alt={item}
                    />
                    <p>{format(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
