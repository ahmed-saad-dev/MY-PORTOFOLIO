import React from "react";
import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React",       icon: <FaReact />,       color: "#61DBFB" },
      { name: "Next.js",     icon: <SiNextdotjs />,   color: "#ffffff" },
      { name: "JavaScript",  icon: <SiJavascript />,  color: "#F7DF1E" },
      { name: "TypeScript",  icon: <SiTypescript />,  color: "#3178C6" },
      { name: "Redux",       icon: <SiRedux />,       color: "#764ABC" },
      { name: "Tailwind",    icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "HTML5",       icon: <FaHtml5 />,       color: "#E34F26" },
      { name: "CSS3",        icon: <FaCss3Alt />,     color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js",  icon: <FaNodeJs />,    color: "#68A063" },
      { name: "Express",  icon: <SiExpress />,   color: "#ffffff" },
      { name: "MongoDB",  icon: <SiMongodb />,   color: "#47A248" },
      { name: "Firebase", icon: <SiFirebase />,  color: "#FFCA28" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git",    icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { name: "Figma",  icon: <FaFigma />,  color: "#F24E1E" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function Skills() {
  return (
    <section className="skills">
      <div className="top-blur" />
      <div className="bottom-blur" />

      <div className="container">

        <motion.div
          className="title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <span>MY EXPERTISE</span>
          <h2>Skills &amp; Technologies</h2>
        </motion.div>

        {skillGroups.map((group, i) => (
          <div className="group" key={i}>

            <motion.div
              className="group-head"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h3>{group.title}</h3>
              <div className="line" />
            </motion.div>

            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {group.skills.map((skill, index) => (
                <motion.div
                  className="card"
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  style={{ "--clr": skill.color }}
                >
                  <div className="glow" />
                  <div className="icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        ))}

      </div>
    </section>
  );
}