import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img1.png";
import {
  FaArrowRight,
  FaDownload,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <div className="absolute-glow glow-1"></div>
      <div className="absolute-glow glow-2"></div>

      <div className="hero-container">

        {/* ── LEFT ── */}
        <div className="home-card">

          <p className="home-small-text">MERN Stack Engineer</p>

          <h1 className="home-name">
            Ahmed <span className="name-accent">Saad</span>
          </h1>

          <h2 className="home-title">
            Building Modern Web Experiences
          </h2>

          <p className="home-bio">
            I'm a <strong>Full-Stack MERN Developer</strong> passionate about
            building fast, scalable, and modern web applications.
            I work across the full stack — from <strong>React</strong> frontends
            to <strong>Node.js / Express</strong> APIs and <strong>MongoDB</strong> databases —
            turning ideas into clean, production-ready digital products.
          </p>

          <div className="quick-tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
            <span>JavaScript</span>
          </div>

          <div className="home-buttons">
            <Link to="/projects" className="home-btn home-primary">
              View Projects
              <FaArrowRight className="btn-icon" />
            </Link>
            <a
              href="/Ahmed-Saad-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="home-btn home-outline"
            >
              <FaDownload className="btn-icon" />
              Download CV
            </a>
            <a
              href="https://github.com/ahmed-saad-dev"
              target="_blank"
              rel="noreferrer"
              className="home-btn social-btn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-saad-598372369"
              target="_blank"
              rel="noreferrer"
              className="home-btn social-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>10+</h3>
              <span>Projects Built</span>
            </div>
            <div className="stat">
              <h3>2+</h3>
              <span>Years Learning</span>
            </div>
            <div className="stat">
              <h3>MERN</h3>
              <span>Core Stack</span>
            </div>
          </div>

          <div className="home-email">
            <FaEnvelope className="email-icon" />
            <a href="mailto:ahmedsaaddawoud18@gmail.com">
              ahmedsaaddawoud18@gmail.com
            </a>
          </div>

        </div>

        {/* ── RIGHT ── */}
        <div className="hero-image">
          <div className="profile-wrapper">
            <img src={img} alt="Ahmed Saad — MERN Stack Developer" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;