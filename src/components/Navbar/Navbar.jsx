import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const handleResize = () => {
      if (window.innerWidth > 992) closeMenu();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  const contactClass = ({ isActive }) =>
    `contact-btn${isActive ? " active" : ""}`;

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <div className="logo-mark">&lt;/&gt;</div>
          <div className="logo-content">
            <span className="logo-name">Ahmed Saad</span>
            <span className="logo-role">MERN stack Developer </span>
          </div>
        </NavLink>

        {/* NAVIGATION */}
        <nav className="nav-links">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        </nav>

        {/* RIGHT SIDE (Desktop) */}
        <div className="navbar-actions">
         <a
   href="https://github.com/ahmed-saad-dev/AHMED-SAAD.git"
  target="_blank"
  rel="noreferrer"
  className="social-link"
  aria-label="GitHub"
>
  <FaGithub />
</a>
          <a
           href="https://www.linkedin.com/in/ahmed-saad-598372369"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="/Ahmed-Saad-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            <FaFileDownload />
            <span>Resume</span>
          </a>
          <NavLink to="/contact" className={contactClass}>Contact</NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <nav className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        <div className="mobile-panel-inner">
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/skills" className={linkClass} onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>

          <div className="mobile-divider"></div>

          <div className="mobile-actions">
            <a
              href="/Ahmed-Saad-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mobile-resume"
            >
              <FaFileDownload /> Download CV
            </a>
            <div className="mobile-socials">
              <a
                href="https://github.com/ahmed-saad-dev/AHMED-SAAD.git"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
              href="https://www.linkedin.com/in/ahmed-saad-598372369"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;