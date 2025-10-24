import { Color, Icon, Radius, Size, Variant } from '@src/stories/types';
import { HTMLAttributes, MouseEventHandler } from 'react';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  color?: Color;
  deleteIcon?: Icon;
  label?: React.ReactNode;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  radius?: Radius;
  size?: Size;
  startIcon?: Icon;
  startIconSrc?: string;
  variant?: Exclude<Variant, 'text'>;
}
