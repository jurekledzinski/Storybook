import styles from './Input.module.css';
import { BaseInputProps } from './types';
import { classNames } from '../../helpers/classNames';

type Variant = BaseInputProps<HTMLInputElement>['variant'];

export const classNamesInput = (variant: Variant) => {
  return classNames(styles.input, styles[variant as keyof typeof styles]);
};

export const classNamesTextarea = (variant: Variant) => {
  return classNames(styles.textarea, styles[variant as keyof typeof styles]);
};

export const classNamesLegend = (variant: Variant) => {
  return classNames(styles.legend, styles[variant as keyof typeof styles]);
};
