import { ContextInputWrapper } from './types';
import { createContext } from 'react';

export const InputWrapperContext = createContext<
  ContextInputWrapper | undefined
>(undefined);
