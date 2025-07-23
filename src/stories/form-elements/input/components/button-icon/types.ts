import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@src/stories/types';

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon | string;
}
