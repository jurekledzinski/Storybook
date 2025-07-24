import React, { useState } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: 'light' | 'dark';
};

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeContextType['mode']>(theme);

  const onToggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ mode, onToggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
