import { useContext } from 'react';
import { ContextPopOver } from './context';

export const usePopOver = () => {
  const context = useContext(ContextPopOver);

  if (!context) {
    throw new Error('PopOverProvider is not around the context');
  }

  return context;
};
