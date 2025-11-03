import { SelectContext } from './contextSelect';
import { useContext } from 'react';

export const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('Select context not found!');
  return context;
};
