import { useContext } from 'react';
import { AccordionContext } from './context';

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('Accordion context not found!');
  return context;
};
