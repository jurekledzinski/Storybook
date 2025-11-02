import stylesInput from '../styles/Styles.module.css';
import { classNames, generateClassNames } from '@src/stories/helpers';
import {
  CommonInputClassNames,
  IconInputWrapperClassNames,
  InputBaseClassNames,
  InputClassNames,
  InputWrapperClassNames,
  TextareaClassNames,
} from './types';

export const inputWrapperClassNames: InputWrapperClassNames = (params) => {
  const { as, className, disabled, isError, isEndIcon, isStartIcon, isPending, variant } = params;

  return classNames(
    generateClassNames(stylesInput, {
      wrapper: true,
      [`wrapper-${variant}`]: Boolean(variant),
      'wrapper-disabled': Boolean(disabled),
      'wrapper-inValid': isError === true,
      'wrapper-valid': isError === false,
      'wrapper-startIcon': Boolean(isStartIcon),
      'wrapper-endIcon': Boolean(isEndIcon) || Boolean(isPending),
      'wrapper-text': as === 'input',
      'wrapper-area': as === 'textarea',
    }),
    className ?? ''
  );
};

export const iconInputWrapperClassNames: IconInputWrapperClassNames = (params) => {
  const { className, size, type, variant } = params;

  return classNames(
    generateClassNames(stylesInput, {
      [`${type}`]: true,
      [`${type}-${size}`]: Boolean(size),
      [`${type}-${variant}`]: Boolean(variant),
    }),
    className ?? ''
  );
};

const commonClassNames: CommonInputClassNames = (params) => {
  const { size = 'size-sm', isError, variant = 'basic', type } = params;

  return generateClassNames(stylesInput, {
    [type]: true,
    [`${type}-${size}`]: Boolean(size),
    [`${type}-${variant}`]: Boolean(variant),
    [`${type}-inValid`]: isError === true,
    [`${type}-valid`]: isError === false,
  });
};

export const inputBaseClassNames: InputBaseClassNames = (params) => {
  const { size = 'size-sm', variant = 'basic', disabled } = params;

  return {
    fieldset: generateClassNames(stylesInput, {
      fieldset: true,
      [`fieldset-${size}`]: Boolean(size),
      [`fieldset-${variant}`]: Boolean(variant),
      'fieldset-disabled': Boolean(disabled),
    }),
    legend: commonClassNames({ ...params, type: 'legend' }),
  };
};

export const inputClassNames: InputClassNames = (params) => {
  return commonClassNames({ ...params, type: 'input' });
};

export const textareaClassNames: TextareaClassNames = (params) => {
  return commonClassNames({ ...params, type: 'textarea' });
};
