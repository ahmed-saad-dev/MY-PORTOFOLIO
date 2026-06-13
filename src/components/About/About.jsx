import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./About.css";


const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    const els = sectionRef.current?.querySelectorAll(".anim");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "1+",  label: "Year Experience" },
    { value: "10+", label: "Projects Built"  },
    { value: "MERN", label: "Core Stack"     },
  ];

  const chips = ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Git"];

  return (
    <section className="about" ref={sectionRef}>
      <div className="about-container">

        {/* ── LEFT ── */}
        <div className="about-left">

          <div className="about-avatar-wrap anim" style={{ "--d": "0s" }}>
            <div className="about-avatar">
              <span className="about-initials">AS</span>
            </div>
            <div className="about-status">
              <span className="about-dot" />
              Available for work
            </div>
          </div>

          <div className="about-stats anim" style={{ "--d": "0.1s" }}>
            {stats.map((s, i) => (
              <div className="about-stat" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="about-right">

          <p className="about-tag anim" style={{ "--d": "0.05s" }}>
            About Me
          </p>

          <h2 className="about-heading anim" style={{ "--d": "0.15s" }}>
            Building modern<br />web experiences.
          </h2>

          <div className="about-body anim" style={{ "--d": "0.25s" }}>
            <p>
              I'm <strong>Ahmed Saad</strong>, a Full-Stack Developer
              specializing in the <strong>MERN stack</strong>. I build fast,
              scalable, and modern web applications with clean architecture.
            </p>
            <p>
              I focus on clean code, smooth UI, and building products that feel
              professional and usable — from pixel-perfect frontends to
              well-structured APIs.
            </p>
          </div>

          <div className="about-chips anim" style={{ "--d": "0.35s" }}>
            {chips.map((t) => (
              <span className="about-chip" key={t}>{t}</span>
            ))}
          </div>

          <div className="about-actions anim" style={{ "--d": "0.45s" }}>
            <NavLink to="/contact" className="about-btn primary">
              Hire Me
            </NavLink>
            <a
              href="https://github.com/ahmed-saad-dev"
              target="_blank"
              rel="noreferrer"
              className="about-btn outline"
            >
              GitHub ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;