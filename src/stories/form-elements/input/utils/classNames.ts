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
    stylesInput[variant],
    stylesInput[size],
    disabled ? stylesInput['disabled'] : '',
    startIcon ? stylesInput['startIcon'] : '',
    endIcon || isPending ? stylesInput['endIcon'] : '',
    divider && variant === 'basic' ? stylesInput['divider'] : '',
    divider && variant === 'outlined' ? stylesInput['divider'] : '',
    isError === true ? stylesInput['inValid'] : '',
    isError === false ? stylesInput['valid'] : '',
    readOnly ? stylesInput['readOnly'] : ''
  ),
  startIcon: classNames(stylesInput.startIcon),
  endIcon: classNames(stylesInput.endIcon),
  statusIcon: classNames(stylesInput.endIcon),
});

export const getClassNamesInput = (
  variant: Variant = 'basic',
  size: Size = 'size-sm',
  isError?: boolean
) => ({
  fieldset: classNames(
    stylesInput.fieldset,
    stylesInput[variant] || '',
    stylesInput[size] || '',
    isError === true ? stylesInput['inValid'] : '',
    isError === false ? stylesInput['valid'] : ''
  ),
  input: classNames(stylesInput.input, stylesInput[size] || ''),
  legend: classNames(stylesInput.legend, stylesInput[size] || ''),
  textarea: classNames(stylesInput.textarea, stylesInput[size] || ''),
});
