import React, { useRef } from 'react';
import useScrollAnimation from './useScrollAnimation';
import './CSS/prevwork.css';

const Project = ({ link, image, title, skills }) => (
  <div className="items">
    <div className="work-block">
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="overlay">Explore</div>
      </a>
      <img src={image} alt={title} />
    </div>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="skill">
      {skills.map((skill, index) => (
        <div key={index} className="skilltype">{skill}</div>
      ))}
    </div>
  </div>
);

const AreaOfExpertise = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef, 'fadeIn');

  const projects = [
    {
      link: "https://www.figma.com/design/SMa1yeVoEaXR9kXvtwKSMj/SEO-Portfolio?m=auto&t=oax5uXKgKxo0PKdb-1",
      image: "/img/SEO.png",
      title: "SEO Technical Writing - Hubspot",
      skills: ["SEO", "Figma", "Technical Writing"]
    },
    {
      link: "https://www.figma.com/design/wAS6HMS6iKKlAqexuNkyf7/(Ongoing)-Vet-Ping-Application?m=auto&t=oax5uXKgKxo0PKdb-1",
      image: "/img/vet.png",
      title: "Vet Ping - Local Project",
      skills: ["UI/UX", "Project Management", "Figma"]
    },
    {
      link: "https://www.figma.com/design/AsTEIOUqWzFZaZqxLUJMJJ/Dalan%3B-Wireframe-and-Design-Process?t=oax5uXKgKxo0PKdb-1",
      image: "/img/dalan.png",
      title: "Dalan; - StartUp Project ",
      skills: ["Project Management", "UI/UX Design", "Figma"]
    },
    {
      link: "https://www.figma.com/design/0YUYZnsL30Oq5h19LA1v0d/DAR-RFID-Login-Page?node-id=0-1&t=ayuYuVMAI7ZqAZ7v-1",
      image: "/img/rfid.png",
      title: "Internship - RFID Attendance",
      skills: ["Project Management", "UI/UX Design", "Front-End"]
    },
    {
      link: "https://pathsentinel-archived.web.app/",
      image: "/img/pathsentinel.png",
      title: "Thesis - PathSentinel",
      skills: ["Project Management", "UI/UX Design", "Front-End"]
    }
  ];

  return (
    <div id="add-port" className="work" ref={sectionRef}>
      <h1>Previous Projects</h1>
      <div className="work-content">
        <div className="work-cor0">
          {projects.map((project, index) => (
            <Project
              key={index}
              link={project.link}
              image={project.image}
              title={project.title}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaOfExpertise;
