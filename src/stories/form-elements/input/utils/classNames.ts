import stylesInput from '../styles/Styles.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import {
  IconInputWrapperClassNames,
  IconStatusClassNames,
  InputClassNames,
  InputWrapperClassNames,
} from './types';

export const inputWrapperClassNames: InputWrapperClassNames = (params) => {
  const { as, className, disabled, isError, variant } = params;

  return classNames(
    generateClassNames(stylesInput, {
      wrapper: true,
      //   focused: Boolean(className),
      [`wrapper-${variant}`]: Boolean(variant),
      'wrapper-disabled': Boolean(disabled),
      'wrapper-inValid': isError === true,
      'wrapper-valid': isError === false,
      'wrapper-startIcon': true,
      'wrapper-endIcon': true,

      // 'wrapper-startIcon': Boolean(startIcon),
      // 'wrapper-endIcon': Boolean(endIcon) || Boolean(isPending),
      // 'wrapper-divider-end':
      //   (Boolean(dividerEnd) && variant === 'basic') ||
      //   (Boolean(dividerEnd) && variant === 'outlined'),
      // 'wrapper-divider-start':
      //   (Boolean(dividerStart) && variant === 'basic') ||
      //   (Boolean(dividerStart) && variant === 'outlined'),
      'wrapper-text': as === 'input',
      'wrapper-area': as === 'textarea',
    }),
    className ?? ''
  );
};

export const iconInputWrapperClassNames: IconInputWrapperClassNames = (
  params
) => {
  const { disabled, readOnly, size, type, variant } = params;

  return generateClassNames(stylesInput, {
    [`${type}`]: true,
    [`${type}-${size}`]: Boolean(size),
    [`${type}-${variant}`]: Boolean(variant),
    [`${type}-disabled`]: Boolean(disabled),
    [`${type}-read-only`]: Boolean(readOnly),
  });
};

export const iconStatusClassNames: IconStatusClassNames = (params) => {
  const { disabled, isError, size, variant } = params;

  return generateClassNames(stylesInput, {
    endIcon: true,
    [`endIcon-${size}`]: Boolean(size),
    [`endIcon-${variant}`]: Boolean(variant),
    'endIcon-disabled': Boolean(disabled),
    'endIcon-inValid': isError === true,
    'endIcon-valid': isError === false,
  });
};

export const inputClassNames: InputClassNames = (params) => {
  const { size = 'size-sm', isError, variant = 'basic', disabled } = params;

  return {
    fieldset: generateClassNames(stylesInput, {
      fieldset: true,
      [`fieldset-${size}`]: Boolean(size),
      [`fieldset-${variant}`]: Boolean(variant),
      'fieldset-disabled': Boolean(disabled),
    }),
    input: generateClassNames(stylesInput, {
      input: true,
      [`input-${size}`]: Boolean(size),
      [`input-${variant}`]: Boolean(variant),
      'input-inValid': isError === true,
      'input-valid': isError === false,
    }),
    legend: generateClassNames(stylesInput, {
      legend: true,
      [`legend-${size}`]: Boolean(size),
      [`legend-${variant}`]: Boolean(variant),
      'legend-inValid': isError === true,
      'legend-valid': isError === false,
    }),
    textarea: generateClassNames(stylesInput, {
      textarea: true,
      [`textarea-${size}`]: Boolean(size),
      [`textarea-${variant}`]: Boolean(variant),
      'textarea-inValid': isError === true,
      'textarea-valid': isError === false,
    }),
  };
};
