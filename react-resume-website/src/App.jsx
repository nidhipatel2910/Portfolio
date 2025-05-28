import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

function App() {
  const [dark, setDark] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  const handleDownloadCV = () => {
    window.open('/NidhiPatel_Resume.pdf', '_blank');
  };

  return (
    <div className={styles.appBackground}>
      <div className={styles.stars}></div>
      <div className={dark ? styles.dark : styles.light} style={{ position: "relative", zIndex: 2 }}>
        <Header
          navLinks={navLinks}
          onDownloadCV={handleDownloadCV}
          dark={dark}
          toggleTheme={() => setDark(d => !d)}
        />
        <About />
        <Education />
        <Experience />
        <Skills />
        <button className={styles.toggleBtn} onClick={() => setShowProjects(v => !v)}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>
        {showProjects && <Projects />}
        <Contact />
        <h1></h1>
      </div>
    </div>
  );
}

export default App;