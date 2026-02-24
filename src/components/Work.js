import React, { useEffect, useRef } from 'react';
import './Work.css';

const formatMonthYear = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const calculateDuration = (startDateStr, endDateStr = new Date()) => {
  if (!startDateStr) return '';
  const startDate = new Date(`${startDateStr}T00:00:00`);
  const endDateObj = new Date(endDateStr);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDateObj.getTime())) return '';

  let months =
    (endDateObj.getFullYear() - startDate.getFullYear()) * 12 +
    (endDateObj.getMonth() - startDate.getMonth());

  if (endDateObj.getDate() < startDate.getDate()) months--;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0) {
    return remainingMonths > 0 ? `${years} yr ${remainingMonths} mos` : `${years} yr${years > 1 ? 's' : ''}`;
  }
  return `${Math.max(months, 0)} mos`;
};

const waitFor = (predicate, timeoutMs = 10000) =>
  new Promise((resolve, reject) => {
    const start = Date.now();

    const tick = () => {
      if (predicate()) {
        resolve();
        return;
      }

      if (Date.now() - start >= timeoutMs) {
        reject(new Error('Timed out while loading script'));
        return;
      }

      setTimeout(tick, 50);
    };

    tick();
  });

const ensureScript = async (src, predicate) => {
  if (predicate()) return;

  if (!document.querySelector(`script[src="${src}"]`)) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }

  await waitFor(predicate);
};

const Work = ({ experiences = [] }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let resizeObserver = null;
    let t1 = null;
    let t2 = null;

    const resizeVanta = () => {
      vantaEffectRef.current?.resize?.();
    };

    const initVanta = async () => {
      try {
        await ensureScript(
          'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js',
          () => Boolean(window.THREE)
        );

        await ensureScript(
          'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js',
          () => Boolean(window.VANTA && window.VANTA.NET)
        );

        if (!isMounted || !sectionRef.current) return;

        if (vantaEffectRef.current) {
          vantaEffectRef.current.destroy();
        }

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

        resizeVanta();
        t1 = setTimeout(resizeVanta, 120);
        t2 = setTimeout(resizeVanta, 350);

        window.addEventListener('resize', resizeVanta);

        if (window.ResizeObserver) {
          resizeObserver = new ResizeObserver(resizeVanta);
          if (sectionRef.current) resizeObserver.observe(sectionRef.current);
          if (contentRef.current) resizeObserver.observe(contentRef.current);
        }
      } catch (error) {
        console.error('Vanta initialization failed in Work section:', error);
      }
    };

    initVanta();

    return () => {
      isMounted = false;
      window.removeEventListener('resize', resizeVanta);
      if (resizeObserver) resizeObserver.disconnect();
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);

      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => vantaEffectRef.current?.resize?.(), 80);
    const t2 = setTimeout(() => vantaEffectRef.current?.resize?.(), 240);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [experiences]);

  useEffect(() => {
    const items = sectionRef.current
      ? sectionRef.current.querySelectorAll('.experience-details')
      : [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, [experiences]);

  const safeExperiences = Array.isArray(experiences) ? experiences : [];

  return (
    <section id="work" ref={sectionRef}>
      <h1 className="section-header">
        Experience <span className="experience-emoji">💼</span>
      </h1>

      <div className="content-wrapper" ref={contentRef}>
        {safeExperiences.map((exp, idx) => {
          const isCurrent = Boolean(exp.isCurrent) || !exp.endDate;
          const period =
            exp.periodLabel ||
            `${formatMonthYear(exp.startDate)} - ${isCurrent ? 'Present' : formatMonthYear(exp.endDate)}`;
          const duration = calculateDuration(exp.startDate, isCurrent ? new Date() : exp.endDate);
          const direction = exp.direction || (idx % 2 === 0 ? 'left' : 'right');

          return (
            <div key={`${exp.company}-${idx}`} className={`experience-item ${direction}`}>
              <div className="logo-wrapper">
                <img
                  src={exp.logoUrl || `${process.env.PUBLIC_URL}/images/worklogo.png`}
                  alt={`${exp.company || 'Company'} logo`}
                  className="company-logo"
                />
              </div>

              <div className="experience-details">
                <div className="company-name">{exp.company}</div>
                <div className="position-title">{exp.title}</div>
                <div className="work-duration">
                  <span className="start-date">{period}</span>
                  {duration ? (
                    <>
                      {' '}
                      · <span className="duration">{duration}</span>
                    </>
                  ) : null}
                </div>

                <div className="description-container">
                  <ul>
                    {(exp.descriptions || []).map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
