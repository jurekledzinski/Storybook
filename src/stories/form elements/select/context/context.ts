import { createContext } from 'react';
import { SelectContext } from './types';
import { Option } from '../types';

export const ContextSelect = createContext<SelectContext<Option>>({
  position: { x: 0, y: 0, h: 0, w: 0 },
});
