import { ButtonHTMLAttributes } from 'react';
import { SelectTriggerProps } from '../select-trigger';

type PickKeys = 'label' | 'size' | 'variant' | 'isError' | 'disabled';

export interface SelectButtonProps
  extends Pick<SelectTriggerProps, PickKeys>,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'value'> {
  placeholder?: string;
  value?: string | string[];
}
