import stylesInput from '../styles/Styles.module.css';
import { generateClassNames } from '@src/stories/helpers';
import { GetClassNamesInput, GetClassNamesInputWrapper } from './types';

export const getClassNamesInputWrapper: GetClassNamesInputWrapper = (
  params
) => {
  const {
    as,
    disabled,
    divider,
    endIcon,
    isError,
    size = 'size-sm',
    readOnly,
    startIcon,
    variant = 'basic',
    isPending,
    className,
  } = params;

  return {
    inputWrapper: generateClassNames(stylesInput, {
      wrapper: true,
      focused: Boolean(className),
      [`wrapper-${variant}`]: Boolean(variant),
      'wrapper-disabled': Boolean(disabled),
      'wrapper-inValid': isError === true,
      'wrapper-valid': isError === false,
      'wrapper-startIcon': Boolean(startIcon),
      'wrapper-endIcon': Boolean(endIcon) || Boolean(isPending),
      'wrapper-divider':
        (Boolean(divider) && variant === 'basic') ||
        (Boolean(divider) && variant === 'outlined'),
      'wrapper-text': as === 'input',
      'wrapper-area': as === 'textarea',
    }),

    startIcon: generateClassNames(stylesInput, {
      startIcon: true,
      [`startIcon-${size}`]: Boolean(size),
      [`startIcon-${variant}`]: Boolean(variant),
      'startIcon-disabled': Boolean(disabled),
      'startIcon-read-only': Boolean(readOnly),
    }),

    endIcon: generateClassNames(stylesInput, {
      endIcon: true,
      [`endIcon-${size}`]: Boolean(size),
      [`endIcon-${variant}`]: Boolean(variant),
      'endIcon-disabled': Boolean(disabled),
      'endIcon-read-only': Boolean(readOnly),
    }),
    statusIcon: generateClassNames(stylesInput, {
      endIcon: true,
      [`endIcon-${size}`]: Boolean(size),
      [`endIcon-${variant}`]: Boolean(variant),
      'endIcon-disabled': Boolean(disabled),
      'endIcon-inValid': isError === true,
      'endIcon-valid': isError === false,
    }),
  };
};

export const getClassNamesInput: GetClassNamesInput = (params) => {
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
