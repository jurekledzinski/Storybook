import stylesInput from '../styles/Input.module.css';
import { BaseInputProps } from '../types';
import { classNames } from '@src/stories/helpers';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Variant = BaseInputProps<HTMLInputElement>['variant'];
type Size = BaseInputProps<HTMLInputElement>['size'];

export const getClassNamesInputWrapper = (
  variant: Variant = 'basic',
  size: Size = 'size-sm',
  isError?: boolean,
  disabled?: boolean,
  readOnly?: boolean,
  startIcon?: IconProp,
  endIcon?: IconProp,
  isPending?: boolean,
  divider?: boolean
) => ({
  inputWrapper: classNames(
    stylesInput.inputWrapper,
    stylesInput[variant] || '',
    isError === true
      ? stylesInput['inValid']
      : isError === false
      ? stylesInput['valid']
      : '',
    disabled ? stylesInput['disabled'] : '',
    startIcon ? stylesInput['startIcon'] : '',
    endIcon || isPending ? stylesInput['endIcon'] : '',
    (divider && variant === 'basic') || (divider && variant === 'outlined')
      ? stylesInput['divider']
      : ''
  ),
  startIcon: classNames(
    stylesInput.startIcon,
    stylesInput[variant],
    stylesInput[size],
    disabled ? stylesInput['disabled'] : '',
    readOnly ? stylesInput['readOnly'] : ''
  ),
  endIcon: classNames(
    stylesInput.endIcon,
    stylesInput[variant],
    stylesInput[size],
    disabled ? stylesInput['disabled'] : '',
    readOnly ? stylesInput['readOnly'] : ''
  ),
  statusIcon: classNames(
    stylesInput.endIcon,
    stylesInput[variant],
    stylesInput[size],
    isError === true
      ? stylesInput['inValid']
      : isError === false
      ? stylesInput['valid']
      : '',
    disabled ? stylesInput['disabled'] : ''
  ),
});

export const getClassNamesInput = (
  variant: Variant = 'basic',
  size: Size = 'size-sm',
  isError?: boolean
) => ({
  input: classNames(
    stylesInput.input,
    stylesInput[variant] || '',
    stylesInput[size] || '',
    isError === true
      ? stylesInput['inValid']
      : isError === false
      ? stylesInput['valid']
      : ''
  ),
  fieldset: classNames(
    stylesInput.fieldset,
    stylesInput[variant] || '',
    stylesInput[size] || ''
  ),
  legend: classNames(
    stylesInput.legend,
    stylesInput[variant] || '',
    stylesInput[size] || '',
    isError === true
      ? stylesInput['inValid']
      : isError === false
      ? stylesInput['valid']
      : ''
  ),
  textarea: classNames(
    stylesInput.textarea,
    stylesInput[variant] || '',
    stylesInput[size] || '',
    isError === true
      ? stylesInput['inValid']
      : isError === false
      ? stylesInput['valid']
      : ''
  ),
});
