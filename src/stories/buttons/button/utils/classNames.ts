import styles from '../styles/Button.module.css';
import { ButtonClassNames } from './types';
import { generateClassNames } from '@src/stories/helpers';

export const buttonClassNames: ButtonClassNames = ({
  border = 'border-xs',
  color = 'primary',
  disabled,
  fullWidth,
  isLoading,
  radius,
  size = 'size-md',
  variant = 'contained',
}) => {
  return generateClassNames(styles, {
    button: true,
    [border]: Boolean(border),
    [color]: Boolean(color),
    [size]: Boolean(size),
    [variant]: Boolean(variant),
    [`${radius}`]: Boolean(radius),
    disabled: Boolean(disabled || isLoading),
    fullWidth: Boolean(fullWidth),
  });
};
