import styles from '../Select.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import { SelectOptionClassNames, SelectTriggerClassNames } from './types';

export const selectTriggerClassNames: SelectTriggerClassNames = (params) => {
  const { className, size = 'size-sm', isError, placeholder, value, variant = 'basic' } = params;

  return classNames(
    generateClassNames(styles, {
      trigger: true,
      inValid: isError === true,
      valid: isError === false,
      active: Boolean(placeholder) || Boolean(value),
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
    className ?? ''
  );
};

export const selectOptionClassNames: SelectOptionClassNames = (params) => {
  const { multiple, optionValue, value } = params;

  const isSelected = multiple
    ? Array.isArray(value) && value.includes(optionValue)
    : value === optionValue;

  return generateClassNames(styles, {
    listItem: true,
    selected: isSelected,
  });
};
