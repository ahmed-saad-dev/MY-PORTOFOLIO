import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const contacts = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "ahmedsaaddawoud8@gmail.com",
    href: "mailto:ahmedsaaddawoud8@gmail.com",
    color: "var(--c-email)",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+20 155 828 1723",
    href: "https://wa.me/201558281723",
    target: "_blank",
    color: "var(--c-wa)",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "ahmed-saad-dev",
    href: "https://github.com/ahmed-saad-dev",
    target: "_blank",
    color: "var(--c-gh)",
  },
];

const Contact = () => {
  return (
    <section className="cp">
      <div className="cp-wrap">

        {/* heading */}
        <div className="cp-head">
          <h1 className="cp-h1">Let's <span>talk.</span></h1>
          <span ></span>
          <span ></span>
          <span ></span>
          <span ></span>
          <span ></span>
          
        </div>

        {/* cards */}
        <div className="cp-cards">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.target}
              rel={c.target ? "noreferrer" : undefined}
              className="cp-card"
              style={{ "--accent": c.color }}
            >
              <span className="cp-card-icon">{c.icon}</span>
              <div className="cp-card-info">
                <span className="cp-card-label">{c.label}</span>
                <span className="cp-card-value">{c.value}</span>
              </div>
              <span className="cp-card-chip">Open ↗</span>
            </a>
          ))}
        </div>

        {/* footer note */}
        <p className="cp-note">Usually responds within a few hours.</p>
      </div>
    </section>
  );
};

export default Contact;