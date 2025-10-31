import { BaseButtonProps } from '@src/stories/buttons/button';
import { InputHTMLAttributes } from 'react';

type OmitKeys = 'onError' | 'size' | 'onClick' | 'color';

type InputFile = Omit<InputHTMLAttributes<HTMLInputElement>, OmitKeys>;

type Type = 'amount' | 'size' | 'type';

export type OnError = (type: Type, details: string, name?: string) => void;

export interface FileInputProps extends InputFile, BaseButtonProps {}
