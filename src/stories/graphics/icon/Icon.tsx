import styles from './Icon.module.css';
import { classNames } from '../../helpers/classNames';
import { IconProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

export const Icon = ({ color, ...props }: IconProps) => {
  const classNamesIcon = classNames(
    styles.icon,
    styles[color as keyof typeof styles]
  );

  return (
    <span className={classNamesIcon}>
      <FontAwesomeIcon {...props} />
    </span>
  );
};
