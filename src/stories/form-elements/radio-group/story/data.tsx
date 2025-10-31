import { RadioData } from './types';

export const getRadioData = (
  variant: 'filled' | 'outlined' = 'filled'
): RadioData[] => [
  {
    id: 'apple',
    name: 'fruits',
    color: 'primary',
    variant,
  },
  {
    id: 'banan',
    name: 'fruits',
    color: 'secondary',
    variant,
  },
  {
    id: 'mango',
    name: 'fruits',
    color: 'success',
    variant,
  },
  {
    id: 'lemon',
    name: 'fruits',
    color: 'warning',
    variant,
  },
  {
    id: 'kiwi',
    name: 'fruits',
    color: 'negative',
    variant,
  },
];
