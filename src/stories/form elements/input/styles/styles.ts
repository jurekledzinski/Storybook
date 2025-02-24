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
  isError?: boolean,
  disabled?: boolean,
  readOnly?: boolean
) => ({
  inputWrapper: classNames(
    stylesIcons.inputWrapper,
    stylesIcons[variant] || '',
    isError === true
      ? stylesIcons['inValid']
      : isError === false
      ? stylesIcons['valid']
      : '',
    disabled === true ? stylesIcons['disabled'] : disabled === false ? '' : ''
  ),
  startIcon: classNames(
    stylesIcons.startIcon,
    stylesIcons[variant],
    stylesIcons[size],
    disabled === true ? stylesIcons['disabled'] : disabled === false ? '' : '',
    readOnly === true ? stylesIcons['readOnly'] : readOnly === false ? '' : ''
  ),
  endIcon: classNames(
    stylesIcons.endIcon,
    stylesIcons[variant],
    stylesIcons[size],
    disabled === true ? stylesIcons['disabled'] : disabled === false ? '' : '',
    readOnly === true ? stylesIcons['readOnly'] : readOnly === false ? '' : ''
  ),
  statusIcon: classNames(
    stylesIcons.endIcon,
    stylesIcons[variant],
    stylesIcons[size],
    isError === true
      ? stylesIcons['inValid']
      : isError === false
      ? stylesIcons['valid']
      : '',
    disabled === true ? stylesIcons['disabled'] : disabled === false ? '' : ''
  ),
});

export const getClassNamesInput = (
  variant: Variant = 'basic',
  size: Size = 'small',
  className: ClassName,
  isError?: boolean
) => ({
  input: classNames(
    stylesInput.input,
    stylesInput[variant] || '',
    stylesInput[size] || '',
    className ? className.map((i) => stylesInput[i] || i).join(' ') : '',
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
    className ? className.map((i) => stylesInput[i] || i).join(' ') : '',
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
    className ? className.map((i) => stylesInput[i] || i).join(' ') : '',
    isError === true
      ? stylesInput['inValid']
      : isError === false
      ? stylesInput['valid']
      : ''
  ),
});
