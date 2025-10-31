import styles from '../RadioGroup.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { RadioClassNames, RadioGroupClassNames } from './types';

export const radioClassNames: RadioClassNames = (params) => {
  const { color, disabled, readOnly, size, variant } = params;

  return {
    label: generateClassNames(styles, {
      label: true,
      disabled: Boolean(disabled),
      readOnly: Boolean(readOnly),
      [`${size}`]: Boolean(size),
    }),
    input: styles.input,
    radio: generateClassNames(styles, {
      radioCustom: true,
      readOnly: Boolean(readOnly),
      [`${color}`]: Boolean(color),
      [`${size}`]: Boolean(size),
      [`${variant}`]: Boolean(variant),
    }),
  };
};

export const radioGroupClassNames: RadioGroupClassNames = (params) => {
  const { spacing, fullWidth, orientation } = params;

  return generateClassNames(styles, {
    radioGroup: true,
    fullWidth: Boolean(fullWidth),
    [`${orientation}`]: Boolean(orientation),
    [`${spacing}`]: Boolean(spacing),
  });
};
