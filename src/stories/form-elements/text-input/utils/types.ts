import { InputVariant, Size } from '@src/stories/types';
import { TextInputProps } from '../types';

export type GroupInputProps = (params: {
  as: TextInputProps['as'];
  type: TextInputProps['type'];
  isError?: boolean;
  size?: Size;
  variant?: InputVariant;
}) => object;
