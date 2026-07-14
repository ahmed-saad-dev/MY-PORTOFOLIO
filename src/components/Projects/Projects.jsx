import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";
import "./Projects.css";

// 👇 حط صورة سكرين شوت من موقع EGZone هنا
// المسار ده بيفترض إن الصورة في src/assets/projects/egzone.png
import egzoneImg from "../../assets/egzone.png";

// Add / edit projects here as the portfolio grows
const PROJECTS = [
  {
    id: "egzone",
    title: "EGZone — E-Commerce Platform",
    description:
      "A full-stack e-commerce platform (MERN Stack) featuring live product search, cart & wishlist, notifications, and a fully responsive UI.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://graduation-project-five-chi.vercel.app/",
    codeUrl: "https://github.com/ahmed-saad-dev/E-Commerce.git",
    image: egzoneImg,
    icon: <FaShoppingCart />,
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Back link to home */}
        <Link to="/" className="back-link">
          <FaArrowLeft /> Home
        </Link>

        {/* Header */}
        <div className="projects-header">
          <span className="eyebrow">Portfolio</span>
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of projects I've worked on, most notably EGZone — a full-featured e-commerce platform.
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className="project-card">
              <div className="card-banner">
                <img src={p.image} alt={p.title} className="card-banner-img" />
                <span className="card-icon">{p.icon}</span>
              </div>

              <div className="card-body">
                <h2 className="card-title">{p.title}</h2>
                <p className="card-desc">{p.description}</p>

                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-btn"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}