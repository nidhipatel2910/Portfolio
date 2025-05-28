import React, { useState } from 'react';
import appStyles from '../../App.module.css';
import styles from './Skills.module.css';

const skillData = [
  {
    title: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST API']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman']
  }
];

const Skills = () => {
  const [open, setOpen] = useState([false, false, false]);

  const toggle = idx => {
    setOpen(open.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section id="skills" className={appStyles.sectionWrapper}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillData.map((card, idx) => (
          <div className={styles.skillCard} key={card.title}>
            <button
              className={styles.cardHeader}
              onClick={() => toggle(idx)}
              aria-expanded={open[idx]}
            >
              <span>{card.title}</span>
              <span className={open[idx] ? styles.arrowUp : styles.arrowDown}>▼</span>
            </button>
            <div
              className={`${styles.cardContent} ${open[idx] ? styles.open : ''}`}
              style={{ maxHeight: open[idx] ? '300px' : '0px' }}
            >
              <ul>
                {card.skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;