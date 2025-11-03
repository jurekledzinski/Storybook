import styles from '../Select.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { SelectOptionClassNames, SelectTriggerClassNames } from './types';

export const selectTriggerClassNames: SelectTriggerClassNames = (params) => {
  const { size = 'size-sm', isError, variant = 'basic' } = params;

  return generateClassNames(styles, {
    trigger: true,
    inValid: isError === true,
    valid: isError === false,
    [`${size}`]: Boolean(size),
    [`${variant}`]: Boolean(variant),
  });
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
