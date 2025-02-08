import styles from './Icon.module.css';
import { classNames } from '../../helpers/classNames';
import { IconProps } from './types';

export const Icon = ({
  className,
  icon,
  size = 20,
  schemaSize,
  color = 'white',
  weight = 'fill',
  ...props
}: IconProps) => {
  const IconComponent = icon!;

  const sizesSchema = {
    small: 16,
    medium: 16,
    large: 18,
  };

  return (
    <IconComponent
      size={schemaSize ? sizesSchema[schemaSize] : size}
      color={color}
      className={classNames(styles.icon, className!)}
      weight={weight}
      {...props}
    />
  );
};
