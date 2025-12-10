import styles from './Header.module.css';
import { useLayoutEffect, useState } from 'react';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const onToggleTheme = () => {
    const value = theme === 'light' ? 'dark' : 'light';
    setTheme(value);
    localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  };

  return (
    <header className={styles.header}>
      <button className={styles.button} onClick={onToggleTheme}>
        Theme: {theme}
      </button>
    </header>
  );
};
