import { createContext } from 'react';

export type ThemeContextType = {
  mode: null | 'light' | 'dark';
  setMode?: (mode: 'light' | 'dark') => void;
};

export const ThemeContext = createContext<ThemeContextType>({ mode: null });
