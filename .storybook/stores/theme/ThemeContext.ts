import { createContext } from 'react';

export type ThemeContextType = {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
