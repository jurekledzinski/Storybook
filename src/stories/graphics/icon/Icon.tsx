import styles from './Icon.module.css';
import { classNames } from '../../helpers/classNames';
import { IconProps } from './types';

export const Icon = ({
  className,
  icon,
  size = 16,
  color = 'white',
  weight = 'fill',
  ...props
}: IconProps) => {
  const IconComponent = icon!;

  return (
    <IconComponent
      size={size}
      color={color}
      className={classNames(styles.icon, className!)}
      weight={weight}
      {...props}
    />
  );
};
