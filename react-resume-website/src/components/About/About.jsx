import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import appStyles from '../../App.module.css';
import styles from './About.module.css';

const About = () => (
  <section id="about" className={appStyles.sectionWrapper}>
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <div className={styles.greeting}>
          Hi There! <span className={styles.wave}>👋</span>
        </div>
        <div className={styles.name}>
          I'M <span className={styles.highlight}>NIDHI PATEL</span>
        </div>
        <div className={styles.typing}>
          <span>
            <Typewriter
              words={['Software Developer', 'Software Developer', 'java Developer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/assets/coding-illustration.png" alt="Coding Illustration" />
      </div>
    </div>
  </section>
);

export default About;