import { InputWrapperContext } from './contextInputWrapper';
import { useContext } from 'react';

export const useInputWrapper = () => {
  const context = useContext(InputWrapperContext);
  if (!context) throw new Error('InputWrapper context not found!');
  return context;
};
