import React from 'react';
import { BaseButtonProps } from '@src/stories/buttons/button';
import { FileMimeType, MaxSize } from '@src/stories/types';

export type OnError = (
  type: 'amount' | 'size' | 'type',
  details: string,
  name?: string
) => void;

export interface FileInputProps extends BaseButtonProps {
  allowTypes: FileMimeType[];
  name?: string;
  accept?: string;
  multiple?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onError: OnError;
  ref?: React.RefObject<HTMLInputElement>;
  maxAmount?: number;
  maxSize?: MaxSize;
}
