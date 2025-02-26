import { LabelProps } from './types';
import styles from './Label.module.css';

export const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
