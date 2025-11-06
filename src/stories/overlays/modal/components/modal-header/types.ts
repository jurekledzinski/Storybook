import { Color } from '@src/stories/types';
import { MouseEventHandler } from 'react';

export type ModalHeaderProps = {
  title: string;
  color?: Color;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'contained' | 'outlined';
};
