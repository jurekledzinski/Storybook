import React, { useState } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: 'light' | 'dark';
};

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeContextType['mode']>(theme);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
