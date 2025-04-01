import { createContext } from 'react';
import { PopOverContext } from './types';
import { Option } from '../types';

export const ContextPopOver = createContext<PopOverContext<Option>>({
  parentRef: null,
});
