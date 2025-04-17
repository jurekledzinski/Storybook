import { BaseButtonProps } from '@src/stories/buttons/button';
import { FileMimeType, MaxSize } from '@src/stories/types';
import { InputHTMLAttributes } from 'react';

type OmittedProps = 'onError' | 'size' | 'onClick' | 'color';

type InputFile = Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps>;

type Type = 'amount' | 'size' | 'type';

export type OnError = (type: Type, details: string, name?: string) => void;

export interface FileInputProps extends InputFile, BaseButtonProps {
  onError: OnError;
  allowTypes?: FileMimeType[];
  maxAmount?: number;
  maxSize?: MaxSize;
}
