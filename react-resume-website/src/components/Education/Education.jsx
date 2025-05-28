import React from 'react';
import appStyles from '../../App.module.css';
import styles from './Education.module.css';

const education = [
  {
    degree: "Computer Software & Database Development",
    institution: "Loyalist College, Canada",
    period: "May 2024 - Dec 2025"
  },
  {
    degree: "Bachelor’s in Information Technology",
    institution: "Gujrat University, India",
    period: "July 2018 – June 2022"
  }
];

const Education = () => (
  <section id="education" className={appStyles.sectionWrapper}>
    <h2 className={styles.sectionTitle}>Education</h2>
    <div className={styles.educationList}>
      {education.map((edu, idx) => (
        <div className={styles.educationCard} key={idx}>
          <div className={styles.degree}>{edu.degree}</div>
          <div className={styles.institution}>{edu.institution}</div>
          <div className={styles.period}>{edu.period}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;