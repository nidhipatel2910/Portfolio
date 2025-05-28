import React from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ dark, toggleTheme }) => (
  <button
    type="button"
    className={styles.themeToggleBtn}
    onClick={toggleTheme}
    aria-label="Toggle dark mode"
    title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
  >
    {dark ? "🌙" : "☀️"}
  </button>
);

export default ThemeToggle;