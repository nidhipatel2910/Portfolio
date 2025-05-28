import React from 'react';
import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle'; // adjust path if needed

const Header = ({ navLinks, dark, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NP</div>
      <nav>
        <ul className={styles.navList}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className={styles.cvBtn}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span style={{ fontSize: '1.5rem', verticalAlign: 'middle' }}>⬇️</span> Download CV
        </a>
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
