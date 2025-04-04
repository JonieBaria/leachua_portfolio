import React from "react";
import { useState } from "react";
import { FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa";
import "./styles.css";

const projects = [
  {
    title: "E-Commerce Branding",
    description:
      "Designed a complete branding package for an online store, including logo, packaging, and UI elements.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Social Media Graphics",
    description:
      "Created engaging social media graphics for marketing campaigns.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Product UI/UX",
    description: "Developed UI/UX design for a fashion retail app.",
    image: "https://via.placeholder.com/300",
  },
];

export default function Portfolio() {
  return (
    <div className="container">
      <header className="header">
        <h1>Lea Danica Chua</h1>
        <p>Graphic Designer | E-Commerce | Branding</p>
      </header>

      <section className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <a href="#">
          <FaBehance /> Behance
        </a>
        <a href="#">
          <FaDribbble /> Dribbble
        </a>
        <a href="#">
          <FaLinkedin /> LinkedIn
        </a>
      </footer>
    </div>
  );
}
