import { Color, Icon, Radius, Size, Variant } from '@src/stories/types';
import { HTMLAttributes, MouseEventHandler } from 'react';

type ChipVariant = Exclude<Variant, 'text'>;

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  color?: Color;
  deleteIcon?: Icon;
  label?: React.ReactNode;
  radius?: Radius;
  size?: Size;
  startIcon?: Icon;
  startIconSrc?: string;
  variant?: ChipVariant;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
}
