import { TextInputProps } from '../types';

type AsElement = TextInputProps['as'];
type TypeInput = TextInputProps['type'];

export const getInputProps = (
  as: AsElement,
  type: TypeInput,
  isError?: boolean
) => {
  if (as === 'input') return { type, isError };
  if (as === 'textarea') return { cols: 4, rows: 6, isError };
  return {};
};
