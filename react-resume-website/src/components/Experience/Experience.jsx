import React from 'react';
import appStyles from '../../App.module.css';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Quality Assurance Tester",
    company: "Tatvasoft",
    period: "Jun 2022 - Aug 2023",
    description: "Worked on end-to-end testing for web applications. Improved product quality by identifying critical issues and collaborated with cross-functional teams."
  },
  {
    role: "Web Developer",
    company: "tatvasoft",
    period: "Jan 2022 - May 2022",
    description: "Developed responsive websites and contributed to UI/UX improvements for client projects."
  }
];

const Experience = () => (
  <section id="experience" className={appStyles.sectionWrapper}>
    <h2 className={styles.sectionTitle}>Experience</h2>
    <div className={styles.experienceList}>
      {experiences.map((exp, idx) => (
        <div className={styles.experienceCard} key={idx}>
          <div className={styles.role}>{exp.role}</div>
          <div className={styles.company}>{exp.company}</div>
          <div className={styles.period}>{exp.period}</div>
          <div className={styles.description}>{exp.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;