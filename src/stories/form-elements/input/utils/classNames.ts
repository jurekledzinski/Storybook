import stylesInput from '../styles/Styles.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
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
  } = params;

  return {
    inputWrapper: classNames(
      stylesInput.wrapper,
      generateClassNames(stylesInput, {
        [`wrapper-${variant}`]: true,
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
      })
    ),
    startIcon: classNames(
      stylesInput.startIcon,
      generateClassNames(stylesInput, {
        [`startIcon-${size}`]: true,
        [`startIcon-${variant}`]: true,
        'startIcon-disabled': Boolean(disabled),
        'startIcon-read-only': Boolean(readOnly),
      })
    ),
    endIcon: classNames(
      stylesInput.endIcon,
      generateClassNames(stylesInput, {
        [`endIcon-${size}`]: true,
        [`endIcon-${variant}`]: true,
        'endIcon-disabled': Boolean(disabled),
        'endIcon-read-only': Boolean(readOnly),
      })
    ),
    statusIcon: classNames(
      stylesInput.endIcon,
      generateClassNames(stylesInput, {
        [`endIcon-${size}`]: true,
        [`endIcon-${variant}`]: true,
        'endIcon-disabled': Boolean(disabled),
        'endIcon-inValid': isError === true,
        'endIcon-valid': isError === false,
      })
    ),
  };
};

export const getClassNamesInput: GetClassNamesInput = (params) => {
  const { size = 'size-sm', isError, variant = 'basic', disabled } = params;
  return {
    fieldset: classNames(
      stylesInput.fieldset,
      generateClassNames(stylesInput, {
        [`fieldset-${size}`]: true,
        [`fieldset-${variant}`]: true,
        'fieldset-disabled': Boolean(disabled),
      })
    ),
    input: classNames(
      stylesInput.input,
      generateClassNames(stylesInput, {
        [`input-${size}`]: true,
        [`input-${variant}`]: true,
        'input-inValid': isError === true,
        'input-valid': isError === false,
      })
    ),
    legend: classNames(
      stylesInput.legend,
      generateClassNames(stylesInput, {
        [`legend-${size}`]: true,
        [`legend-${variant}`]: true,
        'legend-inValid': isError === true,
        'legend-valid': isError === false,
      })
    ),
    textarea: classNames(
      stylesInput.textarea,
      generateClassNames(stylesInput, {
        [`textarea-${size}`]: true,
        [`textarea-${variant}`]: true,
        'textarea-inValid': isError === true,
        'textarea-valid': isError === false,
      })
    ),
  };
};
