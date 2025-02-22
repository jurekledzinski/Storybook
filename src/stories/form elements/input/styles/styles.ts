import stylesIcons from './InputWrapper.module.css';
import stylesInput from './Input.module.css';
import { BaseInputProps } from '../types';
import { classNames } from '../../../helpers/classNames';

type Variant = BaseInputProps<HTMLInputElement>['variant'];
type Size = BaseInputProps<HTMLInputElement>['size'];
type ClassName = BaseInputProps<HTMLInputElement>['className'];

export const getClassNamesInputWrapper = (
  variant: Variant = 'basic',
  size: Size = 'small',
  isError?: boolean
) => ({
  inputWrapper: classNames(
    stylesIcons.inputWrapper,
    stylesIcons[variant as keyof typeof stylesIcons],
    isError === true
      ? stylesIcons['inValid']
      : isError === false
      ? stylesIcons['valid']
      : ''
  ),
  startIcon: classNames(
    stylesIcons.startIcon,
    stylesIcons[variant],
    stylesIcons[size]
  ),
  endIcon: classNames(
    stylesIcons.endIcon,
    stylesIcons[variant],
    stylesIcons[size]
  ),
  statusIcon: classNames(
    stylesIcons.endIcon,
    isError === true ? stylesIcons['inValid'] : stylesIcons['valid']
  ),
});

export const getClassNamesInput = (
  variant: Variant = 'basic',
  size: Size = 'small',
  className: ClassName
) => ({
  input: classNames(
    stylesInput.input,
    stylesInput[variant] || '',
    stylesInput[size] || '',
    className ? className.map((i) => stylesInput[i] || i).join(' ') : ''
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
    className ? className.map((i) => stylesInput[i] || i).join(' ') : ''
  ),
  textarea: classNames(
    stylesInput.textarea,
    stylesInput[variant] || '',
    stylesInput[size] || '',
    className ? className.map((i) => stylesInput[i] || i).join(' ') : ''
  ),
});
