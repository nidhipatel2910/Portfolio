import React from 'react';
import appStyles from '../../App.module.css';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    image: "/assets/project1.png",
    links: [
      { label: "GitHub", url: "https://github.com/nidhipatel2910/Portfolio" },
      { }
    ]
  },
  {
    title: "Task Manager App",
    description: "A full-stack task manager app with user authentication and CRUD features.",
    image: "/assets/project2.png",
    links: [
      { label: "GitHub", url: "https://github.com/nidhipatel2910/task_mng" }
    ]
  },
  {
    title: "OfficeTimeline",
    description: "A React app that displays project timelines and Gantt charts for managing tasks efficiently.",
    image: "/assets/project3.png",
    links: [
      { label: "GitHub", url: "https://github.com/yourusername/weather-dashboard" }
    ]
  }
];

const Projects = () => (
  <section id="projects" className={appStyles.sectionWrapper}>
    <h2 className={styles.sectionTitle}>Projects</h2>
    <div className={styles.projectsGrid}>
      {projects.map((project, idx) => (
        <div className={styles.projectCard} key={idx}>
          <div className={styles.projectImage}>
            <div className={styles.projectImageInner}>
              <img src={project.image} alt={project.title} />
            </div>
          </div>
          <div className={styles.projectContent}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectDesc}>{project.description}</div>
            <div className={styles.projectLinks}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;