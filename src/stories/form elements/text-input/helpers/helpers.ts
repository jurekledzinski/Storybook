import { TextInputProps } from '../types';

type AsElement = TextInputProps['as'];
type TypeInput = TextInputProps['type'];

export const getInputClassNames = (
  startIcon?: boolean,
  endIcon?: boolean,
  isError?: boolean,
  isPending?: boolean
) => {
  const classes = ['noBorder'];
  if (startIcon) classes.push('startIcon');
  if (isError) classes.push('inValid');
  if (!isError && isError !== undefined) classes.push('valid');
  if (endIcon || isError !== undefined || isPending) classes.push('endIcon');
  return classes;
};

export const getInputProps = (as: AsElement, type: TypeInput) => {
  if (as === 'input') return { type };
  if (as === 'textarea') return { cols: 4, rows: 6 };
  return {};
};
