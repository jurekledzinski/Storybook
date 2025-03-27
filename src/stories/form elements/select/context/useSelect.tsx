import { useContext } from 'react';
import { ContextSelect } from './context';

export const useSelect = () => {
  const context = useContext(ContextSelect);

  if (!context) throw new Error('SelectProvider is not around the context');

  return context;
};
