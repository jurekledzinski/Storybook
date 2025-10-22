import styles from '../IconButton.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { IconButtonClassNames } from './types';

export const iconButtonClassNames: IconButtonClassNames = ({
  border = 'border-xs',
  className,
  contrast,
  color = 'primary',
  disabled,
  fullWidth,
  isLoading,
  radius,
  size = 'size-md',
  variant = 'contained',
}) => {
  return classNames(
    generateClassNames(styles, {
      iconButton: true,
      [border]: Boolean(border),
      [color]: Boolean(color),
      [size]: Boolean(size),
      [variant]: Boolean(variant),
      [`${color}-contrast`]: Boolean(contrast),
      [`${radius}`]: Boolean(radius),
      disabled: Boolean(disabled || isLoading),
      fullWidth: Boolean(fullWidth),
    }),
    className ?? ''
  );
};
